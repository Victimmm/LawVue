// src/store/index.js

import { createStore } from "vuex";

export default createStore({
	state() {
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i=0;i<vars.length;i++) {
				var pair = vars[i].split("=");
				if(pair[0] == "CourtNum"){

					var plaintiffname = ['']
					var defendantname = ['']
					var wholeItem = JSON.parse(localStorage.getItem(pair[1]))
					if (wholeItem != null )
					{
						if ("PlaintiffItems" in wholeItem && wholeItem.PlaintiffItems.length > 0) {
							for (var j = 0; j < wholeItem.PlaintiffItems.length; j++) {
								plaintiffname[j] = wholeItem.PlaintiffItems[j].accuser
							}
						}

						if ("DefendantItems" in wholeItem && wholeItem.DefendantItems.length > 0) {
							for ( j = 0; j < wholeItem.DefendantItems.length; j++) {
								defendantname[j] = wholeItem.DefendantItems[j].defendant
							}
						}

					}
					return {
						plaintiffname: plaintiffname,
						defendantname: defendantname,
						is_todayreply:"",
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
		handlePlaintiffName(state, payload) {
			state.plaintiffname[payload[1]] = payload[0]
		},
		handleDefendantName(state, payload) {
			state.defendantname[payload[1]] = payload[0]
		},
		setCourtNum(state,payload){
			state.court_number=payload
		},
		setIsTodayReply(state,payload){
			// let data=Object.assign({},payload)
			state.is_todayreply= payload
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




