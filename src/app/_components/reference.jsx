"use client"

import { useEffect, useState } from 'react';
import Footer from './layout/footer'
import Header from './layout/header'

import Main from "../../../public/assets/references/mainPicture.webp"
import hourglass from "../../../public/assets/references/hourglass.svg"
import bag from "../../../public/assets/references/bag.svg"
import chantar from "../../../public/assets/references/chantar.svg"
import year from "../../../public/assets/references/year.svg"
import illusationRef from "../../../public/assets/references/ref.svg"

import open from "../../../public/assets/references/open.svg"

import arrow from "../../../public/assets/essentials-icons/custom-white-arrow.svg"
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownToLineIcon, Check } from 'lucide-react';
import { renderRichTextToHTML } from '../_utils/richTextRender';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '../_utils/emblaDot';
import { Next, Next2, Next4, Prev, Prev2, Prev4, TekalpPrev, usePrevNextButtons } from '../_utils/emblaButton';
import { Custom2Title } from './tekalp';
import { CustomTitle } from './ui/title';
import { CardActu } from './blogs';
import { ReferenceCard } from './references';
import { CustomSkeleton } from '../_utils/littleComponents';

function extractImages(field) {
    if (field?.references?.nodes?.length) {
      return field.references.nodes.map(({ image }) => ({
        width: image.width,
        height: image.height,
        url: image.url,
        id: image.id,
      }));
    }
  
    if (field?.reference?.image) {
      const { image } = field.reference;
      return [{
        width: image.width,
        height: image.height,
        url: image.url,
        id: image.id,
      }];
    }
  
    return [];
  }

