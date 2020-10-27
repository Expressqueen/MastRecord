<template>
	<view class="login">
		<view class="loginhead_bac">
			<image src="../../static/image/login_bac.png" mode=""></image>
		</view>
		<view class="login_body">
			<text class="login_title">乐播百灵</text>
			<view class="login_form">
				<image src="../../static/image/user.png" mode=""></image>
				<input class="uni-input" @input="onusername" confirm-type="search" placeholder="请输入账号" />
			</view>
			<view class="login_form">
				<image src="../../static/image/password.png" mode=""></image>
				<input class="uni-input" @input="onpassword" password="true" confirm-type="search" placeholder="请输入密码" />
			</view>
			<view class="login_btn" @click="login">
				登录
			</view>
			<view class="login_btn" @click="regist" style="margin-top: 30rpx;">
				注册
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: ""
			}
		},
		methods: {
			onusername: function(event) {
				this.username = event.target.value
			},
			onpassword: function(event) {
				this.password = event.target.value
			},
			login() {
				this.$api.Login({
					username: this.username,
					password: this.password
				}).then(res => {
					uni.showToast({
						title: "登录成功",
						icon: 'success'
					})
					setTimeout(function(){
						uni.switchTab({
							url: "../monitor/index"
						})
					},1000)
				})
			}
		}
	}
</script>

<style lang="scss">
	.login {
		.loginhead_bac {
			width: 100%;
			height: 375rpx;
			background: linear-gradient(90deg, #266CEB, #0085FE);

			image {
				width: 100%;
				height: 288rpx;
			}
		}

		.login_body {
			width: calc(100% - 60rpx);
			height: 888rpx;
			background: #FFFFFF;
			border: 1rpx solid #FFFFFF;
			border-radius: 20rpx;
			box-sizing: border-box;
			position: absolute;
			bottom: 100rpx;
			left: 30rpx;
			padding: 30rpx;

			// text-align: center;
			.login_title {
				color: #266CEB;
				font-size: 44rpx;
				font-weight: 500;
				display: block;
				text-align: center;
				margin: 20rpx 0;
			}

			.login_form {
				margin-top: 95rpx;
				display: flex;
				border-bottom: 1px solid #E7F0F9;
				padding: 28rpx 10rpx;
				font-size: 32rpx;

				image {
					width: 34rpx;
					height: 36rpx;
					margin-right: 20rpx;
				}

				input {
					width: calc(100% - 74rpx);
				}

				.input-placeholder {
					color: #90A4B8;
				}
			}

			.login_btn {
				width: 100%;
				height: 88rpx;
				background: linear-gradient(90deg, #266CEB, #0581FB);
				border-radius: 10rpx;
				color: #FFFFFF;
				font-size: 34rpx;
				font-weight: 500;
				text-align: center;
				line-height: 88rpx;
				margin-top: 185rpx;
			}
		}
	}
</style>
