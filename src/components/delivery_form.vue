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
              <textarea type="text" class="layui-input ">当事人是否同意电子送达裁判文书？</textarea>
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" v-model="data.delivery_accuser"  placeholder="原告" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-col-md6">
            <div class="layui-card-body">
              <input type="radio" value="1" v-model="data.is_delivery_accuser" class="myradio">
              <label>同意</label>
              <input type="radio" value="2" v-model="data.is_delivery_accuser" class="myradio">
              <label>不同意</label>
            </div>
          </div>
        </div>
        <hr>
        <div class="layui-col-md9">
          <input type="text" v-model="data.email_accuser" placeholder="原告电子邮件地址" autocomplete="off"
                 class="layui-input">
        </div>
        <hr>
        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" v-model="data.deliveryd_defendant[0].delivery_defendant" placeholder="被告" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-col-md6">
            <div class="layui-card-body">
              <input type="radio" v-model="data.deliveryd_defendant[0].is_delivery_defendant" value="1" class="myradio">
              <label>同意</label>
              <input type="radio" v-model="data.deliveryd_defendant[0].is_delivery_defendant" value="2" class="myradio">
              <label>不同意</label>
            </div>
          </div>
          <div class="layui-col-md1">
            <button @click="add_component('deliveryd_defendant')" type="button"
                    class="layui-btn layui-btn-primary layui-btn-sm"  data-type="text">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>
        <div class="layui-col-md9">
          <input type="text" v-model="data.deliveryd_defendant[0].email_defendant" name="title" placeholder="被告电子邮件地址" autocomplete="off" class="layui-input">
        </div>
        <hr>

        <template v-for="(item, index) in data.deliveryd_defendant.slice(1)" :key="index">
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" v-model="data.deliveryd_defendant[index+1].delivery_defendant" placeholder="被告" autocomplete="off" class="layui-input">
            </div>
            <div class="layui-col-md6">
              <div class="layui-card-body">
                <input type="radio" v-model="data.deliveryd_defendant[index+1].is_delivery_defendant" value="1" class="myradio">
                <label>同意</label>
                <input type="radio" v-model="data.deliveryd_defendant[index+1].is_delivery_defendant" value="2" class="myradio">
                <label>不同意</label>
              </div>
            </div>
            <div class="layui-col-md1">
              <button @click="delete_component('deliveryd_defendant',1)" type="button"
                      class="layui-btn layui-btn-primary layui-btn-sm"  data-type="text">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
          <div class="layui-col-md9">
            <input type="text" v-model="data.deliveryd_defendant[index+1].email_defendant" name="title" placeholder="被告电子邮件地址" autocomplete="off" class="layui-input">
          </div>
          <hr>
        </template>
        <div class="layui-form-item">
            <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    var data;
// if (localStorage.getItem("delivery_form") == null) {
    data = {
      delivery_accuser:'',
      is_delivery_accuser:'',
      email_accuser:'',
      deliveryd_defendant: [
        {
          delivery_defendant: '',         //问题
          is_delivery_defendant: '',          //原告简称
          email_defendant: '',  //原告回答
        },
      ],
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null && "delivery_form" in wholeItem){
      data=wholeItem.delivery_form
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
    // save_localstorage() {
    //   localStorage.setItem("delivery_form", JSON.stringify(this.data));
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
            wholeItem.delivery_form = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>