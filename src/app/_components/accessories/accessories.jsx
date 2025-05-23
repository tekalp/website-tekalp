import Image from "next/image"
import Check from '../../../../public/assets/homepage/check.svg'


export function Card1 ({text1, text2, text3, title, bgColor}) {
    return(
      <div className='flex flex-col rounded-2xl overflow-hidden shadow-base w-[285px] hover:scale-105 transition-all duration-500 xl:w-[260px] sm:w-[340px]'>
        <h2 className='text-3xl font-bold py-7 text-dark_blue px-6 text-center xl:text-2xl lg:text-xl' style={{backgroundColor:bgColor}}>{title}</h2>
        <div className='py-7 flex flex-col gap-7 px-6 sm:gap-3 sm:py-4'>
          <HyphenCard text={text1} />
          <HyphenCard text={text2} />
          <HyphenCard text={text3} />
        </div>
      </div>
    )
  }
  
function HyphenCard ({text}) {
    return (
      <li className='flex items-center gap-3 text-primary font-semibold text-[15px] xl:text-sm'>
        <div className='w-6 h-6 rounded-full bg-dark_blue flex items-center justify-center sm:w-5 sm:h-5'>
          <Image src={Check} alt="validate" className='h-4 w-auto sm:h-3' />
        </div>
        <p className='text-nowrap'>{text}</p>
      </li>
    )
  }
  
export function Card2 ({title, icon}) {
    return(
      <div className='relative group flex w-fit'>
        <div className='cursor-pointer h-[180px] relative z-10 w-[180px] bg-specialCard rounded-xl flex items-center justify-center lg:w-[140px] lg:h-[140px] md:w-[100px] md:h-[100px]'>
          <h2 className='font-extrabold text-new-gray text-xl lg:text-base lg:font-bold md:text-xs'>{title}</h2>
        </div>
        <div className='h-[180px] z-0 w-[180px] bg-gray absolute -top-[56px] rounded-xl transition-all duration-500 flex justify-center lg:w-[140px] lg:h-[140px] md:w-[100px] md:h-[100px] md:-top-[46px]'>
          <Image src={icon} alt="validate" className='py-3 z-10 h-14 w-auto md:h-12' />
        </div>
      </div>
    )
  }
  
export function Proof ({title, description, isIntersecting3}) {
    return(
      <div className='flex flex-col items-center gap-5 transition-all sm:gap-2' style={isIntersecting3 ? {transform:'translateY(0%)', opacity:1, transitionDuration:'1500ms'} : {transform:'translateY(-100%)', opacity:0, transitionDuration:'100ms'}}>
        <h1 className='text-7xl text-new-black font-semibold tracking-wide xl:text-5xl lg:text-4xl sm:text-2xl'>{title}</h1>
        <p className='text-xl text-new-black text-center italic lg:text-lg sm:text-base sm:max-w-[90px]'>{description}</p>
      </div>
    )
  }