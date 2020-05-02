<template>
	<div class="qidong">
		<h2>{{btnxt}}</h2>
		<img :src="img"/>
	</div>
</template>

<script>
	import { lunboData } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'
	
	export default{
		data(){
			return{
				img:'',
				time:'',
				btnxt:''
			}
		},
		mounted(){
			var  that = this
			that.qidongye()
		},
		methods:{
			...mapActions(
				[
					'setLoadingState'
				]
			),
			qidongye(){
				var that = this
				lunboData().then(res => {
					if(res.data.code == 200) {
						let lunbt = res.data.data;
						let lunbDt = lunbt.filter(function(item) {
							return item.type == 7
						})
						console.log(lunbDt)
						that.time=5
						this.setLoadingState(2)
						that.timer()
						that.img = lunbDt[0].image
					}
				})
			},
			timer() {
				if(this.time > 0) {
					this.time--;
					this.btnxt = this.time + "s";
					setTimeout(this.timer, 1000);
				} else {
					this.time = 0;
					this.$router.push('/home')
				}
			},
		}
	}
	
</script>

<style scoped="scoped" lang="stylus">
.qidong{
	position: absolute;
	right: 0;
	top:0;
	bottom: 0;
	left: 0;
	h2{
		position: absolute;
		width: 120px;
		border-radius: 5%;
		height: 60px;
		z-index: 99;
		line-height: 60px;
		text-align: center;
		color: #fff;
		font-size: 34px;
		right: 15px;
		/*background: #E1E1E1;*/
		top: 15px;
	}
	img{
		height: 100%;
		width: 100%;
	}
	}
</style>