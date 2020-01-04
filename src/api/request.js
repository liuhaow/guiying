import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
const service = axios.create({
	baseURL: "http://gysm.pfkweb.com/",
	timeout: 30000
})
// request拦截器
service.interceptors.request.use(config => {
//	config.header = {
//		accessToken: '123',
//		CLIENTONE: '123',
//		TIMESTAMP: '123'
//	}
//	if(config.method === 'post') {
//		config.data = {
//			...config.data,
//			apiversion: 'v.1.1',
//			apisafecode: 'Test.Test'
//
//		}
//	}
	config.method === 'post' ? config.data = qs.stringify({ ...config.data
	}) : config.params = { ...config.params
	};
	config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	return config
}, error => {
	Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
	response => {
		return response
	},
	error => {

		return Promise.reject(error)
	}
)

export default service