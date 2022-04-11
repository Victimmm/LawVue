
<template v-show="data.is_counterclaim==1">
  <h1 style="text-align: center">法庭调查-原告举证</h1>
  <hr />
  <div id="accshowd_evidence">
    <div id="form_ofAccuserEvidence">
      <div class="layui-row">
        <div class="layui-col-md3">
          <div class="layui-card-header layui-table-cell">
            <input
              type="text"
              value="审判员"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-col-md7">
          <div class="layui-card-header layui-table-cell">
            <input
              type="text"
              class="layui-input"
              value="下面进行举证质证，首先原告进行举证"
            />
          </div>
        </div>
      </div>
      <div class="layui-row">
        <div class="layui-col-md3">
          <div class="layui-card-header layui-table-cell">
            <input
              type="text"
              id="accshow_evidence"
              v-model="data.accshowd_evidence[0].accshow_evidence.name"
              name="accshow_evidence"
              placeholder="证据名称1"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-col-md7">
          <div class="layui-card-header layui-table-cell">
            <input
              type="text"
              id="accshow_content"
              v-model="data.accshowd_evidence[0].accshow_content.name"
              name="accshow_content"
              placeholder="证明事项"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-col-md1">
          <div class="layui-form-item layui-table-cell">
            <button
              id="button_ofAccuserEvidence"
              v-on:click="add_component('accshowd_evidence')"
              type="button"
              class="layui-btn layui-btn-primary layui-btn-sm"
              data-type="text"
            >
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>
      </div>
      <div class="layui-row">
        <div class="layui-col-md3">
          <div class="layui-card-header layui-form-item layui-table-cell">
            <input type="text" class="layui-input" value="事实和理由" />
          </div>
        </div>
        <div class="layui-col-md7">
          <div class="layui-row">
            <textarea
              id="accshow_fact_reason"
              v-model="data.accshowd_evidence[0].accshow_fact_reason.name"
              name="accshow_fact_reason"
              placeholder="理由"
              class="layui-textarea"
              style="margin-right: 50px; left: 20px"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />

  <template
    v-for="(item, index) in data.accshowd_evidence.slice(1)"
    :key="index"
  >
    <div class="layui-row">
      <div class="layui-col-md3">
        <div class="layui-card-header layui-table-cell">
          <input
            type="text"
            v-model="data.accshowd_evidence[index + 1].accshow_evidence.name"
            placeholder="证据名称"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-card-header layui-table-cell">
          <input
            type="text"
            v-model="data.accshowd_evidence[index + 1].accshow_content.name"
            placeholder="证明事项"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-col-md1">
        <div class="layui-form-item layui-table-cell">
          <button
            v-on:click="delete_component('accshowd_evidence', index + 1)"
            type="button"
            class="layui-btn layui-btn-primary layui-btn-sm"
            data-type="text"
          >
            <i class="layui-icon">&#xe640;</i>
          </button>
        </div>
      </div>
    </div>
    <div class="layui-row">
      <div class="layui-col-md3">
        <div class="layui-card-header layui-form-item layui-table-cell">
          <input type="text" class="layui-input" value="事实和理由" />
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-row">
          <textarea
            v-model="data.accshowd_evidence[index + 1].accshow_fact_reason.name"
            name="accshow_fact_reason"
            placeholder="理由"
            class="layui-textarea"
            style="margin-right: 50px; left: 20px"
          ></textarea>
        </div>
      </div>
    </div>
    <hr />
  </template>

  <div id="accshowd_query_evidence">
    <table class="layui-table">
      <tr>
        <td style="text-align: center">审判员</td>
        <td>
          <textarea type="text" class="layui-input">
