import Layout from '../../../components/Layout'
import SRWrapper from '../../../components/product/SRWrapper'
import SearchResult from '../../../components/product/SearchResult'

const Res = ({ srIndex }) => {
    return (
        <Layout>
            <SearchResult index={srIndex.sr.split('-')[1]} />
        </Layout>
    )
}

export default Res

export const getStaticPaths = async() => {

    const length = [1, 2, 3]
    const paths = length.map(x => ({
        params: {
            sr: `sr-${x.toString()}`
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async({ params: sr }) => {

    return {
        props: {
            srIndex: sr
        }
    }
}