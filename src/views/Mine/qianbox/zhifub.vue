<template>
	<div >
		<!--{{payGateWay}}-->
		<!--<a href="https://m.alipay.com/Gk8NF23?total_amount=9.00&timestamp=2016-08-11+19%3A36%3A01&sign=ErCRRVmW%2FvXu1XO76k%2BUr4gYKC5%2FWgZGSo%2FR7nbL%2FPU7yFXtQJ2CjYPcqumxcYYB5x%2FzaRJXWBLN3jJXr01Icph8AZGEmwNuzvfezRoWny6%2Fm0iVQf7hfgn66z2yRfXtRSqtSTQWhjMa5YXE7MBMKFruIclYVTlfWDN30Cw7k%2Fk%3D&trade_no=2016081121001004630200142207&sign_type=RSA2&charset=UTF-8&seller_id=2088111111116894&method=alipay.trade.wap.pay.return&app_id=2016040501024706&out_trade_no=70501111111S001111119&version=1.0">tiaoz</a>-->
	</div>

</template>
<script>
	import { Notify } from 'vant';

	export default {

		data() {
			return {
				payGateWay: ''
			}
		},
		mounted() {
			let form = this.$route.query.htmlData

			Notify({
				type: 'success',
				message: 'kaishi'
			});
			const div = document.createElement('div') // 创建div
                 div.innerHTML = form // 将返回的form 放入div
                 document.body.appendChild(div)
                 document.forms[0].submit()

		}
	}
</script>

<style>

</style>