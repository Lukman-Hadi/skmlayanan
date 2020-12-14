import {ADD_SURVEY} from './constant';
import {submitSkm as submitApi} from '../../api/index';

export const validateQueue = () =>{

}

export const addSurvey = (survey) =>{
    return{
        type: ADD_SURVEY,
        survey
    }
}

export const submitSkm = () => {
    return async(dispatch, getState)=>{
        let antrian = getState().antrian;
        let survey = getState().survey;
        try{
            let data = new FormData();
            data.append('id_pemohon',antrian.id);
            for(const [k,v] of Object.entries(survey)){
                data.append(k,v);
            }
            let result = await submitApi(data);
            console.log('result', result);
            return result.data;
        }catch(err){
            console.log('err', err)
        }
    }
}