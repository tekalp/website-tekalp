"use client"

import Image from 'next/image'

import main3 from '../../../public/assets/blog/actu_bg.jpg'

import illustation from '../../../public/assets/blog/illustration-blog.svg'

import filter_icon from '../../../public/assets/blog/filter-icon.svg'
import illustation2 from '../../../public/assets/blog/event.svg'

import customArrow from '../../../public/assets/essentials-icons/custom-arrow.svg'

import Footer from './layout/footer'
import { useEffect, useState } from 'react'
import { CustomSkeleton } from '../_utils/littleComponents'
import Link from 'next/link'
import MainLogo from '../../../public/assets/header/logo.png'

import Header from './layout/header'
import { BowSlider } from './tekalp'

import { motion } from 'framer-motion'

export default function BlogsFeature({articles, solutions, linkedInPosts}) {
    //ARTICLES === BLOG DE TEKALP
    //SOLUTIONS === BLOG SOLUTIONS
    
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

    const [posts, setPosts] = useState(null)
    useEffect(() => {
        if(!linkedInPosts) return
        setPosts(linkedInPosts?.map(post => post?.node?.fields[0]?.value))

    }, [linkedInPosts])

    // useEffect(() => {
    //   async function fetchPosts() {
    //     try {
    //         const sendEmail = await fetch('/api/posts', {
    //             method:'GET',
    //             headers: {
    //                 "Accept": "application/json",
    //                 'Content-Type': 'application/json'
    //             },
    //         })
    //         const rep = await sendEmail.json()
    //         console.log(rep?.data);
            
    //         setPosts(rep?.data?.elements?.map(e => ({
    //             publish:new Date(e.firstPublishedAt).toLocaleDateString('fr'),
    //             url:`https://www.linkedin.com/feed/update/${e.id}`,
    //             image:e.specificContent["com.linkedin.ugc.ShareContent"].media[0]?.thumbnails[0]?.url, 
    //             description:e.specificContent["com.linkedin.ugc.ShareContent"].shareCommentary.text
    //         }))
    //     )
    //     } catch (err) {
    //         console.log('Request failed:' + err)
    //     }
    //   }
    //   fetchPosts();
    // }, []);
    
    const [tekalpSeeMore, setTekalpSeeMore] = useState(false)
    const [slicedArticles, setSlicedArticles] = useState()
    useEffect(() => {
        if(!tekalpSeeMore) {
            if(articles?.filter(a => a.tags[0] === "actu")?.length > 0 || solutions?.filter(e => e.tags[0] === "actu")?.length > 0) {
                if(currentfilter === "tekalp") {
                    setSlicedArticles(articles?.filter(a => a.tags[0] === "actu").slice(0,6))
                    return   
                } else if (currentfilter === "solutions") {
                    setSlicedArticles(solutions?.filter(e => e.tags[0] === "actu").slice(0,6))
                    return   
                }
                setSlicedArticles(articles?.filter(a => a.tags[0] === "actu")?.concat(solutions?.filter(e => e.tags[0] === "actu")).slice(0,6))
            }
        } else {
            if(currentfilter === "tekalp") {
                setSlicedArticles(articles?.filter(a => a.tags[0] === "actu"))
                return   
            } else if (currentfilter === "solutions") {
                setSlicedArticles(solutions?.filter(e => e.tags[0] === "actu"))
                return   
            }
            setSlicedArticles(articles?.filter(a => a.tags[0] === "actu")?.concat(solutions?.filter(e => e.tags[0] === "actu")))
        }
    }, [tekalpSeeMore, articles, currentfilter])

  return (
    <>
        <Header />
        <main id='mainIndex' className='overflow-x-hidden flex flex-col'>

            <section className='w-[100vw] min-h-withOutHeader md:min-h-[450px] overflow-hidden h-withOutHeader md:h-auto relative hxl:min-h-full hxl550:min-h-[450px]'>
                <div className='flex h-full'>
                    <BowSlider image={main3} title1="À LA UNE CHEZ TEKALP" title2={<span className='font-magra'>DÉCOUVREZ NOS DERNIÉRES INNOVATIONS ET INITIATIVES</span>} href2="/company" button2="L'ENTREPRISE" styleTitle2="text-[3vw] md:text-3xl" />
                </div>
            </section>

            <section className="w-full flex flex-col items-center relative">
                <div className='w-full flex flex-col gap-10 max-w-[1400px] pt-24 pb-16 relative md:py-10'>
                    <div className='flex flex-col gap-2 relative w-fit my-12 mr-12 ml-6 text-new-black lg:ml-12 lg:mt-6 md:gap-0'>
                        <Image src={illustation} alt='Illustration Blog' className='w-[300px] h-auto absolute top-[-75%] right-[-55%] object-cover lg:w-[250px] md:hidden' />
                        <div className={`bg-new-black absolute -bottom-12 w-[1px] -left-2 h-[145%] md:h-[140%] md:-bottom-6`}></div>
                        <h2 className='text-[rgb(189,189,189)] text-4xl xl:text-3xl lg:text-2xl leading-none md:text-xl font-light'>NOTRE</h2>
                        <h2 className='text-6xl font-magra xl:text-5xl lg:text-4xl leading-none md:text-3xl tracking-tight font-bold text-new-black'>ACTUALITÉ</h2>
                        <div className={`bg-new-black absolute -left-8 h-[1px] -bottom-2 max-w-[100vw] w-[130%] md:bottom-0`}></div>
                    </div>
                    <div className='w-fit place-self-end flex flex-col gap-4 px-8 py-5 sm:py-0 md:place-self-center md:px-3'>
                        <div className='flex gap-2 items-center'>
                            <Image src={filter_icon} alt='Icone de filtre' className='' />
                            <p className='text-sm text-new-black italic'>Filtrez votre recherche</p>
                        </div>
                        <div className='flex gap-3 items-center w-fit place-self-end flex-wrap'>
                            <button onClick={() => setFilter(null)} className='w-fit px-5 h-[40px] text-new-black flex items-center border border-new-black cursor-pointer text-base md:h-9 md:px-4 font-medium text-nowrap sm:place-self-center sm:text-sm rounded-md' style={currentfilter === null ? {color:"rgb(255,254,251)", fontWeight:"bold", backgroundColor:"rgb(27,24,23)"} : {}}>Toute notre actu</button>
                            <button onClick={() => setFilter("tekalp")} className='w-fit px-5 h-[40px] text-new-black flex items-center border border-new-black cursor-pointer text-base md:h-9 md:px-4 font-medium text-nowrap sm:place-self-center sm:text-sm rounded-md' style={currentfilter === "tekalp" ? {color:"rgb(255,254,251)", fontWeight:"bold", backgroundColor:"rgb(27,24,23)"} : {}}>Tekalp</button>
                            <button onClick={() => setFilter("solutions")} className='w-fit px-5 h-[40px] text-new-black flex items-center border border-new-black cursor-pointer text-base md:h-9 md:px-4 font-medium text-nowrap sm:place-self-center sm:text-sm rounded-md' style={currentfilter === "solutions" ? {color:"rgb(255,254,251)", fontWeight:"bold", backgroundColor:"rgb(27,24,23)"} : {}}>Nos solutions</button>
                            <button onClick={() => setFilter("linkedin")} className='w-fit px-5 h-[40px] text-new-black flex items-center border border-new-black cursor-pointer text-xl md:h-9 md:px-4 font-bold text-nowrap sm:place-self-center sm:text-sm rounded-md' style={currentfilter === "linkedin" ? {color:"rgb(255,254,251)", fontWeight:"bold", backgroundColor:"rgb(27,24,23)"} : {}}>
                               in
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 px-3 place-self-center gap-5 w-full py-10 lg:grid-cols-2 md:grid-cols-1 md:gap-10 md:place-items-center md:py-5'>
                        { articles && (currentfilter !== "linkedin")
                            ? slicedArticles?.filter(e => e.tags[0] === "actu").map(article => <CardActu key={article.id} id={article.id} handle={article.handle} image={article.image} title={article.title} description={article.excerptHtml} />)
                            : ""
                        }
                        { posts && (currentfilter === null || currentfilter === "linkedin")
                            ? posts?.map((p, index) => 
                                <div key={index} className='h-[472px] w-full rounded-md overflow-hidden border-typo border md:max-w-[500px] md:max-h-[370px]'>
                                    <iframe src={p} allowFullScreen="" fill="true" width="100%" height="100%" title="Post intégré"></iframe>
                                </div>
                            )
                            : ""
                        }
                        {!posts && !articles
                            ? 
                            <>
                                <CustomSkeleton style="h-[350px] w-[350px] min-h-[350px] rounded-xl" />
                                <CustomSkeleton style="h-[350px] w-[350px] min-h-[350px] rounded-xl" />
                                <CustomSkeleton style="h-[350px] w-[350px] min-h-[350px] rounded-xl" />
                            </>
                            : ""
                        }
                    </div>
                    {slicedArticles?.length > 6
                        ? <button className="flex gap-2 items-center text-new-gray bg-new-black w-fit place-self-center font-semibold px-4 py-2 text-base" onClick={() => setTekalpSeeMore(!tekalpSeeMore)}><p>Voir {tekalpSeeMore ? "moins" : "plus"} d’actualité</p>
                        </button>
                        : slicedArticles?.length === 0 || (currentfilter === "linkedin" && posts === undefined)
                            ? <p className='text-new-black place-self-center font-medium -mt-10'>Aucune actualité pour le moment.</p>
                            : ""
                    }
                </div>

                <section className='py-12 bg-new-black flex flex-col w-full gap-6 items-center px-3'>
                    <div className='flex w-fit flex-col gap-1'>
                    <h2 className='text-white font-bold text-lg md:text-base'>VOTRE PARTENAIRE</h2>
                    <div className='h-[1px] bg-[rgba(255,255,255,0.35)] w-full'></div>
                    <div className='h-[1px] bg-[rgba(255,255,255,0.35)] w-full'></div>
                    </div>
                    <p className='text-xl font-light md:text-lg sm:text-base text-center italic max-w-[1280px]'>“Découvrez comment TEKALP innove dans la protection et la gestion des risques naturels à travers nos séries de webinaires et événements. Rejoignez-nous pour approfondir votre compréhension des meilleures pratiques, découvrir des études de cas récentes, et échanger avec des experts du domaine. Nos événements sont conçus pour vous fournir des informations et des solutions adaptées aux défis du futur.”</p>
                </section>
                illustation2

                <div id="event" className='w-full flex flex-col gap-10 max-w-[1400px] px-8 pt-24 pb-24 sm:pb-14 relative md:pt-16 sm:px-4'>
                    <div className='flex flex-col gap-2 place-self-start relative w-fit my-12 mr-12 ml-6 text-new-black lg:ml-12 lg:mt-6 md:mb-10 md:mt-0'>
                        <Image src={illustation2} alt='Illustration Blog' className='w-[150px] h-auto absolute top-[-140%] -right-24 object-cover lg:w-[150px] rotate-[120deg] md:hidden' />
                        <div className={`bg-new-black absolute -bottom-8 w-[1px] -left-2 h-[145%] md:h-[160%]`}></div>
                        <h2 className='text-[rgb(189,189,189)] text-4xl xl:text-3xl lg:text-2xl leading-none md:text-xl font-light'>NOS</h2>
                        <h2 className='text-6xl font-magra xl:text-5xl lg:text-4xl leading-none md:text-3xl tracking-tight font-bold text-new-black'>ÉVÈNEMENTS</h2>
                        <div className={`bg-new-black absolute -left-8 h-[1px] -bottom-2 max-w-[100vw] w-[120%] md:bottom-0`}></div>
                    </div>
                    <div className='grid grid-cols-3 px-3 place-self-center gap-5 w-full py-10 lg:grid-cols-2 md:grid-cols-1 md:gap-10 md:place-items-center md:py-5'>
                    { articles 
                        ? articles?.filter(e => e.tags[0] === "event")?.slice(0,6)?.length > 0
                            ? articles?.filter(e => e.tags[0] === "event")?.slice(0,6)?.map(article => <CardActu key={article.id} id={article.id} handle={article.handle} image={article.image} title={article.title} description={article.excerptHtml} />)
                            : <p className='text-typo'>Aucun évènement pour le moment.</p>
                        : <>
                            <CustomSkeleton style="h-[350px] w-[350px] min-h-[350px] rounded-xl" />
                            <CustomSkeleton style="h-[350px] w-[350px] min-h-[350px] rounded-xl" />
                            <CustomSkeleton style="h-[350px] w-[350px] min-h-[350px] rounded-xl" />
                        </>
                    }
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    </>
  )
}

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, rotateX: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0, 
      transition: { duration: 1, ease: "easeOut", damping: 15, stiffness: 100 } 
    },
  };
  
