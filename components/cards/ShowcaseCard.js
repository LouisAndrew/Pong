import React, { useState } from 'react'
import DShowcaseCard from './DShowcaseCard'
import Link from 'next/link'
import fetch from 'node-fetch'

export default function ShowcaseCard(props) {

    const [ loaded, setLoaded ] = useState(false)
    const [ name, setName ] = useState('')
    const [ data, setData ] = useState()

    const doneLoading = () => {
        setLoaded(true)
    }

    const getData = async() => {
        const rq = await fetch(`https://api.punkapi.com/v2/beers/${props.beerId}`)
        const rsp = await rq.ok ? rq.json() : false
        return rsp
    }
    
    if (!name) {
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
    return loaded ? <Link href={`/products/beers/${props.beerId}`} passHref><DShowcaseCard prod={props.prod} big={props.big} data={data} /></Link> : <></>
}