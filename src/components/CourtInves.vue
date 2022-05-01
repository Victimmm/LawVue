<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane" action="" onsubmit="return false">
        <div class="layui-form-item " pane>
          <div class="layui-form-label">
            审判员
          </div>
          <div class="layui-input-block">
            <input type="text" autocomplete="off" class="layui-input"
                   value="下面进行法庭调查，原告陈述诉讼请求和事实理由">
          </div>
        </div>

        <div class="layui-form-item " pane>
          <div class="layui-form-label divcenter">
            原告诉讼请求项
          </div>
          <div class="layui-input-block">
            <!--            <div class="layui-input-inline " style="width: 80%; margin-left:0px;">-->
            <input type="text" v-model="data.accuser_claimitem" placeholder="诉讼请求项" autocomplete="off"
                   class="layui-input">
            <!--              <button @click="add_component('accuser_claims')" type="button"-->
            <!--                      class="layui-btn layui-btn-primary layui-btn-sm"-->
            <!--                      data-type="text" style="float: right;">-->
            <!--                <i class="layui-icon">&#xe654;</i>-->
            <!--              </button>-->
            <!--            </div>-->
          </div>
          <!--          <template v-for="(item, index) in data.accuser_claims.slice(1)" :key='index'>-->
          <!--            <div class="layui-input-block myinput-block">-->

          <!--              <div class="layui-input-inline " style="width: 80%; margin-left:0px;">-->
          <!--                <input type="text" v-model="data.accuser_claims[index+1].claim_item" placeholder="诉讼请求项"-->
          <!--                       autocomplete="off"-->
          <!--                       class="layui-input" style="width: 90%;float: left;">-->
          <!--                <button @click="delete_component('accuser_claims',index+1)" type="button"-->
          <!--                        class="layui-btn layui-btn-primary layui-btn-sm"-->
          <!--                        data-type="text" style="float: right;">-->
          <!--                  <i class="layui-icon">&#xe640;</i>-->
          <!--                </button>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </template>-->
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            事实和理由
          </div>
          <div class="layui-input-block">
            <textarea v-model="data.accuser_claimitem_factreason" placeholder="请输入事实和理由"
                      class="layui-textarea"></textarea>
          </div>
        </div>

        <div class="layui-form-item " pane>
          <div class="layui-form-label">
            审判员
          </div>
          <div class="layui-input-block">
            <input type="text" autocomplete="off" class="layui-input"
                   value="对于原告的诉讼请求及事实理由，被告进行答辩。">
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38" v-model="data.defendant_reply[0].name" :show-labels="false"
                              hideSelected
                              :options="data.defendantname" placeholder="请选择被告"
                              style="line-height: 16px;width: 250px; min-height: 38px"
                              @open="getDefendant"
              ></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.defendant_reply[0].reply_item" placeholder="答辩内容"
                       autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;">
                <button @click="add_component('defendant_reply')" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>

          <template v-for="(item, index) in data.defendant_reply.slice(1)" :key='index'>

            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;margin-top: 5px">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38" v-model="data.defendant_reply[index+1].name"
                                :show-labels="false" hideSelected :options="data.defendantname" placeholder="请选择被告"
                                style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.defendant_reply[index+1].reply_item" placeholder="答辩内容"
                         autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="delete_component('defendant_reply',index+1)" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="layui-form-item" pane>
          <label class="layui-form-label">是否反诉</label>
          <div class="layui-input-block">
            <div class="myradiomargin">
              <input type="radio" name="is_counterclaim" v-model="data.is_counterclaim" @change="getCounterclaim"
                     class="myradio" value="1"
                     title="反诉"><label>反诉</label>
              <input type="radio" name="is_counterclaim" v-model="data.is_counterclaim" @change="getCounterclaim"
                     class="myradio" value="0"
                     title="不反诉" style="margin-left: 15px;"><label>不反诉</label>
            </div>
          </div>
        </div>

        <div v-show="data.is_counterclaim==1">
          <div class="layui-form-item" pane>
            <label class="layui-form-label">
              反诉原告诉讼请求项
            </label>

            <div class="layui-input-block">
              <div class="layui-input-inline " style="width: 80%; margin-left:0px;">
                <input type="text" v-model="data.counterclaim_plaintiff_claimitem" placeholder="诉讼请求项"
                       autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;">
