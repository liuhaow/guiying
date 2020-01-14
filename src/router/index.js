import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/views/Home/Home'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    {
      path: '/home/seach',
      name: 'seach',
      component: resolve => require(['@/components/search'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    {
      path: '/home/mecenter',
      name: 'mecenter',
      component: resolve => require(['@/views/Home/megainfo/megainfo'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
     {
      path: '/home/mgeList',
      name: 'mgeList',
      component: resolve => require(['@/views/Home/megainfo/mgeList'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    {
      path: '/home/chat',
      name: 'chat',
      component: resolve => require(['@/views/Home/megainfo/chat'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
     {
      path: '/home/fash',
      name: 'fash',
      component: resolve => require(['@/views/Home/hotactivi/hotty'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    //秒杀
    {
      path: '/fsale',
      name: 'fsale',
      component: resolve => require(['@/views/Home/activity/fsale'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    //秒杀详情
     {
      path: '/home/msdetail/:id',
      name: 'msdetail',
      component: resolve => require(['@/views/Home/activity/msdetail'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    
    
    //团购
    {
      path: '/group',
      name: 'group',
      component: resolve => require(['@/views/Home/activity/group'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    //秒杀详情
     {
      path: '/pintu/pintuan/:id',
      name: 'pintuan',
      component: resolve => require(['@/views/Home/activity/pintuan'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    //商品评价
    {
      path: '/home/pingjia',
      name: 'pingjiad',
      component: resolve => require(['@/views/Home/activity/pingjia'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },

    {
      path: '/need/login',
      name: 'Login',
      component: resolve => require(['@/views/login/login'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    {
      path: '/need/code',
      name: 'Code',
      component: resolve => require(['@/views/login/code'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    //其他商品的详情
    {
      path: '/overall/detail/:id',
      name: 'Datilall',
      component: resolve => require(['@/components/alldetail'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    {
      path: '/overall',
      name: 'OverAll',
      component: resolve => require(['@/views/Totles/OverAll'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    {
      path: '/shop',
      name: 'Shop',
      component: resolve => require(['@/views/Shop/Shop'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    {
      path: '/mycar',
      name: 'Mycar',
      component: resolve => require(['@/views/Mycar/Mycar'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    {
      path: '/mine',
      name: 'Mine',
      component: resolve => require(['@/views/Mine/mine'], resolve),
       meta: {
        keepAlive: false 
      }
    
    },
    {
    	path:'/myorder',
    	name: 'myorder',
      component: resolve => require(['@/views/Mine/order/myorder'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    //付款
    {
    	path:'/myorder/payinfo/:id',
    	name: 'payinfo',
      component: resolve => require(['@/views/Mine/order/pay/payinfo'], resolve),
       meta: {
        keepAlive: false 
      }
    },
     //付款状态
    {
    	path:'/myorder/paystatu/:id',
    	name: 'paystatu',
      component: resolve => require(['@/views/Mine/order/pay/paystatu'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/myorder/alldan/:id',
    	name: 'alldan',
      component: resolve => require(['@/views/Mine/order/alldan'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    //退货
     {
    	path:'/myorder/tuihuo',
    	name: 'tuihuo',
      component: resolve => require(['@/views/Mine/order/tuihuo'], resolve),
       meta: {
        keepAlive: false 
      }
    },
     //退货申请
     {
    	path:'/myorder/sqingth',
    	name: 'sqingth',
      component: resolve => require(['@/views/Mine/order/sqingth'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    //退货进度
    {
    	path:'/myorder/sqjindu/:id',
    	name: 'sqjindu',
      component: resolve => require(['@/views/Mine/order/outhuo/outhuo'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    //取消订单
     {
    	path:'/myorder/quxiao/:id',
    	name: 'quxiao',
      component: resolve => require(['@/views/Mine/order/outhuo/quxiao'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    //交易成功
     {
    	path:'/myorder/bourse/:id',
    	name: 'bourse',
      component: resolve => require(['@/views/Mine/order/bourse'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    //评价页面
    {
    	path:'/myorder/pingjia/:id',
    	name: 'pingjia',
      component: resolve => require(['@/views/Mine/order/pingjia'], resolve),
       meta: {
        keepAlive: false 
      }
    },
     //评价提交
    {
    	path:'/myorder/pingsuess',
    	name: 'pingsuess',
      component: resolve => require(['@/views/Mine/order/pingsuess'], resolve),
       meta: {
        keepAlive: false 
      }
    },

    {
    	path:'/myorder/wuliu/:id',
    	name: 'wuliu',
      component: resolve => require(['@/views/Mine/order/wuliu'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/chongz',
    	name: 'chongz',
      component: resolve => require(['@/views/Mine/qianbox/chongz'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/qiank',
    	name: 'qiank',
      component: resolve => require(['@/views/Mine/qianbox/qiank'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/youh',
    	name: 'youh',
      component: resolve => require(['@/views/Mine/qianbox/youh'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/adress',
    	name: 'adress',
      component: resolve => require(['@/views/Mine/adress/adress'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    //添加地址
    {
    	path:'/mine/adddizhi',
    	name: 'adddizhi',
      component: resolve => require(['@/views/Mine/adress/addzhi'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/bianji/:id',
    	name: 'bianji',
      component: resolve => require(['@/views/Mine/adress/bianji'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/invoice',
    	name: 'invoice',
      component: resolve => require(['@/views/Mine/Invoice/invoice'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/jiany',
    	name: 'jiany',
      component: resolve => require(['@/views/Mine/jiany/jiany'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/suoy/:id',
    	name: 'suoy',
      component: resolve => require(['@/views/Mine/jiany/suoy'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/tyajin',
    	name: 'tyajin',
      component: resolve => require(['@/views/Mine/tuiqian/tqian'], resolve),
      
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/sqing',
    	name: 'sqing',
      component: resolve => require(['@/views/Mine/tuiqian/sqing'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/mykey',
    	name: 'mykey',
      component: resolve => require(['@/views/Mine/mykey/mykey'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/newneed',
    	name: 'newneed',
      component: resolve => require(['@/views/Mine/newneed/newneed'], resolve),
       meta: {
        keepAlive: false 
      }
    },
     {
    	path:'/mine/addxuqu',
    	name: 'addxuqu',
      component: resolve => require(['@/views/Mine/newneed/addneed'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/zzhi',
    	name: 'zzhi',
      component: resolve => require(['@/views/Mine/zzhi/zzhi'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/peisent',
    	name: 'peisent',
      component: resolve => require(['@/views/Mine/peisent/peisent'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/quetion',
    	name: 'quetion',
      component: resolve => require(['@/views/Mine/helpcenter/question/question'], resolve),
       meta: {
        keepAlive: true 
      }
    },
    {
    	path:'/mine/qdetail/:id',
    	name: 'qdetail',
      component: resolve => require(['@/views/Mine/helpcenter/question/detail'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/savecent',
    	name: 'savecent',
      component: resolve => require(['@/views/Mine/helpcenter/savecenter/savecenter'], resolve),
       meta: {
        keepAlive: false 
      }
    },
     {
    	path:'/mine/online',
    	name: 'online',
      component: resolve => require(['@/views/Mine/helpcenter/online/online'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/setting',
    	name: 'setting',
      component: resolve => require(['@/views/Mine/helpcenter/setting/setting'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/yijian',
    	name: 'yijian',
      component: resolve => require(['@/views/Mine/helpcenter/setting/yijian'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/aboutgy',
    	name: 'aboutgy',
      component: resolve => require(['@/views/Mine/helpcenter/setting/aboutgy'], resolve),
       meta: {
        keepAlive: false 
      }
    },
     {
    	path:'/mine/perpson',
    	name: 'perpson',
      component: resolve => require(['@/views/Mine/perpson/perpson'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    //充值明细
    {
    	path:'/mine/mingxi',
    	name: 'mingxi',
      component: resolve => require(['@/views/Mine/qianbox/mingxi'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    //还款明细
    {
    	path:'/mine/hkmingxi',
    	name: 'hkmingxi',
      component: resolve => require(['@/views/Mine/qianbox/remingxi'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/perpson/nichen',
    	name: 'nichen',
      component: resolve => require(['@/views/Mine/perpson/nicheng'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/perpson/phoneber',
    	name: 'phoneber',
      component: resolve => require(['@/views/Mine/perpson/phoneber'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/mine/perpson/pwed',
    	name: 'pwed',
      component: resolve => require(['@/views/Mine/perpson/pwed'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    //配送员
    {
    	path:'/peisong/transfer',
    	name: 'transfer',
      component: resolve => require(['@/views/Transfer/transfer'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/peisong/peidetail',
    	name: 'peidetail',
      component: resolve => require(['@/views/Transfer/peidetail'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/jifen/jifen',
    	name: 'jifen',
      component: resolve => require(['@/views/Mine/jifen/jifen'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/jifen/jifenrule',
    	name: 'jifenrule',
      component: resolve => require(['@/views/Mine/jifen/jifenrule'], resolve),
       meta: {
        keepAlive: false 
      }
    },
     {
    	path:'/vip/Vipmeber',
    	name: 'Vipmeber',
      component: resolve => require(['@/views/Vipmeber/Vipmeber'], resolve),
       meta: {
        keepAlive: false 
      }
    },
     {
    	path:'/vip/viplist',
    	name: 'viplist',
      component: resolve => require(['@/views/Vipmeber/viplist'], resolve),
       meta: {
        keepAlive: false 
      }
    },
    {
    	path:'/vip/viprule',
    	name: 'viprule',
      component: resolve => require(['@/views/Vipmeber/viprule'], resolve),
       meta: {
        keepAlive: false 
      }
    },
     {
    	path:'/mine/chongzhifu',
    	name: 'chongzhifu',
      component: resolve => require(['@/views/Mine/qianbox/zhifub'], resolve),
       meta: {
        keepAlive: false 
      }
    }

    
  ]
})
