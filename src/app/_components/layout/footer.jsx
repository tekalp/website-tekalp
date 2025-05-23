import Link from 'next/link'
import Image from 'next/image'
import downArrow from '../../../../public/assets/essentials-icons/down_arrow_white.svg'
import Linkedin from '../../../../public/assets/footer/linkedin.svg'
import MainLogo from '../../../../public/assets/footer/footer-logo.gif'

import { object, string } from "yup";
import { useRef, useState } from 'react'

export const schema = object({
    email:string().required("Requis.").email("Email invalide.").trim(),
}).required();

export default function Footer () {
    return (
        <footer className="bg-[#1B1817] py-14 flex justify-center px-10 gap-10 sm:py-10 w-[96%] md:px-0 ml-[2%] md:w-full md:ml-0 rounded-tl-md rounded-tr-md">

            <div className='items-center justify-center gap-5 max-w-[1200px] grid grid-cols-[1fr_2px_1fr_2px_1fr] w-full text-white text-lg xl:text-base lg:gap-5 md:hidden'>
                <Link href="/#first" className='flex items-center px-5 w-fit place-self-center'>
                    <Image src={MainLogo} alt="Logo" className="w-36 min-w-36 h-auto xl:w-16 xl:min-w-16" priority unoptimized={false} />
                </Link>
                
                <div className='h-[160px] w-[2px] bg-white'></div>
                <ul className="flex flex-col px-5 gap-3 text-nowrap w-fit place-self-center md:font-semibold">
                    <li><Link href="/" className="">Accueil</Link></li>
                    <li><Link href="/company" className="">L’entreprise</Link></li>
                    <li><Link href="/solutions/bloc-arme" className="">Nos solutions</Link></li>
                    <li><Link href="/references" className="">Nos références</Link></li>
                    <li><Link href="/blogs" className="">Actualités et évènements</Link></li>
                </ul>
                <div className='h-[160px] w-[2px] bg-white'></div>
                <ul className="flex flex-col px-5 gap-3 text-nowrap w-fit place-self-center md:font-semibold">
                    <li><Link href="/politics" className="">Politique de confidentialité</Link></li>
                    <li><Link href="/mentions" className="">Mentions légales</Link></li>
                    <li><Link href="/contact" className="">Nous contacter</Link></li>
                    <li className='flex gap-3 items-center'>
                        <Link href="https://www.linkedin.com/company/tekalp/" target='_blank' className='w-[40px] h-[40px] bg-background rounded-md flex items-center justify-center mb-1'>
                            <Image src={Linkedin} alt="Linkedin" className='h-6 w-auto' />
                        </Link>
                        <div className='flex flex-col text-start leading-none'>
                            <p className='font-light text-base'>LINKEDIN</p>
                            <p className='font-semibold text-2xl lg:text-xl'>SUIVEZ-NOUS</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='flex-col w-full hidden md:flex'>
            <Link href="/#first" className='flex items-center w-fit place-self-center pb-5'>
                <img
                    src={MainLogo.src}
                    alt="Logo"
                    className="w-36 min-w-36 h-auto xl:w-24 xl:min-w-24" />
            </Link>
             <FooterAccordion title="NAVIGATION"
                text={
                    <ul className="flex flex-col px-3 gap-5 text-center text-nowrap font-medium">
                        <li><Link href="/" className="">Accueil</Link></li>
                        <li><Link href="/company" className="">L’entreprise</Link></li>
                        <li><Link href="/solutions/bloc-arme" className="">Nos solutions</Link></li>
                        <li><Link href="/references" className="">Nos références</Link></li>
                        <li><Link href="/blogs" className="">Actualités et évènements</Link></li>
                    </ul>
                }
             />
             <FooterAccordion title="INFORMATIONS LEGALES"
                text={
                    <ul className="flex flex-col px-3 gap-5 text-center text-nowrap font-medium">
                    <li><Link href="/politics" className="">Politique de confidentialité</Link></li>
                    <li><Link href="/mentions" className="">Mentions légales</Link></li>
                    <li><Link href="/contact" className="">Nous contacter</Link></li>
                </ul>
                }
             />
                <div className='flex gap-3 items-center py-5 place-self-center'>
                <Link href="https://www.linkedin.com/company/tekalp/" target='_blank' className='w-[40px] h-[40px] bg-background rounded-md flex items-center justify-center mb-1'>
                    <Image src={Linkedin} alt="Linkedin" className='h-6 w-auto' />
                </Link>
                <div className='flex flex-col text-start leading-none'>
                    <p className='font-light text-base'>LINKEDIN</p>
                    <p className='font-semibold text-2xl lg:text-xl'>SUIVEZ-NOUS</p>
                </div>
            </div>
            </div>
        </footer>
    )
}

export function FooterAccordion ({title, text}) {
    const details = useRef(null)
    const [heightDetails, setHeightDetails] = useState()
    const [openDetails, setOpenDetails] = useState(false)
    return(
        <div className="flex flex-col border-y border-[rgba(255,255,255,0.3)]">
            <section className="flex justify-between py-5 text-start  gap-3 items-center cursor-pointer w-full group" onClick={() => {setHeightDetails(details?.current?.offsetHeight); setOpenDetails(!openDetails)}}>
                <div className='flex justify-between font-semibold px-4 items-center w-full'>
                    <h2>{title}</h2>
                    <Image src={downArrow} alt="Chevron" className={`${openDetails ? "rotate-180" : "rotate-0"} transition-all h-6 w-auto`} />
                </div>
            </section>
            <section className="flex justify-start text-start items-start w-full overflow-hidden pr-6 text-lg sm:text-base" style={openDetails ? {maxHeight:`${heightDetails}px`, transition:'all 500ms'} : { maxHeight:0, transition:'all 300ms'}}>
                <div ref={details} className="flex w-full justify-center text-center pb-8 sm:pb-5">
                    {text}
                </div>
            </section>
        </div>
    )
}