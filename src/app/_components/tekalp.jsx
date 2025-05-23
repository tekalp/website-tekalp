"use client"

import Image from 'next/image'

import NewwhoTekalp from '../../../public/assets/homepage/NewwhoTekalp.webp'

import newslide1 from '../../../public/assets/homepage/newslide1.webp'
import newslide2 from '../../../public/assets/homepage/newslide2.webp'
import slide4 from '../../../public/assets/homepage/slide4.webp'

import webi from '../../../public/assets/homepage/webi.svg'
import openSide from '../../../public/assets/homepage/openSide.svg'

import customArrow from '../../../public/assets/essentials-icons/custom-arrow.svg'

import partner1 from '../../../public/assets/homepage/partner1.webp'
import partner2 from '../../../public/assets/homepage/partner2.webp'
import partner3 from '../../../public/assets/homepage/partner3.webp'
import partner4 from '../../../public/assets/homepage/partner4.webp'
import partner5 from '../../../public/assets/homepage/partner5.webp'
import partner6 from '../../../public/assets/homepage/partner6.webp'

import beton from '../../../public/assets/homepage/beton.webp'
import pc from '../../../public/assets/homepage/pc.webp'


import resilience from '../../../public/assets/homepage/resilience.svg'
import alert from '../../../public/assets/homepage/alert.svg'
import solutions from '../../../public/assets/homepage/solutions.svg'

import rimnat from '../../../public/assets/blog/rimnat.png'
import blocarme from '../../../public/assets/homepage/blocarmenewwtestvrai.webp'

import illustation1 from '../../../public/assets/homepage/illustration1.webp'
import tree from '../../../public/assets/homepage/tree.svg'


import Footer from './layout/footer'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { S1CardCol1 } from './auto_carousel'
import { CardActu } from './blogs'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Next2, Prev2, usePrevNextButtons } from '../_utils/emblaButton'

import { animate, motion, useInView } from "framer-motion";
import Header from './layout/header'
import { DotButton, useDotButton } from '../_utils/emblaDot'
import { CustomTitle } from './ui/title'

