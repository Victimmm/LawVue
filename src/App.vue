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
          <PlaintiffImf :index=0 @addIndex="add_plaintiffImf" :key="plaintiffImfTag[0].guid"></PlaintiffImf>
          <PlaintiffImf v-for="(tag,index) in plaintiffImfTag.slice(1)" :key="tag.guid" @deleteIndex="del_plaintiffImf" :index="index+1" @addIndex="add_plaintiffImf" />
        </div>
      </fieldset>
    </div>
    <div id = "whole_DefendantImf">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>被告信息</legend>
        <div class="layui-field-box">
          <DefendantImf :index=0  :key=0  @addIndex="add_defendantImf"></DefendantImf>
          <DefendantImf v-for="(tag,index) in defendantImfTag.slice(1)" :key="tag.guid" @deleteIndex="del_defendantImf" :index="index+1" @addIndex="add_defendantImf" />

        </div>
      </fieldset>
    </div>

    <div id="right_inform" >
      <fieldset class="layui-elem-field layui-field-title">
        <legend>权利告知</legend>
        <div class="layui-field-box">
          <right_inform></right_inform>
        </div>
      </fieldset>
    </div>

    <div id="CourtInves1">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>法庭调查</legend>
        <div class="layui-field-box">
          <CourtInves @setCounterclaim='setCounterclaim'></CourtInves>
        </div>
      </fieldset>
    </div>

<div v-if="is_counterclaim=='1'">
    <div id="accshow_form" >
      <fieldset class="layui-elem-field layui-field-title">
        <legend>法庭调查-原告举证</legend>
        <div class="layui-field-box">
          <accshow_form ref="accshow_form" :is_counterclaim=this.is_counterclaim></accshow_form>
        </div>
      </fieldset>
    </div>

    <div id="defendshow_form" >
      <fieldset class="layui-elem-field layui-field-title">
        <legend>法庭调查-被告举证</legend>
        <div class="layui-field-box">
          <defendshow_form></defendshow_form>
        </div>
      </fieldset>
    </div>

    <div id="inquiry_form">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>法庭询问</legend>
        <div class="layui-field-box">
          <inquiry_form></inquiry_form>
        </div>
      </fieldset>
    </div>

    <div id="argue_form">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>法庭辩论</legend>
        <div class="layui-field-box">
          <argue_form></argue_form>
        </div>
      </fieldset>
    </div>

    <div id="final_form">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>陈述意见</legend>
        <div class="layui-field-box">
          <final_form></final_form>
        </div>
      </fieldset>
    </div>

    <div id="mediate_form">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>是否调解</legend>
        <div class="layui-field-box">
          <mediate_form></mediate_form>
        </div>
      </fieldset>
    </div>

    <div id="delivery_form">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>电子文书送达</legend>
        <div class="layui-field-box">
          <delivery_form></delivery_form>
        </div>
      </fieldset>
    </div>
</div>

  </div>

</template>

<script>
import BasicInfo from './components/BasicInfo.vue'
import PlaintiffImf from './components/PlaintiffImf.vue'
import DefendantImf from './components/DefendantImf.vue'
import CourtInves from './components/CourtInves.vue'
import right_inform from "@/components/right_inform";
import accshow_form from "@/components/accshow_form";
import defendshow_form from "@/components/defendshow_form";
import inquiry_form from "@/components/inquiry_form";
import argue_form from "@/components/argue_form";
import final_form from "@/components/final_form";
import mediate_form from "@/components/mediate_form";
import delivery_form from "@/components/delivery_form";


export default {
  name: 'App',

  data:function (){

    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    var plaintiffImfTag=[{guid:this.guid()}]
    var defendantImfTag=[{guid:this.guid()}]
    if (wholeItem != "" ) {
      for( var i=0;wholeItem.PlaintiffItems.length!=0&i<wholeItem.PlaintiffItems.length-1;i++){
        plaintiffImfTag.push({guid:this.guid()})
      }
      for( i=0;wholeItem.DefendantItems.length!=0&i<wholeItem.DefendantItems.length-1;i++){
        defendantImfTag.push({guid:this.guid()})
      }
    }
    return {
      plaintiffImfTag:plaintiffImfTag,
      defendantImfTag:defendantImfTag,
      is_counterclaim:'0',
    }
  },
  components: {
    BasicInfo,
    PlaintiffImf,
    DefendantImf,
    CourtInves,
    right_inform,
    accshow_form,
    defendshow_form,
    inquiry_form,
    argue_form,
    final_form,
    mediate_form,
    delivery_form,
  },
  methods: {
    setCounterclaim(val){
      this.is_counterclaim=val
    },
    add_plaintiffImf(){
      this.plaintiffImfTag.push({guid:this.guid()})
    },
    del_plaintiffImf(index) {
       this.plaintiffImfTag.splice(index, 1);
     },
    add_defendantImf(){
      this.defendantImfTag.push({guid:this.guid()})
    },
    del_defendantImf(index) {
       // 从数组中移除。
       this.defendantImfTag.splice(index, 1);
     },
     guid: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    computed:{
      showAccshow(){
        return this.$store.state.is_counterclaim
      },

    },

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
        content:
            "<ul class='site-dir layui-layer-wrap' id='content_list' style='display: block;'>" +
            "<li><a href='#BasicInfo'><cite>基本信息</cite></a></li>" +
            "<li><a href='#whole_PlaintiffImf'><cite>原告信息</cite></a></li>" +
            "<li><a href='#whole_DefendantImf'><cite>被告信息</cite></a></li>" +
            "<li><a href='#right_inform'><cite>权利告知</cite></a></li>" +
            "<li><a href='#CourtInves1'><cite>法庭调查1</cite></a></li>" +
            "<li><a href='#accshow_form'><cite>法庭调查2</cite></a></li>" +
            "<li><a href='#defendshow_form'><cite>法庭调查3</cite></a></li>" +
            "<li><a href='#inquiry_form'><cite>法庭询问</cite></a></li>" +
            "<li><a href='#argue_form'><cite>法庭辩论</cite></a></li>" +
            "<li><a href='#final_form'><cite>陈述意见</cite></a></li>" +
            "<li><a href='#mediate_form'><cite>是否调解</cite></a></li>" +
            "<li><a href='#delivery_form'><cite>电子文书送达</cite></a></li>" +
            "</ul>",
        shade: 0,
        closeBtn:0,
        offset: 'r'
      });
    });              

  })

},
//   watch:{
//     $store.state.is_counterclaim:{
//
// }
//   }
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
