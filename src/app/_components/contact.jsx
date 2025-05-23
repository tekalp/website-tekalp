"use client"

import illustation1 from '../../../public/assets/contact/illustation_contact.svg'
import heroContact from '../../../public/assets/contact/heroContact.webp'

import Image from 'next/image'
import Footer from './layout/footer'
import { useEffect, useRef, useState } from 'react'
import { ContactForm } from './contact_form'
import Header from './layout/header'
import { BowSlider, BoxSwiperHome } from './tekalp'

import { motion } from 'framer-motion'

export default function ContactFeature({articles}) {

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

  return (
    <>
          <Header />
          <main id='mainIndex' className='overflow-x-hidden flex flex-col'>
          

            <section ref={informations} className='grid grid-cols-[1.5fr_1fr] gap-5 w-full py-20 md:pt-5 md:pb-20 max-w-[1280px] place-self-center'>
                <div className='flex flex-col w-full relative'>
                    <div className='flex flex-col gap-2 relative w-full m-12 text-new-black lg:ml-12 lg:mt-6 md:gap-0'>
                        <div className={`bg-new-black absolute -bottom-12 w-[1px] -left-2 h-[145%] md:h-[160%] md:-bottom-14`}></div>
                        <h2 className='text-[rgb(189,189,189)] text-5xl xl:text-4xl lg:text-3xl leading-none md:text-2xl font-light'>CONTACTEZ</h2>
                        <h2 className='text-7xl xl:text-6xl lg:text-5xl leading-none w-full font-magra md:text-4xl tracking-tight font-bold text-new-black md:mb-2'>NOTRE ÉQUIPE</h2>
                        <div className={`bg-new-black absolute -left-8 h-[1px] -bottom-2 max-w-[100vw] w-[108%] md:w-[88%] md:bottom-0`}></div>
                        <p className='absolute top-[110%] left-0 font-normal text-nowrap w-[150%] md:w-[90%] lg:text-wrap sm:text-sm sm:pr-4'>Vous souhaitez en savoir plus sur nos solutions de protection et de gestion des risques naturels ?</p>
                    </div>
                    <div className='flex flex-col gap-2 px-4 py-2 bg-new-black text-new-gray mt-10 w-fit sm:text-sm md:ml-0 md:w-screen md:text-center sm:mt-14 ml-8 rounded-md'>
                        <p>Vous pouvez nous appeler au <span className='font-bold'>04 79 25 01 07</span> ou nous laisser un message via le formulaire nous vous répondrons dans les plus brefs délais. </p>
                        <p>Que vous soyez une entreprise, une collectivité ou un organisme public, notre équipe est à votre écoute pour échanger sur vos besoins spécifiques.</p>
                    </div>
                </div>
                <Image src={illustation1} alt='Illustration 1' className='w-[700px] xl:w-[450px] h-auto relative -bottom-32 right-0 place-self-end object-cover revert lg:w-[320px] md:hidden' />
            </section>

            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 150, damping: 25 }} className='place-self-center flex flex-col max-w-[1280px] mb-28'>
                <ContactForm />
            </motion.div >

            <Footer />
        </main>
    </>
  )
}