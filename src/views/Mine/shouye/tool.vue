<template>
	<div class="dingdan">
		<div class="ddan">
			<div class="dan-t">
				<p>常用工具</p>
			</div>
			<div class="order-list">
				<ul>
					<li v-for="(item,index) in lsit" :key='index' @click="chooseData(index)">
						<img :src="item.img" />
						<p>{{item.name}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				select: 0,
				lsit: [{
						name: '我的地址',
						img: '../../../static/img/doizy.png'
					},
					{
						name: '去开票',
						img: '../../../static/img/kpio.png'
					}, {
						name: '检疫证明',
						img: '../../../static/img/jyi.png'
					}, {
						name: '我的钥匙',
						img: '../../../static/img/yaods.png'
					},
					{
						name: '退押金',
						img: '../../../static/img/yyjin.png'
					},
					{
						name: '新品需要',
						img: '../../../static/img/xppi.png'
					}, {
						name: '资质条款',
						img: '../../../static/img/ziuan.png'
					}, {
						name: '我是配送员',
						img: '../../../static/img/psy.png'
					}
				]
			}
		},
		methods: {
			chooseData(idt) {
				console.log(idt)
				if(idt == 0) {
					this.$router.push('/mine/adress')

				} else if(idt == 1) {
					this.$router.push('/mine/invoice')
				} else if(idt == 2) {
					this.$router.push('/mine/jiany')
				} else if(idt == 3) {
					this.$router.push('/mine/mykey')
				} else if(idt == 4) {
					this.$router.push('/mine/tyajin')
				} else if(idt == 5) {
					this.$router.push('/mine/newneed')
				} else if(idt == 6) {
					this.$router.push('/mine/zzhi')
				} else if(idt == 7) {
					this.$router.push('/mine/peisent')
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.dingdan {
		width: 700px;
		height: 360px;
		margin: 20px auto 20px;
		.ddan {
			width: 700px;
			height: 360px;
			padding: 0 20px;
			box-sizing: border-box;
			background: rgba(255, 255, 255, 1);
			border-radius: 16px;
			.dan-t {
				height: 88px;
				border-bottom: 2px solid #F5F5F5;
				display: flex;
				justify-content: space-between;
				align-items: center;
				p {
					font-size: 34px;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
				h2 {
					font-size: 26px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
			.order-list {
				ul {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					li {
						width: 25%;
						height: 131px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						img {
							height: 39px;
							width: 38px;
							margin-bottom: 18px;
						}
						p {
							font-size: 24px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
						}
					}
				}
			}
		}
	}
</style>