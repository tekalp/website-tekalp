import Image from "next/image";

import SpiderVector from "../../../public/assets/components/spiderVector.svg"
import bull from "../../../public/assets/components/icon.svg"
import MainLogo from '../../../public/assets/header/logo.png'

export function MailSend () {
    return(
        <div className="flex flex-col max-w-[80vw] rounded-lg bg-background pb-14 pt-5 px-10 relative md:px-5 md:pb-7 sm:max-w-[95%]">
            <div className="mb-10 md:mb-5">
                <Image src={MainLogo} alt="Logo" className="h-14 w-auto" />
            </div>
            <div className="text-center flex flex-col mb-10 items-center gap-3 text-white font-medium text-lg relative">
                <Image src={bull} alt="Bull pictogram" className="absolute -top-[50px] -right-0 z-20 w-20 h-auto lg:w-12 lg:-top-[30px]" />
                <MailText text='Nous avons bien reçu votre message !' colorText='#FFF' colorBG='#E3595E' />
                <MailText text='Nous revenons vers vous rapidement' colorText='#FFF' colorBG='#000' />
            </div>
            <div className="z-0 absolute top-0 left-1/2 -translate-x-1/2 bg-[rgba(237,28,36,0.33)] blur-[150px] h-[400px] w-[400px]" ></div>
            <Image src={SpiderVector} alt="Vector" className="z-0 absolute top-0 left-0 h-auto" />
        </div>
    )
}


export function MailText ({text, colorText, colorBG}) {
    return(
      <div className='z-10 relative w-fit'>
        <div className='absolute w-full h-full rounded' style={{backgroundColor:colorBG}}></div>
        <h1 className='text-4xl px-4 py-2 relative font-extrabold xl:text-3xl lg:text-2xl md:px-2 sm:text-xl' style={{color:colorText}}>{text}</h1>
      </div>
    )
  }