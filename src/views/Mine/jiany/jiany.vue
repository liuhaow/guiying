<template>
	<div class="jiany">
		<headt message='检疫证明'></headt>
		<div class="jiany-l">
			<ul>
				<li v-for='(item,index) in 5' :key='index'>
					<div class="j-t">
						<h2>2019-11-1 17:16:20</h2>
						<h3>有押金</h3>
					</div>
					<div class="j-n">
						<ul>
							<li><img src="../../../assets/back.jpg" /><img src="../../../assets/back.jpg" /></li>
						</ul>
						<h2>查看全部》</h2>
					</div>
					<div class="j-f">
						<button @click="suoyaoData(3)">索要证明</button>
					</div>
				</li>
			</ul>
		</div>
		<!--<mt-cell title='标题' is-link></mt-cell>-->
	</div>
</template>

<script>
	import headt from '../../../components/heda'
	export default {
		data() {
			return {
				select: 2,
				chd: 2,
				list: [{
						name: '已申请发票'
					},
					{
						name: '已开发票'
					},
					{
						name: '发票开票信息 '
					}
				]
			}
		},
		components: {
			headt
		},
		methods: {
			suoyaoData(idt) {
				var that = this
				that.$router.push('/mine/suoy')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.jiany {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		padding-bottom: 30px;
		box-sizing: border-box;
		overflow: auto;
		.jiany-l {
			ul {
				li {
					margin-bottom: 15px;
					div {
						padding: 0 36px 0 40px;
						box-sizing: border-box;
					}
					.j-t {
						display: flex;
						height: 80px;
						align-items: center;
						padding: 0 36px 0 40px;
						justify-content: space-between;
						background: #FFFFFF;
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
					.j-n {
						height: 260px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						ul {
							li {
								margin: 0!important;
								img {
									height: 150px;
									width: 150px;
									margin-right: 20px;
								}
							}
						}
						h2 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1)
						}
					}
					.j-f {
						width: 100%;
						height: 120px;
						background: rgba(255, 255, 255, 1);
						display: flex;
						justify-content: flex-end;
						align-items: center;
						border-radius: 8px;
						button {
							width: 200px;
							height: 56px;
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(255, 255, 255, 1);
							background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
							border-radius: 28px;
						}
					}
				}
			}
		}
	}
</style>