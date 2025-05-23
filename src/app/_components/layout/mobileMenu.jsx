import Image from "next/image"
import Link from "next/link"
import { unlock } from "@/app/_utils/lockScreen"
import MenuIcon from '../../../../public/assets/header/menu.svg'
import MenuIcon2 from '../../../../public/assets/header/menu2.svg'
import circle from '../../../../public/assets/header/down_chevron.svg'
import {  useRef, useState } from "react"

export default function Menu ({menu, setMenu , setHamburger}) {

    const details = useRef(null)
    const [heightDetails, setHeightDetails] = useState()
    const [openDetails, setOpenDetails] = useState(false)

    return (
        <>
            <div className="fixed w-full h-full left-0 top-0 z-50 bg-black/60 cursor-pointer"
                    style={menu ? {opacity:1, transition:'opacity 1s'} : {opacity:0, zIndex:-10}} onClick={() => {setMenu(false);unlock();setHamburger(false)}}></div>
                <menu className="fixed pl-10 w-[60%] max-w-[500px] pr-10 h-full top-0 bg-white z-[60] py-16 flex-col items-center flex sm:w-full sm:px-3 md:py-10"
                style={menu ? {left:0, transition:'left 400ms ease-out'} : {left:"-100%"}}>
                <div className="flex items-start w-full justify-between">
                    <h2 className="text-lg font-medium text-primary">Menu</h2>
                    <div className="ml-3 flex h-7 items-center">
                        <button type="button" className="relative -m-2 p-2 text-primary" 
                                onClick={() => {setMenu(false);unlock();setHamburger(false)}}>
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                <nav className="pt-3 w-full text-black mt-10">
                    <ul className="flex flex-col w-full divide-y divide-gray text-lg sm:text-base">
                        <NavLink link="/company" text="L'ENTREPRISE" setHamburger={setHamburger} setMenu={setMenu} />
                        <NavLink link="/references" text="NOS RÉFÉRENCES" setHamburger={setHamburger} setMenu={setMenu} />
                        <li className="flex flex-col w-full text-new-black">
                            <section className="flex justify-between py-6 text-start  gap-3 items-center cursor-pointer w-full group" onClick={() => {setHeightDetails(details?.current?.offsetHeight); setOpenDetails(!openDetails)}}>
                                <div className='flex gap-4 font-medium px-4 justify-between w-full'>
                                    <h2>NOS SOLUTIONS</h2>
                                    <Image src={circle} alt="Chevron" className={`${openDetails ? "rotate-180" : "rotate-0"} transition-all h-6 w-auto place-self-end`} />
                                </div>
                            </section>
                            <section className="flex justify-start text-start items-start w-full overflow-hidden pr-6" style={openDetails ? {maxHeight:`${heightDetails}px`, transition:'all 500ms'} : { maxHeight:0, transition:'all 300ms'}}>
                                <div ref={details} className="flex flex-col gap-4 w-full pb-6 text-base pl-4">
                                    <Link href="/solutions/bloc-arme" onClick={() => {setMenu(false);unlock();setHamburger(false)}} className='w-full text-new-gray bg-black items-center flex flex-col gap-2 relative py-1.5' >
                                        <Image src={MenuIcon} alt="Icône menu" className="z-10 absolute -left-[1px] top-0 h-full w-auto" />
                                        <div className="flex flex-col relative z-0">
                                            <p className="font-medium tracking-wide">Bloc Armé</p>
                                        </div>
                                        <Image src={MenuIcon2} alt="Icône menu" className="z-10 absolute -right-[1px] top-0 h-full w-auto" />
                                    </Link>
                                    <div className='text-new-gray bg-black/30 items-center flex flex-col gap-2 h-full relative py-1.5' >
                                        <Image src={MenuIcon} alt="Icône menu" className="z-10 absolute h-full -left-[1px] top-0 w-auto" />
                                        <div className="flex flex-col relative z-0">
                                            <p className="font-medium tracking-wide">Rim nat (bientôt disponible)</p>
                                        </div>
                                        <Image src={MenuIcon2} alt="Icône menu" className="z-10 absolute -right-[1px] top-0 h-full w-auto" />
                                    </div>
                                </div>
                            </section>
                        </li>

                        <NavLink link="/blogs" text="ACTUALITÉS ET ÉVÈNEMENTS" setHamburger={setHamburger} setMenu={setMenu} />
                        <Link href="/contact" onClick={() => {setMenu(false);unlock();setHamburger(false)}} className='w-full text-new-gray rounded-md bg-black px-4 flex flex-col gap-2 relative py-1.5' >
                            <div className="flex flex-col relative z-0">
                                <p className="tracking-wide font-bold">NOUS CONTACTER</p>
                            </div>
                            <Image src={MenuIcon2} alt="Icône menu" className="z-10 absolute -right-[1px] top-0 h-full w-auto" />
                        </Link>
                    </ul>
                </nav>
            </menu>
        </>
    )
}


function NavLink ({text, link, setHamburger, setMenu}) {
    const closeBurger = () => {setHamburger(false);setMenu(false);unlock()}
    return(
        <li className="py-6 h-full font-medium text-typo w-full flex px-4">
            <Link href={`${link}`} onClick={closeBurger} className='flex gap-2'>
                <p>{text}</p>
            </Link>
        </li>
    )
}

export function Hamburger ({hamburger, setHamburger}) {
    return (
        <div className='flex flex-col justify-between h-4 w-10 relative cursor-pointer' onClick={() => setHamburger(!hamburger)}>
            <HamburgerLine animation={hamburger ? {transform:'rotate(45deg)', top:'7px'} : {transform:'rotate(0)', left:0, top:0}}/>
            <HamburgerLine animation={hamburger ? {width:0} : {width:'100%'}} duration={'400ms'} />
            <HamburgerLine animation={hamburger ? {transform:'rotate(-45deg)', top:'-7px'} : {transform:'rotate(0)', left:0, top:0}}/>
        </div>
    )
  }

export function WhiteHamburger ({hamburger, setHamburger}) {
    return (
        <div className='flex flex-col justify-between h-4 w-5 relative cursor-pointer' onClick={() => setHamburger(!hamburger)}>
            <WhiteHamburgerLine animation={hamburger ? {transform:'rotate(45deg)', top:'7px'} : {transform:'rotate(0)', left:0, top:0}}/>
            <WhiteHamburgerLine animation={hamburger ? {width:0} : {width:'100%'}} duration={'400ms'} />
            <WhiteHamburgerLine animation={hamburger ? {transform:'rotate(-45deg)', top:'-7px'} : {transform:'rotate(0)', left:0, top:0}}/>
        </div>
    )
  }


function HamburgerLine ({animation}) {
    return(
    <span className={`bg-black h-[2px] w-full relative transition-all`}
          style={animation}></span>
    )
}

function WhiteHamburgerLine ({animation}) {
    return(
    <span className={`bg-dark_blue h-[2px] w-full relative transition-all`}
          style={animation}></span>
    )
}