<template>
	<div class="pinglu">
		<h1>宝贝评论</h1>
		<div class="p-l-l-s" v-if="message.length!=0" >
			<ul>
				<li v-for='(item,index) in message' :key='index'>
					<div class="l-t-op">
						<div class="">
							<img :src="item.avatar" alt="" /><span>{{item.username}}</span>
						</div>
						<p>{{item.create_time}}</p>
					</div>
					<div class="l-t-nav">
						<van-rate v-model="item.level" readonly/>
					</div>
					<p class="l-t-ft">
						{{item.content}}
					</p>
				</li>
			</ul>
		</div>
		<div class="p-l-f-t" v-if="message.length!=0">

			<button @click="checkout()">查看更多{{numb}}</button>

		</div>
	</div>
</template>

<script>
	export default {

		props: {
			message: Array,
			numb:Number
		},
		data() {
			return {
				images: [
					
				],
				current: 0,
				canshu: false,
				list: [{
						img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
						name: '怪你****钟爱',
						time: '2019-11-09',
						start: 4,
						conct: '从平台上买的很实惠，很多优惠活动。本地的品牌值得信赖以后还会朵朵光顾的。',
						start: 3
					},
					{
						img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
						name: '怪你****钟爱',
						time: '2019-11-09',
						start: 4,
						conct: '从平台上买的很实惠，很多优惠活动。本地的品牌值得信赖以后还会朵朵光顾的。',
						start: 4
					}
				]
			}
		},

		methods: {
			checkout() {
				this.$router.push('/home/pingjia/2')

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.pinglu {
		height: 720px;
		width: 100%;
		background: #fff;
		h1 {
			font-size: 30px;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			background: #fff;
			padding: 40px 20px;
			box-sizing: border-box;
		}
		.p-l-f-t {
			display: flex;
			justify-content: center;
			height: 200px;
			button {
				width: 280px;
				height: 62px;
				border: 2px solid rgba(225, 225, 225, 1)!important;
				border-radius: 31px;
				font-size: 26px;
				font-family: PingFang SC;
				background: #fff;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
		.p-l-l-s {
			ul {
				padding-bottom: 70px;
				li {
					background: #fff;
					border-bottom: 2px solid #E1E1E1;
					padding: 0 20px;
					box-sizing: border-box;
					.l-t-ft {
						font-size: 26px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						line-height: 44px;
						padding-bottom: 40px;
					}
					.l-t-nav {
						padding: 20px 0;
					}
					.l-t-op {
						display: flex;
						width: 100%;
						justify-content: space-between;
						padding-top: 30px;
						p {
							font-size: 24px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
						}
						div {
							img {
								width: 68px;
								height: 68px;
								border: 1px solid rgba(225, 225, 225, 1);
								border-radius: 50%;
							}
							span {
								font-size: 28px;
								font-family: PingFang SC;
								font-weight: 500;
								margin-left: 20px;
								color: rgba(51, 51, 51, 1);
							}
						}
					}
				}
			}
		}
	}
</style>