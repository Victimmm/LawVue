<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="layui-bg-gray">
    <form class="layui-form" action="" onsubmit="return false">
        <fieldset class="layui-elem-field layui-field-title" id="BasicInfo">
          <legend>基本信息</legend>
          <div class="layui-field-box">
            <BasicInfo></BasicInfo>
          </div>
        </fieldset>

        <fieldset class="layui-elem-field layui-field-title" id="whole_PlaintiffImf">
          <legend>原告信息</legend>
          <div class="layui-field-box">
            <PlaintiffImf :index=0 :key="0"></PlaintiffImf>
            <PlaintiffImf v-for="(item,index) in $store.state.plaintiff_item.slice(1)" :key="item.tag"
                          :index="index+1"/>
          </div>
        </fieldset>


        <fieldset class="layui-elem-field layui-field-title" id="whole_DefendantImf">
          <legend>被告信息</legend>
          <div class="layui-field-box">
            <DefendantImf :index=0 :key=0></DefendantImf>
            <DefendantImf v-for="(item,index) in $store.state.defendant_item.slice(1)" :key="item.tag"
                          :index="index+1"/>
          </div>
        </fieldset>

      <fieldset class="layui-elem-field layui-field-title" id="whole_thirdPartyImf">
        <legend>第三人信息</legend>
        <div class="layui-field-box">
          <thirdPartyImf :index=0 :key=0></thirdPartyImf>
          <thirdPartyImf v-for="(item,index) in $store.state.third_party_item.slice(1)" :key="item.tag"
                        :index="index+1"/>
        </div>
      </fieldset>

        <fieldset class="layui-elem-field layui-field-title" id="BasicState">
          <legend>基本信息陈述</legend>
          <div class="layui-field-box">
            <BasicState></BasicState>
          </div>
        </fieldset>

        <fieldset class="layui-elem-field layui-field-title" id="rightInfo">
          <legend>权利告知</legend>
          <div class="layui-field-box">
            <rightInfo @SetIsAvoid="SetIsAvoid"></rightInfo>
          </div>
        </fieldset>

      <div v-if="is_avoid =='2'">
          <fieldset class="layui-elem-field layui-field-title" id="CourtInves1">
            <legend>原告诉讼请求</legend>
            <div class="layui-field-box">
              <CourtInves></CourtInves>
            </div>
          </fieldset>
        <!--    &lt;!&ndash; 反诉且今日答辩 或者不反诉的情况显示&ndash;&gt;-->
        <div
            v-if="( $store.state.counterclaim_defendant_today_is_reply=='1' && $store.state.is_counterclaim=='1' ) || $store.state.is_counterclaim=='2'">
            <fieldset class="layui-elem-field layui-field-title" id="accuserShowInfo" style="margin-top:-28px">
              <legend>原告举证</legend>
              <div class="layui-field-box">
                <accuserShowInfo ref="accuserShowInfo"></accuserShowInfo>
              </div>
            </fieldset>

            <fieldset v-if="$store.state.is_defendant_evidence=='1'" class="layui-elem-field layui-field-title" id="defendShowInfo" style="margin-top:-35px" >
              <legend>被告举证</legend>
              <div class="layui-field-box">
                <defendShowInfo></defendShowInfo>
              </div>
            </fieldset>

            <fieldset class="layui-elem-field layui-field-title" id="inquiryInfo" style="margin-top:-28px">
              <legend>法庭询问</legend>
              <div class="layui-field-box">
                <inquiryInfo></inquiryInfo>
              </div>
            </fieldset>

            <fieldset class="layui-elem-field layui-field-title" id="argueInfo">
              <legend>法庭辩论</legend>
              <div class="layui-field-box">
                <argueInfo></argueInfo>
              </div>
            </fieldset>

            <fieldset class="layui-elem-field layui-field-title" id="finalStatementInfo">
              <legend>最后陈述意见</legend>
              <div class="layui-field-box">
                <finalStatementInfo></finalStatementInfo>
              </div>
            </fieldset>

            <fieldset class="layui-elem-field layui-field-title" id="mediateInfo">
              <legend>是否调解</legend>
              <div class="layui-field-box">
                <mediateInfo></mediateInfo>
              </div>
            </fieldset>

            <fieldset class="layui-elem-field layui-field-title" id="deliveryInfo">
              <legend>电子裁判文书送达</legend>
              <div class="layui-field-box">
                <deliveryInfo></deliveryInfo>
              </div>
            </fieldset>
        </div>
      </div>
            <fieldset class="layui-elem-field layui-field-title" id="summarizeInfo">
              <legend>审判员询问</legend>
              <div class="layui-field-box">
                <summarizeInfo></summarizeInfo>
              </div>
            </fieldset>


      <button type="button" class="layui-btn layui-btn-radius layui-btn-normal layui-btn-lg" lay-submit
              lay-filter="onSubmit"
              style="margin: -15px 0 30px; width: 150px"> 提交
      </button>
      <button type="button" class="layui-btn layui-btn-radius layui-btn-lg" @click="back()"
              style="margin: -15px 5px 30px; width: 150px;"> 返回
      </button>
    </form>
  </div>