被告对原告提交的证据进行质证</textarea
          >
        </td>
      </tr>
      <tr>
        <td width="30%">
          <div class="layui-card-header">
            <input
              type="text"
              v-model="data.accshowd_query_evidence[0].accshow_defendant.name"
              placeholder="被告姓名"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </td>
        <td width="70%">
          <div class="layui-input-row">
            <div class="layui-col-md9">
              <div class="layui-card-header">
                <input
                  type="text"
                  v-model="
                    data.accshowd_query_evidence[0].accshow_query_evidence.name
                  "
                  placeholder="证据名称1"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>
            <div class="layui-col-md3">
              <button
                v-on:click="add_component('accshowd_query_evidence')"
                type="button"
                class="layui-btn layui-btn-primary layui-btn-sm"
                data-type="text"
              >
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="30%">
          <div class="layui-form-item">
            <div class="layui-input-inline">
            <label class="layui-form-label">真实性</label>
            <div class="site-title">
              <div class="layui-row">
                <div class="layui-row">
                <label class="layui-form-label">是</label>
                <input
                  type="radio"
                  value="true"
                  v-model="
                    data.accshowd_query_evidence[0].accshow_facticity.name
                  "
                  name="accshow_facticity0"
                  lay-filter="accshow_facticity"
                  title="是"
                  style="margin-top:15px"

                />
                </div>
                <div class="layui-row">
                <label class="layui-form-label">否</label>
                <input
                  type="radio"
                  value="false"
                  v-model="
                    data.accshowd_query_evidence[0].accshow_facticity.name
                  "
                  name="accshow_facticity1"
                  lay-filter="accshow_facticity0"
                  title="否"
                  style="margin-top:15px"

                />
                </div>
              </div>
            </div>
            </div>
          </div>
        </td>
        <td width="70%">
          <div class="layui-col-md10">
            <div class="layui-input-row">
              <textarea
                v-model="
                  data.accshowd_query_evidence[0].accshow_query_facticity.name
                "
                id="accshow_query_facticity1"
                placeholder="理由"
                class="layui-textarea"
              ></textarea>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="30%">
          <div class="layui-form-item">
            <div class="layui-input-inline">
              <label class="layui-form-label">合法性</label>
              <div class="site-title">
                <div class="layui-row">
                  <div class="layui-row">
                    <label class="layui-form-label">是</label>
                    <input
                        type="radio"
                        value="true"
                        v-model="
                    data.accshowd_query_evidence[0].accshow_legality.name
                  "
                        name="accshow_legality0"
                        lay-filter="accshow_legality"
                        title="是"
                        style="margin-top:15px"

                    />
                  </div>
                  <div class="layui-row">
                    <label class="layui-form-label">否</label>
                    <input
                        type="radio"
                        value="false"
                        v-model="
                    data.accshowd_query_evidence[0].accshow_legality.name
                  "
                        name="accshow_legality"
                        lay-filter="accshow_legality0"
                        title="否"
                        style="margin-top:15px"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td width="70%">
          <div class="layui-col-md10">
            <div class="layui-input-row">
              <textarea
                v-model="
                  data.accshowd_query_evidence[0].accshow_query_legality.name
                "
                id="accshow_query_legality1"
                placeholder="理由"
                class="layui-textarea"
              ></textarea>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="30%">
          <div class="layui-form-item">
            <div class="layui-input-inline">
              <label class="layui-form-label">关联性</label>
              <div class="site-title">
                <div class="layui-row">
                  <div class="layui-row">
                    <label class="layui-form-label">是</label>
                    <input
                        type="radio"
                        value="true"
                        v-model="
                    data.accshowd_query_evidence[0].accshow_relevance.name
                  "
                        name="accshow_relevance0"
                        lay-filter="accshow_relevance"
                        title="是"
                        style="margin-top:15px"

                    />
                  </div>
                  <div class="layui-row">
                    <label class="layui-form-label">否</label>
                    <input
                        type="radio"
                        value="false"
                        v-model="
                    data.accshowd_query_evidence[0].accshow_relevance.name
                  "
                        name="accshow_relevance0"
                        lay-filter="accshow_relevance"
                        title="否"
                        style="margin-top:15px"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td width="70%">
          <div class="layui-col-md10">
            <div class="layui-input-row">
              <textarea
                v-model="
                  data.accshowd_query_evidence[0].accshow_query_relevace.name
                "
                id="accshow_query_relevace1"
                placeholder="理由"
                class="layui-textarea"
              ></textarea>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <template
    v-for="(item, index) in data.accshowd_query_evidence.slice(1)"
    :key="index"
  >
    <table class="layui-table">
      <tr>
        <td style="text-align: center">审判员</td>
        <td>
          <textarea type="text" class="layui-input">
