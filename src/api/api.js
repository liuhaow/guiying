import Axios from './request'

//注册
export const resgIInfo = data => Axios({
	url: '/User/doRegInfo',
	method: 'post',
	data
})
//验证信息码
export const getSmsCode = data => Axios({
	url: '/api/sms/send',
	method: 'post',
	data
})
//登录
export const loginInfo = data => Axios({
	url:'/api/user/mobilelogin',
	method: 'post',
	data
})
//首页轮播
export const lunboData = data=>Axios({
	url:'/api/index/banners',
	method: 'get',
	data
})
//首页信息
export const indexmessage = data=>Axios({
	url:"/api/index/notice",
	method:'post',
	data
})
//首页秒杀
export const homemiaosha = data=>Axios({
	url:"/api/spikemysql/home_spike_list",
	method:'post',
	data
})
//首页团购列表
export const hometugou = data=>Axios({
	url:'/api/groupbuy/groupbuylist',
	method:'post',
	data
})
//团购详情
export const tuangoudetail =data=>Axios({
	url:'/api/groupbuy/groupbuydetail',
	method:'post',
	data
})
//秒杀导航列表
export const MkillList =data=>Axios({
	url:'/api/spikemysql/spike_nav',
	method:'post',
	data
})
export const MkillInfoList =data=>Axios({
	url:'/api/spikemysql/spike_list',
	method:'post',
	data
})


//秒杀详情
export const Mkilldetail =data=>Axios({
	url:'/api/spikemysql/spike_detail',
	method:'post',
	data
})
//评论详情
export const pinglundetail =data=>Axios({
	url:'/api/groupbuy/all_evl',
	method:'post',
	data
})
//分类
export const shangpingData = data =>Axios({
	url:'/api/allcategories/all_categories',
	method:'post',
	data
})

