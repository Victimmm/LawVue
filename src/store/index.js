// src/store/index.js

import { createStore } from "vuex";

export default createStore({
  state () {
    return {
    	plaintiffname:['廖威明'],
    	plaintifflength:1,
    	defendantname:[]    	
    }
  },
  mutations: {
    HandlePlaintiffName(state, payload){
    	state.plaintiffname[payload[1]]=payload[0]
    },
    delete_components(state, payload){
    	switch(payload[0]){
    		case 'plaintiff':
    			console.log(payload[1])
    			state.plaintiffname.splice(payload[1], 1);
    			break
    		case 'defendant':
    			break
    		default:
          //这里是没有找到对应的值处理
          break
    	}
    },
    add_components(state, payload){
    	switch(payload[0]){
    		case 'plaintiff':
    			state.plaintiffname.push('')
    			state.plaintifflength ++
    			break
    		case 'defendant':
    			state.defendantname.push('')
    			break
    		default:
          //这里是没有找到对应的值处理
          break
    	}
    }
  },
  getters: {
	  // ...
	  getPlaintiff (state) {
	  	return state.plaintifflength
	  }
	}
});




