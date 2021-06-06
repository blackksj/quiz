<template>
  <div class="information">
    <div class="content">
      <div class="rect"><img :src="common_top_image"/></div>
        <div class="content_background" v-bind:style="{backgroundImage:'url('+common_cen_image+')'}">
            <ul>
              <li><span>성명 :</span> <input type="text" name="name" v-model="name" autocomplete="off" placeholder="성명을 입력하세요"></li>
              <li><span>병원명 :</span> <input type="text" name="hospital_name" v-model="hospital_name" autocomplete="off" placeholder="병원명을 입력하세요"></li>
              <li><span>진료과 :</span> <input type="text" name="department" v-model="department" autocomplete="off" placeholder="진료과를 입력하세요"></li>
              <li><span>휴대폰번호 :</span> <input type="text" name="hpno" v-model="hpno" autocomplete="off" placeholder="휴대폰번호를 입력하세요"></li>
              <li><span>담당자 :</span> <input type="text" name="charge_name" v-model="charge_name" autocomplete="off" placeholder="담당자를 입력하세요"></li>
              <li v-if="cate.pharm_view_yn == 'Y'"><span>약국명 :</span> <input type="text" name="pharm_name" v-model="pharm_name" autocomplete="off" placeholder="약국명을 입력하세요"></li>
              <li v-if="cate.addr_gu_view_yn == 'Y'"><span>지역(구) :</span> <input type="text" name="addr_gu" v-model="addr_gu" autocomplete="off" placeholder="지역(구)를 입력하세요"></li>
              <li class="li-agreement">
                개인정보 수집 및 이용동의
                <div class="agreement" v-html="fnRtnDecode(cate.information_content)">
                </div>
                <div class="agreement-check">
                  <label for="agree"><input type="checkbox" id="agree" v-model="agree" name="agree"> 개인정보 수집 및 이용에 동의합니다.</label>
                </div>
              </li>
            </ul>
        </div>
        <div class="rect">
          <img :src="common_bottom_image"/>
        </div>
    </div>
    <div class="relative">
      <div class="ab-top"><img src="http://www.emds.co.kr/img/yuquiz.png" alt="Yu Quiz?" width="15%"></div>
      <img class="ab-right click" src="http://www.emds.co.kr/img/yes.png" v-on:click="fnYes" width="10%" alt="YES">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  props: {
  },
  data() {
    return {
      url: '',
      name: '',
      hospital_name: '',
      department: '',
      hpno: '',
      charge_name: '',
      pharm_name: '',
      addr_gu: '',
      present: '',
      score: '',
      agree: false,
      
      cate: {},
      common_top_image: '',
      common_cen_image: '',
      common_bottom_image: '',
      /*
      name: '테스트',
      hospital_name: '병원명',
      department: '진료과',
      hpno: '010-0000-0000',
      charge_name: '담당자',
      present: '',
      score: '',
      agree: true
      */
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.cate = this.$store.state.cate

    this.common_top_image = this.url+'file/cate/'+this.cate.common_top_image
    this.common_cen_image = this.url+'file/cate/'+this.cate.common_cen_image
    this.common_bottom_image = this.url+'file/cate/'+this.cate.common_bottom_image
  },
  methods: {
    fnYes() {
      if(this.name == '') {
        this.$emit('message', '성명을 입력하세요')
        return
      }
      if(this.hospital_name == '') {
        this.$emit('message', '병원명을 입력하세요')
        return
      }
      if(this.department == '') {
        this.$emit('message', '진료과를 입력하세요')
        return
      }
      if(this.hpno == '') {
        this.$emit('message', '휴대폰번호를 입력하세요')
        return
      }
      if(this.charge_name == '') {
        this.$emit('message', '담당자를 입력하세요')
        return
      }
      if(this.pharm_name == '' && this.cate.pharm_view_yn == 'Y') {
        this.$emit('message', '약국명을 입력하세요')
        return
      }
      if(this.addr_gu == '' && this.cate.addr_gu_view_yn == 'Y') {
        this.$emit('message', '지역(구)를 입력하세요')
        return
      }
      if(!this.agree) {
        this.$emit('message', '개인정보 수집 및 이용에 동의하세요')
        return
      }

      this.$store.state.answer.cate_idx = this.$store.state.idx 
      this.$store.state.answer.name = this.name
      this.$store.state.answer.hospital_name = this.hospital_name
      this.$store.state.answer.department = this.department
      this.$store.state.answer.hpno = this.hpno
      this.$store.state.answer.charge_name = this.charge_name
      this.$store.state.answer.pharm_name = this.pharm_name
      this.$store.state.answer.addr_gu = this.addr_gu

      this.$emit('quizStart')
    },
    fnRtnDecode(val) {
      return decodeURI(val).replace("\n", "<br />").replace(/\+/gi, " ")
    }
  }
}
</script>

<style lang="scss" scoped>
.information {
  .rect {
    img {width: 100%;}
  }

  .content_background {
    margin-top: -5px;
    padding: 5px 100px;
    background-repeat: repeat-y;
    background-size: 100%;
    ul {
      margin: 0; padding: 0;
      li {
        line-height: 2rem;
        span {
          font-size: 0.9rem;
          width: 8rem;
          display: inline-block;
          vertical-align: middle;
          color: #2b292c;
        }
        input[type=text] {
          width: 40rem;
          height: 1.6rem;
          vertical-align: middle;
          border: 0;
          background-color: #d6dce5;
          color: #2b292c;
          padding-left: 1rem;
          font-size: 0.8rem;
          font-weight: bold;
          font-family: 'Nanum Gothic', sans-serif;
        }
        .agreement {
          margin-left: -1rem;
          margin-top: 0.2rem;
          padding: 0.6rem 5rem;
          background-color: #e7e7e8;
          color: #383739;
          text-align: center;
          font-size: 0.7rem;
          line-height: 1rem;
        }
        .agreement-check {
          font-size: 0.7rem;
          color: #5b595b;
          input {vertical-align: middle; line-height: 1rem;}
        }

        &.li-agreement {
          font-size: 0.78rem;
          line-height: 2rem;
        }
      }
    }
  }
}

* {text-align: left; }
.ab-top {position: absolute; top: 0; width: 100%; text-align: center;}
.ab-right {position: absolute; top: 0; right: 1rem;}
</style>
