import { commonApi } from './common'
import http from '@/utils/http'

const apiPrefix = '/api'
const apiModel = Object.assign({}, commonApi)
const API: { [propName: string]: (params?: any, args?: any) => any } = {}

for (let k of Object.keys(apiModel)) {
    const apiItem = apiModel[k]
    API[k] = (params: any, args: any) => {
        if(typeof params === 'string') {
            return http[apiItem.method](`${apiPrefix}${apiItem.url}/${params}`)
        } else {
            if(args) {
                return http[apiItem.method](`${apiPrefix}${apiItem.url}/${args}`, params)
            } else {
                return http[apiItem.method](`${apiPrefix}${apiItem.url}`, params)
            }
        }
    }
}

export default API