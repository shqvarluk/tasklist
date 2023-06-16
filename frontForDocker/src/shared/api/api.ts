import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

export const API_CONTROLLER = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    },
});
