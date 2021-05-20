<template>
  <div class="information">
    <div class="rect"><img src="../assets/info-top.png"/></div>
    <div class="content_background">
        <ul>
          <li>성명 : <input type="text"></li>
          <li>병원명 : </li>
          <li>진료과 : </li>
          <li>휴대폰번호 : </li>
          <li>담당자 : </li>
          <li>
            개인정보 수집 및 이용동의
            <div class="agreement">
              입력하신 선생님의 정보는 유유제약의 마케팅 목적과 메디컴에서의 모바일 쿠폰 발송<br> 목적으로 활용됩니다. 
              위 목적 이외 선생님의 개인정보를 제 3자에게 제공하지 않습니다.
            </div>
            <input type="radio"> 개인정보 수집 및 이용에 동의합니다.
          </li>
        </ul>
    </div>
    <div class="rect"><img src="../assets/info-bottom.png"/></div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  props: {
  }
}
</script>

<style lang="scss" scoped>
.information {
  text-align: left; 
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;

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
        line-height: 40px;
        input {
          width: 500px;
          border: 0;
          background-color: #ccc;
        }
        .agreement {
          margin-left: -15px;
          padding: 10px 50px;
          background-color: #ccc;
          text-align: center;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