被告对原告提交的证据进行质证</textarea
          >
        </td>
      </tr>
      <tr>
        <td width="30%">
          <div class="layui-card-header">
            <input
              type="text"
              v-model="
                data.accshowd_query_evidence[index + 1].accshow_defendant.name
              "
              placeholder="被告姓名"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </td>
        <td width="70%">
          <div class="layui-input-row">
            <div class="layui-col-md9">
              <div class="layui-card-header">
                <input
                  type="text"
                  v-model="
                    data.accshowd_query_evidence[index + 1]
                      .accshow_query_evidence.name
                  "
                  placeholder="证据名称1"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>
            <div class="layui-col-md3">
              <button
                v-on:click="
                  delete_component('accshowd_query_evidence', index + 1)
                "
                type="button"
                class="layui-btn layui-btn-primary layui-btn-sm"
                data-type="text"
              >
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="30%">
          <div class="layui-form-item">
            <div class="layui-input-inline">
              <label class="layui-form-label">真实性</label>
              <div class="site-title">
                <div class="layui-row">
                  <div class="layui-row">
                    <label class="layui-form-label">是</label>
                    <input
                        type="radio"
                        value="true"
                        v-model="
                    data.accshowd_query_evidence[index+1].accshow_facticity.name
                  "
                        lay-filter="accshow_facticity"
                        title="是"
                        style="margin-top:15px"

                    />
                  </div>
                  <div class="layui-row">
                    <label class="layui-form-label">否</label>
                    <input
                        type="radio"
                        value="false"
                        v-model="
                    data.accshowd_query_evidence[index+1].accshow_facticity.name
                  "
                        lay-filter="accshow_facticity"
                        title="否"
                        style="margin-top:15px"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td width="70%">
          <div class="layui-col-md10">
            <div class="layui-input-row">
              <textarea
                v-model="
                  data.accshowd_query_evidence[index + 1]
                    .accshow_query_facticity.name
                "
                placeholder="理由"
                class="layui-textarea"
              ></textarea>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="30%">
          <div class="layui-form-item">
            <div class="layui-input-inline">
              <label class="layui-form-label">合法性</label>
              <div class="site-title">
                <div class="layui-row">
                  <div class="layui-row">
                    <label class="layui-form-label">是</label>
                    <input
                        type="radio"
                        value="true"
                        v-model="
                    data.accshowd_query_evidence[index+1].accshow_legality.name
                  "
                        lay-filter="accshow_legality"
                        title="是"
                        style="margin-top:15px"

                    />
                  </div>
                  <div class="layui-row">
                    <label class="layui-form-label">否</label>
                    <input
                        type="radio"
                        value="false"
                        v-model="
                    data.accshowd_query_evidence[index+1].accshow_legality.name
                  "
                        lay-filter="accshow_legality"
                        title="否"
                        style="margin-top:15px"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td width="70%">
          <div class="layui-col-md10">
            <div class="layui-input-row">
              <textarea
                v-model="
                  data.accshowd_query_evidence[index + 1].accshow_query_legality
                    .name
                "
                placeholder="理由"
                class="layui-textarea"
              ></textarea>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="30%">
          <div class="layui-form-item">
            <div class="layui-input-inline">
              <label class="layui-form-label">关联性</label>
              <div class="site-title">
                <div class="layui-row">
                  <div class="layui-row">
                    <label class="layui-form-label">是</label>
                    <input
                        type="radio"
                        value="true"
                        v-model="
                    data.accshowd_query_evidence[index+1].accshow_relevance.name
                  "
                        lay-filter="accshow_relevance"
                        title="是"
                        style="margin-top:15px"

                    />
                  </div>
                  <div class="layui-row">
                    <label class="layui-form-label">否</label>
                    <input
                        type="radio"
                        value="false"
                        v-model="
                    data.accshowd_query_evidence[index+1].accshow_relevance.name
                  "
                        lay-filter="accshow_relevance"
                        title="否"
                        style="margin-top:15px"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td width="70%">
          <div class="layui-col-md10">
            <div class="layui-input-row">
              <textarea
                v-model="
                  data.accshowd_query_evidence[index + 1].accshow_query_relevace
                    .name
                "
                placeholder="理由"
                class="layui-textarea"
              ></textarea>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </template>
  <button
    type="button"
    @click.prevent="save_localstorage"
    class="layui-btn layui-btn-primary center;"
  >
    暂存
  </button>
  <button type="button" class="layui-btn text-align: center;">保存</button>
  <hr />
