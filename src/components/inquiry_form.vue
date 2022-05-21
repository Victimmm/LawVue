<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
          <label class="layui-form-label" style="text-align: center">审判员</label>
          <div class="layui-input-block">
            <textarea type="text" class="layui-textarea" style="height: 38px;min-height:38px">举证质证结束，下面进入法庭询问</textarea>
          </div>
        </div>
        <div class="layui-form-item" pane>
          <label class="layui-form-label" style="text-align: center">问题</label>
          <div class="layui-input-block">
            <div class="myselect-div">
              <input type="text" v-model="data.inquiryd_question[0].inquiry_question" placeholder="问题" autocomplete="off"
                     class="layui-input" style="width: 90%;float: left;">
              <button @click="add_component('inquiryd_question')" type="button"
                      class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text" style="float: right;">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.inquiryd_question[0].inquiry_accuser"
                              :options="$store.state.plaintiffname" placeholder="请选择原告"
                              style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.inquiryd_question[0].inquiry_accuser_answer" placeholder="回答" autocomplete="off"
                       class="layui-input" style="width: 100%;float: left;">
              </div>
            </div>
          </div>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.inquiryd_question[0].inquiry_defendant"
                              :options="$store.state.defendantname" placeholder="请选择被告"
                              style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.inquiryd_question[0].inquiry_defendant_answer" placeholder="回答" autocomplete="off"
                       class="layui-input" style="width: 100%;float: left;">
              </div>
            </div>
          </div>
        </div>

        <template v-for="(item, index) in data.inquiryd_question.slice(1)" :key="index">
          <div class="layui-form-item" pane>
            <label class="layui-form-label" style="text-align: center">问题</label>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.inquiryd_question[index+1].inquiry_question" placeholder="问题" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;">
                <button @click="delete_component('inquiryd_question',1)" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.inquiryd_question[index+1].inquiry_accuser"
                                :options="$store.state.plaintiffname" placeholder="请选择原告"
                                style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.inquiryd_question[index+1].inquiry_accuser_answer" placeholder="回答" autocomplete="off"
                         class="layui-input" style="width: 100%;float: left;">
                </div>
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.inquiryd_question[index+1].inquiry_defendant"
                                :options="$store.state.defendantname" placeholder="请选择被告"
                                style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.inquiryd_question[index+1].inquiry_defendant_answer" placeholder="回答" autocomplete="off"
                         class="layui-input" style="width: 100%;float: left;">
                </div>
              </div>
            </div>
          </div>
        </template>
        <hr>
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
      inquiryd_question: [
        {
          inquiry_question: "" ,         //问题
          inquiry_accuser: "" ,          //原告简称
          inquiry_accuser_answer:  "" ,  //原告回答
          inquiry_defendant: "" ,       //被告简称
          inquiry_defendant_answer: "" , //被告回答
        },
      ],
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null && "inquiry_form" in wholeItem){
      data=wholeItem.inquiry_form
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
        case "inquiryd_question":
          //
          this.data.inquiryd_question.push({
            inquiry_question: "" ,         //问题
            inquiry_accuser: "" ,          //原告简称
            inquiry_accuser_answer:  "" ,  //原告回答
            inquiry_defendant: "" ,       //被告简称
            inquiry_defendant_answer: "" , //被告回答
          });
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "inquiryd_question":
          //这里是值对应的处理
          this.data.inquiryd_question.splice(index, 1);
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    // save_localstorage() {
    //   localStorage.setItem("inquiry_form", JSON.stringify(this.data));
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
            wholeItem.inquiry_form = this.data
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