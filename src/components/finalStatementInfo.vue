<template >
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
              <div class="layui-form-label">审判员</div>
            <div class="layui-input-block">
              <textarea type="text" class="layui-textarea" style="height: 38px;min-height:38px">双方发表最后陈述意见</textarea>
            </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.final_statement_info[0].name"
                              :options="finalStateFormGetAccuserMergeDefendant" placeholder="请选择原被告"
                              lay-verify="vueselect"
                              style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.final_statement_info[0].final_statement" lay-verify="required"  placeholder="陈述意见" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;">
                <button @click="add_component('final_statement_info')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>

            </div>
          </div>

          <template v-for="(item, index) in data.final_statement_info.slice(1)" :key="index">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.final_statement_info[index+1].name"
                                :options="finalStateFormGetAccuserMergeDefendant" placeholder="请选择原被告"
                                style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.final_statement_info[index+1].final_statement"   placeholder="陈述意见" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="delete_component('final_statement_info',index+1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>

              </div>
            </div>
          </template>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";
// } else data = JSON.parse(localStorage.getItem("final_form"));
// console.log(data);
export default {
  data() {
    var data;
// if (localStorage.getItem("final_form") == null) {
    data = {
    final_statement_info:[{
      name: "", //原告
      final_statement: "", //最后陈述意见
    }]
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null && "finalStatementInfo" in wholeItem){
      data=wholeItem.finalStatementInfo
    }
    return {
      data: data,
    };
  },
computed:{
  finalStateFormGetAccuserMergeDefendant: {
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
},
  components: {
    VueMultiselect
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "final_statement_info":
          this.data.final_statement_info.push({
            name: "", //原告
            final_statement: "", //最后陈述意见
          });
          break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "final_statement_info":
          //这里是值对应的处理
          this.data.final_statement_info.splice(index, 1);
          break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    // save_localstorage() {
    //   localStorage.setItem("final_form", JSON.stringify(this.data));
    // },
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
            wholeItem.finalStatementInfo = this.data
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