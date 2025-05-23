import Image from "next/image";
import load from '../../../public/assets/loading2.svg'

export function Loader ({size="20px"}) {
    return(
        <Image src={load} className="h-auto" style={{width:size}} alt="Loading" priority />
    )
}

export function CircleLoader ({size="20px"}) {
    return(
        <Image src={load} className="h-auto" style={{width:size}} alt="Loading" priority />
    )
}