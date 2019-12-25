<template>
	<div class="wuliu">
		<div class="p-l-t">
            <div class="p-t-t" @click="back">
                <img src='../../../../static/img/fanhui.png' alt="">
            </div>
            <div class="p-t-n">发表评价</div>
            <div class ='p-t-r' @click="tijaioData">提交评价</div>

        </div>

	</div>
</template>

<script>
	import headt from '@/components/heda'

	export default {
		data(){
            return{

            }
        },
        methods:{
            back(){
				this.$router.go(-1)
            },
            tijaioData(){
                console.log(1)
            }
        }
	}
</script>

<style scoped lang="stylus">
	.wuliu {
		height: 100%;
		overflow: auto;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
        .p-l-t{
            height:88px;
            display:flex;
            justify-content:space-between;
            align-items :center;
            background #fff;
            padding :0 20px;
            box-sizing :border-box;

            .p-t-t{
                width :60px;
                height :100%;
                display:flex;
                align-items :center;
                img {
                    height :auto;
                    width:30px;
                }
            }
            .p-t-n{
                color :#333;
                font-size:36px;
            }
            .p-t-r{
                color :#3FB94D;
                font-size:36px;

            }
            
        }
		
	}
</style>