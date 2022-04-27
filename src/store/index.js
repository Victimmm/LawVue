// src/store/index.js

import { createStore } from "vuex";

export default createStore({
	state() {

			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i=0;i<vars.length;i++) {
				var pair = vars[i].split("=");
				if(pair[0] == "CourtNum"){
					return {
						plaintiffname: [''],
						defendantname: [''],
						is_counterclaim:"",
						court_number:pair[1]
					}
				}
			}


		return {
			plaintiffname: [''],
			defendantname: [''],
			is_counterclaim:"",
			court_number:""
		}
	},
	mutations: {
		HandlePlaintiffName(state, payload) {
			state.plaintiffname[payload[1]] = payload[0]
		},
		HandleDefendantName(state, payload) {
			state.defendantname[payload[1]] = payload[0]
		},
		setCourtNum(state,payload){
			state.court_number=payload
		},
		setCounterClaim(state,payload){
			state.is_counterclaim=payload
		},
		delete_components(state, payload) {
			switch (payload[0]) {
				case 'plaintiff':
					state.plaintiffname.splice(payload[1], 1);
					break
				case 'defendant':
					state.defendantname.splice(payload[1], 1);
					break
				default:
					//这里是没有找到对应的值处理
					break
			}
		},
		add_components(state, payload) {
			switch (payload[0]) {
				case 'plaintiff':
					state.plaintiffname.push('')
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
		getPlaintiff: (state) => {
			return state.is_counterclaim
		}
	}
});




