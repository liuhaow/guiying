<template>
	<div class="dingdan">
		<div class="ddan">
			<div class="dan-t">
				<p>帮助中心</p>
			</div>
			<div class="order-list">
				<ul>
					<li v-for="(item,index) in lsit" :key='index' @click="helpData(index)">
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

				lsit: [{
						name: '常见问题',
						img: '../../../static/img/cjian.png'
					},
					{
						name: '服务中心',
						img: '../../../static/img/fwu.png'
					}, {
						name: '在线客服',
						img: '../../../static/img/gfu.png'
					}, {
						name: '设置',
						img: '../../../static/img/szhu.png'
					}
				]
			}
		},
		methods:{
			helpData(idt){
				if(idt == 0) {
					this.$router.push('/mine/quetion')

				} else if(idt == 1) {
					this.$router.push('/mine/savecent')
				} else if(idt == 2) {
					this.$router.push('/mine/online')
				} else if(idt == 3) {
					this.$router.push('/mine/setting')
				} 
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.dingdan {
		width: 700px;
		height: 220px;
		margin: 20px auto 20px;
		.ddan {
			width: 700px;
			height: 220px;
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
				height: 131px;
				ul {
					width: 100%;
					height: 131px;
					display: flex;
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