export function CardActu ({image, title, description, handle, id, index, articles}) {
    return(
        <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants} className={articles?.length-1 === index ? "lg:hidden md:block w-full h-fit text-new-black md:max-w-[95vw] md:w-[500px]" : 'w-full h-fit text-new-black md:max-w-[95vw] md:w-[500px]'}>
            {image
                ? <Image src={image?.url} width={image?.width} height={image?.height} alt={image?.altText ? image?.altText : "Bloc armé"} className="object-cover w-full h-[280px] md:h-[250px] bg-new-black border object-right-top border-bg-gray rounded-md" />
                :  <Image src={MainLogo} alt="Tekalp" width={800} height={500} className="object-contain w-full h-[280px] bg-new-black border border-bg-gray md:h-[250px]" />
            }
            
            <div className='flex flex-col border rounded-md border-new-black h-[180px] gap-5 p-3 mt-3 md:gap-3 md:h-auto sm:border-x-0 sm:border-b-2 sm:border-t-0 sm:rounded-none'>
                <h3 className='text-lg sm:text-base font-semibold line-clamp-1 text-ellipsis'>{title}</h3>
                <div className='flex-1'>
                    <div className="text-sm line-clamp-3 font-normal text-ellipsis" dangerouslySetInnerHTML={{__html: description}} />
                </div>
                <Link  href={`/blogs/${handle}?id=${id}`} className='flex gap-3 items-center mt-1 justify-end cursor-pointer relative left-0 hover:left-1 transition-all duration-300'>
                    <p className='text-base font-semibold'>Lire la suite</p>
                    <Image src={customArrow} alt='arrow icon'  />
                </Link>
            </div>
        </motion.div >
    )
}

