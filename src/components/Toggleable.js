import React, { useState, useImperativeHandle } from 'react'

const Toggleable = React.forwardRef((props, ref) => {
    const [contentVisible, setContentVisible] = useState(false)
    const contentStyle = { display: contentVisible ? '' : 'none' }
    const controlStyle = { display: contentVisible ? 'none' : '' }

    const toggleState = () => setContentVisible(!contentVisible)

    useImperativeHandle(ref, () => {
        return {
            toggleState
        }
    })

    return (
        <div>
            <div style={controlStyle}>
                <button onClick={toggleState}>{props.toggleText}</button>
            </div>
            <div style={contentStyle}>
                {props.children}
                <button onClick={toggleState}>Cancel</button>
            </div>
        </div>
    )
})

export default Toggleable