import { useState, useEffect } from "react"
import Head from "next/head"
import Layout from "../../components/layout"
import Button from "../../components/button"
import { getAllPostsWithSlug, getAllPostsForHome } from "../../lib/api"
import { initialSharedProps } from "../../lib/resources"
initialSharedProps

export default function Path( {preview, allPosts, navbar, footer }) {
    const [user, setUser] = useState(undefined)
  
    return (
        <div className="bg-gray-200">
          <Head>
            <title>Club Santamarina</title>
            <meta name="description" content="Web Ofical Club Santamarina Tandil" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout menu={navbar} footer={footer}>
            <div className="w-screen">
              <h1 className={`text-3xl font-bold text-gray-dark`}>
                Esto es <a href="https://nextjs.org" className="text-yellow">Club Santamarina</a>
              </h1>
              <Button >
                Login Google
              </Button>
            </div>
          </Layout>
        </div>
      )
}

export async function getStaticProps({ preview = false }) {
    const [navbar, footer] = await initialSharedProps();
    const allPosts = (await getAllPostsForHome(preview)) ?? [];
    return {
      props: { preview, allPosts, navbar, footer },
    }
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()
    return {
      paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
      fallback: true,
    }
}