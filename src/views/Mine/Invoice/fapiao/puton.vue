<template>
	<div class="putong">
		<div class="p-t-f">
			<div>
				<h2><span>*</span>发票抬头</h2> <input type="" v-model="name" placeholder="请输入营业执照注册名称" value="" />
			</div>
		</div>
		<div class="p-t-f">
			<div>
				<h2><span>*</span>纳税人识别号</h2> <input type="" v-model="taxid" placeholder="请输入纳税人识别号" value="" />
			</div>
		</div>
		<div class="p-t-f">
			<div>
				<h2><span>*</span>注册地址</h2> <input type="" v-model="addr" placeholder="请输入详细注册地址" value="" />
			</div>
		</div>
		<div class="p-t-f">
			<div>
				<h2><span>*</span>注册电话</h2> <input type="" v-model="mobile" placeholder="请输入注册电话" value="" />
			</div>
		</div>
		<div class="p-t-f">
			<div>
				<h2><span>*</span>开户银行</h2> <input type="" v-model="bank_account" placeholder="请输入开户银行" value="" />
			</div>
		</div>
		<div class="p-t-f">
			<div style="border: none!important;">
				<h2><span>*</span>银行账号</h2> <input type="" v-model="account_num" placeholder="请输入银行账号" value="" />
			</div>
		</div>
		<div class="p-t-d">
			<h2>其他信息</h2>
		</div>
		<div class="p-t-f">
			<div>
				<h2><span>*</span>联系人</h2> <input type="" v-model="contact_person" placeholder="请输入联系人信息" value="" />
			</div>
		</div>
		<div class="p-t-f">
			<div>
				<h2><span>*</span>联系电话</h2> <input type="" v-model="phone" placeholder="请输入联系人电话" value="" />
			</div>
		</div>
		<div class="p-t-f">
			<div>
				<h2><span>*</span>详细地址</h2> <input type="" v-model="dettail_addr" placeholder="请输入详细地址" value="" />
			</div>
		</div>
		<div class="butn">
			<button @click="btnDatatijiao">提交</button>
		</div>
	</div>

</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { fapiaosqInfo } from '@/api/mine'
	import { Notify } from 'vant';

	export default {
		data() {
			return {
				name: '',
				taxid: '',
				addr: '',
				mobile: '',
				bank_account: '',
				account_num: '',
				contact_person: '',
				phone: '',
				dettail_addr: '',
			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId',
				userData: 'userData'
			})
		},
		methods: {
			btnDatatijiao() {
				let data = {
					type: 1,
					token: this.TokenId,
					name: this.name,
					taxid: this.taxid,
					addr: this.addr,
					mobile: this.mobile,
					bank_account: this.bank_account,
					contact_person: this.contact_person,
					account_num: this.account_num,
					phone: this.phone,
					email: '1221',
					dettail_addr: this.dettail_addr
				}
				console.log(data)
				fapiaosqInfo(data).then(res => {
					console.log(res)
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
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.butn {
		margin-top: 50px;
		text-align: center;
		button {
			width: 710px;
			height: 80px;
			background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(88, 214, 89, 1));
			border-radius: 40px;
			font-size: 28px;
			font-family: PingFang SC;
			border: 0;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}
	
	.p-t-d {
		height: 100px;
		padding: 0 20px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		h2 {
			font-size: 32px;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}
	
	.p-t-f {
		height: 100px;
		padding: 0 20px;
		box-sizing: border-box;
		background: #fff;
		div {
			border-bottom: 2px solid #DDDDDD;
			height: 98px;
			display: flex;
			h2 {
				width: 190px;
				font-size: 28px;
				font-family: PingFang SC;
				display: flex;
				align-items: center;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				span {
					color: rgba(255, 101, 1, 1)!important;
					align-items: center;
					margin-right: 6px;
				}
			}
			input {
				font-size: 28px;
				width: 480px;
				margin-left: 50px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}
	}
</style>