import axios from 'axios';



export const instace = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

