<template>
  <v-app class="blue ">
    <div class="stars">
　　<span></span><span></span>
　　<span></span><span></span>
　　<span></span><span></span>
　　<span></span><span></span>
　　<span></span><span></span>
　　<span></span><span></span>
　　<span></span><span></span>
　　<span></span><span></span>
　　<span></span><span></span>
　　<span></span><span></span>
        <div class="main">
            <Nuxt/>
        </div>
    </div>
      <div class="earth">

      </div>

  </v-app>
</template>

<script>
export default {
  name: 'loginLayout',
}
</script>

<style scoped>
.blue{
  background: #1c3463!important;
   overflow:hidden;
}
.main{
  margin-top:10%;
}
.stars{
    position: relative;
    width: 100%;
    height: 100%;
}
.stars span{
    display: inline-block;
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: rgba(223, 221, 153, 0.582);
    transform: rotate(30deg);
    opacity: 0.2;
    animation: blinking 1s linear var(--d) infinite;
}

@keyframes blinking{
    0%,100%{
      opacity: 0.2;
    }
    50%{
      transform: scale(1.5) rotate(45deg);
      opacity: 1;
    }
}
.stars span:nth-child(1){
    top: 10%;
    left: 10%;
    --d: 10s;
}
.stars span:nth-child(2){
    top: 20%;
    left: 20%;
    --d: 6s;
}
.stars span:nth-child(3){
    top: 30%;
    left: 30%;
    --d: 5s;
}
.stars span:nth-child(4){
    top: 10%;
    margin-left: 40%;
    --d: 4s;
}
.stars span:nth-child(5){
    top: 40%;
    left: 60%;
    --d: 7s;
}
.stars span:nth-child(6){
    top: 30%;
    left: 80%;
    --d: 9s;
}
.stars span:nth-child(7){
    top: 40%;
    left: 20%;
    --d: 8s;
}
.stars span:nth-child(8){
    top: 50%;
    left: 40%;
    --d: 15s;
}
.stars span:nth-child(9){
    top: 60%;
    left: 70%;
    --d: 14s;
}
.stars span:nth-child(10){
    top: 80%;
    left: 50%;
    --d: 11s;
}
.stars span:nth-child(11){
    top: 75%;
    left: 23%;
    --d: 20s;
}
.stars span:nth-child(12){
    top: 55%;
    left: 4%;
    --d: 24s;
}
.stars span:nth-child(13){
    top: 36%;
    left: 26%;
    --d: 8s;
}
.stars span:nth-child(14){
    top: 93%;
    left: 18%;
    --d: 3s;
}
.stars span:nth-child(15){
    top: 58%;
    left: 68%;
    --d: 2.6s;
}
.stars span:nth-child(16){
    top: 64%;
    left: 86%;
    --d: 1.5s;
}
.stars span:nth-child(17){
    top: 6%;
    left: 78%;
    --d: 3.5s;
}
.stars span:nth-child(18){
    top: 13%;
    left: 58%;
    --d: 6s;
}
.stars span:nth-child(19){
    top: 50%;
    left: 50%;
    --d: 8s;
}
.stars span:nth-child(20){
    top: 88%;
    left: 88%;
    --d: 7s;
}
.earth{
  position: absolute;
  top:70%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border:3px solid rgba(43, 178, 240, 0.5);
  Box-shadow: 8px 0px 30px 10px rgba(255, 247, 247, 0.856);
  border-radius:50%;
  margin: 0% 0%;
  background-image: url('https://w7.pngwing.com/pngs/560/817/png-transparent-globe-earth-globe-world-desktop-earth-cartoon-globe-sphere-earth.png');
  background-position: center center;
   background-repeat: no-repeat;
   background-size: Cover ;
   padding:0px;

}
</style>
