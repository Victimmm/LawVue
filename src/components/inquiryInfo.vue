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
              <input type="text" v-model="data.inquiry_info[0].inquiry_question"  placeholder="问题" autocomplete="off"
                     class="layui-input" style="width: 100%;float: left;">
<!--              <button @click="add_component('inquiry_info')" type="button"-->
<!--                      class="layui-btn layui-btn-primary layui-btn-sm"-->
<!--                      data-type="text" style="float: right;">-->
<!--                <i class="layui-icon">&#xe654;</i>-->
<!--              </button>-->
            </div>
          </div>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.inquiry_info[0].inquiry_answer[0].name"
                              :options="inquiryFormGetAccuserMergeDefendant" placeholder="请选择原被告"
                              style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.inquiry_info[0].inquiry_answer[0].answer" placeholder="回答" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;">
                <button @click="add_component('inquiry_reply',0)" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>
          <template v-for="(bitem, bindex) in data.inquiry_info[0].inquiry_answer.slice(1)" :key="bindex">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.inquiry_info[0].inquiry_answer[bindex+1].name"
                                :options="inquiryFormGetAccuserMergeDefendant" placeholder="请选择原被告"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.inquiry_info[0].inquiry_answer[bindex+1].answer" placeholder="回答" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="delete_component('inquiry_reply',0,bindex+1)" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="layui-form-item" style="width:100%;margin-top: -10px;">
          <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component('inquiry_info')"> 添加问题</button>
<!--          <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" @click="delete_component('inquiry_info',index+1)"> 删除问题-->
<!--          </button>-->
        </div>

        <template v-for="(item, index) in data.inquiry_info.slice(1)" :key="index">
          <div class="layui-form-item" pane>
            <label class="layui-form-label" style="text-align: center">问题</label>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.inquiry_info[index+1].inquiry_question" placeholder="问题" autocomplete="off"
                       class="layui-input" style="width: 100%;float: left;">
<!--                <button @click="delete_component('inquiry_info',index+1)" type="button"-->
<!--                        class="layui-btn layui-btn-primary layui-btn-sm"-->
<!--                        data-type="text" style="float: right;">-->
<!--                  <i class="layui-icon">&#xe640;</i>-->
<!--                </button>-->
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.inquiry_info[index+1].inquiry_answer[0].name"
                                :options="inquiryFormGetAccuserMergeDefendant" placeholder="请选择原被告"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.inquiry_info[index+1].inquiry_answer[0].answer" placeholder="回答" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="add_component('inquiry_answer',index+1)" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe654;</i>
                  </button>
                </div>
              </div>
            </div>
            <template v-for="(aitem, aindex) in data.inquiry_info[index+1].inquiry_answer.slice(1)" :key="aindex">
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.inquiry_info[index+1].inquiry_answer[aindex+1].name"
                                  :options="inquiryFormGetAccuserMergeDefendant" placeholder="请选择原被告"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <input type="text" v-model="data.inquiry_info[index+1].inquiry_answer[aindex+1].answer" placeholder="回答" autocomplete="off"
                           class="layui-input" style="width: 90%;float: left;">
                    <button @click="delete_component('inquiry_answer',index+1,aindex+1)" type="button"
                            class="layui-btn layui-btn-primary layui-btn-sm"
                            data-type="text" style="float: right;">
                      <i class="layui-icon">&#xe640;</i>
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="layui-form-item" style="width:100%;margin-top: -10px;">
            <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component('inquiry_info')"> 添加问题</button>
            <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" @click="delete_component('inquiry_info',index+1)"> 删除问题
            </button>
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
      inquiry_info:[{
        inquiry_question: "",
        inquiry_answer: [{
          name:"",
          answer:"",
        }
  ]
  }]
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null && "inquiryInfo" in wholeItem){
      data=wholeItem.inquiryInfo
    }
    return {
      data: data,
    };
  },
  computed:{
    inquiryFormGetAccuserMergeDefendant: {
      get() {
            let string1 = this.$store.state.defendant_item.map(e =>(e.defendant_short==''?e.defendant:e.defendant_short)+'（被告）').filter(i => i && i.trim())
            let string2 = this.$store.state.plaintiff_item.map(e =>(e.accuser_short==''?e.accuser:e.accuser_short)+'（原告）').filter(i => i && i.trim())
            return string2.concat(string1)
      },
    },
  },
  components: {
    VueMultiselect
  },
  methods: {

// {
//   inquiry_info:[{
//     inquiry_question: "问题",
//     inquiry_answer: [{
//       name:"张三（原告）",
//       answer:"答案",
//     }
//     ]
//   }]
// }
    add_component(datatype,index) {
      switch (datatype) {
        case "inquiry_reply":
          //
          this.data.inquiry_info[index].inquiry_answer.push({
              name:"",
              answer:"",
          });
          break;
        case "inquiry_info":
          //
          this.data.inquiry_info.push({
            inquiry_question: "",
            inquiry_answer: [{
              name:"",
              answer:"",
            }],
          });
          break;
        case "inquiry_answer":
          //
          this.data.inquiry_info[index].inquiry_answer.push({
            name:"",
            answer:"",
          });
          break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },

    // {
//   inquiry_info:[{
//     inquiry_question: "问题",
//     inquiry_answer: [{
//       name:"张三（原告）",
//       answer:"答案",
//     }
//     ]
//   }]
// }
    delete_component(datatype, inquiry_info_index, inquiry_answer_index) {
      switch (datatype) {
        case "inquiry_reply":
          //这里是值对应的处理
          this.data.inquiry_info[inquiry_info_index].inquiry_answer.splice(inquiry_answer_index, 1);
          break;
        case "inquiry_info":
          //这里是值对应的处理
          this.data.inquiry_info.splice(inquiry_info_index, 1);
          break;
        case "inquiry_answer":
          //这里是值对应的处理
          this.data.inquiry_info[inquiry_info_index].inquiry_answer.splice(inquiry_answer_index, 1);
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
          // window.layui.layer.msg('请优先完善基本信息表格');
        }
        else{
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.inquiryInfo = this.data
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