import { Loader } from './_components/loader'

export default function Loading () {
    return(
        <div className='absolute flex items-center justify-center z-[100] w-[100vw] h-[100vh] bg-gray-400/30'>
            <Loader />
        </div>
    )
}