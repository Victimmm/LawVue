<template>

  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item" pane>
          <label class="layui-form-label ">陈述类型</label>
          <div class="layui-input-block">
            <div class="myradiomargin">
              <input type="radio" name="stateType" v-model="data.state_type" value="0"
                     class="myradio"><label>简易程序</label>
              <input type="radio" name="stateType" v-model="data.state_type" value="1" class="myradio"
                     style="margin-left: 15px;"><label>普通程序独任制</label>
              <input type="radio" name="stateType" v-model="data.state_type" value="2" class="myradio"
                     style="margin-left: 15px;"><label>普通程序合议制</label>
            </div>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            陈述内容
          </div>
          <div class="layui-input-block">

            <textarea required v-model="setStateContent" name="courtCause"
                      class="layui-textarea"></textarea>
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
      state_type: '0',
      state_content: ""
    }
    return {data: data};
  },
  computed: {
    setStateContent: {
      get() {
        var plaintiff = this.$store.state.plaintiffname.filter(i=>i && i.trim()).join("，")
        var defendant = this.$store.state.defendantname.filter(i=>i && i.trim()).join("，")
        var judge = this.$store.state.judgename.filter(i=>i && i.trim()).join("，")
        var jurorname = this.$store.state.jurorname.filter(i=>i && i.trim()).join("，")
        var court_clerk= this.$store.state.court_clerk
        switch (this.data.state_type) {
          case "0":
            return "审判员：当事人身份经核对无误，法庭宣布双方当事人及其诉讼代理人身份符合法律规定，出庭资格合法，可以参" +
                "加诉讼。现在宣布开庭。北京市海淀区人民法院今天依法适用简易程序，公开审理原告（" + plaintiff + "）诉被告（" + defendant + "）一案，由本院审判" +
                "员（"+judge+"）独任审判，书记员（"+court_clerk+"）担任法庭记录。";
          case  "1":
            return "审判员：当事人身份经核对无误，法庭宣布双方当事人及其诉讼代理人身份符合法律规定，出庭资格合法，可以参" +
                "加诉讼。现在宣布开庭。北京市海淀区人民法院今天依法适用普通程序独任制程序，公开审理原告（" + plaintiff + "）诉被告（" + defendant + "）一案，由本院审判" +
                "员（"+judge+"）担任审判长，与人民陪审员（"+jurorname+"）共同组成合议庭，书记员（"+court_clerk+"）担任法庭记录。"
          case  "2":
            return "审判员：当事人身份经核对无误，法庭宣布双方当事人及其诉讼代理人身份符合法律规定，出庭资格合法，可以参" +
                "加诉讼。现在宣布开庭。北京市海淀区人民法院今天依法适用普通程序合议制，公开审理原告（" + plaintiff + "）诉被告（" + defendant + "）一案，由本院审判" +
                "员（"+judge+"）担任审判长，与陪审员（"+jurorname+"），人民陪审员__共同组成合议庭，书记员"+court_clerk+"担任法庭记录。"
          default:
            return ""
        }

      },
      set(val) {
        this.data.state_content = val
      }
    }
  }
}
</script>

<style scoped>

</style>