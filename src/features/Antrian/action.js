import {VALIDATE, ADD_ANTRIAN, SUCCESS_FETCHING_ANTRIAN, ERROR_FETCHING_ANTRIAN, START_FETCHING_ANTRIAN} from './constant';
import {validate} from '../../api/index';

export function validateQueue(){
    return async (dispatch, getState)=>{
        dispatch(startFetch());
        let noAntrian = getState().antrian.noAntrian;
        let date = new Date();
        let formatedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        try {
            let data = await validate(formatedDate, noAntrian);
            if(!data.status){
                dispatch(errorFetchingProduct())
            }else{
                dispatch(successFetchingAntrian(data.antrian));
            }
        } catch (error) {
            console.log('error', error)
            dispatch(errorFetchingProduct());
        }
    }
}

export function startFetch(){
    return{
        type: START_FETCHING_ANTRIAN,
    };
};

export function addAntrian(antrian){
    return{
        type: ADD_ANTRIAN,
        antrian
    }
}

export function successFetchingAntrian(antrian){
    return{
        type: SUCCESS_FETCHING_ANTRIAN,
        antrian
    };
};

export function errorFetchingProduct(){
    return{
        type: ERROR_FETCHING_ANTRIAN,
    };
};