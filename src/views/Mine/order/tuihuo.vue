<template>
	<div class="tuihuo">
		<headt message='退货'></headt>
		<div class="wu-l">
			<ul>
				<li v-for="(item,index) in 10" :key='index'>
					<div class="t-h-t">
						<h2>订单号 59595989595959</h2>
						<h3>订单已完成</h3>
					</div>
					<div class="t-h-n">
						<ul>
							<li>
								<img src="http://img3.imgtn.bdimg.com/it/u=2300348621,1925735194&fm=15&gp=0.jpg" alt="" />
								<img src="http://img3.imgtn.bdimg.com/it/u=2300348621,1925735194&fm=15&gp=0.jpg" alt="" />
							</li>
						</ul>
						<h2>查看全部  <i slot="icon" class="icon iconfont " @click="quanbuqingdan">&#xe644;</i></h2>
					</div>
					<div class="t-h-f">
						<h2>共2款，3件，合计¥5860</h2>
						<div class="">
							<button @click="chakanData(3)">查看物流</button><button @click="tuihuoData">申请退货</button>
						</div>
					</div>
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

			}
		},
		components: {
			headt

		},
		methods:{
			chakanData(idt){
				this.$router.push('/myorder/wuliu/2')
			},
			tuihuoData(idt){
				this.$router.push('/myorder/sqingth')
				

			},
			quanbuqingdan(idt){
				this.$router.push('/myorder/alldan/2')
				
			}
		}
	}
</script>

<style scoped lang="stylus">
	.tuihuo {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		overflow: auto;
		display: flex;
		flex-direction: column;
		.wu-l {
			flex: 1;
			overflow: auto;
			ul {
				height: 100%;
				overflow: auto;
				li {
					margin-bottom: 20px;
					.t-h-t {
						height: 68px;
						background: #fff;
						display: flex;
						padding: 0 20px;
						box-sizing: border-box;
						justify-content: space-between;
						align-items: center;
						h2 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
						h3 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(8, 194, 26, 1);
						}
					}
					.t-h-n {
						height: 195px;
						display: flex;
						padding: 0 20px;
						box-sizing: border-box;
						justify-content: space-between;
						align-items: center;
						ul {
							display: flex;
							align-items: center;
							li {
								margin: 0!important;
								display: flex;
								img {
									width: 152px;
									height: 152px;
									margin-right: 10px;
								}
							}
						}
						h2 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
					}
					.t-h-f {
						height: 160px;
						background: #fff;
						display: flex;
						flex-direction: column;
						justify-content: space-around;

						h2 {
							width: 100%;
							text-align: right;
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							padding-right: 30px;
							box-sizing: border-box;
						}
						div {
							display: flex;
							justify-content: flex-end;
							width: 100%;

							
							button {
								width: 200px;
								height: 56px;
								border: 2px solid rgba(225, 225, 225, 1);
								border-radius: 28px;
								font-size: 26px;
								font-weight: 500;
								background: none;
								color: rgba(51, 51, 51, 1);
								margin-right: 30px;
							}
						}
					}
				}
			}
		}
	}
</style>