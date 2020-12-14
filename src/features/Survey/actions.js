import {ADD_SURVEY} from './constant';

export const validateQueue = () =>{

}

export const addSurvey = (survey) =>{
    return{
        type: ADD_SURVEY,
        survey
    }
}