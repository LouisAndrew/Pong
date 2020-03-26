import React, { useState } from 'react'
import DShowcaseCard from './DShowcaseCard'

export default function ShowcaseCard(props) {

    const [ loaded, setLoaded ] = useState(false)
    const [ name, setName ] = useState('')
    const [ data, setData ] = useState()

    const doneLoading = () => {
        console.log('im dunn')
        setLoaded(true)
    }

    const getData = async() => {
        const rq = await fetch(`https://api.punkapi.com/v2/beers/${props.beerId}`)
        const rsp = await rq.ok ? rq.json() : false
        return rsp
    }
    
    if (!name) {
        console.log('no name here')
        getData()
        .then(dt => {
            setData(dt[0])
            setName(dt[0].name)
            doneLoading()
        })
    }
    return loaded ? <DShowcaseCard big={props.big} data={data} /> : <></>
}