export default function ReferenceDetails({data, references, handle}) {
    const [currentRefIndex, setCurrentRefIndex] = useState(null)

    useEffect(() => {
        if(!references || !handle) return
        setCurrentRefIndex(references.findIndex(ref => ref.handle === handle))
    }, [references, handle])

    const [refNatural, setRefNaturel] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [file, setFile] = useState(null)
    const [ref, setRef] = useState({})
    
    useEffect(() => {
        setRefNaturel(data?.fields)
    }, [data])
    
    function mapFieldsToObject(fields) {
        return fields.reduce((acc, field) => {
            acc[field.key] = field.value;
            return acc;
        }, {});
    }
    
    useEffect(() => {
        if(!refNatural) return
        const details = mapFieldsToObject(refNatural);
        setRef(details)
        const mainPictureField = refNatural?.find(f => f.key === "main_picture");
        setMainImage(mainPictureField?.reference?.image?.url ? mainPictureField?.reference?.image : null)
        const fileField = refNatural?.find(f => f.key === "file");
        setFile(fileField?.reference?.url ? fileField?.reference?.url : null)
    }, [refNatural])

    const [problem, setProblem] = useState(null)
    const [solution, setSolution] = useState(null)
    const [imageProblem, setImageProblem] = useState(null)
    const [imageSolution, setImageSolution] = useState(null)
      
    useEffect(() => {
        if(!ref?.image_problem) return
        setImageProblem(extractImages(refNatural?.find(f => f.key === "image_problem")))
    }, [ref?.image_problem])

    useEffect(() => {
        if(!ref?.image_solution) return
        setImageSolution(extractImages(refNatural?.find(f => f.key === "image_solution")))
    }, [ref?.image_solution])

    useEffect(() => {
        if(!ref?.main_problem) return
        const json = JSON.parse(ref?.main_problem);
        setProblem(renderRichTextToHTML(json))
    }, [ref?.main_problem])

    useEffect(() => {
        if(!ref?.main_solution) return
        const json = JSON.parse(ref?.main_solution);
        setSolution(renderRichTextToHTML(json))
    }, [ref?.main_solution])

    return (
        <>
            <Header />
                <main id='mainIndex' className='overflow-x-hidden flex flex-col'>
                    {data && mainImage && ref
                        ?<> 
                        <section className='w-full min-h-withOutHeader h-withOutHeader md:h-auto'>
                                <div className='py-4 w-full bg-new-black flex flex-col gap-3 items-center px-3'>
                                    <p className='text-4xl xl:text-3xl lg:text-2xl leading-none md:text-xl font-semibold'>{ref?.titre}</p>
                                    <div className='grid grid-cols-3 gap-10 items-center text-sm'>
                                        {currentRefIndex && currentRefIndex !== 0 && references && references?.length > 0 
                                            ?
                                            <Link href={`/references/${references[currentRefIndex-1]?.handle}`} className='flex flex-col gap-2 items-center text-center'>
                                                <Image src={arrow} className="rotate-180 h-4 w-auto" alt="Arrow" />
                                                <p>Projet précédent</p>
                                            </Link>
                                            : <div></div>
                                        }
                                        <Link href="/references" className='flex flex-col gap-2 items-center text-center cursor-pointer'>
                                            <Image src={open} className="h-4 w-auto" alt="Arrow" />
                                            <p>Retour aux projet</p>
                                        </Link>
                                        {currentRefIndex +1 !== references?.length && references && references?.length > 1 
                                            ?
                                            <Link href={`/references/${references[currentRefIndex+1]?.handle}`} className='flex flex-col gap-2 items-center text-center'>
                                                <Image src={arrow} className="h-4 w-auto" alt="Arrow" />
                                                <p>Projet suivant</p>
                                            </Link>
                                            : <div></div>
                                        }
                                    </div>
                                </div>
                                <div className='relative grid grid-cols-2 w-full md:flex md:flex-col'>
                                    {file 
                                        ? <Link href={`${file}`} target='_blank' className='absolute -right-10 top-[40%] -translate-y-1/2 text-new-black bg-bg-gray flex items-center justify-center p-8 rounded-full lg:p-4 lg:-right-5 md:top-[25%]'>
                                            <ArrowDownToLineIcon strokeWidth={1} className='w-[130px] h-[130px] lg:w-[90px] lg:h-[90px] md:w-[60px] md:h-[60px]' />
                                        </Link>
                                        : ""
                                    }
                                    <div className='max-h-full h-reference hxl650:h-auto hxl650:max-h-[450px] md:max-h-[350px] md:h-[300px]'>
                                        {mainImage && <Image src={mainImage?.url} className='object-cover w-full h-full' width={mainImage?.width} height={mainImage?.height} alt='Référence Tekalp' />}
                                    </div>
                                    <div className='flex flex-col justify-between py-10 md:grid md:grid-cols-2 md:gap-5 md:place-items-center md:px-3'>
                                        <ShortInformations image={hourglass} title="Année du projet" info={ref?.annee_du_projet} />
                                        <ShortInformations image={year} title="Localisation" info={ref?.localisation} />
                                        <ShortInformations image={chantar} title="Maître d'ouvrage" info={ref?.maitre_ouvrage} />
                                        <ShortInformations image={bag} title="Entreprise" info={ref?.entreprise} />
                                    </div>
                                </div>
                            </section>
                            <section className='flex justify-center w-full text-new-black py-10 border-y border-new-black md:py-5'>
                                <div className='justify-between items-center max-w-[1200px] flex w-full px-3 md:flex-col md:gap-5'>
                                    <p className='font-magra text-4xl xl:text-3xl lg:text-2xl leading-none md:text-xl font-bold whitespace-nowrap'>NOS MISSIONS</p>
                                    <div className='flex items-center w-full justify-evenly'>
                                        <div className='flex items-center gap-3'>
                                            <div className='flex items-center justify-center p-1 bg-new-black rounded-full sm:hidden'>
                                                <Check className='text-white w-[20px] h-[20px] md:w-[15px] md:h-[15px]' />
                                            </div>
                                            <p className='text-xl xl:text-xl lg:text-base leading-none md:text-sm'>PROTÉGER</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div className='flex items-center justify-center p-1 bg-new-black rounded-full sm:hidden'>
                                                <Check className='text-white w-[20px] h-[20px] md:w-[15px] md:h-[15px]' />
                                            </div>
                                            <p className='text-xl xl:text-lg lg:text-base leading-none md:text-sm'>PRÉVENIR</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div className='flex items-center justify-center p-1 bg-new-black rounded-full sm:hidden'>
                                                <Check className='text-white w-[20px] h-[20px] md:w-[15px] md:h-[15px]' />
                                            </div>
                                            <p className='text-xl xl:text-lg lg:text-base leading-none md:text-sm'>COLLABORER</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='py-20 md:py-10 max-w-[1200px] w-full px-3 place-self-center flex flex-col text-new-black'>
                                <div className='flex flex-col gap-2 relative w-[90%] my-12 mr-12 ml-6 text-new-black lg:ml-12 lg:mt-6 sm:gap-0'>
                                    <div className={`bg-new-black absolute -bottom-12 w-[1px] -left-2 h-[165%] lg:-bottom-10 lg:h-[200%]`}></div>
                                    <h2 className='text-6xl font-magra xl:text-5xl lg:text-4xl w-fit leading-none md:text-3xl tracking-tight font-bold text-new-black'>PROBLÈME</h2>
                                    <div className={`bg-new-black absolute -left-8 h-[1px] -bottom-2 w-[300px] md:bottom-0`}></div>
                                    <p className='absolute top-[130%] w-full left-0 font-normal text-xl xl:text-lg lg:text-base md:text-sm'>{ref?.subtitle_problem}</p>
                                </div>
                                {problem && <div className='text-[15px] line-clamp-[10] md:px-0 md:text-sm pt-14' dangerouslySetInnerHTML={{__html: problem}} />}
                                {imageProblem &&
                                    <ReferenceSwiper>
                                        {imageProblem?.map((image, index) => <ReferenceImage key={index} image={image} /> )}
                                    </ReferenceSwiper>
                                }
                            </section>

                            <section className='pb-20 md:pb-10 max-w-[1200px] w-full px-3 place-self-center flex flex-col text-new-black relative'>
                                <Image src={illusationRef} className='w-[280px] absolute right-0 -top-32 xl:right-5 lg:w-[200px] lg:-top-24 md:hidden' alt='Icône Tekalp' />
                                <div className='flex flex-col gap-2 relative w-[80%] my-12 mr-12 ml-6 text-new-black lg:ml-12 lg:mt-6 sm:gap-0'>
                                    <div className={`bg-new-black absolute -bottom-12 w-[1px] -left-2 h-[165%] lg:-bottom-10 lg:h-[200%]`}></div>
                                    <h2 className='text-6xl font-magra xl:text-5xl lg:text-4xl w-fit leading-none md:text-3xl tracking-tight font-bold text-new-black'>SOLUTION</h2>
                                    <div className={`bg-new-black absolute -left-8 h-[1px] -bottom-2 w-[300px] md:bottom-0`}></div>
                                    <p className='absolute top-[130%] left-0 font-normal text-xl xl:text-lg lg:text-base leading-none md:text-sm'>{ref?.subtitle_solution}</p>
                                </div>
                                {solution && <div className='text-[15px] line-clamp-[10] md:px-0 md:text-sm pt-14' dangerouslySetInnerHTML={{__html: solution}} />}
                                {imageSolution &&
                                    <ReferenceSwiper>
                                        {imageSolution?.map((image, index) => <ReferenceImage key={index} image={image} /> )}
                                    </ReferenceSwiper>
                                }
                            </section>
                        </>
                        : <CustomSkeleton style="rounded-xl w-full min-h-withOutHeader h-withOutHeader md:h-[300px]" />
                    }
                    {references 
                        ?   <section className='pb-20 md:pb-10 max-w-[1200px] px-3 place-self-center flex flex-col text-new-black relative'>
                                <div className='flex flex-col gap-2 relative w-fit my-12 mr-12 ml-6 text-new-black lg:ml-12 lg:mt-6 sm:gap-0'>
                                    <div className={`bg-new-black absolute -bottom-12 w-[1px] -left-2 h-[165%] lg:-bottom-6`}></div>
                                    <h2 className='text-6xl font-magra xl:text-5xl lg:text-4xl w-fit leading-none md:text-3xl tracking-tight font-bold text-new-black'>AUTRES EXEMPLES DE RÉALISATIONS</h2>
                                    <div className={`bg-new-black relative -left-8 h-[1px] -bottom-2 w-[107%] md:bottom-0`}></div>
                                </div>
                                <div className='flex flex-col gap-20 px-3 place-self-center w-full pt-5 pb-10 md:gap-0 md:pb-5 md:max-w-[95vw]'>
                                    <OtherReferencesSwiper>
                                        {references?.length > 0
                                            ? references.filter(ref => ref.handle !== handle).slice(-3).reverse().map((reference, index) => <ReferenceCard key={index} reference={reference} small={true}  />)
                                            : ""
                                        }
                                    </OtherReferencesSwiper>
                                </div>
                            </section>
                        :   <div className='flex flex-col gap-5'>
                                <CustomSkeleton style="w-full h-[200px] min-h-[200px] rounded-xl" />
                                <CustomSkeleton style="w-full h-[200px] min-h-[200px] rounded-xl" />
                            </div>
                    }

                    <Footer />
                </main>
        </>
  )
}

