<template>

  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
          <label class="layui-form-label">审判员</label>
          <div class="layui-input-block">
            <textarea type="text" v-model="data.judge_argue" class="layui-textarea" style="height: 38px;min-height:38px"></textarea>
          </div>
        </div>

        <template v-for="(item, index) in data.argue" :key="index">
          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
              <div class="layui-input-inline" style="margin-left:0px;margin-top:30px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.argue[index].name"
                                :options="getAccuserMergeDefendant" placeholder="请选择当事人"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div " >
                  <textarea type="text" v-model="data.argue[index].argue" placeholder="请输入辩论意见" autocomplete="off"
                      class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                        <button type="button" @click="delete_component('argue',index)" class="layui-btn layui-btn-danger layui-btn-sm"
                                data-type="text"
                                style="float: right;height:100px;width:7.5%">
                          <i class="layui-icon">&#xe640;</i>
                        </button>
                        <button type="button" @click="add_component('argue',index+1)" class="layui-btn layui-btn-sm" data-type="text"
                                style="float: right;height:100px;width:7.5%">
                          <i class="layui-icon">&#xe654;</i>
                        </button>

                </div>
              </div>
            </div>
          </div>
        </template>

        <div v-if="$store.state.is_counterclaim=='1'">
          <div class="layui-form-item" pane>
            <template v-for="(item, index) in data.counterclaim_argue" :key="index">
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top: 5px;">
                <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                  <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.counterclaim_argue[index].name"
                                  :options="getCounterAccuserMergeDefendant" placeholder="请选择反诉角色"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div " >
                    <textarea type="text" v-model="data.counterclaim_argue[index].argue" placeholder="请输入辩论意见" autocomplete="off"
                              class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                    <button type="button" @click="delete_component('counterclaim_argue',index)" class="layui-btn layui-btn-danger layui-btn-sm"
                            data-type="text"
                            style="float: right;height:100px;width:7.5%">
                      <i class="layui-icon">&#xe640;</i>
                    </button>
                    <button type="button" @click="add_component('counterclaim_argue',index+1)" class="layui-btn layui-btn-sm" data-type="text"
                            style="float: right;height:100px;width:7.5%">
                      <i class="layui-icon">&#xe654;</i>
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
      argue: [
        {
          name: "",                  //原告/被告
          argue: "",            //辩论意见
        }
      ],
      counterclaim_argue: [
        {
          name: "",       //反诉原告/反诉被告
          argue: "",      //辩论意见
        }
      ],
      judge_argue:"法庭询问结束，下面进行法庭辩论，首先原告发表辩论意见。",
    }
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "argueInfo" in wholeItem) {
      data = wholeItem.argueInfo
    }
    return {
      data: data,
    };
  },
  mounted() {

  },
  components: {
    VueMultiselect
  },
  methods: {
    add_component(datatype,index) {
      switch (datatype) {

        case "argue":
          this.data.argue.splice(index,0,{
            name: "",                  //原被告
            argue: "",            //原被告辩论意见
          });
          break;

        case "counterclaim_argue":
          this.data.counterclaim_argue.splice(index,0,{
            name: "",       //反诉原告/反诉被告
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
          if (this.data.argue.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          //这里是值对应的处理
          this.data.argue.splice(index, 1);
          break;
        case "counterclaim_argue":
          //这里是值对应的处理
          if (this.data.counterclaim_argue.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.counterclaim_argue.splice(index, 1);
          break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
  },
  computed: {
    // buttonClassDisabled:{
    //   get(){
    //     if(this.data.argue.length > 1){
    //       return('layui-btn layui-btn-danger layui-btn-sm')
    //     }
    //     else{
    //       return('layui-btn layui-btn-disabled layui-btn-sm')
    //     }
    //   }
    // },
    getAccuserMergeDefendant: {
      get() {
        let string1 = this.$store.state.plaintiff_item.filter(i=> i.accuser && i.accuser.trim()).map(function (e) {
          return  (e.accuser_short==''?e.accuser:e.accuser_short) +'（原告）' ;
        })
        let string2 = this.$store.state.defendant_item.filter(i=> i.defendant && i.defendant.trim()).map(function (e) {
          return  (e.defendant_short==''?e.defendant:e.defendant_short) + '（被告）';
        })
        let string3 = this.$store.state.third_party_item.filter(i=> i.third_party && i.third_party.trim()).map(function (e) {
          return  (e.third_party_short==''?e.third_party:e.third_party_short) + '（第三人）';
        })
        return string1.concat(string2).concat(string3)

      }
    },
    getCounterAccuserMergeDefendant: {
      get() {
        let string4 = this.$store.state.plaintiff_item.filter(i=> i.accuser && i.accuser.trim()).map(function (e) {
          return  (e.accuser_short==''?e.accuser:e.accuser_short) + '（反诉被告）' ;
        })
        let string5 = this.$store.state.defendant_item.filter(i=> i.defendant && i.defendant.trim()).map(function (e) {
          return (e.defendant_short==''?e.defendant:e.defendant_short) + '（反诉原告）' ;
        })
        return string4.concat(string5)
      },
    },
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
            wholeItem.argueInfo = this.data
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