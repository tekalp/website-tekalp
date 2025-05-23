import Image from "next/image";
import Link from "next/link";

import SpiderVector from "../../../public/assets/components/spiderVector.svg"
import Download from "../../../public/assets/homepage/download.svg"
import block from "../../../public/assets/homepage/blocarme.webp"
import MainLogo from '../../../public/assets/header/logo.png'
import { unlock } from "../_utils/lockScreen";
import { useEffect, useRef, useState } from "react";

import { CircleLoader } from "./loader";
import { FormTextInput } from "./interface_input"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { object, string } from "yup";
import { MailText } from "./mailSend";


export function DownloadForm ({openForm, setOpenForm, position}) {
    const [height, setHeight] = useState(position)
    const [send, setSend] = useState(false)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setHeight(position)
    }, [position])

    return(
        <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden bg-black/80 flex items-center justify-center z-50 absolute left-0 sm:items-start sm:pb-28"
            style={openForm ? {display:'flex', top:`${height}px`} : {display:'none', top:`${height}px`}}>
            <div className="flex h-auto flex-col max-w-[80vw] rounded-lg bg-background pb-6 pt-5 px-10 relative md:px-5 md:pb-5 sm:max-w-[100%]">
                {loading
                    ? <CircleLoader />
                    : <>
                        <Image src={MainLogo} alt="Logo" className="w-14 h-auto" />
                            {!send 
                                ? <>
                                    <div className="z-10 text-center flex flex-col -mt-5 mb-7 items-center gap-3 text-white font-medium text-lg relative">
                                        <Image src={block} alt="Block armé pictogram" className="w-28 h-auto mb-5" />
                                        <DownloadTest text='Vous souhaitez en savoir plus ?' colorText='#FFF' colorBG='#000' />
                                        <DownloadTest text='Complétez notre formulaire pour recevoir notre fiche technique ' colorText='#FFF' colorBG='#000' />
                                    </div>
                                    <div className="z-10 place-self-center">
                                        <CurrentForm setOpenForm={setOpenForm} setSend={setSend} />
                                    </div>
                                </>
                                : <div className="flex flex-col max-w-[80vw] rounded-lg bg-transparent pb-14 pt-10 px-10 relative md:px-5 md:pb-7 sm:max-w-[95%]">
                                    <div className="text-center flex flex-col mb-10 items-center gap-3 text-white font-medium text-lg relative">
                                        <MailText text='Notre brochure Bloc Armé se trouve' colorText='#FFF' colorBG='#E3595E' />
                                        <MailText text='dans votre boîte mail !' colorText='#FFF' colorBG='#000' />
                                    </div>
                                    <button onClick={() => {setSend(false);setOpenForm(false);unlock()}} className='px-[40px] w-fit place-self-center flex gap-3 rounded-xl py-3 bg-secondary md:px-5 md:text-sm'>
                                        <p className='font-bold text-background z-30'>Retour au site</p>
                                    </button>
                                </div>
                            }
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[rgba(237,28,36,0.33)] blur-[150px] h-[400px] w-[400px]" ></div>
                            <Image src={SpiderVector} alt="Vector" className="z-0 absolute top-0 left-0 h-auto" />
                        </>
                    }
            </div>
        </div>
    )
}

function DownloadTest({text, colorText, colorBG}) {
    return(
      <div className='z-10 relative w-fit'>
        <div className='absolute w-full h-full rounded-xl' style={{backgroundColor:colorBG}}></div>
        <h1 className='text-2xl px-8 py-2 relative font-extrabold xl:text-xl lg:text-lg md:px-2 sm:text-base' style={{color:colorText}}>{text}</h1>
      </div>
    )
  }


const schema1 = object({
    firstname:string(),
    lastname:string().required("Requis."),
    email:string().required("Requis.").email("Email invalide.").trim().lowercase(),
    phone:string().required("Requis.").matches(/^[0-9]*$/, 'Numéro non valide.'),
    enterprise:string(),
});

function CurrentForm ({setOpenForm, setSend, setLoading}) {
    const [err, setErr] = useState(false)
    const [errorMessage, setErrorMessage] = useState("Une erreur est survenue.")

    const {reset, handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(schema1)
    })

    const test = useRef()
  
    async function onSubmit(data) {
        setErr(false)
        setLoading(true)
        const { email, phone, firstname, lastname, enterprise } = data
        //check in the list if email is subcribe
        try {
            const res = await fetch('/api/newsletter', {
                method:'POST',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email:email,
                    phone:phone,
                    firstname:firstname,
                    lastname:lastname,
                    enterprise:enterprise
                })
            })
            const response = await res.json()
            if(response.success){
                setSend(true)
                setLoading(false)
            } else {
              response.error ? setErrorMessage(response.error) : setErrorMessage("Une erreur est survenue.")
              setErr(true)
              setLoading(false)
              reset()
            }
        } catch (err) {
          console.error('Request failed:' + err)
          setLoading(false)
        }
    }

    return (
        <>
            {err ? <div className='text-red-500 text-sm font-semibold place-self-center mb-4'>{errorMessage}</div>: ''}
            <form ref={test} onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-x-10 gap-y-3 w-[700px] rounded-xl lg:w-[70vw] sm:flex sm:flex-col 2sm:w-[90vw]'>
                <FormTextInput label='Nom *' placeholder='Dubuis' name="lastname" options={{...register("lastname")}} commonError={errors.lastname} commonErrorMessage={errors.lastname?.message}/>
                <FormTextInput label='Email *' placeholder='abc@abc.fr' name="email" options={{...register("email")}} commonError={errors.email} commonErrorMessage={errors.email?.message}/>
                <FormTextInput label='Prénom' placeholder='Joe' name="firstname" options={{...register("firstname")}} commonError={errors.firstname} commonErrorMessage={errors.firstname?.message}/>
                <FormTextInput label={`Nom d'entreprise`} placeholder='' name="enterprise" options={{...register("enterprise")}} commonError={errors.enterprise} commonErrorMessage={errors.enterprise?.message}/>
                <FormTextInput label='Téléphone *' placeholder={`0606060606`} name="phone"  options={{...register("phone")}} commonError={errors.phone} commonErrorMessage={errors.phone?.message}/>
                <p className='text-xs font-light col-span-2 text-primary'>En envoyant cette demande, vous agréez à la <Link href='/politics' onClick={unlock} className='font-bold'>politique de la protection des données*</Link>.</p>
                <div className='col-span-2 justify-center gap-1 flex flex-col mt-5'>
                    <button type='submit' className='px-[20px] z-[100] w-fit place-self-center cursor-pointer flex gap-3 rounded-xl py-3 bg-secondary/80 hover:bg-secondary hover:scale-105 transition-all duration-500 md:px-5 md:text-sm'>
                        <p className='font-bold text-background'>Recevoir ma brochure bloc armé</p>
                        <Image src={Download} alt="download" className='h-6 w-auto sm:h-5' />
                    </button>
                    <button onClick={() => {setOpenForm(false);unlock()}} className='px-[20px] w-fit place-self-center flex py-3 bg-transparent md:px-5 md:text-sm'>
                        <p className='font-bold text-primary z-30'>Retour au site</p>
                    </button>
                </div>
            </form>
        </>

    )
}