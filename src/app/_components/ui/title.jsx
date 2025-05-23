import { motion } from "framer-motion";

export function CustomTitle ({title1, title2, width="120%", height="135%"}) {
    return(
    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 150, damping: 25 }} className='flex flex-col gap-2 relative w-fit h-full m-12 md:gap-0'>
        <div className='absolute -bottom-12 md:-bottom-8 w-[1px] bg-new-black -left-2' style={{height:`${height}`}}></div>
        <h2 className='text-[rgb(189,189,189)] text-6xl xl:text-5xl lg:text-4xl leading-none md:text-3xl font-light'>{title1}</h2>
        <h2 className='text-7xl font-magra xl:text-6xl lg:text-5xl leading-none md:text-4xl tracking-tight font-bold text-new-black'>{title2}</h2>
        <div className='absolute -left-12 h-[1px] bg-new-black -bottom-2 md:-left-6 max-w-[100vw]' style={{width:`${width}`}}></div>
    </motion.div>
    )
}