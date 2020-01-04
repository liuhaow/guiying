<template>
	<div class="fapiao">
		<div class="mor-t">
			<img @click="back" src="../../../../static/img/fanhui.png" alt="" /> 发票信息
		</div>
		<div class="fa-p-i">
			<ul class="issus-list">
				<li class='issueli' v-for='(item,index) in list' @click="changestyle(index)" :class="{'actt':select===index}">{{item.name}}</li>
			</ul>
			<div class="f-p-gong" v-if="select==0">
				<shenp></shenp>
			</div>
			<div class="f-p-gong" v-if="select==1">
				<yikai></yikai>
			</div>
			<div class="f-p-gong" v-if="select==2">
				<putong></putong>
			</div>
		</div>

	</div>
</template>

<script>
	import putong from './fapiao/putong'
	import shenp from './shenp/shenp'
	import yikai from './yikai/yikai'

	export default {
		data() {
			return {
				select: 2,
				chd: 2,
				list: [{
						name: '已申请发票'
					},
					{
						name: '已开发票'
					},
					{
						name: '发票开票信息 '
					}
				]
			}
		},
		components: {
			putong,
			shenp,
			yikai
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			changestyle(idt) {
				this.select = idt
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.fapiao {
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
		.fa-p-i {
			flex: 1;
			overflow: auto;
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
				top: 28px;
			}
		}
		.issus-list {
			height: 80px;
			display: flex;
			justify-content: space-between;
			background: #fff;
			margin: 20px 0 25px;
			li {
				width: 33.3%;
				height: 80px;
				line-height: 80px;
				text-align: center;
				font-size: 26px;
				font-family: PingFang SC;
				position: relative;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
			.actt {
				color: #3FB94D!important;
			}
			.actt:after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 43%;
				width: 35px;
				height: 3px;
				background: rgba(63, 185, 77, 1);
				border-radius: 2px;
			}
		}
	}
</style>