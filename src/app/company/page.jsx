"use server"

import CompanyComponent from "../_components/company"
import { getArticles4, getLinkedInPosts } from "../_utils/shopifyAPI"

export default async function Company() {

  const articles = await getArticles4()

  return (
    <CompanyComponent articles={articles?.data?.blogs?.nodes[0]?.articles?.nodes} />
  )
}