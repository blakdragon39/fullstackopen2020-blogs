import React, { useState, useImperativeHandle } from 'react'
import PropType from 'prop-types'

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

Toggleable.propTypes = {
    toggleText: PropType.string.isRequired
}

export default Toggleable