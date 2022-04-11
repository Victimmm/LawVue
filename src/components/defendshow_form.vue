<template>
  <h1 style="text-align:center">法庭调查-被告举证</h1>
  <div id="defendshowd_evidence">
    <table class="layui-table" >
      <tr>
        <td style="text-align: center" width="30%">审判员</td>
        <td width="70%">
          <textarea type="text" class="layui-input">被告进行举证</textarea>
        </td>
      </tr>
      <tr>
        <td>
          <div class="layui-card-header">
            <input type="text" v-model="data.defendshowd_evidence[0].defendshow_evidence.name" placeholder="证据名称1" autocomplete="off"
                   class="layui-input">
          </div>
        </td>
        <td>
          <div class="layui-input-row">
            <div class="layui-col-md9">
              <div class="layui-card-header">
                <input type="text" v-model="data.defendshowd_evidence[0].defendshow_content.name" placeholder="证明事项" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
            <div class="layui-col-md3">
              <button @click="add_component('defendshowd_evidence')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td style="text-align: center" width="30%">
          <div class="layui-col-md2">
            <div class="layui-form-item">
              <label class="layui-form-label">事实和理由</label>
            </div>
          </div>
        </td>
        <td style="text-align: center" width="70%">
          <div class="layui-col-md10">
            <div class="layui-input-row">
              <textarea v-model="data.defendshowd_evidence[0].defendshow_fact_reason.name" id="defendshow_fact_reason1" placeholder="理由" class="layui-textarea"></textarea>
            </div>
          </div>
        </td>
      </tr>
      <hr>
    </table>
<!--被告举证表格的动态添加-->
    <template v-for="(item, index) in data.defendshowd_evidence.slice(1)" :key='index'>
      <table class="layui-table" >
        <tr>
          <td style="text-align: center" width="30%">审判员</td>
          <td width="70%">
            <textarea type="text" class="layui-input">被告进行举证</textarea>
          </td>
        </tr>
        <tr>
          <td>
            <div class="layui-card-header">
              <input type="text" v-model="data.defendshowd_evidence[index+1].defendshow_evidence.name" placeholder="证据名称" autocomplete="off"
                     class="layui-input">
            </div>
          </td>
          <td>
            <div class="layui-input-row">
              <div class="layui-col-md9">
                <div class="layui-card-header">
                  <input type="text" v-model="data.defendshowd_evidence[index+1].defendshow_content.name" placeholder="证明事项" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md3">
                <button @click="delete_component('defendshowd_evidence',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="text-align: center" width="30%">
            <div class="layui-col-md2">
              <div class="layui-form-item">
                <label class="layui-form-label">事实和理由</label>
              </div>
            </div>
          </td>
          <td style="text-align: center" width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_evidence[index+1].defendshow_fact_reason.name"  placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <hr>
    </template>
  </div>
  <div id="defendshowd_accuser">
<!--    原告及其他被告质证过程-->
    <div id="form_AccuserQuestion">
      <table class="layui-table">
        <tr>
          <td style="text-align: center">审判员</td>
          <td>
            <textarea type="text" class="layui-input">原告及其他被告对被告提交的证据进行质证</textarea>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-card-header">
              <input type="text" v-model="data.defendshowd_accuser[0].defendshow_accuser.name"  placeholder="原告姓名" autocomplete="off"
                     class="layui-input">
            </div>
          </td>
          <td width="70%">
            <div class="layui-input-row">
              <div class="layui-col-md9">
                <div class="layui-card-header">
                  <input type="text" v-model="data.defendshowd_accuser[0].defendshow_evidencenum.name" name="evidenceNum1"  placeholder="证据编号1" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md3">
<!--                增加动态增加的原告及其他被告质证-->
                <button @click="add_component('defendshowd_accuser')" type="button" class="layui-btn layui-btn-primary layui-btn-sm "
                        data-type="text">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">真实性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_accuser[0].defendshow_facticity.name" title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_accuser[0].defendshow_facticity.name" title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_accuser[0].defendshow_query_facticity.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">合法性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_accuser[0].defendshow_legality.name" title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_accuser[0].defendshow_legality.name" title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_accuser[0].defendshow_query_legality.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">关联性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_accuser[0].defendshow_relevance.name"  title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_accuser[0].defendshow_relevance.name"  title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_accuser[0].defendshow_query_relevace.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
        <hr>
      </table>
    </div>
