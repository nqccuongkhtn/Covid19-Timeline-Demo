<template>
    <span id="info_left">
            <span  class="info_1_Control" style="margin-left:30px">
                <span  class="info_1_Control_chilrd">
                    <span >Current Infected:&nbsp; </span >
                    <span >{{currentInfected}}</span >
                </span>          
              <!-- <span class="info_2_Control"><img style="width:10px;height:10px" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTUwNy4zNzUgNDMwLjU1LTIyMS40NzEtMzgzLjYxNC0yOS45MDQgODYuMjk5IDE2MS42ODMgMjgwLjA1M3oiIGZpbGw9IiNiMTI2MjkiLz48L2c+PHBhdGggZD0ibTI3My4yNTUgMzQuM2MtMTYuNTEyLTkuNTMzLTM3LjYyNi0zLjg3NS00Ny4xNTkgMTIuNjM3bC0yMjEuNDcxIDM4My42MTMgODkuNjkyLTE3LjI2MiAxOTEuNTc1LTMzMS44M2M5LjUzMy0xNi41MTIgMy44NzUtMzcuNjI1LTEyLjYzNy00Ny4xNTh6IiBmaWxsPSIjZTQzMTM1Ii8+PHBhdGggZD0ibTUxMiA0NDUuNzkxdjQuMDRjMCAxNy45NS0xNC41NSAzMi41LTMyLjUgMzIuNWgtNDQ3Yy0xNy45NSAwLTMyLjUtMTQuNTUtMzIuNS0zMi41di00LjA0YzAtMTcuOTUgMTQuNTUtMzIuNSAzMi41LTMyLjVoNDQ3YzE3Ljk1IDAgMzIuNSAxNC41NSAzMi41IDMyLjV6IiBmaWxsPSIjZmQ2YjUzIi8+PHBhdGggZD0ibTUxMiA0NDUuNzkxdjQuMDRjMCAxNy45NS0xNC41NSAzMi41LTMyLjUgMzIuNWgtMjIzLjV2LTY5LjA0aDIyMy41YzE3Ljk1IDAgMzIuNSAxNC41NSAzMi41IDMyLjV6IiBmaWxsPSIjZTQzMTM1Ii8+PC9nPjwvc3ZnPg==" /><span>1234</span></span> -->
               <span v-html="currentInfectedChange"></span>
            </span>
            <span   class="info_1_Control">
               <span  class="info_1_Control_chilrd">
                    <span>Total Cases:&nbsp;</span>
                    <span>{{totalCases}}</span>
                </span>                 
                <!-- <span class="info_2_Control"><img style="width:10px;height:10px" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTUwNy4zNzUgNDMwLjU1LTIyMS40NzEtMzgzLjYxNC0yOS45MDQgODYuMjk5IDE2MS42ODMgMjgwLjA1M3oiIGZpbGw9IiNiMTI2MjkiLz48L2c+PHBhdGggZD0ibTI3My4yNTUgMzQuM2MtMTYuNTEyLTkuNTMzLTM3LjYyNi0zLjg3NS00Ny4xNTkgMTIuNjM3bC0yMjEuNDcxIDM4My42MTMgODkuNjkyLTE3LjI2MiAxOTEuNTc1LTMzMS44M2M5LjUzMy0xNi41MTIgMy44NzUtMzcuNjI1LTEyLjYzNy00Ny4xNTh6IiBmaWxsPSIjZTQzMTM1Ii8+PHBhdGggZD0ibTUxMiA0NDUuNzkxdjQuMDRjMCAxNy45NS0xNC41NSAzMi41LTMyLjUgMzIuNWgtNDQ3Yy0xNy45NSAwLTMyLjUtMTQuNTUtMzIuNS0zMi41di00LjA0YzAtMTcuOTUgMTQuNTUtMzIuNSAzMi41LTMyLjVoNDQ3YzE3Ljk1IDAgMzIuNSAxNC41NSAzMi41IDMyLjV6IiBmaWxsPSIjZmQ2YjUzIi8+PHBhdGggZD0ibTUxMiA0NDUuNzkxdjQuMDRjMCAxNy45NS0xNC41NSAzMi41LTMyLjUgMzIuNWgtMjIzLjV2LTY5LjA0aDIyMy41YzE3Ljk1IDAgMzIuNSAxNC41NSAzMi41IDMyLjV6IiBmaWxsPSIjZTQzMTM1Ii8+PC9nPjwvc3ZnPg==" /><span>1234</span></span> -->
                  <span v-html="totalCasesChange"></span>
            </span>
            <span   class="info_1_Control">
                <span  class="info_1_Control_chilrd">
                   <span>Recovered Cases:&nbsp;</span>
                    <span>{{recoveredCases}}</span>
                </span>            
                <!-- <span class="info_2_Control"><img style="width:10px;height:10px" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTUwNy4zNzUgNDMwLjU1LTIyMS40NzEtMzgzLjYxNC0yOS45MDQgODYuMjk5IDE2MS42ODMgMjgwLjA1M3oiIGZpbGw9IiNiMTI2MjkiLz48L2c+PHBhdGggZD0ibTI3My4yNTUgMzQuM2MtMTYuNTEyLTkuNTMzLTM3LjYyNi0zLjg3NS00Ny4xNTkgMTIuNjM3bC0yMjEuNDcxIDM4My42MTMgODkuNjkyLTE3LjI2MiAxOTEuNTc1LTMzMS44M2M5LjUzMy0xNi41MTIgMy44NzUtMzcuNjI1LTEyLjYzNy00Ny4xNTh6IiBmaWxsPSIjZTQzMTM1Ii8+PHBhdGggZD0ibTUxMiA0NDUuNzkxdjQuMDRjMCAxNy45NS0xNC41NSAzMi41LTMyLjUgMzIuNWgtNDQ3Yy0xNy45NSAwLTMyLjUtMTQuNTUtMzIuNS0zMi41di00LjA0YzAtMTcuOTUgMTQuNTUtMzIuNSAzMi41LTMyLjVoNDQ3YzE3Ljk1IDAgMzIuNSAxNC41NSAzMi41IDMyLjV6IiBmaWxsPSIjZmQ2YjUzIi8+PHBhdGggZD0ibTUxMiA0NDUuNzkxdjQuMDRjMCAxNy45NS0xNC41NSAzMi41LTMyLjUgMzIuNWgtMjIzLjV2LTY5LjA0aDIyMy41YzE3Ljk1IDAgMzIuNSAxNC41NSAzMi41IDMyLjV6IiBmaWxsPSIjZTQzMTM1Ii8+PC9nPjwvc3ZnPg==" /><span>1234</span></span> -->
                <span v-html="recoveredCaseschange"></span>
            </span>
            <span   class="info_1_Control">
                <span  class="info_1_Control_chilrd">
                   <span>Total Deaths:&nbsp; </span>
                    <span>{{totalDeaths}}</span>
                </span>                   
                <!-- <span class="info_2_Control"><img style="width:10px;height:10px" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTUwNy4zNzUgNDMwLjU1LTIyMS40NzEtMzgzLjYxNC0yOS45MDQgODYuMjk5IDE2MS42ODMgMjgwLjA1M3oiIGZpbGw9IiNiMTI2MjkiLz48L2c+PHBhdGggZD0ibTI3My4yNTUgMzQuM2MtMTYuNTEyLTkuNTMzLTM3LjYyNi0zLjg3NS00Ny4xNTkgMTIuNjM3bC0yMjEuNDcxIDM4My42MTMgODkuNjkyLTE3LjI2MiAxOTEuNTc1LTMzMS44M2M5LjUzMy0xNi41MTIgMy44NzUtMzcuNjI1LTEyLjYzNy00Ny4xNTh6IiBmaWxsPSIjZTQzMTM1Ii8+PHBhdGggZD0ibTUxMiA0NDUuNzkxdjQuMDRjMCAxNy45NS0xNC41NSAzMi41LTMyLjUgMzIuNWgtNDQ3Yy0xNy45NSAwLTMyLjUtMTQuNTUtMzIuNS0zMi41di00LjA0YzAtMTcuOTUgMTQuNTUtMzIuNSAzMi41LTMyLjVoNDQ3YzE3Ljk1IDAgMzIuNSAxNC41NSAzMi41IDMyLjV6IiBmaWxsPSIjZmQ2YjUzIi8+PHBhdGggZD0ibTUxMiA0NDUuNzkxdjQuMDRjMCAxNy45NS0xNC41NSAzMi41LTMyLjUgMzIuNWgtMjIzLjV2LTY5LjA0aDIyMy41YzE3Ljk1IDAgMzIuNSAxNC41NSAzMi41IDMyLjV6IiBmaWxsPSIjZTQzMTM1Ii8+PC9nPjwvc3ZnPg==" /><span>1234</span></span> -->
                <span v-html="totalDeathsChange"></span>
            </span>
           </span>
