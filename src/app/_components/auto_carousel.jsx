import Image from "next/image"
import Partner1 from '../../../public/assets/homepage/sponso1.webp'
import Partner2 from '../../../public/assets/homepage/sponso2.webp'
import Partner3 from '../../../public/assets/homepage/sponso3.webp'
import Partner4 from '../../../public/assets/homepage/sponso4.webp'
import Partner5 from '../../../public/assets/homepage/sponso5.webp'

import sponso_gray1 from '../../../public/assets/homepage/sponso_gray1.webp'
import sponso_gray2 from '../../../public/assets/homepage/sponso_gray2.webp'
import sponso_gray3 from '../../../public/assets/homepage/sponso_gray3.webp'
import sponso_gray4 from '../../../public/assets/homepage/sponso_gray4.webp'
import sponso_gray5 from '../../../public/assets/homepage/sponso_gray5.webp'

export function S1CardCol1 ({gray=false}) {
    return (
        <span className="animate-[defil_12s_linear_infinite] whitespace-nowrap flex items-center gap-x-10 pr-10">
            <CardAnimation image={gray ? sponso_gray1 : Partner1} alt="Partenaire" />
            <CardAnimation image={gray ? sponso_gray2 : Partner2} alt="Partenaire" />
            <CardAnimation image={gray ? sponso_gray3 : Partner3} alt="Partenaire" />
            <CardAnimation image={gray ? sponso_gray4 : Partner4} alt="Partenaire" />
            <CardAnimation image={gray ? sponso_gray5 : Partner5} alt="Partenaire" />
        </span>
    )
  }
  
function CardAnimation ({image, alt}) {
    return(
        <div className='relative h-[50px] w-[16vw] min-w-[100px] max-w-[400px] flex items-center'>
            <Image src={image} alt={alt} className='object-contain w-full max-w-[150px] h-full' priority />
        </div>
    )
}