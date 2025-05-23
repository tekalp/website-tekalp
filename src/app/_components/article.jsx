"use client"

import Image from 'next/image'

import Footer from './layout/footer'
import Header from './layout/header'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CustomSkeleton } from '../_utils/littleComponents'

export default function ArticleFeature({data}) {
    const [currentArticle, setCurrentArticle] = useState(null)
    useEffect(() => {
        setCurrentArticle(data?.data?.article)
    }, [data])

  return (
    <>
        <Header />
        <main id='mainIndex' className='flex flex-col'>
            <section className="mb-20 w-full flex flex-col items-center relative text-typo md:mb-10">
                {currentArticle
                    ? <div className='flex flex-col max-w-[1100px] text-justify gap-5 py-10 px-5 sm:gap-4 sm:px-3'>
                        <div className='flex justify-between w-full sm:flex-col-reverse sm:items-center sm:justify-start sm:gap-5'>
                            <div className='flex flex-col text-base font-medium sm:items-center'>
                                <p>{new Date(currentArticle?.publishedAt).toLocaleDateString("fr")}</p>
                                <p>Article rédigé par <span className='font-semibold'>{currentArticle?.authorV2?.name}</span></p>
                            </div>                    
                            <Link href="/blogs" className='pl-5 -mt-2'>
                                <button className="text-white bg-typo z-10 px-3 py-2 mt-3 rounded-md font-medium flex items-center gap-3 md:text-sm">
                                    <span>Retour aux articles</span>
                                </button>
                            </Link>

                        </div>
                        <h1 className='text-center text-4xl font-magra font-bold tracking-wide max-w-[1000px] 2xl:text-3xl lg:text-2xl mt-10 sm:mt-5'>{currentArticle?.title}</h1>
                        {currentArticle?.image?.url
                            ? <Image src={currentArticle?.image?.url} width={currentArticle?.image?.width} height={currentArticle?.image?.height} className="w-full rounded-md overflow-hidden my-5 h-[500px] object-right-top object-cover sm:w-full" alt='Article picture' priority/>
                            : ""
                        }
                        
                        <div className='flex flex-col gap-4' id="article" dangerouslySetInnerHTML={{__html: currentArticle?.contentHtml}} />
                    </div>
                    : <CustomSkeleton style="w-full h-[300px]" />
                }
            </section>
            <Footer />
        </main>
    </>
  )
}