"use client"

import Image from 'next/image'

import hero from '../../../public/assets/company/hero.webp'
import mission from '../../../public/assets/company/newmissionvrai.webp'
import white_arrow from '../../../public/assets/essentials-icons/custom-white-arrow.svg'
import arrow from '../../../public/assets/essentials-icons/custom-arrow.svg'
import circle from '../../../public/assets/company/circle-down-arrow.svg'
import Header from './layout/header'
import Footer from './layout/footer'
import { BowSlider, Custom2Title } from './tekalp'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Tabs } from './ui/tabs'

import mainville from '../../../public/assets/company/mainville.svg'

import rimnat from '../../../public/assets/blog/rimnat.png'
import blocarme from '../../../public/assets/homepage/blocarmenewwtestvrai.webp'

import constat1 from '../../../public/assets/company/newconstat1.webp'
import constat2 from '../../../public/assets/company/constat2.webp'
import constat3 from '../../../public/assets/company/constat3.webp'

import customArrow from '../../../public/assets/essentials-icons/custom-arrow.svg'

import call1 from '../../../public/assets/company/call1.webp'
import call2 from '../../../public/assets/company/call2.webp'

import city from '../../../public/assets/company/city.svg'
import { CardCol1, CardCol2, CardCol3 } from './ui/pictures_animation'
import { S1CardCol1 } from './auto_carousel'

import { motion } from 'framer-motion'

const DummyContent = ({image}) => {
    return (
        <>
        <div className='relative z-0 flex-1 max-h-[380px]'>
            <Image
                src={image}
                alt="tekalp project"
                className="object-cover rounded-md h-full object-[50%_70%]"/>
        </div>
        <div className='absolute z-10 top-[500px] right-10 sm:top-[615px] sm:right-7'>
            <Link href="/solutions/bloc-arme" target='_blank'>
            <button className='w-fit px-4 py-2 text-new-black bg-bg-gray flex items-center gap-4 cursor-pointer text-sm font-semibold sm:text-sm sm:px-2 sm:py-1.5 rounded-md'>
                DÉCOUVREZ NOS SOLUTIONS
                <Image src={customArrow} alt='Flèche' />
            </button>
            </Link>
        </div>
    </>
     
    );
  };

const about = [
    {title:"QUI SOMMES-NOUS ?", text:"Chez TEKALP, nous sommes engagés à fournir des solutions éprouvées et personnalisées pour mieux gérer les infrastructures et sécuriser les communautés face aux risques naturels. Notre équipe, composée de spécialistes techniques et commerciaux, s'engage à fournir et développer des produits et services pour faciliter la prédiction, la prévention, la protection et le suivi des enjeux humains et matériels face aux aléas climatiques tels que les mouvements de terrains et les inondations."},
    {title:"PROPOSER DES SOLUTIONS INNOVANTES ET DIFFERENCIANTES", text:"Nos systèmes intégrés, offrent des outils décisionnels, essentiels pour la gestion proactive des risques. Les technologies que  propose TEKALP sont éprouvées, testées et répondent à des besoins concrets. Ces solutions minimisent les coûts de réparation et de maintenance et prolonge la durée de vie de vos infrastructures."},
    {title:"NOS ENGAGEMENTS ET NOTRE VISION", text:"Pour nos clients, nous nous engageons à répondre aux  exigences actuelles des industries et des collectivités pour anticiper les défis futurs.   TEKALP accompagne ses clients et partenaires avant, pendant et après l’intégration de  ses solutions.  Avec nos partenaires locaux et internationaux, nous faisons progresser l’innovation et  nos solutions avec des données concrètes issues du terrain.  Notre métier est de faire le  lien entre concepteurs et utilisateurs."},
]

