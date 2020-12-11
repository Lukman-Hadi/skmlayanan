import * as React from 'react';
import { fetchCounter, fetchIndicator, fetchLayanan } from '../api';

function Test() {

    const [get,setGet] = React.useState();
    React.useEffect(()=>{
        const getCounter = async()=>{
            setGet(await fetchCounter())
        }
        getCounter();
    },[])
    return (
        <div>

        </div>
    )
}

export default Test
