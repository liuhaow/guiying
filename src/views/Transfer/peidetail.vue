<template>
	<div class="peis">
		<div class="p-p-t">
			<img src="../../../static/img/fh1.png" @click="back" alt="" />
		</div>
		<h2 class="p-s-z">配送中></h2>
		<div class="p-s-t">
			<div class="p-x-q-s">
				<h2>下单时间</h2>
				<h3>2019-12-03  09 : 53</h3>
			</div>
			<div class="p-x-q-s">
				<h2>取货地址</h2>
				<h3>
					<span>
                                           浙江省 嘉兴市 海智中心3幢 409室
				     </span>
                    <span>
                    	姜佳良  13216115877
                    </span>
				</h3>
			</div>
			<div class="p-x-q-s">
				<h2>收货地址</h2>
				<h3>
					<span>
                                           浙江省 嘉兴市 海智中心3幢 409室
				     </span>
                    <span>
                    	姜佳良  13216115877
                    </span>
				</h3>
			</div>
		</div>
		<h5 class="q-d-xiang">商品清单</h5>
		<ul class="q-d-l">
			<li v-for='item in 6'>
				<img src="http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg" alt="" />
				<div>
					<p> 沈厅 周庄特产1000g猪蹄酱熟食卤味美食</p>
					<p><span>4</span>件</p>
				</div>
			</li>
		</ul>
		<div class="p-s-d-x">
			<h5>
				<span>订单编号</span> 
				<span>420621199005013368</span>
			</h5>
			<h5>
				<span>订单编号</span> 
				<span>2019-12-03  09:58</span>
			</h5>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped lang="stylus">
	.peis {
		padding: 0 20px 70px;
		box-sizing: border-box;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		overflow: auto;
		.p-p-t {
			padding-top: 40px;
			img {
				width: 60px;
				height: 60px;
			}
		}
		.p-s-d-x {
			height: 180px;
			margin-top: 30px;
			background: rgba(255, 255, 255, 1);
			border-radius: 8px 8px 0px 0px;
			h5 {
				height: 90px;
				display: flex;
				align-items: center;
				padding: 0 20px;
				box-sizing: border-box;
				justify-content: space-between;
				span {
					font-size: 28px;
					font-weight: 500;
				}
				span:nth-child(1) {
					color: rgba(153, 153, 153, 1);
				}
				span:nth-child(2) {
					color: #333333;
				}
			}
		}
		.p-s-z {
			font-size: 46px;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			margin: 60px 0;
		}
		.q-d-xiang {
			height: 80px;
			line-height: 80px;
			padding-left: 20px;
			box-sizing: border-box;
			border-top: 2px solid #E1E1E1;
			font-size: 30px;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}
		.q-d-l {
			li {
				display: flex;
				align-items: center;
				height: 200px;
				padding: 0 30px;
				box-sizing: border-box;
				background: #fff;
				border-bottom: 2px solid #E1E1E1;
				img {
					height: 152px;
					width: 152px;
					margin-right: 20px;
				}
				div {
					display: flex;
					height: 70%;
					flex-direction: column;
					justify-content: space-between;
					p {
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						line-height: 38px;
					}
				}
			}
		}
		.p-s-t {
			display: flex;
			background: #fff;
			flex-direction: column;
			padding: 0 20px;
			box-sizing: border-box;
			border-radius: 8px;
			.p-x-q-s {
				display: flex;
				justify-content: space-between;
				padding: 30px 0;
				h2 {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
				h3 {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					text-align: right;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					span {
						margin-bottom: 5px;
					}
				}
			}
		}
	}
</style>