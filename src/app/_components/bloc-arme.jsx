"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import BlockArm from '../../../public/assets/homepage/blocarmenewwtestvrai.webp'
import Blocks from '../../../public/assets/homepage/bloc.webp'

import Youtube from '../../../public/assets/homepage/youtube.svg'
import Download from '../../../public/assets/homepage/download.svg'

import Shield from '../../../public/assets/homepage/shield.svg'
import Renew from '../../../public/assets/homepage/renew.svg'
import Tool from '../../../public/assets/homepage/tool.svg'
import Jauge from '../../../public/assets/homepage/jauge.svg'
import Link2 from '../../../public/assets/homepage/link.svg'

import Head1 from '../../../public/assets/homepage/bloc_arme_1.webp'
import Footer from './layout/footer'

import Services from './servicesFeature'
import { Card2, Proof } from './accessories/accessories'

import { UrgencySwiper } from './home/heroSwiper'

import Header from './layout/header'
import { BowSlider, Custom2Title } from './tekalp'
import { S1CardCol1 } from './auto_carousel'

import Project1 from '../../../public/assets/homepage/project1.webp'
import Project2 from '../../../public/assets/homepage/project2.webp'
import Project3 from '../../../public/assets/homepage/project3.webp'
import Project4 from '../../../public/assets/homepage/project4.webp'
import Project5 from '../../../public/assets/homepage/project5.webp'
import Project6 from '../../../public/assets/homepage/project6.webp'

import alarm from '../../../public/assets/bloc-arme/alarm.svg'
import customArrow from '../../../public/assets/essentials-icons/custom-arrow-red.svg'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Next, Next3, Prev, Prev3, usePrevNextButtons } from '../_utils/emblaButton'

