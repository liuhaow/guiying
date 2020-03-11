<template>
	<div class="addxuqu">
		<headt message='设置'></headt>
		<div class="a-d-d">
			<div class="p-t-f">
				<div>
					<h2>意见反馈</h2>
					<i slot="icon" class="icon iconfont " @click="yijianDtat">&#xe644;</i>

				</div>
			</div>
			<!--<div class="p-t-f">
				<div>
					<h2>清除缓存</h2>
					<i slot="icon" class="icon iconfont " @click="qingchuDtat">&#xe644;</i>

				</div>
			</div>-->
			<div class="p-t-f">
				<div>
					<h2>关于贵迎</h2>
					<i slot="icon" class="icon iconfont " @click="aboutDtat">&#xe644;</i>

				</div>
			</div>

		</div>
		<div class="btnd">
			<button @click="nextData()">退出登录</button>
		</div>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters, mapActions } from 'vuex'
	
	export default {
		data() {
			return {}
		},
		components: {
			headt
		},
		methods: {
			...mapActions(
				[
					'setSignOut'
				]
			),
			yijianDtat() {
				var that = this;
				that.$router.push('/mine/yijian')
			},
			qingchuDtat() {
			},
			aboutDtat() {
				var that = this;
				that.$router.push('/mine/aboutgy')
			},
			nextData() {
				var that= this				
				that.setSignOut()	
				that.$router.push('/home')
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.addxuqu {
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
		.btnd {
			margin-top: 160px;
			width: 100%;
			justify-content: center;
			display: flex;
			button {
				width: 90%;
				height: 80px;
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
				border: 0;
				color: rgba(255, 255, 255, 1);
				background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(88, 214, 89, 1));
				border-radius: 40px;
			}
		}
		.a-d-d {
			.p-t-f {
				height: 100px;
				padding: 0 20px;
				box-sizing: border-box;
				background: #fff;
				div {
					border-bottom: 2px solid #DDDDDD;
					height: 98px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					h2 {
						width: 190px;
						font-size: 28px;
						font-family: PingFang SC;
						display: flex;
						align-items: center;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						padding-left: 15px;
					}
					i {
						font-size: 34px;
						height: 98px;
						line-height: 90px;
						width: 60px;
						font-weight: 500;
						text-align: center;
						color: #C1C1C1;
					}
				}
			}
		}
	}
</style>