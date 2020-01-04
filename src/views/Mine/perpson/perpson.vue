<template>
	<div class="addxuqu">
		<headt message='设置'></headt>
		<div class="a-d-d">
			<div class="a-d-d-lst">
				<h2>头像</h2>
				<div class="a-d-r">
					<img :src="userinfo.avatar" />
				</div>
			</div>
			<div class="a-d-d-lst">
				<h2>昵称</h2>
				<div class="a-d-r" @click="chooseNic">
					<h3>{{userinfo.username}}</h3>
					<i slot="icon" class="icon iconfont " >&#xe644;</i>
				</div>
			</div>
			<div class="a-d-d-lst">
				<h2>
					手机号码
				</h2>
				<div class="a-d-r" @click="choosePhone()">
					<h3>{{userinfo.mobile}}</h3>
					<i slot="icon" class="icon iconfont " >&#xe644;</i>
				</div>
			</div>
			<div class="a-d-d-lst">
				<h2>
					设置密码
				</h2>
				<div class="a-d-r" @click="choosePwed()">

					<i slot="icon" class="icon iconfont " >&#xe644;</i>
				</div>
			</div>
			<div class="a-d-d-lst">
				<h2>
					绑定微信账号
				</h2>
				<div class="a-d-r">
					<h3>已绑定</h3>
					<i slot="icon" class="icon iconfont " >&#xe644;</i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters, mapActions } from 'vuex'
	import { mineInfo } from '@/api/mine'
	export default {
		data() {
			return {
				fileList: [],
				userinfo:''
			}
		},
		components: {
			headt
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
				
			})
		},
		mounted() {
			let data = {
				token: this.TokenId
			}
			mineInfo(data).then(res => {

				if(res.data.code == 200) {
					this.userinfo = res.data.data.user_info;
				}
			})
		},
		methods: {
			chooseNic(){
				var that = this
				that.$router.push('/mine/perpson/nichen')
			},
			choosePhone(){
				var that = this
				that.$router.push('/mine/perpson/phoneber')
			},
			choosePwed(){
				var that = this
				
				that.$router.push('/mine/perpson/pwed')
				
			},
			nextData() {}
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
		.a-d-d {
			margin-top: 20px;
			.a-d-d-lst {
				height: 140px;
				background: #fff;
				padding: 0 34px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 2px;
				h2 {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 600;
					color: rgba(51, 51, 51, 1);
				}
				.a-d-r {
					display: flex;
					height: 100%;
					align-items: center;
					width: 300px;
					justify-content: flex-end;
					img {
						width: 100px;
						height: 100px;
						border-radius: 50%;
					}
					h3 {
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(204, 204, 204, 1);
					}
					i {

						font-size: 24px;
						color: #333;
						font-weight: 600;
						margin-left: 20px;
					}
				}
			}
		}
	}
</style>