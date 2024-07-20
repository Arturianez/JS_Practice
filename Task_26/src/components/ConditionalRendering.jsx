import { useState } from "react"

export function ConditionalRendering() {
    const [state,setState] = useState(false)

    
    return (
        <div className="useState_block">
            <button onClick={() => setState(!state)}>Click</button>
            {
                state && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eligendi ex dolor nihil id iure vero odio, sed quibusdam debitis.</p>
            }
        </div>
    )
}


