import Layout from "../../components/Layout"
import Result from "../../components/product/Result"
import PageNavigation from "../../components/product/PageNavigation"


const IndexResult = ({ indexes }) => {
    return (
        <Layout>
            <Result indexes={indexes} />
            {/* <PageNavigation num={numbers} /> */}
        </Layout>
    )
}

export default IndexResult

export const getStaticPaths = async() => {

    const itemPerPage = 12
    const lengthie = 325 % itemPerPage === 0 ? 325 / itemPerPage : 325 / itemPerPage + 1
    console.log(Math.trunc(lengthie))
    
    let indexPagesLength = new Array(Math.trunc(lengthie))
    for (let i = 0; i < indexPagesLength.length; i++) {
        indexPagesLength[i] = i + 1
    }

    const paths = indexPagesLength.map(x => ({
        params: {
            index: `index-${x}`
        }
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async({ params: index }) => {

    const pageNumber = index.index.split('-')[1]
    const itemPerPage = 12
    const lastIndex = pageNumber * itemPerPage
    const firstIndex = lastIndex - itemPerPage + 1

    return {
        props: {
            indexes: [firstIndex, lastIndex],
            // numbers
        }
    }
}