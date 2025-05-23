"use server"

import TekalpFeature from "./_components/tekalp";
import { getArticles4 } from "./_utils/shopifyAPI";

export default async function Home() {

  const articles = await getArticles4()

  return (
    <TekalpFeature articles={articles?.data?.blogs?.nodes[0]?.articles?.nodes}/>
  )
}