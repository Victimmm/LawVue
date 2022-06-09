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
          <div class="layui-form-label" style="line-height: 70px">
            原告诉讼请求项
          </div>
          <div class="layui-input-block">
            <!--            <div class="layui-input-inline " style="width: 80%; margin-left:0px;">-->
            <textarea  v-model="data.accuser_claim_item" placeholder="请输入诉讼请求项"  autocomplete="off"
                       class="layui-textarea"></textarea>
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
          <div class="layui-form-label" style="line-height: 70px">
            事实和理由
          </div>
          <div class="layui-input-block">
            <textarea v-model="data.accuser_claim_fact_reason"  placeholder="请输入事实和理由"
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
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
            <div class="layui-input-inline" style="margin-left:0px ;" >
              <VueMultiselect :option-height="38"  v-model="data.defendant_reply[0].name" :show-labels="false"
                              :options="getDefendantName" placeholder="请选择被告"
                              :taggable="true"
                              style="line-height: 16px;width: 210px; min-height: 38px"
              ></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div " >
                <input type="text" v-model="data.defendant_reply[0].content"  placeholder="请输入答辩内容"
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

            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top: 5px">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38" v-model="data.defendant_reply[index+1].name"
                                :show-labels="false" :options="getDefendantName" placeholder="请选择被告"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.defendant_reply[index+1].content" placeholder="请输入答辩内容"
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
              <input type="radio" name="is_counterclaim" lay-ignore="" v-model="data.is_counterclaim"
                     class="myradio" value="1"
                     title="反诉" @change="setCourterClaim()"><label>反诉</label>
              <input type="radio" name="is_counterclaim" lay-ignore="" v-model="data.is_counterclaim"
                     class="myradio" value="2"
                     title="不反诉" style="margin-left: 15px;" @change="setCourterClaim()"><label>不反诉</label>
            </div>
          </div>
        </div>

        <div v-if="data.is_counterclaim==1">
          <div class="layui-form-item" pane>
            <div class="layui-form-label" style="line-height: 80px">
              反诉原告诉讼请求项
            </div>
            <div class="layui-input-block" contenteditable="true">
              <textarea v-model="data.counterclaim_accuser_claim_item" placeholder="请输入诉讼请求项"
                        class="layui-textarea" style="height:40px"></textarea>
<!--                <button @click="add_component('counterclaim_plaintiff')" type="button"-->
<!--                        class="layui-btn layui-btn-primary layui-btn-sm"-->
<!--                        data-type="text" style="float: right;">-->
<!--                  <i class="layui-icon">&#xe654;</i>-->
<!--                </button>-->
            </div>
          </div>

          <div class="layui-form-item" pane>
            <div class="layui-form-label" style="line-height: 80px">
              事实和理由
            </div>
            <div class="layui-input-block">
                <textarea v-model="data.counterclaim_accuser_fact_reason" placeholder="请输入事实和理由" 
                          class="layui-textarea"></textarea>
            </div>
          </div>

          <div class="layui-form-item" pane>
            <label class="layui-form-label">反诉被告今天是否答辩</label>
            <div class="layui-input-block">
              <div class="myradiomargin">
                <input type="radio" lay-ignore="" name="counterclaim_defendant_today_is_reply" v-model="data.counterclaim_defendant_today_is_reply" class="myradio" value="1"
                       title="答辩" @change="setIsTodayReply"><label>答辩</label>
                <input type="radio" lay-ignore="" name="counterclaim_defendant_today_is_reply" v-model="data.counterclaim_defendant_today_is_reply" class="myradio" value="2"
                       title="不答辩" @change="setIsTodayReply" style="margin-left: 15px;"><label>不答辩</label>
              </div>
            </div>
          </div>

          <div v-if="data.counterclaim_defendant_today_is_reply==1">
            <div class="layui-form-item " pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38" v-model="data.counterclaim_defendant_reply[0].name" :show-labels="false"
                                  :options="getAccuserName" placeholder="请选择反诉被告"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <input type="text" v-model="data.counterclaim_defendant_reply[0].content"  placeholder="请输入答辩内容"
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

                <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top: 5px;">
                  <div class="layui-input-inline" style="margin-left:0px ;">
                    <VueMultiselect :option-height="38" v-model="data.counterclaim_defendant_reply[index+1].name"
                                    :show-labels="false"
                                    :options="getAccuserName" placeholder="请选择反诉被告"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <input type="text" v-model="data.counterclaim_defendant_reply[index+1].content" placeholder="请输入答辩内容"
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
      </form>
    </div>
  </div>
</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.css'
import VueMultiselect from 'vue-multiselect'

var data;
data = {
  accuser_claim_item: "",// 原告诉讼请求
  accuser_claim_fact_reason: "",// 原告诉讼请求的事实及理由
  is_counterclaim: "2",
  defendant_reply: [{name: "", content: ""}],
  counterclaim_accuser_claim_item: "",
  counterclaim_accuser_fact_reason: "",
  counterclaim_defendant_reply: [{name: "", content: ""}],
  counterclaim_defendant_today_is_reply: "1",
};

export default {
  data() {
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "CourtInves" in wholeItem) {
      data = wholeItem.CourtInves
    }
    return {
      data: data
    }
  },
  components: {
    VueMultiselect
  },
  computed:{
    getDefendantName:{
      get(){
        return this.$store.state.defendant_item.map(e => e.defendant_short==''?e.defendant:e.defendant_short).filter(i => i && i.trim())
      }
    },
    getAccuserName:{
      get(){
        return this.$store.state.plaintiff_item.map(e => e.accuser_short==''?e.accuser:e.accuser_short).filter(i => i && i.trim())
      }
    }
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        // case "accuser_claims":
        //   //这里是值对应的处理
        //   this.data.accuser_claims.push({accuser_name: "", claim_item: "", fact_reason: ""})
        //   break
        case "defendant_reply":
          //这里是值对应的处理
          this.data.defendant_reply.push({name: "", content: ""})
          break
        // case "counterclaim_plaintiff":
        //   //这里是值对应的处理
        //   this.data.counterclaim_plaintiff.push({name: "", claim_item: "", fact_reason: ""})
        //   break
        case "counterclaim_defendant_reply":
          //这里是值对应的处理
          this.data.counterclaim_defendant_reply.push({name: "", content: ""})
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        // case "accuser_claims":
        //   //这里是值对应的处理
        //   this.data.accuser_claims.splice(index, 1)
        //   break
        case "defendant_reply":
          //这里是值对应的处理
          this.data.defendant_reply.splice(index, 1)
          break
        // case "counterclaim_plaintiff":
        //   //这里是值对应的处理
        //   this.data.counterclaim_plaintiff.splice(index, 1)
        //   break
        case "counterclaim_defendant_reply":
          //这里是值对应的处理
          this.data.counterclaim_defendant_reply.splice(index, 1)
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    setIsTodayReply() {
      this.$store.commit("setIsTodayReply", this.data.counterclaim_defendant_today_is_reply)
      // console.log(data.is_counterclaim)
    },
    setCourterClaim(){
      this.$store.commit("setIsCourtClaim", this.data.is_counterclaim)
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