import Prodie from "../components/product/Prodie"
import fetch from 'node-fetch'

const prod = ({ rsp }) => {

    const data = rsp
    console.log(data)
    return (
        <Prodie {...data[0]} />
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