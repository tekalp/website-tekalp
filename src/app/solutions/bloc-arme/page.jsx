"use server"

import BlocArmeFeature from "@/app/_components/bloc-arme";
import { getArticles4 } from "@/app/_utils/shopifyAPI";

export default async function BlocArme() {

  const articles = await getArticles4()

  return (
    <BlocArmeFeature articles={articles?.data?.blogs?.nodes[0]?.articles?.nodes} />
  )
}