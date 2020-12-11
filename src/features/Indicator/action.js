import {SUCCESS_FETCHING_INDICATOR, ERROR_FETCHING_INDICATOR, START_FETCHING_INDICATOR, FETCH_INDICATOR} from './constant';
import {fetchIndicator} from '../../api/index';

export function getIndicator(){
    return async(dispatch, getState)=>{
        dispatch(startFetching());
        try{
            let data = await fetchIndicator();
            dispatch(successFetching(data))
        }catch(err){
            dispatch(errorFetching())
        }
    }
}

export function startFetching(){
    return{
        type: START_FETCHING_INDICATOR,
    }
}

export function errorFetching(){
    return{
        type: ERROR_FETCHING_INDICATOR,
    }
}

export function successFetching(data){
    return{
        type: SUCCESS_FETCHING_INDICATOR,
        data
    }
}