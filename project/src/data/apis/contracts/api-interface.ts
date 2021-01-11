export interface Api<ApiParams, ApiResponseType>{
    execute(params: ApiParams): ApiResponseType;
}