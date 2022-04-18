<template >
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
              <textarea type="text" class="layui-input">双方发表最后陈述意见</textarea>
            </div>
          </div>
        </div>

        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" name="title" v-model="data.finald_accuser[0].final_accuser.name" placeholder="原告" autocomplete="off"
                   class="layui-input" >
          </div>
          <div class="layui-col-md6">
            <input type="text" name="title" v-model="data.finald_accuser[0].final_accuser_state" placeholder="原告陈述意见" autocomplete="off"
                   class="layui-input" style="margin-left:15px">
          </div>
          <div class="layui-col-md1">
            <button @click="add_component('finald_accuser')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                    data-type="text">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>

        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" name="title"  v-model="data.finald_defendant[0].final_defendant" placeholder="被告" autocomplete="off"
                   class="layui-input" >
          </div>
          <div class="layui-col-md6">
            <input type="text" name="title"  v-model="data.finald_defendant[0].final_defendant_state" placeholder="被告陈述意见" autocomplete="off"
                   class="layui-input" style="margin-left:15px">
          </div>
          <div class="layui-col-md1">
            <button @click="add_component('finald_defendant')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                    data-type="text">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>

        <template v-for="(item, index) in data.finald_accuser.slice(1)" :key="index">
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" v-model="data.finald_accuser[index+1].final_accuser.name"  placeholder="原告" autocomplete="off" class="layui-input">
            </div>
            <div class="layui-col-md6">
              <input type="text" v-model="data.finald_accuser[index+1].final_accuser_state"  placeholder="原告辩论意见" autocomplete="off"
                     class="layui-input" style="margin-left:15px">
            </div>
            <div class="layui-col-md1">
              <button @click="delete_component('finald_accuser',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
        </template>

        <template v-for="(item, index) in data.finald_defendant.slice(1)" :key="index">
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" name="title"  v-model="data.finald_defendant[index+1].final_defendant" placeholder="被告" autocomplete="off"
                     class="layui-input" >
            </div>
            <div class="layui-col-md6">
              <input type="text" name="title"  v-model="data.finald_defendant[index+1].final_defendant_state" placeholder="被告陈述意见" autocomplete="off"
                     class="layui-input" style="margin-left:15px">
            </div>
            <div class="layui-col-md1">
              <button @click="delete_component('finald_defendant',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
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
var data;
if (localStorage.getItem("final_form") == null) {
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
} else data = JSON.parse(localStorage.getItem("final_form"));
// console.log(data);
export default {
  data() {
    return {
      data: data,
    };
  },

  components: {
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
    save_localstorage() {
      localStorage.setItem("final_form", JSON.stringify(this.data));
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
          wholeItem.final_form=this.data
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