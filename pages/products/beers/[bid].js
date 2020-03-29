import Layout from "../../../components/Layout"
import fetch from 'node-fetch'
import Prodie from "../../../components/product/Prodie"
import Details from "../../../components/product/Details"
import ProductPgSc from "../../../components/product/ProductPgSc"

const BeerProduct = ({ bid, rsp }) => {
    return (
        <Layout>
            <Prodie {...rsp[0]} />
            <Details {...rsp[0]} />
            <ProductPgSc {...rsp[0]} />
        </Layout>
    )
}

export const getStaticPaths = async() => {

    const beerIdLength = new Array(325)
    for (let i = 0; i < beerIdLength.length; i++) {
        beerIdLength[i] = i + 1
    }

    const paths = beerIdLength.map(beerId => ({
        params: {
            bid: beerId.toString()
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async({ params: { bid } }) => {

    const number = bid
    const rq = await fetch(`https://api.punkapi.com/v2/beers/${number}`)
    const rsp = await rq.json()

    return {
        props: {
            bid,
            rsp
        }
    }
}

export default BeerProduct
