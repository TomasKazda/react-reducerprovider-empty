import React, {useContext} from 'react'
import {Context, CLEAR, RESET} from '../providers/Provider'

const Simplesetter = () => {
    const [, dispatch] = useContext(Context)

    return (
        <div>
            <p><button onClick={()=>dispatch({type: CLEAR})}>{CLEAR}</button></p>
            <p><button onClick={()=>dispatch({type: RESET})}>{RESET}</button></p>
        </div>
    )
}

export default Simplesetter;