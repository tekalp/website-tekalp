import Link from 'next/link'
import Image from 'next/image'
import MainLogo from '../../../../public/assets/header/logo.png'
import Menu from './mobileMenu'
import { WhiteHamburger } from './mobileMenu'
import { useState } from 'react'
import { lock, unlock } from '@/app/_utils/lockScreen'
import { BlackNavModal } from '../modal'

import Telegram from '../../../../public/assets/header/social_red.svg'
import Linkedin from '../../../../public/assets/header/linkedin_red.svg'
import { usePathname } from 'next/navigation'

export default function BlackHeader () {
  const [menu, setMenu] = useState(false)
  const [hamburger, setHamburger] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <Menu menu={menu} setMenu={setMenu} setHamburger={setHamburger}/>
      <header className="h-32 bg-bg-white flex justify-between items-center sticky top-0 z-40 px-20 font-semibold xl:px-10 md:h-24">
        <div onClick={() => {setMenu(!menu); menu ? unlock() : lock()}} className='hidden z-40 lg:block'>
          <WhiteHamburger hamburger={hamburger} setHamburger={setHamburger}/>
        </div>
        <Link href="/#first" className='h-full flex items-center lg:justify-center lg:w-full'>
          <Image
              src={MainLogo}
              alt="Logo"
              className="max-h-[80%] w-auto sm:max-h-[60%]"
              priority />
        </Link>
        <nav className="lg:hidden">
          <ul className="flex items-center gap-14 text-xl text-typo xl:text-lg xl:gap-8">
            <li className={pathname === "/" ? 'bg-brown text-bg-white rounded-lg px-3 py-1.5' : 'bg-bg-button rounded-lg px-3 py-1.5'}>
              <Link href="/" className="">
                <p>Accueil</p>
              </Link>
            </li>
            <li>
              <BlackNavModal />
            </li>
            <li className={pathname === "/blogs" ? 'bg-brown text-bg-white rounded-lg px-3 py-1.5' : 'bg-bg-button rounded-lg px-3 py-1.5'}>
              <Link href="/blogs">
                <p>Actualités / Evènements</p>
              </Link>
            </li>
            <li className={pathname === "/contact" ? 'bg-brown text-bg-white rounded-lg px-3 py-1.5' : 'bg-bg-button rounded-lg px-3 py-1.5'}>
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='flex gap-3 items-center'>
            <button onClick={() => {window.open('mailto:contact@tekalp.fr')}} className='w-[40px] h-[40px] rounded-xl bg-bg-button flex items-center justify-center'><Image src={Telegram} alt="email" className='h-5 w-auto' /></button>
            <Link href="https://www.linkedin.com/company/tekalp/" target='_blank' className='w-[40px] h-[40px] rounded-xl bg-bg-button flex items-center justify-center'><Image src={Linkedin} alt="Linkedin" className='h-6 w-auto' /></Link>
        </div>
      </header>
    </>
    )
}

export function UnderlineHover () {
  return(
    <div className={`w-full bg-secondary mt-1 h-[2px] relative -left-[100%] transition-all duration-500 group-hover:left-0`}></div>
  )
}