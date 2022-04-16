<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form " action="" onsubmit="return false">
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">审判员:</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" autocomplete="off" class="layui-input"
                   value="下面进行法庭调查，原告陈述诉讼请求和事实理由">
            </div>
          </div>
        </div>
        <div class="layui-form-item" style="margin-top: 11px;">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">
                <input type="text" name="title" placeholder="原告简称" v-model="data.accuser_claims[0].accuser_name"
                   class="layui-input" style="margin-top: -9px;">
              </label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" name="title" v-model="data.accuser_claims[0].claim_item" placeholder="诉讼请求项"
                     autocomplete="on" class="layui-input">
            </div>
          </div>
          <div class="layui-col-md1">
                <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text"
                        style="height: 38px;" @click="add_component('accuser_claims')">
                  <i class="layui-icon">&#xe654;</i>
                </button>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">事实和理由</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
            <textarea v-model="data.accuser_claims[0].fact_reason" placeholder="请输入事实和理由"
                      class="layui-textarea"></textarea>
            </div>
          </div>
        </div>

        <template v-for="(item, index) in data.accuser_claims.slice(1)" :key='index'>
          <div class="layui-form-item" style="margin-top: 11px;">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">
                  <input type="text" name="title" placeholder="原告简称" v-model="data.accuser_claims[index+1].accuser_name"
                         class="layui-input" style="margin-top: -9px;">
                </label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" name="title" v-model="data.accuser_claims[index+1].claim_item" placeholder="诉讼请求项"
                       autocomplete="on" class="layui-input">
              </div>
            </div>
            <div class="layui-col-md1">
              <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text"
                      style="height: 38px;" @click="delete_component('accuser_claims',1)">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">事实和理由</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
            <textarea v-model="data.accuser_claims[0].fact_reason" placeholder="请输入事实和理由"
                      class="layui-textarea"></textarea>
              </div>
            </div>
          </div>
        </template>

        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">审判员:</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" autocomplete="off" class="layui-input"
                   value="对于原告的诉讼请求及事实理由，被告进行答辩。">
            </div>
          </div>
        </div>

        <div class="layui-form-item" style="margin-top: 11px;">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">
                <input type="text" v-model="data.defendant_claims[0].defendant_name" placeholder="被告姓名" class="layui-input"
                       style="margin-top: -9px;">
              </label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.defendant_claims[0].claim_item" placeholder="答辩内容" autocomplete="on"
                     class="layui-input">
            </div>
          </div>
          <div class="layui-col-md1">
            <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text"
                    style="height: 38px;" @click="add_component('defendant_claims')">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>

        <template v-for="(item, index) in data.defendant_claims.slice(1)" :key='index'>
          <div class="layui-form-item" style="margin-top: 11px;">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">
                  <input type="text" v-model="data.defendant_claims[index+1].defendant_name" placeholder="被告姓名" class="layui-input"
                         style="margin-top: -9px;">
                </label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendant_claims[index+1].claim_item" placeholder="答辩内容" autocomplete="on"
                       class="layui-input">
              </div>
            </div>
            <div class="layui-col-md1">
              <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text"
                      style="height: 38px;" @click="delete_component('defendant_claims',1)">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
        </template>

        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
               <label class="layui-form-label">是否反诉</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="radio" name="is_counterclaim" v-model="data.is_counterclaim" class="myradio" value="1"
                     title="反诉"><label>反诉</label>
              <input type="radio" name="is_counterclaim" v-model="data.is_counterclaim" class="myradio" value="0"
                     title="不反诉"><label>不反诉</label>
            </div>
          </div>
        </div>

        <div v-show="data.is_counterclaim==1">
          <div class="layui-form-item" style="margin-top: 11px;">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">
                  <input type="text" v-model="data.counterclaim_plaintiff[0].name" placeholder="反诉原告简称" class="layui-input"
                         style="margin-top: -9px;">
                </label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.counterclaim_plaintiff[0].claim_item" placeholder="诉讼请求项"
                       autocomplete="on" class="layui-input">
              </div>
            </div>
            <div class="layui-col-md1">
                <button id="counterclaimitem_add" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="height: 38px;" @click="add_component('counterclaim_plaintiff')">
                  <i class="layui-icon"> &#xe654;</i>
                </button>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">事实和理由</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <textarea v-model="data.counterclaim_plaintiff[0].fact_reason" placeholder="请输入事实和理由"
                          class="layui-textarea"></textarea>
              </div>
            </div>
          </div>

          <template v-for="(item, index) in data.counterclaim_plaintiff.slice(1)" :key='index'>
            <div class="layui-form-item" style="margin-top: 11px;">
              <div class="layui-col-md2">
                <div class="layui-input-block">
                  <label class="layui-form-label">
                    <input type="text" v-model="data.counterclaim_plaintiff[index+1].name" placeholder="反诉原告简称" class="layui-input"
                           style="margin-top: -9px;">
                  </label>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <input type="text" v-model="data.counterclaim_plaintiff[index+1].claim_item" placeholder="诉讼请求项"
                         autocomplete="on" class="layui-input">
                </div>
              </div>
              <div class="layui-col-md1">
                <button type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="height: 38px;" @click="delete_component('counterclaim_plaintiff',1)">
                  <i class="layui-icon"> &#xe640;</i>
                </button>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-input-block">
                  <label class="layui-form-label">事实和理由</label>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                <textarea v-model="data.counterclaim_plaintiff[index+1].fact_reason" placeholder="请输入事实和理由"
                          class="layui-textarea"></textarea>
                </div>
              </div>
            </div>
          </template>


          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">反诉被告今天是否答辩</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="radio" name="is_todayreply" v-model="data.is_todayreply" class="myradio" value="1"
                       title="答辩"><label>答辩</label>
                <input type="radio" name="is_todayreply" v-model="data.is_todayreply" class="myradio" value="0"
                       title="不答辩"><label>不答辩</label>
              </div>
            </div>
          </div>

          <div v-show="data.is_todayreply==1">
            <div class="layui-form-item" style="margin-top: 11px;">
              <div class="layui-col-md2">
                <div class="layui-input-block">
                  <label class="layui-form-label">
                    <input type="text" v-model="data.counterclaim_defendant[0].name" placeholder="被告姓名" class="layui-input"
                           style="margin-top: -9px;">
                  </label>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <input type="text" v-model="data.counterclaim_defendant[0].reply_item" placeholder="答辩内容"
                         autocomplete="on" class="layui-input">
                </div>
              </div>
              <div class="layui-col-md1">
                <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text"
                        style="height: 38px;" @click="add_component('counterclaim_defendant')">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>
        </div>
            <template v-for="(item, index) in data.counterclaim_defendant.slice(1)" :key='index'>
              <div class="layui-form-item" style="margin-top: 11px;">
                <div class="layui-col-md2">
                  <div class="layui-input-block">
                    <label class="layui-form-label">
                      <input type="text" v-model="data.counterclaim_defendant[index+1].name" placeholder="被告姓名" class="layui-input"
                             style="margin-top: -9px;">
                    </label>
                  </div>
                </div>
                <div class="layui-col-md7">
                  <div class="layui-input-block">
                    <input type="text" v-model="data.counterclaim_defendant[index+1].reply_item" placeholder="答辩内容"
                           autocomplete="on" class="layui-input">
                  </div>
                </div>
                <div class="layui-col-md1">
                  <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text"
                          style="height: 38px;" @click="delete_component('counterclaim_defendant',1)">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>
              </div>
            </template>

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

