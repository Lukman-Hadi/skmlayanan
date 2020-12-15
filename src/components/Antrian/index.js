import * as React from 'react';
import {func} from 'prop-types'

export default function Antrian({handleChange,handleSubmit}){
    return <div>
            <input type="text" name="validate" onChange={handleChange}></input>
            <button onClick={handleSubmit}>TEST</button>
        </div>
}

Antrian.propTypes={
    handleChange: func,
    handleSubmit: func
}