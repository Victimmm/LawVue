// src/store/index.js

import { createStore } from "vuex";

export default createStore({
  state () {
    return {
    	basicInfo: {
    		filing_time:new Date(),
    		court_time:new Date(),
    		court_place:'',
    		chief_judge:[{name:""}],
    		judge:[{name:""}],
    		juror:[{name:""}],
    		court_clerk:'',
    		court_number:'',
    		court_cause:''
    	},
    	plaintiffImf:[{
    		accuser:'',
    		accuser_short:'',
    		accuser_type:"0",
    		accuser_address:'',
    		accuser_represent:'',
    		accuser_duty:'',
    		accuser_agent:'',
    		accuser_agent_address:''
    	}],
    	defendantImf:[{
    		defendant:'',
    		defendant_short:'',
    		defendant_type:"0",
    		defendant_address:'',
    		defendant_representative:'',
    		defendant_duty:'',
    		defendant_agent:'',
    		defendant_agent_address:''
    	}],
    	courtInves:{
			accuser_claims:[{accuser_name:"",claim_item:"",fact_reason:""}],
			is_counterclaim:"0",
			defendant_claims:[{defendant_name:"",claim_item:"",fact_reason:""}],
			counterclaim_plaintiff:[{name:"",claim_item:"",fact_reason:""}],
			is_todayreply:"0",
			counterclaim_defendant:[{name:"",reply_item:""}]
		}
    }
  },
  mutations: {
    addTodo (state, item) {
      state.todos.unshift(item);
    }
  }
});