var data;

if (localStorage.getItem("CourtInves") == null) {
  data = {
    accuser_claims: [{accuser_name: "", claim_item: "", fact_reason: ""}],
    is_counterclaim: "0",
    defendant_claims: [{defendant_name: "", claim_item: "", fact_reason: ""}],
    counterclaim_plaintiff: [{name: "", claim_item: "", fact_reason: ""}],
    is_todayreply: "0",
    counterclaim_defendant: [{name: "", reply_item: ""}]
  };
} else
  data = JSON.parse(localStorage.getItem("CourtInves"));


export default {
  data() {
    return {
      data: data
    }
  },
  components: {
    // AddJudgeChief

  },
  mounted() {
    // let that=this;
    // window.layui.use(['form','laydate'], function(){
    // 	var form = window.layui.form;
    // 	form.on('radio(is_todayreply)', function(value){
    // 		that.data.is_todayreply=value.value;
    // 	})
    // 	form.on('radio(is_counterclaim)', function(value){
    // 		that.data.is_counterclaim=value.value;
    // 	})
    // })
  },
  updated: function () {

  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "accuser_claims":
          //这里是值对应的处理
          this.data.accuser_claims.push({accuser_name: "", claim_item: "", fact_reason: ""})
          break
        case "defendant_claims":
          //这里是值对应的处理
          this.data.defendant_claims.push({defendant_name: "", claim_item: "", fact_reason: ""})
          break
        case "counterclaim_plaintiff":
          //这里是值对应的处理
          this.data.counterclaim_plaintiff.push({name: "", claim_item: "", fact_reason: ""})
          break
        case "counterclaim_defendant":
          //这里是值对应的处理
          this.data.counterclaim_defendant.push({name: "", reply_item: ""})
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
        case "defendant_claims":
          //这里是值对应的处理
          this.data.defendant_claims.splice(index, 1)
          break
        case "counterclaim_plaintiff":
          //这里是值对应的处理
          this.data.counterclaim_plaintiff.splice(index, 1)
          break
        case "counterclaim_defendant":
          //这里是值对应的处理
          this.data.counterclaim_defendant.splice(index, 1)
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    save_localstorage() {
      this.$store.commit("setCounterClaim",this.data.is_counterclaim)
      localStorage.setItem('CourtInves', JSON.stringify(this.data))
    }
  }
}
</script>