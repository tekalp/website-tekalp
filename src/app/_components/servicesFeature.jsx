import Image from 'next/image'
import Arrow from '../../../public/assets/services/arrow.svg'
import Plus from '../../../public/assets/services/plus.svg'
import BlocArm from '../../../public/assets/homepage/blocarmenewwtestvrai.webp'
import { services } from '../../../public/services'
import { useCallback, useEffect, useRef, useState } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Next, Next3, Prev, Prev3, usePrevNextButtons } from '../_utils/emblaButton'

export default function Services() {
    
    const [index, setIndex] = useState(0)
    const [currentSelect, setCurrentSelect] = useState(0)
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const [content, setContent] = useState()

    useEffect(() => {
        setIndex(0)
    },[])

    useEffect(() => {
        setTimeout(() => {
            setTitle(services[index]?.title)
            setSubTitle(services[index]?.subtitle)
            setContent(services[index]?.description)
        },400)
    },[index])

    const OPTIONS = { slidesToScroll: 'auto'}

    const [emblaRef, emblaMainApi] = useEmblaCarousel(OPTIONS)
    const [selectedIndex, setSelectedIndex] = useState(0)
    
    const onThumbClick = useCallback(
        (index) => {
        if (!emblaMainApi) return
        emblaMainApi.scrollTo(index)
        },
        [emblaMainApi]
    )
    
    const onSelect = useCallback(() => {
        if (!emblaMainApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
        emblaMainApi.on('select', onSelect)
        emblaMainApi.on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    return (
            <section className='w-full flex items-center justify-center max-w-[1800px]'>
                <div className='h-[55vh] w-[95vw] flex items-center overflow-hidden lg:hidden hsm:hidden'>
                    <div className='w-[50%] m-10 rounded-lg border overflow-hidden border-new-black h-fit flex flex-col'>
                        <h1 className='text-3xl w-fit font-semibold text-new-black px-8 py-3 rounded-br-lg bg-bg-gray xl:text-3xl'>Typologies d’ouvrages</h1>
                        <div className='text-2xl font-light overflow-y-auto scrollbar-thumb-gray-300 scrollbar-thin pr-5 px-8 h-full flex flex-col justify-center py-3 xl:text-xl'>
                            {services?.map((service, index) => <Service 
                                key={service.id} 
                                service={service} 
                                setIndex={setIndex} 
                                setCurrentSelect={setCurrentSelect} 
                                currentSelect={currentSelect} 
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                last={services?.at(-1).id === service.id ? true : false } />)}
                        </div>
                    </div>
                    <div className='relative w-[50%] h-full bg-[#e7dfdb]/40 rounded-xl overflow-hidden text-black lg:hidden group'>
                        <div className="relative w-full h-full overflow-hidden" ref={emblaRef}> 
                        {/* CONTAINER */}
                            <div className="flex touch-pan-y h-full w-full">
                                {services?.map(s =>
                                    <div key={s.id} className='min-w-0 h-full w-full flex-[0_0_100%]'>
                                        <Image src={s.picture} className='w-full h-full object-cover object-left' width={1500} height={2250} alt='Services picture' />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='z-10 absolute top-0 h-full w-full flex flex-col justify-between text-white'>
                            <div className='relative overflow-hidden bg-primary rounded-br-lg px-12 py-5 w-fit text-3xl font-semibold z-10 flex items-center gap-5 xl:px-14 lg:pb-14 xl:text-2xl'>
                                <Image src={BlocArm} className='w-20 h-auto' alt='Bloc Armé' priority />
                                <h1 key={services[index].id} className='animate-fromTTT relative'>{title}</h1>
                            </div>
                            <div className='relative mx-[1px] bg-[rgba(27,24,23,0.5)] p-10 translate-y-[100%] flex group-hover:translate-y-0 transition-all duration-[800ms] flex-col gap-8' >
                                <h1 className='underline underline-offset-[15px] text-3xl font-bold xl:text-2xl'>{subTitle}</h1>
                                <div className='max-h-[200px] flex items-center z-10'>
                                    <p key={services[index].id} className='relative animate-fromTTT text-base xl:text-sm font-semibold tracking-wide leading-7 lg:px-14 lg:pb-14'><span className='font-bold text-white'>BLOC ARMÉ® </span>{content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FOR MOBILE RESPONSIVE */}
                <div className='hidden px-10 mt-10 lg:flex w-full flex-col gap-10 items-center sm:gap-7 md:px-0'>
                    <div className='relative w-[90vw] text-new-black md:w-full md:px-3 pt-5'>
                        <ResponsiveSlider />
                    </div>
                </div>
            </section>
    )
}


function ResponsiveSlider () { 

    const OPTIONS = { slidesToScroll: 'auto', loop: true }

    // const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
        Autoplay({ playOnInit: true, delay: 4000 })
      ])
  
      const {
          prevBtnDisabled,
          nextBtnDisabled,
          onPrevButtonClick,
          onNextButtonClick
        } = usePrevNextButtons(emblaApi)

    return(
        <div className="overflow-hidden relative" ref={emblaRef}> 
        {/* CONTAINER */}
            <div className="flex touch-pan-y h-full">
            {services?.map((s, index) =>
                <div key={s.id} className="px-10 md:px-8 flex flex-col text-new-black items-center pb-5 flex-[0_0_100%]">
                    <div className='relative w-full'>
                        <div className='absolute top-0 left-0 w-full text-new-black flex'>
                            <h1 className='bg-bg-gray w-full px-4 py-5 italic font-semibold'>{s?.title}</h1>
                            <div className='px-5 bg-white flex items-center justify-center'>
                                <Image src={BlocArm} className='w-12 h-auto' alt='Bloc Armé' priority />
                            </div>
                        </div>
                        <Image src={s.picture} className='object-cover  max-h-[300px] object-bottom sm:max-h-[250px]' width={1500} height={2250} alt='Services picture' priority />
                    </div>
                    <div className='flex flex-col gap-4 border-b-2 border-black py-5' >
                        <h1 className='font-magra text-xl font-bold sm:text-lg'>{s?.title}</h1>
                        <div className='flex items-center z-10'>
                            <p key={services[index].id} className='text-base sm:text-sm tracking-wide leading-7'>BLOC ARMÉ®  {s?.description}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <Prev3 onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <Next3 onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
    )
}

function Service(props) {
    const { service, setIndex, setCurrentSelect, currentSelect, last, onClick } = props

    const [select, setSelect] = useState(false)

    useEffect(() => {
        if(service.id === currentSelect) return setSelect(true)
        setSelect(false)
    }, [currentSelect, service.id])

    return(
        <div className='group py-5 flex justify-between cursor-pointer' style={last ? {} : {borderBottom:'solid 1px #E01A21'}}
             onClick={() => {setIndex(service.id); setCurrentSelect(service.id); onClick()}}>
            <h1 className='font-semibold' style={select ? {color:'#E01A21'} : {color:'black'}}>{service.title}</h1>
            <div className='relative flex items-center justify-center p-2 rounded-full overflow-hidden xl:p-1'
                 style={select ? {backgroundColor:'#E01A21'} : {backgroundColor:'black', opacity:'0.8'}}>
                <Image src={Arrow} className='z-10' alt='Arrow' priority/>
                <div className='absolute w-10 h-10 bg-secondary rounded-full -left-[100%] transition-all duration-300 group group-hover:left-0 xl:h-8 xl:w-8'></div>
            </div>
        </div>
    )
}

function ServiceReponsive ({service}) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="flex justify-between items-center cursor-pointer gap-5 border-gray border-t-2 pt-7" onClick={() => {setOpen(!open)}}>
                <h1 className='text-lg font-semibold'>{service.title}</h1>
                <Image src={Plus} className="w-4 h-auto transition-all duration-300" style={open ? {transform:'rotate(45deg)'} : {transform:'rotate(0deg)'}} alt='Logo' priority />
            </div>
            <ul className="flex items-start overflow-hidden mb-7"
                style={open ? {maxHeight:'300px', transition:'all 1s'} : { maxHeight:0, transition:'all 500ms'}}>
                <p className='tracking-wide leading-7 pt-7'><span className='font-bold text-primary'>BLOC ARMÉ® </span>{service.description}</p>
            </ul>
            <div className="w-full bg-gray-300 h-[1px]"></div>
        </>
    )
}