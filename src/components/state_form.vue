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
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.finald_accuser[0].final_accuser"
                              :options="$store.state.plaintiffname" placeholder="请选择原告"
                              style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.finald_accuser[0].final_accuser_state"   placeholder="原告陈述意见" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;">
                <button @click="add_component('finald_accuser')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>

            </div>
          </div>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false"  v-model="data.finald_defendant[0].final_defendant"
                              :options="$store.state.defendantname" placeholder="请选择被告"
                              style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text"  v-model="data.finald_defendant[0].final_defendant_state" placeholder="被告陈述意见" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;">
                <button @click="add_component('finald_defendant')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>
          <template v-for="(item, index) in data.finald_accuser.slice(1)" :key="index">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.finald_accuser[index+1].final_defendant"
                                :options="$store.state.plaintiffname" placeholder="请选择原告"
                                style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.finald_accuser[index+1].final_accuser_state"   placeholder="原告陈述意见" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="delete_component('finald_accuser',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>

              </div>
            </div>
          </template>

          <template v-for="(item, index) in data.finald_defendant.slice(1)" :key="index">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.finald_defendant[index+1].final_defendant"
                                :options="$store.state.defendantname" placeholder="请选择被告"
                                style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.finald_defendant[index+1].final_defendant_state" placeholder="被告陈述意见" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="delete_component('finald_defendant',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
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
      finald_accuser: [
        {
          final_accuser: "" ,              //原告
          final_accuser_state: "" ,        //原告陈述意见
        },
      ],
      finald_defendant: [
        {
          final_defendant: "" ,            //被告
          final_defendant_state: "" ,      //被告陈述意见
        },
      ],
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null && "state_form" in wholeItem){
      data=wholeItem.state_form
    }
    return {
      data: data,
    };
  },

  components: {
    VueMultiselect
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "finald_accuser":
          this.data.finald_accuser.push({
            final_accuser: "" ,              //原告
            final_accuser_state: "" ,        //原告陈述意见
          });
          break;
        case "finald_defendant":
          this.data.finald_defendant.push({
            final_defendant: "" ,            //被告
            final_defendant_state: "" ,      //被告陈述意见
          });
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "finald_accuser":
          //这里是值对应的处理
          this.data.finald_accuser.splice(index, 1);
          break;
        case "finald_defendant":
          //这里是值对应的处理
          this.data.finald_defendant.splice(index, 1);
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
            wholeItem.state_form = this.data
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