const tabs = [
    {
        title: "CONSTAT",
        value: "CONSTAT",
        content: (
        <>
            <p className='italic tracking-wide text-2xl lg:text-xl md:text-lg font-semibold'>AUGMENTATION DES PHÉNOMÉNES NATURELS </p>
            <p className='font-normal text-base md:text-sm sm:text-[13px]'>Au fil des années, une hausse alarmante des aléas naturels est constatée en France et à l’échelle mondiale. Inondations, glissements de terrain, coulées de boue, avalanches, et chutes de pierres marquent une augmentation préoccupante de ces phénomènes. Ces dernières années, la fréquence et l’intensité de ces catastrophes naturelles ont atteint des niveaux records, impactant de manière significative les écosystèmes, les infrastructures et les populations. Cette tendance met en évidence l’urgence d’adopter des mesures robustes pour protéger les enjeux humains, environnementaux et matériels. Tekalp intervient pour prévenir, protéger et sécuriser les sites vulnérables et assurer leur résilience, c’est-à-dire, rétablir leurs fonctionnalités</p>
            <DummyContent image={constat2} />
        </>
        ),
    },
    {
        title: "COÛTS",
        value: "COÛTS",
        content: (
        <>
            <p className='italic tracking-wide text-2xl lg:text-xl md:text-lg font-semibold'>IMPACT ÉCONOMIQUE DES CATASTROPHES NATURELLES</p>
            {/* <p className='font-normal text-base md:text-sm sm:text-[13px]'>Les catastrophes naturelles représentent non seulement une menace pour l'environnement mais également une lourde charge économique pour les sociétés. En 2024, la fréquence et l'intensité de ces événements ont établi de nouveaux records, imposant des coûts considérables pour les infrastructures et les communautés. Selon le CCR, alors que le coût annuel des sinistres climatiques était estimé à environ 3,7 milliards d'euros entre 2010 et 2019, il a presque doublé récemment, atteignant 6,5 milliards d'euros en 2023.</p> */}
            <p className='font-normal text-base md:text-sm sm:text-[13px]'>Ce constat alarmant souligne l’urgence pour les gestionnaires de sites et d’infrastructures, comme les réseaux routiers et ferroviaires, de mettre en place des mesures renforcées de maintenance et de sécurisation. TEKALP joue un rôle crucial dans cette démarche en proposant des solutions innovantes pour prévenir les aléas, protéger les enjeux et donc réduire les risques et afin de s’adapter face aux catastrophes naturelles. Nos technologies avancées et nos stratégies proactives aident à réduire significativement les coûts de réparation et à prolonger la durée de vie des infrastructures, tout en protégeant les populations et en minimisant les impacts environnementaux et économiques de ces événements dévastateurs.</p>
            <DummyContent image={constat1} />
        </>
        ),
    },
    {
        title: "DÉFIS",
        value: "DÉFIS",
        content: (
        <>
            <p className='italic tracking-wide text-2xl lg:text-xl md:text-lg font-semibold'>DÉFIS DES RISQUES GRAVITAIRES : NOTRE EXPERTISE</p>
            <p className='font-normal text-base md:text-sm sm:text-[13px]'>TEKALP est un leader reconnu dans la gestion des risques gravitaires, qui propose des solutions éprouvées et opère dans des environnements variés. Notre expertise nous permet de sécuriser des terrains et sites essentiels sous contraintes, en renforçant leur résilience et en rétablissant rapidement leur fonctionnalité après perturbation. Nos solutions personnalisées et innovantes assurent une protection efficace et une réduction des coûts de gestion des risques. Faites confiance à TEKALP pour des stratégies adaptées à chaque environnement spécifique.</p>
            <DummyContent image={constat3} />
        </>
        ),
    },
];

