import {ADD_SURVEY, SUBMIT} from './constant';


let initialState={
    skm1: '',
    skm2: '',    
    skm3: '',    
    skm4: '',    
    skm5: '',    
    skm6: '',    
    skm7: '',    
    skm8: '',    
    skm9: '',   
};

export default function reducer(state = initialState, action){
    switch(action.type){
        
        case ADD_SURVEY:
            return {...state,[action.name]:action.value};

        case SUBMIT:
            return state;

        default: 
            return state;
        
    }
}