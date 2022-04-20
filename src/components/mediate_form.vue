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
              <textarea type="text" class="layui-input ">当事人是否能够调解</textarea>
            </div>
          </div>
        </div>
        <hr>
        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" v-model="data.mediate_accuser" placeholder="原告" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-col-md6">
            <div class="layui-form">
              <div class="layui-card-body">
              <input type="radio" value="1" class="myradio" v-model="data.is_mediate_accuser " name="is_mediate_accuser">
              <label>能</label>
              <input type="radio" value="2" class="myradio" v-model="data.is_mediate_accuser " name="is_mediate_accuser">
              <label>不能</label>
              </div>
            </div>
          </div>
        </div>
        <hr>

        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" name="title" v-model="data.time_limit_accuser" autocomplete="off" style="margin-top: 30px" placeholder="庭外和解时限"
                   class="layui-input">
          </div>
          <div class="layui-col-md6">
            <textarea v-model="data.mediate_plan_accuser" placeholder="调解方案" style="margin-left: 15px" class="layui-textarea"></textarea>
          </div>
        </div>
        <hr>

        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" v-model="data.mediated_defendant[0].mediate_defendant" placeholder="被告" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-col-md6">
            <div class="layui-card-body">
              <input type="radio" value="1" v-model="data.mediated_defendant[0].is_mediate_defendant" class="myradio" >
              <label>能</label>
              <input type="radio" value="2" v-model="data.mediated_defendant[0].is_mediate_defendant" class="myradio" >
              <label>不能</label>
            </div>
          </div>
          <div class="layui-col-md1">
            <button @click="add_component('mediated_defendant')" type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>

        <div class="layui-form-item">
            <div class="layui-col-md9">
              <textarea v-model="data.mediated_defendant[0].mediate_plan_defendant" placeholder="调解方案" class="layui-textarea">
              </textarea>
            </div>
        </div>
        <hr>
        <template v-for="(item, index) in data.mediated_defendant.slice(1)" :key="index">
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" v-model="data.mediated_defendant[index+1].mediate_defendant" placeholder="被告" autocomplete="off" class="layui-input">
            </div>
            <div class="layui-col-md6">
              <div class="layui-card-body">
                <input type="radio" value="1" v-model="data.mediated_defendant[index+1].is_mediate_defendant" class="myradio" >
                <label>能</label>
                <input type="radio" value="2" v-model="data.mediated_defendant[index+1].is_mediate_defendant" class="myradio" >
                <label>不能</label>
              </div>
            </div>
            <div class="layui-col-md1">
              <button @click="delete_component('mediated_defendant',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>

          <div class="layui-form-item">
            <div class="layui-col-md9">
              <textarea v-model="data.mediated_defendant[index+1].mediate_plan_defendant" placeholder="调解方案" class="layui-textarea">
              </textarea>
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

// } else data = JSON.parse(localStorage.getItem("mediate_form"));
// console.log(data);
export default {
  data() {
    var data;
// if (localStorage.getItem("mediate_form") == null) {
    data = {
      mediate_accuser: '',            //原告简称
      is_mediate_accuser: '',         //原告回答
      mediate_plan_accuser: '',       //被告简称
      time_limit_accuser:'',
      mediated_defendant: [
        {
          mediate_defendant: "" , //被告回答
          is_mediate_defendant: "" ,
          mediate_plan_defendant:"",
        },
      ],
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if("mediate_form" in wholeItem){
      data=wholeItem.mediate_form
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
        case "mediated_defendant":
          this.data.mediated_defendant.push({
            mediate_defendant: "" ,          //问题
            mediate_plan_defendant: "" ,     //原告简称
            is_mediate_defendant: "" ,       //原告回答
          });
          break
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "mediated_defendant":
          //这里是值对应的处理
          this.data.mediated_defendant.splice(index, 1);
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
          // window.layui.layer.msg('请优先完善基本信息表格');
        }
        else{
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          wholeItem.mediate_form=this.data
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