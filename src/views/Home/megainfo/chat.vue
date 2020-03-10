<template>
	<div class="addxuqu">
		  <iframe :src="url1" width="100%" height="100%"  frameborder="0"></iframe>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { kefuId } from  "@/api/api"
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	export default {

		data() {
			return {
				fromid: 10,
				url1:'',
				toid:''
			}
		},
		components: {
			headt
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId',
				userData:'userData'
			})
		},
		created() {

		},
		destroyed() {

		},
		mounted(){
			let data ={
				token:this.TokenId
			}
			kefuId(data).then(res=>{
				if(res.data.code ==200){
					let frid= res.data.data[0].user_id;
					console.log(frid)
					this.url1= 'http://cainiuwang8898.cn/index.php/index/chat/index?fromid='+this.userData.id+'&toid='+frid;
					console.log(this.url1)
				}
			})
		},
		methods: {
			
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
		overflow: auto;
		.a-d-d {
			flex: 1;
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
	
	.test3 {
		text-align: center;
	}
	
	.msg {
		width: 100%;
		height: 100%;
		overflow: auto;
		padding-top: 5px;
		margin-bottom: 6px;
		.msg-item {
			position: relative;
			overflow: hidden;
			p {
				display: inline-block;
				border-radius: 10px;
				background: #3C3D5A;
				color: #000;
				float: left;
				padding: 20px 30px;
				font-size: 32px;
				margin: 0 0 2px 0;
				max-width: 70%;
				text-align: left;
				box-sizing: border-box;
			}
			&.mine {
				p {
					float: right;
					font-size: 32px;
					width: 320px;
					padding: 20px 30px;
					font-size: 32px;
					background: rgba(63, 185, 77, 1);
					border-radius: 10px;
					color: #fff;
				}
			}
		}
	}
	
	.input-group {
		height: 114px;
		background: #fff;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		.yuyin {
			width: 56px;
			height: 56px;
			background: blue;
			border-radius: 50%;
		}
		.sendin {
			background: none;
			border: 0;
		}
		.shuru {
			width: 520px;
			height: 80px;
			background: rgba(250, 248, 249, 1);
			border: 2px solid rgba(225, 225, 225, 1);
			border-radius: 40px;
			display: flex;
			align-items: center;
			margin: 0 23px;
			input {
				height: 80px;
				width: 450px;
				background: none;
				padding-left: 30px;
				box-sizing: border-box;
				font-size: 28px;
				color: #999;
			}
			span {
				width: 48px;
				height: 48px;
				background: red;
				border-radius: 50%;
			}
		}
	}
</style>