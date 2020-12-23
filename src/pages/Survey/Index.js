import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getIndicator} from '../../features/Indicator/action';
import {addSurvey, submitSkm} from '../../features/Survey/actions';
import Indicator from '../../components/Indicator';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useHistory } from 'react-router-dom';

const MySwal = withReactContent(Swal);
export default function Survey(){
    let dispatch = useDispatch();
    let indicator = useSelector(state=>state.indicator);
    let survey = useSelector(state=>state.survey);
    let antrian = useSelector(state=>state.antrian);
    let history = useHistory();
    const [page, setPage] = React.useState({
        currentIndicator:1,
        perPage:1
    });

    React.useEffect(()=>{
        dispatch(getIndicator());
    },[])

    const handleChange = (name, value)=>{
        let data = {
            name, 
            value
        }
        dispatch(addSurvey(data));
        setTimeout(()=>onClickPage(),1000)
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
                        history.push('/');
                        setTimeout(() => window.location.reload(), 1500);
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

    const indicatorPage = indicator.data.map((v,i)=>[
        <div key={i}>
            <Indicator indicator={v} onChangeI={handleChange} onCustomClick={onCustomClick}/>
        </div>
    ])

    const lastIndicator = page.currentIndicator * page.perPage;
    const firstIndicator = lastIndicator - page.perPage;
    const currentIndicator = indicator.data.slice(firstIndicator, lastIndicator);

    const renderIndicator = currentIndicator.map((indicator, key)=>{
        return <div key={key}>
            <Indicator indicator={indicator} onChangeI={handleChange} onCustomClick={onCustomClick} survey={survey} chec={true}/>
        </div>
    })

    const onClickPage = e =>{
        let current = page.currentIndicator +1;
        if(current === 10){
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
                        history.push('/');
                        setTimeout(() => window.location.reload(), 1500);
                    }
                }
              }); 
        }else{
            setPage({...page, currentIndicator:current})
        }
    }

    // const renderPagination = indicator.data.map((k,i)=>{
    //     return (
            
    //     )
    // })

    
    return (
        <div className="flex-row h-screen w-screen bg-color2">
             {renderIndicator}
             {/* <ul>
             {indicator.data.map((k,i)=>[
                 <li 
                 key={i+1}
                 id={i+1}
                 onClick={e=>setPage[{page, currentIndicator: Number(e.key)}]}
                >
             {i+1}    
             </li>
             ])}
             </ul> */}
             <div className="flex justify-center">
             <button onClick={onClickPage}  className="button px-10 py-2 bg-white rounded-2xl">test</button>
             </div>
        </div>
        // <div>
        // {indicator.data.map((value, index)=>[
        //     <div key={index}>
        //         <Indicator i={index} indicator={value} onChangeI={handleChange} onCustomClick={onCustomClick}/>
        //     </div>
        // ])}
        
        // <ReactPaginate
        //     previousLabel="prev"
        //     nextLabel="next"
        //     />
        // </div>
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
