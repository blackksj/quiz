<template>
  <div class="information">
    <div class="content">
      <div class="rect"><img src="../assets/info-top.png"/></div>
        <div class="content_background">
            <ul>
              <li><span>성명 :</span> <input type="text" name="name" v-model="name" autocomplete="off" placeholder="성명을 입력하세요"></li>
              <li><span>병원명 :</span> <input type="text" name="hospital_name" v-model="hospital_name" autocomplete="off" placeholder="병원명을 입력하세요"></li>
              <li><span>진료과 :</span> <input type="text" name="department" v-model="department" autocomplete="off" placeholder="진료과를 입력하세요"></li>
              <li><span>휴대폰번호 :</span> <input type="text" name="hpno" v-model="hpno" autocomplete="off" placeholder="휴대폰번호를 입력하세요"></li>
              <li><span>담당자 :</span> <input type="text" name="charge_name" v-model="charge_name" autocomplete="off" placeholder="담당자를 입력하세요"></li>
              <li class="li-agreement">
                개인정보 수집 및 이용동의
                <div class="agreement">
                  입력하신 선생님의 정보는 유유제약의 마케팅 목적과 메디컴에서의 모바일 쿠폰 발송<br> 목적으로 활용됩니다. 
                  위 목적 이외 선생님의 개인정보를 제 3자에게 제공하지 않습니다.
                </div>
                <div class="agreement-check">
                  <label for="agree"><input type="checkbox" id="agree" v-model="agree" name="agree"> 개인정보 수집 및 이용에 동의합니다.</label>
                </div>
              </li>
            </ul>
        </div>
        <div class="rect">
          <img src="../assets/info-bottom.png"/>
        </div>
    </div>
    <div class="relative mt">
      <div class="ab-top"><img src="../assets/yuquiz.png" alt="Yu Quiz?" width="25%"></div>
      <img class="ab-right click" src="../assets/yes.png" v-on:click="fnYes" width="20%" alt="YES">
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
      
      name: '',
      hospital_name: '',
      department: '',
      hpno: '',
      charge_name: '',
      present: '',
      score: '',
      agree: false
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
    console.log(this.$store.state.idx);
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

      this.$emit('quizStart')
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
    background-image:url('http://www.emds.co.kr/img/info-cen.png');
    background-repeat: repeat-y;
    background-size: 100%;
    ul {
      margin: 0; padding: 0;
      li {
        line-height: 3rem;
        span {
          width: 8rem;
          display: inline-block;
          vertical-align: middle;
          color: #2b292c;
        }
        input[type=text] {
          width: 40rem;
          height: 2rem;
          vertical-align: middle;
          border: 0;
          background-color: #d6dce5;
          color: #2b292c;
          padding-left: 1rem;
          font-size: 1.2rem;
          font-weight: bold;
          font-family: 'Nanum Gothic', sans-serif;
        }
        .agreement {
          margin-left: -1rem;
          margin-top: 1rem;
          padding: 0.8rem 5rem;
          background-color: #e7e7e8;
          color: #383739;
          text-align: center;
          font-size: 1rem;
          line-height: 1.4rem;
        }
        .agreement-check {
          font-size: 0.8rem;
          color: #5b595b;
          input {vertical-align: middle; line-height: 1rem;}
        }

        &.li-agreement {
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
