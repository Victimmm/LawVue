<template>
  <!--权利告知-->
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane" action="" >

        <div class="layui-form-item" pane>
          <label class="layui-form-label" style="line-height:120px">审判员</label>
          <div class="layui-input-block">
            <textarea v-model="data.judge_right_duty" type="text" class="layui-input " style="height: 140px;">
            </textarea>
          </div>
        </div>

        <div class="layui-form-item " pane>
          <template v-for="(item, index) in getPlaintiffName" :key='index'>
            <div class="layui-inline" style="width: 100%;margin-bottom:0;height: 38px;">
              <label class="layui-form-label">{{ item }}</label>
              <div class="layui-input-block">
                <div class="myradiomargin">
                  <input type="radio" value="1" lay-ignore v-model="data.accuser_right_duty[index].right_duty" class="myradio"><label>
                  听清楚了 </label>
                  <input type="radio" value="2" lay-ignore v-model="data.accuser_right_duty[index].right_duty" class="myradio"><label>
                  没听清楚 </label>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="layui-form-item " pane>
          <template v-for="(item, index) in getDefendantName" :key='index'>
            <div class="layui-inline" style="width: 100%;margin-bottom:0;height: 38px;">
              <label class="layui-form-label">{{ item }}</label>
              <div class="layui-input-block">
                <div class="myradiomargin">
                  <input type="radio" value="1" lay-ignore v-model="data.defendant_right_duty[index].right_duty" class="myradio"><label>
                  听清楚了 </label>
                  <input type="radio" value="2" lay-ignore v-model="data.defendant_right_duty[index].right_duty" class="myradio"><label>
                  没听清楚 </label>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="layui-form-item " pane>
          <template v-for="(item, index) in getThirdPartyName" :key='index'>
            <div class="layui-inline" style="width: 100%;margin-bottom:0;height: 38px;">
              <label class="layui-form-label">{{ item }}</label>
              <div class="layui-input-block">
                <div class="myradiomargin">
                  <input type="radio" value="1" lay-ignore v-model="data.third_party_right_duty[index].right_duty" class="myradio"><label>
                  听清楚了 </label>
                  <input type="radio" value="2" lay-ignore v-model="data.third_party_right_duty[index].right_duty" class="myradio"><label>
                  没听清楚 </label>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-form-label">
            审判员
          </div>
          <div class="layui-input-block">
            <textarea type="text" v-model="data.judge_avoid" class="layui-textarea"
                      style="height:38px;min-height:38px"></textarea>
          </div>
        </div>

        <div class="layui-form-item " pane>
          <template v-for="(item, index) in getPlaintiffName" :key='index'>
            <div class="layui-inline" style="width: 100%;margin-bottom:0;height: 38px;">
              <label class="layui-form-label">{{ item }}</label>
<!--              <input type="hidden" v-model="data.accuser_right_duty.name" > -->
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="2" lay-ignore v-model="data.accuser_right_duty[index].avoid" class="myradio"><label>
                    不申请回避 </label>
                    <input type="radio" value="1" lay-ignore v-model="data.accuser_right_duty[index].avoid" class="myradio"><label>
                    申请回避 </label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="layui-form-item " pane>
          <template v-for="(item, index) in getDefendantName" :key='index'>
            <div class="layui-inline" style="width: 100%;margin-bottom:0;height: 38px;">
              <div class="layui-form-label">
                {{ item }}
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="2" lay-ignore v-model="data.defendant_right_duty[index].avoid" class="myradio"><label>
                    不申请回避 </label>
                    <input type="radio" value="1" lay-ignore v-model="data.defendant_right_duty[index].avoid" class="myradio"><label>
                    申请回避 </label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="layui-form-item " pane>
          <template v-for="(item, index) in getThirdPartyName" :key='index'>
            <div class="layui-inline" style="width: 100%;margin-bottom:0;height: 38px;">
              <div class="layui-form-label">
                {{ item }}
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="2" lay-ignore v-model="data.third_party_right_duty[index].avoid" class="myradio"><label>
                    不申请回避 </label>
                    <input type="radio" value="1" lay-ignore v-model="data.third_party_right_duty[index].avoid" class="myradio"><label>
                    申请回避 </label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

      </form>
    </div>
  </div>
</template>

<script type="text/javascript">

import 'vue-multiselect/dist/vue-multiselect.css'

