<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="layui-bg-gray">
    <div id="BasicInfo">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>基本信息</legend>
        <div class="layui-field-box">
          <BasicInfo></BasicInfo>
        </div>
      </fieldset>

    </div>

    <div id="whole_PlaintiffImf">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>原告信息</legend>
        <div class="layui-field-box">
          <PlaintiffImf :index=0 @addIndex="add_plaintiffImf" :key=0></PlaintiffImf>
          <PlaintiffImf v-for="(tag,index) in plaintiffImfTag.slice(1)" :key="index+1" @deleteIndex="del" :index="index+1" @addIndex="add_plaintiffImf"/>
        </div>
      </fieldset>
    </div>
    <div id = "whole_DefendantImf">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>被告信息</legend>
        <div class="layui-field-box">
          <DefendantImf></DefendantImf>
        </div>
      </fieldset>
    </div>

    <div id="CourtInves1">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>法庭调查</legend>
        <div class="layui-field-box">
          <CourtInves></CourtInves>
        </div>
      </fieldset>
    </div>
  </div>


<!--   <div id="CourtInves2">
    <fieldset class="layui-elem-field layui-field-title">
      <legend>法庭调查</legend>
      <div class="layui-field-box">
        <AccshowForm></AccshowForm>
      </div>
    </fieldset>
  </div> -->

</template>
 
<script>
import BasicInfo from './components/BasicInfo.vue'
import PlaintiffImf from './components/PlaintiffImf.vue'
import DefendantImf from './components/DefendantImf.vue'
import CourtInves from './components/CourtInves.vue'
// import AccshowForm from './components/AccshowForm.vue'

export default {
  name: 'App',
  data:function (){
    return {
      plaintiffImfTag:[{name:""}]
    }
  },
  components: {
    BasicInfo,
    PlaintiffImf,
    DefendantImf,
    CourtInves,
    // AccshowForm
  },
  methods: {
    add_plaintiffImf(){
      this.plaintiffImfTag.push({name:""})
    },
    del(index) {
       // 从数组中移除。
       this.plaintiffImfTag.splice(index, 1);
     },
     create_contentList ()  {

     }
   },
   updated: function () {
    // var form=window.layui.form;
    // form.render(); 
  },
  mounted (){
  // 添加目录控件
    this.$nextTick(function () {
      window.layui.use('layer', function(){
        var layer = window.layui.layer;
        layer.open({
          title: '目录',
          skin: 'myskin',
          type: 1,
          content: "<ul class='site-dir layui-layer-wrap' id='content_list' style='display: block;'>"+
          "<li><a href='#BasicInfo'><cite>基本信息</cite></a></li>"+
          "<li><a href='#whole_PlaintiffImf'><cite>原告信息</cite></a></li>"+
          "<li><a href='#whole_DefendantImf'><cite>被告信息</cite></a></li>"+
          "<li><a href='#CourtInves1'><cite>法庭调查1</cite></a></li>"+
          "<li><a href='#CourtInves2'><cite>法庭调查2</cite></a></li>"+
          "</ul>" ,
          shade: 0,
          closeBtn:0,
          offset: 'r'
        });
      });              

    })

  }

}


</script>

<style>
  body .myskin{
    box-shadow: none;
    border: 1px solid #d2d2d2;
  }
  .site-dir{
    line-height: 26px;
    margin-left: 20px;
    overflow: visible;
    list-style-type: disc;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .*{
    margin-top:20px;
  }

</style>

<style type="text/css">
  
          .myradio{
            outline: none;
            width: 1.2rem;
            height: 1.2rem;
            background-color: #ffffff;
            border: solid 1px #dddddd;
            -webkit-border-radius: 0.6rem;
            border-radius: 0.6rem;
            font-size: 0.8rem;
            margin: 0;
            padding: 0;
            position: relative;
            display: inline-block !important;
            vertical-align: top;
            cursor: default;
            -webkit-appearance: none;  /**隐藏原生控件**/
        }

        /**选择后的样式**/
        .myradio:checked{
            background-color: #5fb778;
            border: solid 1px #5fb778;
            box-shadow: 0 1px 1px rgba(0,0,0,.1);
            text-align: center;
            background-clip: padding-box;
        }
         /**选择后 里面小对勾样式**/
        .myradio:checked:before{
            content: '';
            width: 0.5rem;
            height: 0.3rem;
            border: 1px solid #ffffff;
            border-top: none;
            border-right: none;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -0.25rem;
            margin-top: -0.25rem;
            -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
        }
</style>
