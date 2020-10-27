import request from '@/common/request.js'
import { formatGetUri } from '@/common/util.js'

const api = {}
const PORT1 = '/api'
// // POST请求方式
// api.register = params => request.globalRequest(`${PORT1}/mobile/signUp`, 'POST', params, 1)
// // GET请求方式
// api.register = params => request.globalRequest(`${PORT1}/mobile/signUp${formatGetUri(params)}`, 'GET',{}, 1)
api.Login=params=>request.globalRequest(`/users/login`,'POST',params);  //登录
api._getmonitorCount=params=>request.globalRequest(`/monitor/count`, 'Get', params);  //获取设备状态数量
api._getcyList=params=>request.globalRequest(`/cy`, 'Get', params);  //获取集团列表

export default api