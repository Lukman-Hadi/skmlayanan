import {ADD_SURVEY, SUBMIT} from './constant';


let initialState={};

export default function reducer(state = initialState, action){
    switch(action.type){
        
        case ADD_SURVEY:
            return {...state,[action.survey.name]:action.survey.value};

        case SUBMIT:
            return state;

        default: 
            return state;
        
    }
}