export function OtherReferencesSwiper ({children}) {
    const OPTIONS = { slidesToScroll: 'auto' }
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="w-full h-full relative pt-10 flex flex-col gap-5">
            <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                <div className="flex touch-pan-y h-full">
                    {children}
                </div>
            </div>
            <Prev4 onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <Next4 onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            <div className="w-full relative flex justify-center gap-[1.2rem]">
              <div className="embla__dots2">
              {scrollSnaps.map((_, index) => (
                  <DotButton key={index} onClick={() => onDotButtonClick(index)} className={'embla__dot3'
                      .concat(
                          index === selectedIndex ? ' embla__dot3--selected' : ''
                      )}
                      />
                  ))}
              </div>
            </div>

        </div>
    )
} 

function ShortInformations ({image, title, info}) {
    return(
        <div className='flex gap-3 md:flex-col md:items-center md:text-center'>
            <div className='p-2 bg-bg-gray flex items-center justify-center rounded-md md:w-fit'>
                <Image src={image} className="h-20 min-h-20 w-auto" alt="Informations" priority />
            </div>
            <div className='flex flex-col text-new-black'>
                <p className='italic  md:text-sm font-light'>{title}</p>
                <p className='font-magra text-4xl xl:text-3xl lg:text-2xl leading-none md:text-xl font-bold'>{info}</p>
            </div>
        </div>
    )
}

export function ReferenceSwiper ({children}) {
    const OPTIONS = { slidesToScroll: 'auto' }
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="w-full h-full relative pt-10">
            <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                <div className="flex touch-pan-y h-full">
                    {children}
                </div>
            </div>
            <Prev2 onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <Next2 onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            <div className="w-full absolute bottom-3 flex justify-center gap-[1.2rem]">
              <div className="embla__dots2">
              {scrollSnaps.map((_, index) => (
                  <DotButton key={index} onClick={() => onDotButtonClick(index)} className={'embla__dot2'
                      .concat(
                          index === selectedIndex ? ' embla__dot2--selected' : ''
                      )}
                      />
                  ))}
              </div>
            </div>

        </div>
    )
} 

export function ReferenceImage ({image}) {
    return(
      <div className="flex-[0_0_100%] min-w-0 w-full max-h-[450px] min-h-[450px] h-[450px] flex items-center justify-center relative md:max-h-[300px] md:min-h-[300px] md:h-[300px] rounded-md overflow-hidden" >
            <Image src={image?.url} className="object-cover w-full h-full" width={image?.width} height={image?.height} alt='Référence Tekalp' />
      </div>
    )
}