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
        setTimeout(()=>onClickPage(),1200)
    }
    const lastIndicator = page.currentIndicator * page.perPage;
    const firstIndicator = lastIndicator - page.perPage;
    const currentIndicator = indicator.data.slice(firstIndicator, lastIndicator);

    const renderIndicator = currentIndicator.map((indicator, key)=>{
        return <div key={key}>
            <Indicator indicator={indicator} onChangeI={handleChange}/>
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
    return (
        <div className="flex-row h-screen w-screen bg-color2">
             {renderIndicator}
             <div className="flex justify-center">
             {/* <button onClick={onClickPage}  className="button px-10 py-2 bg-white rounded-2xl">test</button> */}
             </div>
        </div>
    )
}
