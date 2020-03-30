import App from 'next/app'
import React from 'react'
import { SearchProvider } from '../hooks/SearchContext'

export default class MyApp extends App {

    render() {

        const { Component, pageProps } = this.props

        return (
            <div>
                <SearchProvider>
                    <Component {...pageProps} />
                </SearchProvider>
            </div>
        )
    }
}

