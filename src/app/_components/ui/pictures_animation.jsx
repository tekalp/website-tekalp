import Image from "next/image"
import autoScroll1 from '/public/assets/components/auto-scroll1.webp'
import autoScroll2 from '/public/assets/components/auto-scroll2.webp'
import autoScroll3 from '/public/assets/components/auto-scroll3.webp'
import autoScroll4 from '/public/assets/components/auto-scroll4.webp'
import autoScroll5 from '/public/assets/components/auto-scroll5.webp'
import autoScroll6 from '/public/assets/components/auto-scroll6.webp'


export function CardCol1 () {
    return (
        <span className="animate-[defil2_8s_linear_infinite] whitespace-nowrap grid grid-cols-1 grid-rows-3 gap-y-5 pt-5">
            <CardAnimation image={autoScroll1} alt="Photo de présentation" title="PROTÉGER" />
            <CardAnimation image={autoScroll2} alt="Photo de présentation" />
            <CardAnimation image={autoScroll3} alt="Photo de présentation" />
        </span>
    )
}

export function CardCol2 () {
    return (
        <span className="animate-[defil2_8s_linear_infinite] whitespace-nowrap grid grid-cols-1 grid-rows-3 gap-y-5 pt-5">
            <CardAnimation image={autoScroll4} alt="Photo de présentation" />
            <CardAnimation image={autoScroll5} alt="Photo de présentation" />
            <CardAnimation image={autoScroll6} alt="Photo de présentation" title="PRÉVENIR" />
        </span>
    )
}

export function CardCol3() {
    return (
        <span className="animate-[defil2_8s_linear_infinite] whitespace-nowrap grid grid-cols-1 grid-rows-3 gap-y-5 pt-5">
            <CardAnimation image={autoScroll3} alt="Photo de présentation" />
            <CardAnimation image={autoScroll1} alt="Photo de présentation" title="COLLABORER" />
            <CardAnimation image={autoScroll2} alt="Photo de présentation" />
        </span>
    )
}
  
function CardAnimation ({image, title, alt}) {
  return(
    <div className='relative w-full h-[400px] min-h-[250px] max-h-[400px] flex items-center md:h-[22vh]'>
        <Image src={image} alt={alt} className='object-cover w-full h-full' priority />
        {
            title 
             ? <div className="px-2 py-4 bg-bg-gray absolute rotate-text top-0 right-0 h-full font-semibold flex justify-center text-xl">{title}</div>
             : ""
        }
    </div>
  )
}

  