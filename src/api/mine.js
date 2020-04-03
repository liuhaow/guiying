import Axios from './request'
//个人信息
export const mineInfo = data => Axios({
	url: '/api/personal/personal_change',
	method: 'post',
	data
})
//资产余额
export const zichanyue = data => Axios({
	url: '/api/personal/coin',
	method: 'post',
	data

})
//充值金额列表
export const RechargeInfo = data => Axios({
	url: '/api/personal/rechargelist',
	method: 'post',
	data
})
//充值明细
export const RechargeInfoLog = data => Axios({
	url: '/api/personal/recharge_log',
	method: 'post',
	data
})
//huankuan明细
export const RehuankInfoLog = data => Axios({
	url: '/api/personal/repayment_log',
	method: 'post',
	data
})
//优惠卷
export const youhuiData = data => Axios({
	url: '/api/coupons/coupons_list',
	method: 'post',
	data
})
//可以领取的优惠卷
export const youhuilinquData = data => Axios({
	url: '/api/coupons/get_coupons',
	method: 'post',
	data
})


//地址列表
export const AddrlistInfo = data => Axios({
	url: '/api/address/addrlist',
	method: 'post',
	data
})

//添加地址
export const TianAddrlist = data => Axios({
	url: '/api/address/add_addr',
	method: 'post',
	data
})

//编辑地址详情
export const BjideAddrlist = data => Axios({
	url: '/api/address/edit_detail',
	method: 'post',
	data
})
//编辑地址
export const BianjAddrlist = data => Axios({
	url: '/api/address/edit_addr',
	method: 'post',
	data
})
//设置默认地址

export const ShezhiAddr = data => Axios({
	url: '/api/address/set_addr',
	method: 'post',
	data
})
//常见问题列表
export const problemInfo = data => Axios({
	url: '/api/personal/problem',
	method: 'post',
	data
})
//常见问题详情
export const problemInfoLog = data => Axios({
	url: '/api/personal/problem_detail',
	method: 'post',
	data
})

//申请发票
export const fapiaosqInfo = data => Axios({
	url: '/api/address/add_invoice',
	method: 'post',
	data
})
//发票开票中
export const fapiaokpInfo = data => Axios({
	url: '/api/invoicing/invoicing',
	method: 'post',
	data
})
//已开发票
export const fapiaoykInfo = data => Axios({
	url: '/api/invoicing/invoiced',
	method: 'post',
	data
})
//发票详情
export const fapiaoxqInfo = data => Axios({
	url: '/api/invoicing/invoice_detail',
	method: 'post',
	data
})
//检疫证明列表
export const jinayiListInfo = data => Axios({
	url: '/api/personal/refund_deposit_list',
	method: 'post',
	data
})
//申请检疫证明
export const jinasqInfo = data => Axios({
	url: '/api/personal/quarantine_certificate',
	method: 'post',
	data
})
//我的钥匙
export const mykeyData = data => Axios({
	url: '/api/order/mykey',
	method: 'post',
	data
})
//退押金申请
export const yajintuiData = data => Axios({
	url: '/api/personal/refund_deposit',
	method: 'post',
	data
})
//新品需求
export const NewneedData = data => Axios({
	url: '/api/personal/new_product',
	method: 'post',
	data
})
//订单 类型
export const orderallData = data => Axios({
	url: '/api/order/orderlist',
	method: 'post',
	data
})
//订单详情
export const orderallDetail = data => Axios({
	url: '/api/order/orderdetail',
	method: 'post',
	data
})
//订单详情
export const Shancsorderall = data => Axios({
	url: '/api/order/delorder',
	method: 'post',
	data
})
//物流信息
export const Wuliudata = data => Axios({
	url: '/api/order/logisticsinfo',
	method: 'post',
	data
})
//猜你喜欢
export const guessylove = data => Axios({
	url: '/api/order/yourlike',
	method: 'post',
	data
})
// 爆款推荐
export const hotgoudata = data => Axios({
	url: '/api/allcategories/hotp',
	method: 'post',
	data
})

//加购物车 和 常用
export const addshopcar = data => Axios({
	url: '/api/allcategories/addshoppingcart',
	method: 'post',
	data
})



//意见反馈
export const yijianData = data => Axios({
	url: '/api/personal/feedback',
	method: 'post',
	data
})
//资质证明
export const zhiziZming = data => Axios({
	url: '/api/personal/qualification_certificate',
	method: 'post',
	data

})
//商品评价
export const shangpingpjData = data => Axios({
	url: '/api/evaluation/evaluatione',
	method: 'post',
	data

})
//积分详情页
export const jifenDatainfo = data => Axios({
	url: '/api/personal/score_ratio',
	method: 'post',
	data

})
//签到
export const qiandaoinfo = data => Axios({
	url: '/api/personal/Sign_in',
	method: 'post',
	data

})
//积分记录
export const jifnlistinfo = data => Axios({
	url: '/api/personal/singin_log',
	method: 'post',
	data

})
//积分兑换
export const jifnduihuaninfo = data => Axios({
	url: '/api/personal/exchange',
	method: 'post',
	data

})
//上传图片
export const uploadinfo = data => Axios({
	url: '/api/personal/uploadimg',
	method: 'post',
	data

})
//修改个人信息
export const xiugaigeren = data => Axios({
	url: '/api/user/profile',
	method: 'post',
	data

})
//退货列表
export const tuihuodata = data => Axios({
	url: '/api/personal/return_list',
	method: 'post',
	data

})
//退货申请
export const tuihuosqingdata = data => Axios({
	url: '/api/personal/returns_apply',
	method: 'post',
	data

})
//退货申请进度
export const tuihuojindu = data => Axios({
	url: '/api/personal/progress',
	method: 'post',
	data

})
//配送员申请
export const peisqingdata = data => Axios({
	url: '/api/delivery/fill_info',
	method: 'post',
	data

})

//配送员状态申请
export const peisongdata = data => Axios({
	url: '/api/personal/is_delivery',
	method: 'post',
	data

})
//充值pay
export const paywzhidata = data =>Axios({
	url:'/api/pay/alipay_recharge',
	method:'post',
	data
})
//充值类型选择
export const chonzhidata= data =>Axios({
	url:'/api/personal/rechargemenu',
	method:'post',
	data
})
//单个商品支付
export const singopayinfo = data=>Axios({
	url:'/api/pay/alipay_pay',
	method:'post',
	data
})
//赖账的 取消付款

export const Outpayinfo = data=>Axios({
	url:'/api/pay/cancel_order',
	method:'post',
	data
})
//确认收货
export const shouhuoData = data=>Axios({
	url:'/api/pay/queren',
	method:'post',
	data
})

//发布评论
export const pinlundata = data=>Axios({
	url:'/api/order/release_comment',
	method:'post',
	data
})
//评论详情信息
export const orderpinlunde = data=>Axios({
	url:'/api/pay/pin_detail',
	method:'post',
	data
})
//收获地址删除
export const delAddressdata = data=>Axios({
	url:'/api/address/del_addr',
	method:'post',
	data
})
//付款新方式
export const defukuandaya= data=>Axios({
	url:'/api/payqrcode/pay_qrcode',
	method:'post',
	data
})

//未付款支付



export const weizhikuandaya= data=>Axios({
	url:'/api/pay/shopping_pay',
	method:'post',
	data
})
//还款
export const huankuandaya= data=>Axios({
	url:'/api/pay/repayment',
	method:'post',
	data
})