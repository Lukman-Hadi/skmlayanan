import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addAntrian, successFetchingAntrian, validateQueue} from '../../features/Antrian/action';
import Antrian from '../../components/Antrian/index';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {validate} from '../../api/index';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error'
};

export default function Home(){
    const [status, setStatus] = React.useState(statuslist.idle);
    let {register, handleSubmit, reset} = useForm();
    let dispatch = useDispatch();
    let history = useHistory();

    const onSubmit = async ({antrian})=>{
        setStatus(statuslist.process);
        let date = new Date();
        let formatedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        console.log('antrian', antrian)
        let data = await validate(formatedDate, antrian);
        console.log('data', data)
        if(data.status){
            dispatch(successFetchingAntrian(antrian,data.antrian._id));
            history.push("/survey");
            setStatus(statuslist.success)
        }else{
            setStatus(statuslist.error);
            Swal.fire({
                icon: 'warning',
                title: 'Whoopss',
                text:'Data Tidak Ditemukan'
            });
            reset(antrian);
        }
    }
    return(
        <div className="container">
            <div className="content">
                <div className="side">

                </div>
                <div className="main">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input ref={register} name="antrian" type="text"></input>
                        <button>TEST</button>
                    </form> 
                </div>
            </div>
            {/* <Antrian 
                handleSubmit={handleSubmitAntrian}
                handleChange={e=>dispatch(addAntrian(e.target.value))}
            /> */}
        </div>
    )
};