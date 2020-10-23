<template>
	<view class="monitor-page">
		<view class="skitry-top">
			<view class="addheader">
				<view class="addheaderbac"></view>
				<view class="device-tip">
					<view class="devicenum">
						<text>{{deviceAll}}</text>
						设备总数
					</view>
					<view class="addline"></view>
					<view class="devicenum">
						<text>{{normalHost}}</text>
						在线设备
					</view>
					<view class="addline"></view>
					<view class="devicenum">
						<text>{{abnormalHost}}</text>
						离线设备
					</view>
				</view>
			</view>
			<view style="padding: 0 30rpx;">
				<!-- 搜索 -->
				<view class="search-store">
					<input type="text" placeholder="输入门店名称进行搜索" />
					<view class="square"><icon type="search" size="16" color="#ffffff" /></view>
				</view>
				<!-- 下拉选择集团 -->
				<view class="check_cyList">
					<view class="clearfix">
						<view class="selectcheck" @click="dropcyList">
							<image src="../../static/image/address.png" mode=""></image>
							{{cyList[slectcyIndex].title}}
							<uni-icons :type="dropCylistShow?'arrowup':'arrowdown'" color="#333"></uni-icons>
						</view>
						<view class="square rightcheck" @click="dropcyList">
							<image src="../../static/image/scaner.png" mode=""></image>
						</view>
					</view>
					<uni-list class="checklist" v-if="dropCylistShow">
						<uni-list-item v-for="(item,index) in cyList" :key="index" :title="item.title" clickable  @click="selectCy(index)">
							<template slot="footer" v-if="index == slectcyIndex">
								<uni-icons type="checkmarkempty" color="#266CEB"></uni-icons>
							</template>
						</uni-list-item>
					</uni-list>
				</view>
				<!-- 门店状态分类 -->
				<view class="shop_type">
					<view :class="[{select_type:selectTab=='all'},'reqa']" type="all">全部</view>
					<view class="addceline"></view>
					<view :class="[{select_type:selectTab=='online'},'reqa']" type="online">在线</view>
					<view class="addceline"></view>
					<view :class="[{select_type:selectTab=='offline'},'reqa']" type="offline">离线</view>
				</view>
			</view>
		</view>
		<!-- 
		<view class="page-body">
			
		</view> -->
		<!-- 门店列表 -->
		<view class="shop_list">
			<view class="shop_info" v-for="(item,index) in shopList" :key="index">
				<view class="shop_headerinfo clearfix">
					<view class="left_intro u-left">
						<view class="square u-left">
							<image src="../../static/image/shop_store.png" mode=""></image>
						</view>
						<view class="u-left shop-name">
							<text class="shopname">{{item.name}}</text>
							<view class="">
								<text>{{item.address}}</text>
								<text>{{item.devicetype}}</text>
							</view>
						</view>
					</view>
					<view class="u-right">
						门店信息<uni-icons type="arrowright" color="#999"></uni-icons>
					</view>
				</view>
				<view class="shop_playtype">
					<view class="shop_votio">
						<image :src="item.type=='online'?onLineicon.voivenum:offLineicon.voivenum" mode=""></image>
						{{item.voice}}
					</view>
					<view class="shop_linetype">
						<image :src="item.type=='online'?onLineicon.onlinetype:offLineicon.onlinetype" mode=""></image>
						{{item.type=='online'?'在线':'离线'}}
					</view>
					<view class="shop_swave">
						<image :src="item.type=='online'?onLineicon.swave:offLineicon.swave" mode=""></image>
					</view>
				</view>
				<view class="shop_playcontent">
					<image :src="item.type=='online'?onLineicon.audio:offLineicon.audio" mode=""></image>
					<text>{{item.type=='online'?item.playaudio.text:'设备离线，暂无播放内容'}}</text>
				</view>
			</view>
		</view>
		<view class="mask" v-if="dropCylistShow" @click="dropCylistShow=false"></view>
	</view>
	
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				deviceAll: "238",
				normalHost: '138',
				abnormalHost: '100',
				searchStore: '',
				addresIcon: '../../static/image/address.png',
				dropCylistShow:false,
				slectcyIndex:0,  //选中下拉集团下标
				cyList:[
					{
						"title":"中石化加油站"
					},
					{
						"title":"集团1"
					},
					{
						"title":"集团2"
					},
					{
						"title":"集团3"
					},
				],
				selectTab:'all',  //选中门店列表状态类型
				onLineicon:{
					voivenum:'../../static/image/onmusic.png',
					onlinetype:'../../static/image/online.png',
					swave:'../../static/image/onvoice.png',
					audio:'../../static/image/play.png'
				},
				offLineicon:{
					voivenum:'../../static/image/offmusic.png',
					onlinetype:'../../static/image/offline.png',
					swave:'../../static/image/offvoice.png',
					audio:'../../static/image/play_dark.png'
				},
				shopList:[
					{
						type:"online",
						devicetype:"设备版",
						name:"门店名称",
						address:"朝阳区",
						voice:58,
						playaudio:{
							url:"http://lbxrmrst.oss-accelerate.aliyuncs.com/audio/Audition/1153160102980355805.mp3",
							text:"舌尖上的美味，心间的领鲜，特价草图，分享人生乐，每斤仅售22元，欢迎选购~"
						}
					},
					{
						type:"offline",
						name:"门店名称",
						devicetype:"网页版",
						address:"朝阳区",
						voice:58,
						playaudio:{
							url:"http://lbxrmrst.oss-accelerate.aliyuncs.com/audio/Audition/1153160102980355805.mp3",
							text:"舌尖上的美味，心间的领鲜，特价草图，分享人生乐，每斤仅售22元，欢迎选购~"
						}
					}
				]
			}
		},
		methods:{
			dropcyList(){
				this.$data.dropCylistShow=!this.$data.dropCylistShow
			},
			selectCy(index){
				this.$data.slectcyIndex=index;
				this.$data.dropCylistShow=false;
			},
			moveHandle(){}
			
		},
		onLoad() {
			uni.request({
				url:"/api/monitor/count",
				success: (res) => {
					console.log("请求成功")
					console.log(res)
				},
				fail: (err) => {
					console.log("请求失败")
					console.log(err)
				}
			})
		},
		onShow() {

		}
	}
