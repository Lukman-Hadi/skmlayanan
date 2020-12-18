import * as React from 'react';
import {arrayOf, func, object} from 'prop-types';

export default function Indicator({indicator,onChangeI,antrian}){
    return (
        <div>
            <h1>{indicator.indicator}</h1>
                <input type="radio" name={indicator.bg} onChange={e=>onChangeI(e.target.name, e.target.value)} value="1"/>
                <input type="radio" name={indicator.bg} onChange={e=>onChangeI(e.target.name, e.target.value)} value="2"/>
                <input type="radio" name={indicator.bg} onChange={e=>onChangeI(e.target.name, e.target.value)} value="3"/>
                <input type="radio" name={indicator.bg} onChange={e=>onChangeI(e.target.name, e.target.value)} value="4"/>
        </div>
    )
}

Indicator.propTypes ={
    indicator:arrayOf(object).isRequired,
    onCangeI: func
}