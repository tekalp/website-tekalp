"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DownloadPdf() {

    const router = useRouter()

    const downloadReceipt = () => { 
        let linkToDownload = document?.createElement("a");
        document.body.appendChild(linkToDownload)
        linkToDownload.setAttribute( 'href', '/files/tekalp_pres.pdf' );
        linkToDownload.setAttribute( 'download', "brochure_Tekalp" );
        linkToDownload.click();
        linkToDownload.remove()
    }

    useEffect(() => {
        downloadReceipt()
        router.push('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

	return (
		<>
		</>
	)
}