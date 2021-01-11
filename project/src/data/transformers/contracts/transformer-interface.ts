export interface Transformer<Data, Model>{
    transform(data:Data): Model;
}