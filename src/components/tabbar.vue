<template>
  <div class="tab">
    <mt-tabbar  v-show="isShowTabbar" fixed>
      <mt-tab-item id="首页" class="tabbar-item" @click.native="changeToMain" :style="maincolor">
        <i slot="icon" class="icon iconfont icon-shouye" :style="maincolor">&#xe608;</i>
        首页
      </mt-tab-item>
      <mt-tab-item id="分类" class="tabbar-item" @click.native="changeToClass" :style="classifycolor">
        <i slot="icon" class="icon iconfont icon-leimupinleifenleileibie2" >&#xe650;</i>
          易币
      </mt-tab-item>
      <mt-tab-item id="我的学习" class="tabbar-item" @click.native="changeToLearn" :style="learncolor">
        <i slot="icon" class="icon iconfont icon-icon" :style="learncolor">&#xe638;</i>
            消息
      </mt-tab-item>
      <mt-tab-item id="账号" class="tabbar-item" @click.native="changeToMy" :style="mycolor">
        <i slot="icon" class="icon iconfont icon-icon_account" :style="mycolor">&#xe61a;</i>
        账号
      </mt-tab-item>
    </mt-tabbar>
  </div>
  
</template>

<script>
const iconColor = "color: #cdcdcd";
const iconColorActive ="color: #4673EC";
export default {  
    data(){
      return{
        maincolor: iconColorActive,
        classifycolor: iconColor,
        learncolor: iconColor,
        mycolor: iconColor,
      }
    },
   	computed: {
      isShowTabbar () {
        let routeLength = this.$route.path.split('/').length;

        return routeLength > 2 ? false : true;
      }
    }, 
    methods:{
      changeToMain(){
        this.$router.push({path:'/home'});
        this.maincolor = iconColorActive;
        this.classifycolor = iconColor;
        this.learncolor = iconColor;
        this.mycolor = iconColor;
      },
      changeToClass(){
        this.$router.push({path:'/yibi'});
        this.maincolor = iconColor;
        this.classifycolor = iconColorActive;
        this.learncolor = iconColor;
        this.mycolor = iconColor;        
      },
      changeToLearn(){
        this.$router.push({path:'/message'});       
        this.maincolor = iconColor;
        this.classifycolor = iconColor;
        this.learncolor = iconColorActive;
        this.mycolor = iconColor;   
      },
      changeToMy(){
        this.$router.push({path:'/my'});      
        this.maincolor = iconColor;
        this.classifycolor = iconColor;
        this.learncolor = iconColor;
        this.mycolor = iconColorActive;    
      },
    }
}
</script>

<style lang="stylus" scoped>
.tab
  .tabbar-item
    display: inline-block
    .icon 
      font-size: 25px
  .mint-tabbar 
    height: 8%
  .mint-tab-item
    vertical-align center
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
</style>

