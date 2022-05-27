
<template>

  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
          <label class="layui-form-label" style="text-align: center">审判员</label>
          <div class="layui-input-block">
            <textarea type="text" class="layui-textarea" style="height: 38px;min-height:38px">举证质证结束，下面进入法庭辩论</textarea>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.argue[0].name"
                              :options="getAccuserMergeDefendant" placeholder="请选择原被告"
                              style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.argue[0].argue" placeholder="辩论意见" autocomplete="off" lay-verify="required"
                       class="layui-input" style="width: 90%;float: left;">
                <button @click="add_component('argue')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>

            </div>
          </div>

          <template v-for="(item, index) in data.argue.slice(1)" :key="index">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.argue[index+1].name"
                                :options="getAccuserMergeDefendant" placeholder="请选择原被告"
                                style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.argue[index+1].argue" placeholder="辩论意见" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="delete_component('argue',index+1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>

              </div>
            </div>
          </template>
        </div>

<!--        <div class="layui-form-item" pane>-->
<!--          <div class="layui-form-label">是否反诉</div>-->
<!--          <div class="layui-input-block">-->
<!--            <div class="myselect-div">-->
<!--              <div class="myradiomargin" style="width: 100%;float: left;">-->
<!--                <input type="radio" v-model="data.argue_is_counterclaim" class="myradio" value="1" >-->
<!--                <label>反诉</label>-->
<!--                <input type="radio" v-model="data.argue_is_counterclaim" class="myradio" value="2">-->
<!--                <label>不反诉</label>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

        <div v-show="$store.state.is_counterclaim=='1'">
          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.counterclaim_argue[0].name"
                                :options="getCounterAccuserMergeDefendant" placeholder="请选择反诉角色"
                                style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.counterclaim_argue[0].argue" lay-verify="required"  placeholder="辩论意见" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="add_component('counterclaim_argue')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe654;</i>
                  </button>
                </div>
              </div>
            </div>

            <template v-for="(item, index) in data.counterclaim_argue.slice(1)" :key="index">
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.counterclaim_argue[index+1].name"
                                  :options="getCounterAccuserMergeDefendant" placeholder="请选择反诉角色"
                                  style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">

                  <div class="myselect-div">
                    <input type="text" v-model="data.counterclaim_argue[index+1].argue"   placeholder="辩论意见" autocomplete="off"
                           class="layui-input" style="width: 90%;float: left;">
                    <button @click="delete_component('counterclaim_argue',index+1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                            data-type="text" style="float: right;">
                      <i class="layui-icon">&#xe640;</i>
                    </button>
                  </div>
                </div>
              </div>
            </template>

          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import VueMultiselect from "vue-multiselect";
export default {
  data() {
    var data;
    data = {
      argue:[
        {
          name: "" ,                  //原告/被告
          argue: "" ,            //辩论意见
        }
      ],
      counterclaim_argue:[
        {
          name:"" ,       //反诉原告/反诉被告
          argue: "",      //辩论意见
        }
      ],

    }
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null && "argueInfo" in wholeItem){
      data=wholeItem.argueInfo
    }
    return {
      data: data,
    };
  },
  mounted(){

  },
  updated: function () {

  },
  components: {
    VueMultiselect
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "argue":
          this.data.argue.push({
            name: "" ,                  //原被告
            argue: "" ,            //原被告辩论意见
          });
          break;
        case "counterclaim_argue":
          this.data.counterclaim_argue.push({
            name:"" ,       //反诉原告/反诉被告
            argue: "", //辩论意见
          });
          break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "argue":
          //这里是值对应的处理
          this.data.argue.splice(index, 1);
          break;
        case "counterclaim_argue":
          //这里是值对应的处理
          this.data.counterclaim_argue.splice(index, 1);
          break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
  },
  computed: {
    getAccuserMergeDefendant: {
      get() {
        let string1 = this.$store.state.defendantname.filter(i => i && i.trim()).map(function (e) {
          return e + '（被告）';
        })
        let string2 = this.$store.state.plaintiffname.filter(i => i && i.trim()).map(function (e) {
          return e + '（原告）';
        })
        return string2.concat(string1)
      },
    },
    getCounterAccuserMergeDefendant:{
      get() {
        let string1=this.$store.state.defendantname.filter(i => i && i.trim()).map(function (e) {
          return e + '（反诉原告）';
        })
        let string2=this.$store.state.plaintiffname.filter(i => i && i.trim()).map(function (e) {
          return e + '（反诉被告）';
        })
        return string2.concat(string1)
      },
  },
},
  watch: {
    data:{
      handler() {
        //如何根据数据存储
        if (this.$store.state.court_number == "") {
          // window.layui.layer.msg('请优先完善基本信息表格');
        }
        else{
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.argueInfo = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  },
}
</script>

<style scoped>

</style>