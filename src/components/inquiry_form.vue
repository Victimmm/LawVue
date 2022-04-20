<template>
  <div class="layui-card">
    <div class="layui-card-body>">
      <form class="layui-form">
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <div class="layui-form-label">审判员</div>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <textarea type="text" class="layui-input">举证质证结束，下面进入法庭询问</textarea>
            </div>
          </div>
        </div>
        <hr>
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">问题：</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.inquiryd_question[0].inquiry_question"  placeholder="问题" autocomplete="off" class="layui-input"  >
            </div>
          </div>
          <div class="layui-col-md1">
            <button @click="add_component('inquiryd_question')" type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>
        <hr>
        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" v-model="data.inquiryd_question[0].inquiry_accuser" placeholder="原告姓名" autocomplete="off" class="layui-input"  >
          </div>
          <div class="layui-col-md6">
            <input type="text" v-model="data.inquiryd_question[0].inquiry_accuser_answer" placeholder="回答" autocomplete="off" class="layui-input" style="margin-left:12px ">
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" v-model="data.inquiryd_question[0].inquiry_defendant" placeholder="被告姓名" autocomplete="off" class="layui-input"  >
          </div>
          <div class="layui-col-md6">
            <input type="text" v-model="data.inquiryd_question[0].inquiry_defendant_answer" placeholder="回答" autocomplete="off" class="layui-input" style="margin-left:12px ">
          </div>
        </div>

<!--        -->
        <template v-for="(item, index) in data.inquiryd_question.slice(1)" :key="index">

          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">问题：</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.inquiryd_question[index+1].inquiry_question"  placeholder="问题" autocomplete="off" class="layui-input"  >
              </div>
            </div>
            <div class="layui-col-md1">
              <button @click="delete_component('inquiryd_question',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
          <hr>
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" v-model="data.inquiryd_question[index+1].inquiry_accuser" placeholder="原告姓名" autocomplete="off" class="layui-input"  >
            </div>
            <div class="layui-col-md6">
              <input type="text" v-model="data.inquiryd_question[index+1].inquiry_accuser_answer" placeholder="回答" autocomplete="off" class="layui-input" style="margin-left:12px ">
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" v-model="data.inquiryd_question[index+1].inquiry_defendant" placeholder="被告姓名" autocomplete="off" class="layui-input"  >
            </div>
            <div class="layui-col-md6">
              <input type="text" v-model="data.inquiryd_question[index+1].inquiry_defendant_answer" placeholder="回答" autocomplete="off" class="layui-input" style="margin-left:12px ">
            </div>
          </div>
          <hr>
        </template>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
          </div>
        </div>
        <hr>
      </form>
    </div>
  </div>
</template>

<script>

// } else data = JSON.parse(localStorage.getItem("inquiry_form"));
// console.log(data);
export default {
  data() {
    var data;
// if (localStorage.getItem("inquiry_form") == null) {
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
    if("inquiry_form" in wholeItem){
      data=wholeItem.inquiry_form
    }
    return {
      data: data,
    };
  },

  components: {
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
          wholeItem.inquiry_form=this.data
          localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
        }
      },
      deep: true
    }
  },
}
</script>

<style scoped>

</style>