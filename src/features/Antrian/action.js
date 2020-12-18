import {SUCCESS_FETCHING_ANTRIAN} from './constant';

export function successFetchingAntrian(noAntrian,antrian){
    return{
        type: SUCCESS_FETCHING_ANTRIAN,
        noAntrian,
        antrian,
    };
};