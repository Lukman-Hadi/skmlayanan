import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startFetch, addAntrian, validateQueue} from '../../features/Antrian/action';
import {getIndicator} from '../../features/Indicator/action';
import { addSurvey, submitSkm } from '../../features/Survey/actions';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
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
    const handleSubmitSkm = async() =>{
        if(antrian.id){
            if(Object.keys(survey).length===9){
                let result = await dispatch(submitSkm());
                if(await result.status){
                    window.location.reload();
                }
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Ooopss',
                    text:'survey Belum Terisi Semua'
                })
            }
        }else{
              
        }
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
            <button onClick={handleSubmitSkm}>submit test</button>
        </div>
    )
}