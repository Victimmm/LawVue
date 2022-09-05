<template>
    <fieldset class="layui-elem-field layui-field-title" id="summarizeInfo">
      <legend>审判员询问
<!--        <div class="layui-input-inline">-->
<!--          &lt;!&ndash;          可折叠按钮 默认显示&ndash;&gt;-->
<!--          <div v-show = 'isShow.summarize_inquiry_show == 0'>-->
<!--            <button type="button" class="layui-btn" @click="isShowSummarizeInquiry" style="background: 0;">-->
<!--              <i class="layui-icon" style="color: darkgrey">&#xe61a;</i>-->
<!--            </button>-->
<!--          </div>-->
<!--          <div v-show = 'isShow.summarize_inquiry_show == 1'>-->
<!--            <button type="button" class="layui-btn" @click="isShowSummarizeInquiry" style="background: 0;">-->
<!--              <i class="layui-icon" style="color: darkgrey">&#xe619;</i>-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
      </legend>

<!--      <div class="layui-card" v-show = 'isShow.summarize_inquiry_show == 1'>-->
      <div class="layui-card" style="margin-left: -15px">
        <div class="layui-card-body" >
          <form class="layui-form layui-form-pane" action="">

            <template v-for="(item, index) in data.summarize_inquiry" :key="index">
              <div class="layui-form-item" style="margin-bottom: -20px" pane>
                <label class="layui-form-label">审判员</label>
                <div class="layui-input-block" >
                  <input type="text" v-model="data.summarize_inquiry[index].question" placeholder="请输入问题" autocomplete="off"
                         class="layui-input" style="width: 100%;float: left;">
                </div>
              </div>
              <div class="layui-form-item" pane>

                <template v-for="(aitem, aindex) in data.summarize_inquiry[index].answer" :key="aindex">
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 100px;">
                    <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                      <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.summarize_inquiry[index].answer[aindex].name"
                                      :options="getAccuserMergeDefendant" placeholder="请选择当事人"
                                      style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                    </div>
                    <div class="layui-input-block">
                      <div class="myselect-div " >
                      <textarea type="text" v-model="data.summarize_inquiry[index].answer[aindex].answer" placeholder="请输入回答" autocomplete="off"
                                class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                        <button type="button" @click="delete_component('inquiry_reply',index,aindex)" class="layui-btn layui-btn-danger layui-btn-sm"
                                data-type="text"
                                style="float: right;height:98px;width:7.5%">
                          <i class="layui-icon">&#xe640;</i></button>
                        <button type="button" @click="add_component('inquiry_reply',index,aindex+1)" class="layui-btn layui-btn-sm" data-type="text"
                                style="float: right;height:98px;width:7.5%">
                          <i class="layui-icon">&#xe654;</i>
                        </button>
                        <!--                    <button @click="delete_component('inquiry_answer',index+1,aindex+1)" type="button" class="layui-btn layui-btn-radius layui-btn-xs"-->
                        <!--                            data-type="text"-->
                        <!--                            style="float: right;height:30px;margin-top: 5px;margin-top: 30px;padding: 0 5px;margin-left: 5px">删除-->
                        <!--                    </button>-->
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component('inquiry_info',index+1)"> 添加问题</button>
                <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left: 5px" @click="delete_component('inquiry_info',index)"> 删除问题
                </button>
              </div>
            </template>
          </form>
        </div>
      </div>
  </fieldset>

        <fieldset class="layui-elem-field layui-field-title" id="close_court_info">
          <legend>休（闭）庭信息</legend>
          <form class="layui-form">
            <div class="layui-card" style="margin-left: -15px">
              <div class="layui-card-body">
                <div class="layui-form layui-form-pane">
                  <div class="layui-form-item" pane>
                    <label class="layui-form-label" style="line-height: 80px">审判员陈述</label>
                    <div class="layui-input-block">
                <textarea v-model="data.summarize" placeholder="请输入审判员的最后陈述" lay-verify="required"
                          class="layui-textarea"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </fieldset>

</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.css'
import VueMultiselect from 'vue-multiselect'
export default {
  data() {
    var data;
    data = {
      summarize:'',
      summarize_inquiry:[{
        question: "",
        answer: [{
          name:"",
          answer:"",
        }
        ]
      }],
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null &&  "summarize" in wholeItem){
      data = wholeItem.summarize
    }
    if(wholeItem!=null && "judge_inquiry_before_summarize" in wholeItem){
      data.summarize_inquiry = wholeItem.judge_inquiry_before_summarize
    }

    return {
      data: data,
      // isShow:{summarize_inquiry_show: 1}
    };
  },
  computed:{
    getAccuserMergeDefendant: {
      get() {
        let string1 = this.$store.state.plaintiff_item.filter(i=> i.accuser && i.accuser.trim()).map(function (e) {
          return  (e.accuser_short==''?e.accuser:e.accuser_short) + '（原告）' ;
        })
        let string2 = this.$store.state.defendant_item.filter(i=> i.defendant && i.defendant.trim()).map(function (e) {
          return (e.defendant_short==''?e.defendant:e.defendant_short) + '（被告）' ;
        })
        let string3 = this.$store.state.third_party_item.filter(i=> i.third_party && i.third_party.trim()).map(function (e) {
          return (e.third_party_short==''?e.third_party:e.third_party_short) + '（第三人）' ;
        })
        return string2.concat(string1).concat(string3)
      },
    },
  },
  components: {
    VueMultiselect
  },
  methods:{
    // isShowSummarizeInquiry(){
    //   if(this.isShow.summarize_inquiry_show == 1){
    //     this.isShow.summarize_inquiry_show = 0
    //   }
    //   else{
    //     this.isShow.summarize_inquiry_show = 1
    //   }
    // },
    add_component(datatype,index_of_index,inquiry_answer_index) {
      switch (datatype) {
        case "inquiry_reply":

          //
          this.data.summarize_inquiry[index_of_index].answer.splice(inquiry_answer_index,0,{
            name:"",
            answer:"",
          });
          break;
        case "inquiry_info":
          //

          this.data.summarize_inquiry.splice(index_of_index,0,{
            question: "",
            answer: [{
              name:"",
              answer:"",
            }],
          });
          break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },

    delete_component(datatype, inquiry_info_index, inquiry_answer_index) {
      switch (datatype) {
        case "inquiry_reply":
          //这里是值对应的处理
          if (this.data.summarize_inquiry[inquiry_info_index].answer.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.summarize_inquiry[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
          break;
        case "inquiry_info":
          //这里是值对应的处理
          if (this.data.summarize_inquiry.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.summarize_inquiry.splice(inquiry_info_index, 1);
          break;
        // case "inquiry_answer":
        //   //这里是值对应的处理
        //   this.data.summarize_inquiry[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
        //   break;
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
            wholeItem.summarize = this.data
            //
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