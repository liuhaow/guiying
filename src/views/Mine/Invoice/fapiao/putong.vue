<template>
	<div class="f-p-x-q">
		<ul class="f-p-c">
			<li @click="chd=1" :class="{'actdd':chd==1}">电子普通发票</li>
			<li @click="chd=2" :class="{'actdd':chd==2}">普通发票</li>
		</ul>
		<div class="putong">
			<puton v-if='chd ==2'></puton>
			<danz v-if='chd ==1'></danz>
		</div>

	</div>
</template>

<script>
	import puton from './puton'
	import danz from './danz'
	
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
			puton,
			danz
		},
		methods: {}
	}
</script>
<style lang="stylus" scoped>
	.f-p-x-q {
		.f-p-c {
			height: 100px;
			background: #fff;
			display: flex;
			justify-content: space-around;
			align-items: center;
			li {
				width: 260px;
				height: 68px;
				line-height: 68px;
				text-align: center;
				border: 2px solid rgba(204, 204, 204, 1);
				font-size: 26px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
			.actdd {
				border: 2px solid rgba(63, 185, 77, 1)!important;
				color: rgba(63, 185, 77, 1)!important;
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
	}
</style>