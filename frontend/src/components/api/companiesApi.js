import axios from 'axios';
export function fetchCompanies(){
    return axios.get('http://localhost:5000/api/companies/get').then(res=>res.data);
}