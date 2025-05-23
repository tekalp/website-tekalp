"use server"

import BlogsFeature from "../_components/blogs";
import { getArticles, getLinkedInPosts } from "../_utils/shopifyAPI";

export default async function Blogs() {

  const articles = await getArticles()
  const blogShopify = await getLinkedInPosts()

  return (
    <BlogsFeature articles={articles?.data?.blogs?.nodes[0]?.articles?.nodes} linkedInPosts={blogShopify?.edges} solutions={articles?.data?.blogs?.nodes[1]?.articles?.nodes} />
  )
}