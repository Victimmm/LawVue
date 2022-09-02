<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item " pane>
          <div class="layui-form-label">审判员</div>
            <div class="layui-input-block">
              <textarea type="text" v-model="data.judge_mediate" class="layui-textarea" style="height: 38px;min-height:38px">当事人是否能够调解</textarea>
            </div>
        </div>

<!--        <div class="layui-form-item " pane>-->
<!--          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">-->
<!--            <div class="layui-input-inline" style="margin-left:0px ;">-->
<!--              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_accuser[0].accuser"-->
<!--                              :options="get_accuser_name" placeholder="请选择原告"-->
<!--                              style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>-->
<!--            </div>-->
<!--            <div class="layui-input-block">-->
<!--              <div class="myselect-div">-->
<!--                <div class="myradiomargin" style="width: 100%;float: left;">-->
<!--                  <input type="radio" value="1" class="myradio" lay-ignore v-model="data.mediate_accuser[0].is_mediate">-->
<!--                  <label>能</label>-->
<!--                  <input type="radio" value="2" class="myradio" lay-ignore v-model="data.mediate_accuser[0].is_mediate">-->
<!--                  <label>不能</label>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div v-if="data.mediate_accuser[0].is_mediate==1">-->
<!--          <div class="layui-form-item" pane>-->
<!--            <div class="layui-form-label" style="line-height: 80px">-->
<!--              调解方案-->
<!--            </div>-->
<!--            <div class="layui-input-block">-->
<!--                  <textarea v-model="data.mediate_accuser[0].mediate_plan"  placeholder="请输入原告调解方案"-->
<!--                            class="layui-textarea"></textarea>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="layui-form-item" pane>-->
<!--            <label class="layui-form-label">庭外和解时限</label>-->
<!--            <div class="layui-input-block">-->
<!--              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">-->
<!--                <input type="text" v-model="data.mediate_accuser[0].time_limit" placeholder="请输入庭外和解时限" autocomplete="off"-->
<!--                       class="layui-input">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="layui-form-item" style="width:100%;margin-top: -10px;">-->
<!--          <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component('mediate_accuser',1)"> 添加原告</button>-->
<!--          &lt;!&ndash;          <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" @click="delete_component('mediate_accuser',index+1)"> 删除原告&ndash;&gt;-->
<!--          &lt;!&ndash;          </button>&ndash;&gt;-->
<!--        </div>-->

        <template v-for="(item, index) in data.mediate_accuser" :key="index">
          <div class="layui-form-item " pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_accuser[index].accuser"
                                :options="get_accuser_name" placeholder="请选择原告"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="1" class="myradio" v-model="data.mediate_accuser[index].is_mediate" lay-ignore>
                    <label>能</label>
                    <input type="radio" value="2" class="myradio" v-model="data.mediate_accuser[index].is_mediate" lay-ignore>
                    <label>不能</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="data.mediate_accuser[index].is_mediate==1">
            <div class="layui-form-item" pane>
              <div class="layui-form-label" style="line-height: 80px">
                调解方案
              </div>
              <div class="layui-input-block">
                  <textarea v-model="data.mediate_accuser[index].mediate_plan" placeholder="请输入原告调解方案"
                            class="layui-textarea"></textarea>
              </div>
            </div>

            <div class="layui-form-item" pane>
              <label class="layui-form-label">庭外和解时限</label>
              <div class="layui-input-block">
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <input type="text" v-model="data.mediate_accuser[index].time_limit" placeholder="请输入庭外和解时限" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
            </div>
          </div>
          <button type="button" style="margin-bottom:15px" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component('mediate_accuser',index+1)"> 添加原告</button>
          <button type="button" style="margin-bottom:15px ;margin-left:5px" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" @click="delete_component('mediate_accuser',index)"> 删除原告
          </button>
        </template>

