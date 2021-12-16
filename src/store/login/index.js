import axios from 'axios'

export default {
  state: {
    list:[],
	nowId:0
  },
  mutations: {
    initList(state,list){
		state.list = list
	},
	change(state,item){
		for(let i = 0; i < state.list.length; i++) {
			if(state.list[i].id ==item.id) {
				state.list[i].done=!state.list[i].done
			}
		}
	},
	changeDate(state,obj){
		console.log(obj.id);
		for(let i = 0; i < state.list.length; i++) {
			console.log(i);
			if(state.list[i].id ==obj.id) {
				
				state.list[i].date=obj.date;
				console.log(state.list[i]);
				break;
			}
		}
	},
	add(state,value){
		var item={
			"id":state.nowId,
			"info":value,
			"done":false,
			"date":new Date(),
		}
		state.list.push(item)
		state.nowId++
	},
	cleanCompleted(state){
		var arr=[];
		for(let i = 0; i < state.list.length; i++) {
			if(!state.list[i].done) {
				arr.push(state.list[i])
			}
		}
		state.list=arr;
	},
	update(state,obj){
		for(let i = 0; i < state.list.length; i++) {
			if(state.list[i].id==obj.id) {
				state.list[i].info=obj.detail;
			}
		}
	},
	del(state,id){
		for(let i = 0; i < state.list.length; i++) {
			if(state.list[i].id==id) {
				state.list.splice(i,1);
			}
		}
	}
  },
  actions: {
	getList(context){
		axios.get('/list.json').then((result)=>{
			context.commit('initList',result.data.list)
		})
	}
  },
  getter:{
	
  },
  namespaced:true
}
