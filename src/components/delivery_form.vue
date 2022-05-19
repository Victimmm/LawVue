<template>
  <div class="layui-card">
    <div class="layui-card-body>">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item layui-form-pane">
          <div class="layui-form-label">审判员</div>
            <div class="layui-input-block">
              <textarea type="text" class="layui-textarea" style="height: 38px;min-height:38px">当事人是否同意电子送达裁判文书？</textarea>
            </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.delivery_accuser"
                              :options="$store.state.plaintiffname" placeholder="请选择原告"
                              style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 100%;float: left;">
                  <input type="radio" value="1" v-model="data.is_delivery_accuser" class="myradio">
                  <label>同意</label>
                  <input type="radio" value="2" v-model="data.is_delivery_accuser" class="myradio">
                  <label>不同意</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="layui-form-item" pane>
          <label class="layui-form-label">原告电子邮件地址</label>
          <div class="layui-input-block">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <input type="text" v-model="data.email_accuser" placeholder="原告电子邮件地址" autocomplete="off"
                     class="layui-input">
            </div>
          </div>
        </div>

        <div class="layui-form-item">
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.deliveryd_defendant[0].delivery_defendant"
                              :options="$store.state.defendantname" placeholder="请选择被告"
                              style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 90%;float: left;">
                  <input type="radio" v-model="data.deliveryd_defendant[0].is_delivery_defendant" value="1" class="myradio">
                  <label>同意</label>
                  <input type="radio" v-model="data.deliveryd_defendant[0].is_delivery_defendant" value="2" class="myradio">
                  <label>不同意</label>
                </div>
                <button @click="add_component('deliveryd_defendant')" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <label class="layui-form-label">被告电子邮件地址</label>
          <div class="layui-input-block">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <input type="text" v-model="data.deliveryd_defendant[0].email_defendant" placeholder="被告电子邮件地址" autocomplete="off"
                     class="layui-input">
            </div>
          </div>
        </div>
<!--        <div class="layui-form-item">-->
<!--          <input type="text" v-model="data.deliveryd_defendant[0].email_defendant" name="title" placeholder="被告电子邮件地址" autocomplete="off" class="layui-input">-->
<!--        </div>-->

        <template v-for="(item, index) in data.deliveryd_defendant.slice(1)" :key="index">
          <div class="layui-form-item">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.deliveryd_defendant[index+1].delivery_defendant"
                                :options="$store.state.defendantname" placeholder="请选择被告"
                                style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 90%;float: left;">
                    <input type="radio" v-model="data.deliveryd_defendant[index+1].is_delivery_defendant" value="1" class="myradio">
                    <label>同意</label>
                    <input type="radio" v-model="data.deliveryd_defendant[index+1].is_delivery_defendant" value="2" class="myradio">
                    <label>不同意</label>
                  </div>
                  <button @click="delete_component('deliveryd_defendant',1)" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="layui-form-item" pane>
            <label class="layui-form-label">被告电子邮件地址</label>
            <div class="layui-input-block">
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <input type="text" v-model="data.deliveryd_defendant[index+1].email_defendant" placeholder="被告电子邮件地址" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
          </div>
        </template>
      </form>
    </div>
  </div>

</template>

<script>
import VueMultiselect from "vue-multiselect";
export default {
  data() {
    var data;
// if (localStorage.getItem("delivery_form") == null) {
    data = {
      delivery_accuser:'',
      is_delivery_accuser:'1',
      email_accuser:'',
      deliveryd_defendant: [
        {
          delivery_defendant: '',         //问题
          is_delivery_defendant: '1',          //原告简称
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
    VueMultiselect
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "deliveryd_defendant":
          //
          this.data.deliveryd_defendant.push({
            delivery_defendant: "" ,         //问题
            is_delivery_defendant: "1" ,          //原告简称
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