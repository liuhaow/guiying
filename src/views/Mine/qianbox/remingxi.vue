<template>
	<div class="addxuqu">
		<headt message='还款明细'></headt>
		<ul class="sd1">
			<li v-for='(item,index) in lift ' :key='index' @click="changestyle(index+1)" :class="{'actt':tab===index+1}">
				{{item}}
			</li>
		</ul>
		<div class="qikm" v-if='tab==1'>
			<div class="m-top">
				<select name="public-choice" v-model="couponSelected" @change="getCouponSelected">
					<option :value="coupon.id" v-for="coupon in couponList">{{coupon.name}}</option>
				</select>
				<h2>总计&yen;{{totles}}</h2>
			</div>
			<ul class="chozhi">
				<li v-for="(item ,index) in qmlist" :key='index'>
					<div class="">

						<h2>
							<span class="shijain2">订单编号：{{item.order_num}}</span>
						</h2>
						<p>{{item.content}}</p>

					</div>
					<h3>-{{item.coin}}</h3>
				</li>
			</ul>
		</div>
		<div class="minxi" v-if='tab==2'>
			<div class="m-top">
				<select name="public-choice" v-model="couponSelected" @change="getCouponSelected">
					<option :value="coupon.id" v-for="coupon in couponList">{{coupon.name}}</option>
				</select>
				<h2>总计&yen;{{totle}}</h2>
			</div>
			<ul class="chozhi">
				<li v-for="(item ,index) in mlist" :key='index'>
					<div class="">
						<p>已还款</p>
						<h2>

							<span class="shijain">{{item.create_time}}</span>
						</h2>
					</div>
					<h3>+{{item.coin}}</h3>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import headt from '@/components/heda'
	import { RehuankInfoLog, qiandebtdata } from '@/api/mine'
	export default {
		data() {
			return {
				tab: 1,
				lift: ['欠款明细', '还款明细'],
				couponList: [{
						id: '0',
						name: '本月'
					},
					{
						id: '1',
						name: '一月'
					},
					{
						id: '2',
						name: '二月'
					},
					{
						id: '3',
						name: '三月'
					},
					{
						id: '4',
						name: '四月'
					},
					{
						id: '5',
						name: '五月'
					},
					{
						id: '6',
						name: '六月'
					},
					{
						id: '7',
						name: '七月'
					},
					{
						id: '8',
						name: '八月'
					},
					{
						id: '9',
						name: '九月'
					},
					{
						id: '10',
						name: '十月'
					},
					{
						id: '11',
						name: '十一月'
					},
					{
						id: '12',
						name: '十二月'
					}
				],
				couponSelected: '',
				mlist: [],
				qmlist: [],
				totles: '',
				totle: ''
			}
		},
		components: {
			headt
		},
		created() {
			this.couponSelected = this.couponList[0].id;
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			var date = new Date();

			let yue = date.getMonth() + 1;
			let data = {
				token: this.TokenId,
				month: yue
			}
			qiandebtdata(data).then(res => {
				if(res.data.code == 200) {
					this.qmlist = res.data.data.list,
						this.totles = res.data.data.sum
				}
			})
			RehuankInfoLog(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					this.mlist = res.data.data.list,
						this.totle = res.data.data.sum
				}
			})
		},
		methods: {
			changestyle(idt) {
				var that = this;
				that.tab = idt
			},
			chooseNic() {
				var that = this
				that.$router.push('/mine/perpson/nichen')
			},
			choosePhone() {
				var that = this
				that.$router.push('/mine/perpson/phoneber')
			},
			choosePwed() {
				var that = this

				that.$router.push('/mine/perpson/pwed')

			},
			nextData() {},
			getCouponSelected() {

				console.log(this.couponSelected)
				if(this.couponSelected == 0) {
					var date = new Date();
					let yue = date.getMonth() + 1;
					this.couponSelected = yue
				}
				let data = {
					token: this.TokenId,
					month: this.couponSelected
				}

				qiandebtdata(data).then(res => {
					if(res.data.code == 200) {
						this.qmlist = res.data.data.list,
							this.totles = res.data.data.sum
					}
				})
				RehuankInfoLog(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						this.mlist = res.data.data.list
						this.totle = res.data.data.sum

					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.chozhi {
		flex: 1;
		overflow: auto;
		padding: 0 20px;
		box-sizing: border-box;
		background: #fff;
		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 0;
			border-bottom: 2px solid #E1E1E1;
			div {
				display: flex;
				width: 80%;
				flex-direction: column;
				justify-content: space-between;
				p {
					font-size: 30px;
					padding: 20px 0;
					color: #333;
					white-space: normal;
					word-break: break-all;
				}
				h2 {
					font-size: 32px;
					color: #999;
					padding: 20px 0;
					line-height: 38px;
					white-space: normal;
					word-break: break-all;
					.shijain {
						margin-left: 10px;
					}
				}
			}
			h3 {
				font-size: 36px;
				color: #FB0E3A;
			}
		}
	}
	
	.m-top {
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 20px;
		select {
			width: 200px;
			height: 68px;
			background: #fff;
			font-size: 32px;
			padding-left: 30px;
			box-sizing: border-box;
			border-radius: 34px;
			border: 0;
			text-align: center;
			option {
				text-align: center;
				border: 0;
			}
		}
		h2 {
			color: #999;
			font-size: 32px;
		}
	}
	
	.sd1 {
		width: 100%;
		display: flex;
		height: 80px;
		margin-top: 10px;
		li {
			width: 50%;
			height: 80px;
			line-height: 80px;
			text-align: center;
			background: #fff;
			font-size: 30px;
			font-weight: 600;
		}
		li:nth-child(1) {
			border-right: 1px solid #E1E1E1;
		}
		.actt {
			color: #3FB94D!important;
		}
	}
	
	.addxuqu {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		background: #f5f5f5!important;
		flex-direction: column;
		box-sizing: border-box;
		overflow: auto;
		.qikm {
			flex: 1;
			overflow: auto;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
		}
		.minxi {
			flex: 1;
			overflow: auto;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
		}
	}
</style>