export default function CompanyComponent({articles}) {

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

    const [currentOpen, setCurrentOpen] = useState(0)

  return (
    <>
          <Header />
          <main id='mainIndex' className='overflow-x-hidden flex flex-col'>
          
              <section className='w-[100vw] min-h-withOutHeader md:min-h-[400px] overflow-hidden h-withOutHeader md:h-auto relative hxl:min-h-full hxl550:min-h-[400px]'>
                <div className='flex h-full'>
                    <BowSlider image={hero} line={true} title1="TEKALP"  title2={`Votre partenaire dans la gestion des risques naturels`.toUpperCase()} href1={lastWebinaire} href2="/solutions/bloc-arme" button2="NOS SOLUTIONS" styleTitle2="text-[2vw] lg:text-3xl font-magra" />
                </div>
              </section>

            <section className='py-20 md:py-10 grid grid-cols-2 max-w-[1400px] place-self-center px-5 place-items-center text-new-black lg:flex lg:flex-col-reverse lg:px-0'>
                <div className='flex flex-col gap-5 -mt-10'>
                    <Custom2Title style={true} title="A PROPOS" subtext="TEKALP votre équipe d'experts" />
                    <div className='flex flex-col mt-3'>
                        {about.map((a, i) => (
                            <CompanyAccordion title={a.title} text={a.text} key={i} currentOpen={currentOpen} setCurrentOpen={setCurrentOpen} index={i} />
                        ))}
                    </div>
                    <Link href="/solutions/bloc-arme" className='pl-5 -mt-2'>
                        <button className="text-white bg-new-black z-10 px-3 py-2 mt-3 font-medium flex items-center gap-3 md:text-sm rounded-md">
                            <span>NOS SOLUTIONS</span>
                            <Image src={white_arrow} alt="Flèche" className=''/>
                        </button>
                    </Link>
                </div>
                <Image src={mission} alt="Nos missions" className='mx-auto rounded-tr-md  rounded-tl-md lg:mx-0 lg:h-[300px] lg:object-cover ml-4 lg:mb-10 md:object-contain'/>
            </section>

            <section className='flex flex-col items-center gap-10 justify-end overflow-hidden py-14 md:gap-8 relative max-w-[1400px] w-full place-self-center'>
            <div className='flex flex-col gap-2 left-6 md:left-0 relative w-fit ml-12 self-start text-new-black md:gap-0 -mt-2'>
            <div className={`bg-new-black absolute -bottom-8 md:-bottom-4 w-[1px] -left-2 h-[135%] md:h-[115%]`}></div>
            <h2 className='text-[rgb(189,189,189)] text-5xl xl:text-4xl lg:text-3xl leading-none md:text-2xl font-light text-left'>NOTRE</h2>
            <h2 className='text-7xl xl:text-6xl lg:text-5xl leading-none md:text-4xl tracking-tight font-bold font-magra text-new-black text-left'>CONSTAT</h2>
            <div className={`bg-new-black absolute -left-8 h-[1px] -bottom-2 max-w-[100vw] w-[125%] md:bottom-0`}></div>
            </div>
                <div className="h-[700px] sm:h-[800px] [perspective:1000px] relative mx-auto w-full px-10 md:px-3">
                    <Tabs tabs={tabs} />
                </div>
            </section>

            <section className='py-20 lg:py-0 grid grid-cols-2 gap-10 max-w-[1400px] place-self-center px-5 place-items-center text-new-black lg:flex lg:flex-col lg:px-0'>
                <div className='flex flex-col gap-5 px-3'>
                    <Image src={city} alt='Illustration 1' className='w-[400px] h-auto relative object-cover revert lg:w-[320px] md:hidden lg:ml-12' />
                    <div className='flex flex-col gap-2 relative w-[80%] my-12 mr-12 ml-6 text-new-black lg:ml-12 lg:mt-6 sm:gap-0'>
                        <div className={`bg-new-black absolute -bottom-12 w-[1px] -left-2 h-[145%] md:h-[150%]`}></div>
                        <h2 className='text-[rgb(189,189,189)] text-4xl xl:text-3xl lg:text-2xl leading-none md:text-xl font-light'>POUR NOS CLIENTS</h2>
                        <h2 className='text-5xl xl:text-4xl lg:text-3xl leading-none md:text-2xl tracking-tight font-bold text-new-black font-magra sm:leading-tight'>UNE APPROCHE</h2>
                        <h2 className='text-5xl xl:text-4xl lg:text-3xl leading-none md:text-2xl tracking-tight font-bold text-new-black font-magra'>SUR-MESURE</h2>
                        <div className={`bg-new-black absolute -left-8 h-[1px] -bottom-2 max-w-[100vw] w-[125%] md:w-[90%] md:bottom-0`}></div>
                        <p className='absolute top-[110%] left-0 font-normal text-nowrap sm:text-wrap md:text-sm'>Adapter nos stratégies à vos besoins spécifiques</p>
                    </div>
                    <div className="flex flex-col gap-5 w-full pt-10 pb-5 text-base sm:text-sm sm:pb-3">
                        <p>La gestion efficace des risques naturels nécessite une collaboration étroite entre maîtres d’ouvrage, fournisseurs et gestionnaires. Cette approche collaborative permet de concevoir des solutions sur-mesure, adaptées non seulement aux contraintes géotechniques et environnementales spécifiques de chaque site, mais également aux moyens financiers et humains disponibles.
                        </p>
                        <p>Notre équipe multidisciplinaire (technique, commerciale et marketing) s’associe à des organisations qualifiées et reconnues dans le domaine des aléas naturels, afin de vous accompagner pour les défis de demain.</p>
                    </div>
                    <Link href="/contact" className='lg:place-self-center'>
                        <button className="text-white bg-new-black z-10 px-3 py-2 mt-3 font-medium flex items-center gap-3 rounded-md">
                            <span>CONTACTEZ-NOUS</span>
                            <Image src={white_arrow} alt="Flèche" className=''/>
                        </button>
                    </Link>
                </div>
                <div className='h-[600px] mt-16 min-w-[450px] overflow-hidden pl-10 grid grid-cols-3 gap-x-6 lg:h-[350px] lg:pl-0 lg:justify-items-center md:gap-x-4 md:min-w-[350px] md:mt-0'>
                    <div className='flex flex-col'>
                        <CardCol1 />
                        <CardCol1 />
                    </div>
                    <div className='flex flex-col relative -top-[96px]'>
                        <CardCol2 />
                        <CardCol2 />
                    </div>
                    <div className='flex flex-col'>
                        <CardCol3 />
                        <CardCol3 />
                    </div>
              </div>
            </section>

            <section className='w-full bg-new-black flex justify-center'>
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

            <section className="flex flex-col w-full py-20 md:py-10 bg-[rgba(237,237,237,1)] text-new-black">
            {/* Titre + Accroche */}
            <motion.div
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full px-6 md:px-4 max-w-[1400px] mx-auto"
                >
                <div className="h-[1px] bg-new-black w-full mb-2" />

                <h2 className="text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl tracking-tight italic leading-tight">
                    Vous êtes <span className="font-semibold">PORTEUR DE PROJETS</span>
                </h2>

                <p className="text-lg md:text-base sm:text-sm max-w-5xl">
                    Si vous êtes concepteur d’une solution technique, votre enjeu, ce n’est pas juste de la concevoir, 
                    c’est de la vendre et de la faire vivre sur le terrain.
                </p>

                <div className="h-[1px] bg-new-black w-full mt-4" />
                </motion.div>

            {/* Blocs + CTA + Illustration */}
            <motion.div
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 150, damping: 25 }} className="flex flex-col items-center gap-12 mt-16 px-6 md:px-4">
                {/* Cartes */}
                <div className="grid grid-cols-3 md:grid-cols-1 gap-6 w-full max-w-[1400px]">

                <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border border-[#1B18174D] rounded-lg mt-11 p-6 w-full min-h-[280px] flex flex-col justify-start"
                >
                <h3 className="font-semibold text-lg underline mb-4">Mise en place - Contrats annualisés</h3>
                <ul className="text-sm leading-relaxed list-disc pl-5">
                    <li><strong>Diagnostics :</strong> Évaluation initiale pour comprendre les besoins spécifiques et les conditions du site.</li>
                    <li><strong>Études de Faisabilité :</strong> Analyse détaillée pour déterminer la viabilité et l’efficacité des solutions proposées.</li>
                    <li><strong>Formalisation des Partenariats :</strong> Signature de contrats qui définissent clairement les rôles, les responsabilités et les attentes de chaque partie.</li>
                </ul>
                </motion.div>

                {/* Bloc 2 */}
                <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-new-black text-white border border-new-black rounded-lg mt-11 p-6 w-full min-h-[280px] flex flex-col justify-start"
                >
                <h3 className="font-semibold text-lg underline mb-4">Commercialisation</h3>
                <ul className="text-sm leading-relaxed list-disc pl-5">
                    <li><strong>Stratégie de Marché :</strong> Développement et mise en œuvre de stratégies pour introduire le produit sur le marché.</li>
                    <li><strong>Ajustement des Méthodes de Vente :</strong> Optimisation des techniques de vente pour maximiser la pénétration du marché et la satisfaction du client.</li>
                </ul>
                </motion.div>

                {/* Bloc 3 */}
                <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border border-[#1B18174D] mt-11 rounded-lg p-6 w-full min-h-[280px] flex flex-col justify-start"
                >
                <h3 className="font-semibold text-lg underline mb-4">Bilan et Perspectives</h3>
                <ul className="text-sm leading-relaxed list-disc pl-5">
                    <li>Chaque année, nous compilons <strong>un bilan détaillé</strong> de nos activités, mettant en évidence <strong>les résultats atteints</strong> et <strong>nos projections à moyen et long terme.</strong></li>
                    <li>Ce bilan est essentiel pour <strong>évaluer nos progrès et optimiser nos stratégies futures</strong>. Il nous aide à ajuster nos actions, assurant <strong>l’adaptation et la croissance continues</strong> de notre entreprise <strong>tout en renforçant la confiance</strong> de nos partenaires et clients.</li>
                </ul>
                </motion.div>
                </div>


                {/* CTA */}
                <Link href="/contact" className="max-w-[1400px] w-full px-6 md:px-4">
                <button className="text-new-black px-3 py-2 mt-[-40px] font-medium flex items-center gap-3 ml-auto">
                    <span>COLLABORONS</span>
                    <Image src={arrow} alt="Flèche" />
                </button>
                </Link>

                {/* Illustration */}
                <div className="block max-sm:hidden">
            <Image src={mainville} alt="Illustration Main Ville" className="h-[200px] md:h-[90px] sm:h-[120px] w-auto mx-auto" />
            </div>
            </motion.div>
            </section>





            <section className='flex flex-col gap-10 px-10 lg:px-5 md:gap-5 pb-20 md:pb-10'>
                <div className='flex flex-col gap-2 relative w-fit my-12 mr-12 ml-6 text-new-black lg:ml-12 lg:mt-6 md:gap-0'>
                    <div className={`bg-new-black absolute -bottom-12 w-[1px] -left-2 h-[145%]`}></div>
                    <h2 className='text-[rgb(189,189,189)] text-4xl xl:text-3xl lg:text-2xl leading-none md:text-xl font-light'>FACE AUX ALÉAS NATURELS</h2>
                    <h2 className='text-5xl xl:text-4xl font-magra lg:text-3xl leading-none md:text-2xl tracking-tight font-bold text-new-black'>SÉCURISEZ</h2>
                    <h2 className='text-5xl xl:text-4xl font-magra lg:text-3xl leading-none md:text-2xl tracking-tight font-bold text-new-black'>VOS INFRASTRUCTURES</h2>
                    <div className={`bg-new-black absolute -left-8 h-[1px] -bottom-2 max-w-[100vw] w-[110%] md:bottom-0`}></div>
                </div>
                <div className='py-5 my-5 text-new-black flex flex-col gap-5 md:gap-3'>
                    <p className='text-2xl lg:text-xl md:text-lg font-semibold'>NOS SOLUTIONS AVANCÉES</p>
                    <p className='font-normal text-base md:text-sm sm:text-[13px]'>Nous développons des dispositifs innovants et performants pour protéger les infrastructures et les populations contre les risques naturels. Nos solutions novatrices permettent de prévenir, protéger, et gérer les risques naturels efficacement. Nous nous engageons à innover et adapter nos produits pour surpasser les normes de sécurité et répondre aux défis des environnements à risques. Découvrez comment nos solutions peuvent sécuriser vos projets en explorant BLOC ARMÉ® Rim-Nat pour garantir un avenir plus sûr.</p>
                </div>
                <div className='grid grid-cols-2 gap-8 md+:grid-cols-1 pt-5 lg:gap-3'>
                    <CompanyCall image={call1} subImage={blocarme} 
                    bouton=            
                    {<Link href="/solutions/bloc-arme" className='absolute bottom-0 right-0'>
                        <button className="text-new-black bg-white z-10 px-4 py-3 font-medium flex items-center gap-4 rounded-tl-md">
                            <span>EN SAVOIR PLUS</span>
                            <Image src={arrow} alt="Flèche" className=''/>
                        </button>
                    </Link> }
                    subTitle="sécurisation" title="Bloc armé" text="Bloc Armé® : une solution de béton modulaire de haute résistance, garantissant une protection immédiate et durable même en contexte d’urgence. Ce dispositif est conçu pour prévenir, sécuriser et gérer efficacement les évènements comme les éboulements et les glissements de terrain." />
                    <CompanyCall image={call2} subImage={rimnat}
                    bouton=                        
                    {<button disabled={true} className="text-new-black absolute bottom-0 right-0 bg-white z-10 px-4 py-3 font-medium flex items-center gap-4 rounded-tl-md">
                        <span>{`Bientôt disponible`.toUpperCase()}</span>
                    </button> }
                    subTitle="CLOUD COLLABORATIF" title="RIM NAT" text="Augmentez vos capacités de gestion avec Rim-Nat, notre plateforme Cloud collaborative, qui offre des fonctionnalités de modélisation 3D avancées pour une supervision de projet augmentée." />
                    
                </div>

            </section>

            <Footer />
            
        </main>
    </>
  )
}

