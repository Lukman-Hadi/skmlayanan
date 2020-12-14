import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startFetch, addAntrian, validateQueue} from '../../features/Antrian/action';
import {getIndicator} from '../../features/Indicator/action';
import { addSurvey } from '../../features/Survey/actions';

export default function Home(){
    let dispatch = useDispatch();
    let antrian = useSelector(state=>state.antrian);
    let indicator = useSelector(state=>state.indicator);
    let survey = useSelector(state=>state.survey);
    const handleSubmit =async(e)=>{
        e.preventDefault();
        dispatch(validateQueue(antrian.noAntrian));
    }
    const handleChange = async(name, value)=>{
        let data = {
            name,
            value
        }
        dispatch(addSurvey(data))
    }
    React.useEffect(()=>{
        dispatch(getIndicator());
    },[])
    // let [indicator, setIndicator] = React.useState({});
    // React.useEffect(()=>{
    //     const getIndicator = async()=>{
    //         setIndicator(await fetchIndicator());
    //     };
    //     getIndicator();
    // },[])

    return( 
        <div>
            <input type="text" name="validate" onChange={e=>dispatch(addAntrian(e.target.value))}></input>
            <button onClick={handleSubmit}>test</button>    
            {indicator.data.map(i=>[
                <div key={i}>
                <h1>{i.indicator}</h1>
                <input type="radio" name={i.bg} onChange={e=>handleChange(e.target.name, e.target.value)} value="1"/>
                <input type="radio" name={i.bg} onChange={e=>handleChange(e.target.name, e.target.value)} value="2"/>
                <input type="radio" name={i.bg} onChange={e=>handleChange(e.target.name, e.target.value)} value="3"/>
                <input type="radio" name={i.bg} onChange={e=>handleChange(e.target.name, e.target.value)} value="4"/>
                </div>
            ])}
        </div>
    )
}