<!--        <div class="layui-form-item " pane>-->
<!--          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">-->
<!--            <div class="layui-input-inline" style="margin-left:0px ;">-->
<!--              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_defendant[0].defendant"-->
<!--                              :options="get_defendant_name" placeholder="请选择被告"-->
<!--                              style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>-->
<!--            </div>-->
<!--            <div class="layui-input-block">-->
<!--              <div class="myselect-div">-->
<!--                <div class="myradiomargin" style="width: 100%;float: left;">-->
<!--                  <input type="radio" value="1" v-model="data.mediate_defendant[0].is_mediate" lay-ignore class="myradio" >-->
<!--                  <label>能</label>-->
<!--                  <input type="radio" value="2" v-model="data.mediate_defendant[0].is_mediate" lay-ignore class="myradio" >-->
<!--                  <label>不能</label>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="layui-form-item" v-if="data.mediate_defendant[0].is_mediate==1" pane>-->
<!--          <div class="layui-form-label" style="line-height: 80px">-->
<!--            调解方案-->
<!--          </div>-->
<!--          <div class="layui-input-block">-->
<!--                <textarea v-model="data.mediate_defendant[0].mediate_plan" placeholder="请输入被告调解方案"-->
<!--                          class="layui-textarea"></textarea>-->
<!--          </div>-->
<!--        </div>-->

<!--          <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" style="margin-bottom: 15px" @click="add_component('mediate_defendant',1)"> 添加被告</button>-->
          <!--          <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" @click="delete_component('mediate_defendant',index+1)"> 删除被告-->
          <!--          </button>-->

        <template v-for="(item, index) in data.mediate_defendant" :key="index">
          <div class="layui-form-item " pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_defendant[index].defendant"
                                :options="get_defendant_name" placeholder="请选择被告"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="1" v-model="data.mediate_defendant[index].is_mediate" class="myradio" lay-ignore>
                    <label>能</label>
                    <input type="radio" value="2" v-model="data.mediate_defendant[index].is_mediate" class="myradio" lay-ignore>
                    <label>不能</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="layui-form-item" v-if="data.mediate_defendant[index].is_mediate==1" pane>
            <div class="layui-form-label" style="line-height: 80px">
              调解方案
            </div>
            <div class="layui-input-block">
                <textarea v-model="data.mediate_defendant[index].mediate_plan" placeholder="请输入被告调解方案"
                          class="layui-textarea"></textarea>
            </div>
          </div>
          <button type="button" style="margin-bottom: 15px" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component('mediate_defendant',index+1)"> 添加被告</button>
          <button type="button" style="margin-bottom: 15px;margin-left:5px" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" @click="delete_component('mediate_defendant',index)"> 删除被告
          </button>
        </template>
        <div v-if="   $store.state.third_party_item[0].third_party != 0">
<!--          <div class="layui-form-item " pane>-->
<!--            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">-->
<!--              <div class="layui-input-inline" style="margin-left:0px ;">-->
<!--                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_third_party[0].third_party"-->
<!--                                :options="get_third_party_name" placeholder="请选择第三人"-->
<!--                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>-->
<!--              </div>-->
<!--              <div class="layui-input-block">-->
<!--                <div class="myselect-div">-->
<!--                  <div class="myradiomargin" style="width: 100%;float: left;">-->
<!--                    <input type="radio" value="1" v-model="data.mediate_third_party[0].is_mediate" lay-ignore class="myradio" >-->
<!--                    <label>能</label>-->
<!--                    <input type="radio" value="2" v-model="data.mediate_third_party[0].is_mediate" lay-ignore class="myradio" >-->
<!--                    <label>不能</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="layui-form-item" v-if="data.mediate_third_party[0].is_mediate==1" pane>-->
<!--            <div class="layui-form-label" style="line-height: 80px">-->
<!--              调解方案-->
<!--            </div>-->
<!--            <div class="layui-input-block">-->
<!--                  <textarea v-model="data.mediate_third_party[0].mediate_plan" placeholder="请输入第三人调解方案"-->
<!--                            class="layui-textarea"></textarea>-->
<!--            </div>-->
<!--          </div>-->

