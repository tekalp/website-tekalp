"use server"

import ArticleFeature from "@/app/_components/article";
import { getArticle } from "@/app/_utils/shopifyAPI";

export default async function Article({searchParams}) {
  const { id } = await searchParams
  const data = await getArticle(`${id}`)

  return (
    <ArticleFeature data={data} />
  )
}