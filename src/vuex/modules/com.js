import * as types from '../types'

/**
 * App通用配置
 */
const state = {
    loading: false,         //暂时只开发这一个 
	TokenId:JSON.parse(localStorage.getItem('tokenId')) ||'',//token
	taber:JSON.parse(localStorage.getItem('taber')) || 0,
	phonenum:JSON.parse(localStorage.getItem('phone')) || '',//电话输入保存
	userData:JSON.parse(localStorage.getItem('userData')) || '',
	morendata:JSON.parse(localStorage.getItem('adress')) || '',
	lit:JSON.parse(localStorage.getItem('chodd')) || 0,
	getadrss:JSON.parse(localStorage.getItem('getadrss')) ||'',
	orderl:JSON.parse(localStorage.getItem('order')) || 0,
	
	

	
	
	
}
const actions = {
	//手机号码输入
	setPoneNumb({commit}, res){
		localStorage.setItem('phone', JSON.stringify(res))		 		
        commit(types.PHONE_NUM, res)		
	},
	//等待状态
    setLoadingState({ commit }, status) {
        commit(types.COM_LOADING_STATUS, status)
    },
    //taber转换
    settaber({commit},res){
		localStorage.setItem('taber', JSON.stringify(res))	
    	commit(types.TABE_R,status)
    },
    //保存token
    setToken({commit}, res){
		localStorage.setItem('tokenId', JSON.stringify(res))		 	
    	commit(types.ADD_TOKEN,res )
    },
    //保存个人信息 
    setUserData({commit}, res){
    	localStorage.setItem('userData',JSON.stringify(res))
    	commit(types.SET_USER_DATA,res)
    },
    //选择种类
    chooseilt({commit},res){
    	localStorage.setItem('chodd',JSON.stringify(res))
    	commit('CHOSELIT',res)  	
    },
    //收货地址存储
    getaDta({commit},res){
    	localStorage.setItem('getadrss',JSON.stringify(res))
    	commit('GETADRESS',res)  	   	
    },
    //选择订单选项
    orderchoose({commit},res){
    	localStorage.setItem('order',JSON.stringify(res))
    	commit('ORDERCHSE',res)  	   	
    }
    
}
const getters = {
    loading: state => state.loading,
    TokenId: state => state.TokenId,
    taber:state => state.taber,
    phonenum:state => state.phonenum,
    userData:state=> state.userData,
    morendata:state=>state.morendata,
    lit:state=>state.lit,
    getadrss:state=>state.getadrss,
    orderl:state=>state.orderl
}
const mutations = {
	[types.PHONE_NUM](state,res){
    	state.phonenum = res
   },
   [types.SET_USER_DATA](state,res){
    	state.userData  = res
    },
    [types.COM_LOADING_STATUS](state, status) {
        state.loading = status
    },
    [types.ADD_TOKEN](state,res){
    	state.TokenId  = res
    },
    [types.TABE_R](state,res){
    	state.taber = res
    },
    CHOSELIT(state,res){
    	state.lit=res
    },
    GETADRESS(state,res){
    	state.getadrss=res
    },
    ORDERCHSE(state,res){
    	state.orderl=res
    },
}


export default {
    state,
    actions,
    getters,
    mutations
}