<style lang='scss' scoped>
$background-color-theme1:white;
$background-color-theme2:rgb(50,49,91);
$cbx-color1:white;
$cbx-color2:rgb(69,68,108);
$cbx1-color1:white;
$cbx1-color2:rgb(56,55,97);
$font-color1:rgb(121,121,133);
$font-color2:rgb(187,186,209);
$add-color1:rgb(236,241,245);
$add-color2:rgb(41,40,82);
$menu-color1:rgb(77,78,97);
$menu-color2:rgb(109,108,139);
$list-color1:white;
$list-color2:rgb(50,49,91);
$hover-color1:#f1f1f1;
$hover-color2:rgb(41,40,82);
@mixin bg_theme($color) {
	background-color: $color;
	color: $menu-color1;
	[data-theme="theme1"] & {
		background-color:$background-color-theme1;
		color: $menu-color1;
	}
	[data-theme="theme2"] & {
		background-color:$background-color-theme2;
		color: $menu-color2;
	}
}
@mixin cbx_theme($color,$color1) {
	background-color: $color;
	color: $color1;
	[data-theme="theme1"] & {
		background-color:$cbx-color1;
		color: $font-color1;
	}
	[data-theme="theme2"] & {
		background-color:$cbx-color2;
		color: $font-color2;
	}
}
@mixin cbx1_theme($color,$color1) {
	background-color: $color;
	color: $color1;
	[data-theme="theme1"] & {
		background-color:$cbx1-color1;
		color: $font-color1;
	}
	[data-theme="theme2"] & {
		background-color:$cbx1-color2;
		color: $font-color2;
	}
}
@mixin add_theme($color,$color1) {
	background-color: $color;
	color: $color1;
	[data-theme="theme1"] & {
		background-color:$add-color1;
		color: $font-color1;
	}
	[data-theme="theme2"] & {
		background-color:$add-color2;
		color: $font-color2;
	}
}
@mixin list_theme($color,$color1) {
	background-color: $color;
	color: $color1;
	[data-theme="theme1"] & {
		background-color:$list-color1;
		color: $font-color1;
	}
	[data-theme="theme2"] & {
		background-color:$list-color2;
		color: $font-color2;
	}
}
@mixin hover_theme($color) {
	background-color: $color;
	[data-theme="theme1"] & {
		background-color:$hover-color1;
	}
	[data-theme="theme2"] & {
		background-color:$hover-color2;
	}
}
*{
	box-sizing: border-box;
}
*{
	padding: 0px;
	margin: 0px;
}
.login-page {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 610px;
  width: 350px;
  padding-top: 5px;
  @include bg_theme($background-color-theme1);
  margin: 20px 0px 0px 20px;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.3);
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  z-index: 0;
}
.login-page::-webkit-scrollbar{
	display: none;
}
.a{
	display: inline-block;
	right: 10px;
	font-size: 20px;
	padding: 5px 0px 0px 250px;
	font-weight: 500;
	color:rgb(176,176,201);
	width: 300px;
}
.menu{
	position: relative;
	display: inline-block;
	width: 50px;
	cursor:pointer;
}
.dropdown{
	position: fixed;
	display: inline-block;
	z-index: 2;
}
.dropdown-content {
    position: absolute;
    width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	z-index: 2;
	a {
		@include list_theme($list-color1,$font-color1);
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
		&:hover {
			@include hover_theme($hover-color1);
		}
	}
}
.add{
	margin: 25px 0px 0px 15px;
	width: 90%;
	height: 48px;
	line-height: 48px;
	border: 0px;
	border-radius: 25px;
	@include add_theme($add-color1,$font-color1);
	z-index: 1;
}
.addText{
	outline: none;
	height: 40px;
	margin-left: 10px ;
	@include add_theme($add-color1,$font-color1);
	width: 70%;
	border: 0px;
	font-size: 15px;
	transform: translateY(-27%);
}
.btn{
	display: inline-block;
	width: 40px;
	margin: 7.5px 0px 0px 40px;
	cursor:pointer;
}
.bar{
	width: 100%;
	margin-top: 20px;
	border:1px solid rgb(219,218,219);
}
.td{
	padding: 20px 210px 17px 0px;
	font-size: 10px;
	font-weight: 500;
	color:rgb(176,176,201);
	width: 90%;
}
.cbx{
	@include cbx_theme($cbx-color1,$font-color1);
	width: 90%;
	height: 58px;
	margin: 10px 0px 0px 15px;
	padding-top: 18px;
	border: 0px;
	border-radius: 10px;
	box-shadow: 0.2px 2px 5px 2px rgba(0,0,0,0.06);
	.imgDate{
		display: inline-block;
		float: right;
		margin: 2px 10px 4px 0px;
		padding:0px 0px 0px 5px;
		@include cbx_theme($cbx-color1,$font-color1);
		background-image: url(../../assets/日历.png);
		background-repeat: no-repeat;
		background-size: 20% 95%;
		background-position:10% 0;
		width: 97px;
		height: 22px;
		color: rgb(176,176,201);
		font-size: 13px;
		cursor:pointer;
		border: 0px;
		text-align: center;
		z-index: 6;
	}
}
.cbx2{
	width: 90%;
	height: 58px;
	margin: 10px 0px 0px 15px;
	padding-top: 18px;
	border: 0px;
	border-radius: 10px;
	@include cbx1_theme($cbx1-color1,$font-color1);
	.imgDate{
		display: inline-block;
		float: right;
		margin: 2px 10px 4px 0px;
		padding:0px 0px 0px 5px;
		@include cbx1_theme($cbx1-color1,$font-color1);
		background-image: url(../../assets/日历.png);
		background-repeat: no-repeat;
		background-size: 20% 95%;
		background-position:10% 0;
		width: 97px;
		height: 22px;
		color: rgb(176,176,201);
		font-size: 13px;
		cursor:pointer;
		border: 0px;
		text-align: center;
		z-index: 6;
	}
}
input[type='checkbox']{
	float: left;
	margin: 0px 15px 0px 15px;
	cursor:pointer;
    width: 22px;
    height: 22px;
    -webkit-appearance:none;
	background-color: white;
	border:solid 2px rgb(236,241,245);
    border-radius: 50%;
}
.cbx1 input[type=checkbox]:checked{
   border: 0px;
   background: url(../../assets/QQ图片20210118225220.png)no-repeat center;
}
.complt{
	display: inline-block;
	width: 90%;
	margin: 25px 0px 13px 30px;
	font-size: 10px;
	font-weight: 500;
	color:rgb(176,176,201);
	text-align: left;
}
.calder{
	width: 350px;
	height: 360px;
	position: relative;
}
.updlist{
	position: relative;
	height: 230px;
	text-align: left;
	padding: 50px 0px 0px 20px;
	@include bg_theme($background-color-theme1);
}
.btnx{
	padding:4px 10px;
	color: white;
	border:0px;
	border-radius: 3px;
	cursor:pointer;
	outline: none;
}
.btnx.btn2{
	background: rgb(61,123,176);
}
.btnx.btn1{
	margin-top: 30px;
	background: red;
}
.updtext{
	outline: none;
	width: 70%;
	border: 0px;
	border-bottom: solid 1px rgb(176,176,201);
	font-size: 15px;
	@include bg_theme($background-color-theme1);
}
</style>

