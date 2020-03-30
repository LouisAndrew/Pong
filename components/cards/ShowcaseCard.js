import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'
import ProductCard from './ProductCard'

export default function ShowcaseCard(props) {

    const [ name, setName ] = useState('')
    const [ beerId, setBeerId ] = useState(0)
    const [ data, setData ] = useState()
    const [ loaded, setLoaded ] = useState(false)

    const doneLoading = () => {
        setLoaded(true)
    }

    const getData = async() => {
        const rq = await fetch(`https://api.punkapi.com/v2/beers/${props.beerId}`)
        const rsp = await rq.ok ? rq.json() : false
        return rsp
    }
    
    if (beerId !== props.beerId) {
        setBeerId(props.beerId)
        try {
            getData()
            .then(dt => {
                setData(dt[0])
                setName(dt[0].name)
                doneLoading()
            })
        } catch(e) {
            console.log(e)
        }
    }
    return loaded && <Link href={`/products/beers/[bid]`} as={`/products/beers/${beerId}`} passHref><ProductCard right={props.right} headline={props.headline} data={data} /></Link>
    {/* <DShowcaseCard prod={props.prod} big={props.big} data={data} /> */}
}