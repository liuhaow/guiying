<template>
	<div class="pinglu">
		<headt message='商品评价'></headt>
		<div class="p-l-l-s">
			<ul>
				<li v-for='(item,index) in list' :key='index'>
					<div class="l-t-op">
						<div class="">
							<img :src="item.img" alt="" /><span>{{item.name}}</span>
						</div>
						<p>{{item.time}}</p>
					</div>
					<div class="l-t-nav">
						<van-rate v-model="item.start" readonly/>
					</div>
					<p class="l-t-ft">
						{{item.conct}}
					</p>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'

	export default {
		data() {
			return {
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				],
				listt:[],
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
					},
					{
						img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
						name: '怪你****钟爱',
						time: '2019-11-09',
						start: 4,
						conct: '从平台上买的很实惠，很多优惠活动。本地的品牌值得信赖以后还会朵朵光顾的。',
						start: 4
					},
					{
						img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
						name: '怪你****钟爱',
						time: '2019-11-09',
						start: 4,
						conct: '从平台上买的很实惠，很多优惠活动。本地的品牌值得信赖以后还会朵朵光顾的。',
						start: 4
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
		components: {
			headt,

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
		width: 100%;
		position: absolute;
		background: #fff;
		left:0;
		top:0;
		right: 0;
		bottom: 0;
		overflow: auto;
		.p-l-l-s {
			ul {
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