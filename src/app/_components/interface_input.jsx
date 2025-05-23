export function ErrorInput ({error, style}) {
    return(
        <p className={`text-sm text-red-500 w-fit rounded ${style}`}>{error}</p>
    )
}

export function InterfaceTextInput ({name, label, placeholder, options, commonError, commonErrorMessage, type='text', style, labelStyle}) {
    return (
        <div className={`${style} bg-[#FFFEFB] px-6 py-4 rounded-sm text-brown shadow-md flex flex-col tracking-[0.2px] gap-1`}>
            <label htmlFor={name} className={`text-brown text-sm font-medium gap-2 whitespace-nowrap`}>{label} {commonError && (<ErrorInput error={commonErrorMessage} />)}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} className="text-brown font-medium bg-transparent rounded-lg pt-3 focus-visible:outline-none placeholder:text-brown/50 placeholder:font-medium" {...options}/>
            
        </div>
    )
}

export function FormTextInput ({name, label, placeholder, options, commonError, commonErrorMessage, type='text', style, labelStyle}) {
    return (
        <div className={`${style} flex flex-col tracking-[0.2px] gap-1 `}>
            <label htmlFor={name} className={`text-primary text-[13px] font-medium gap-2 whitespace-nowrap`}>{label} {commonError && (<ErrorInput error={commonErrorMessage} />)}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} className="font-medium bg-transparent border-secondary border rounded-md px-3 py-1.5 focus-visible:outline-none placeholder:text-secondary/50 text-secondary placeholder:font-medium placeholder:text-sm" {...options}/>
            
        </div>
    )
}


export function InterfaceTextArea ({ name, label, placeholder, options, commonError, commonErrorMessage , height}) {
    return(
        <div className="col-span-2 bg-[#FFFEFB] px-6 py-4 rounded-ms text-brown shadow-md flex flex-col tracking-[0.2px] gap-1">
            <label htmlFor={name} className="text-brown text-sm font-medium ">{label} {commonError && (<ErrorInput error={commonErrorMessage} />)}</label>
            <textarea   className="text-brown font-medium rounded-xl bg-transparent pt-3 focus-visible:outline-none placeholder:text-brown/50 placeholder:font-medium" rows={height} placeholder={placeholder}
                        id={name} {...options}>
            </textarea>
        </div>
    )
}