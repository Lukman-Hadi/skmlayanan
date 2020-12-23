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
                text:'Data Tidak Ditemukan'
            });
            reset(antrian);
        }
    }
    return(
        <div>
        <div className="w-screen flex h-screen bg-color1 flex-col">
            {/* topbar */}
            <TopBar logo={logo}/>
            {/* content */}
            <div className="w-full h-full flex items-center justify-between">
                <div className="h-full w-1/2 items-center flex flex-col">
                    <div className="lg:mt-10 md:mt-4 md:mx-4 lg:mx-0 flex text-center justify-center flex-col items-center">
                        <h3 className="font-black text-4xl text-color4 font-quicksand">
                            Survey Kepuasan Masyarakat
                        </h3>
                        <p className="lg:w-1/2 mt-5 md:container text-gray-800 font-quicksand">Bantu Kami Untuk Meningkatkan Kualitas Pelayanan Dengan Mengisi Survey Ini !</p>
                    </div>
                    <div className="lg:mt-10 md:mt-4 text-center bg-color2 lg:py-10 md:py-6 rounded-tl-3xl rounded-br-3xl shadow-2xl w-2/3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-3xl font-lato font-black text-color4 mb-5">Masukan Nomor Antrian</h1>
                            <input ref={register} type='text' name='antrian' className="border-b-4 border-color4 bg-transparent outline-none text-center text-color4" placeholder='Disini'/><br/>
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