<template>
  <div class="login-page">
	<van-popup v-model="upd" position="top" class="updlist">
		<p>修改此记录:</p>
		<input type="text" v-model="updDtail" class="updtext" placeholder="修改内容"/>
		<button class="btnx btn2" @click="$store.commit('Login/update',{detail:updDtail,id:id});upd=false">修改</button>
		<div class="bar"></div>
		<p style="margin-top: 30px; width: 70%; display: inline-block;">删除此记录:</p>
		<button class="btnx btn1" @click="$store.commit('Login/del',id);upd=false">删除</button>
	</van-popup>
	<div class="dropdown" @click="ifMenu=!ifMenu">
		<van-icon name="wap-nav" class="menu" size="30" />
		<div class="dropdown-content" v-if="ifMenu">
			<a href="#" @click="changeTheme">change&nbsp;theme</a>
			<a href="#" @click="ifComp=true;ifToDo=true">all</a>
			<a href="#" @click="ifComp=false;ifToDo=true">only&nbsp;to&nbsp;do</a>
			<a href="#" @click="ifToDo=false;ifComp=true">only&nbsp;completed</a>
			<a href="#" @click="$store.commit('Login/cleanCompleted')">clean&nbsp;completed</a>
		</div>
	</div>
		<p class="a">CHORES</p>
		<div class="add">
			<input type="text" v-model="value" placeholder="Add Item" class="addText"/>
			<van-icon name="add" size="34" class="btn" color="rgb(61,123,176)" @click="addItem"/>
		</div>
		<div class="bar"></div>
		<van-calendar v-model="show" @confirm="onConfirm" color="rgb(61,123,176)" class="calder" position="left"/>
		<div v-if="ifToDo" style="width: 100%;">
		<p class="td">TO&nbsp;DO</p>
		<div @contextmenu.prevent="upd=true;id=lista.id;updDtail=lista.info" v-for="lista in toDo" :key="lista.id" class="cbx">
			<label class="cbx1" :for="lista.id" style="float: left;"><input type="checkbox" :value="lista.id" class="cbx1" v-model="checked" @change="$store.commit('Login/change',lista)" >{{lista.info}}</label>
			<van-cell title="" class="imgDate" :value="formatDate(lista.date)" @click="shows(lista)"/>
		</div>
		</div>
		<div v-if="ifComp" style="width: 100%;">
		<p class="complt">COMPLETED</p>
		<div v-for="lista in completed" :key="lista.id" class="cbx2">
			<label class="cbx1" :for="lista.id" style="float: left;color: rgb(176,176,201); text-decoration: line-through;"><input type="checkbox" :value="lista.id" class="cbx1" v-model="checked" @change="$store.commit('Login/change',lista)" >{{lista.info}}</label>
			<van-cell title="" class="imgDate" :value="formatDate(lista.date)" @click="shows(lista)"/>
		</div>
		</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data(){
		return{
			checked:[],
			ifToDo:true,
			ifComp:true,
			value:'',
			show:false,
			id:'',
			ifMenu:false,
			upd:false,
			updDtail:'',
			theme:true
		}
	},
	methods:{
		addItem(){
			if(!this.value) return;
			this.$store.commit('Login/add',this.value);
			this.value='';
			console.log(this.list[0].date);
		},
		shows(lista){
			this.show=true;
			this.id=lista.id;
		},
		formatDate(date){
			if(date.getMonth()==new Date().getMonth()&&date.getDate()==new Date().getDate()&&date.getFullYear()==new Date().getFullYear())
				return 'Due today';
			else
				return [((date.getMonth()+1)<10?'0'+(date.getMonth()+1):date.getMonth()+1),date.getDate(),date.getFullYear()%100].join('/');
		},
		onConfirm(date) {
			this.show = false;
			console.log(date,this.id)
			var obj ={
				date:date,
				id:this.id
			}
			this.$store.commit('Login/changeDate',obj);
		},
		changeTheme(){
			if(this.theme){
				window.document.documentElement.setAttribute('data-theme', 'theme2');
				console.log(this.theme);
			}else{
				window.document.documentElement.setAttribute('data-theme', 'theme1');
			}
			this.theme=!this.theme;
		}
	},
	created() {
		this.$store.dispatch('Login/getList')
	},
	computed:{
		...mapState('Login',['list']),
		toDo:function(){
			return this.list.filter(function(list){
				return !list.done;
			})
		},
		completed:function(){
			return this.list.filter(function(list){
				return list.done;
			})
		}
	}
}
</script>
