<template >
  <div id="finald_accuser">
    <table class="layui-table" id="form_final_accuser">
      <tr>
        <td width="30%">
          <p>审判员</p>
        </td>
        <td width="70%">
          <textarea type="text" class="layui-input">双方发表最后陈述意见</textarea>
        </td>
      </tr>
      <tr>
        <td>
          <div class="layui-card-header">
            <input type="text" name="title" v-model="data.finald_accuser[0].final_accuser.name" placeholder="原告" autocomplete="off"
                   class="layui-input">
          </div>
        </td>
        <td>
          <div class="layui-input-row">
            <div class="layui-col-md9">
              <div class="layui-card-header">
                <input type="text" name="title" v-model="data.finald_accuser[0].final_accuser_state" placeholder="原告陈述意见" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
            <div class="layui-col-md3">
              <button @click="add_component('finald_accuser')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
        </td>
      </tr>
      <template v-for="(item, index) in data.finald_accuser.slice(1)" :key="index">
        <tr>
          <td>
            <div class="layui-card-header">
              <input type="text" name="title" v-model="data.finald_accuser[index+1].final_accuser" placeholder="原告" autocomplete="off"
                     class="layui-input">
            </div>
          </td>
          <td>
            <div class="layui-input-row">
              <div class="layui-col-md9">
                <div class="layui-card-header">
                  <input type="text" name="title" v-model="data.finald_accuser[index+1].final_accuser_state" placeholder="原告陈述意见" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md3">
                <button @click="delete_component('finald_accuser',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </table>
  </div>
  <div id="finald_defendant">
    <table class="layui-table" id="form_final_defendant">
      <tr>
        <td width="30%">
          <div class="layui-card-header">
            <input type="text" name="title" v-model="data.finald_defendant[0].final_defendant" placeholder="被告" autocomplete="off"
                   class="layui-input">
          </div>
        </td>
        <td width="70%">
          <div class="layui-input-row">
            <div class="layui-col-md9">
              <div class="layui-card-header">
                <input type="text" name="title"  v-model="data.finald_defendant[0].final_defendant_state" placeholder="被告陈述意见" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
            <div class="layui-col-md3">
              <button @click="add_component('finald_defendant')" type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
        </td>
      </tr>
      <template v-for="(item, index) in data.finald_defendant.slice(1)" :key="index">
        <tr>
          <td width="30%">
            <div class="layui-card-header">
              <input type="text" name="title" v-model="data.finald_defendant[index+1].final_defendant" id="final_defendant1" placeholder="被告" autocomplete="off"
                     class="layui-input">
            </div>
          </td>
          <td width="70%">
            <div class="layui-input-row">
              <div class="layui-col-md9">
                <div class="layui-card-header">
                  <input type="text" name="title"  v-model="data.finald_defendant[index+1].final_defendant_state" placeholder="被告陈述意见" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md3">
                <button @click="delete_component('finald_defendant',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </table>
  </div>
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
    </div>
  </div>
  <hr>
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
}
</script>

<style scoped>

</style>