export interface Repo<Api>{
    getApi(): Api;
}

export interface FetchAbleRepo<Api,Params,Model> extends Repo<Api>{
    fetch(params: Params): Promise<Model[]>;
}