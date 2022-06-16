<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item" pane>
          <label class="layui-form-label">原告类型</label>
          <div class="layui-input-block">
            <div class="myradiomargin">
              <input type="radio" lay-ignore name="accuser_type" v-model="data.accuser_type" value="1"
                     class="myradio"><label>机构</label>
              <input type="radio" name="accuser_type" lay-ignore v-model="data.accuser_type" value="2"
                     class="myradio" style="margin-left: 15px;"><label>个人</label>
            </div>
          </div>
        </div>

        <div v-if="data.accuser_type=='2'">
          <div class="layui-form-item" pane>
            <label class="layui-form-label layui-form-required">原告姓名</label>
            <div class="layui-input-block">
              <input type="text" v-model="plaintiffFullName"  lay-verify="required" placeholder="请输入原告姓名" autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label layui-form-required">原告住址</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.accuser_address" lay-verify="required" placeholder="请输入原告住址" autocomplete="off"
                     class="layui-input">
            </div>
          </div>
          <div class="layui-form-item"  pane>
            <label class="layui-form-label divcenter">原告基本信息</label>
            <div class="layui-input-block">
              <textarea type="text" v-model="data.accuser_info" placeholder="请输入原告基本信息"
                        autocomplete="off" class="layui-input" style="height:80px;line-height:normal"></textarea>
            </div>
          </div>
        </div>
        <div v-if="data.accuser_type=='1'">
          <div class="layui-form-item" pane>
            <label class="layui-form-label">原告全称</label>
            <div class="layui-input-block">
              <input type="text" v-model="plaintiffFullName" lay-verify="required" placeholder="请输入原告全称"   autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label layui-form-required">原告简称</label>
            <div class="layui-input-block">
              <input type="text" v-model="plaintiffShortName" lay-verify="required" placeholder="请输入原告简称"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label">原告地址</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.accuser_address" lay-verify="required" placeholder="请输入原告地址"
                     autocomplete="off" class="layui-input">
            </div>
          </div>

          <div class="layui-form-item" pane>
            <label class="layui-form-label layui-form-required">法人代表</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.accuser_represent"  placeholder="请输入法人代表"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label layui-form-required">法人职务</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.accuser_duty" placeholder="请输入法人职务"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-form-label" style="line-height: 70px">委托诉讼代理人</div>
          <div class="layui-input-block">
            <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
              <input type="text" v-model="data.accuser_agent[0].agent" placeholder="请输入委托诉讼代理人"   autocomplete="off" class="layui-input"
                     style="width: 100%;float: left;" >
            </div>
          </div>
          <div class="layui-input-block" style="margin-top: 5px;" >
            <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
              <input type="text" v-model="data.accuser_agent[0].agent_address"
                     placeholder="请输入委托诉讼代理人单位及职务" autocomplete="off" class="layui-input" style="width: 90%; margin-left:0px;float:left;">
              <button @click="add_component()" type="button" class="layui-btn layui-btn-sm"
                      data-type="text" style="float: right;">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
        </div>

        <template v-for="( item,index) in data.accuser_agent.slice(1)" :key='index'>

          <div class="layui-form-item" pane>
            <div class="layui-form-label" style="line-height: 70px">委托诉讼代理人</div>
            <div class="layui-input-block">

                <input type="text" v-model="data.accuser_agent[index+1].agent" placeholder="请输入委托诉讼代理人"  autocomplete="off" class="layui-input"
                       style="width: 100%;float: left;" >


            </div>
            <div class="layui-input-block" style="margin-top: 5px;">
              <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
                <input type="text" v-model="data.accuser_agent[index+1].agent_address"
                       placeholder="请输入委托诉讼代理人单位及职务" autocomplete="off" class="layui-input" style="width: 90%;float: left;">
                <button @click="delete_component(index+1)" type="button" class="layui-btn layui-btn-sm layui-btn-danger"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </div>

        </template>

        <button type="button" class="layui-btn layui-btn-radius layui-btn-sm" @click="onAddClick"> 添加原告信息</button>
        <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-sm" style="margin-left:5px" v-show="this.index!=0"
                @click="onCloseClick"> 删除原告信息
        </button>
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
      accuser_type: "1",
      accuser_address: '',
      accuser_represent: '',
      accuser_duty: '',
      accuser_info:'',
      accuser_agent:[{agent:"",agent_address: ""}]
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "PlaintiffItems" in wholeItem) {
      var PlaintiffItems = wholeItem.PlaintiffItems
      data = (this.index < PlaintiffItems.length) ? PlaintiffItems[this.index] : data
    }
    return {data: JSON.parse(JSON.stringify(data))}
  },
  computed: {
    plaintiffShortName:{
      get() {
          return this.$store.state.plaintiff_item[this.index].accuser_short
      },
      set(value) {
          this.data.accuser_short = value
          this.$store.commit('handlePlaintiffItem', [value,"accuser_short",this.index])
      }
    },
    plaintiffFullName:{
      get() {
          return this.$store.state.plaintiff_item[this.index].accuser
      },
      set(value) {
          this.data.accuser = value
          this.$store.commit('handlePlaintiffItem', [value, "accuser", this.index])
      }
    }
  },
  methods: {
    add_component(){
      this.data.accuser_agent.push({agent:"",agent_address: ""})
    },
    delete_component(index){
      this.data.accuser_agent.splice(index, 1)
    },
    onCloseClick() {
      // 将删除标签事件暴露除去
      var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      if (wholeItem != null && this.index < wholeItem.PlaintiffItems.length) {
        wholeItem.PlaintiffItems.splice(this.index, 1)
        localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
      }
      this.$store.commit('delete_components', ['plaintiff', this.index])
    },
    onAddClick() {
      // this.$emit("addIndex");
      this.$store.commit('add_components', ['plaintiff'])
    }
  },
  watch: {
    data: {
      handler() {
        if(this.data.accuser_type=="2"){
          this.data.accuser_short=""
        }
        //如何根据数据存储
        if (this.$store.state.court_number == "") {
          window.layui.layer.msg('请优先完善基本信息表格');
        } else {
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.PlaintiffItems[this.index] = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  }
}
</script>