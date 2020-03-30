import Layout from "../../components/Layout"
import Result from "../../components/product/Result"
import PageNavigation from "../../components/product/PageNavigation"


const IndexResult = ({ indexes }) => {
    
    //param = array index 0 indexFrom, index 1 indexTo
    const makeIdArrays = range => {
        let toReturn = new Array(range[1] - range[0] + 1)
        for (let i = range[0], j = 0; i <= range[1], j < toReturn.length; i++, j++) {
            toReturn[j] = i
        }

        return toReturn
    }

    //array of beerIds to return from the page
    const pageIndex = makeIdArrays(indexes)

    return (
        <Layout>
            <Result indexes={pageIndex} />
            <PageNavigation numOfIndexes={5} href='/products/[index]' as='/products/index-' pageMax={28} num={indexes[1]} />
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
        fallback: false
    }
}

export const getStaticProps = async({ params: index }) => {

    const pageNumber = await index.index.split('-')[1]
    const itemPerPage = 12
    const lastIndex =  await pageNumber * itemPerPage
    const firstIndex = await lastIndex - itemPerPage + 1

    return {
        props: {
            indexes: [firstIndex, lastIndex],
            // numbers
        }
    }
}