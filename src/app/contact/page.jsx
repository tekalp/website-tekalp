"use server"

import ContactFeature from "../_components/contact";
import { getArticles4 } from "../_utils/shopifyAPI";

export default async function Contact() {
  const articles = await getArticles4()

  return (
    <ContactFeature articles={articles?.data?.blogs?.nodes[0]?.articles?.nodes}  />
  )
}