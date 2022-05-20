<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item" pane>
          <label class="layui-form-label">被告类型</label>
          <div class="layui-input-block">
            <div class="myradiomargin">
              <input type="radio" name="plaintiffType" v-model="data.defendant_type" class="myradio"
                     value="0"><label>机构</label>
              <input type="radio" name="plaintiffType" v-model="data.defendant_type" class="myradio" value="1"
                     style="margin-left: 15px;"><label>个人</label>
            </div>
          </div>
        </div>

        <div v-if="data.defendant_type=='1'">
          <div class="layui-form-item" pane>
            <label class="layui-form-label">被告姓名</label>
            <div class="layui-input-block">
              <input type="text" v-model="defendantName" placeholder="请输入被告姓名" autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label">被告住址</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.defendant_address" placeholder="请输入被告住址"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>

        <div v-if="data.defendant_type=='0'">
          <div class="layui-form-item" pane>
            <label class="layui-form-label">被告全称</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.defendant" required lay-verify="required" placeholder="请输入被告全称"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label">被告简称</label>
            <div class="layui-input-block">
              <input type="text" v-model="defendantName" placeholder="请输入被告简称"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label">被告地址</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.defendant_address" placeholder="请输入被告地址"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label">法人代表</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.defendant_representative" required lay-verify="required"
                     placeholder="请输入法人代表"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label">法人职务</label>
            <div class="layui-input-block">
              <input type="text" v-model="data.defendant_duty" placeholder="请输入法人职务"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>
        <div class="layui-form-item" pane>
          <label class="layui-form-label">委托诉讼代理人</label>
          <div class="layui-input-block">
            <input type="text" v-model="data.defendant_agent" required lay-verify="required" placeholder="请输入委托诉讼代理人"
                   autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item" pane>
          <label class="layui-form-label">委托诉讼代理人单位</label>
          <div class="layui-input-block">
            <input type="text" v-model="data.defendant_agent_address" required lay-verify="required"
                   placeholder="请输入委托诉讼代理人单位"
                   autocomplete="off" class="layui-input">
          </div>
        </div>

        <div class="layui-form-item">
          <div class="layui-input-block" style="width: 80%;margin-left: 0px;">
            <button type="button" class="layui-btn layui-btn-radius layui-btn-primary" @click="onAddClick"> 添加</button>
            <button type="button" class="layui-btn layui-btn-radius layui-btn-warm" v-show="this.index!=0"
                    @click="onCloseClick"> 删除
            </button>
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
      defendant: '',
      defendant_short: '',
      defendant_type: "0",
      defendant_address: '',
      defendant_representative: '',
      defendant_duty: '',
      defendant_agent: '',
      defendant_agent_address: '',
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "DefendantItems" in wholeItem) {
      var DefendantItems = wholeItem.DefendantItems
      data = (this.index < DefendantItems.length) ? DefendantItems[this.index] : data
    }
    return {data: JSON.parse(JSON.stringify(data))}
  },
  computed: {
    defendantName: {
      get() {
        return this.$store.state.defendantname[this.index]
      },
      set(value) {
        if(this.data.defendant_type == "0"){
          this.data.defendant_short = value
        }
        else
        {
          this.data.defendant = value
        }
        this.$store.commit('handleDefendantName', [value, this.index])
      }
    }
  },
  methods: {
    onCloseClick() {
      // 将删除标签事件暴露除去
      var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      if (wholeItem != null && this.index < wholeItem.DefendantItems.length) {
        wholeItem.DefendantItems.splice(this.index, 1)
        localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
      }
      this.$store.commit('delete_components', ['defendant', this.index])
    },
    onAddClick() {
      this.$store.commit('add_components', ['defendant'])
    }
  },
  watch: {
    data: {
      handler() {
        //如何根据数据存储
        if (this.$store.state.court_number == "") {
          // window.layui.layer.msg('请优先完善基本信息表格');
        } else {
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.DefendantItems[this.index] = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  }
}
</script>