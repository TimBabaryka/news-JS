import News from './news/news';
import Sources from './sources/sources';

import {Article,DataSource,DataNews} from '../view/options';


interface IDataNews{
    status:string;
    totalResults:number;
    articles:Article;
}
interface IApiData {
    status: string;
    totalResults: number;
    articles: Array<Article>;
  }

export class AppView {
 news:News;
 sources:Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:DataNews):void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:DataSource):void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
