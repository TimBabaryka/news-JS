import AppLoader from './appLoader';

import {DataNews} from '../view/options';
import {DataSource} from '../view/options';
import {Article} from '../view/options';
import {Text} from '../view/options';




class AppController extends AppLoader {
    getSources( callback:<DataSource>(data: DataSource)=>void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }
    // callback:<T>(data: T) => void
    getNews(e:Event,  callback:<DataNews>(data: DataNews)=>void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;
       

        while (target !== newsContainer) {
            if (target.classList.contains('source__item'))  {
                const sourceId = target.getAttribute('data-source-id')as string;
                if (newsContainer?.getAttribute('data-source') !== sourceId) {
                    newsContainer?.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
