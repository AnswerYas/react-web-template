export interface IApi {
    [propName: string]: {
        method: 'get' | 'post' | 'put' |'delete'
        url: string
    }
}

export const commonApi:IApi = {
    fetchWarn: {
        method: 'get',
        url: '/warn'
    }
} 