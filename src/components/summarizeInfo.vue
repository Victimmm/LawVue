<template>
<div class="layui-card">
  <div class="layui-card-body">
    <div class="layui-form layui-form-pane">
      <div class="layui-form-item" pane>
        <label class="layui-form-label divcenter">审判员陈述</label>
        <div class="layui-input-block">
          <textarea v-model="data.summarize" placeholder="审判员的最后陈述"
                    class="layui-textarea"></textarea>
        </div>
      </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    var data;
    data = {
      summarize:'',
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null &&  "summarizeInfo" in wholeItem){
      data=wholeItem.summarizeInfo
    }
    return {
      data: data,
    };
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
            wholeItem.summarizeInfo = this.data
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