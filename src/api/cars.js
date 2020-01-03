import Axios from './request'
//购物车
export const gouwcarInfo = data => Axios({
	url: '/api/allcategories/shopping_list',
	method: 'post',
	data
})
// 删除商品
export const shanchugwData =data=>Axios({
	url:'/api/allcategories/del_shopping',
	method:'post',
	data
})