<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form" action="" onsubmit="return false">
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label layui-form-required">被告类型</label>
            </div>
          </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="radio" name="plaintiffType" v-model="data.defendant_type" class="myradio" value="0" title="单位" ><label >单位</label>
                <input type="radio" name="plaintiffType" v-model="data.defendant_type" class="myradio" value="1" title="个人" ><label >个人</label>
              </div>
            </div>
        </div>
        <div v-if="data.defendant_type=='1'">
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">被告姓名</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendant"  placeholder="请输入被告姓名"  autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">被告住址</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendant_address" placeholder="请输入被告住址"
                       autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
        </div>

        <div v-if="data.defendant_type=='0'">
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">被告全称</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendant"  required lay-verify="required" placeholder="请输入被告全称"
                     autocomplete="off" class="layui-input">
                </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">被告简称</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendant_short" placeholder="请输入被告简称"
                     autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">被告地址</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendant_address" placeholder="请输入被告地址"
                     autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">法人代表</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
              <input type="text" v-model="data.defendant_representative" required lay-verify="required" placeholder="请输入法人代表"
                     autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">法人职务</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendant_duty" placeholder="请输入法人职务"
                     autocomplete="off" class="layui-input">
                </div>
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">委托诉讼代理人</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.defendant_agent" required lay-verify="required" placeholder="请输入委托诉讼代理人"
                   autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>
        <div class="layui-form-item" >
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">委托诉讼代理人单位</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.defendant_agent_address" required lay-verify="required" placeholder="请输入委托诉讼代理人单位"
                   autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>

        <div class="layui-form-item">
          <div class="layui-input-block">
            <button type="button" class="layui-btn layui-btn-radius layui-btn-primary" @click="onAddClick"> 添加</button>
            <button type="button" class="layui-btn layui-btn-radius layui-btn-warm" v-show="this.index!=0" @click="onCloseClick"> 删除</button>
            <button type="button" class="layui-btn layui-btn-radius " @click="onSaveClick"> 保存</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script type="text/javascript">

var data;

if(localStorage.getItem("DefendantImf")==null)
{  
  data={
		defendant:'',
		defendant_short:'',
		defendant_type:"0",
		defendant_address:'',
		defendant_representative:'',
		defendant_duty:'',
		defendant_agent:'',
		defendant_agent_address:'',
	};
}
else 
  data=JSON.parse(localStorage.getItem("DefendantImf"));

	export default {
    props: {
      index: {
        type: Number,
        required: true
      }
    } ,
		data(){
      data.accuser=this.$store.state.defendantname[this.index]
      return {data:JSON.parse(JSON.stringify(data))}
		},
		mounted(){
		},
		methods :{
      onSaveClick(){
        if (this.$store.state.court_number == "") {
          window.layui.layer.msg('请优先完善基本信息表格');
        } else {
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          wholeItem.DefendantItems[this.index] = this.data
          this.$store.commit('HandleDefendantName', [this.data.defendant, this.index])
          localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
        }
      },
      onCloseClick () {
        // 将删除标签事件暴露除去
        var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
        var DefendantItems = wholeItem.DefendantItems
        if(this.index<DefendantItems.length){
          wholeItem.DefendantItems.splice(this.index,1)
          localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
        }
        this.$emit("deleteIndex", this.index);
        this.$store.commit('delete_components',['defendant',this.index])
      },
      onAddClick(){
        this.$emit("addIndex");
        this.$store.commit('add_components',['defendant'])
      }
		}   
	}
</script>