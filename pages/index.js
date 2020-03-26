import styled from 'styled-components'
import Page from '../components/Page'
import Layout from '../components/Layout'
import Head from 'next/head'
import Hero from '../components/index/Hero'
import Intro from '../components/index/Intro'
import Showcase from '../components/index/Showcase'
import Headline from '../components/index/Headline'
import Collection from '../components/index/Collection'

export default function index() {

  return (
    <Layout>
      <Head>
        <title>Helluu</title>
      </Head>

      <Hero />
      <Intro />
      <Headline />
      <Showcase />
      <Collection />

    </Layout>
  )
}