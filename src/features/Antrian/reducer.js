import {SUCCESS_FETCHING_ANTRIAN} from './constant';

const initialState = {
    noAntrian: '',
    id: '',
};

export default function reducer(state= initialState, action){
    switch(action.type){
        case SUCCESS_FETCHING_ANTRIAN:
            return {...state,noAntrian:action.noAntrian,id:action.idAntrian};
        default:
            return state;
    }
}