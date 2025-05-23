"use server"

import ReferencesFeature from "../_components/references"
import { getArticles4, getReferences } from "../_utils/shopifyAPI"

export default async function References() {
    const articles = await getArticles4()
    const references = await getReferences()
    
    return (
        <ReferencesFeature articles={articles?.data?.blogs?.nodes[0]?.articles?.nodes} references={references} />
    )
}