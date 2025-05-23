export const inputStyleGoldNugget = {
    control: (baseStyles) => 
        ({
        ...baseStyles,
            boxShadow:"0 1px 2px 0 rgba(0,0,0,0.05)",
            border:'1px solid rgb(209, 213, 219)',
            borderRadius: '6px',
            height:'44px',
            minHeight:'44px',
        }), 
    indicatorSeparator: (styles) => ({ ...styles, display:'none' }),
    placeholder: (styles) => ({ ...styles,color:'rgb(156,163,175)', fontSize:'14px'}),
    valueContainer: (styles) => ({ ...styles,marginBottom:'2px'}),
    menuPortal: (base) => ({ ...base, zIndex: 9999 })
}

export const inputStyleGoldNuggetCustom = {
    control: (baseStyles) => 
        ({
        ...baseStyles,
            boxShadow:"0 1px 2px 0 rgba(0,0,0,0.05)",
            border:'1px solid rgb(209, 213, 219)',
            borderRadius: '6px',
            height:'40px',
            minHeight:'40px',
            color:"#1b1817"
        }), 
    indicatorSeparator: (styles) => ({ ...styles, display:'none' }),
    placeholder: (styles) => ({ ...styles,color:'#1b1817', fontSize:'14px', whiteSpace: "nowrap"}),
    // valueContainer: (styles) => ({ ...styles,marginBottom:'2px'}),
    menuPortal: (base) => ({ ...base, zIndex: 9999 })
}

export const themeGoldNugget = {
   theme: (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary: '#1b1817CC',
            // when u use keybord selection
            primary25: '#1b181733',
            //onClick selection 0.5s
            primary50: '#1b181733',
            //arrow
            neutral20: 'rgb(156,163,175)',
        },
    })
}