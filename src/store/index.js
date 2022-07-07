// src/store/index.js

import {createStore} from "vuex";

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default createStore({
    state() {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == "CourtNum") {
                let plaintiff_item = [{accuser:"",accuser_short: "",tag:guid()}]
                let defendant_item = [{defendant:"",defendant_short: "",tag:guid()}]
                let third_party_item = [{third_party:"",third_party_short: "",tag:guid()}]
                let chief_judge_name = ['']
                let juror_name = ['']
                let judge_name = ['']
                let people_juror=['']
                let court_clerk = ""
                let counterclaim_defendant_today_is_reply = "1"
                let is_counterclaim = "2"
                let wholeItem = JSON.parse(localStorage.getItem(decodeURI(pair[1])))
                if (wholeItem != null) {
                    if ("PlaintiffItems" in wholeItem && wholeItem.PlaintiffItems.length > 0) {
                        for (var j = 0; j < wholeItem.PlaintiffItems.length; j++) {
                            let plaintiff={accuser:"",accuser_short: "",tag:guid()}
                            plaintiff.accuser_short = wholeItem.PlaintiffItems[j].accuser_short
                            plaintiff.accuser = wholeItem.PlaintiffItems[j].accuser
                            plaintiff.tag = guid()
                            plaintiff_item[j]=plaintiff
                        }
                    }
                    if ("DefendantItems" in wholeItem && wholeItem.DefendantItems.length > 0) {
                        for (j = 0; j < wholeItem.DefendantItems.length; j++) {
                            let defendant={}
                            defendant.defendant_short = wholeItem.DefendantItems[j].defendant_short
                            defendant.defendant = wholeItem.DefendantItems[j].defendant
                            defendant.tag = guid()
                            defendant_item[j]=defendant
                        }
                    }
                    if ("thirdPartyItems" in wholeItem && wholeItem.thirdPartyItems.length > 0) {
                        for (j = 0; j < wholeItem.thirdPartyItems.length; j++) {
                            let thirdParty={}
                            thirdParty.third_party_short = wholeItem.thirdPartyItems[j].third_party_short
                            thirdParty.third_party = wholeItem.thirdPartyItems[j].third_party
                            thirdParty.tag = guid()
                            third_party_item[j]=thirdParty
                        }
                    }
                    // if ("thirdPartyItems" in wholeItem && wholeItem.thirdPartyItems.length > 0) {
                    //     for (j = 0; j < wholeItem.thirdPartyItems.length; j++) {
                    //         let thirdParty={}
                    //         thirdParty.third_party_short = wholeItem.thirdPartyItems[j].third_party_short
                    //         thirdParty.third_party = wholeItem.thirdPartyItems[j].third_party
                    //         thirdParty.tag = guid()
                    //         third_party_item[j]=thirdParty
                    //     }
                    // }
                    if ("BasicInfo" in wholeItem) {
                        for (j = 0; j < wholeItem.BasicInfo.chief_judge.length; j++) {
                            chief_judge_name[j] = wholeItem.BasicInfo.chief_judge[j].name
                        }
                        for (j = 0; j < wholeItem.BasicInfo.judge.length; j++) {
                            judge_name[j] = wholeItem.BasicInfo.judge[j].name
                        }
                        for (j = 0; j < wholeItem.BasicInfo.juror.length; j++) {
                            juror_name[j] = wholeItem.BasicInfo.juror[j].name
                        }
                        for (j = 0; j < wholeItem.BasicInfo.people_juror.length; j++) {
                            people_juror[j] = wholeItem.BasicInfo.people_juror[j].name
                        }
                        court_clerk = wholeItem.BasicInfo.court_clerk
                    }
                    if ("CourtInves" in wholeItem) {
                        counterclaim_defendant_today_is_reply = wholeItem.CourtInves.counterclaim_defendant_today_is_reply
                        is_counterclaim = wholeItem.CourtInves.is_counterclaim
                    }

                }
                return {
                    plaintiff_item: plaintiff_item,
                    defendant_item: defendant_item,
                    third_party_item:third_party_item,
                    chief_judge_name: chief_judge_name,
                    juror_name: juror_name,
                    judge_name: judge_name,
                    people_juror:people_juror,
                    counterclaim_defendant_today_is_reply: counterclaim_defendant_today_is_reply,
                    court_number: decodeURI(pair[1]),
                    is_counterclaim: is_counterclaim,
                    court_clerk: court_clerk
                }
            }
        }
        return {
            plaintiff_item:[{accuser:"",accuser_short: "",tag:guid()}],
            defendant_item: [{defendant:"",defendant_short: "",tag:guid()}],
            third_party_item: [{third_party:"",third_party_short: "",tag:guid()}],
            chief_judge_name: [""],
            juror_name: [""],
            judge_name: [""],
            people_juror:[""],
            counterclaim_defendant_today_is_reply: "1",
            court_number: "",
            court_clerk: "",
            is_counterclaim: "2"
        }
    },
    mutations: {
        updateCourt_Clerk(state, payload) {
            state.court_clerk = payload
        },
        handlePlaintiffItem(state, payload) {
            if(payload[1]=="accuser")
                state.plaintiff_item[payload[2]].accuser = payload[0]
            else
                state.plaintiff_item[payload[2]].accuser_short = payload[0]
        },
        handleDefendantItem(state, payload) {
            if(payload[1]=="defendant")
                state.defendant_item[payload[2]].defendant = payload[0]
            else
                state.defendant_item[payload[2]].defendant_short = payload[0]
        },
        handlethirdPartyItem(state, payload) {
            if(payload[1]=="third_party")
                state.third_party_item[payload[2]].third_party = payload[0]
            else
                state.third_party_item[payload[2]].third_party_short = payload[0]
        },
        setCourtNum(state, payload) {
            state.court_number = payload
        },
        setIsTodayReply(state, payload) {
            // let data=Object.assign({},payload)
            state.counterclaim_defendant_today_is_reply = payload
        },
        setIsCourtClaim(state, payload) {
            state.is_counterclaim = payload
        },
        delete_components(state, payload) {
            switch (payload[0]) {
                case 'plaintiff':
                    state.plaintiff_item.splice(payload[1], 1);
                    break
                case 'defendant':
                    state.defendant_item.splice(payload[1], 1);
                    break
                case 'third_party':
                    state.third_party_item.splice(payload[1], 1);
                    break
                case 'chief_judge':
                    state.chief_judge_name.splice(payload[1], 1)
                    break
                case 'judge':
                    state.judge_name.splice(payload[1], 1)
                    break
                case 'juror':
                    state.juror_name.splice(payload[1], 1)
                    break
                case 'people_juror':
                    state.people_juror.splice(payload[1], 1)
                    break
                default:
                    //这里是没有找到对应的值处理
                    break
            }
        },
        add_components(state, payload) {
            switch (payload[0]) {
                case 'plaintiff':
                    state.plaintiff_item.push({accuser:"",accuser_short: "",tag:guid()})
                    break
                case 'defendant':
                    state.defendant_item.push({defendant:"",defendant_short: "",tag:guid()})
                    break
                case 'third_party':
                    state.third_party_item.push({third_party:"",third_party_short: "",tag:guid()})
                    break
                case 'chief_judge':
                    state.chief_judge_name.push('')
                    break
                case 'judge':
                    state.judge_name.push('')
                    break
                case 'juror':
                    state.juror_name.push('')
                    break
                case 'people_juror':
                    state.people_juror.push('')
                    break
                default:
                    //这里是没有找到对应的值处理
                    break
            }
        },
        judgeChange(state, payload) {
            switch (payload[0]) {
                case 'chief_judge':
                    state.chief_judge_name[payload[1]] = (payload[2])
                    break
                case 'judge':
                    state.judge_name[payload[1]] = (payload[2])
                    break
                case 'juror':
                    state.juror_name[payload[1]] = (payload[2])
                    break
                case 'people_juror':
                    state.people_juror[payload[1]] = (payload[2])
                    break
                default:
                    //这里是没有找到对应的值处理
                    break
            }

        }
    }
});