export function LinkedInPost ({image, description, publish, url}) {
    return(
        <Link href={url ? url : "https://www.linkedin.com/company/tekalp/posts/?feedView=all"} className='w-full h-fit text-new-black md:max-w-[95vw] md:w-[500px]'>
            {image && image !== "https://www.linkedin.com/company/tekalp/" && image !== ""
                ? <Image src={image} alt="Tekalp" width={800} height={500} className="object-cover rounded-md w-full h-[350px] md:h-[250px] bg-new-black border border-bg-gray" />
                : <Image src={MainLogo} alt="Tekalp" width={800} height={500} className="object-contain rounded-md w-full h-[350px] bg-new-black border border-bg-gray md:h-[250px]" />
            }
            <div className='flex flex-col border border-new-black h-[180px] rounded-md gap-5 p-3 mt-3 md:gap-3 md:h-auto sm:border-x-0 sm:border-b-2 sm:border-t-0 sm:rounded-none'>
                <h3 className='text-lg sm:text-base font-semibold line-clamp-1 text-ellipsis'>{publish}</h3>
                <p className='text-sm line-clamp-3 font-normal text-ellipsis'>{description}</p>
                <div className='flex gap-3 items-center mt-1 justify-end cursor-pointer relative left-0 hover:left-1 transition-all duration-300'>
                    <p className='text-base font-semibold'>Lire la suite</p>
                    <Image src={customArrow} alt='arrow icon'  />
                </div>
            </div>
        </Link>
    )
}