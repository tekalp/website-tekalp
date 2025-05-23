"use client"

import Image from 'next/image'

import main3 from '../../../public/assets/references/references.webp'
import main4 from '../../../public/assets/references/references.svg'

import filter_icon from '../../../public/assets/blog/filter-icon.svg'

import Footer from './layout/footer'
import { CustomSkeleton } from '../_utils/littleComponents'
import Link from 'next/link'

import Header from './layout/header'
import { BowSlider } from './tekalp'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { renderRichTextToHTML } from '../_utils/richTextRender'
import { inputStyleGoldNuggetCustom, themeGoldNugget } from '../_utils/selectInput'
import { cn } from '../_utils/animate'

export default function ReferencesFeature({articles, references}) {
    const [referencesTekalp, setReferencesTekalp] = useState(null)
    const [currentfilter, setFilter] = useState(null)

    const [lastWebinaire, setLastWebinaire] = useState(null)
    const today = new Date();

    useEffect(() => {
      const getEventDate = (event) => {
        const dateField = event?.metafields?.find(mf => mf?.key === "date_webinaire");
        return dateField ? new Date(dateField.value) : null;
      };
      
      const futureEvents = articles?.filter(a => a.tags[0] === "event")
        .filter(e => {
          const date = getEventDate(e);
          return date && date > today;
        })
        .sort((a, b) => getEventDate(b) - getEventDate(a));

      setLastWebinaire((futureEvents?.length > 0 && futureEvents) 
        ? futureEvents
        : null
      )

    }, [articles])


    const [selectedTypo, setSelectedTypo] = useState(null)
    const [optionsTypo, setOptionsTypo] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [optionsProduct, setOptionsProduct] = useState(null)

    useEffect(() => {
        const allTypo = references?.map(ref => ref?.fields?.find(f => f.key === "typologie")?.value)
        const filtered = [...new Set(allTypo)]
        setOptionsTypo(filtered?.map(f => ({value:f, label:f})))
    }, [references])

    useEffect(() => {
        const allTypo = references?.map(ref => ref?.fields?.find(f => f.key === "produit")?.value)
        const filtered = [...new Set(allTypo)]
        setOptionsProduct(filtered?.map(f => ({value:f, label:f})))
    }, [references])


    useEffect(() => {
        if(!selectedTypo && !selectedProduct) {
            setReferencesTekalp(references)
        } else if (selectedTypo && !selectedProduct) {
            const allTypo = references?.filter(ref => ref?.fields?.find(f => f.key === "typologie")?.value === selectedTypo?.value)
            setReferencesTekalp(allTypo)
        } else if (!selectedTypo && selectedProduct) {
            const allTypo = references?.filter(ref => ref?.fields?.find(f => f.key === "produit")?.value === selectedProduct?.value)
            setReferencesTekalp(allTypo)
        } else {
            const allTypo = references?.filter(ref => ref?.fields?.find(f => f.key === "typologie")?.value === selectedTypo?.value).filter(ref => ref?.fields?.find(f => f.key === "produit")?.value === selectedProduct?.value)
            setReferencesTekalp(allTypo)
        }
    }, [references, selectedTypo, selectedProduct])

  return (
    <>
        <Header />
        <main id='mainIndex' className='overflow-x-hidden flex flex-col'>

            <section className='w-[100vw] min-h-withOutHeader md:min-h-[450px] overflow-hidden h-withOutHeader md:h-auto relative hxl:min-h-full hxl550:min-h-[450px]'>
                <div className='flex h-full sm:hidden'>
                    <BowSlider image={main3} title1="TEKALP" title2={<span className='font-magra'>{`Références et réalisations`.toUpperCase()}</span>} href1={lastWebinaire} href2="/company" button2="L'ENTREPRISE" styleTitle2="text-[3vw] md:text-3xl" />
                </div>
                <div className='h-full hidden sm:flex'>
                    <BowSlider image={main4} title1="TEKALP" title2={<span className='font-magra'>{`Références et réalisations`.toUpperCase()}</span>} href1={lastWebinaire} href2="/company" button2="L'ENTREPRISE" styleTitle2="text-[3vw] md:text-3xl" />
                </div>
            </section>

            <section className="w-full flex flex-col items-center relative">
                <div className='w-full flex flex-col gap-10 max-w-[1400px] px-8 pt-24 pb-16 relative sm:px-4 md:pt-10'>
                    <div className='flex flex-col gap-2 relative w-fit my-12 mr-12 ml-6 text-new-black lg:ml-12 lg:mt-6 md:gap-0'>
                        <div className={`bg-new-black absolute -bottom-12 w-[1px] -left-2 h-[145%] md:h-[140%] md:-bottom-6`}></div>
                        <h2 className='text-[rgb(189,189,189)] text-4xl xl:text-3xl lg:text-2xl leading-none md:text-xl font-light'>NOS SOLUTIONS</h2>
                        <h2 className='text-6xl font-magra xl:text-5xl lg:text-4xl leading-none md:text-3xl tracking-tight font-bold text-new-black'>EN PRATIQUE</h2>
                        <div className={`bg-new-black absolute -left-8 h-[1px] -bottom-2 max-w-[100vw] w-[130%] md:bottom-0`}></div>
                    </div>
                    <div className='w-fit place-self-center flex flex-col gap-4 px-8 py-5 sm:px-0 sm:py-0'>
                        <div className='flex gap-2 items-center'>
                            <Image src={filter_icon} alt='Icone de filtre' className='' />
                            <p className='text-sm text-new-black italic'>Filtrez votre recherche</p>
                        </div>
                        <div className='flex gap-3 items-center w-fit place-self-end flex-wrap'>
                            <button onClick={() => setSelectedTypo(null)} className='w-fit px-5 h-[40px] text-white flex items-center bg-new-black cursor-pointer text-base md:h-9 md:px-4 font-medium rounded-md text-nowrap sm:place-self-center sm:text-sm'>Toutes nos réalisations</button>
                            {!optionsTypo
                                ? ""
                                : <Select placeholder="Choisir une typologie"
                                        styles={inputStyleGoldNuggetCustom} theme={themeGoldNugget.theme}
                                        className='block text-new-black w-fit h-[40px]'
                                        value={selectedTypo}
                                        onChange={(e) => setSelectedTypo(e)}
                                        options={optionsTypo} instanceId={1} />
                            }
                            {!optionsProduct
                                ? ""
                                : <Select placeholder="Choisir un produit"
                                        styles={inputStyleGoldNuggetCustom} theme={themeGoldNugget.theme}
                                        className='block text-new-black w-fit h-[40px]'
                                        value={selectedProduct}
                                        onChange={(e) => setSelectedProduct(e)}
                                        options={optionsProduct} instanceId={2} />
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-20 px-3 place-self-center w-full md:gap-0 py-10 md:py-5'>
                        {referencesTekalp 
                            ? referencesTekalp?.length > 0
                                ? referencesTekalp.map((reference, index) => <ReferenceCard key={index} reference={reference} />)
                                : ""
                            : 
                            <div className='flex flex-col gap-5'>
                                <CustomSkeleton style="w-full h-[200px] min-h-[200px] rounded-xl" />
                                <CustomSkeleton style="w-full h-[200px] min-h-[200px] rounded-xl" />
                            </div>
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    </>
  )
}

export function ReferenceCard ({reference, small=false}) {
    const [ref, setRef] = useState({})
    const [mainImage, setMainImage] = useState(null)
    
    function mapFieldsToObject(fields) {
        return fields.reduce((acc, field) => {
            acc[field.key] = field.value;
            return acc;
        }, {});
    }

    useEffect(() => {
        if(!reference) return
        const details = mapFieldsToObject(reference.fields);
        setRef(details)
        const mainPictureField = reference.fields?.find(f => f.key === "main_picture");
        setMainImage(mainPictureField?.reference?.image?.url ? mainPictureField?.reference?.image : null)
    }, [reference])
    
    const [description, setDescription] = useState(null)
      
    useEffect(() => {
        if(!ref?.description) return
        const json = JSON.parse(ref?.description);
        setDescription(renderRichTextToHTML(json))
    }, [ref?.description])

    return(
        <div className={cn(small ? "flex-[0_0_100%] min-w-0 h-full flex justify-center w-full md:pb-3" : "md:pb-14")}>
            <div className={cn(small ? "w-[90%]" : "" ,'grid grid-cols-2 items-center md:flex md:flex-col md:gap-5 text-new-black')}>
                <div className={cn(small ? "h-[300px] min-h-[300px] max-h-[300px]" : "h-[350px] min-h-[350px] max-h-[350px]", "h-full md:h-[250px] md:max-h-[250px] md:min-h-[250px] w-full")}>
                    {mainImage && <Image src={mainImage?.url} className='object-cover w-full h-full rounded-md' width={mainImage?.width} height={mainImage?.height} alt='Référence Tekalp' />}
                </div>
                <div className='flex flex-col gap-5 md:w-full'>
                    <h3 className='text-4xl font-magra xl:text-3xl lg:text-2xl leading-none md:text-xl tracking-tight font-bold px-10 md:px-0'>{ref?.titre} - {new Date(ref?.date_du_projet).getFullYear()}</h3>
                    <div className='w-full bg-new-black h-[1px]'></div>
                    {description && <div className={cn(small ? "line-clamp-[5] " : "line-clamp-[10] ", 'text-[15px] px-10 md:px-0 md:text-sm')} dangerouslySetInnerHTML={{__html: description}} />}
                    <Link href={`/references/${reference?.handle}`} className='px-10 md:px-0 md:place-self-center'>
                        <button className="text-white bg-new-black z-10 px-4 py-3 font-medium flex items-center gap-4 rounded-md">
                            <span>En savoir plus</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}