</template>
<script>
import { computed } from 'vue';
import {useState} from '@/state.js';
import {getArrowText} from '@/arrow.js';
const state=useState();
const sumBy=(arr,prop)=>
{
    return arr.reduce((acc,current)=>// xem thêm về reduce https://viblo.asia/p/reduce-javascript-Eb85oxW0K2G
    {
        var num=current[prop];
        if(isNaN(num))
        {
            return acc;
        }
        return acc+num;
    },0);
}

export default {
     data() {
    return {
        totalCases: 'One',
        totalDeaths:'One',
        currentInfected:'One',
        recoveredCases:'One',
        totalCasesChange:'One',
        totalDeathsChange:'One',
        recoveredCaseschange:'One',
        recoveredCasesPrev:'One',
        currentInfectedChange:'One',
        lol:'One'
    }
  },
    beforeCreate() //xem lại vòng đời nha https://www.9spl.com/blog/4-main-categories-vuejs-lifecycle/ vì setup chạy sau creat nên data chưa có để lên template nên xảy ra lỗi
    {
        this.$nextTick(function()
        {
             this.totalCases= computed(()=>sumBy(state.day.value.data,'cases'));
                     this.totalCasesChange=computed(()=>getArrowText(sumBy(state.prevDay.value,'cases'),this.totalCases));
                     //
              this.totalDeaths= computed(()=>sumBy(state.day.value.data,'deaths'));
              this.totalDeathsChange=computed(()=>getArrowText(sumBy(state.prevDay.value,'deaths'),this.totalDeaths));
              //
                this.currentInfected= computed(() => this.totalCases - this.recoveredCases - this.totalDeaths);
                this.lol= computed(() => sumBy(state.prevDay.value,'cases') - sumBy(state.prevDay.value,'deaths') - this.recoveredCasesPrev);
                this.currentInfectedChange=computed(()=>getArrowText( this.lol,this.currentInfected)); 
                //
                  this.recoveredCases=  computed(() => {
            if(state.simulateRecovered.value){
                return sumBy(state.day.value.data, 'estimateRecovered')//chờ 3 tuần mới được tính là ca hồi phục
            }
            return sumBy(state.day.value.data, 'recovered')
        });
        this.recoveredCasesPrev=computed(()=>{if(state.simulateRecovered.value){
                return sumBy(state.prevDay.value,'estimateRecovered');
            }       
            return sumBy(state.prevDay.value,'recovered')});
        this.recoveredCaseschange=computed(()=>
            getArrowText(this.recoveredCasesPrev,this.recoveredCases,false,true)
        );
        });
    },
    setup() {
        // var totalCases=computed(()=>sumBy(state.day.value.data,'case'));
        //  return{totalCases:totalCases,}        
    }, 
}
</script>
<style scoped>
#info_left
    {
         /* display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;  */
         display: flex; 
    }
     .info_1_Control
    {    
       font-size: 20px;
       font-weight: 600;
       padding-left: 20px;
    }
     .info_1_Control_chilrd
     {
        display: flex;
        flex-wrap: wrap; 
         /* padding: 0 20px; */
    } 
    .info_1_Control_chilrd > span:nth-child(1)
    {
         font-weight: 500 !important;
    }
    .info_2_Control
    {
        display: flex;
        position: relative;
        left: 30%;
        align-items: center;
    }
    .info_2_Control > p
    {
        font-size: 17px;
        font-weight: 100;
        margin-left: 5px;
    }
    @media only screen and (max-width: 1150px) {
    .info_2_Control > p
    {
         display: inline-block;
    }
    .info_2_Control
    {
        left: 10%;
    }
    .color-red{
  color: #d21921;
}
.color-green{
  color: #159c33;
}
   }
</style>