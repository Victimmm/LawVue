
<template>
  <div class="layui-card">
    <div class="layui-card-body>">
    <form class="layui-form">
      <div class="layui-form-item">
        <div class="layui-col-md2">
          <div class="layui-input-block">
            <label class="layui-form-label" style="text-align: center">审判员</label>
          </div>
        </div>
        <div class="layui-col-md7">
          <div class="layui-input-block">
            <textarea type="text" class="layui-input ">下面进行举证质证，首先原告进行举证</textarea>
          </div>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-col-md2">
          <div class="layui-input-block">
            <input type="text" v-model="data.accshowd_evidence[0].accshow_evidence" placeholder="证据名称" autocomplete="off"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-col-md7">
          <div class="layui-input-block">
            <input type="text" v-model="data.accshowd_evidence[0].accshow_content" placeholder="证明事项" autocomplete="off"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-col-md1">
          <button  v-on:click="add_component('accshowd_evidence')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                   data-type="text">
            <i class="layui-icon">&#xe654;</i>
          </button>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-col-md2">
          <div class="layui-input-block">
            <label class="layui-form-label" style="text-align: center">事实和理由</label>
          </div>
        </div>
        <div class="layui-col-md7">
          <div class="layui-input-block">
            <textarea v-model="data.accshowd_evidence[0].accshow_content" placeholder="理由" class="layui-textarea"></textarea>
          </div>
        </div>
      </div>
      <hr>
  <template v-for="(item, index) in data.accshowd_evidence.slice(1)" :key="index">
  <div class="layui-card">
    <div class="layui-card-body>">
      <div class="layui-form-item">
        <div class="layui-col-md2">
          <div class="layui-input-block">
            <label class="layui-form-label" style="text-align: center">审判员</label>
          </div>
        </div>
        <div class="layui-col-md7">
          <div class="layui-input-block">
            <textarea type="text" class="layui-input ">下面进行举证质证，首先原告进行举证</textarea>
          </div>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-col-md2">
          <div class="layui-input-block">
            <input type="text" v-model="data.accshowd_evidence[index+1].accshow_evidence" placeholder="证据名称" autocomplete="off"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-col-md7">
          <div class="layui-input-block">
            <input type="text" v-model="data.accshowd_evidence[index+1].accshow_content" placeholder="证明事项" autocomplete="off"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-col-md1">
          <button  v-on:click="delete_component('accshowd_evidence',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                   data-type="text">
            <i class="layui-icon">&#xe640;</i>
          </button>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-col-md2">
          <div class="layui-input-block">
            <label class="layui-form-label" style="text-align: center">事实和理由</label>
          </div>
        </div>
        <div class="layui-col-md7">
          <div class="layui-input-block">
            <textarea v-model="data.accshowd_evidence[index+1].accshow_content" placeholder="理由" class="layui-textarea"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
    <hr>
  </template>