export default function TekalpFeature({articles}) {
    const [lastWebinaire, setLastWebinaire] = useState(null)
    const today = new Date();

    useEffect(() => {
      const getEventDate = (event) => {
        const dateField = event?.metafields?.find(mf => mf?.key === "date_webinaire");
        return dateField ? new Date(dateField.value) : null;
      };
      
      const futureEvents = articles?.filter(a => a.tags[0] === "event")
        .filter(e => {
          const date = getEventDate(e);
          return date && date > today;
        })
        .sort((a, b) => getEventDate(b) - getEventDate(a));

      setLastWebinaire((futureEvents?.length > 0 && futureEvents) 
        ? futureEvents
        : null
      )

    }, [articles])
    
    const informations = useRef(null);
    const [isIntersecting3, setIsIntersecting3] = useState(false);
    useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {setIsIntersecting3(entry.isIntersecting)}, {threshold:0.3})
        observer.observe(informations.current);
        return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isIntersecting3]);

    const values = [
      { from: 0, to: 2021, text: "  Création de TEKALP" },
      { from: 0, to: 20, text: "D’augmentation d’activité par an", prefix: "+", suffix: "%" },
      { from: 0, to: 20, text: "Gestions d’urgences", prefix: "+" },
    ];

    const ref = useRef(null); // Référence unique sur le conteneur global
    const isInView = useInView(ref, { once: true });

    const nodesRef = useRef([]);

    useEffect(() => {
      if (!isInView) return;
      
      values.forEach((value, index) => {
        const node = nodesRef.current[index];
        if (!node) return;
        const controls = animate(value.from, value.to, {
          duration: 1.5,
          onUpdate(v) {
            node.textContent = `${value.prefix || ""}${v.toFixed(0)}${value.suffix || ""}`;
          },
        });
  
        return () => controls.stop();
      });
    }, [isInView]);
  

  return (
    <>
        <Header />
        <main id='mainIndex' className='overflow-x-hidden flex flex-col'>
        
            <section ref={informations} className='w-[100vw] min-h-withOutHeader md:min-h-[450px] overflow-hidden h-withOutHeader md:h-auto relative hxl:min-h-full hxl550:min-h-[450px]'>
                <BoxSwiperHome>
                    <BowSlider image={newslide2} title1="FOURNISSEUR" title2="DE SOLUTIONS INNOVANTES" href1={lastWebinaire} href2="/company" button2="L'ENTREPRISE" />
                    <BowSlider image={newslide1} title1="GESTION" title2="DES RISQUES NATURELS" href1={lastWebinaire} href2="/solutions/bloc-arme" button2="NOS SOLUTIONS"/>
                    <BowSlider image={slide4} title1="PROTÉGEZ" title2="VOS INFRASTRUCTURES" href1={lastWebinaire} href2="/company" button2="L'ENTREPRISE" />
                </BoxSwiperHome>
            </section>

            <section className='py-8 bg-new-black flex flex-col gap-6 items-center px-3'>
                <div className='flex w-fit flex-col gap-1'>
                  <h2 className='text-white font-bold text-lg md:text-base'>VOTRE PARTENAIRE</h2>
                  <div className='h-[1px] bg-[rgba(255,255,255,0.35)] w-full'></div>
                  <div className='h-[1px] bg-[rgba(255,255,255,0.35)] w-full'></div>
                </div>
                <p className='text-xl font-light md:text-lg sm:text-base md:text-center md:mb-10'>“TEKALP, votre fournisseur de solutions innovantes pour la gestion des risques naturels et la surveillance des infrastructures.”</p>
            </section>

            <section id="who" className='grid grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr] md:flex md:flex-col'>
                <div className='relative flex items-center justify-center max-h-[750px] overflow-hidden md:h-[300px] md:max-h-none'>
                  <Image src={NewwhoTekalp} alt='Photo de chantier' className='w-full h-full object-cover' />
                  <Link href="/company" className='absolute bottom-0 right-0'>
                    <button className="text-new-black bg-new-gray z-10 px-3 py-2 mt-3 font-medium flex items-center gap-3 sm:text-sm rounded-tl-md">
                      <span>EN SAVOIR PLUS</span>
                      <Image src={customArrow} alt='Flèche' />
                    </button>
                  </Link>
                </div>
                <div className='w-full h-full relative px-8 flex flex-col gap-14 justify-center text-new-black py-28 md:py-10 md:gap-8 md:px-5'>
                  <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 150, damping: 25 }} className='flex flex-col gap-2 relative w-fit'>
                    <h2 className='text-[rgb(189,189,189)] text-6xl xl:text-5xl lg:text-4xl leading-none md:text-3xl font-light'>QUI</h2>
                    <h2 className='text-7xl font-magra xl:text-6xl lg:text-5xl leading-none md:text-4xl tracking-tight font-bold'>SOMMES NOUS</h2>
                    <div className='relative -left-8 h-[1.5px] bg-new-black mt-2 w-[109%] md:w-[118%]'></div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 150, damping: 25 }} className='flex flex-col gap-4'>
                    <p>TEKALP est spécialisée dans l’accompagnement et la distribution de solutions innovantes pour la gestion des risques naturels et la surveillance des infrastructures. Nos produits facilitent la prévention des risques, protègent contre les événements climatiques et géologiques, et permettent la protection et le suivi des enjeux humains et matériels. </p>
                    <p>Grâce à notre expertise, nous proposons des outils adaptés et éprouvés pour anticiper et répondre efficacement aux défis environnementaux, renforçant ainsi la sécurité et la résilience des infrastructures critiques.</p>
                  </motion.div>
                  <div className='flex flex-col pt-5'>
                    <div ref={ref} className='flex justify-between bg-[#ededed] px-3 gap-3 relative z-10 py-5 lg:w-full lg:absolute -left-8 lg:left-0 md:-left-5 lg:bottom-21 lg:text-[15px] place-items-center md:relative md:w-screen md:bottom-0 sm:px-0 sm:text-sm rounded-tr-md rounded-br-md'>
                      {values.map((value, index) => (
                        <React.Fragment key={index}>
                          <div className="flex flex-col text-center items-center h-full justify-center w-[30%]">
                            <p
                              ref={(el) => (nodesRef.current[index] = el)}
                              className="italic text-5xl xl:text-4xl lg:text-3xl leading-none md:text-2xl tracking-tight font-medium"
                            >
                              {value.prefix || ""}{value.to}{value.suffix || ""}
                            </p>
                            <p>{value.text}</p>
                          </div>
                          {index < values.length - 1 && (
                            <div className="w-[2px] min-w-[2px] bg-[rgba(0,0,0,0.1)] h-20"></div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <div className='flex gap-2 items-center  place-self-end pb-2 pt-4 relative -left-8 lg:left-0 md:-left-5 lg:absolute lg:bottom-28 lg:right-3 md:relative md:right-0 md:bottom-0 sm:px-0 sm:text-sm'>
                      <Link href="/solutions/bloc-arme" className='font-light md:text-sm'>NOS SOLUTIONS</Link>
                      <Image src={customArrow} alt='Flèche' />
                    </div>
                  </div>
                  <div className='hidden lg:block h-[140px] md:hidden'></div>
                </div>
            </section>

            <section className='flex flex-col gap-5 w-full py-20 md:py-5 mb-28 ml'>
      <div className='flex justify-between items-end w-full relative ml-60 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-2'>
    <div className='ml-12 lg:ml-10 md:ml-0'>
      <CustomTitle title1="NOS" title2="PROMESSES" />
    </div>
  </div>

  <div className='grid grid-cols-3 gap-5 text-new-black relative max-w-[1200px] w-[95%] mx-auto justify-items-center mt-24 lg:w-full lg:px-5 sm:px-3 sm:grid-cols-1 sm:mt-10'>
    <div className='absolute h-[2px] bg-new-black w-full top-[157px] sm:hidden'></div>

    {/* Animate Cards from Left to Right */}
    {[ 
      { image: solutions, title: "Apporter des solutions adaptées", text: "Déployer des dispositifs éprouvés sur le marché, en réponse à des problématiques concrètes" },
      { image: alert, title: "Gestion d’urgence", text: "Prêt à déployer nos solutions et mettre à votre disposition notre réseau de partenaires pour une intervention dans des délais très réduits" },
      { image: resilience, title: "Résilience et innovation", text: "Combiner créativité et technologie pour construire un avenir plus résilient et proche de vous" }
    ].map((card, i) => (
      <motion.div
        key={card.title}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        className="w-full"
      >
        <PromiseCard image={card.image} title={card.title} text={card.text} />
      </motion.div>
    ))}
  </div>
</section>


            <section>
              <SolutionSwiper>
                {slides.map((slide, index) => (
                  <SolutionSlide key={index} index={index} slide={slide} />
                ))}
              </SolutionSwiper>
            </section>


            <div className=' flex flex-col mt-20'>
                <CardSwiperHome>
                  <CardSlider image={partner1} partner="PARTENAIRE DES GESTIONNAIRES  D’infrastructures DE haute montagne"  />
                  <CardSlider image={partner2} partner="PARTENAIRE DES GESTIONNAIRES ROUTIERS"  />
                  <CardSlider image={partner3} partner="PARTENAIRE DES GESTIONNAIRES AUTOROUTIERS"  />  
                  <CardSlider image={partner6} partner="PARTENAIRE DES GESTIONNAIRES FERROVIAIRES"  />
                </CardSwiperHome>
              </div>
              <section className='w-full bg-[rgba(237,237,237,1)] flex justify-center'>
                <div className='max-w-[1280px] overflow-hidden py-10 flex flex-col justify-center bg-[rgba(237,237,237,1)] w-full h-full gap-10 xl:gap-5 xl:h-auto xl:py-5 hxl:py-5 sm:gap-6'>
                  <div className='flex w-fit flex-col gap-1 px-8'>
                    <h2 className='text-new-black font-bold text-lg md:text-base'>ILS NOUS FONT CONFIANCE</h2>
                    <div className='h-[1px] bg-new-black w-full'></div>
                    <div className='h-[1px] bg-new-black w-full'></div>
                  </div>
                  <div className='w-[100vw] grid-cols-1 grid-rows-1 grid overflow-hidden h-[65px]'>
                  <div className='flex items-center'>
                      <S1CardCol1 />
                      <S1CardCol1 />
                  </div>
                  </div>
                </div>
              </section>


              <section className='flex flex-col gap-5 w-full py-20 md:pt-5 md:pb-20 max-w-[1400px] place-self-center'>
                <div className='flex justify-between items-end w-full relative'>
                  <CustomTitle title1="RESTEZ" title2="INFORMÉ" />
                  <Image src={tree} alt='Illustration 1' className='w-[550px] h-auto relative right-10 object-cover revert lg:w-[320px] md:hidden' />
                </div>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 150, damping: 25 }} className='flex flex-col gap-2 px-4 py-2 mt-5 bg-bg-gray text-new-black ml-8 w-fit sm:text-sm md:ml-0 md:w-full rounded-md'>
                  <p>Découvrez des exemples concrets de nos innovations.</p>
                  <p>Suivez nos collaborations, nos partenariats et participez à nos évènements.</p>
                </motion.div>
                <div className='grid grid-cols-3 w-full px-3 place-self-center gap-5 py-10 lg:grid-cols-2 md:grid-cols-1 md:gap-10 md:place-items-center md:py-5'>
                  {
                    articles?.slice(-3).reverse().map((article, index) => <CardActu key={article.id} id={article.id} handle={article.handle} image={article.image} title={article.title} description={article.excerptHtml} index={index} articles={articles} />)
                  }
                </div>
                <div className='flex gap-5 items-center sm:flex-col place-self-center px-3'>
                  {lastWebinaire?.length > 0 &&
                    <Link href={`/blogs/${lastWebinaire?.handle}?id=${lastWebinaire?.id}`} className=''>
                      <button className='bg-bg-gray z-10 text-new-black px-3 py-2 font-medium text-sm flex gap-3 items-center rounded-md'>
                        PARTICIPEZ A NOTRE PROCHAIN WEBINAIRE
                        <Image src={webi} alt='Webinaire' className='w-5' />
                      </button>
                    </Link>       
                  }
                       
                  <Link href="/blogs" className=''>
                    <button className='bg-new-black z-10 text-white px-3 py-2 font-medium text-sm flex gap-3 items-center rounded-md'>
                      TOUTE L’ACTUALITE TEKALP
                      <Image src={openSide} alt='Ouvrir' className='w-5' />
                    </button>
                  </Link>
                </div>
            </section>

            <Footer />
        </main>
      </>
  )
}

function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}

