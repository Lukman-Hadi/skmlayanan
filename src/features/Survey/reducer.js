import {ADD_SURVEY, SUBMIT} from './constant';


let initialState={sk1:'',sk2:'',sk3:'',sk4:'',sk5:'',sk6:'',sk7:'',sk8:'',sk9:'',};

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