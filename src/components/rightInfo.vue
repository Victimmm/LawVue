<template>
  <!--权利告知-->
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane" action="" >

        <div class="layui-form-item" pane>
          <label class="layui-form-label" style="line-height:180px">审判员</label>
          <div class="layui-input-block">
            <textarea v-model="data.judge_talk[0]" type="text" class="layui-input " style="height: 200px;">
            </textarea>
          </div>
        </div>

        <div class="layui-form-item " pane>
          <template v-for="(item, index) in getPlaintiffName" :key='index'>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label">{{ item }}</label>
              <div class="layui-input-block">
                <div class="myradiomargin">
                  <input type="radio" value="1"  v-model="data.accuser_avoid[index].is_listen" class="myradio"><label>
                  听清楚了 </label>
                  <input type="radio" value="2" v-model="data.accuser_avoid[index].is_listen" class="myradio"><label>
                  没听清楚 </label>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="layui-form-item " pane>
          <template v-for="(item, index) in getDefendantNane" :key='index'>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label">{{ item }}</label>
              <div class="layui-input-block">
                <div class="myradiomargin">
                  <input type="radio" value="1" v-model="data.defendant_avoid[index].is_listen" class="myradio"><label>
                  听清楚了 </label>
                  <input type="radio" value="2" v-model="data.defendant_avoid[index].is_listen" class="myradio"><label>
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
            <textarea type="text" v-model="data.judge_talk[1]" class="layui-textarea"
                      style="height:38px;min-height:38px"></textarea>
          </div>
        </div>

        <div class="layui-form-item " pane>
          <template v-for="(item, index) in getPlaintiffName" :key='index'>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label">{{ item }}</label>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="1" v-model="data.accuser_avoid[index].is_avoid" class="myradio"><label>
                    不申请回避 </label>
                    <input type="radio" value="2" v-model="data.accuser_avoid[index].is_avoid" class="myradio"><label>
                    申请回避 </label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="layui-form-item " pane>
          <template v-for="(item, index) in getDefendantNane" :key='index'>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-form-label">
                {{ item }}
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="1" v-model="data.defendant_avoid[index].is_avoid" class="myradio"><label>
                    不申请回避 </label>
                    <input type="radio" value="2" v-model="data.defendant_avoid[index].is_avoid" class="myradio"><label>
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
import {watch} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const $store = useStore()
    watch(() => $store.state.plaintiffname, (val, old) => {
      console.log(val, old)
    })
    return {}
  },

  data() {
    var data;
    data = {
      judge_talk: ["审判员：依据《中华人民共和国民事诉讼法》的规定，当事人在法庭上享有下列权利：\n" +
      "1.原告有权承认、变更、放弃自己的诉讼请求，被告有权反驳原告的诉讼请求或提起反诉；\n" +
      "2.当事人有权申请回避；\n" +
      "3.当事人有权举证；\n" +
      "4.当事人有权辩论、有权请求法庭调解\n" +
      "当事人在享有上述权利的同时，负有以下义务：\n" +
      "1.当事人有依法行使诉讼权利的义务；\n" +
      "2.当事人有听从法庭指挥、遵守法庭纪律的义务；\n" +
      "3.当事人有如实陈述事实、如实举证的义务。\n" +
      "上述诉讼权利和义务双方是否听清？",
        "审判员：当事人对审判员和书记是否申请回避？",
      ],
      accuser_avoid: [{is_listen: "1", is_avoid: "1"}],
      defendant_avoid: [{is_listen: "1", is_avoid: "1"}],
    };

    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "right_inform" in wholeItem) {
      data = wholeItem.right_inform

    }
    return {data: data}

  },
  computed: {
    getPlaintiffName: {
      get() {
        if (this.$store.state.is_counterclaim == "2") {
          return this.$store.state.plaintiffname.filter(i => i && i.trim()).map(function (e) {
            return e + '（原告）';
          })
        } else {
          return this.$store.state.plaintiffname.filter(i => i && i.trim()).map(function (e) {
            return e + '（反诉被告）';
          })
        }
      }
    },
    getDefendantNane: {
      get() {
        if (this.$store.state.is_counterclaim == "2") {



          return this.$store.state.defendantname.filter(i => i && i.trim()).map(function (e) {
            return e + '（被告）';
          })
        } else {
          return this.$store.state.defendantname.filter(i => i && i.trim()).map(function (e) {
            return e + '（反诉原告）';
          })
        }
      }
    }
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "defendant_avoid":
          //这里是值对应的处理
          this.data.defendant_avoid.push({
            is_avoid: "", is_listen: "",
          })
          break
        case "accuser_avoid":
          //这里是值对应的处理
          this.data.accuser_avoid.push({
            is_avoid: "", is_listen: "",
          })
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "defendant_avoid":
          //这里是值对应的处理
          this.data.defendant_avoid.splice(index, 1)
          break
        case "accuser_avoid":
          //这里是值对应的处理
          this.data.accuser_avoid.splice(index, 1)
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
          // window.layui.layer.msg('请优先完善基本信息表格');
        } else {
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.right_inform = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))

          }
        }
      },
      deep: true
    },
    getPlaintiffName() {
      if(this.data.accuser_avoid.length < this.$store.state.plaintiffname.length){
        this.data.accuser_avoid.push({
          is_avoid: "1", is_listen: "1",
        })
      }
    },
    getDefendantNane() {
      if(this.data.defendant_avoid.length < this.$store.state.defendantname.length){
        this.data.defendant_avoid.push({
          is_avoid: "1", is_listen: "1",
        })
      }
    }
  }
}
</script>

<style scoped>

</style>