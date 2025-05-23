import { Popover, PopoverButton, PopoverGroup, PopoverPanel} from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavModal () {
    const pathname = usePathname()
    const navigation = {
        categories:[
            {
                name:"Solutions",
                // featured:[
                //     {name:"Textile"}
                // ], 
                sections:[
                    // { name:"Nos box naissance", 
                    //   items: collection?.filter(item => item.title !== "Fait main" && item.title !== "Couches" ),
                    //   ref:"products"
                    // },
                    { name:"Bloc Armé", ref:"solutions/bloc-arme" },
                    { name:"RIM-Nat - à venir", ref:null },
                ]
            }
        ], 
    }

    // const [currentChoice, setCurrentChoice] = useState(null)
    // useEffect(() => {
    //     if(collection[0]){
    //         setCurrentChoice(collection[0])
    //     }
    // }, [collection])

    return(
        <PopoverGroup>
            {navigation.categories.map((category) => (
                <Popover key={category.name}  className={pathname.includes("solutions") ? 'bg-black text-white rounded-xl px-4 py-2 flex relative' : ' flex relative'}>
                        <PopoverButton className="text-xl xl:text-lg xl:gap-8 flex w-full items-center hover:bg-typo/10 outline-none border-none shadow-none transition-all duration-500 rounded-lg data-[open]:bg-typo/10">
                            <p>{category.name}</p>
                        </PopoverButton>

                        <PopoverPanel transition className="mt-3 rounded-xl overflow-hidden absolute w-[250px] inset-x-0 top-full transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in" >
                        {({ close }) => (
                            <>
                                <div className="relative bg-newbg text-primary border-2 border-primary rounded-xl">
                                    <div className="flex flex-col divide-y-2 divide-typo/20  overflow-hidden w-full">
                                    {category.sections.map((section) => (
                                        <button key={section.name} className={section.name === "RIM-Nat - à venir" ? "w-full h-full flex text-slate-400 bg-gray rounded-b-xl" : "w-full h-full flex hover:bg-black/5"} disabled={section.name === "RIM-Nat - à venir" ? true : false}>
                                            <Link href={`/${section.ref}`} onClick={close} className={section.name === "RIM-Nat - à venir" ? "text-typo font-medium text-lg lg:text-base p-3 w-full h-full select-none pointer-events-none" : "text-typo font-medium text-lg lg:text-base p-3 w-full h-full"}>{section.name}</Link>
                                        </button>
                                    ))}
                                    </div>
                                </div>
                            </>
                        )}
                        </PopoverPanel>
                </Popover>
            ))}
        </PopoverGroup>
    )
}

export function BlackNavModal () {
    const pathname = usePathname()
    const navigation = {
        categories:[
            {
                name:"Solutions",
                // featured:[
                //     {name:"Textile"}
                // ], 
                sections:[
                    // { name:"Nos box naissance", 
                    //   items: collection?.filter(item => item.title !== "Fait main" && item.title !== "Couches" ),
                    //   ref:"products"
                    // },
                    { name:"Bloc Armé", ref:"solutions/bloc-arme" },
                    { name:"RIM-Nat - à venir", ref:null },
                ]
            }
        ], 
    }

    // const [currentChoice, setCurrentChoice] = useState(null)
    // useEffect(() => {
    //     if(collection[0]){
    //         setCurrentChoice(collection[0])
    //     }
    // }, [collection])

    return(
        <PopoverGroup>
            {navigation.categories.map((category) => (
                <Popover key={category.name}  className={pathname.includes("solutions") ? 'bg-white text-secondary rounded-xl px-4 py-2 flex relative' : ' flex relative '}>
                        <PopoverButton className="text-xl xl:text-lg xl:gap-8 flex w-full items-center bg-bg-button px-3 py-1.5 outline-none border-none shadow-none transition-all duration-500 rounded-lg">
                            <p>{category.name}</p>
                        </PopoverButton>

                        <PopoverPanel transition className="mt-3 rounded-xl overflow-hidden absolute w-[250px] inset-x-0 top-full transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in" >
                        {({ close }) => (
                            <>
                                <div className="relative bg-newbg text-primary border-2 border-primary rounded-xl">
                                    <div className="flex flex-col divide-y-2 divide-typo/20  overflow-hidden w-full">
                                    {category.sections.map((section) => (
                                        <button key={section.name} className={section.name === "RIM-Nat - à venir" ? "w-full h-full flex text-slate-400 bg-gray rounded-b-xl" : "w-full h-full flex hover:bg-black/5"} disabled={section.name === "RIM-Nat - à venir" ? true : false}>
                                            <Link href={`/${section.ref}`} onClick={close} className={section.name === "RIM-Nat - à venir" ? "text-typo font-medium text-lg lg:text-base p-3 w-full h-full select-none pointer-events-none" : "text-typo font-medium text-lg lg:text-base p-3 w-full h-full"}>{section.name}</Link>
                                        </button>
                                    ))}
                                    </div>
                                </div>
                            </>
                        )}
                        </PopoverPanel>
                </Popover>
            ))}
        </PopoverGroup>
    )
}