export function CompanyCall ({image, subImage, subTitle, title, text, bouton}) {
    return(
        <div className='w-full h-[650px] relative text-new-gray md+:h-[450px] group overflow-hidden rounded-md'>
            <Image src={image} alt='Photo de chantier' className='w-full h-full object-cover' />
            <div className='absolute bottom-0 left-16 flex flex-col gap-5 max-w-[500px] lg:left-0 lg:px-3 lg:gap-2 translate-y-[100%] group-hover:translate-y-0 transition-all duration-[800ms] group-hover:bottom-16 md:translate-y-0 md:bottom-16'>
                <Image src={subImage} className='w-28 h-auto' alt="Bloc Armé" priority />
                <p className='font-medium'>{subTitle.toUpperCase()}</p>
                <div className='flex flex-col gap-5 '>
                    <p className='italic font-normal text-5xl xl:text-4xl lg:text-3xl leading-none md:text-2xl'>{title.toUpperCase()}</p>
                    <p className='text-base font-medium lg:text-[15px] md:text-sm md:pb-5'>{text}</p>
                </div>
            </div>
            {bouton}
            {/* <Link href="/solutions/bloc-arme" className='absolute bottom-0 right-0'>
                <button className="text-new-black bg-white z-10 px-4 py-3 font-medium flex items-center gap-4">
                    <span>{bouton.toUpperCase()}</span>
                    <Image src={arrow} alt="Flèche" className=''/>
                </button>
            </Link> */}
        </div>
    )
}

