<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
          <label class="layui-form-label">审判员</label>
          <div class="layui-input-block">
            <textarea type="text" class="layui-textarea" v-model="data.judge_inquiry" style="height: 38px;min-height:38px"></textarea>
          </div>
        </div>

        <div class="layui-form-item" style="margin-bottom: -15px" pane>
          <label class="layui-form-label">审判员</label>
        </div>

        <template v-for="(item, index) in data.inquiry_info" :key="index">
          <div class="layui-form-item" style="margin-bottom: -15px" pane>
            <label class="layui-form-label">审判员</label>
            <div class="layui-input-block" >
              <input type="text" v-model="data.inquiry_info[index].inquiry_question" placeholder="问题" autocomplete="off"
                     class="layui-input" style="width: 100%;float: left;">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <template v-for="(aitem, aindex) in data.inquiry_info[index].inquiry_answer" :key="aindex">
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 100px;">
                <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                  <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.inquiry_info[index].inquiry_answer[aindex].name"
                                  :options="inquiryFormGetAccuserMergeDefendant" placeholder="请选择原被告"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div " >
                    <textarea type="text" v-model="data.inquiry_info[index].inquiry_answer[aindex].answer" placeholder="回答" autocomplete="off"
                            class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                    <button type="button" @click="delete_component('inquiry_reply',index,aindex)" class="layui-btn layui-btn-danger layui-btn-sm"
                            data-type="text"
                            style="float: right;height:100px;width:7.5%">
                      <i class="layui-icon">&#xe640;</i></button>
                    <button type="button" @click="add_component('inquiry_reply',index,aindex+1)" class="layui-btn layui-btn-sm" data-type="text"
                            style="float: right;height:100px;width:7.5%">
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
      }],
      judge_inquiry:"举证质证结束，下面进入法庭询问。",
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null && "inquiryInfo" in wholeItem){
      data=wholeItem.inquiryInfo
    }
    return {
      data: data,
      question_list: [],
    };
  },
  computed:{
    inquiryFormGetAccuserMergeDefendant: {
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
  mounted() {
    let inquiry_data_recall = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(inquiry_data_recall != null && "inquiryInfo" in inquiry_data_recall){
      // console.log(inquiry_data_recall.inquiryInfo)
      this.data = inquiry_data_recall.inquiryInfo
    }else{
      this.axios.get('/record/question').then((result) =>{
        const questions = result.data.data;
        this.question_list = questions
        if (this.question_list.length != 0 ){
          var origin_data = [{
            inquiry_question: "",
            inquiry_answer: [{
              name:"",
              answer:"",
            }
            ]
          }]
          this.data.inquiry_info = origin_data
          this.data.inquiry_info[0].inquiry_question = this.question_list[0]
          for(let p=1; p < this.question_list.length; p++){
            let question=this.question_list[p]
            this.data.inquiry_info.push({
              inquiry_question: question,
              inquiry_answer: [{
                name:"",
                answer:"",
              }],
            });
          }
        }
      })
    }





  },

  methods: {
    // addTag(newTag){
    //   let tag=newTag
    //   this.question_list.push(tag)
    //   // this.data.question=tag
    // },
    // addTag(newTag){
    //   let tag=newTag
    //   this.data.court_cause_list.push(tag)
    //   this.data.court_cause=tag
    // },

    add_component(datatype,index_info_index,inquiry_answer_index) {
      switch (datatype) {

        case "inquiry_reply":
          //
          this.data.inquiry_info[index_info_index].inquiry_answer.splice(inquiry_answer_index,0,{
            name:"",
            answer:"",
          });
          break;
        case "inquiry_info":
          //
          this.data.inquiry_info.splice(index_info_index,0,{
            inquiry_question: "",
            inquiry_answer: [{
              name:"",
              answer:"",
            }],
          });
          break;
        // case "inquiry_answer":
        //   //
        //   this.data.inquiry_info[index_info_index].inquiry_answer.splice(inquiry_answer_index,0,{
        //     name:"",
        //     answer:"",
        //   });
        //   break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },

    delete_component(datatype, inquiry_info_index, inquiry_answer_index) {
      switch (datatype) {
        case "inquiry_reply":
          //这里是值对应的处理
          if (this.data.inquiry_info[inquiry_info_index].inquiry_answer.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.inquiry_info[inquiry_info_index].inquiry_answer.splice(inquiry_answer_index, 1);
          break;
        case "inquiry_info":
          //这里是值对应的处理
          if (this.data.inquiry_info.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.inquiry_info.splice(inquiry_info_index, 1);
          break;
        // case "inquiry_answer":
        //   //这里是值对应的处理
        //   this.data.inquiry_info[inquiry_info_index].inquiry_answer.splice(inquiry_answer_index, 1);
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
    },
  },
}


</script>

<style scoped>

</style>