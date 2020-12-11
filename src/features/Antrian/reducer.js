import {START_FETCHING_ANTRIAN, ERROR_FETCHING_ANTRIAN, SUCCESS_FETCHING_ANTRIAN, VALIDATE, ADD_ANTRIAN} from './constant';

const statusList = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error'
}

const initialState = {
    noAntrian: '',
    id: '',
    status: statusList.idle
};

export default function reducer(state= initialState, action){
    switch(action.type){
        case START_FETCHING_ANTRIAN:
            return {...state, status: statusList.process};
        case ERROR_FETCHING_ANTRIAN:
            return {...state, status: statusList.error};
        case SUCCESS_FETCHING_ANTRIAN:
            return {...state,id:action.antrian._id, status: statusList.success};
        case ADD_ANTRIAN:
            return {...state, noAntrian:action.antrian};
        default:
            return state;
    }
}