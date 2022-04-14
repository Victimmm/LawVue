<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form" action="" onsubmit="return false">
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">原告类型</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="radio" name="accuser_type" v-model="data.accuser_type" value="0" class="myradio" ><label >单位</label>
              <input type="radio" name="accuser_type" v-model="data.accuser_type" value="1" class="myradio"><label >个人</label>
            </div>
          </div>
        </div>

        <div  v-if="data.accuser_type=='1'">
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label layui-form-required">原告姓名</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser" placeholder="请输入原告全称" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label layui-form-required">原告住址</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser_address" placeholder="请输入原告简称" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
        </div>
        <div v-if="data.accuser_type=='0'">
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">原告全称</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser" placeholder="请输入原告全称" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label layui-form-required">原告简称</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser_short" required  lay-verify="required" placeholder="请输入原告简称" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label">原告地址</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser_address" required  lay-verify="required" placeholder="请输入原告简称" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>

          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label layui-form-required">法人代表</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser_represent" required  lay-verify="required" placeholder="请输入法人代表" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label layui-form-required">法人职务</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.accuser_duty" required  lay-verify="required" placeholder="请输入法人职务" autocomplete="off" class="layui-input">
              </div>
            </div>
          </div>
        </div>


        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label" >委托诉讼代理人</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.accuser_agent" placeholder="请输入委托诉讼代理人" autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>
        <div class="layui-form-item" >
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label" >委托诉讼代理人单位</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.accuser_agent_address" required  lay-verify="required" placeholder="请输入委托诉讼代理人单位" autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button type="button" class="layui-btn layui-btn-radius layui-btn-primary" @click="onAddClick"> 添加</button>
            <button type="button" class="layui-btn layui-btn-radius layui-btn-warm" v-show="this.index!=0" @click="onCloseClick"> 删除</button>
            <button type="button" class="layui-btn layui-btn-radius" @click="onSaveClick"> 保存</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script type="text/javascript">
var data;
  data={
        accuser:'',
        accuser_short:'',
        accuser_type:"0",
        accuser_address:'',
        accuser_represent:'',
        accuser_duty:'',
        accuser_agent:'',
        accuser_agent_address:'',
    };
    export default {
          props: {
            index: {
              type: Number,
              required: true
          }
         } ,
        data(){
                data.accuser=this.$store.state.plaintiffname[this.index]
            return {data:JSON.parse(JSON.stringify(data))}
        },
        mounted(){
      },
      methods :{
        onSaveClick(){
            this.$store.commit('HandlePlaintiffName', [this.data.accuser,this.index])
            localStorage.setItem('PlaintiffImf',JSON.stringify(this.data))
        },
        onCloseClick () {
            // 将删除标签事件暴露除去
            // console.log(this.index);
            this.$emit("deleteIndex", this.index);
            this.$store.commit('delete_components',['plaintiff',this.index])
        },
        onAddClick(){
            this.$emit("addIndex");
            this.$store.commit('add_components',['plaintiff'])
        }
      },
    computed: {
    }

 
  }
</script>