import { useCallback, useEffect, useState } from 'react'
import left from '../../../public/assets/essentials-icons/left_arrow_white.svg'
import right from '../../../public/assets/essentials-icons/right_arrow_white.svg'
import Image from "next/image";

import left2 from '../../../public/assets/essentials-icons/left_arrow_complete.svg'
import right2 from '../../../public/assets/essentials-icons/right_arrow_complete_red.svg'

import left4 from '../../../public/assets/essentials-icons/left_arrow.svg'
import right4 from '../../../public/assets/essentials-icons/right_arrow.svg'

import left3 from '../../../public/assets/essentials-icons/left_arrow_white.svg'
import right3 from '../../../public/assets/essentials-icons/right_arrow_white.svg'

import left_red from '../../../public/assets/bloc-arme/red-left-arrow.svg'
import right_red from '../../../public/assets/bloc-arme/red-right-arrow.svg'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const Prev = (props) => {
  const { children, ...restProps } = props

  return (
    <button {...restProps} className='absolute top-1/2 -translate-y-1/2 left-5 disabled:opacity-0 transition-all duration-300 opacity-100 lg:left-0'>
      <div className='arrow2 w-10 h-10 min-w-10 min-h-10 md:w-6 md:h-6 md:min-w-6 md:min-h-6'>
        <Image src={left2} alt='left chevron' className='w-full h-full object-cover' priority />
      </div>
      {children}
    </button>
  )
}

export const Next = (props) => {
  const { children, ...restProps } = props

  return (
    <button {...restProps} className='absolute top-1/2 -translate-y-1/2 right-5 disabled:opacity-0 transition-all duration-300 opacity-100 lg:right-0'>
      <div className='arrow2 w-10 h-10 min-w-10 min-h-10 md:w-6 md:h-6 md:min-w-6 md:min-h-6'>
        <Image src={right2} alt='left chevron' className='w-full h-full object-cover' priority />
      </div>
          {children}
    </button>
  )
}

export const Prev2 = (props) => {
  const { children, ...restProps } = props

  return (
    <button {...restProps} className='absolute top-1/2 -translate-y-1/2 left-5 disabled:opacity-0 transition-all duration-300 opacity-100 lg:left-0'>
      <div className='arrow2 w-10 h-10 min-w-10 min-h-10 md:w-6 md:h-6 md:min-w-6 md:min-h-6'>
        <Image src={left3} alt='left chevron' className='w-full h-full object-cover' priority />
      </div>
      {children}
    </button>
  )
}

export const Next2 = (props) => {
  const { children, ...restProps } = props

  return (
    <button {...restProps} className='absolute top-1/2 -translate-y-1/2 right-5 disabled:opacity-0 transition-all duration-300 opacity-100 lg:right-0'>
      <div className='arrow2 w-10 h-10 min-w-10 min-h-10 md:w-6 md:h-6 md:min-w-6 md:min-h-6'>
        <Image src={right3} alt='left chevron' className='w-full h-full object-cover' priority />
      </div>
          {children}
    </button>
  )
}

export const Prev3 = (props) => {
  const { children, ...restProps } = props

  return (
    <button {...restProps} className='absolute top-1/2 -translate-y-1/2 left-5 disabled:opacity-0 transition-all duration-300 opacity-100 lg:left-0'>
      <div className='arrow2 w-5 h-5 min-w-5 min-h-5 md:w-4 md:h-4 md:min-w-4 md:min-h-4'>
        <Image src={left_red} alt='left chevron' className='w-full h-full object-cover' priority />
      </div>
      {children}
    </button>
  )
}

export const Next3 = (props) => {
  const { children, ...restProps } = props

  return (
    <button {...restProps} className='absolute top-1/2 -translate-y-1/2 right-5 disabled:opacity-0 transition-all duration-300 opacity-100 lg:right-0'>
      <div className='arrow2 w-5 h-5 min-w-5 min-h-5 md:w-4 md:h-4 md:min-w-4 md:min-h-4'>
        <Image src={right_red} alt='left chevron' className='w-full h-full object-cover' priority />
      </div>
          {children}
    </button>
  )
}

export const Prev4 = (props) => {
  const { children, ...restProps } = props

  return (
    <button {...restProps} className='absolute top-1/2 -translate-y-1/2 left-0 disabled:opacity-0 transition-all duration-300 opacity-100 md:hidden'>
      <div className='arrow2 w-10 h-10 min-w-10 min-h-10 md:w-6 md:h-6 md:min-w-6 md:min-h-6'>
        <Image src={left4} alt='left chevron' className='w-full h-full object-cover' priority />
      </div>
      {children}
    </button>
  )
}

export const Next4 = (props) => {
  const { children, ...restProps } = props

  return (
    <button {...restProps} className='absolute top-1/2 -translate-y-1/2 right-0 disabled:opacity-0 transition-all duration-300 opacity-100 md:hidden'>
      <div className='arrow2 w-10 h-10 min-w-10 min-h-10 md:w-6 md:h-6 md:min-w-6 md:min-h-6'>
        <Image src={right4} alt='left chevron' className='w-full h-full object-cover' priority />
      </div>
          {children}
    </button>
  )
}

export const TekalpPrev = (props) => {
  const { children, ...restProps } = props

  return (
    <button {...restProps} className='absolute bottom-5 left-5 disabled:opacity-0 transition-all duration-300 opacity-100  md:left-2 md:bottom-2'>
      <div className='bg-white px-5 py-2 rounded-xl md:px-3 md:py-1 md:rounded-md'>
        <Image src={left2} alt='left chevron' className='w-full h-auto md:max-w-5' priority />
      </div>
      {children}
    </button>
  )
}

export const TekalpNext = (props) => {
  const { children, ...restProps } = props

  return (
    <button {...restProps} className='absolute bottom-5 right-5 disabled:opacity-0 transition-all duration-300 opacity-100 md:right-2 md:bottom-2'>
      <div className='bg-white px-5 py-2 rounded-xl md:px-3 md:py-1 md:rounded-md'>
        <Image src={right2} alt='left chevron' className='w-full h-full md:max-w-5' priority />
      </div>
          {children}
    </button>
  )
}

