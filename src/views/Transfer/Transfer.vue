<template>
	<div class="tran">
		<div class="t-r-t">
			<div class="t-t-l">
				<div class="toux">
					<img :src="userinfo.avatar" alt="" />
				</div>
				<div class="geren">
					<h2>{{userinfo.username}}</h2>
					<h3><img src="../../../static/img/phk.png" alt="" /><span>{{userinfo.mobile}}</span></h3>
				</div>
			</div>
			<div class="t-t-r">
				<i slot="icon" class="icon iconfont ">&#xe644;</i>
			</div>
		</div>
		<div class="t-r-n">
			<ul>
				<li v-for='(item,index) in list' @click="changestyle(index)" :class="{'peis':selectd===index}">
					{{item.name}}
				</li>
			</ul>
		</div>
		<div class="t-r-f">
			<newoder v-if='selectd == 0'></newoder>
			<peisong v-if='selectd == 1'></peisong>
			<alive v-if='selectd == 2'></alive>
			
		</div>
	</div>
</template>

<script>
	import newoder from './neworder'
	import peisong from './peisong'
	import alive from './alive'
	import { Notify } from 'vant';
	import { mapGetters, mapActions } from 'vuex'
	import { mineInfo } from '@/api/mine'
	export default {
		data() {
			return {
				selectd: 0,
				dan: true,
				list: [{
						name: '最新订单'
					},
					{
						name: '配送中'
					},
					{
						name: '已送达'
					}
				],
				userinfo:''
			}
		},
		components: {
			newoder,peisong,alive
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted(){
			
			let data = {
				token: this.TokenId
			}
			mineInfo(data).then(res => {
				if(res.data.code == 200) {
					this.userinfo = res.data.data.user_info
				} else {
					Notify({
						type: 'warning',
						message: res.data.msg
					});
				}
			})
		},
		
		methods: {
			changestyle(idt) {
				this.selectd = idt
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.tran {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		.t-r-t {
			height: 300px;
			width: 100%;
			background: url(../../../static/img/touv.png) no-repeat;
			background-size: cover;
			display: flex;
			justify-content: space-between;
			padding: 30px 28px 0;
			align-items: center;
			box-sizing: border-box;
			.t-t-r {
				height: 100%;
				display: flex;
				align-items: center;
				i {
					font-size: 38px;
					color: #333;
					padding: 0 30px;
					color: #fff;
				}
			}
			.t-t-l {
				display: flex;
				align-items: center;
				.geren {
					height: 100px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					h2 {
						font-size: 36px;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(245, 245, 245, 1)
					}
					h3 {
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(245, 245, 245, 1);
						display: flex;
						align-items: center;
						img {
							width: 35px;
							height: 30px;
							margin-right: 5px;
						}
					}
				}
				.toux {
					width: 116px;
					height: 116px;
					margin-right: 20px;
					background: rgba(245, 245, 245, .6);
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					img {
						width: 100px;
						height: 100px;
						border-radius: 50%;
					}
				}
			}
		}
		.t-r-n {
			background: #272936;
			height: 100px;
			ul {
				display: flex;
				justify-content: space-between;
				li {
					height: 100px;
					line-height: 100px;
					text-align: center;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					width: 33.3%;
					color: rgba(255, 255, 255, .5);
				}
				.peis {
					color: rgba(255, 255, 255, 1)!important;
				}
			}
		}
		.t-r-f {
			flex: 1;
			overflow: auto;

		}
	}
</style>