import React, {useContext} from 'react'
import {Context} from '../providers/Provider'

const Simplelister = () => {
    const [store, ] = useContext(Context)

    return (
        <div>
            <p>{store.data1}</p>
            <ul>
                {store.data2.map((n,i) => <li key={i}>{n}</li>)}
            </ul>
        </div>
    )
}

export default Simplelister;