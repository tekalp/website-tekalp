"use server"

import { gql } from "./gql"

export async function getArticles() {
    const cacheBuster = Date.now();
    const res = await fetch(`${process.env.GRAPHQL_API_URL_STOREFRONT}?cache-buster=${cacheBuster}`, {
        next: { revalidate: 60 },
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_API_ACCESS_TOKEN,
            'Cache-Control': 'no-store',
        },        
        body: JSON.stringify({
            query: gql`query GetBlogArticles {
                blogs(first: 10) {
                    nodes {
                    articles(first: 100) {
                        nodes {
                            handle
                            id
                            image {
                                id
                                height
                                altText
                                url
                                width
                            }
                            title
                            authorV2 {
                                name
                            }
                            excerptHtml
                            tags
                            publishedAt
                        }
                    }
                    }
                }
            }`,
        })
    });
    const articles = await res.json();
    return articles
}

export async function getArticles4() {
    const cacheBuster = Date.now();
    const res = await fetch(`${process.env.GRAPHQL_API_URL_STOREFRONT}?cache-buster=${cacheBuster}`, {
        next: { revalidate: 60 },
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_API_ACCESS_TOKEN,
            'Cache-Control': 'no-store',
        },        
        body: JSON.stringify({
            query: gql`query GetBlogArticles {
                blogs(first: 10) {
                    nodes {
                    articles(first: 100) {
                        nodes {
                            handle
                            id
                            image {
                                id
                                height
                                altText
                                url
                                width
                            }
                            metafields(identifiers: [
                                {namespace: "custom", key: "date_webinaire"},
                            ]){
                                key
                                namespace
                                value
                            }
                            title
                            authorV2 {
                                name
                            }
                            excerptHtml
                            tags
                            publishedAt
                        }
                    }
                    }
                }
            }`,
        })
    });
    const articles = await res.json();
    return articles
}
  

export async function getArticle(id) {
    const cacheBuster = Date.now();
    const res = await fetch(`${process.env.GRAPHQL_API_URL_STOREFRONT}?cache-buster=${cacheBuster}`, {
        next: { revalidate: 60 },
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_API_ACCESS_TOKEN,
            'Cache-Control': 'no-store',
        },        
        body: JSON.stringify({
            query: gql`query MyQuery($id:ID!) {
                article(id: $id) {
                    contentHtml
                    image {
                        altText
                        height
                        id
                        url
                        width
                    }
                    publishedAt
                    title
                    authorV2 {
                        name
                    }
                }
                }`,
            variables: { id }
        })
    });
    const articles = await res.json();
    return articles
}


export async function getReferences() {
    const res = await fetch(`${process.env.GRAPHQL_API_URL_STOREFRONT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: `
          query GetReferences {
            metaobjects(type: "projects", first: 100) {
              edges {
                node {
                  id
                  handle
                  fields {
                    key
                    value
                    reference {
                        ... on MediaImage {
                        id
                        image {
                            height
                            width
                            id
                            url
                        }
                        }
                        ... on GenericFile {
                        id
                        previewImage {
                            url
                            id
                        }
                        }
                    }

                  }
                }
              }
            }
          }
        `,
      }),
    });
  
    const json = await res.json();
    return json.data.metaobjects.edges.map(edge => edge.node);
  }


  export async function getReferenceByHandle(handle) {
    const res = await fetch(`${process.env.GRAPHQL_API_URL_STOREFRONT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: `
          query GetReferenceByHandle($handle: String!) {
            metaobject(handle: {type: "projects", handle: $handle}) {
              id
              handle
              fields {
                key
                value
                reference {
                  ... on MediaImage {
                    id
                    image {
                      height
                      width
                      id
                      url
                    }
                  }
                  ... on GenericFile {
                    id
                    url
                  }
                }
                references(first: 10) {
                  nodes {
                    ... on MediaImage {
                      id
                      image {
                        height
                        id
                        width
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          handle,
        },
      }),
    });
  
    const json = await res.json();
    return json.data.metaobject;
  }

    export async function getLinkedInPosts() {
    const res = await fetch(`${process.env.GRAPHQL_API_URL_STOREFRONT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: `
          query GetReferences {
            metaobjects(type: "linkedin_posts", first: 100) {
              edges {
                node {
                  id
                  handle
                  fields {
                    key
                    value
                  }
                }
              }
            }
          }
        `
      }),
    });
  
    const json = await res.json();
    
    return json.data.metaobjects;
  }
  // linkedin_posts