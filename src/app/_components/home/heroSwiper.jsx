import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import { Prev, Next, usePrevNextButtons, Prev3, Next3 } from '@/app/_utils/emblaButton';
import { DotButton, useDotButton } from '@/app/_utils/emblaDot';

import { ProjectCard } from '../projects';
import Project1 from '../../../../public/assets/homepage/project1.webp'
import Project2 from '../../../../public/assets/homepage/project2.webp'
import Project3 from '../../../../public/assets/homepage/project3.webp'
import Project4 from '../../../../public/assets/homepage/project4.webp'
import Project5 from '../../../../public/assets/homepage/project5.webp'
import Project6 from '../../../../public/assets/homepage/project6.webp'

import { SliderServices } from '../slider';
import Landscape4 from '../../../../public/assets/homepage/landscape4.webp'
import Landscape5 from '../../../../public/assets/homepage/landscape5.webp'
import Landscape6 from '../../../../public/assets/homepage/landscape6.webp'
import Landscape7 from '../../../../public/assets/homepage/landscape7.webp'
import Landscape8 from '../../../../public/assets/homepage/security.webp'

export function WorkSwiper () {
    const OPTIONS = { slidesToScroll: 'auto', loop: true }

    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
        Autoplay({ playOnInit: true, delay: 4000 })
      ])
  
      const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
      const {
          prevBtnDisabled,
          nextBtnDisabled,
          onPrevButtonClick,
          onNextButtonClick
        } = usePrevNextButtons(emblaApi)

    return (
        <div className="overflow-hidden relative h-full w-full min-h-full min-w-full py-20 lg:py-0" ref={emblaRef}> 
        {/* CONTAINER */}
            <div className="flex touch-pan-y h-full w-full min-h-full min-w-full">
            <ProjectCard image={Project1} text="Castellane (04)" />
            <ProjectCard image={Project2} text="Châtel (74)" />
            <ProjectCard image={Project3} text="Culoz (01)" />
            <ProjectCard image={Project4} text="Orée d’Anjou (49)" />
            <ProjectCard image={Project5} text="Toulon (83)" />
            <ProjectCard image={Project6} text="Verdaches (04)" /> 
            </div>
            <div className="w-full flex justify-center gap-[1.2rem]">
                <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton key={index} onClick={() => onDotButtonClick(index)} className={'embla__dot'
                        .concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                        />
                    ))}
                </div>
            </div>
            <Prev onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <Next onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
    )
}

export function UrgencySwiper () {
    const OPTIONS = { slidesToScroll: 'auto', loop: true }

    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
        Autoplay({ playOnInit: true, delay: 4000 })
      ])
  
      const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
      const {
          prevBtnDisabled,
          nextBtnDisabled,
          onPrevButtonClick,
          onNextButtonClick
        } = usePrevNextButtons(emblaApi)

    return (
        <div className="w-full h-full relative"> 
            <div className="h-full overflow-hidden rounded-xl w-[85%] ml-[7.5%] lg:w-[90%] lg:ml-[5%]" ref={emblaRef}> 
            {/* CONTAINER */}
                <div className="flex touch-pan-y h-full ">
                    <SliderServices title='Evènement ' text1='KIT DISPONIBLE SOUS 48H' image={Landscape7} />
                    <SliderServices title='Chargement' text1='KIT DISPONIBLE SOUS 48H' image={Landscape4} />
                    <SliderServices title='Installation' text1='KIT DISPONIBLE SOUS 48H' image={Landscape5} />
                    <SliderServices title='Sécurisation' text1='KIT DISPONIBLE SOUS 48H' image={Landscape8} />
                    <SliderServices title='Stock disponible' text1='KIT DISPONIBLE SOUS 48H' image={Landscape6} />
                </div>
                <div className="absolute bottom-5 sm:bottom-[10%] flex justify-center gap-[1.2rem] w-[90%]">
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
            <Prev3 onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <Next3 onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
    )
}