function PromiseCard ({image, title, text}) {
  return(
    <div className='flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-5'>
      <div className='hidden sm:flex relative bg-[rgb(236,236,236)] items-center justify-center w-[100px] h-[100px] min-w-[100px] min-h-[100px]'>
        <Image src={image} alt='Photo de chantier' className='w-[70%] h-[70%] object-cover relative z-10' />
      </div>
      <div className='h-[110px] flex items-center'>
        <Image src={image} alt='Photo de chantier' className='sm:hidden w-[110px] h-auto object-contain' />
      </div>
      <div className='w-4 h-4 bg-new-black rounded-full sm:hidden'></div>
      <div className='flex flex-col gap-3'>
        <h2 className='text-xl font-semibold lg:text-lg'>{title}</h2>
        <p className='sm:text-sm'>{text}</p>
      </div>
    </div>
  )
}

export function BoxSwiperHome ({children}) {
    const OPTIONS = { slidesToScroll: 'auto' }
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
        Autoplay({ playOnInit: true, delay: 5000 })
    ])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    return (
        <div className="w-full h-full relative">
            <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                <div className="flex touch-pan-y h-full">
                    {children}
                </div>
            </div>
            <div className="w-full absolute bottom-3 sm:bottom-[16%] flex justify-center gap-[1.2rem]">
              <div className="embla__dots2">
              {scrollSnaps.map((_, index) => (
                  <DotButton key={index} onClick={() => onDotButtonClick(index)} className={'embla__dot2'
                      .concat(
                          index === selectedIndex ? ' embla__dot2--selected' : ''
                      )}
                      />
                  ))}
              </div>
            </div>

        </div>
    )
} 

