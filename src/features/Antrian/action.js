import {SUCCESS_FETCHING_ANTRIAN} from './constant';

export function successFetchingAntrian(noAntrian,idAntrian){
    return{
        type: SUCCESS_FETCHING_ANTRIAN,
        noAntrian,
        idAntrian,
    };
};