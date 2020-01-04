<template>
	<div class="tuan">
		<div class="xmiao">
			<p>今日团购</p>
			<h2 @click="moreData">更多</h2>
		</div>
		<div class="tlist">
			<ul class="tlist-u">
				<li v-for='(item,index) in tlist' >
					<img :src="item.goods_cover" class="mimgs" alt="" @click="mshaData(item.id)" />
					<p class="tutile">{{item.goods_name}}</p>
					<div class="tu-f">
						<p>
							<span class="tgj">团购价</span>
							<span>&yen;{{item.show_price}}</span>
						</p>
						<h2 @click="addhouwuAdd(item.goods_id)">
							<img src="../../../static/img/jgwc.png"/>
						</h2>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { hometugou } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import {addshopcar} from '@/api/mine'
	import { Dialog } from 'vant';
	
	export default {
		data() {
			return {
				tlist: []
			}

		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			let data ={
				page:1
			}
			hometugou(data).then(res =>{
				console.log(res)
				if(res.data.code == 200){
					this.tlist = res.data.data.splice(0,3)
				}
			})
		},
		methods:{
			moreData() {
				this.$router.push('/group')

			},
			mshaData(idt){
				this.$router.push('/pintu/pintuan/'+idt)
				
			},
			addhouwuAdd(idt){
				if(this.TokenId == '') {

					Dialog.confirm({
						title: '提示',
						message: '需要登录'
					}).then(() => {
						this.$router.push('/need/login')
					}).catch(() => {});
					return
				}
				let data={
					token:this.TokenId,
					cid:idt,
					num:1,
					type:1,
					classify:2
					
				}
				addshopcar(data).then(res=>{
					if(res.data.code == 200){
						Notify({ type: 'success', message: res.data.msg });
					}else{
						Notify({ type: 'warning', message: res.data.msg });
					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.tuan {
		height: 516px;
		width: 100%;
		background: #fff;
		padding: 0 20px;
		box-sizing: border-box;
		.tlist {
			.tlist-u {
				width: 100%;
				display: flex;
				justify-content: space-between;
				li {
					width: 222px;
					.mimgs {
						width: 222px;
						height: 222px;
					}
					.tutile {
						font-size: 24px;
						font-family: PingFang SC;
						font-weight: 500;

						color: rgba(51, 51, 51, 1);
						line-height: 30px;
						margin: 27px 0 18px;
					}
					.tu-f {
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						p {
							display: flex;
							flex-direction: column;
							width: 140px;
							.tgj {
								width: 140px;
								height: 20px;
								display: block;
								margin-bottom: 6px;
								font-size: 20px!important;
								font-family: PingFang SC;
								font-weight: 500;
								color: rgba(255, 101, 1, 1);
							}
							span {
								font-size: 38px;
								font-family: PingFang SC;
								font-weight: 500;
								color: rgba(255, 101, 1, 1);
							}
						}
						h2 {
							img{
								height: 48px;
								width: 48px;
								border-radius: 50%;
							}
						}
					}
				}
			}
		}
		.xmiao {
			height: 80px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			p {
				font-size: 36px;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			h2 {
				font-size: 30px;
				font-weight: 500;
				color: rgba(63, 185, 77, 1);
				height: 100%;
				display: flex;
				align-items: center;
				padding: 0 20px;
			}
		}
	}
</style>