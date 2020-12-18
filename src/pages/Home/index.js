import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addAntrian, successFetchingAntrian, validateQueue} from '../../features/Antrian/action';
import Antrian from '../../components/Antrian/index';
import {NavLink, useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {validate} from '../../api/index';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {image, logo} from '../../components/Images';

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
            dispatch(successFetchingAntrian(antrian,data.antrian));
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
        <div>
        <div className="w-screen flex h-screen bg-color1 flex-col">
            {/* topbar */}
            <div className="w-full h-auto flex-row flex bg-color1 justify-between">
                <div className="lg:w-1/4 md:w-1/3 sm:w-11 bg-color2 shadow-sm rounded-br-full">
                    <p className="lg:mx-10 font-lato md:mx-5 font-black text-lg text-color4 uppercase text-center"> Mal Pelayanan Publik Kabupaten Pandeglang</p>
                </div>
                <div div className="flex flex-row items-center">
                    <img className="mr-5 mt-2 object-contain h-14 pointer-events-none" src={logo} alt="logo"/>
                </div>
            </div>
            {/* content */}
            <div className="w-full h-full flex items-center justify-between">
                <div className="h-full w-1/2 items-center flex flex-col">
                    <div className="lg:mt-10 md:mt-4 md:mx-4 lg:mx-0 flex text-center justify-center flex-col items-center">
                        <h3 className="font-black text-4xl text-color4">
                            Survey Kepuasan Masyarakat
                        </h3>
                        <p className="lg:w-1/2 mt-5 md:container text-gray-800">Bantu Kami Untuk Meningkatkan Kualitas Pelayanan Dengan Mengisi Survey Ini !</p>
                    </div>
                    <div className="lg:mt-10 md:mt-4 text-center bg-color2 lg:py-10 md:py-6 rounded-tl-3xl rounded-br-3xl shadow-2xl w-2/3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-3xl font-lato font-black text-color4 mb-5">Masukan Nomor Antrian</h1>
                            <input ref={register} type='text' name='antrian' className="border-b-4 border-color4 bg-transparent outline-none text-center text-color4"/><br/>
                            <button className="inline-block bg-color4 px-7 py-2 rounded-full shadow-lg text-lg tracking-widest text-color2 mt-5" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                {/* footer */}
                <div className="h-auto w-1/2">
                    <img className="object-contain pointer-events-none" src={image} alt="frontpage"></img>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center mb-4">
                <p className="font-sans">Copyright &#169; Mal Pelayanan Publik Kabupaten Pandeglang 2020</p>
            </div>
        </div>
    )
};

                    // <form onSubmit={handleSubmit(onSubmit)}>
                    //     <input ref={register} type='text' name='antrian'></input>
                    //     <button>submit</button>
                    // </form>