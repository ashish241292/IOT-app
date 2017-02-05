import axios from "axios";

export default class XHR {
    constructor() {
        axios.defaults.baseURL = STRING.baseURL;
        axios.defaults.headers.common['corsHeaders'] = "Link";
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = true;
        this.method = "get";
        this.data = {};
        this.Axios = axios[this.method.toLowerCase()];
    }
    crateInstance( url, method = 'get', data, header ) {
        this.url = url;
        this.method = method;
        this.data = data;
        this.header = header;
        this.Axios = axios[this.method.toLowerCase()];
    }
    call( thenCB = ()=>{}, catchCB = () => {} ){
        return ( this.Axios( this.url )
            .then( res => thenCB(res.data, res))
            .catch( err => catchCB(err.message, err))
        );
    }
}

AJAX = new XHR();
