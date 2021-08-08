import Head from 'next/head'
import Content from '../components/Content'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="flex bg-mobile md:bg-desktop flex-col items-center justify-center min-h-screen py-16">
      <Head>
        <title className="font-redhat">Order Summary Component Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <Hero />
        <Content />
      </div>
      
      
    </div>
  )
}