<div class="layui-card">
  <div class="layui-card-body>">
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-input-block">
          <label class="layui-form-label" style="text-align: center">审判员</label>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <textarea type="text" class="layui-input">被告对原告提交的证据进行质证</textarea>
        </div>
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-input-block">
          <input type="text" v-model="data.accshowd_query_evidence[0].accshow_defendant" placeholder="被告姓名" autocomplete="off" class="layui-input"/>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <input type="text" v-model="data.accshowd_query_evidence[0].accshow_query_evidence" placeholder="证据名称" autocomplete="off" class="layui-input"/>
        </div>
      </div>
      <div class="layui-col-md1">
        <button v-on:click="add_component('accshowd_query_evidence')" type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text">
          <i class="layui-icon">&#xe654;</i>
        </button>
      </div>
    </div>
    <hr>
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-form-item">
          <div class="layui-input-inline">
            <div class="layui-col-lg-offset4">
              <label class="layui-form-label">真实性</label>
            </div>
            <div class="layui-col-lg-offset3">
            <div class="layui-row">
              <input type="radio" value="true" v-model="data.accshowd_query_evidence[0].accshow_facticity" class="myradio" style="margin-top:10px"/>
              <label class="layui-form-label">是</label>
              <div class="layui-row">
                <input type="radio" value="false" v-model="data.accshowd_query_evidence[0].accshow_facticity" class="myradio" style="margin-top:10px"/>
                <label class="layui-form-label">否</label>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <textarea v-model="data.accshowd_query_evidence[0].accshow_query_facticity" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
        </div>
      </div>
    </div>
    <hr>
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-form-item">
          <div class="layui-input-inline">
            <div class="layui-col-lg-offset4">
              <label class="layui-form-label">合法性</label>
            </div>
            <div class="layui-col-lg-offset3">
              <div class="layui-row">
                <input type="radio" value="true" v-model="data.accshowd_query_evidence[0].accshow_legality" class="myradio" style="margin-top:10px"/>
                <label class="layui-form-label">是</label>
                <div class="layui-row">
                  <input type="radio" value="false" v-model="data.accshowd_query_evidence[0].accshow_legality" class="myradio" style="margin-top:10px"/>
                  <label class="layui-form-label">否</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <textarea v-model="data.accshowd_query_evidence[0].accshow_query_legality" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
        </div>
      </div>
    </div>
    <hr>
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-form-item">
          <div class="layui-input-inline">
            <div class="layui-col-lg-offset4">
              <label class="layui-form-label">相关性</label>
            </div>
            <div class="layui-col-lg-offset3">
              <div class="layui-row">
                <input type="radio" value="true" v-model="data.accshowd_query_evidence[0].accshow_relevance" class="myradio" style="margin-top:10px"/>
                <label class="layui-form-label">是</label>
                <div class="layui-row">
                  <input type="radio" value="false" v-model="data.accshowd_query_evidence[0].accshow_relevance" class="myradio" style="margin-top:10px"/>
                  <label class="layui-form-label">否</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <textarea v-model="data.accshowd_query_evidence[0].accshow_query_relevace" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
        </div>
      </div>
    </div>
  </div>
</div>
      <hr>
  <template v-for="(item, index) in data.accshowd_query_evidence.slice(1)" :key="index">
<div class="layui-card">
  <div class="layui-card-body">
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-input-block">
          <input type="text" v-model="data.accshowd_query_evidence[index+1].accshow_defendant" placeholder="被告姓名" autocomplete="off" class="layui-input"/>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <input type="text" v-model="data.accshowd_query_evidence[index+1].accshow_query_evidence" placeholder="证据名称" autocomplete="off" class="layui-input"/>
        </div>
      </div>
      <div class="layui-col-md1">
        <button v-on:click="delete_component('accshowd_query_evidence',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm" data-type="text">
          <i class="layui-icon">&#xe640;</i>
        </button>
      </div>
    </div>
    <hr>
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-form-item">
          <div class="layui-input-inline">
            <div class="layui-col-lg-offset4">
              <label class="layui-form-label">真实性</label>
            </div>
            <div class="layui-col-lg-offset3">
              <div class="layui-row">
                <input type="radio" value="true" v-model="data.accshowd_query_evidence[index+1].accshow_facticity" class="myradio" style="margin-top:10px"/>
                <label class="layui-form-label">是</label>
                <div class="layui-row">
                  <input type="radio" value="false" v-model="data.accshowd_query_evidence[index+1].accshow_facticity" class="myradio" style="margin-top:10px"/>
                  <label class="layui-form-label">否</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <textarea v-model="data.accshowd_query_evidence[index+1].accshow_query_facticity" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
        </div>
      </div>
    </div>
    <hr>
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-form-item">
          <div class="layui-input-inline">
            <div class="layui-col-lg-offset4">
              <label class="layui-form-label">合法性</label>
            </div>
            <div class="layui-col-lg-offset3">
              <div class="layui-row">
                <input type="radio" value="true" v-model="data.accshowd_query_evidence[index+1].accshow_legality" class="myradio" style="margin-top:10px"/>
                <label class="layui-form-label">是</label>
                <div class="layui-row">
                  <input type="radio" value="false" v-model="data.accshowd_query_evidence[index+1].accshow_legality" class="myradio" style="margin-top:10px"/>
                  <label class="layui-form-label">否</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <textarea v-model="data.accshowd_query_evidence[index+1].accshow_query_legality" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
        </div>
      </div>
    </div>
    <hr>
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-form-item">
          <div class="layui-input-inline">
            <div class="layui-col-lg-offset4">
              <label class="layui-form-label">相关性</label>
            </div>
            <div class="layui-col-lg-offset3">
              <div class="layui-row">
                <input type="radio" value="true" v-model="data.accshowd_query_evidence[index+1].accshow_relevance" class="myradio" style="margin-top:10px"/>
                <label class="layui-form-label">是</label>
                <div class="layui-row">
                  <input type="radio" value="false" v-model="data.accshowd_query_evidence[index+1].accshow_relevance" class="myradio" style="margin-top:10px"/>
                  <label class="layui-form-label">否</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <textarea v-model="data.accshowd_query_evidence[index+1].accshow_query_relevace" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
        </div>
      </div>
    </div>
    <hr>
  </div>