export default function BlocArmeFeature({articles}) {

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

  // const [isIntersecting2, setIsIntersecting2] = useState(false);
  const [isIntersecting3, setIsIntersecting3] = useState(false);
  // const card1 = useRef(null);
  const informations = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {setIsIntersecting3(entry.isIntersecting)}, {threshold:0.3})
      observer.observe(informations.current);
      return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting3]);


  return (
    <>
      <Header />
        <main id='mainIndex' className='overflow-x-hidden flex flex-col'>
            <section className='w-[100vw] min-h-withOutHeader md:min-h-[450px] overflow-hidden h-withOutHeader md:h-auto relative hxl:min-h-full hxl550:min-h-[450px]'>
              <div className='flex h-full'>
                  <BowSlider image={Head1} title1={<span>BLOC <span className='text-secondary'>ARMÉ®</span></span>} title2={<span className='font-magra'>{`Ouvrage de protection contre les mouvements de terrain`.toUpperCase()}</span>} href1={lastWebinaire} href2="/company" button2="L'ENTREPRISE" styleTitle2="text-[3vw] md:text-3xl" />
                </div>
            </section>

            <section className='flex flex-col text-new-black place-self-center max-w-[1400px]'>
              <Custom2Title style={true} title={<span className='font-sans'>BLOC <span className='text-secondary'>ARMÉ®</span></span>} />
              <div id="solution" className='py-10 md:pb-10 grid grid-cols-2 place-self-center px-5 place-items-center lg:flex lg:flex-col-reverse lg:gap-10 lg:-mt-5 lg:px-3 lg:pt-0'>
                  <div className='flex flex-col gap-5 -mt-10'>
                      <div className='flex flex-col mt-3 md:text-sm'>
                        <p>Le Bloc Armé®, distribué exclusivement par TEKALP, est <b className='italic'>une solution de protection d’urgence avancée contre les éboulements et les glissements de terrain</b>. D’une résistance supérieure à dix fois celle du béton traditionnel, ce système modulaire <b className='italic'>peut être déployé en moins de 72 heures</b> pour sécuriser les infrastructures vitales comme les routes et les voies ferrées.</p>
                        <p>Fabriqué à partir de béton décarboné, il minimise l’impact environnemental tout en offrant une protection efficace grâce à sa <b className='italic'>capacité à dissiper jusqu’à 2 000 kJ</b> lors d’impacts. Sa conception modulaire permet une adaptation sur mesure aux exigences spécifiques de chaque site, assurant non seulement une installation rapide mais aussi une robustesse exceptionnelle dans les conditions les plus extrêmes.</p>
                        <p>TEKALP s’engage à suivre chaque installation de près, garantissant la durabilité et l’efficacité continue du Bloc Armé®.</p>
                      </div>
                  </div>
                  <div className='w-full max-w-[500px] h-[340px] top-10 flex flex-col relative xl:max-w-[340px]'>
                    <div className='absolute right-0 -top-[70px] xl:-top-[35px] hxl:-top-[10px] lg:hidden'>
                      <Image src={BlockArm} alt="Bloc Armé" className='h-[120px] w-auto xl:h-[100px] hxl:h-[80px]' priority />
                    </div>
                    <div className='py-10 relative animate-infiniteMove xl:top-5 lg:pt-0'>
                      <Image src={Blocks} alt="Exemple" className='w-auto h-[300px] xl:h-[230px]' priority />
                    </div>
                  </div>
              </div>
            </section>

              {/* <button onClick={() => {setOpenForm(true); setPosition(Math.max(window.screenY, document.documentElement.scrollTop, document.body.scrollTop)); body.style.overflow = 'hidden'}} className='flex items-center justify-center rounded-xl gap-5 py-4 px-8  bg-secondary/80 text-background hover:scale-[1.05] hover:bg-secondary transition-all duration-500 lg:bg-secondary shadow-button w-fit sm:py-2 sm:px-3 sm:gap-3'>
                <p className='font-semibold sm:text-sm'>Fiche BLOC ARME®</p>
                <Image src={Download} alt="download" className='h-7 w-auto sm:h-6' />
              </button> */}


            <section id="keysnumber" ref={informations} className='flex flex-col items-center mt-20 mb-14 md:my-10 px-4 sm:px-0 '>
              <div className='flex justify-center bg-bg-gray w-full py-16 gap-28 lg:gap-0 lg:justify-evenly sm:grid sm:grid-cols-3 rounded-lg max-w-[1400px] border border-new-black sm:border-0 sm:rounded-none'>
                <Proof title='2000+' description='Blocs posés' isIntersecting3={isIntersecting3} />
                <Proof title='2000kJ' description="Testée et éprouvée" isIntersecting3={isIntersecting3} />
                <Proof title='3' description='Brevets déposés' isIntersecting3={isIntersecting3} />
              </div>
              <Link href="https://youtube.com/@Tekalp63?si=8qK0xHBj94l4ya1H" target='_blank' className='flex items-center relative -translate-y-1/2 justify-center gap-5 py-3 px-12 bg-secondary text-new-gray shadow-button w-fit sm:py-2 sm:px-3 sm:gap-3'>
                <p className='text-xl font-semibold sm:text-sm'>Nos tests</p>
                <Image src={Youtube} alt="download" className='h-9 w-auto sm:h-6' />
              </Link>
            </section>
            

            <section className='flex flex-col gap-20 text-new-black max-w-[1200px] w-full place-self-center'>
            <div className='flex flex-col gap-2 relative w-fit m-12'>
              <div className="bg-new-black absolute -bottom-8 w-[1px] -left-2 h-[170%] md:h-[200%]"></div>
              <h2 className='text-5xl xl:text-4xl lg:text-3xl leading-none md:text-2xl font-magra tracking-tight font-bold'>AVANTAGES</h2>
              <div className="bg-new-black absolute -left-8 h-[1px] -bottom-2 max-w-[100vw] w-[110%] md:bottom-0"></div>
            </div>
              <div className='flex-1 flex flex-col justify-center items-center relative px-3'>
                <div className='flex justify-between w-full'>
                  <div className='sm:hidden'>
                    <Card2 icon={Link2} title='SOUPLE'  />
                  </div>
                  <div className='sm:hidden'>
                    <Card2 icon={Shield} title='ROBUSTE' />
                  </div>
                  <Card2 icon={Jauge} title='MODULAIRE' />
                  <Card2 icon={Tool} title='RÉPARABLE' />
                  <Card2 icon={Renew} title='RÉUTILISABLE' />
                </div>
              </div>
              <div className='flex-1 flex-col justify-center items-center relative px-3 hidden sm:flex'>
                <div className='flex justify-evenly w-full'>
                  <div className='sm:block'>
                    <Card2 icon={Link2} title='SOUPLE'  />
                  </div>
                  <div className='sm:block'>
                    <Card2 icon={Shield} title='ROBUSTE' />
                  </div>
                </div>
              </div>
            </section>


            <section className='w-full bg-new-black flex justify-center mt-28 mb-16 md:mt-20 md:mb-10'>
                <div className='max-w-[1280px] overflow-hidden py-10 flex flex-col justify-center w-full h-full gap-10 xl:gap-5 xl:h-auto xl:py-5 hxl:py-5 sm:gap-6'>
                    <div className='flex w-fit flex-col gap-1 px-8'>
                        <h2 className='text-new-gray font-bold text-lg md:text-base'>ILS NOUS FONT CONFIANCE</h2>
                        <div className='h-[1px] bg-new-gray w-full'></div>
                        <div className='h-[1px] bg-new-gray w-full'></div>
                    </div>
                    <div className='w-[100vw] grid-cols-1 grid-rows-1 grid overflow-hidden h-[65px]'>
                    <div className='flex items-center'>
                        <S1CardCol1 gray={true} />
                        <S1CardCol1 gray={true} />
                    </div>
                    </div>
                </div>
            </section>

             <section id="projects" className='flex flex-col gap-5 w-full pb-20 md:pb-5'>
              <div className='flex flex-col text-new-black gap-2 relative w-full m-12'>
                <div className="bg-new-black absolute -bottom-14 w-[1px] -left-2 h-[180%] md:h-[250%]"></div>
                <h2 className='text-7xl xl:text-6xl lg:text-5xl leading-none md:text-4xl tracking-tight font-bold'>NOS TRAVAUX</h2>
                <div className="bg-new-black absolute -left-8 h-[1px] -bottom-2 w-[25%] md:bottom-0 md:w-[80%]"></div>
                <div className=' w-full absolute top-[120%] left-0 font-normal pr-6'>
                  <p className='text-2xl text-secondary font-magra font-semibold y xl:text-xl lg:text-lg leading-none md:text-base'>{`Rétablissement et Renforcement des Infrastructures`.toUpperCase()}</p>
                  <p className='md:text-sm sm:py-6'>Utilisant des technologies avancées et des matériaux décarbonés, les ouvrages construits sont durables ou provisoires tout en étant réutilisables et réparables.</p>
                </div>
              </div>
              <div className='pt-14 flex flex-col sm:pt-24 2sm:pt-32 sm:px-2'>
                <CardSwiperBlocArme>
                  <CardSliderBlocArme image={Project1} title="Castellane (04)" />
                  <CardSliderBlocArme image={Project2} title="Châtel (74)" />
                  <CardSliderBlocArme image={Project3} title="Culoz (01)" />
                  <CardSliderBlocArme image={Project4} title="Orée d'Anjou (49)" />
                  <CardSliderBlocArme image={Project5} title="Toulon (83)" />
                  <CardSliderBlocArme image={Project6} title="Verdache (04)" />
                </CardSwiperBlocArme>
              </div>
              <div className='flex gap-2 text-secondary items-center place-self-end pb-2 pt-2 relative -left-8 lg:left-0 md:-left-5 lg:absolute lg:bottom-28 lg:right-3 md:relative md:right-0 md:bottom-0 sm:px-0 sm:text-sm'>
                <Link href="" className='md:text-sm'>{`Découvrir nos réalisations`.toUpperCase()}</Link>
                <Image src={customArrow} alt='Flèche' />
              </div>
            </section>

          <section id="services" className='flex flex-col gap-5 w-full pb-20 md:pb-0 md:pt-10 max-w-[1480px] place-self-center'>
            <div className='flex flex-col text-new-black gap-2 relative m-12'>
              <div className="bg-new-black absolute -bottom-14 w-[1px] -left-2 h-[180%] md:h-[200%]"></div>
              <h2 className='text-7xl xl:text-6xl lg:text-5xl leading-none md:text-4xl tracking-tight w-full font-bold'>TYPOLOGIES D’OUVRAGES</h2>
              <div className="bg-new-black absolute -left-8 h-[1px] -bottom-2 w-[73%]  md:bottom-0 md:w-[80%]"></div>
              <div className=' w-full absolute top-[120%] left-0 font-normal '>
                <p className='text-2xl text-secondary font-magra font-semibold y xl:text-xl lg:text-lg leading-none md:text-base'>{`Solutions adaptées à chaque défi environnemental`.toUpperCase()}</p>
                <p className='md:text-sm sm:max-w-[80vw]'>Maîtrisez le terrain avec la polyvalence de Bloc Armé®</p>
              </div>
            </div>
            <div className='mt-14 md:mt-5'>
              <Services />
            </div>
          </section>

          <section id="urgency" className='flex flex-col text-new-black w-full py-20 md:pb-16 md:pt-10 px-5 max-w-[1480px] place-self-center'>
            <h2 className='border-black border-b-2 text-6xl pb-3 w-fit xl:text-5xl lg:text-4xl leading-none md:text-3xl font-semibold xl:pb-2 lg:pb-1'>UNE URGENCE ?</h2>
            <div className='grid grid-cols-2 xl:grid-cols-[1fr_1.25fr] lg:grid-cols-1 lg:gap-14 w-full place-self-center place-items-center max-w-[1600px] gap-5 pr-5 sm:px-2'>
              <div className='flex flex-col gap-5'>
                <div className='flex gap-4 items-end mt-3'>
                  <p className='text-3xl text-secondary font-magra font-semibold y xl:text-2xl lg:text-xl leading-none md:text-lg'>NOTRE KIT D’URGENCE</p>
                  <Image src={alarm} alt="Kit d'urgence" className='w-10 mb-1' />
                </div>
                <div className="flex flex-col gap-5 w-full py-3 text-base sm:text-sm sm:pb-3">
                    <p className='font-medium text-xl lg:text-lg sm:text-base'>Réactivité et sécurité quand chaque seconde compte</p>
                    <p>En tant que véritable allié des gestionnaires d’infrastructures autoroutières, routières et ferroviaires, nous proposons des kits d’urgence disponibles en France métropolitaine sous 48 heures.</p>
                    <p>TEKALP et ses partenaires se tiennent à votre disposition pour vous assister, au besoin, dans la conception, la mise en œuvre et l’exploitation du dispositif visant à renforcer la résilience des itinéraires suite à l’évènement.</p>
                </div>
                <Link href="/contact" className='lg:place-self-center'>
                    <button className="text-white bg-secondary z-10 px-8 py-2.5 mt-3 flex items-center gap-3 shadow-xl rounded-lg md:text-sm md:font-medium md:py-2">
                        <span>NOUS CONTACTER</span>
                    </button>
                </Link>
              </div>
            <UrgencySwiper />
            </div>
          </section>

          <Footer />
            
        </main>
    </>
  )
}

