/**
 * App通用配置
 */
const state = {
	car: [{
			productId: 1,
			title: '小罐茶 心意茶叶礼盒茶特级大红袍18罐茶叶礼盒装礼物送礼佳品',
			yan: '分红',
			sellPrice: 30,
			img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
			selected: false,
			num: 3
		},
		{
			productId: 2,
			title: '小罐茶 心意茶叶礼盒茶特级大红袍18罐茶叶礼盒装礼物送礼佳品',
			yan: '分红',
			sellPrice: 50,
			img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
			selected: false,
			num: 4
		},
		{
			productId: 3,
			title: '小罐茶',
			yan: '分红',
			sellPrice: 60,
			img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
			num: 1,
			selected: false,

		}
	],
//  car:JSON.parse(localStorage.getItem('gouwucar')) || [],
	all_money: 0, //总价
	all_selsect: false, //全选状态
}
// 实时监听state值的变化
const getters = {
	//购物车列表
	carList(state) {
		// 初始化全选状态
		if(state.all_selsect) {
			state.car.forEach((item) => {
				item.selected = true
			})
		}
		localStorage.setItem("search", JSON.stringify(state.car));
		return state.car
	},
	//选中商品的金额
	allMoney(state) {
		let all_money = 0
		state.car.forEach((item) => {
			if(item.selected) {
				all_money += item.num * item.sellPrice
			}
		})
		return state.all_money = all_money
	},
	allSelsect(state) {
		return state.all_selsect

	}
}
// 改变state里的初始值 同步的
const mutations = {
	//添加商品

	//购物车页面数量加减
	ADDNUM(state, productId) {
		let index = state.car.findIndex(item => {
			return item.productId == productId
		})
		return state.car[index].num++
	},
	//购物车页面数量加减
	JIANNUM(state, productId) {
		let index = state.car.findIndex(item => {
			return item.productId == productId
		})
		if(state.car[index].num <= 1) {
			return state.car[index].num = 1
		} else {
			return state.car[index].num--
		}
	},
	//购物车单选
	SELECT(state, productId) {
		let index = state.car.findIndex(item => {
			return item.productId == productId
		})
		state.car[index].selected = !state.car[index].selected;
		let flag=state.car.some((item)=>{
                return item.selected==false
            })
            if(!flag){       //如果全部选中，则全选状态也改变
                state.all_selsect=true
            }else{   
                state.all_selsect=false
            }
	},
	SELECTALL(state) {
		state.all_selsect = !state.all_selsect
		if(state.all_selsect) {
			state.car.forEach((item) => {
				item.selected = true
			})
		} else {
			state.car.forEach((item) => {
				item.selected = false
			})
		}
	},

	//删除选中的商品，注意这里不能使用数组删除的方法，索引值会有问题
	DEL(state) {
		let flag = state.car.some((item) => {
			return item.selected == true
		})
		if(!flag) {
			Toast.text('请至少选择一个商品')
		} else {
			Dialog[0]({
				title: '确定从购物车中删除吗？',
				onOkBtn() { //确定按钮点击事件
					this.close(); //关闭对话框
					var list = [];
					state.car.forEach((item, index) => {
						if(!item.selected) {
							list.push(item)
						}
					})
					return state.car = list
				},
			})
		}
	},
}
// 异步触发mutations里面的方法 在外部组件里进行全局执行actions里面方法的时候，你只需要用执行this.$store.dispatch('headTitle'，132) 这样就可以全局改变改变标题的值了
const actions = {
	addGoods({
		commit
	}, data) {
		commit('ADDGoods', data)
	},
	addNum({
		commit
	}, id) {
		commit('ADDNUM', id)
	},
	jianNum({
		commit
	}, id) {
		commit('JIANNUM', id)
	},
	select({
		commit
	}, id) {
		commit('SELECT', id)
	},
	selectAll({
		commit
	}) {
		commit('SELECTALL')
	},
	del({
		commit
	}) {
		commit('DEL')
	},
}

export default {
	state,
	actions,
	getters,
	mutations
}