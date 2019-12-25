<template>
	<div class="addxuqu">
		<headt message='关于贵迎'></headt>
		<div class="a-d-d">
			<div class="a-b-t">
				<img src="../../../../assets/gw.jpg" />

				<h3>贵迎商贸是网易旗下以跨境业务为主的综合型电商，于2015年1月9日公测，销售品类涵盖母婴、美容彩妆、家居生活、营养保健、环球美食、服饰箱包、数码家电等。网易考拉以100%正品，天天低价，30天无忧退货，快捷配送，提供消费者海量海外商品购买渠道 ，希望帮助用户“用更少的钱 过更好的生活”，助推消费和生活的双重升级。</h3>
				<h3> 网易考拉主打自营直采的理念，在美国、德国、意大利、日本、韩国、澳大利亚、中国香港、中国台湾设有分公司或办事处，深入产品原产地直采高品质、适合中国市场的的商品，从源头杜绝假货，保障商品品质的同时省去诸多中间环节，直接从原产地运抵国内，在海关和国检的监控下，储存在保税区仓库。除此之外，网易考拉还与海关联合开发二维码溯源系统，严格把控产品质量。 作为“杭州跨境电商综试区首批试点企业”，网易考拉在经营模式、营销方式、诚信自律等方面取得了不少建树，获得由中国质量认证中心认证的“B2C商品类电子商务交易服务认证证书”，认证级别四颗星，是国内首家获此认证的跨境电商，也是目前国内首家获得最高级别认证的跨境电商平台之一。 [4] 作为一家媒体驱动型电商，网易考拉是网易集团投入大量优质资源打造的战略级产品 [2] ，良好解决了商家和消费者之间信息不对等的现状，并凭借自营模式、定价优势、全球布点、仓储、海外物流、资金和保姆式服务七大优势。 [2] 2019年9月6日，阿里巴巴集团宣布20亿美元全资收购网易考拉，领投网易云音乐7亿美元融资。</h3>
				<p>联系我们：400-885-8888</p>
				<h4>Copyright © 2004 - 2019 贵迎商贸.com 版权所有</h4>
			</div>

		</div>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	export default {
		data() {
			return {}
		},
		components: {
			headt
		},
		methods: {
			nextData() {}
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


		overflow: auto;
		.a-d-d {
			flex: 1;
			overflow: auto;
			background: #fff;
			.a-b-t {
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				img {
					width: 150px;
					height: 164px;
				}
				h3 {
					font-size: 28px;
					width: 658px;
					text-indent: 38px;
					letter-spacing: 2px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					line-height: 46px;
					margin-bottom: 20px;
				}
				p {
					font-size: 26px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					padding-top: 90px;
					padding-bottom: 30px;
				}
				h4 {
					font-size: 26px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					padding-bottom: 50px;
				}
			}
		}
	}
</style>