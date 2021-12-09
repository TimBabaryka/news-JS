import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import {DataNews} from '../view/options';
import {DataSource} from '../view/options';
import {Article} from '../view/options';




export class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    

    start():void {

        
        (document.querySelector('.sources')as HTMLDivElement)
            .addEventListener('click', (e:Event) => this.controller.getNews(e, <DataNews>(data:DataNews) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
        
    }
}

export default App;