<!--    原告及其他被告质证动态添加-->
    <template v-for="(item, index) in data.defendshowd_accuser.slice(1)" :key='index'>
      <table class="layui-table">
        <tr>
          <td style="text-align: center">审判员</td>
          <td>
            <textarea type="text" class="layui-input">原告及其他被告对被告提交的证据进行质证</textarea>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-card-header">
              <input type="text" v-model="data.defendshowd_accuser[index+1].defendshow_accuser.name"  placeholder="原告姓名" autocomplete="off"
                     class="layui-input">
            </div>
          </td>
          <td width="70%">
            <div class="layui-input-row">
              <div class="layui-col-md9">
                <div class="layui-card-header">
                  <input type="text" v-model="data.defendshowd_accuser[index+1].defendshow_evidencenum.name" name="evidenceNum1"  placeholder="证据编号1" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md3">
                <!-- 删除动态增加的原告及其他被告质证-->
                <button @click="delete_component('defendshowd_accuser',index+1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">真实性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_accuser[index+1].defendshow_facticity.name" title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_accuser[index+1].defendshow_facticity.name" title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_accuser[index+1].defendshow_query_facticity.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">合法性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_accuser[index+1].defendshow_legality.name" title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_accuser[index+1].defendshow_legality.name" title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_accuser[index+1].defendshow_query_legality.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">关联性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_accuser[index+1].defendshow_relevance.name"  title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_accuser[index+1].defendshow_relevance.name"  title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_accuser[index+1].defendshow_query_relevace.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
        <hr>
      </table>
    </template>
  </div>
  <div id="defendshowd_defendant">
    <div id="form_accuser_query">
      <table class="layui-table">
        <tr>
          <td width="30%">
            <div class="layui-card-header">
              <input type="text" v-model="data.defendshowd_defendant[0].defendshow_defendant.name" name="title" placeholder="被告姓名" autocomplete="off"
                     class="layui-input">
            </div>
          </td>
          <td width="70%">
            <div class="layui-input-row">
              <div class="layui-col-md9">
                <div class="layui-card-header">
                  <input type="text" name="title" v-model="data.defendshowd_defendant[0].defendshow_numevidence.name" placeholder="证据编号1" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md3">
                <button @click="add_component('defendshowd_defendant')" type="button" class="layui-btn layui-btn-primary layui-btn-sm "
                        data-type="text">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">真实性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_defendant[0].defendshow_numfacticity.name" name="defendshow_numfacticity1" title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_defendant[0].defendshow_numfacticity.name" name="defendshow_numfacticity1" title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_defendant[0].defendshow_reason_facticity.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">合法性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_defendant[0].defendshow_numlegality.name" title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_defendant[0].defendshow_numlegality.name" title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_defendant[0].defendshow_reason_legality.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">关联性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_defendant[0].defendshow_numrelevance.name" title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_defendant[0].defendshow_numrelevance.name" title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_defendant[0].defendshow_reason_relevace.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
<!--被告质证的动态添加-->
    <template v-for="(item, index) in data.defendshowd_defendant.slice(1)" :key='index'>
      <table class="layui-table">
        <tr>
          <td width="30%">
            <div class="layui-card-header">
              <input type="text" v-model="data.defendshowd_defendant[index+1].defendshow_defendant.name" name="title" placeholder="被告姓名" autocomplete="off"
                     class="layui-input">
            </div>
          </td>
          <td width="70%">
            <div class="layui-input-row">
              <div class="layui-col-md9">
                <div class="layui-card-header">
                  <input type="text" name="title" v-model="data.defendshowd_defendant[index+1].defendshow_numevidence.name" placeholder="证据编号1" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md3">
                <button @click="delete_component('defendshowd_defendant',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm "
                        data-type="text">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">真实性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_defendant[index+1].defendshow_numfacticity.name" name="defendshow_numfacticity1" title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_defendant[index+1].defendshow_numfacticity.name" name="defendshow_numfacticity1" title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_defendant[index+1].defendshow_reason_facticity.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">合法性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_defendant[index+1].defendshow_numlegality.name" title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_defendant[index+1].defendshow_numlegality.name" title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_defendant[index+1].defendshow_reason_legality.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="30%">
            <div class="layui-form-item">
              <label class="layui-form-label">关联性</label>
              <div class="site-title">
                <div class="layui-form">
                  <input type="radio" v-model="data.defendshowd_defendant[index+1].defendshow_numrelevance.name" title="是" value="true" checked>
                  <input type="radio" v-model="data.defendshowd_defendant[index+1].defendshow_numrelevance.name" title="否" value="false">
                </div>
              </div>
            </div>
          </td>
          <td width="70%">
            <div class="layui-col-md10">
              <div class="layui-input-row">
                <textarea v-model="data.defendshowd_defendant[index+1].defendshow_reason_relevace.name" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </template>
  </div>
  <div class="layui-col-md2">
    <div class="layui-form-label">是否反诉</div>
  </div>
  <div class="layui-col-md10">
    <div class="site-title">
      <div class="layui-form">
        <input type="radio" v-model="data.defendshow_is_counterclaim" title="反诉" value="true" checked>
        <input type="radio" v-model="data.defendshow_is_counterclaim" title="不反诉" value="false">
      </div>
    </div>

  </div>
  <hr>
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
    </div>
  </div>
  <hr>
</template>

