import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addAntrian, validateQueue} from '../../features/Antrian/action';
import Antrian from '../../components/Antrian/index';

export default function Home(){
    let dispatch = useDispatch();
    let antrian = useSelector(state=>state.antrian);

    const handleSubmitAntrian = (e) =>{
        dispatch(validateQueue(antrian.noAntrian))
        if(antrian.status === 'success'){

        }else{
            alert('error')
        }
    }
    return(
        <div>
            <Antrian 
                handleSubmit={handleSubmitAntrian}
                handleChange={e=>dispatch(addAntrian(e.target.value))}
            />
        </div>
    )
};