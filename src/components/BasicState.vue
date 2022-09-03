<template>

  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item" pane>
          <label class="layui-form-label">陈述类型</label>
          <div class="layui-input-block">
            <div class="myradiomargin">
              <input type="radio" lay-ignore name="stateType" v-model="data.state_type" value="1"
                     class="myradio"><label>简易程序</label>
              <input type="radio" lay-ignore name="stateType" v-model="data.state_type" value="2" class="myradio"
                     style="margin-left: 15px;"><label>普通程序独任制</label>
              <input type="radio" lay-ignore name="stateType" v-model="data.state_type" value="3" class="myradio"
                     style="margin-left: 15px;"><label>普通程序合议制</label>
            </div>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter" >
            陈述内容
          </div>
          <div class="layui-input-block" style="text-align:left;padding: 5px 7px 5px">
            {{setStateContent}}
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicState",
  data: function () {
    var data = {
      state_type: '1',
      state_content: ""
    }
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "BasicState" in wholeItem) {
      data = wholeItem.BasicState
    }
    return {data: data};
  },
  computed: {
    setStateContent: {
      get() {
        let plaintiff = this.$store.state.plaintiff_item.filter(i=> i.accuser && i.accuser.trim()).map(function (e) {
          return e.accuser;
        }).join("，")
        let defendant = this.$store.state.defendant_item.filter(i=> i.defendant && i.defendant.trim()).map(function (e) {
          return e.defendant;
        }).join("，")
        let third_party = this.$store.state.third_party_item.filter(i=> i.third_party && i.third_party.trim()).map(function (e) {
          return e.third_party;
        }).join("，")

        let judge = this.$store.state.judge_name.filter(i => i && i.trim()).join("，")
        let jurorname = this.$store.state.juror_name.filter(i=>i && i.trim()).join("，")
        let people_juror = this.$store.state.people_juror.filter(i=>i && i.trim()).join("，")
        let court_clerk= this.$store.state.court_clerk
        let content
        let court_cause = this.$store.state.court_cause

        let third_party_content = ''
        if(third_party != ''){
          third_party_content = '及第三人（'+ third_party +'）'
        }

        switch (this.data.state_type) {
          case "1":
            content = "审判员：当事人身份经核对无误，法庭宣布当事人及其诉讼代理人身份符合法律规定，出庭资格合法，可以参" +
                "加诉讼。现在宣布开庭。北京市海淀区人民法院今天依法适用简易程序，公开审理原告（" + plaintiff + "）诉被告（" + defendant + "）"+third_party_content + court_cause+"一案，由本院审判" +
                "员（"+judge+"）独任审判，书记员（"+court_clerk+"）担任法庭记录。"
                break
          case  "2":
            content = "审判员：当事人身份经核对无误，法庭宣布当事人及其诉讼代理人身份符合法律规定，出庭资格合法，可以参" +
                "加诉讼。现在宣布开庭。北京市海淀区人民法院今天依法适用普通程序独任制程序，公开审理原告（" + plaintiff + "）诉被告（" + defendant + "）" +third_party_content+ court_cause+"买卖合同纠纷一案，由本院审判" +
                "员（"+judge+"）担任审判长，书记员（"+court_clerk+"）担任法庭记录。"
            break
          case  "3":
            content = "审判员：当事人身份经核对无误，法庭宣布当事人及其诉讼代理人身份符合法律规定，出庭资格合法，可以参" +
                "加诉讼。现在宣布开庭。北京市海淀区人民法院今天依法适用普通程序合议制，公开审理原告（" + plaintiff + "）诉被告（" + defendant + "）"+third_party_content+ court_cause+"买卖合同纠纷一案，由本院审判" +
                "员（"+judge+"）担任审判长，与陪审员（"+jurorname+"），人民陪审员（"+people_juror+"）共同组成合议庭，书记员"+court_clerk+"担任法庭记录。"
                break
          default:
            content = ""
        }

        let wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
        if( wholeItem!= null )
        {
          wholeItem.BasicState={}
          wholeItem.BasicState.state_type = this.data.state_type
          wholeItem.BasicState.state_content = content
          localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
        }
        return content
      }
    }
  },
  watch:{
    data: {
      handler() {
        var wholeItem
        if (this.$store.state.court_number == "") {
          // window.layui.layer.msg('请优先完善基本信息表格');
        } else {
          wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.BasicState = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>