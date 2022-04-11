<template>
  <h1 style="text-align:center">是否调解</h1>
  <table class="layui-table">
    <tr>
      <td width="30%">
        <p>审判员</p>
      </td>
      <td width="70%">
        <textarea type="text" class="layui-input ">当事人是否能够调解</textarea>
      </td>
    </tr>
    <tr>
      <td>
        <input type="text"  id="mediate_accuser" v-model="data.mediate_accuser" placeholder="原告" autocomplete="off" class="layui-input">
      </td>
      <td>
        <div class="layui-form-item">
          <div class="site-title">
            <div class="layui-form">
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" value="1" v-model="data.is_mediate_accuser " name="is_mediate_accuser" title="能" checked>
                  <input type="radio" value="2" v-model="data.is_mediate_accuser " name="is_mediate_accuser" title="不能" >
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td width="30%">
        <input type="text" name="title" v-model="data.time_limit_accuser" id="time_limit_accuser" lay-verify="required" placeholder="庭外和解时限" autocomplete="off"
               class="layui-input">
      </td>
      <td width="70%">
        <textarea v-model="data.mediate_plan_accuser" name="mediate_plan_accuser" placeholder="调解方案" class="layui-textarea"></textarea>
      </td>
    </tr>
  </table>
  <div id="mediated_defendant">
    <div id="form_mediate_defendant">
      <table class="layui-table" >
        <tr>
          <td width="30%">
            <input type="text" v-model="data.mediated_defendant[0].mediate_defendant.name" id="mediate_defendant"  placeholder="被告" autocomplete="off" class="layui-input">
          </td>
          <td width="70%">
            <div class="layui-input-row">
              <div class="layui-col-md9">
                <div class="layui-form">
                  <div class="site-title">
                    <div class="layui-form" id="mediated_is_mediate1">
                      <input type="radio" value="1" v-model="data.mediated_defendant[0].is_mediate_defendant.name" name="is_mediate_defendant1" title="能" checked>
                      <input type="radio" value="2" v-model="data.mediated_defendant[0].is_mediate_defendant.name" name="is_mediate_defendant1" title="不能" >
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-col-md3">
                <button @click="add_component('mediated_defendant')" type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <textarea v-model="data.mediated_defendant[0].mediate_plan_defendant.name" placeholder="调解方案" class="layui-textarea"></textarea>
    </div>
    <template v-for="(item, index) in data.mediated_defendant.slice(1)" :key="index">
      <div >
        <table class="layui-table" >
          <tr>
            <td width="30%">
              <input type="text" v-model="data.mediated_defendant[index+1].mediate_defendant.name"   placeholder="被告" autocomplete="off" class="layui-input">
            </td>
            <td width="70%">
              <div class="layui-input-row">
                <div class="layui-col-md9">
                  <div class="layui-form">
                    <div class="site-title">
                      <div class="layui-form">
                        <input type="radio" value="1" v-model="data.mediated_defendant[index+1].is_mediate_defendant.name" name="is_mediate_defendant1" title="能" checked>
                        <input type="radio" value="2" v-model="data.mediated_defendant[index+1].is_mediate_defendant.name" name="is_mediate_defendant1" title="不能" >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layui-col-md3">
                  <button @click="delete_component('mediated_defendant',1)"  type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </table>
        <textarea v-model="data.mediated_defendant[index+1].mediate_plan_defendant.name" placeholder="调解方案" class="layui-textarea"></textarea>
      </div>
    </template>
  </div>
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
    </div>
  </div>
</template>

<script>
var data;
if (localStorage.getItem("mediate_form") == null) {
  data = {
    mediate_accuser: '',            //原告简称
    is_mediate_accuser: '',         //原告回答
    mediate_plan_accuser: '',       //被告简称
    time_limit_accuser:'',
    mediated_defendant: [
      {
        mediate_defendant: { name: "" }, //被告回答
        is_mediate_defendant: { name: "" },
        mediate_plan_defendant:{ name: ""},
      },
    ],
  };
} else data = JSON.parse(localStorage.getItem("mediate_form"));
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
        case "mediated_defendant":
          this.data.mediated_defendant.push({
            mediate_defendant: { name: "" },          //问题
            mediate_plan_defendant: { name: "" },     //原告简称
            is_mediate_defendant: { name: "" },       //原告回答
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
    save_localstorage() {
      localStorage.setItem("mediate_form", JSON.stringify(this.data));
    },
  },
}
</script>

<style scoped>

</style>