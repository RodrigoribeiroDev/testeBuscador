import axios from "axios";

const api = axios.create({ baseURL: 'https://opencep.com/v1/'})

    //https://viacep.com.br/ws/01001000/json/
    // https://opencep.com/v1/15050305

    export default api;