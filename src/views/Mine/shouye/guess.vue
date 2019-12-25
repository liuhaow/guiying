<template>
	<div class="guess-i">
		<div class=""></div>
		<ul class="guess-list">
			<li v-for="(item,index) in 10">
				<div class="list-t">
					<img src="http://img3.imgtn.bdimg.com/it/u=2300348621,1925735194&fm=15&gp=0.jpg" />
				</div>
				<p>女童秋装套装2019新款洋气韩版时髦儿童装开学季网红背带裤两件套</p>
				<div class="goumai">
					<h2>&yen;89</h2>
					<h3>
						<img src="../../../assets/gw.jpg" />
					</h3>					
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style lang="stylus" scoped>
	.guess-i {
		margin-top: 60px;
		width: 100%;
		.guess-list {
			justify-content: space-around;
			flex-wrap: wrap;
			display: flex;
			li {
				width: 360px;
				height: 560px;
				background: #fff;
				margin-bottom: 10px;
				border-radius: 10px;
				padding: 0 20px;
				box-sizing: border-box;
				.list-t {
					width: 100%;
					height: 360px;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						width: 220px;
						height: 220px;
					}
				}
				p {
					font-size: 26px;
					line-height: 30px;
					font-weight: 500;
					height: 90px;
					color: rgba(51, 51, 51, 1);
				}
				.goumai {
					display: flex;
					margin-top: 30px;
					justify-content: space-between;
					align-items: flex-end;
					h2 {
						font-size: 34px;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FF6501;

					}
					h3{
						img{
							width: 50px;
							height: 50px;
							border-radius: 50%;
						}
					}
				}
			}
		}
	}
</style>