<!--                <button @click="add_component('counterclaim_plaintiff')" type="button"-->
<!--                        class="layui-btn layui-btn-primary layui-btn-sm"-->
<!--                        data-type="text" style="float: right;">-->
<!--                  <i class="layui-icon">&#xe654;</i>-->
<!--                </button>-->
              </div>
            </div>
          </div>

          <div class="layui-form-item" pane>
            <div class="layui-form-label divcenter">
              事实和理由
            </div>
            <div class="layui-input-block">
                <textarea v-model="data.counterclaim_plaintiff_factreason" placeholder="请输入事实和理由"
                          class="layui-textarea"></textarea>
            </div>
          </div>

<!--          <template v-for="(item, index) in data.counterclaim_plaintiff.slice(1)" :key='index'>-->
<!--            <div class="layui-form-item" style="margin-top: 11px;">-->
<!--              <div class="layui-col-md2">-->
<!--                <div class="layui-input-block">-->
<!--                  <label class="layui-form-label">-->
<!--                    <input type="text" v-model="data.counterclaim_plaintiff[index+1].name" placeholder="反诉原告简称"-->
<!--                           class="layui-input"-->
<!--                           style="margin-top: -9px;">-->
<!--                  </label>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="layui-col-md7">-->
<!--                <div class="layui-input-block">-->
<!--                  <input type="text" v-model="data.counterclaim_plaintiff[index+1].claim_item" placeholder="诉讼请求项"-->
<!--                         autocomplete="on" class="layui-input">-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="layui-col-md1">-->
<!--                <button type="button" class="layui-btn layui-btn-primary layui-btn-sm"-->
<!--                        data-type="text" style="height: 38px;" @click="delete_component('counterclaim_plaintiff',1)">-->
<!--                  <i class="layui-icon"> &#xe640;</i>-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </template>-->

          <div class="layui-form-item" pane>
            <label class="layui-form-label">反诉被告今天是否答辩</label>
            <div class="layui-input-block">
              <div class="myradiomargin">
                <input type="radio" name="is_todayreply" v-model="data.is_todayreply" class="myradio" value="1"
                       title="答辩"><label>答辩</label>
                <input type="radio" name="is_todayreply" v-model="data.is_todayreply" class="myradio" value="0"
                       title="不答辩" style="margin-left: 15px;"><label>不答辩</label>
              </div>
            </div>
          </div>

          <div v-show="data.is_todayreply==1">
            <div class="layui-form-item " pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38" v-model="data.counterclaim_defendant_reply[0].name" :show-labels="false" hideSelected
                                  :options="data.plaintiffname" placeholder="请选择反诉被告"
                                  style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <input type="text" v-model="data.counterclaim_defendant_reply[0].reply_item" placeholder="答辩内容"
                           autocomplete="off"
                           class="layui-input" style="width: 90%;float: left;">
                    <button @click="add_component('counterclaim_defendant_reply')" type="button"
                            class="layui-btn layui-btn-primary layui-btn-sm"
                            data-type="text" style="float: right;">
                      <i class="layui-icon">&#xe654;</i>
                    </button>
                  </div>
                </div>
              </div>


              <template v-for="(item, index) in data.counterclaim_defendant_reply.slice(1)" :key='index'>

                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;margin-top: 5px;">
                  <div class="layui-input-inline" style="margin-left:0px ;">
                    <VueMultiselect :option-height="38" v-model="data.counterclaim_defendant_reply[index+1].name"
                                    :show-labels="false" hideSelected
                                    :options="data.plaintiffname" placeholder="请选择反诉被告"
                                    style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <input type="text" v-model="data.counterclaim_defendant_reply[index+1].reply_item" placeholder="答辩内容"
                             autocomplete="off"
                             class="layui-input" style="width: 90%;float: left;">
                      <button @click="delete_component('counterclaim_defendant_reply',index+1)" type="button"
                              class="layui-btn layui-btn-primary layui-btn-sm"
                              data-type="text" style="float: right;">
                        <i class="layui-icon">&#xe640;</i>
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>


        <div class="layui-form-item">
          <div class="layui-input-block">
            <button class="layui-btn" v-on:click.prevent="save_localstorage" style="display: table;margin: 0 auto;">保存
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.css'
import VueMultiselect from 'vue-multiselect'