export function BowSlider ({image, title1, title2, style, href1, line=false, href2, button2, styleTitle2="text-[4vw] md:text-3xl"}) {
    return(
      <div className="flex-[0_0_100%] min-w-0 h-full w-full flex items-center justify-center relative hxlOnly:h-auto hxlOnly:relative hxlOnly:py-20 md:min-h-[65vh] sm:bg-white" >
            <Image src={image} className={`${style} object-cover w-full h-full sm:h-[87%] z-0 flex items-center absolute top-0 left-0 right-0 bottom-0`} alt="Tekalp" priority />
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 150, damping: 25 }} className='flex flex-col gap-5 z-10 relative w-full md:gap-3 sm:hidden'>
                <h1 className='text-white bg-new-black w-fit py-3 px-20 xl:px-10 sm:px-5 rounded-md text-[4vw] leading-none md:text-3xl tracking-widest font-extrabold'>{title1}</h1>
                <h1 className={`${styleTitle2} text-new-black bg-bg-gray w-fit py-3 px-20 rounded-md xl:px-10 sm:px-5 leading-none tracking-wide font-extrabold mr-3 sm:mr-0`}>{title2}</h1>
            </motion.div>
            <h1 className='absolute z-10 py-6 hidden bottom-[13%] sm:block text-white bg-new-black px-5 w-full leading-none text-2xl tracking-widest font-extrabold'>{title1} {line ? " - " : ""} {title2}</h1>
            {href1?.length > 0
              ? <Link href={`/blogs/${href1[0]?.handle}?id=${href1[0]?.id}`}>
                  <button className='bg-bg-gray z-10 text-new-black w-[220px] px-3 py-2 rounded-md font-medium absolute bottom-8 left-20 xl:left-10 sm:bottom-0 sm:h-[13%] sm:left-0 sm:w-[48%] sm:bg-[rgba(236,236,236,1)] sm:border-none'>PROCHAIN WEBINAIRE</button>
                </Link>
              : <Link href={`/blogs#event`}>
                  <button className='bg-bg-gray z-10 text-new-black w-[200px] px-3 py-2 rounded-md font-medium absolute bottom-8 left-20 xl:left-10 sm:bottom-0 sm:h-[13%] sm:left-0 sm:w-[48%] sm:bg-[rgba(236,236,236,1)] sm:border-none'>NOTRE ACTUALITÉ </button>
                </Link>
            }
            <Link href={`${href2}`}>
              <button className='bg-new-black text-white w-[200px] border px-3 py-2 rounded-md font-medium absolute bottom-8 right-20 xl:right-10 sm:bottom-0 sm:h-[13%] sm:right-0 sm:w-[48%] sm:bg-[rgba(236,236,236,1)] sm:text-new-black sm:border-none'>{button2}</button>
            </Link>
      </div>
    )
}