</template>

<script>
import BasicInfo from './components/BasicInfo.vue'
import PlaintiffImf from './components/PlaintiffImf.vue'
import DefendantImf from './components/DefendantImf.vue'
import thirdPartyImf from'./components/thirdPratyImf.vue'
import CourtInves from './components/CourtInves.vue'
import rightInfo from "@/components/rightInfo";
import accuserShowInfo from "@/components/accuserShowInfo";
import defendShowInfo from "@/components/defendantShowinfo";
import inquiryInfo from "@/components/inquiryInfo";
import argueInfo from "@/components/argueInfo";
import finalStatementInfo from "@/components/finalStatementInfo";
import mediateInfo from "@/components/mediateInfo";
import deliveryInfo from "@/components/deliveryInfo";
import BasicState from "@/components/BasicState";
import summarizeInfo from "@/components/summarizeInfo";

export default {
  name: 'App',
  components: {
    BasicInfo,
    PlaintiffImf,
    DefendantImf,
    thirdPartyImf,
    CourtInves,
    rightInfo,
    accuserShowInfo,
    defendShowInfo,
    inquiryInfo,
    argueInfo,
    finalStatementInfo,
    mediateInfo,
    deliveryInfo,
    BasicState,
    summarizeInfo,
  },
  data: function () {
    let is_avoid = "2"
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "rightInfo" in wholeItem) {
      for (let i in wholeItem.rightInfo.accuser_right_duty) {
        if (wholeItem.rightInfo.accuser_right_duty[i].avoid == "1") {
          is_avoid = "1"
        }
      }
      for (let i in wholeItem.rightInfo.defendant_right_duty) {
        if (wholeItem.rightInfo.defendant_right_duty[i].avoid == "1") {
          is_avoid = "1"
        }
      }
    }
    return {
      active: 0, // 当前激活的导航索引
      is_avoid: is_avoid//是否申请回避
    }
  },
  mounted() {
    window.layui.use('form', () => {
      var form = window.layui.form
      form.render()
      // , element = layui.element
      form.on('submit(onSubmit)', () => {
        this.onSummit()
        return false;
      })
    })

    window.addEventListener('scroll', this.onScroll)
    // 添加目录控件
    this.$nextTick(function () {
      window.layui.use('layer', () => {
        var layer = window.layui.layer;
        layer.open({
          title: '目录',
          skin: 'myskin',
          type: 1,
          content: "    <ul class=\"site-dir layui-layer-wrap\" id=\"content_list\" style=\"display: block;\">\n" +
              "\n" +
              "    </ul>",
          shade: 0,
          closeBtn: 0,
          offset: 'r',
          success: ()=>{


            this.navChange()
          }
        });
      });
    })

  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    SetIsAvoid(value) {
      this.is_avoid = value
    },
    // 滚动监听器
    onScroll() {

      //              "        <li ><a href=\"#BasicInfo\"><cite>基本信息</cite></a></li>\n" +

      // 获取所有锚点元素
      const navContents = document.querySelectorAll('fieldset')
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      const title = []
      navContents.forEach(item => {
        title.push(item.getElementsByTagName('legend')[0].innerHTML)
        offsetTopArr.push(item.offsetTop)
      })

      // 获取当前文档流的 scrollTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是 n 了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      // 把下标赋值给 vue 的 data
      this.active = navIndex
      if (document.getElementById("content_list") != null) {
        // 获取钙元素下的a标签，并更改class 属性
        for (let i = 0; i < offsetTopArr.length; i++) {
          if (i != navIndex)
            document.getElementById("content_list").children[i].children[0].removeAttribute("class")
        }
        document.getElementById("content_list").children[navIndex].children[0].className = "layui-this"
      }
    },
    //提交 localstorage  中的数据
    onSummit() {
      let recordJson = {}
      var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      if (wholeItem != null) {
        //组织数据,同时检查数据

        //基本信息
        if ("BasicInfo" in wholeItem) {
          let basicInfo = wholeItem.BasicInfo
          recordJson["basicInfo"] = basicInfo
        }

        //基本信息陈述
        if ("BasicState" in wholeItem) {
          let stateInfo = wholeItem.BasicState
          recordJson["stateInfo"] = stateInfo
        }

        //原告数据
        if ("PlaintiffItems" in wholeItem && wholeItem.PlaintiffItems.length > 0) {

          let accuserInfo = []

          for (var j = 0; j < wholeItem.PlaintiffItems.length; j++) {
            let plaintiffItem = wholeItem.PlaintiffItems[j]
            accuserInfo.push(plaintiffItem)
            if (plaintiffItem.accuser_type == "2") {
              accuserInfo[j].accuser_short = wholeItem.PlaintiffItems[j].accuser
            }
          }
          recordJson["accuserInfo"] = accuserInfo
        }

        //被告数据
        if ("DefendantItems" in wholeItem && wholeItem.DefendantItems.length > 0) {

          let defendantInfo = []
          for (j = 0; j < wholeItem.DefendantItems.length; j++) {
            let defendantItem = wholeItem.DefendantItems[j]

            defendantInfo.push(defendantItem)
            if (defendantItem.defendant_type == "2") {
              defendantInfo[j].defendant_short = defendantInfo[j].defendant
            }
          }

          recordJson["defendantInfo"] = defendantInfo
        }

        if ("thirdPartyInfo" in wholeItem && wholeItem.thirdPartyInfo.length > 0) {
          let thirdPartyInfo = []
          for (j = 0; j < wholeItem.thirdPartyInfo.length; j++) {
            let ThirdPartyItem = wholeItem.thirdPartyInfo[j]
            thirdPartyInfo.push(ThirdPartyItem)
            if (ThirdPartyItem.defendant_type == "2") {
              thirdPartyInfo[j].third_party_short = thirdPartyInfo[j].third_party
            }
          }
          recordJson["thirdPartyInfo"] = thirdPartyInfo
        }


        if ("rightInfo" in wholeItem) {
          let rightInfo = {accuser_right_duty: [], defendant_right_duty: []}
          // wholeItem.rightInfo

          for (let i = 0; i < this.$store.state.plaintiff_item.length; i++) {
            // console.log(i)
            rightInfo.accuser_right_duty[i] = wholeItem.rightInfo.accuser_right_duty[i]
            rightInfo.accuser_right_duty[i]["accuser"] = this.$store.state.plaintiff_item[i].accuser_short == "" ? this.$store.state.plaintiff_item[i].accuser : this.$store.state.plaintiff_item[i].accuser_short
          }
          for (let i = 0; i < this.$store.state.defendant_item.length; i++) {
            rightInfo.defendant_right_duty[i] = wholeItem.rightInfo.defendant_right_duty[i]
            rightInfo.defendant_right_duty[i]["defendant"] = this.$store.state.defendant_item[i].defendant_short == "" ? this.$store.state.defendant_item[i].defendant : this.$store.state.defendant_item[i].defendant_short
          }
          recordJson["rightInfo"] = rightInfo
        }

        recordJson["courtInvestigate"] = {}
        //法庭调查数据，包含原被告举证表，法庭调查表三个表
        if ("CourtInves" in wholeItem) {
          let courtInvestigate = wholeItem.CourtInves
          recordJson["courtInvestigate"] = Object.assign(recordJson["courtInvestigate"], courtInvestigate)
          let judge_inquiry1 = wholeItem.CourtInves.judge_inquiry_after_accuser_claim
          recordJson["judge_inquiry_after_accuser_claim"] = judge_inquiry1
          let judge_inquiry2 = wholeItem.CourtInves.judge_inquiry_after_defendant_reply
          recordJson["judge_inquiry_after_defendant_reply"] = judge_inquiry2
        }

        // console.log(wholeItem.accuserShowInfo)
        if ("accuserShowInfo" in wholeItem) {
          var accuserShowInfo = wholeItem.accuserShowInfo

          accuserShowInfo.defendant_and_other_accuser_query.forEach(e => {
            e.evidence = e.evidence.join("**") , e.name = e.name.join("**")
          })
          // 合并法庭调查表和原告举
          recordJson["courtInvestigate"] = Object.assign(recordJson["courtInvestigate"], accuserShowInfo)
        }

        if ("defendantShowInfo" in wholeItem) {
          var defendantShowInfo = wholeItem.defendantShowInfo
          defendantShowInfo.defendant_evidence.forEach(e => {
            e.defendant = e.defendant.join("**")
          })
          defendantShowInfo.accuser_and_other_defendant_query.forEach(e => {
            e.evidence = e.evidence.join("**") , e.name = e.name.join("**")
          })
          defendantShowInfo.counterclaim_defendant_query.forEach(e => {
            e.evidence = e.evidence.join("**") , e.counterclaim_defendant = e.counterclaim_defendant.join("**")
          })
          defendantShowInfo.other_counterclaim_defendant_query.forEach(e => {
            e.evidence = e.evidence.join("**") , e.other_counterclaim_defendant = e.other_counterclaim_defendant.join("**")
          })
          defendantShowInfo.counterclaim_accuser_query.forEach(e => {
            e.evidence = e.evidence.join("**") , e.counterclaim_accuser = e.counterclaim_accuser.join("**")
          })
          recordJson["courtInvestigate"] = Object.assign(recordJson["courtInvestigate"], defendantShowInfo)
        }

        //法庭询问表
        // let inquiryInfo=[]
        if ("inquiryInfo" in wholeItem) {
          let inquiryInfoItem = wholeItem.inquiryInfo.inquiry_info
          recordJson["inquiryInfo"] = inquiryInfoItem
        }

        //法庭辩论表

        if ("argueInfo" in wholeItem) {
          let argueInfo = wholeItem.argueInfo
          recordJson["argueInfo"] = argueInfo
        }

        //最后陈述表

        if ("finalStatementInfo" in wholeItem) {
          let finalStatementInfoItem = wholeItem.finalStatementInfo.final_statement_info

          recordJson["finalStatementInfo"] = finalStatementInfoItem
        }

        //是否调解表
        let mediateInfo = {}
        if ("mediateInfo" in wholeItem) {
          mediateInfo = wholeItem.mediateInfo
          recordJson["mediateInfo"] = mediateInfo
        }

        //电子文书送达表
        if ("deliveryInfo" in wholeItem) {
          let deliveryInfoItem = wholeItem.deliveryInfo.delivery_info
          recordJson["deliveryInfo"] = deliveryInfoItem
        }
        //审判员最后陈述
        if ("summarize" in wholeItem) {
          let summarizeInfo = wholeItem.summarize.summarize
          recordJson["summarize"] = summarizeInfo
          let summarize_judge_inqury = wholeItem.summarize.summarize_inquiry
          recordJson["judge_inquiry_before_summarize"] = summarize_judge_inqury
        }
        console.log(recordJson)
      }

      let requestType = "1"
      if (window.location.pathname == "/view/record/detail/") {
        requestType = "2"
      }

      this.axios.post('/record/add', {recordJson, requestType})
          .then( (result)=> {
            // handle success
            if (result.data.data == "案号不能重复") {
              window.layer.msg(result.data.data, {icon: 5, time: 1500});
              return
            }

            this.axios({
              method: 'post',
              url: '/record/generate',
              data: {courtNumber:this.$store.state.court_number}
            })

            // console.log(response);
            window.location.href = '/view/record'
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    },

    back(){
      window.location.href = '/view/record'
    },

    navChange(){
      const navContents = document.querySelectorAll('fieldset')
      const id_list = []
      const title = []
      let innerhtml=""
      this.$nextTick(function(){
        navContents.forEach(item => {
          title.push(item.getElementsByTagName('legend')[0].innerHTML)
          id_list.push(item.getAttribute("id"))
          innerhtml= innerhtml +"        <li ><a href='#"+item.getAttribute("id")+"'><cite>"+item.getElementsByTagName('legend')[0].innerHTML+"<cite></a></li>\n"
        })
        document.getElementById("content_list").innerHTML=innerhtml
        this.onScroll()
      })


      //              "        <li ><a href=\"#BasicInfo\"><cite>基本信息</cite></a></li>\n" +


    }
  },
  watch: {
    "$store.state.is_counterclaim" ()
    {
      setTimeout( ()=>{
        this.navChange()
      },1000);
    },
    "$store.state.counterclaim_defendant_today_is_reply" ()
    {
      setTimeout( ()=>{
        this.navChange()
      },1000);
    },
    is_avoid ()
    {
      setTimeout( ()=>{
        this.navChange()
      },1000);
    },

  }
}


</script>

<style>
body .myskin {
  box-shadow: none;
  border: 1px solid #d2d2d2;
}

.site-dir {
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
  overflow: -Scroll;
  overflow-x: hidden
}

</style>

<style type="text/css">

.myradio {
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
  -webkit-appearance: none; /**隐藏原生控件**/
}


textarea::-ms-input-placeholder{
  line-height:normal

}
textarea::-webkit-input-placeholder{
  line-height:normal
}

/**选择后的样式**/
.myradio:checked {
  background-color: #5fb778;
  border: solid 1px #5fb778;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  text-align: center;
  background-clip: padding-box;
}

/**选择后 里面小对勾样式**/
.myradio:checked:before {
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

.divcenter {
  display: flex;
  align-items: center;
  /*justify-content: center;*/
}


.myinput-block {
  margin-top: 8px;
}

.myradiomargin {
  width: 100%;
  border-style: solid;
  background-color: #fff;
  border-width: 1px;
  border-radius: 0 2px 2px 0;
  border-color: #e6e6e6;
  height: 36px;
}

.myradiomargin > * {
  margin-top: 10px;
  line-height: 38px;
  margin-left: 5px;
}

.multiselect__tags {
  min-height: 38px;
  border-radius: 0 2px 2px 0;
}

.myselect-div {
  width: 100%;
  float: left;
}

a.layui-this {
  color: #01AAED;
}

.content {
  background-color: white;
  width: 500px;
}

.content div {
  width: 100%;
  height: 600px;
  font-size: 36px;
  padding: 20px;
  background-color: #7ec384;
}

.content div:nth-child(2n) {
  background-color: #847ec3;
}

/*hr solid content样式*/

.hr-solid-content {
  color: #2D93CA;
  border: 0;
  font-size: 22px;
  padding: 1em 0;
  position: relative;
}

.hr-solid-content::before {
  content: attr(data-content);
  font-weight: bolder;
  position: absolute;
  padding: 0 1ch;
  line-height: 1px;
  border: solid #d0d0d5;
  border-width: 0 99vw;
  width: fit-content;
  /* for IE浏览器 */
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
}

/* 导航栏的样式 */
.navs {
  position: fixed;
  top: 80px;
  left: 700px;
  background-color: #efefef;
}

.navs li {
  padding: 0 20px;
  line-height: 1.6;
  font-size: 24px;
}


/* 当导航被点亮后改变颜色 */
.navs .active {
  color: #847ec3;
  background-color: #e2e2e2;
}

#content_list {
  display: block;
}
</style>
