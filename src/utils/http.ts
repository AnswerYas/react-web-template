import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
    timeout: 10000,
    transformResponse: responseData =>  {
        return responseData;
    }
})

instance.interceptors.response.use(
    function(response) {
        const { status, data } = response
        if (status === 200) {
            return JSON.parse(data)
        } else if (status === 401) {
        } else {
            return response
        }
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error)
    },
)
export default {
    get: (url: string, params?: any, option?: any) => {
        return instance.get(
            url,
            Object.assign(
                {
                    params,
                },
                option,
            ),
        )
    },
    post: (url: string, params?: any, option?: any) => {
        return instance.post(url, params, option)
    },
    put: (url: string, params?: any, option?: any) => {
        return instance.put(url, params, option)
    },
    delete: (url: string, params?: any, option?: any) => {
        return instance.delete(
            url,
            Object.assign(
                {
                    params,
                },
                option,
            ),
        )
    },
}