<!--          <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" style="margin-bottom: 15px" @click="add_component('mediate_third_party',1)"> 添加第三人</button>-->
          <!--          <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" @click="delete_component('mediate_defendant',index+1)"> 删除被告-->
          <!--          </button>-->

          <template v-for="(item, index) in data.mediate_third_party" :key="index">
            <div class="layui-form-item " pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.mediate_third_party[index].third_party"
                                  :options="get_third_party_name" placeholder="请选择第三人"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <div class="myradiomargin" style="width: 100%;float: left;">
                      <input type="radio" value="1" v-model="data.mediate_third_party[index].is_mediate" class="myradio" lay-ignore>
                      <label>能</label>
                      <input type="radio" value="2" v-model="data.mediate_third_party[index].is_mediate" class="myradio" lay-ignore>
                      <label>不能</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-form-item" v-if="data.mediate_third_party[index].is_mediate==1" pane>
              <div class="layui-form-label" style="line-height: 80px">
                调解方案
              </div>
              <div class="layui-input-block">
                  <textarea v-model="data.mediate_third_party[index].mediate_plan" placeholder="请输入第三人调解方案"
                            class="layui-textarea"></textarea>
              </div>
            </div>
            <button type="button" style="margin-bottom: 15px" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component('mediate_third_party',index+1)"> 添加第三人</button>
            <button type="button" style="margin-bottom: 15px;margin-left:5px" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" @click="delete_component('mediate_third_party',index)"> 删除第三人
            </button>
          </template>
        </div>

        <div v-if="show_final_mediate==1">
        <div class="layui-form-item" pane>
          <div class="layui-form-label" style="line-height: 80px">
            最终认定调解方案
          </div>
          <div class="layui-input-block">
                  <textarea v-model="data.final_mediate_plan" placeholder="请输入当事人都统一且法院最终确认的调解方案"
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
      mediate_third_party: [
        {
          third_party: "",
          is_mediate: "1",
          mediate_plan: ""
        }
      ],
      final_mediate_plan:'',
      judge_mediate:"当事人是否能够调解。",
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
        return this.$store.state.defendant_item.filter(i=> i.defendant && i.defendant.trim()).map(function (e) {
          return (e.defendant_short==''?e.defendant:e.defendant_short) + '（被告）' ;
        })
      },
    },
    get_accuser_name:{
      get(){
        return this.$store.state.plaintiff_item.filter(i=> i.accuser && i.accuser.trim()).map(function (e) {
          return  (e.accuser_short==''?e.accuser:e.accuser_short) + '（原告）' ;
        })
    },
    },
    get_third_party_name:{
      get(){
        return this.$store.state.third_party_item.filter(i=> i.third_party && i.third_party.trim()).map(function (e) {
          return  (e.third_party_short==''?e.third_party:e.third_party_short) + '（第三人）' ;
        })
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
        let flag_third_party=0
        for (let i = 0;i<this.data.mediate_third_party.length; i++)
        {
          if (this.data.mediate_third_party[i].is_mediate==2){
            flag_third_party=1
          }
        }
        if (flag_accuser == 1 || flag_defendant ==1 || flag_third_party ==1){
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
    add_component(datatype,index) {
      switch (datatype) {
        case "mediate_accuser":
          this.data.mediate_accuser.splice(index,0,{
            accuser: "",
            is_mediate: "1",
            mediate_plan: "",
            time_limit: ""
          });
          break
        case "mediate_defendant":
          this.data.mediate_defendant.splice(index,0,{
            defendant: "",
            is_mediate: "1",
            mediate_plan: ""
          });
          break
        case "mediate_third_party":
          this.data.mediate_third_party.splice(index,0,{
            third_party: "",
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
          if (this.data.mediate_accuser.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          //这里是值对应的处理
          this.data.mediate_accuser.splice(index, 1);
          break;
        case "mediate_defendant":
          //这里是值对应的处理
          if (this.data.mediate_defendant.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.mediate_defendant.splice(index, 1);
          break;
        case "mediate_third_party":
          //这里是值对应的处理
          if (this.data.mediate_third_party.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.mediate_third_party.splice(index, 1);
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