import urlConfig from './config.js'

const request = {}
const headers = {
	token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNWY5N2I5NWNjNDQ2MjY0ZDE0NGMwNjNkIiwiZXhwIjoxNjAzNzkyMTgyLCJpYXQiOjE2MDM3OTAzODJ9.2zcs1hnnhvo5Zpcsnuh8smO5Hr9FgoNG1hc49j0TFh0"
}
    
request.globalRequest = (url, method, data) => {    
    return uni.request({
        url: urlConfig + url,
        method,
        data: data,
        dataType: 'json',
        header: headers
    }).then(res => {
		if (res[1].statusCode == 200 && res[1].data.status == 0) {
		    return res[1].data
		} else {
		    throw res[1].data
		}
    }).catch(parmas => {
　　　　　　switch (parmas.status) {
　　　　　　　　case 401:
　　　　　　　　　　uni.clearStorageSync()
　　　　　　　　　　break;
　　　　　　　　default:
　　　　　　　　　　uni.showToast({
　　　　　　　　　　　　title: parmas.msg,
　　　　　　　　　　　　icon: 'none'
　　　　　　　　　　})
　　　　　　　　　　return Promise.reject()
　　　　　　　　　　break
　　　　　　}

　　})
 } 
 export default request