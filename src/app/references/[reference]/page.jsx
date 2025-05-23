"use server"

import ReferenceDetails from "@/app/_components/reference";
import { getReferenceByHandle, getReferences } from "@/app/_utils/shopifyAPI";

export default async function Article({params}) {
  const slug = await params
  const data = await getReferenceByHandle(`${slug.reference}`)
  const references = await getReferences()

  return (
    <ReferenceDetails data={data} references={references} handle={slug?.reference} />
  )
}