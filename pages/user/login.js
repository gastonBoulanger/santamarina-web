import {useEffect, useState} from 'react'
import Head from 'next/head'
import Button from '../../components/button'
import { loginWithGoogle, onStateChanged } from '../../firebase/auth'
import { getAllPostsForHome } from '../../lib/api'

export default function Login({page}) {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    onStateChanged(setUser)
  }, [])

  return (
    <div className="bg-gray-200">
        <Head>
            <title>Club Santamarina</title>
            <meta name="description" content="Web Ofical Club Santamarina Tandil" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-screen">
            <h1 className={`text-3xl font-bold text-gray-dark`}>
                Esto es <a href="https://nextjs.org" className="text-yellow">Club Santamarina</a>
            </h1>
            <Button onClick={loginWithGoogle}>
                Login Google
            </Button>
        </div>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const page = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { page },
  }
}