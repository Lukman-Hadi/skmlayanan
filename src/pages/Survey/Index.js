import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getIndicator} from '../../features/Indicator/action';
import {addSurvey, submitSkm} from '../../features/Survey/actions';
import Indicator from '../../components/Indicator';
import ButtonEnd from '../../components/ButtonEnd';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
export default function Survey(){
    let dispatch = useDispatch();
    let indicator = useSelector(state=>state.indicator);
    let survey = useSelector(state=>state.survey);

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
                <Indicator 
                indicator = {i}
                onChangeI = {handleChange}
                />
            ])}
            <ButtonEnd
                onSubmitI = {handleSubmitSkm}
            />
        </div>
    )
}
