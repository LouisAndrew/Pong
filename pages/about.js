import Layout from "../components/Layout"
import ShowcaseCard from '../components/cards/ShowcaseCard.js'

export default function about() {
    return (
        <Layout>
            <div style={{ marginTop: '8vh' }}>
                <h1>this is header 1</h1>
                <h2>this is header 2</h2>
                <h3>this is header 3</h3>
                <h4>this is header 4</h4>
                <h5>this is header 5</h5>
                <h6>this is header 6</h6>
                <div style={{ height: '20vh', width: '49vw' , backgroundColor: 'rgba(21, 21, 21, 0.6)' }}>
                    <ShowcaseCard beerId={68} />
                </div>
            </div>
        </Layout>
    )
}
