<template>
    <div class="btn" :class="{pause:playing,play :!playing}">
        <span class="bar bar-1"></span>
        <span class="bar bar-2"></span>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    props:['playing'],
}
</script>
<style scoped>
    .btn
    {
        width: 25px;
        height: 25px;
        border: black 2.5px solid;
        cursor: pointer;
        position: relative;
        margin-left: 20px;
        margin-right: 20px;
    }
    /* .btn .bar-1:hover{
        background: red;
        transition: transform 0.4s ease-in-out, background-color 0.2s ease-in-out;
        transform: rotate(-55deg);
}
  .btn .bar-2:hover{
        background: red;
        transition: transform 0.4s ease-in-out, background-color 0.2s ease-in-out;
        transform: rotate(55deg);
} */
/* .btn:hover >.bar-1 */
.btn.play >.bar-1

{
 background: red;
        transition: transform 0.4s ease-in-out, background-color 0.2s ease-in-out,;
        transform: translateX(2.5px) translateY(-3px) rotate(-55deg);
}
/* .btn:hover >.bar-2 */
.btn.play >.bar-2
{
 background: red;
        transition: transform 0.4s ease-in-out, background-color 0.2s ease-in-out;
        transform: translateX(-1.5px) translateY(3.25px) rotate(-125deg); /* y là chia đôi height x là lùi lại left 2 - left 1 góc cộng lại = -180 hoặc 180 tùy hướng*/
}
.btn.pause >.bar-1
{
 background: red;
        transition: transform 0.4s ease-in-out, background-color 0.2s ease-in-out,;
        transform: rotate(0deg);
}
.btn.pause >.bar-2
{
 background: red;
        transition: transform 0.4s ease-in-out, background-color 0.2s ease-in-out;
        transform: rotate(0deg); /* y là chia đôi height x là lùi lại left 2 - left 1 góc cộng lại = -180 hoặc 180 tùy hướng*/
}
   .btn .bar {
       position: absolute;
       background: blueviolet;
       width: 2.5px;
       height: 12.5px;
       top: 6.25px;
       border-radius: 30%;
   }
 .btn .bar-1 {
       left: 9.5px;
   }
   .btn .bar-2 {
       left: 13.5px;
   }
</style>