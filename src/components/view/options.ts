
// export interface IData {
//     status: string;
//     totalResults?: number;
//     articles?: IArticle[];
//     sources?: ISource[];
//   }




export interface DataNews {
    
    // sources:Array<DataSource>
    status?:string;
    totalResults:number;
    articles?:Text[];
}

export interface DataSource{
   status?:string;
   sources?:Article[];
}

export type Article = {
    category: string;
    country:string;
    description:string;
    id:string;
    language:string;
    name:string;
    url:string
}

export type Text = {
    author:string;
    content:string;
    description:string;
    publishedAt:string;
    source:{ id:string; name:string };
    title:string;
    url:string;
    urlToImage:string;
}