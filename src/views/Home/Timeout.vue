<template>
	<div class="xianshi" v-if="mlist.lenght>0">
		<div class="xmiao">
			<div class="xmiao-t">
				<p>限时秒杀</p>
				<van-count-down :time="time" />
			</div>
			<h2 @click="moreData"> 更多</h2>
		</div>
		<ul class="xlist">
			<li v-for='(item,index) in mlist' :key='index'>
				<img :src="item.goods_cover" class="mimgs" alt="" />
				<div class="miao-l-r">
					<p class="mingc">{{item.goods_name}} </p>
					<p class="bili"><span class="bline"></span></p>
					<div class="mjia">
						<p>秒杀价：&yen;{{item.show_price}} <span class="yuanjia">&yen;{{item.old_price}}</span></p>
						<h3 @click="mshaData(item.id)">马上抢</h3>
					</div>
				</div>
			</li>


		</ul>
	</div>
</template>

<script>

	import { homemiaosha } from '@/api/api'
	
	export default {
		data() {
			return {
				time: 1.0 * 60 * 60 * 1000,
				mlist: []
			}

		},
		mounted() {
			homemiaosha().then(res =>{
				console.log(res)
				if(res.data.code == 200){
					this.mlist= res.data.data.commodity;
//					this.time = res.data.data.countdown
				}
			})
		},
		methods: {
			moreData() {
				this.$router.push('/fsale')

			},
			mshaData(idt){
				this.$router.push('/home/msdetail/'+idt)
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.xianshi {

		background: #fff;
		width: 100%;
		.xlist {
			li {
				height: 260px;
				padding: 0 20px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				margin: 10px 0;
				.mimgs {
					height: 220px;
					width: 220px;
				}
				.miao-l-r {
					width: 458px;
					height: 100%;
					border-bottom: 2px solid #e1e1e1;
					padding-top: 20px;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					.mingc {
						font-size: 26px;
						font-weight: 500;
						line-height: 32px;
						color: rgba(51, 51, 51, 1);
					}
					.bili {
						width: 300px;
						height: 26px;
						background: rgba(63, 185, 77, .1);
						border-radius: 13px;
						margin: 25px 0 40px;
						.bline {
							display: block;
							width: 120px;
							height: 26px;
							background: rgba(63, 185, 77, 1);
							border-radius: 13px;
						}
					}
					.mjia {
						display: flex;
						justify-content: space-between;
						align-items: center;
						p {
							font-size: 26px;
							font-weight: 500;
							/*text-decoration: line-through;*/
							color: rgba(255, 101, 1, 1);
							.yuanjia {
								font-size: 26px;
								margin-left: 10px;
								font-weight: 500;
								text-decoration: line-through;
								color: #C1C1C1!important;
							}
						}
						h3 {
							width: 160px;
							height: 58px;
							border: 2px solid rgba(63, 185, 77, 1);
							border-radius: 29px;
							font-size: 26px;
							line-height: 58px;
							text-align: center;
							font-weight: 500;
							color: rgba(63, 185, 77, 1);
						}
					}
				}
			}
		}
		.xmiao {
			height: 80px;
			padding: 0 27px;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.xmiao-t {
				display: flex;
				height: 80px;
				align-items: center;
				p {
					font-size: 36px;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
					margin-right: 20px;
				}
			}
			h2 {
				font-size: 28px;
				font-weight: 500;
				height: 100%;
				display: flex;
				align-items: center;
				padding: 0 20px;
				color: rgba(63, 185, 77, 1);
			}
		}
	}
</style>