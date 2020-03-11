<template>
	<div class="add-d-z">
		<div class="mor-t">
			<img @click="back" src="../../../../static/img/fanhui.png" alt="" /> 添加收货地址
		</div>
		<div class="ad-l-s-t">
			<div class="d-t-l">
				<span>收件人：</span><input v-model="nickname" type="text" placeholder="请输入收件人名称" />
			</div>
			<div class="d-t-l">
				<span>手机号：</span><input type="number" v-model="mobile" placeholder="请输入手机号码" />
			</div class="d-t-l">
			<div class="d-t-d">
				<span>所在地：{{carmodel}}</span>
				<h2 @click="showPopup"> 
						<i slot="icon" class="icon iconfont " >&#xe644;</i>
				</h2>

			</div>
			<div class="d-t-l">
				<span>详细地址：</span><input type="text" v-model="addr" placeholder="门牌号、小区、楼栋号、单元室等" />
			</div>
			<div class="btndate">
				<button @click="tianjiaData">确定</button>
			</div>
		</div>
		<van-popup v-model="show" position="bottom">
			<van-area :area-list="areaList" :columns-num="3" ref="myArea" title="标题" @change="onChange" @confirm="onConfirm" @cancel="onCancel" />
		</van-popup>
	</div>
</template>

<script>
	//		import threeLevelAddress from '../../../components/provcityarea.json'

	import areaList from './area.js'
	import { mapGetters, mapActions } from 'vuex'
	import { TianAddrlist } from '@/api/mine'

	export default {
		data() {
			return {
				areaList,
				show: false,
				carmodel: '',
				nickname: '',
				mobile: '',
				addr: ''
			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			tianjiaData() {
				var that = this
				let data = {
					nickname: that.nickname,
					mobile: that.mobile,
					area: that.carmodel,
					addr: that.addr,
					token: that.TokenId
				}
				TianAddrlist(data).then(res => {
					if(res.data.code == 200) {
						this.$router.go(-1)
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});

					}
				})

			},
			showPopup() {
				this.show = true;

			},

			onChange(picker, index, value) {
				let val = picker.getValues();
				console.log(val) //查看打印
				let areaName = ''
				for(var i = 0; i < val.length; i++) {
					areaName = areaName + (i == 0 ? '' : '-') + val[i].name
				}
				this.carmodel = areaName
			},
			//确定选择城市
			onConfirm(val) {
				let adre = val[0].name + "-" + val[1].name + "-" + val[2].name;
				this.carmodel = adre

				this.show = false //关闭弹框
			},
			//取消选中城市
			onCancel() {
				this.show = false;
				this.carmodel = ''
				this.$refs.myArea.reset() // 重置城市列表
			}

		}
	}
</script>

<style lang="stylus" scoped>
	.add-d-z {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
		background: #fff;
		.ad-l-s-t {
			padding: 0 35px;
			box-sizing: border-box;
			.btndate {
				margin-top: 140px;
				button {
					width: 680px;
					height: 80px;
					background: rgba(63, 185, 77, 1);
					border-radius: 40px;
					font-size: 36px;
					margin: 0 auto;
					color: #fff;
					border: 0!important;
				}
			}
			.d-t-d {
				height: 100px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 2px solid #F1F1F1;
				span {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
				}
			}
			.d-t-l {
				height: 100px;
				display: flex;
				align-items: center;
				border-bottom: 2px solid #F1F1F1;
				span {
					font-size: 28px;
					display: block;
					width: 140px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
				}
				input {
					width: 60%;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(210, 207, 207, 1)
				}
			}
		}
		.popbtn {
			display: flex;
			justify-content: space-between;
			button {
				margin: 10px;
			}
		}
		.mint-popup-bottom {
			width: 100%!important;
			z-index: 5555;
		}
		.mor-t {
			height: 88px;
			position: relative;
			line-height: 88px;
			text-align: center;
			background: #fff;
			font-size: 36px;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			margin-bottom: 2px;
			img {
				position: absolute;
				height: 40px;
				width: 40px;
				z-index: 3;
				left: 20px;
				padding-left: 20px;
				top: 20px;
			}
		}
	}
</style>