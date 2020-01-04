<template>
	<div class="addxuqu">
		<headt message='充值明细'></headt>
		<div class="minxi">
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
	import { RehuankInfoLog } from '@/api/mine'
	export default {
		data() {
			return {
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
			console.log(yue)
			let data = {
				token: this.TokenId,
				month: yue
			}
			RehuankInfoLog(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					this.mlist = res.data.data.list,
						this.totle = res.data.data.sum
				}
			})
		},
		methods: {
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
	.addxuqu {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		overflow: auto;
		.minxi {
			flex: 1;
			overflow: auto;
			padding: 30px 20px 0;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			.chozhi {
				flex: 1;
				overflow: auto;
				li {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 120px;
					border-bottom: 2px solid #E1E1E1;
					div {
						height: 90px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						p {
							font-size: 30px;
							color: #000;
						}
						h2 {
							font-size: 24px;
							color: #999;
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
				height: 120px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				select {
					width: 200px;
					height: 68px;
					background: #fff;
					font-size: 32px;
					padding-left: 30px;
					box-sizing: border-box;
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
		}
	}
</style>