export function CardSwiperBlocArme ({children}) {
  const OPTIONS = { slidesToScroll: 'auto' }

  // const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
      Autoplay({ playOnInit: true, delay: 5000 })
    ])

    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
      <div className="w-full h-full relative">
          <div className="overflow-hidden w-[95%] ml-[2.5%] h-full sm:w-[90%] sm:ml-[5%]" ref={emblaRef}>
              <div className="flex touch-pan-y h-full gap-3">
                  {children}
              </div>
          </div>
          <Prev3 onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <Next3 onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
  )
} 

export function CardSliderBlocArme ({image, style, title}) {
  return(
    <div className="flex-[0_0_70%] min-w-0 h-full w-full flex items-center justify-center relative min-h-[450px] sm:bg-white md:min-h-[300px] sm:flex-[0_0_75%]" >
          <h1 className='absolute top-0 left-0 z-20 bg-new-black px-4 py-2.5 rounded-tl-xl rounded-br-xl font-semibold'>{title}</h1>
          <Image src={image} className={`${style} rounded-xl object-cover w-full h-full z-0 flex items-center absolute top-0 left-0 right-0 bottom-0`} alt="Tekalp" priority />
          <div className='w-full h-full absolute top-0 left-0 bg-[#ECECEC]/15'></div>
    </div>
  )
}

export function LittleCardSwiper ({children}) {
  const OPTIONS = { slidesToScroll: 'auto' }

  // const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
      Autoplay({ playOnInit: true, delay: 5000 })
    ])

    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
      <div className="w-full h-full relative">
          <div className="overflow-hidden w-full h-full" ref={emblaRef}>
              <div className="flex touch-pan-y h-full">
                  {children}
              </div>
          </div>
          <Prev onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <Next onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
  )
} 

export function LittleCardSlide ({image, style}) {
  return(
    <div className="flex-[0_0_100%] min-w-0 h-full w-full flex items-center justify-center relative" >
          <Image src={image} className={`${style} rounded-xl object-cover w-full h-full z-0 flex items-center absolute top-0 left-0 right-0 bottom-0`} alt="Tekalp" priority />
          <div className='w-full h-full absolute top-0 left-0 bg-[#ECECEC]/15'></div>
    </div>
  )
}