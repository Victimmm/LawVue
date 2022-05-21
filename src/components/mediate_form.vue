<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item " pane>
          <div class="layui-form-label">审判员</div>
            <div class="layui-input-block">
              <textarea type="text" class="layui-textarea" style="height: 38px;min-height:38px">当事人是否能够调解</textarea>
            </div>
        </div>

        <div class="layui-form-item " pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_accuser"
                              :options="$store.state.plaintiffname" placeholder="请选择原告"
                              style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 100%;float: left;">
                  <input type="radio" value="1" class="myradio" v-model="data.is_mediate_accuser " name="is_mediate_accuser">
                  <label>能</label>
                  <input type="radio" value="2" class="myradio" v-model="data.is_mediate_accuser " name="is_mediate_accuser">
                  <label>不能</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            调解方案
          </div>
          <div class="layui-input-block">
                <textarea v-model="data.mediate_plan_accuser" placeholder="请输入调解方案"
                           class="layui-textarea"></textarea>
          </div>
        </div>
        <div class="layui-form-item" pane>
          <label class="layui-form-label">庭外和解时限</label>
          <div class="layui-input-block">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <input type="text" v-model="data.time_limit_accuser" placeholder="庭外和解时限" autocomplete="off"
                     class="layui-input">
            </div>
          </div>
        </div>
<!--        <div class="layui-input-inline" style="margin-left:0px ;">-->
<!--          <textarea v-model="data.mediate_plan_accuser" placeholder="调解方案" class="layui-textarea" style="width:85%"></textarea>-->
<!--        </div>-->

        <div class="layui-form-item " pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_defendant_part[0].mediate_defendant"
                              :options="$store.state.defendantname" placeholder="请选择被告"
                              style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 90%;float: left;">
                  <input type="radio" value="1" v-model="data.mediate_defendant_part[0].is_mediate_defendant" class="myradio" >
                  <label>能</label>
                  <input type="radio" value="2" v-model="data.mediate_defendant_part[0].is_mediate_defendant" class="myradio" >
                  <label>不能</label>
                </div>
                <button @click="add_component('mediate_defendant_part')" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <template v-for="(item, index) in data.mediate_defendant_part.slice(1)" :key="index">
          <div class="layui-form-item " pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_defendant_part[index+1].mediate_defendant"
                                :options="$store.state.defendantname" placeholder="请选择被告"
                                style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 90%;float: left;">
                    <input type="radio" value="1" v-model="data.mediate_defendant_part[index+1].is_mediate_defendant" class="myradio" >
                    <label>能</label>
                    <input type="radio" value="2" v-model="data.mediate_defendant_part[index+1].is_mediate_defendant" class="myradio" >
                    <label>不能</label>
                  </div>
                  <button @click="delete_component('mediate_defendant_part',1)" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            调解方案
          </div>
          <div class="layui-input-block">
                <textarea v-model="data.mediate_plan_defendant" placeholder="请输入调解方案"
                          class="layui-textarea"></textarea>
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
// if (localStorage.getItem("mediate_form") == null) {
    data = {
      mediate_accuser: '',            //原告姓名
      is_mediate_accuser: '1',         //原告是否调解
      mediate_plan_accuser: '',       //被告调解方案
      time_limit_accuser:'',          //调解时限（双方统一）
      mediate_defendant_part: [
        {
          mediate_defendant: "" , //被告姓名
          is_mediate_defendant: "1" , //被告是否调解
        },
      ],
      mediate_plan_defendant:"",
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null &&  "mediate_form" in wholeItem){
      data=wholeItem.mediate_form
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
        case "mediate_defendant_part":
          this.data.mediate_defendant_part.push({
            mediate_defendant: "" ,          //被告调解姓名
            is_mediate_defendant: "1" ,       //被告是否调解
          });
          break
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "mediate_defendant_part":
          //这里是值对应的处理
          this.data.mediate_defendant_part.splice(index, 1);
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    // save_localstorage() {
    //   localStorage.setItem("mediate_form", JSON.stringify(this.data));
    // },
  },
  watch: {
    data:{
      handler() {
        //如何根据数据存储
        if (this.$store.state.court_number == "") {
          window.layui.layer.msg('请优先完善基本信息表格');
        }
        else{
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.mediate_form = this.data
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