import App from 'next/app'

const MyApp = ({ Component, pageProps }) => {
    console.log('this is mui app')
    return <Component {...pageProps} />
}

export default MyApp

