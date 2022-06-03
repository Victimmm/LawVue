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
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_accuser[0].accuser"
                              :options="get_accuser_name" placeholder="请选择原告"
                              style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 90%;float: left;">
                  <input type="radio" value="1" class="myradio" lay-ignore v-model="data.mediate_accuser[0].is_mediate">
                  <label>能</label>
                  <input type="radio" value="2" class="myradio" lay-ignore v-model="data.mediate_accuser[0].is_mediate">
                  <label>不能</label>
                </div>
                <button @click="add_component('mediate_accuser')" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="data.mediate_accuser[0].is_mediate==1">
          <div class="layui-form-item" pane>
            <div class="layui-form-label divcenter">
              调解方案
            </div>
            <div class="layui-input-block">
                  <textarea v-model="data.mediate_accuser[0].mediate_plan"  placeholder="请输入原告调解方案"
                            class="layui-textarea"></textarea>
            </div>
          </div>

          <div class="layui-form-item" pane>
            <label class="layui-form-label">庭外和解时限</label>
            <div class="layui-input-block">
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <input type="text" v-model="data.mediate_accuser[0].time_limit" placeholder="庭外和解时限" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
          </div>
        </div>

        <template v-for="(item, index) in data.mediate_accuser.slice(1)" :key="index">
          <div class="layui-form-item " pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_accuser[index+1].accuser"
                                :options="get_accuser_name" placeholder="请选择原告"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 90%;float: left;">
                    <input type="radio" value="1" class="myradio" v-model="data.mediate_accuser[index+1].is_mediate" lay-ignore>
                    <label>能</label>
                    <input type="radio" value="2" class="myradio" v-model="data.mediate_accuser[index+1].is_mediate" lay-ignore>
                    <label>不能</label>
                  </div>
                  <button @click="delete_component('mediate_accuser',index+1)" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="data.mediate_accuser[index+1].is_mediate==1">
            <div class="layui-form-item" pane>
              <div class="layui-form-label divcenter">
                调解方案
              </div>
              <div class="layui-input-block">
                  <textarea v-model="data.mediate_accuser[index+1].mediate_plan" placeholder="请输入原告调解方案"
                            class="layui-textarea"></textarea>
              </div>
            </div>

            <div class="layui-form-item" pane>
              <label class="layui-form-label">庭外和解时限</label>
              <div class="layui-input-block">
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <input type="text" v-model="data.mediate_accuser[index+1].time_limit" placeholder="庭外和解时限" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
            </div>
          </div>
        </template>

        <div class="layui-form-item " pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_defendant[0].defendant"
                              :options="get_defendant_name" placeholder="请选择被告"
                              style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 90%;float: left;">
                  <input type="radio" value="1" v-model="data.mediate_defendant[0].is_mediate" lay-ignore class="myradio" >
                  <label>能</label>
                  <input type="radio" value="2" v-model="data.mediate_defendant[0].is_mediate" lay-ignore class="myradio" >
                  <label>不能</label>
                </div>
                <button @click="add_component('mediate_defendant')" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="layui-form-item" v-if="data.mediate_defendant[0].is_mediate==1" pane>
          <div class="layui-form-label divcenter">
            调解方案
          </div>
          <div class="layui-input-block">
                <textarea v-model="data.mediate_defendant[0].mediate_plan" placeholder="请输入被告调解方案"
                          class="layui-textarea"></textarea>
          </div>
        </div>

        <template v-for="(item, index) in data.mediate_defendant.slice(1)" :key="index">
          <div class="layui-form-item " pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_defendant[index+1].defendant"
                                :options="get_defendant_name" placeholder="请选择被告"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 90%;float: left;">
                    <input type="radio" value="1" v-model="data.mediate_defendant[index+1].is_mediate" class="myradio" lay-ignore>
                    <label>能</label>
                    <input type="radio" value="2" v-model="data.mediate_defendant[index+1].is_mediate" class="myradio" lay-ignore>
                    <label>不能</label>
                  </div>
                  <button @click="delete_component('mediate_defendant',index+1)" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="layui-form-item" v-if="data.mediate_defendant[index+1].is_mediate==1" pane>
            <div class="layui-form-label divcenter">
              调解方案
            </div>
            <div class="layui-input-block">
                <textarea v-model="data.mediate_defendant[index+1].mediate_plan" placeholder="请输入被告调解方案"
                          class="layui-textarea"></textarea>
            </div>
          </div>
        </template>
        <div v-if="show_final_mediate==1">
        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter" >
            最终认定调解方案
          </div>
          <div class="layui-input-block">
                  <textarea v-model="data.final_mediate_plan" placeholder="请填写原被告都统一且法院最终确认的调解方案"
                            class="layui-textarea"></textarea>
          </div>
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
      mediate_accuser: [
        {
          accuser: "",
          is_mediate: "1",
          mediate_plan: "",
          time_limit: ""
        }
      ],
      mediate_defendant: [
        {
          defendant: "",
          is_mediate: "1",
          mediate_plan: ""
        }
      ],
      final_mediate_plan:'',
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null &&  "mediateInfo" in wholeItem){
      data=wholeItem.mediateInfo
    }
    return {
      data: data,
    };
  },
  computed:{
    get_defendant_name:{
      get(){
        let string1 = this.$store.state.defendant_item.map(e =>(e.defendant_short==''?e.defendant:e.defendant_short)+'（被告）').filter(i => i && i.trim())
        return string1
      },
    },
    get_accuser_name:{
      get(){
        let string2 = this.$store.state.plaintiff_item.map(e =>(e.accuser_short==''?e.accuser:e.accuser_short)+'（原告）').filter(i => i && i.trim())
        return string2
    },
    },
    show_final_mediate:{
      get(){
        let flag_accuser=0
        for (let i = 0;i<this.data.mediate_accuser.length; i++)
        {
          if (this.data.mediate_accuser[i].is_mediate==2){
            flag_accuser=1
          }
        }
        let flag_defendant=0
        for (let i = 0;i<this.data.mediate_defendant.length; i++)
        {
          if (this.data.mediate_defendant[i].is_mediate==2){
            flag_defendant=1
          }
        }
        if (flag_accuser == 1 || flag_defendant ==1){
          return 0  //不显示
        }
        else {
          return 1
        } //显示
        }
    },
  },
  components: {
    VueMultiselect
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "mediate_accuser":
          this.data.mediate_accuser.push({
          accuser: "",
              is_mediate: "1",
            mediate_plan: "",
            time_limit: ""
          });
          break
        case "mediate_defendant":
          this.data.mediate_defendant.push({
            defendant: "",
            is_mediate: "1",
            mediate_plan: ""
          });
          break
        default:
          //这里是没有找到对应的值处理
          break;
    }
  },
    delete_component(datatype, index) {
      switch (datatype) {
        case "mediate_accuser":
          //这里是值对应的处理
          this.data.mediate_accuser.splice(index, 1);
          break;
        case "mediate_defendant":
          //这里是值对应的处理
          this.data.mediate_defendant.splice(index, 1);
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
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
            wholeItem.mediateInfo = this.data
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