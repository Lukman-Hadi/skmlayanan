import axios from 'axios';

const url = '//localhost/mpp/api/skm';
let axiosConfig = {
    headers: {
        "content-type":"multipart/form-data",
        "Accept":'application/json',
        "x-api-key": "7394c176ea344a4f97d8bf98db948eb9",
    }
}

export const validate = async (date,antrian) =>{
    let form = new FormData();
    form.append('date',date);
    form.append('antrian',antrian);
    console.log('form', form)
    try {
        const {data} = await axios.post(`${url}/validate`,form,axiosConfig);
        let modified = {'status': data.status, antrian: data.data[0]}
        console.log('modified', modified)
        return modified;
    } catch (error) {
        console.log('error', error)
    }
}

export const submitSkm = async (data) => {
    try {
        return await axios.post(`${url}/submit`, data, axiosConfig);
    } catch (err) {
        console.log('Some Error Occur', err);
    }
}

export const fetchCounter = async()=>{
    try{
        const {data} = await axios.get(`${url}/getCounter`,axiosConfig)
        console.log('fetched', data.status)
        if(data.status){
            return data.data;
        }else{
            console.log(data.status);
        }
    }catch(err){
        console.log('err', err);
    }
}

export const fetchIndicator = async()=>{
    try{
        const {data} = await axios.get(`${url}/getindicator`,axiosConfig);
        console.log('fetched', data)
        if(data.status){
            console.log(data.message);
            return data.data;
        }else{
            console.log(data.message);
        }
    }catch(err){
        console.log('err', err);
    }
}

export const fetchLayanan = async(id)=>{
    try{
        const fetched = await axios.get(`${url}/getlayanan/${id}`,axiosConfig);
        console.log('fetched', fetched)
        if(fetched.status){
            console.log(fetched.message)
            return fetched.data;
        }else{
            console.log(fetched.status);
        }
    }catch(err){
        console.log('err', err)
    }
}
