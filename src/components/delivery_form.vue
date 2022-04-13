<template>
  <table class="layui-table">
    <tr>
      <td width="30%">
        <p>审判员</p>
      </td>
      <td width="70%">
        <textarea type="text" class="layui-input ">当事人是否同意电子送达裁判文书？</textarea>
      </td>
    </tr>
    <tr>
      <td>
        <input type="text" v-model="data.delivery_accuser"  placeholder="原告" autocomplete="off" class="layui-input">
      </td>
      <td>
        <div class="layui-form-item">
          <div class="layui-col-md9">
            <input type="radio" value="1" v-model="data.is_delivery_accuser" class="myradio">
            <label>同意</label>
            <input type="radio" value="2" v-model="data.is_delivery_accuser" class="myradio">
            <label>不同意</label>
          </div>
        </div>
      </td>
    </tr>
  </table>
  <table class="layui-table">
    <tr>
      <input type="text" v-model="data.email_accuser" placeholder="原告电子邮件地址" autocomplete="off"
             class="layui-input">
    </tr>
  </table>
  <div id="deliveryd_defendant">
    <div id="form_delivery">
      <table class="layui-table">
        <tr>
          <td width="30%">
            <input type="text" v-model="data.deliveryd_defendant[0].delivery_defendant" placeholder="被告" autocomplete="off" class="layui-input">
          </td>
          <td width="70%">
            <form class="layui-form-item">
              <div class="layui-input-row">
                <div class="layui-col-md9">
                  <input type="radio" v-model="data.deliveryd_defendant[0].is_delivery_defendant" value="1" class="myradio">
                  <label>同意</label>
                  <input type="radio" v-model="data.deliveryd_defendant[0].is_delivery_defendant" value="2" class="myradio">
                  <label>不同意</label>
                </div>
                <div class="layui-col-md3">
                  <button @click="add_component('deliveryd_defendant')" type="button" lay-filter="button_delivery"
                          class="layui-btn layui-btn-primary layui-btn-sm"  data-type="text">
                    <i class="layui-icon">&#xe654;</i>
                  </button>
                </div>
              </div>
            </form>
          </td>
        </tr>
      </table>
      <input type="text" v-model="data.deliveryd_defendant[0].email_defendant" name="title" placeholder="被告电子邮件地址" autocomplete="off" class="layui-input">
    </div>
<!--    -->
    <template v-for="(item, index) in data.deliveryd_defendant.slice(1)" :key="index">
      <div>
        <table class="layui-table">
          <tr>
            <td width="30%">
              <input type="text" v-model="data.deliveryd_defendant[index+1].delivery_defendant" placeholder="被告" autocomplete="off" class="layui-input">
            </td>
            <td width="70%">
              <form class="layui-form-item">
                  <div class="layui-col-md9">
                    <input type="radio" v-model="data.deliveryd_defendant[index+1].is_delivery_defendant" value="1" class="myradio">
                    <label>同意</label>
                    <input type="radio" v-model="data.deliveryd_defendant[index+1].is_delivery_defendant" value="2" class="myradio">
                    <label>不同意</label>
                  </div>
                  <div class="layui-col-md3">
                    <button @click="delete_component('deliveryd_defendant',1)" type="button" lay-filter="button_delivery"
                            class="layui-btn layui-btn-primary layui-btn-sm"  data-type="text">
                      <i class="layui-icon">&#xe640;</i>
                    </button>
                  </div>
              </form>
            </td>
          </tr>
        </table>
        <input type="text" v-model="data.deliveryd_defendant[index+1].email_defendant" name="title" placeholder="被告电子邮件地址" autocomplete="off" class="layui-input">
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
if (localStorage.getItem("delivery_form") == null) {
  data = {
    delivery_accuser:'',
    is_delivery_accuser:'',
    email_accuser:'',
    deliveryd_defendant: [
      {
        delivery_defendant: { name: "" },         //问题
        is_delivery_defendant: { name: "" },          //原告简称
        email_defendant: { name: "" },  //原告回答
      },
    ],
  };
} else data = JSON.parse(localStorage.getItem("delivery_form"));
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
        case "deliveryd_defendant":
          //
          this.data.deliveryd_defendant.push({
            delivery_defendant: "" ,         //问题
            is_delivery_defendant: "" ,          //原告简称
            email_defendant: "" ,  //原告回答
          });
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "deliveryd_defendant":
          //这里是值对应的处理
          this.data.deliveryd_defendant.splice(index, 1);
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    save_localstorage() {
      localStorage.setItem("delivery_form", JSON.stringify(this.data));
    },
  },
}
</script>

<style scoped>

</style>