export default {
  data() {
    let data;
    data = {
      judge_right_duty: "审判员：依据《中华人民共和国民事诉讼法》的规定，当事人在法庭上享有下列权利：1.原告有权承认、变更、放弃自己的诉讼请求，被告有权反驳原告的诉讼请求或提起反诉；2.当事人有权申请回避；3.当事人有权举证；4.当事人有权辩论、有权请求法庭调解,当事人在享有上述权利的同时，负有以下义务：1.当事人有依法行使诉讼权利的义务；2.当事人有听从法庭指挥、遵守法庭纪律的义务；3.当事人有如实陈述事实、如实举证的义务。上述诉讼权利和义务双方是否听清？",
      judge_avoid: "审判员：当事人对审判员和书记是否申请回避？",
      accuser_right_duty: [{right_duty: "1", avoid: "2"}],
      defendant_right_duty: [{right_duty: "1", avoid: "2"}],
      third_party_right_duty: [{right_duty: "1", avoid: "2"}],
    };

    let wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "rightInfo" in wholeItem) {
      data = wholeItem.rightInfo
    }
    return {data: data}
  },
  computed: {
    getPlaintiffName: {
      get(){
        return this.$store.state.plaintiff_item.filter(i=> i.accuser && i.accuser.trim()).map(function (e) {
          return  (e.accuser_short==''?e.accuser:e.accuser_short) + '（原告）' ;
        })
      },
    },
    getDefendantName: {
      get() {
          return this.$store.state.defendant_item.filter(i=> i.defendant && i.defendant.trim()).map(function (e) {
            return (e.defendant_short==''?e.defendant:e.defendant_short) + '（被告）' ;
          })
      }
    },
    getThirdPartyName: {
      get() {
        return this.$store.state.third_party_item.filter(i=> i.third_party && i.third_party.trim()).map(function (e) {
          return (e.third_party_short==''?e.third_party:e.third_party_short) + '（第三人）' ;
        })
      }
    }
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "defendant_right_duty":
          //这里是值对应的处理
          this.data.defendant_right_duty.push({right_duty: "1", avoid: "2"})
          break
        case "accuser_right_duty":
          //这里是值对应的处理
          this.data.accuser_right_duty.push({right_duty: "1", avoid: "2"})
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "defendant_right_duty":
          //这里是值对应的处理
          this.data.defendant_right_duty.splice(index, 1)
          break
        case "accuser_right_duty":
          //这里是值对应的处理
          this.data.accuser_right_duty.splice(index, 1)
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    }
  },
  watch: {
    data: {
      handler() {
        //如何根据数据存储
        if (this.$store.state.court_number == "") {
          window.layui.layer.msg('请优先完善基本信息表格');
        } else {
          let is_avoid="2";
          for (let i in this.data.accuser_right_duty){
            if(this.data.accuser_right_duty[i].avoid=="1"){
              is_avoid="1"
            }
          }
          for (let i in  this.data.defendant_right_duty){
            if(this.data.defendant_right_duty[i].avoid=="1"){
              is_avoid="1"
            }
          }
          for (let i in  this.data.third_party_right_duty){
            if(this.data.third_party_right_duty[i].avoid=="1"){
              is_avoid="1"
            }
          }
          this.$emit("setIsAvoid",is_avoid)

          let wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.rightInfo = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    },
    getPlaintiffName() {
      if(this.data.accuser_right_duty.length < this.$store.state.plaintiff_item.length){
        this.data.accuser_right_duty.push({
          right_duty: "1", avoid: "2"
        })
      }

      let wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      if (wholeItem != null ) {
        wholeItem.rightInfo = this.data
        localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
      }
    },
    getDefendantName() {
      if(this.data.defendant_right_duty.length < this.$store.state.defendant_item.length){
        this.data.defendant_right_duty.push({
          right_duty: "1",avoid: "2"
        })
      }
      let wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      if (wholeItem != null ) {
        wholeItem.rightInfo = this.data
        localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
      }
    },
    getThirdPartyName() {
      if(this.data.third_party_right_duty.length < this.$store.state.third_party_item.length){
        this.data.third_party_right_duty.push({
          right_duty: "1",avoid: "2"
        })
      }
      let wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      if (wholeItem != null ) {
        wholeItem.rightInfo = this.data
        localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
      }
    }
  }
}
</script>

<style scoped>

</style>