import {SUCCESS_FETCHING_ANTRIAN} from './constant';

const initialState = {
    noAntrian: '',
    id: '',
};

export default function reducer(state= initialState, action){
    switch(action.type){
        case SUCCESS_FETCHING_ANTRIAN:
            return {...state,
                noAntrian:action.noAntrian,
                id:action.antrian._id,
                jk:action.antrian.jk,
                loket:action.antrian.loket,
                layanan:action.antrian.layanan,
                nama:action.antrian.nama,
            };
        default:
            return state;
    }
}