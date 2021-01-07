import * as React from 'react';
import {useDispatch} from 'react-redux';
import {successFetchingAntrian} from '../../features/Antrian/action';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {validate} from '../../api/index';
import Swal from 'sweetalert2';
import TopBar from '../../components/Topbar';
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
        let hour = date.getHours();
        let waktu = ''
        if(hour>=11 && hour<=14){
            waktu = 'Siang'
            console.log('waktu', hour)
        }else if(hour<11){
            waktu = 'Pagi'
            console.log('waktu', hour)
        }else{
            waktu = 'Sore'
            console.log('waktu', hour)
        }
        console.log('antrian', antrian)
        let data = await validate(formatedDate, antrian);
        console.log('data', data)
        if(data.status){
            Swal.fire({
                title: `Selamat ${waktu} ${data.antrian.jk==='L'?'Bapak':'Ibu'} ${data.antrian.nama}`,
                text:`Dari Counter ${data.antrian.loket} layanan ${data.antrian.layanan} Silahkan isi survey`,
                icon: 'info'
            })
            dispatch(successFetchingAntrian(antrian,data.antrian));
            history.push("/survey");
            setStatus(statuslist.success)
        }else{
            setStatus(statuslist.error);
            Swal.fire({
                icon: 'warning',
                title: 'Whoopss',
                text:data.message
            });
            reset(antrian);
        }
    }
    return(
        <div>
        <div className="w-screen h-screen bg-color1">
        <div className="w-screen flex h-auto bg-color1 flex-col">
            {/* topbar */}
            <TopBar logo={logo}/>
            {/* content */}
            <div className="w-full h-full flex md:items-center justify-between flex-col md:flex-row">
                <div className="h-full w-full md:w-1/2 items-center flex flex-col">
                    <div className="mt-5 xl:mt-20 lg:mt-10 md:mt-4 md:mx-4 lg:mx-0 flex text-left md:text-center md:justify-center flex-col md:items-center">
                        <h3 className="font-black w-3/4 md:w-full text-4xl text-color4 font-quicksand">
                            Survey Kepuasan Masyarakat
                        </h3>
                        <p className="lg:w-1/2 mt-5 container md:container text-gray-800 font-quicksand">Bantu Kami Untuk Meningkatkan Kualitas Pelayanan Dengan Mengisi Survey Ini !</p>
                    </div>
                    <div className="my-10 px-5 py-10 md:px-0 md:my-0 lg:mt-10 md:mt-4 text-center bg-color2 lg:py-10 md:py-6 rounded-tl-3xl rounded-br-3xl shadow-2xl md:w-2/3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-2xl md:text-3xl font-lato font-black text-color4 mb-5">Masukan Nomor Antrian</h1>
                            <input ref={register} type='text' name='antrian' className="border-b-4 border-color4 bg-transparent outline-none text-center text-color4" placeholder='Disini'/><br/>
                            <button className="inline-block bg-color4 px-7 py-2 rounded-full shadow-lg text-lg tracking-widest text-color2 mt-5" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                {/* footer */}
                <div className="xl:h-full xl:w-auto h-1/2 w-1/2 hidden md:flex">
                    <img className="xl:mt-20 object-contain pointer-events-none" src={image} alt="frontpage"></img>
                </div>
            </div>
        </div>
        <div className="lg:hidden md:hidden xl:flex absolute justify-center bottom-0 w-full">
            <p className="font-sans text-center">Copyright &#169; Mal Pelayanan Publik Kabupaten Pandeglang 2020</p>
        </div>
        </div>
        <div className="justify-center lg:hidden hidden">
            <p className="font-sans text-center">Copyright &#169; Mal Pelayanan Publik Kabupaten Pandeglang 2020</p>
        </div>
        </div>
    )
};