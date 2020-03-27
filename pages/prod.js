import Prodie from "../components/product/Prodie"
import fetch from 'node-fetch'
import Details from "../components/product/Details"
import Layout from "../components/Layout"

const prod = ({ rsp }) => {

    const data = rsp
    console.log(data)
    return (
        <>
            <Layout>
                <Prodie {...data[0]} />
                <Details {...data[0]} />
            </Layout>
        </>
    )
}

export const getStaticProps = async() => {

    const rq = await fetch('https://api.punkapi.com/v2/beers/2')
    const rsp = await rq.json()

    return {
        props: {
            rsp
        }
    }
}

export default prod