<script>
var data;
if(localStorage.getItem("defendshow_form")==null)
{
  data={
    //第一个动态生成的json defendshowd_evidence 包含以下3个信息
    defendshowd_evidence:[{
      defendshow_evidence:{name:""},     //证据名称(被告举证表 原告提出)
      defendshow_content:{name:""},       //证明事项(被告举证表 原告提出)
      defendshow_fact_reason:{name:""}   //事实和理由(被告举证)
    }],
    //第二个动态生成的json defendshowd_accuser 包含以下10个信息
    defendshowd_accuser:[{
      defendshow_accuser:{name:""},        //原告及其他被告姓名
      defendshow_evidencenum:{name:""},    //证据编号
      defendshow_facticity:{name:""},      //真实性(原告质证)
      defendshow_legality:{name:""}, //合法性(原告质证)
      defendshow_relevance:{name:""},//关联性(原告质证)
      defendshow_query_facticity:{name:""}, //真实性理由(原告质证)
      defendshow_query_legality:{name:""}, //合法性理由(原告质证)
      defendshow_query_relevace:{name:""}, //完整性理由(原告质证)
    }],
    defendshowd_defendant:[{
      defendshow_defendant:{name:""},        //原告及其他被告姓名(其他被告质证)
      defendshow_numevidence:{name:""},    //证据编号
      defendshow_numfacticity:{name:""},      //真实性(其他被告质证)
      defendshow_numlegality:{name:""}, //合法性(其他被告质证))
      defendshow_numrelevance:{name:""},//关联性(其他被告质证))
      defendshow_reason_facticity:{name:""}, //真实性理由(其他被告质证)
      defendshow_reason_legality:{name:""}, //合法性理由(其他被告质证)
      defendshow_reason_relevace:{name:""}, //关联性理由(其他被告质证)
    }],
    defendshow_is_counterclaim:'',          //是否反诉
  };
}
else
  data=JSON.parse(localStorage.getItem("defendshow_form"));
// console.log(data)
export default {
  data() {
    return {
      data:data
    }
  },


  components: {

  },
  // mounted(){
  //   window.layui.use('form', function(){
  //     // var element = window.layui.element
  //     var form = window.layui.form;
  //     form.on('radio(plaintiffType)', function(value){
  //       data.accuser_type=value.value
  //     })
  //   })
  // },
  methods: {
    add_component(datatype) {
      switch(datatype){
        case "defendshowd_evidence":
          //accshowd_evidence 模块的数据加入
          this.data.defendshowd_evidence.push({
            defendshow_evidence:{name:""},     //证据名称(被告举证表 原告提出)
            defendshow_content:{name:""},       //证明事项(被告举证表 原告提出)
            defendshow_fact_reason:{name:""}   //事实和理由(被告举证)
          });
          break
        case "defendshowd_accuser":
          //这里是值对应的处理
          this.data.defendshowd_accuser.push({
            defendshow_accuser:{name:""},        //原告及其他被告姓名
            defendshow_evidencenum:{name:""},    //证据编号
            defendshow_facticity:{name:""},      //真实性(原告质证)
            defendshow_legality:{name:""}, //合法性(原告质证)
            defendshow_relevance:{name:""},//关联性(原告质证)
            defendshow_query_facticity:{name:""}, //真实性理由(原告质证)
            defendshow_query_legality:{name:""}, //合法性理由(原告质证)
            defendshow_query_relevace:{name:""}, //完整性理由(原告质证)
          })
          break
        case "defendshowd_defendant":
          this.data.defendshowd_defendant.push({
            defendshow_defendant:{name:""},        //原告及其他被告姓名(其他被告质证)
            defendshow_numevidence:{name:""},    //证据编号
            defendshow_numfacticity:{name:""},      //真实性(其他被告质证)
            defendshow_numlegality:{name:""}, //合法性(其他被告质证))
            defendshow_numrelevance:{name:""},//关联性(其他被告质证))
            defendshow_reason_facticity:{name:""}, //真实性理由(其他被告质证)
            defendshow_reason_legality:{name:""}, //合法性理由(其他被告质证)
            defendshow_reason_relevace:{name:""}, //关联性理由(其他被告质证)
          })
      break
        default:
          //这里是没有找到对应的值处理
          break
      }

    },
    delete_component(datatype,index){
      switch(datatype){
        case "defendshowd_evidence":
          //这里是值对应的处理
          this.data.defendshowd_evidence.splice(index,1)
          break
        case "defendshowd_accuser":
          //这里是值对应的处理
          this.data.defendshowd_accuser.splice(index,1)
          break
        case"defendshowd_defendant":
          this.data.defendshowd_defendant.splice(index,1)
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    save_localstorage(){
      localStorage.setItem('defendshow_form',JSON.stringify(this.data))
    }
  }
}

</script>

<style scoped>
.radioBox input{
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: #fff;
  border: 1px solid #c9c9c9;
  border-radius: 50%;
  outline: none;
  margin-right: 22px;
  cursor: pointer;
}
</style>