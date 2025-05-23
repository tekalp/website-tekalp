import Image from "next/image"

export function SliderServices ({text1, image}) {
    return(
      <div className="w-full h-[45vh] flex-[0_0_100%] flex items-center text-center">
        <Image src={image} alt="Example" className="object-cover w-full h-full" priority />
        <h2 className="w-full absolute top-0 text-3xl font-semibold text-new-gray bg-new-black xl:text-3xl lg:text-2xl sm:text-xl sm:px-4 sm:py-3 px-8 py-5">{text1}</h2>
      </div>
    )
  }