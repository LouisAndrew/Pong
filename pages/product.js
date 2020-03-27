import Layout from "../components/Layout";
import Prodie from "../components/product/Prodie";

export default function product() {
    return (
        <Layout>

            <Prodie />

        </Layout>
    )
}

export async function getStaticProps(context) {

    const rq = await fetch(`https://api.punkapi.com/v2/beers/${context.params.id}`)
}