export function Process ({title, number, list}) {
    const [currentOpen, setCurrentOpen] = useState(0)

    return(
        <motion.div initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 150, damping: 25, delay: number-1 * 0.1 }} className='flex gap-10 items-center w-full lg:gap-5'>
            <p className='text-8xl xl:text-7xl lg:text-6xl leading-none md:text-5xl tracking-tight font-bold min-w-[40px] sm:hidden'>{number}</p>
            <div className='flex flex-col gap-5 bg-new-black p-5 text-new-gray md:text-sm sm:hidden'>
                <h3 className='text-2xl lg:text-xl leading-none md:text-base tracking-tight font-semibold'>{title}</h3>
                {list}
            </div>
            <div className='sm:block hidden'>
                <CompanyAccordion title={title} text={list} currentOpen={currentOpen} setCurrentOpen={setCurrentOpen} />
            </div>
        </motion.div>
    )
}

export function CompanyAccordion ({title, text, currentOpen, index, setCurrentOpen}) {
    const details = useRef(null)
    const [heightDetails, setHeightDetails] = useState()
    const [openDetails, setOpenDetails] = useState(false)

    useEffect(() => {
        if(currentOpen === index) {
            setOpenDetails(true)
            setHeightDetails(details?.current?.offsetHeight)
        } else {
            setOpenDetails(false)
            setHeightDetails(0)
        }
    }, [currentOpen])

    return(
        <div className="flex flex-col text-new-black">
            <section className="flex justify-between py-3 text-start  gap-3 items-center cursor-pointer w-full group" onClick={() => {setHeightDetails(details?.current?.offsetHeight); setOpenDetails(!openDetails); setCurrentOpen(index)}}>
                <div className='flex gap-4 font-semibold px-4 items-center w-full'>
                    <Image src={circle} alt="Chevron" className={`${openDetails ? "rotate-180" : "rotate-0"} transition-all h-6 w-auto`} />
                    <h2>{title}</h2>
                </div>
            </section>
            <section className="flex justify-start text-start items-start w-full overflow-hidden pr-6" style={openDetails ? {maxHeight:`${heightDetails}px`, transition:'all 500ms'} : { maxHeight:0, transition:'all 300ms'}}>
                <div ref={details} className="flex w-full pb-5 text-base sm:text-sm pl-4 sm:pb-3">
                    {text}
                </div>
            </section>
        </div>
    )
}

