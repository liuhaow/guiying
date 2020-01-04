<template>
	<div class="addxuqu">
		<headt message='昵称头像修改'></headt>
		<div class="a-d-d">
			<div class="a-d-d-lst">
				<div class="a-d-r">
					<input type="" v-model='username' placeholder="请输入要修改的昵称" />
					<i slot="icon" class="icon iconfont " @click="qingchuDtat">&#xe65c;</i>
				</div>
			</div>
			<div class="x-g-h">
				<h2>头像修改：</h2>
				<van-uploader v-model="fileList" deletable multiple :max-count="1" :after-read="afterRead" />
			</div>

		</div>
		<div class="btnd">
			<button @click="makesureData">确定</button>
		</div>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { uploadinfo,xiugaigeren } from '@/api/mine'
	export default {
		data() {
			return {
				username: '',
				fileList: [],

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
		methods: {
			qingchuDtat() {
				this.username = ''
			},
			afterRead(file){
//				let data ={
//					image:file.content,
//					token:this.TokenId
//				}
//				uploadinfo(data).then(res=>{
//					console.log(res)
//				})
			},
			nextData() {},
			makesureData() {
				let actimg;
				if(!this.fileList[0]){
					actimg=''
				}else{
					actimg = this.fileList[0].content
				}
				
				let data = {
					token:this.TokenId,
					username:this.username,
					avatar:actimg
				}

				
				xiugaigeren(data).then(res=>{
					if(res.data.code == 200) {
						Notify({
							type: 'success',
							message: res.data.msg
						});
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})
				
			},

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
			width: 100%;
			display: flex;
			justify-content: center;
			button {
				width: 580px;
				height: 80px;
				background: rgba(63, 185, 77, 1);
				border-radius: 40px;
				font-size: 28px;
				border: 0;
				color: #fff;
			}
		}
		.a-d-d {
			margin-top: 20px;
			.x-g-h{
				>>>.van-uploader {
					margin: 20px;
				}
				h2{
					font-size: 38px;
					color: #999;
					padding: 20px;
				}
			}
			.a-d-d-lst {
				height: 110px;
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
					width: 100%;
					align-items: center;
					justify-content: space-between;
					input {
						width: 50%;
						font-size: 32px;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}
					i {
						font-size: 32px;
						color: #333;
						font-weight: 600;
						margin-left: 20px;
						width: 80px;
						line-height: 140px;
						text-align: center;
						height: 140px;
					}
				}
			}
		}
	}
</style>