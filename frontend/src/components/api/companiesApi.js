import axios from 'axios';
export function fetchCompanies(){
    return axios.get('https://companies-9.onrender.com/api/companies/get').then(res=>res.data);
}
