<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item" pane>
          <label class="layui-form-label">第三人类型</label>
          <div class="layui-input-block">
            <div class="myradiomargin">
              <input type="radio" name="plaintiffType" lay-ignore v-model="data.third_party_type" class="myradio" value="1" @change="clear_vuex_third_party_item"
                     ><label>机构</label>
              <input type="radio" name="plaintiffType" lay-ignore v-model="data.third_party_type" class="myradio" value="2" @change="clear_vuex_third_party_item"
                     style="margin-left: 15px;"><label>个人</label>
            </div>
          </div>
        </div>

        <div v-if="data.third_party_type=='2'">
          <div class="layui-form-item" pane>
            <label class="layui-form-label">第三人姓名</label>
            <div class="layui-input-block">
              <input type="text" v-model="third_partyFullName"  placeholder="请输入第三人姓名"  autocomplete="off" class="layui-input">
            </div>
          </div>

          <div class="layui-form-item"  pane>
            <label class="layui-form-label divcenter">第三人基本信息</label>
            <div class="layui-input-block">
              <textarea type="text" v-model="data.third_party_info" placeholder="请输入第三人基本信息"
                        autocomplete="off" class="layui-input" style="height:80px;line-height:normal"></textarea>
            </div>
          </div>
        </div>

        <div v-if="data.third_party_type=='1'">
          <div class="layui-form-item" pane>
            <label class="layui-form-label">第三人全称</label>
            <div class="layui-input-block">
              <input type="text" v-model="third_partyFullName" placeholder="请输入第三人全称"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label">第三人简称</label>
            <div class="layui-input-block">
              <input type="text" v-model="third_partyShortName" placeholder="请输入第三人简称"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label">第三人地址</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.third_party_address" placeholder="请输入第三人地址"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label">法人代表</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.third_party_represent"
                     placeholder="请输入法人代表"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label">法人职务</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.third_party_duty"  placeholder="请输入法人职务"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-form-label" style="line-height: 70px">委托诉讼代理人</div>
          <div class="layui-input-block">
            <input type="text" v-model="data.third_party_agent[0].agent"  placeholder="请输入委托诉讼代理人" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-input-block" style="margin-top: 5px;">
            <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
              <input type="text" v-model="data.third_party_agent[0].agent_address"
                     placeholder="请输入委托诉讼代理人单位及职务" autocomplete="off" class="layui-input" style="width: 90%;float: left;" >
              <button @click="add_component()" type="button" class="layui-btn layui-btn-sm"
                      data-type="text" style="float: right;">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
        </div>

        <template v-for="( item,index) in data.third_party_agent.slice(1)" :key='index'>

          <div class="layui-form-item" pane>
            <div class="layui-form-label" style="line-height: 70px">委托诉讼代理人</div>
            <div class="layui-input-block">

              <input type="text" v-model="data.third_party_agent[index+1].agent" placeholder="请输入委托诉讼代理人" autocomplete="off" class="layui-input"
                     style="width: 100%;float: left;" >
            </div>
            <div class="layui-input-block" style="margin-top: 5px;">
              <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
                <input type="text" v-model="data.third_party_agent[index+1].agent_address"
                       placeholder="请输入委托诉讼代理人单位及职务" autocomplete="off" class="layui-input" style="width: 90%;float: left;">
                <button @click="delete_component(index+1)" type="button" class="layui-btn layui-btn-sm layui-btn-danger"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </div>
        </template>

        <button type="button" class="layui-btn layui-btn-radius  layui-btn-sm" @click="onAddClick"> 添加第三人信息</button>
        <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-sm" style="margin-left:5px"
                @click="onCloseClick"> 删除第三人信息
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
      third_party: '',
      third_party_short: '',
      third_party_type: "1",
      third_party_info:"",
      third_party_address: '',
      third_party_represent: '',
      third_party_duty: '',
      third_party_agent: [{agent:"",agent_address: ''}]
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "thirdPartyInfo" in wholeItem) {
      var thirdPartyInfo = wholeItem.thirdPartyInfo
      data = (this.index < thirdPartyInfo.length) ? thirdPartyInfo[this.index] : data
    }
    return {data: JSON.parse(JSON.stringify(data))}
  },

  computed: {
    third_partyFullName:{
      get() {
        return this.$store.state.third_party_item[this.index].third_party
      },
      set(value) {
        this.data.third_party = value
        this.$store.commit('handlethirdPartyItem', [value,"third_party", this.index])
      }
    },
    third_partyShortName:{
      get() {
        return this.$store.state.third_party_item[this.index].third_party_short
      },
      set(value) {
        this.data.third_party_short = value
        this.$store.commit('handlethirdPartyItem', [value,"third_party_short", this.index])
      }
    }
  },
  methods: {
    add_component(){
      this.data.third_party_agent.push({agent:"",agent_address: ""})
    },
    delete_component(index){
      this.data.third_party_agent.splice(index, 1)
    },
    // clear_vuex_third_party_item(){         //不加这个会导致vuex中数据存乱了
    //   this.$store.state.third_party_item[this.index].third_party_short = ""
    //   this.$store.state.third_party_item[this.index].third_party = ""
    // },
    onCloseClick() {
      if (this.$store.state.third_party_item.length < 2) {
        window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
        return;
      }
      // 将删除标签事件暴露除去
      var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      if (wholeItem != null && this.index < wholeItem.thirdPartyInfo.length) {
        wholeItem.thirdPartyInfo.splice(this.index, 1)
        localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
      }
      this.$store.commit('delete_components', ['third_party', this.index])
    },
    onAddClick() {
      this.$store.commit('add_components', ['third_party'])
    }
  },
  watch: {
    data: {
      handler() {
        if(this.data.third_party_type=="2"){
          this.data.third_party_short=""
        }
        //如何根据数据存储
        if (this.$store.state.court_number == "") {
          // window.layui.layer.msg('请优先完善基本信息表格');
        } else {
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.thirdPartyInfo[this.index] = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  }
}
</script>