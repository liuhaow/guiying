import Axios from './request'
//个人信息
export const mineInfo = data =>Axios({
	url:'/api/personal/personal_change',
	method:'post',
	data
})
//充值金额列表
export const RechargeInfo = data =>Axios({
	url:'/api/personal/rechargelist',
	method:'post',
	data
})
//充值明细
export const RechargeInfoLog = data =>Axios({
	url:'/api/personal/recharge_log',
	method:'post',
	data
})



//地址列表
export const AddrlistInfo = data =>Axios({
	url:'/api/address/addrlist',
	method:'post',
	data
})

//添加地址
export const TianAddrlist = data =>Axios({
	url:'/api/address/add_addr',
	method:'post',
	data
})

//编辑地址详情
export const BjideAddrlist = data =>Axios({
	url:'/api/address/edit_detail',
	method:'post',
	data
})
//编辑地址
export const BianjAddrlist = data =>Axios({
	url:'/api/address/edit_addr',
	method:'post',
	data
})
//设置默认地址

export const ShezhiAddr = data =>Axios({
	url:'/api/address/set_addr',
	method:'post',
	data
})
//常见问题列表
export const problemInfo = data =>Axios({
	url:'/api/personal/problem',
	method:'post',
	data
})
//常见问题详情
export const problemInfoLog = data =>Axios({
	url:'/api/personal/problem_detail',
	method:'post',
	data
})

//申请发票
export const fapiaosqInfo =data=>Axios({
	url:'/api/address/add_invoice',
	method:'post',
	data
})
//发票开票中
export const fapiaokpInfo =data=>Axios({
	url:'/api/invoicing/invoicing',
	method:'post',
	data
})
//已开发票
export const fapiaoykInfo =data=>Axios({
	url:'/api/invoicing/invoiced',
	method:'post',
	data
})
//发票详情
export const fapiaoxqInfo =data=>Axios({
	url:'/api/invoicing/invoice_detail',
	method:'post',
	data
})
//检疫证明列表
export const jinayiListInfo =data=>Axios({
	url:'/api/personal/refund_deposit_list',
	method:'post',
	data
})
//申请检疫证明
export const jinasqInfo =data=>Axios({
	url:'/api/personal/quarantine_certificate',
	method:'post',
	data
})
//我的钥匙
export const mykeyData =data=>Axios({
	url:'/api/order/mykey',
	method:'post',
	data
})
//退押金申请
export const yajintuiData =data=>Axios({
	url:'/api/personal/refund_deposit',
	method:'post',
	data
})
//新品需求
export const NewneedData =data=>Axios({
	url:'/api/personal/new_product',
	method:'post',
	data
})
//订单 类型
export const orderallData =data=>Axios({
	url:'/api/order/orderlist',
	method:'post',
	data
})
//订单详情
export const orderallDetail =data=>Axios({
	url:'/api/order/orderdetail',
	method:'post',
	data
})
//订单详情
export const Shancsorderall =data=>Axios({
	url:'/api/order/delorder',
	method:'post',
	data
})
//物流信息
export const Wuliudata =data=>Axios({
	url:'/api/order/logisticsinfo',
	method:'post',
	data
})
//猜你喜欢
export const guessylove =data=>Axios({
	url:'/api/order/yourlike',
	method:'post',
	data
})
// 爆款推荐
export const hotgoudata =data=>Axios({
	url:'/api/allcategories/hotp',
	method:'post',
	data
})

//加购物车 和 常用
export const addshopcar =data=>Axios({
	url:'/api/allcategories/addshoppingcart',
	method:'post',
	data
})

// var reg=/^1[3456789]\d{9}$/;
//var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
//优惠卷
export const youhuiData =data=>Axios({
	url:'/api/coupons/coupons_list',
	method:'post',
	data
})
//意见反馈
export const yijianData =data=>Axios({
	url:'/api/personal/feedback',
	method:'post',
	data
})