</script>

<style lang="scss">
	.monitor-page{
		position: relative;
		.skitry-top{
			position: sticky;
			top: calc(44px + env(safe-area-inset-top));
			background: #fff;
			z-index: 3;
		}
	}
	.addheader {
		width: 100%;
		height: 186rpx;
		position: relative;
	}

	.addheaderbac {
		width: 100%;
		height: 122rpx;
		background: #266CEB;
	}

	.device-tip {
		width: calc(100% - 60rpx);
		height: 140rpx;
		background: #FFFFFF;
		border: 1rpx solid #FFFFFF;
		box-shadow: 0px 0px 35rpx 0px rgba(72, 108, 224, 0.13);
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 30rpx;
	}

	.devicenum {
		flex: 1;
		text-align: center;
		color: #999999;
		font-size: 24rpx;
	}

	.devicenum text {
		display: block;
		color: #266CEB;
		font-size: 40rpx;
		font-weight: 600;
		margin-bottom: 10rpx;
	}

	.device-tip .addline {
		width: 1rpx;
		height: 44rpx;
		background: #000000;
		opacity: 0.1;
	}

	.page-body {
		padding: 0 30rpx;
	}

	.search-store {
		margin: 41rpx 0;
		clear: both;
		overflow: hidden;
		input {
			width: 602rpx;
			height: 68rpx;
			background: #F0F5F9;
			box-shadow: 0px 13rpx 13rpx 0rpx rgba(240, 245, 249, 0.23);
			border-radius: 10rpx;
			padding: 0 20rpx;
			font-size: 28rpx;
			color: #8FA4B7;
			box-sizing: border-box;
			float: left;
		}
		view {
			display: flex;
			float: left;
			background: #33CE55;
			margin-left: 20rpx;
			uni-icon {
				font-size: inherit;
			}
		}
		.uni-collapse-cell__title-img{
			width: 28rpx;
			height: 34rpx;
		}
	}
	.check_cyList{
		position: relative;
		.selectcheck{
			float: left;
			font-size: 36rpx;
			color: #333333;
			font-weight: 500;
			image{
				width:28rpx;
				height: 34rpx;
				margin:5rpx 10rpx 0 0;
			}
			.uni-icons{
				margin-left: 10rpx;
			}
		}
		.rightcheck{
			background:#F0F5F9;
			float: right;
			image{
				width: 38rpx;
				height: 38rpx;
			}
			
		}
		/deep/ .uni-collapse-cell__title{
			padding: 12px 0;
			.uni-collapse-cell__title-img{
				width:28rpx;
				height: 34rpx;
				margin-right: 10rpx;
			}
		} 
		.checklist{
			margin-top: 20rpx;
			position: absolute;
			width: calc(100% + 60rpx);
			z-index: 2;
			height: 336rpx;
			overflow-y: auto;
			margin-left:-30rpx
		}
	}
	.shop_type{
		width: 100%;
		
		background: #F0F5F9;
		border-radius: 10rpx;
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		view:first-child{
			border-top-left-radius: 10rpx;
			border-bottom-left-radius: 10rpx;
		}
		view:last-child{
			border-top-right-radius: 10rpx;
			border-bottom-right-radius: 10rpx;
		}
		.reqa{
			flex: 1;
			height: 78rpx;
			font-size: 32rpx;
			color: #8FA4B7;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.addceline{
			width: 2rpx;
			height: 78rpx;
			background: #FFFFFF;
		}
		.select_type.reqa{
			background: #266CEB;
			color: #FFFFFF;
		}
	}
	.mask{
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.5;
		position: absolute;
		top: 0;
		
	}
	.shop_list{
		// margin: 30rpx 0;
		padding: 0 30rpx;
		margin-top: 30rpx;
		.shop_info{
			width: 100%;
			height: 320rpx;
			background: #FFFFFF;
			box-shadow: 0px 0px 13rpx 0px rgba(29, 108, 251, 0.23);
			border-radius: 20rpx;
			margin-bottom:30rpx;
			padding: 30rpx;
			color: #999;
			font-size: 24rpx;
			box-sizing: border-box;
			.shop_headerinfo{
				.left_intro{
					width: calc(100% - 150rpx);
					image{
						width: 52rpx;
						height: 52rpx;
					}
					.shop-name{
						margin-left: 10rpx;
						width: calc(100% - 80rpx);
						.shopname{
							display: block;
							color: #333;
							font-size: 32rpx;
							font-weight: 500;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
						view{
							text:nth-child(2){
								color: #266CEB;
								margin-left: 100rpx;
							}
						}
					}
				}
				.u-right{
					color:#999999;
					font-size: 24rpx;
					width: 130rpx;
					margin-top: 15rpx;
					/deep/ .uni-icons{
						font-size: 14rpx!important;
						margin-left: 10rpx;
					}
				}
			}
			.shop_playtype{
				display: flex;
				margin: 35rpx 0 39rpx 0;
				view{
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					image{
						width: 44rpx;
						height: 44rpx;
						margin-right: 10rpx;
					}
				}
				.shop_linetype{
					justify-content: center;
					image{
						width: 30rpx;
						height: 30rpx;
					}
				}
				.shop_swave{
					justify-content: flex-end;
					image{
						width: 122rpx;
						height: 50rpx;
					}
				}
			}
			.shop_playcontent{
				padding: 0 10rpx;
				height: 68rpx;
				background: #F6F9FB;
				border-radius: 10rpx;
				display: flex;
				align-items: center;
				image{
					width: 44rpx;
					height: 44rpx;
					margin-right: 10rpx;
				}
				text{
					display: inline-block;
					width: calc(100% - 55rpx);
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>