var data;
data = {
  // accuser_claims: [{accuser_name: "", claim_item: "", fact_reason: ""}],

  accuser_claimitem: "",// 原告诉讼请求
  accuser_claimitem_factreason: "",// 原告诉讼请求的事实及理由
  is_counterclaim: "0",
  defendant_reply: [{name: "", reply_item: ""}],

  counterclaim_plaintiff_claimitem: "",
  counterclaim_plaintiff_factreason: "",
  counterclaim_defendant_reply: [{name: "", reply_item: ""}],

  is_todayreply: "0",

  plaintiffname: [''],
  defendantname: [''],

};

export default {
  data() {
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "CourtInves" in wholeItem) {
      data = wholeItem.CourtInves
      if ("PlaintiffItems" in wholeItem && wholeItem.PlaintiffItems.length > 0) {
        for (var i = 0; i < wholeItem.PlaintiffItems.length; i++) {
          data.plaintiffname[i] = wholeItem.PlaintiffItems[i].accuser
        }
      }
      if ("DefendantItems" in wholeItem && wholeItem.DefendantItems.length > 0) {
        for (var j = 0; j < wholeItem.DefendantItems.length; j++) {
          data.defendantname[j] = wholeItem.DefendantItems[j].defendant
        }
      }
    }

    return {
      data: data
    }
  },
  components: {
    VueMultiselect
  },
  methods: {
    getAccuser() {
      var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      if (wholeItem != null) {
        if ("PlaintiffItems" in wholeItem && wholeItem.PlaintiffItems.length > 0) {
          this.data.plaintiffname = []
          for (var i = 0; i < wholeItem.PlaintiffItems.length; i++) {
            this.data.plaintiffname[i] = wholeItem.PlaintiffItems[i].accuser
          }
        }
      }
    },
    getDefendant() {
      var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      if (wholeItem != null) {
        if ("DefendantItems" in wholeItem && wholeItem.DefendantItems.length > 0) {
          this.data.defendantname = []
          for (var i = 0; i < wholeItem.DefendantItems.length; i++) {
            this.data.defendantname[i] =  wholeItem.DefendantItems[i].defendant
          }
        }
      }
    },
    add_component(datatype) {
      switch (datatype) {
        // case "accuser_claims":
        //   //这里是值对应的处理
        //   this.data.accuser_claims.push({accuser_name: "", claim_item: "", fact_reason: ""})
        //   break
        case "defendant_reply":
          //这里是值对应的处理
          this.data.defendant_reply.push({name: "", reply_item: ""})
          break
        // case "counterclaim_plaintiff":
        //   //这里是值对应的处理
        //   this.data.counterclaim_plaintiff.push({name: "", claim_item: "", fact_reason: ""})
        //   break
        case "counterclaim_defendant_reply":
          //这里是值对应的处理
          this.data.counterclaim_defendant_reply.push({name: "", reply_item: ""})
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "accuser_claims":
          //这里是值对应的处理
          this.data.accuser_claims.splice(index, 1)
          break
        case "defendant_reply":
          //这里是值对应的处理
          this.data.defendant_reply.splice(index, 1)
          break
        case "counterclaim_plaintiff":
          //这里是值对应的处理
          this.data.counterclaim_plaintiff.splice(index, 1)
          break
        case "counterclaim_defendant_reply":
          //这里是值对应的处理
          this.data.counterclaim_defendant_reply.splice(index, 1)
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    save_localstorage() {
      if (this.$store.state.court_number == "") {
        window.layui.layer.msg('请优先完善基本信息表格');
      } else {
        var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
        wholeItem.CourtInves = this.data
        localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
        this.$store.commit("setCounterClaim", this.data.is_counterclaim)
      }
    },
    getCounterclaim() {
      this.$emit('setCounterclaim', this.data.is_counterclaim)
      // console.log(data.is_counterclaim)
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
            wholeItem.CourtInves = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  }
}
</script>