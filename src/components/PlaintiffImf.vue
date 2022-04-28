<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form" action="" onsubmit="return false">
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">原告类型</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="radio" name="accuser_type" v-model="data.accuser_type" value="0" class="myradio" ><label >单位</label>
              <input type="radio" name="accuser_type" v-model="data.accuser_type" value="1" class="myradio"><label >个人</label>
            </div>
          </div>
        </div>

        <div  v-if="data.accuser_type=='1'">
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label layui-form-required">原告姓名</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser" placeholder="请输入原告全称" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label layui-form-required">原告住址</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser_address" placeholder="请输入原告简称" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
        </div>
        <div v-if="data.accuser_type=='0'">
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">原告全称</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser" placeholder="请输入原告全称" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label layui-form-required">原告简称</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser_short" required  lay-verify="required" placeholder="请输入原告简称" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">原告地址</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser_address" required  lay-verify="required" placeholder="请输入原告简称" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>

          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label layui-form-required">法人代表</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser_represent" required  lay-verify="required" placeholder="请输入法人代表" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label layui-form-required">法人职务</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser_duty" required  lay-verify="required" placeholder="请输入法人职务" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
        </div>


        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label" >委托诉讼代理人</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.accuser_agent" placeholder="请输入委托诉讼代理人" autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>
        <div class="layui-form-item" >
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label" >委托诉讼代理人单位</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.accuser_agent_address" required  lay-verify="required" placeholder="请输入委托诉讼代理人单位" autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button type="button" class="layui-btn layui-btn-radius layui-btn-primary" @click="onAddClick"> 添加</button>
            <button type="button" class="layui-btn layui-btn-radius layui-btn-warm" v-show="this.index!=0" @click="onCloseClick"> 删除</button>
            <button type="button" class="layui-btn layui-btn-radius" @click="onSaveClick"> 保存</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script type="text/javascript">


export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data() {

    var data;
    data = {
      accuser: '',
      accuser_short: '',
      accuser_type: "0",
      accuser_address: '',
      accuser_represent: '',
      accuser_duty: '',
      accuser_agent: '',
      accuser_agent_address: '',
    };
    // data.accuser = this.$store.state.plaintiffname[this.index]
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "PlaintiffItems" in wholeItem) {
      var PlaintiffItems = wholeItem.PlaintiffItems
      data=(this.index<PlaintiffItems.length)?PlaintiffItems[this.index]:data
    }
    return {data: JSON.parse(JSON.stringify(data))}
  },
  methods: {
    onSaveClick() {
      if (this.$store.state.court_number == "") {
        window.layui.layer.msg('请优先完善基本信息表格');
      } else {
        this.$store.commit('HandlePlaintiffName', [this.data.accuser, this.index])
        // var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
        // wholeItem.PlaintiffItems[this.index] = this.data
        // localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
      }
      // this.axios
      //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      //     .then(function (response) {
      //       console.log(response);
      //     })
      //     .catch(error => {
      //       console.log(error)
      //       this.errored = true
      //     })


    },
    onCloseClick() {
      // 将删除标签事件暴露除去
      var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      var PlaintiffItems = wholeItem.PlaintiffItems
      if (this.index < PlaintiffItems.length) {
        wholeItem.PlaintiffItems.splice(this.index, 1)
        localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
      }
      this.$emit("deleteIndex", this.index);
      this.$store.commit('delete_components', ['plaintiff', this.index])
    },
    onAddClick() {
      this.$emit("addIndex");
      this.$store.commit('add_components', ['plaintiff'])
    }
  },
  watch: {
    data:{
      handler() {
        //如何根据数据存储
        if (this.$store.state.court_number == "") {
           window.layui.layer.msg('请优先完善基本信息表格');
        }
        else {
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          wholeItem.PlaintiffItems[this.index] = this.data
          localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
        }
      },
      deep: true
    }
  }


}
</script>