</template>

<script>
var data;
if (localStorage.getItem("accshow_form") == null) {
  data = {
    //第一个动态生成的json accshowd_evidence 包含以下3个信息
    accshowd_evidence: [
      {
        accshow_evidence: { name: "" }, //证据名称(原告举证表 原告提出)
        accshow_content: { name: "" }, //证明事项(原告举证表 原告提出)
        accshow_fact_reason: { name: "" }, //事实和理由(被告质证)
      },
    ],
    //第二个动态生成的json accshod_query_evidence 包含以下10个信息
    accshowd_query_evidence: [
      {
        accshow_content: { name: "" }, //证明事项
        accshow_fact_reason: { name: "" }, //事实和理由
        accshow_defendant: { name: "" }, //被告姓名
        accshow_query_evidence: { name: "" }, //证据名称 （被告质证）
        accshow_query_facticity: { name: "" }, //真实性理由
        accshow_query_legality: { name: "" }, //合法性理由
        accshow_query_relevace: { name: "" }, //关联性理由
        accshow_facticity: { name: "false" }, //真实性
        accshow_legality: { name: "true" }, //合法性
        accshow_relevance: { name: "false" }, //关联性
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

    window.layui.use('form', function(){
      // var element = window.layui.element
      var form = window.layui.form;
      form.on('radio(accshow_facility)', function(value){
        data.accshowd_query_evidence[0].accshow_facticity.name=value.value
        // data.defendant_avoid=value.value
      })
      form.on('radio(accshow_legality)', function(value){
        data.accshowd_query_evidence[0].accshow_legality.name=value.value
      })
      form.on('radio(accshow_relevance)', function(value){
        data.accshowd_query_evidence[0].accshow_relevance.name=value.value
      })
    })
  },

  components: {
    // AddJudgeChief
  },
  methods: {
    updated:function(){
      window.layui.use('form', function(){
        // var element = window.layui.element
        var form = window.layui.form;
        form.on("accshow_facticity'+[index + 1]+'", function(value){
          data.defendant_avoid=value.value
          form.render('accshow_facility[index+1]')
        })
        form.on('radio(accshow_legality[index+1])', function(value){
          data.accuser_avoid=value.value
          form.render('accshow_legality[index+1]')
        })
      })
    },
    add_component(datatype) {
      switch (datatype) {
        case "accshowd_evidence":
          //accshowd_evidence 模块的数据加入
          this.data.accshowd_evidence.push({
            accshow_evidence: { name: "" }, //证据名称(原告举证表 原告提出)
            accshow_content: { name: "" }, //证明事项(原告举证表 原告提出)
            accshow_fact_reason: { name: "" }, //事实和理由(被告质证)
          });
          break;
        case "accshowd_query_evidence":
          //这里是值对应的处理
          this.data.accshowd_query_evidence.push({
            accshow_defendant: { name: "" }, //被告姓名
            accshow_query_evidence: { name: "" }, //证据名称 （被告质证）
            accshow_query_facticity: { name: "" }, //真实性理由
            accshow_query_legality: { name: "" }, //合法性理由
            accshow_query_relevace: { name: "" }, //关联性理由
            accshow_facticity: { name: "false" }, //真实性
            accshow_legality: { name: "false" }, //合法性
            accshow_relevance: { name: "false" }, //关联性
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
    controByJson(value){
      data.accshowd_query_evidence[0].accshow_facticity.name=value.value
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
