import axios from 'axios';
//importa o axios e cria uma instância com a baseURL e timeout definidos
export const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