</div>
  </template>
  <div class="layui-card">
    <div class="layui-card-body">
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
        </div>
      </div>
    </div>
  </div>
  </form>
</div>
</div>
</template>

<script>
var data;
if (localStorage.getItem("accshow_form") == null) {
  data = {
    //第一个动态生成的json accshowd_evidence 包含以下3个信息
    accshowd_evidence: [
      {
        accshow_evidence: "" , //证据名称(原告举证表 原告提出)
        accshow_content: "" , //证明事项(原告举证表 原告提出)
        accshow_fact_reason:"" , //事实和理由(被告质证)
      },
    ],
    //第二个动态生成的json accshod_query_evidence 包含以下10个信息
    accshowd_query_evidence: [
      {
        accshow_content: "" , //证明事项
        accshow_fact_reason: "" , //事实和理由
        accshow_defendant: "" , //被告姓名
        accshow_query_relevace: "" , //关联性理由
        accshow_facticity: "true" , //真实性
        accshow_legality: "true", //合法性
        accshow_relevance: "true", //关联性
        accshow_query_evidence: "" , //证据名称 （被告质证）
        accshow_query_facticity: "" , //真实性理由
        accshow_query_legality: "" , //合法性理由
      },
    ],
  };
} else data = JSON.parse(localStorage.getItem("accshow_form"));
console.log(data);
export default {
  data() {
    return {
      data: data,
    };
  },
  mount(){

  },

  components: {
    // AddJudgeChief
  },
  methods: {
    updated:function(){

    },
    add_component(datatype) {
      switch (datatype) {
        case "accshowd_evidence":
          //accshowd_evidence 模块的数据加入
          this.data.accshowd_evidence.push({
            accshow_evidence: "" , //证据名称(原告举证表 原告提出)
            accshow_content: "" , //证明事项(原告举证表 原告提出)
            accshow_fact_reason:"" , //事实和理由(被告质证)
          });
          break;
        case "accshowd_query_evidence":
          //这里是值对应的处理
          this.data.accshowd_query_evidence.push({
            accshow_content: "" , //证明事项
            accshow_fact_reason: "" , //事实和理由
            accshow_defendant: "" , //被告姓名
            accshow_query_evidence: "" , //证据名称 （被告质证）
            accshow_query_facticity: "" , //真实性理由
            accshow_query_legality: "" , //合法性理由
            accshow_query_relevace: "" , //关联性理由
            accshow_facticity: "false" , //真实性
            accshow_legality: "true", //合法性
            accshow_relevance: "false", //关联性
          });
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "accshowd_evidence":
          //这里是值对应的处理
          this.data.accshowd_evidence.splice(index, 1);
          break;
        case "accshowd_query_evidence":
          //这里是值对应的处理
          this.data.accshowd_query_evidence.splice(index, 1);
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    save_localstorage() {
      localStorage.setItem("accshow_form", JSON.stringify(this.data));
    },
  },
};
</script>


<style type="text/css">
.layui-table-cell {
  height: auto;
  line-height: 28px;
  margin-top: 15px;
}
</style>
