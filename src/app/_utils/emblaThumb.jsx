import Image from "next/image"
import { memo } from "react"

export const Thumb = memo(function Thumb(props) {
  const { onClick, index } = props
  return (
    <div onClick={onClick} className="flex-[0_0_90%] min-w-0">
      <Image src={index} className="object-cover h-full rounded-2xl w-full" alt='Article picture'/>
    </div>
  )
})