export function   CardSwiperHome ({children}) {
  const OPTIONS = { slidesToScroll: 'auto' }

  // const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
      Autoplay({ playOnInit: true, delay: 5000 })
    ])

    return (
      <div className="w-full h-full relative">
          <div className="overflow-hidden w-full h-full" ref={emblaRef}>
              <div className="flex touch-pan-y h-full gap-3">
                  {children}
              </div>
          </div>
      </div>
  )
} 

export function CardSlider({ image, style, partner }) {
  return (
    <div className="flex-[0_0_70%] min-w-0 h-full w-full flex items-center justify-center relative min-h-[450px] bg-bg-gray md:min-h-[350px] sm:flex-[0_0_85%] rounded-tl-xl rounded-tr-xl overflow-hidden">
      
      <Image
        src={image}
        className={`${style} object-cover w-full h-full sm:h-[87%] z-0 flex items-center absolute top-0 left-0 right-0 bottom-0`}
        alt="Tekalp"
        priority
      />

      <div className="w-full h-full absolute top-0 left-0 bg-[#ECECEC]/15"></div>
      <div className="flex flex-col absolute bottom-0 right-0 bg-bg-white text-new-black px-5 py-3 md:w-full md:text-center rounded-tl-xl">
        <h3 className="font-semibold text-lg md:text-base">TEKALP</h3>
        <p className="italic font-light text-lg md:text-sm sm:text-[13px]">
          {partner.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

const slides = [
  { text: "BLOC ARMÉ",
    image: beton,
    link:"/solutions/bloc-arme",
    logo:blocarme,
    subtext:"SÉCURISATION",
    style:false,
    title:"BLOC Armé®",
    buttonLink:"En savoir plus",
    description:"Bloc Armé® : une solution de béton modulaire de haute résistance, garantissant une protection immédiate et durable même en contexte d’urgence. Ce dispositif est conçu pour prévenir, sécuriser et gérer efficacement les évènements comme les éboulements et les glissements de terrain."
   },
  { text: "RIM NAT",
    image: pc,
    link:"",
    logo:rimnat,
    subtext:"PLATEFORME 3D COLLABORATIVE",
    style:true,
    title:"RIM NAT",
    buttonLink:"Bientôt disponible",
    description:"Visualisez, modélisez et collaborez en temps réel sur vos modèles 3D. Centralisez toutes vos données pour former un jumeau numérique de vos projets, enrichir votre compréhension et fiabiliser vos décisions."
   },
];



export function SolutionSwiper ({children}) {
  const OPTIONS = { slidesToScroll: 'auto' }

  const [emblaRef, embla] = useEmblaCarousel(OPTIONS)

    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollTo = useCallback((index) => {
      if (embla) embla.scrollTo(index);
    }, [embla]);
  
    useEffect(() => {
      if (!embla) return;
  
      const onSelect = () => {
        setSelectedIndex(embla.selectedScrollSnap());
      };
  
      embla.on("select", onSelect);
      onSelect();
    }, [embla]);

    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(embla)



    return (
      <div className="w-full h-withOutHeader relative md:h-auto">
          <div className="overflow-hidden w-full h-full" ref={emblaRef}>
              <div className="flex touch-pan-y h-full relative bg-new-black">
                  {children}
              </div>
          </div>
            <Prev2 onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <Next2 onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            <div className="w-fit absolute top-5 right-10 flex justify-center gap-[1.2rem] sm:right-1/2 sm:translate-x-1/2">
            <div className="flex gap-2 mt-4">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-xl lg:text-lg md:text-base rounded-full transition ${selectedIndex === 1 ? "text-new-black" : "text-white"} ${
                    selectedIndex === index ? "underline underline-offset-2 font-semibold" : "font-normal"
                  }`}
                  onClick={() => scrollTo(index)}
                >
                  <span className='whitespace-nowrap'>{slide.text}</span>
                </button>
              ))}
            </div>
            </div>
      </div>
  )
} 

export function SolutionSlide ({slide, index}) {

  return(
    <div key={index} className={`${slide?.style ? "bg-[rgb(237,237,237)] grid-cols-[1fr_1fr]" : "bg-new-black grid-cols-[1.5fr_1fr]"} flex-[0_0_100%] h-full w-full grid place-items-center px-5 md:flex md:flex-col-reverse`} >
          <div className={`${slide?.style ? "text-new-black" : "text-white"} flex flex-col py-20 md:pt-0 md:pb-10`}>
            <Image src={slide?.logo} className='w-36 h-auto ml-8 md:hidden' alt="Bloc Armé" priority />
            <Custom2Title style={slide?.style} title="NOS SOLUTIONS" subtext={slide?.subtext} />
            <div className='flex flex-col gap-5 pl-8 mt-5 md:mt-0'>
              <p className='italic font-light text-5xl xl:text-4xl lg:text-3xl leading-none md:text-2xl font-magra'>{slide?.title?.toUpperCase()}</p>
              <p className='text-base md:text-sm max-w-[800px]'>{slide?.description}</p>
              <Link href={`${slide?.link}`}>
                <button className={`${slide?.style ? "text-white bg-new-black" : "text-new-black bg-white"} z-10 px-3 py-2 mt-3 font-medium flex items-center gap-3 md:text-sm rounded-md`} disabled={slide?.style} >
                  <span>{slide?.buttonLink.toUpperCase()}</span>
                  {
                    !slide?.style
                      ? <Image src={customArrow} alt='Flèche' />
                      : ""
                  }
                </button>
              </Link>
            </div>
          </div>
          <div className={`${slide?.style ? "w-[90%] max-w-[800px] md:max-w-[400px]" : "w-[80%] max-w-[500px] md:max-w-[300px]"} md:mt-28 relative`}>
            <Image src={slide?.image} className="w-full h-full relative z-10" alt="Tekalp" priority />
            {
              !slide?.style
                ? <div className='blur-[50px] rounded-full bg-white/50 w-[500px] h-[350px] lg:w-[300px] lg:h-[250px] absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-0'></div>
                : <div className='blur-[50px] rounded-full bg-black/10 w-[700px] h-[400px] lg:w-[300px] lg:h-[250px] absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-0'></div>
            }
            
          </div>
    </div>
  )
}

export function Custom2Title ({style, subtext, title}) {
  return(
    <div className='flex flex-col gap-2 relative m-12 w-fit'>
      <div className={`${style ? "bg-new-black" : "bg-white"} absolute -bottom-8 w-[1px] -left-2 h-[135%] md:h-[180%]`}></div>
      <h2 className='text-7xl xl:text-6xl lg:text-5xl leading-none md:text-4xl font-magra tracking-tight font-bold'>{title}</h2>
      <div className={`${style ? "bg-new-black" : "bg-white"} absolute -left-8 h-[1px] -bottom-2 max-w-[100vw] w-[120%] md:bottom-0`}></div>
      <p className='absolute top-[120%] left-0 font-normal text-nowrap'>{subtext}</p>
    </div>
  )
}
  