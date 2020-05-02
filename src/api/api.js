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
//新人优惠
export const newyouhui = data => Axios({
	url:'/api/user/newman',
	method: 'post',
	data
})
//关闭新人优惠
export const newpeipodata = data=>Axios({
	url:'/api/index/only_coupons',
	method:'post',
	data
})
//搜索
export const seachData= data => Axios({
	url:'/api/allcategories/search',
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

//首页列表
export const indexList = data=>Axios({
	url:"/api/index/nav",
	method:'get',
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
//搜索功能

export const seachinfo = data =>Axios({
	url:'/api/allcategories/search',
	method:'post',
	data
})
//活动专区 新品尝鲜
export const Newtryinfo = data =>Axios({
	url:'/api/index/worth_buy_list',
	method:'post',
	data
})
//新品
export const Newtryinfotype = data =>Axios({
	url:'/api/index/worth_buy_nav',
	method:'post',
	data
})
//新品轮播
export const Newlotype = data =>Axios({
	url:'/api/index/tj_lb',
	method:'post',
	data
})


//会员专区

export const Vipinfodata = data =>Axios({
	url:'/api/personal/member_growth_value',
	method:'post',
	data
})
//会员等级
export const Vipinfodeng = data =>Axios({
	url:'/api/personal/user_grade',
	method:'post',
	data
})
//会员规则
export const Vipinforule = data =>Axios({
	url:'/api/personal/member_rule',
	method:'post',
	data
})
//积分规则
export const Jifeninforule = data =>Axios({
	url:'/api/personal/score_rule',
	method:'post',
	data
})
//客服id
export const kefuId = data =>Axios({
	url:'/api/index/kf_list',
	method:'post',
	data
})

//最新订单
export const peisongdata = data =>Axios({
	url:'/api/delivery/order_list',
	method:'post',
	data
})
///取货地址

export const peisongqu = data =>Axios({
	url:'api/delivery/addr',
	method:'post',
	data
})
//接单
export const jiedanData = data =>Axios({
	url:'/api/delivery/orders',
	method:'post',
	data
})
//配送中
export const peisongzHong = data =>Axios({
	url:'/api/delivery/ordering',
	method:'post',
	data
})
//已完成
export const yigongdaoInfo = data =>Axios({
	url:'/api/delivery/order_over',
	method:'post',
	data
})
//商品详情
export const putongspInfo = data =>Axios({
	url:'/api/allcategories/details',
	method:'post',
	data
})
//查找可用优惠券
export const keusequandata= data =>Axios({
	url:'/api/pay/can_use_coupons',
	method:'post',
	data
})
export const zhifubaosuss = data =>Axios({
	url:'/api/order/jieguo',
	method:'post',
	data
})
export const zhifubastaosuss = data =>Axios({
	url:'/api/order/jg',
	method:'post',
	data
})

export const dierleibei = data =>Axios({
	url:'/api/allcategories/categories',
	method:'post',
	data
})

export const xiaofenlei = data =>Axios({
	url:'/api/allcategories/erjicate',
	method:'post',
	data
})

//起送价格

export const qisongdata = data =>Axios({
	url:'/api/personal/pickup',
	method:'post',
	data
})
//详情呀

export const xiangqintydata = data =>Axios({
	url:'/api/pay/gsorder',
	method:'post',
	data
})
//yansehuoqu
export const colorhuoqudata = data =>Axios({
	url:'/api/index/color_value',
	method:'post',
	data
})