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
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == "CourtNum") {

                let plaintiffname = [""]
                let plaintifftag = [guid()]
                let defendantname = [""]
                let defendanttag = [guid()]
                let chief_judgename = ['']
                let jurorname = ['']
                let judgename = ['']
                let court_clerk = ""
                let is_todayreply = ""
                let is_counterclaim = ""
                var wholeItem = JSON.parse(localStorage.getItem(pair[1]))
                if (wholeItem != null) {
                    if ("PlaintiffItems" in wholeItem && wholeItem.PlaintiffItems.length > 0) {
                        for (var j = 0; j < wholeItem.PlaintiffItems.length; j++) {
                            if (wholeItem.PlaintiffItems[j].accuser_type == "0")
                                plaintiffname[j] = wholeItem.PlaintiffItems[j].accuser_short
                            else
                                plaintiffname[j] = wholeItem.PlaintiffItems[j].accuser
                            plaintifftag[j] = guid()
                        }
                    }
                    if ("DefendantItems" in wholeItem && wholeItem.DefendantItems.length > 0) {
                        for (j = 0; j < wholeItem.DefendantItems.length; j++) {
                            if (wholeItem.DefendantItems[j].defendant_type == "0")
                                defendantname[j] = wholeItem.DefendantItems[j].defendant_short
                            else
                                defendantname[j] = wholeItem.DefendantItems[j].defendant
                            defendanttag[j] = guid()
                        }
                    }
                    if ("BasicInfo" in wholeItem) {
                        for (j = 0; j < wholeItem.BasicInfo.chief_judge.length; j++) {
                            chief_judgename[j] = wholeItem.BasicInfo.chief_judge[j].name
                        }
                        for (j = 0; j < wholeItem.BasicInfo.judge.length; j++) {
                            judgename[j] = wholeItem.BasicInfo.judge[j].name
                        }
                        for (j = 0; j < wholeItem.BasicInfo.juror.length; j++) {
                            jurorname[j] = wholeItem.BasicInfo.juror[j].name
                        }
                        court_clerk = wholeItem.BasicInfo.court_clerk
                    }
                    if ("CourtInves" in wholeItem) {
                        is_todayreply = wholeItem.CourtInves.is_todayreply
                        is_counterclaim = wholeItem.CourtInves.is_counterclaim
                    }

                }
                return {
                    plaintiffname: plaintiffname,
                    plaintifftag: plaintifftag,
                    defendantname: defendantname,
                    defendanttag: defendanttag,
                    chief_judgename: chief_judgename,
                    jurorname: jurorname,
                    judgename: judgename,
                    is_todayreply: is_todayreply,
                    court_number: pair[1],
                    is_counterclaim: is_counterclaim,
                    court_clerk: court_clerk
                }
            }
        }
        return {
            plaintiffname: [""],
            plaintifftag: [guid()],
            defendantname: [""],
            defendanttag: [guid()],
            chief_judgename: [""],
            jurorname: [""],
            judgename: [""],
            is_todayreply: "0",
            court_number: "",
            court_clerk: "",
            is_counterclaim: "0"
        }
    },
    mutations: {
        updateCourt_Clerk(state, payload) {
            state.court_clerk = payload
        },
        handlePlaintiffName(state, payload) {
            state.plaintiffname[payload[1]] = payload[0]
        },
        handleDefendantName(state, payload) {
            state.defendantname[payload[1]] = payload[0]
        },
        setCourtNum(state, payload) {
            state.court_number = payload
        },
        setIsTodayReply(state, payload) {
            // let data=Object.assign({},payload)
            state.is_todayreply = payload
        },
        setIsCourtClaim(state, payload) {
            state.is_counterclaim = payload
        },
        delete_components(state, payload) {
            switch (payload[0]) {
                case 'plaintiff':
                    state.plaintiffname.splice(payload[1], 1);
                    state.plaintifftag.splice(payload[1], 1)
                    break
                case 'defendant':
                    state.defendantname.splice(payload[1], 1);
                    state.defendanttag.splice(payload[1], 1);
                    break
                case 'chief_judge':
                    state.chief_judgename.splice(payload[1], 1)
                    break
                case 'judge':
                    state.judgename.splice(payload[1], 1)
                    break
                case 'juror':
                    state.jurorname.splice(payload[1], 1)
                    break
                default:
                    //这里是没有找到对应的值处理
                    break
            }
        },
        add_components(state, payload) {
            switch (payload[0]) {
                case 'plaintiff':
                    state.plaintiffname.push("")
                    state.plaintifftag.push(guid())
                    break
                case 'defendant':
                    state.defendantname.push("")
                    state.defendanttag.push(guid())
                    break
                case 'chief_judge':
                    state.chief_judgename.push('')
                    break
                case 'judge':
                    state.judgename.push('')
                    break
                case 'juror':
                    state.jurorname.push('')
                    break
                default:
                    //这里是没有找到对应的值处理
                    break
            }
        },
        judgeChange(state, payload) {
            switch (payload[0]) {
                case 'chief_judge':
                    state.chief_judgename[payload[1]] = (payload[2])
                    break
                case 'judge':
                    state.judgename[payload[1]] = (payload[2])
                    break
                case 'juror':
                    state.jurorname[payload[1]] = (payload[2])
                    break
                default:
                    //这里是没有找到对应的值处理
                    break
            }

        }
    }
});




