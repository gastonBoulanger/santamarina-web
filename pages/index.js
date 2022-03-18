import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/dist/client/image'
import { initialSharedProps } from '../lib/resources'
import { getAllPostsForHome } from '../lib/api'

export default function Home( {preview, allPosts, navbar, footer }) {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Club Santamarina</title>
        <meta name="description" content="Web Ofical Club Santamarina Tandil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout menu={navbar} footer={footer}>
        <div className="w-screen">
          <div className="bg-gradient-to-r from-black via--yellow-dark to-yellow h-48">
            <Image
              layout='responsive'
              src="/images/campeon.jpg"
              width='720px'
              height='360px'
            />
            <h1 className={`text-3xl font-bold text-gray-dark`}>
              Esto es <a href="https://nextjs.org" className="text-yellow">Club Santamarina</a>
            </h1>
          </div>
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