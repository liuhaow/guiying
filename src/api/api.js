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
//分类
export const shangpingData = data =>Axios({
	url:'/api/allcategories/all_categories',
	method:'post',
	data
})
//我的 问题
export const questiondata = data =>Axios({
	url:'/api/personal/problem',
	method:'post',
	data
})
export const questiondetail = data =>Axios({
	url:'/api/personal/problem_detail',
	method:'post',
	data
})
