import Link from 'next/link'
import Image from 'next/image'
import MainLogo from '../../../../public/assets/header/logo.png'
import EmailLogo from '../../../../public/assets/header/email.svg'
import Menu from './mobileMenu'
import { Hamburger } from './mobileMenu'
import { useState } from 'react'
import { lock, unlock } from '@/app/_utils/lockScreen'

import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const parentVariants = {
  visible: { y: 0 },
  hidden: { y: "-80px" },
};

export default function Header () {
  const [menu, setMenu] = useState(false)
  const [hamburger, setHamburger] = useState(false)

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  function update(latest, prev) {
    if (latest < prev) {
      setHidden(false);
      // console.log("visible");
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
      // console.log("hidden");
    }
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <>
      <Menu menu={menu} setMenu={setMenu} setHamburger={setHamburger}/>
      <motion.header
      variants={parentVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05,
      }} className="h-20 bg-[rgba(237,237,237,1)] flex justify-between items-center sticky top-0 z-40 font-semibold px-20 xl:px-10 sm:px-5">
        <div onClick={() => {setMenu(!menu); menu ? unlock() : lock()}} className='z-40'>
          <Hamburger hamburger={hamburger} setHamburger={setHamburger}/>
        </div>
        <Link href="/" className='h-20 flex items-center lg:justify-center lg:w-full'>
          <Image
              src={MainLogo}
              alt="Logo"
              className="max-h-[95%] w-auto"
              priority />
        </Link>
        <Link href="/contact" className='flex gap-3 items-center text-typo'>
            <button className='font-medium whitespace-nowrap md:hidden'>CONTACTEZ-NOUS</button>
            <Image src={EmailLogo} className='hidden md:block w-8' alt="Tekalp" priority />
        </Link>
      </motion.header>
    </>
    )
}

export function UnderlineHover () {
  return(
    <div className={`w-full bg-secondary mt-1 h-[2px] relative -left-[100%] transition-all duration-500 group-hover:left-0`}></div>
  )
}