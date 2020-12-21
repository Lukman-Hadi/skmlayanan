import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getIndicator} from '../../features/Indicator/action';
import {addSurvey, submitSkm} from '../../features/Survey/actions';
import Indicator from '../../components/Indicator';
import ButtonEnd from '../../components/ButtonEnd';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {sangatBaik, sangatBuruk, buruk, baik} from '../../components/Images'

const MySwal = withReactContent(Swal);
export default function Survey(){
    let dispatch = useDispatch();
    let indicator = useSelector(state=>state.indicator);
    let survey = useSelector(state=>state.survey);
    let antrian = useSelector(state=>state.antrian);

    React.useEffect(()=>{
        dispatch(getIndicator());
    },[])

    const handleChange = (name, value)=>{
        let data = {
            name, 
            value
        }
        dispatch(addSurvey(data))
    }

    const onCustomClick = ()=>{
        if(Object.keys(survey).length === 9){
            MySwal.fire({
                title: "Apakah Anda Yakin ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yakin",
              }).then(async(result) => {
                if (result.isConfirmed) {
                  //submit here
                    let result = await dispatch(submitSkm());
                    if(await result.status){
                        Swal.fire("Terimakasih", "Survei Anda Sudah Dikirim", "Berhasil");
                    //reload
                        // setTimeout(() => window.scrollTo(0, 0), 2500);
                        // setTimeout(() => window.location.reload(), 3500);
                    }
                }
              }); 
        }
    }

    const handleSubmitSkm = () =>{
        if(Object.keys(survey).length === 9){
            MySwal.fire({
                title: "Apakah Anda Yakin ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yakin",
              }).then(async(result) => {
                if (result.isConfirmed) {
                  //submit here
                    let result = await dispatch(submitSkm());
                    if(await result.status){
                        Swal.fire("Terimakasih", "Survei Anda Sudah Dikirim", "Berhasil");
                    //reload
                        // setTimeout(() => window.scrollTo(0, 0), 2500);
                        // setTimeout(() => window.location.reload(), 3500);
                    }
                }
              }); 
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Whoopss',
                text:'Survey Belum Terisi Semua'
            });
        }
    }
    return (
        <div>
        {indicator.data.map((i)=>[
            <div className="flex-row h-screen w-screen bg-color2">
            {/* indicator */}
            <div className="justify-center">
                <h1 className="text-center pt-20 font-quicksand font-black text-7xl">{i.indicator}</h1>
            </div>
            {/* radio group */}
            <div className="flex h-3/5 justify-center">
                {/* img+input */}
                <div className="w-1/5 mx-2 py-20 px-2 mt-14 h-auto">
                    <label className="radioimg">
                        <input type="radio" name={i.indicator} value="1" onChange={e=>handleChange(i.bg, e.target.value)}></input>
                        <img className="smiley w-full" alt="sangat buruk" src={sangatBuruk}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Sangat Buruk</p>
                    </label>
                </div>
                <div className="w-1/5 mx-2 py-20 px-2 mt-14 h-auto">
                    <label className="radioimg">
                        <input type="radio" name={i.indicator} value="2" onChange={e=>handleChange(i.bg, e.target.value)}></input>
                        <img className="smiley w-full" alt="buruk" src={buruk}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Buruk</p>
                    </label>
                </div>
                <div className="w-1/5 mx-2 py-20 px-2 mt-14 h-auto">
                    <label className="radioimg">
                        <input type="radio" name={i.indicator} value="3" onChange={e=>handleChange(i.bg, e.target.value)}></input>
                        <img className="smiley w-full" alt="baik" src={baik}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Baik</p>
                    </label>
                </div>
                <div className="w-1/5 mx-2 py-20 px-2 mt-14 h-auto">
                    <label className="radioimg">
                        <input type="radio" name={i.indicator} value="" onChange={e=>handleChange(i.bg, e.target.value)}></input>
                        <img className="smiley w-full" alt="sangat baik" src={sangatBaik}></img>
                        <p className="pt-10 font-monstserrat font-bold text-xl">Sangat Baik</p>
                    </label>
                </div>
            </div>
            <div className="text-center">
                <button className="px-10 py-2 bg-white rounded-2xl" onClick={onCustomClick()}>TEST</button>
            </div>
        </div>
        ])}
        </div>
        // <div>
        //     {antrian.nama}<br/>
        //     {antrian.jk}<br/>
        //     {antrian.loket}<br/>
        //     {antrian.layanan}<br/>
            
        //     {indicator.data.map((i)=>[
        //         <Indicator 
        //         indicator = {i}
        //         onChangeI = {handleChange}
        //         antrian
        //         />
        //     ])}
        //     <ButtonEnd
        //         onSubmitI = {handleSubmitSkm}
        //     />
        // </div>
    )
}
