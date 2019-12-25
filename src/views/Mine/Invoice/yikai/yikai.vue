<template>
	<div class="shenpt">
		<div class="" v-if='chak==2'>
			<ul class='s-p-t'>
				<li>发票抬头</li>
				<li>开票状态</li>
			</ul>
			<ul class="s-p-l">
				<li v-for='(item,index) in 6' :key='index'>
					<div>
						<p>杭州帕菲克网络有限公司</p>
						<h2>已开票</h2>
					</div>

				</li>
			</ul>
		</div>
		<div class="s-p-l-x" v-if='chak==1'>
			<div class="p-t-f">
				<div>
					<h2>发票类型</h2>
					<h3>普通发票</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>发票抬头</h2>
					<h3>杭州帕菲克网络有限公司</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>纳税人识别号</h2>
					<h3>4206299550023</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>注册地址</h2>
					<h3>浙江省杭州市余杭区仓前街道</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>注册电话</h2>
					<h3>dwde</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>开户银行</h2>
					<h3>中国银行</h3>
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>银行账号</h2>
					<h3>420621199005013354</h3>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				chak: 1
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