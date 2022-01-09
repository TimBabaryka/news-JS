import { Options } from "ts-loader/dist";

class Loader {
baseLink:string

options:{[key:string]:string}
    
    constructor(baseLink:string, options:{[key:string]:string}) {
        this.baseLink = baseLink;
        this.options = options;
    }



//     callback: <T>(data: T) => void = () => {
//         console.error('No callback for GET response');
//       }
  
//   type Callback<T> = (data: T) => void;

    getResp(
        { endpoint, options = {} }:{endpoint:string,options?:string|object },
        callback:<T>(data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res:Response):Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }
   
    makeUrl(options :{
        sources ?:string
    },
         endpoint: string):string {
        const urlOptions: {[prop: string]: string;} 
         = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method:string, endpoint:string, callback:<T>(data: T) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }

    
}

export default Loader;
