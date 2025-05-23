import { InterfaceTextArea } from "./interface_input"
import { InterfaceTextInput } from "./interface_input"
import { MailSend } from "./mailSend";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { object, string } from "yup";
import { useState } from 'react'
import { CircleLoader } from "./loader";

export const schema = object({
    firstname:string(),
    lastname:string().required("Requis."),
    email:string().required("Requis.").email("Email invalide.").trim().lowercase(),
    enterprise:string(),
    comment:string().required("Requis."),
}).required();

export function ContactForm () {

    const [loading, setLoading] = useState(false)
    const [send, setSend] = useState(false)
    const [err, setErr] = useState(false)

    const {reset, handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
  
    async function onSubmit(data) {
        const { email, comment, firstname, lastname, enterprise } = data
        setErr(false)
        setLoading(true)
        try {
            const sendEmail = await fetch('/api/contact', {
                method:'POST',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message:comment, email:email, firstname:firstname, lastname:lastname, company:enterprise})
            })
            if(sendEmail.status === 200){
                setSend(true);setLoading(false);reset()
                return
            }
            setLoading(false)
            setErr(true)
        } catch (err) {
            console.log('Request failed:' + err)
            setLoading(false)
            setErr(true)
        }
    }

    return (
        <>
            {err ? <div className='text-red-500 text-sm font-semibold place-self-center -my-5'>Une erreur est survenue, réessayez plus tard.</div>: ''}
            {loading
                ? <CircleLoader />
                : send 
                    ?         
                    <div className="max-w-[800px] px-10 rounded-xl bg-bg-low mt-14 py-5 gap-3 bg-[rgba(239,239,239,1)] text-center flex flex-col items-center justify-center  text-typo font-semibold text-xl xl:text-lg sm:text-base md:px-5">
                        <p>Demande de contact bien reçu !</p>
                        <p className="font-medium">Nous vous répondrons dans les plus brefs délais !</p>
                    </div>
                    : <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 bg-[rgba(239,239,239,1)] relative text-white px-12 pt-12 gap-x-10 gap-y-5 w-full rounded-md lg:w-[80vw] sm:flex sm:flex-col 2sm:w-[90vw] md:px-3 md:pt-3'>
                        <InterfaceTextInput label='Nom *' placeholder='Dubuis' name="lastname" options={{...register("lastname")}} commonError={errors.lastname} commonErrorMessage={errors.lastname?.message}/>
                        <InterfaceTextInput label='Prénom' placeholder='Joe' name="firstname" options={{...register("firstname")}} commonError={errors.firstname} commonErrorMessage={errors.firstname?.message}/>
                        <InterfaceTextInput label='Email *' placeholder='abc@abc.fr' name="email" options={{...register("email")}} commonError={errors.email} commonErrorMessage={errors.email?.message}/>
                        <InterfaceTextInput label={`Nom d'entreprise`} placeholder='' name="enterprise" options={{...register("enterprise")}} commonError={errors.enterprise} commonErrorMessage={errors.enterprise?.message}/>
                        <InterfaceTextArea label='Commentaire *' placeholder={`Décrivez nous votre besoin !`} name="comment" height={3}  options={{...register("comment")}} commonError={errors.comment} commonErrorMessage={errors.comment?.message}/>
                        <p className='text-xs font-light col-span-2 text-primary mb-10 sm:mb-14'>* En soumettant ce formulaire, j’accepte que les informations saisies dans ce formulaire soient utilisées, exploitées, traitées pour permettre de me recontacter, ou dans le cadre de la relation commerciale qui découlerait d’une demande de devis.</p>
                        <div className='left-1/2 -translate-x-1/2 absolute bottom-0 translate-y-1/2 '>
                            <button type='submit' className='px-[40px] flex gap-3 rounded-xl py-3 bg-new-black text-white shadow-button'>
                                <p className='font-bold text-white'>ENVOYER</p>
                            </button>
                        </div>
                    </form>
            }
        </>
    )
}