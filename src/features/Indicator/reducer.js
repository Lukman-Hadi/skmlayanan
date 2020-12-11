import {FETCH_INDICATOR, START_FETCHING_INDICATOR, ERROR_FETCHING_INDICATOR, SUCCESS_FETCHING_INDICATOR} from './constant';

const statusList = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error'
}

const initialState = {
    data:[],
    status: statusList.idle
}

export default function reducer(state = initialState, action){
    switch(action.type){

        case START_FETCHING_INDICATOR:
            return {...state, status: statusList.process};
        case SUCCESS_FETCHING_INDICATOR:
            return {...state, data:action.data, status:statusList.success};
        case ERROR_FETCHING_INDICATOR:
            return {...state, status: statusList.error};

        default:
            return state;
    }
}