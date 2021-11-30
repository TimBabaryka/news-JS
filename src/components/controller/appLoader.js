import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '07bb7597a6544284a773020e63cc8f23', 
        });
    }
}

export default AppLoader;
