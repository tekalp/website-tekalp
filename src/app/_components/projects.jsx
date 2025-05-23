import Image from "next/image"

export function ProjectCard ({image, text}) {
    return(
      <div className="flex justify-center px-5 pb-10 w-full min-w-full h-full min-h-full flex-[0_0_33%] xl:flex-[0_0_50%] lg:px-10 md:flex-[0_0_100%] md:px-6 relative">
        <Image src={image} alt="Example" className="object-cover object-center h-full rounded-3xl sm:max-h-[300px]" priority />
        <p className='bg-backgroundServices px-8 py-5 mx-5 rounded-bl-3xl rounded-tr-3xl absolute top-0 right-0 text-2xl font-bold text-white xl:text-xl lg:text-lg lg:mr-10  md:mr-6 sm:text-base'>{text}</p>
      </div>
    )
  }