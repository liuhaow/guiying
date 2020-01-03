<template>
	<div class="shenpt">
		<div class="" v-if='chak==2'>
			<ul class='s-p-t'>
				<li>发票抬头</li>
				<li>开票状态</li>
			</ul>
			<ul class="s-p-l">
				<li v-for='(item,index) in yikai' :key='index' @click="detailinfo(item.id)">
					<div>
						<p>{{item.name}}</p>
						<h2>{{item.create_time}}</h2>
					</div>

				</li>
			</ul>
		</div>
		<div class="s-p-l-x" v-if='chak==1'>
			<div class="p-t-f">
				<div>
					<h2>发票类型</h2>
					<h3>{{datt.type==1?'普通发票':'电子发票'}}</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>发票抬头</h2>
					<h3>{{datt.name}}</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>纳税人识别号</h2>
					<h3>{{datt.taxid}}</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>注册地址</h2>
					<h3>{{datt.addr}}</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>注册电话</h2>
					<h3>{{datt.mobile}}</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>开户银行</h2>
					<h3>{{datt.bank_account}}</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>银行账号</h2>
					<h3>{{datt.account_num}}</h3>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { fapiaoykInfo, fapiaoxqInfo } from '@/api/mine'
	import { Toast } from 'vant';
	export default {
		data() {
			return {
				chak: 2,
				yikai: [],
				datt:''
			}
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
			fapiaoykInfo(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					this.yikai = res.data.data
				}
			})
		},
		methods: {
			detailinfo(idt) {
				let data = {
					iid: idt,
					token: this.TokenId
				}
				fapiaoxqInfo(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						this.datt= res.data.data
						this.chak=1
					}else{
						Toast.fail(rea.data.msg);
					}
				})
			}
		}

	}
</script>

<style lang="stylus" scoped>
	.shenpt {
		.s-p-l-x {
			.p-t-f {
				height: 100px;
				padding: 0 20px;
				box-sizing: border-box;
				background: #fff;
				div {
					height: 100px;
					display: flex;
					align-items: center;
					padding: 0 20px;
					box-sizing: border-box;
					border-bottom: 2px solid #ddd;
					h2 {
						width: 190px;
						font-size: 28px;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						margin-right: 22px;
					}
					h3 {
						font-size: 28px;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
		}
		.s-p-t {
			padding: 10px 20px;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			background: #fff;
			li {
				height: 100px;
				line-height: 100px;
				text-align: center;
				border-bottom: 2px solid #ddd;
			}
			li:nth-child(1) {
				width: 60%;
			}
			li:nth-child(2) {
				width: 40%;
			}
		}
		.s-p-l {
			height: 1000px;
			overflow: auto;
			li {
				background: #fff;
				padding: 10px 20px;
				box-sizing: border-box;
				div {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 100px;
					border-bottom: 2px solid #ddd;
					p {
						width: 60%;
						text-align: center;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}
					h2 {
						width: 40%;
						text-align: center;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);
					}
				}
			}
		}
	}
</style>