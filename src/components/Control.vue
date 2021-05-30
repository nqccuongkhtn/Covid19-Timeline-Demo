<template>
    <div class="Control">
        <div class="Control1">
        <div class="Control_item1">
            <div style=" display: flex;flex-wrap: nowrap; align-items: center;">
              <PlayButton @click="control.playing = !control.playing" :playing="control.playing"/>
            <input Id="input_range" type="range" min="1" max="5000"  v-model.number="control.speed" :style="{ '--percentage': `${(control.speed/50)}%` }"  /> 
                <h4>&nbsp;{{(control.speed/1000).toFixed(1)}}s&nbsp;</h4>
                <img style="width:30px;height:30px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQzOC44NTIsMTE5LjE5MWMtMy4yOTMtMi4xNjMtNy42OTItMS40NTMtMTAuMTM3LDEuNjM1TDIxNi4xMzMsMzg5LjM1M2MtNi4zMDUsNy45MTktOS4xNDksMTcuODIxLTguMDA3LDI3Ljg3OQ0KCQkJczYuMTMyLDE5LjA3MSwxNC4wNTEsMjUuMzc2YzYuNzc1LDUuMzk0LDE0Ljk5OCw4LjI1NSwyMy41MzEsOC4yNTVjMS40NDIsMCwyLjg5NC0wLjA4Miw0LjM0Ny0wLjI0Ng0KCQkJYzEwLjA1OC0xLjE0MiwxOS4wNzEtNi4xMzIsMjUuMzc2LTE0LjA1MWMxLjY3MS0yLjEsMy45MS01Ljc2NSw0LjM0Mi02LjQ3OWMwLjA2OC0wLjExMiwwLjEzMy0wLjIyNSwwLjE5NC0wLjM0MWwxNjEuNDA5LTMwMC42MDENCgkJCUM0NDMuMjQsMTI1LjY3Miw0NDIuMTQ1LDEyMS4zNTMsNDM4Ljg1MiwxMTkuMTkxeiBNMjY2LjY2NSw0MjIuMzcyYy0wLjg4NCwxLjQ0OS0yLjM3MywzLjc2Ni0zLjEzMiw0LjcyMQ0KCQkJYy0zLjc3NSw0Ljc0Mi05LjE3LDcuNzMtMTUuMTkzLDguNDEzYy02LjAyMiwwLjY4Mi0xMS45NS0xLjAyLTE2LjY5MS00Ljc5NWMtNC43NDItMy43NzYtNy43My05LjE3LTguNDEzLTE1LjE5Mw0KCQkJYy0wLjY4My02LjAyMiwxLjAxOS0xMS45NSw0LjgwOC0xNi43MDdsMTU5LjM2NC0yMDEuMzAzTDI2Ni42NjUsNDIyLjM3MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ0Ny43ODksMTUzLjk1NGMtMi43MzYtMy4xODYtNy41MzctMy41NDktMTAuNzIzLTAuODEzYy0zLjE4NiwyLjczNi0zLjU1LDcuNTM4LTAuODEzLDEwLjcyMw0KCQkJYzM3LjM4Nyw0My41MTksNTguNjg4LDk4LjYxNiw2MC40MjMsMTU1Ljg5OUg0MzIuMjdjLTQuMDYyLTI4LjU3OS0xMy4yMjktNTUuODQ3LTI3LjI5MS04MS4xNDUNCgkJCWMtMi4wNC0zLjY3LTYuNjctNC45OTItMTAuMzQtMi45NTFjLTMuNjcsMi4wNC00Ljk5Miw2LjY3LTIuOTUxLDEwLjM0YzE0LjE4NiwyNS41MTksMjMuMDQ1LDUzLjE4MSwyNi4zMzQsODIuMjE2DQoJCQljMC40MzUsMy44NDQsMy42ODcsNi43NDgsNy41NTUsNi43NDhoNzguODJjNC4xOTksMCw3LjYwNC0zLjQwNSw3LjYwNC03LjYwNEM1MTIsMjYzLjczOCw0ODkuMTk2LDIwMi4xNTIsNDQ3Ljc4OSwxNTMuOTU0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDAyLjkyNiwxMTIuNDQyYy0yNC43ODgtMTguMTU1LTUyLjIzNy0zMS43NTYtODEuNTgyLTQwLjQyNmMtMjQuNDA5LTcuMjE4LTQ5LjgzMS0xMC44NzgtNzUuNTYxLTEwLjg3OA0KCQkJYy0zMi42NzcsMC02NC41OSw1Ljg1Mi05NC44NTQsMTcuMzk1Yy0zLjkyNCwxLjQ5Ni01Ljg5Miw1Ljg5MS00LjM5NSw5LjgxNGMxLjQ5NywzLjkyMyw1Ljg5Myw1Ljg5Miw5LjgxNCw0LjM5NA0KCQkJYzI4LjUyNi0xMC44OCw1OC42MTUtMTYuMzk2LDg5LjQzNC0xNi4zOTZjMjQuMjcsMCw0OC4yNDEsMy40NSw3MS4yNSwxMC4yNTRjMjcuNjYyLDguMTcyLDUzLjUzNywyMC45OTQsNzYuOTA3LDM4LjExMQ0KCQkJYzEuMzU0LDAuOTkyLDIuOTI4LDEuNDcsNC40ODcsMS40N2MyLjM0MSwwLDQuNjUxLTEuMDc4LDYuMTQxLTMuMTEyQzQwNy4wNDgsMTE5LjY4MSw0MDYuMzE0LDExNC45MjMsNDAyLjkyNiwxMTIuNDQyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzYxLjI5NywxODIuMTU5Yy0yMC4wNTYtMTkuMTIyLTQzLjA0Mi0zNC40MzUtNjguMzE4LTQ1LjUxM2MtMjkuOTY5LTEzLjE0LTYxLjg4NS0xOS44MDItOTQuODYzLTE5LjgwMg0KCQkJYy01My4zNDgsMC0xMDQuMTUyLDE3Ljg3Mi0xNDUuMDkzLDQ5LjY5OGMyMS44ODEtMjYuMjA1LDQ5LjA0My00Ny45MTMsNzkuOTYxLTYzLjQ5MWMzLjc1LTEuODksNS4yNTktNi40NjIsMy4zNjktMTAuMjEzDQoJCQljLTEuODg5LTMuNzUtNi40NjEtNS4yNTgtMTAuMjEzLTMuMzY5QzY5Ljc5OSwxMTcuODYsMjUuMjE3LDE2NS40NDEsMC42MDUsMjIzLjQ0OWMtMS41MzMsMy42MTItMC4wNjUsNy43OTcsMy4zODgsOS42NjENCgkJCWMxLjE0NSwwLjYxOCwyLjM4NCwwLjkxNCwzLjYwNywwLjkxNGMyLjQ2NywwLDQuODczLTEuMjAxLDYuMzI5LTMuMzgyYzQxLjIyNC02MS43MzQsMTEwLjA3OS05OC41OSwxODQuMTg3LTk4LjU5DQoJCQljMzAuODYzLDAsNjAuNzI1LDYuMjMxLDg4Ljc1NiwxOC41MjJjMjMuNjUsMTAuMzY3LDQ1LjE1OSwyNC42OTcsNjMuOTMsNDIuNTkyYzMuMDQsMi44OTgsNy44NTMsMi43ODQsMTAuNzUxLTAuMjU3DQoJCQlDMzY0LjQ1MSwxODkuODcsMzY0LjMzNywxODUuMDU3LDM2MS4yOTcsMTgyLjE1OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI0Ny4wMzYsNDA5LjA2MWMtMi43NDktMS43MjctNi4zNzEtMS41MTUtOC44ODgsMC41NDNjLTUuNDA2LDQuNDE5LTIuMTQ3LDEzLjQ4Niw0LjgxOCwxMy40ODYNCgkJCWMzLjQ0OSwwLDYuNTM4LTIuNDIsNy4zNzktNS43NjFDMjUxLjEzMyw0MTQuMTk1LDI0OS43NzUsNDEwLjc4MiwyNDcuMDM2LDQwOS4wNjF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                <h3 id="h3_1_Control">Tracked recovered</h3>
                <div class="slider" @click="simulateRecovered=!simulateRecovered">
                    <div  v-bind:class="[simulate]" ></div>
                </div>
                <h3 id="h3_2_Control">Estimated recovered</h3>
                <img  style="width:30px;height:30px"  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTcsMEMxMTYuMzksMCwwLDExNC4zOSwwLDI1NXMxMTYuMzksMjU3LDI1NywyNTdzMjU1LTExNi4zOSwyNTUtMjU3UzM5Ny42MSwwLDI1NywweiBNMjg3LDM5MmMwLDE2LjU0LTEzLjQ3LDMwLTMwLDMwDQoJCQljLTE2LjU0LDAtMzAtMTMuNDYtMzAtMzBWMjQwYzAtMTYuNTQsMTMuNDYtMzAsMzAtMzBjMTYuNTMsMCwzMCwxMy40NiwzMCwzMFYzOTJ6IE0yNTcsMTUwYy0xNi41NCwwLTMwLTEzLjQ2LTMwLTMwDQoJCQlzMTMuNDYtMzAsMzAtMzBjMTYuNTMsMCwzMCwxMy40NiwzMCwzMFMyNzMuNTMsMTUwLDI1NywxNTB6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
            </div>
           </div>
           <div class="Control_item2">
                <Stats/>
           </div>      
        </div>
           <div class="Control_2">
       <img style="width:25px;height:25px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjM2LjQ0OXB4IiBoZWlnaHQ9IjM2LjQ0OHB4IiB2aWV3Qm94PSIwIDAgMzYuNDQ5IDM2LjQ0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYuNDQ5IDM2LjQ0ODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zMC4yMjQsMy45NDhoLTEuMDk4VjIuNzVjMC0xLjUxNy0xLjE5Ny0yLjc1LTIuNjctMi43NWMtMS40NzQsMC0yLjY3LDEuMjMzLTIuNjcsMi43NXYxLjE5N2gtMTAuODJWMi43NQ0KCQkJYzAtMS41MTctMS4xOTctMi43NS0yLjY3LTIuNzVjLTEuNDczLDAtMi42NywxLjIzMy0yLjY3LDIuNzV2MS4xOTdINi4yMjRjLTIuMzQzLDAtNC4yNSwxLjkwNy00LjI1LDQuMjV2MmgyLjVoMjcuNWgyLjV2LTINCgkJCUMzNC40NzQsNS44NTUsMzIuNTY4LDMuOTQ4LDMwLjIyNCwzLjk0OHogTTExLjQ2Niw3LjY0NmMwLDAuNjg5LTAuNTI1LDEuMjUtMS4xNywxLjI1cy0xLjE3LTAuNTYxLTEuMTctMS4yNVYyLjc1DQoJCQljMC0wLjY4OSwwLjUyNS0xLjI1LDEuMTctMS4yNXMxLjE3LDAuNTYxLDEuMTcsMS4yNVY3LjY0NnogTTI3LjYyNiw3LjY0NmMwLDAuNjg5LTAuNTI1LDEuMjUtMS4xNywxLjI1DQoJCQljLTAuNjQ2LDAtMS4xNy0wLjU2MS0xLjE3LTEuMjVWMi43NWMwLTAuNjg5LDAuNTI0LTEuMjUsMS4xNy0xLjI1YzAuNjQ1LDAsMS4xNywwLjU2MSwxLjE3LDEuMjVWNy42NDZ6Ii8+DQoJCTxyZWN0IHg9IjI2LjEyOCIgeT0iMTcuMzE0IiB3aWR0aD0iMi41OTYiIGhlaWdodD0iMi4wODgiLz4NCgkJPHJlY3QgeD0iMTMuODU5IiB5PSIxNy4zMTQiIHdpZHRoPSIyLjU5NiIgaGVpZ2h0PSIyLjA4OCIvPg0KCQk8cmVjdCB4PSIxOS45OTYiIHk9IjE3LjMxNCIgd2lkdGg9IjIuNTk1IiBoZWlnaHQ9IjIuMDg4Ii8+DQoJCTxwYXRoIGQ9Ik0xLjk3NCwzMi4xOThjMCwyLjM0MywxLjkwNyw0LjI1LDQuMjUsNC4yNWgyNGMyLjM0NCwwLDQuMjUtMS45MDcsNC4yNS00LjI1VjEyLjA5OWgtMzIuNVYzMi4xOTh6IE0yNS4xMjgsMTYuMzE0aDQuNTk2DQoJCQl2NC4wODhoLTQuNTk2VjE2LjMxNHogTTI1LjEyOCwyMS43NzFoNC41OTZ2NC4wODZoLTQuNTk2VjIxLjc3MXogTTI1LjEyOCwyNy4yMjloNC41OTZ2NC4wODZoLTQuNTk2VjI3LjIyOXogTTE4Ljk5NiwxNi4zMTQNCgkJCWg0LjU5NXY0LjA4OGgtNC41OTVWMTYuMzE0eiBNMTguOTk2LDIxLjc3MWg0LjU5NXY0LjA4NmgtNC41OTVWMjEuNzcxeiBNMTguOTk2LDI3LjIyOWg0LjU5NXY0LjA4NmgtNC41OTVWMjcuMjI5eg0KCQkJIE0xMi44NTksMTYuMzE0aDQuNTk2djQuMDg4aC00LjU5NlYxNi4zMTR6IE0xMi44NTksMjEuNzcxaDQuNTk2djQuMDg2aC00LjU5NlYyMS43NzF6IE0xMi44NTksMjcuMjI5aDQuNTk2djQuMDg2aC00LjU5NlYyNy4yMjkNCgkJCXogTTYuNzI0LDIxLjc3MWg0LjU5NnY0LjA4Nkg2LjcyNFYyMS43NzF6IE02LjcyNCwyNy4yMjloNC41OTZ2NC4wODZINi43MjRWMjcuMjI5eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
       <h3>{{dayy}}&nbsp;&nbsp;</h3><h3>{{progress}}&nbsp;&nbsp;</h3>
       <input id="input_range_2" type="range" min="0" :max="nrDays-1"  v-model.number="progress" :style="{'--percentage2':`${(progress/(nrDays-1))*100}%`}"> 
    </div>
    </div>
</template>
<script>
import PlayButton from '@/components/PlayButton'
import Stats from '@/components/Stats'
import {useState} from '@/state.js'
import { reactive,computed, toRefs,watch } from 'vue'
 const state = useState();
export default
{
    data() {
    return {
        dayy: 'One',
        simulate:'One',
    }
  },
   beforeCreate() //xem lại vòng đời nha https://www.9spl.com/blog/4-main-categories-vuejs-lifecycle/ vì setup chạy sau creat nên data chưa có để lên template nên xảy ra lỗi
    {
        this.$nextTick(function()
        {
             this.dayy= computed(() => new Intl.DateTimeFormat().format(new Date(state.day.value.date)));
             this.simulate=computed(() => {if(state.simulateRecovered.value){
                return 'slider_1'
            }
                return 'slider_2'
            });
    })
    },
    setup(){
    //     created(() => {
    //   console.log('Component is created!')
    // })
    const control = reactive({
      playing: true,
      speed: 1500,
      intervalId: -1,//ID interval để xóa 
    })
    const startInterval=(state,control)=>
    {
        return setInterval(()=>   //setInterval sẽ lặp lại sau 1 khoảng time liên tục
        {
             state.progress.value++;
        if(state.progress.value>=state.nrDays.value)
            {
                control.playing=false;
                state.progress.value=state.nrDays.value-1;
            }
    },control.speed)};
    control.intervalId=startInterval(state,control);
    watch([toRefs(control).playing,toRefs(control).speed],()=>
    {
        clearInterval(control.intervalId);
        if(control.playing)
        {
            if(state.progress.value>=state.nrDays.value-1)
            {
                state.progress.value=0;
            }
            control.intervalId=startInterval(state,control);
        }
        
    });
     
    return {control,nrDays:state.nrDays,progress:state.progress,day:state,simulateRecovered:state.simulateRecovered};
    },
    components:{PlayButton,Stats},
    
}
</script>

<style scoped>
    *{
        --percentage:30%;
        --percentage2:30%;
       
    }
    .Control1
    {
        display: grid;
        grid-template-rows: 120px;
        grid-template-columns: 4fr 7fr;
        align-items: center;
        /* flex-wrap: nowrap; */
        /* align-items: center; */
        /* background: chartreuse; */
        /* height: 80px; */
    }
    .Control_2
    {
        display: flex;
        align-items: center;
        margin-left: 22px;
        margin-right: 20px;
        width: 100%;
    }
    .Control_2>img
    {
        margin-right: 20px;
    }
    #h3_1_Control
    {
        width: 80px;
        margin-left:20px ;
        margin-right:10px ;
    }
    #h3_2_Control
    {
        width: 80px;
        margin-left:20px ;
        margin-right:10px ;
    }
    
    #input_range
    { 
        /* overflow: hidden; */
        width: 200px;
        height: 5px;
        /* background: #d1e2df ; */
         background: linear-gradient(90deg,#397367 var(--percentage), #d1e2df 0% );
        cursor: pointer;
        appearance: none; /* bỏ màu cũ */
    }
    
    #input_range_2
    { 
        /* overflow: hidden; */
        width: 100%;
        height: 5px;
        appearance: none; /* bỏ màu cũ */
         background: linear-gradient(90deg,#397367 var(--percentage2), #d1e2df 0% );
        cursor: pointer;
    }
     /* #input_range::-webkit-slider-thumb 
     {
          box-shadow: -200px 0 0 200px #397367;dùng bóng đổ để chia 2 màu 
     }
       #input_range_2::-webkit-slider-thumb 
     {
          box-shadow: -3000px 0 0 3000px #397367;dùng bóng đổ để chia 2 màu 
     }  */
    [type='range']::-webkit-slider-thumb {/*chấm tròn chỉ điểm value*/ 
     /*overflow: none;*/
        appearance: none;
        opacity: 0; 
        transition: opacity 0.25s ease-in-out;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #a7b9a8;
        cursor: pointer;
    
    }
    [type='range']:hover::-webkit-slider-thumb {
        opacity: 1;
    }

    .slider
    {
        display: flex;
        width: 64px;
        height: 28px;
       background: #397367;
        border-radius: 3px;
         align-items: center;
    }
    .slider_1
    {
        position: relative;
        left: 2.5px;
        width: 30px;
        height: 23px;
        background: #79caba;
        border-radius: 3px;
        transition:left 0.4s ease-in-out;        /*left là thuộc tính thực hiên transition không ghi nó vẫn tự động hiểu chưa rõ lắm tạm hiểu là v */
    }
       .slider_2
    {
        position: relative;
        left: 32.5px;
        width: 30px;
        height: 23px;
       background: #79caba;
        border-radius: 3px;
        transition:left 0.4s ease-in-out;
    }
     /* .slider_1:active 
    {
        left: 32.5px;
       transition: 0.4s ease-in-out;
    } */

   @media only screen and (max-width: 1150px) {
   .Control1
    {
        display: grid;
        grid-template-rows: 80px;
        grid-template-columns: 1fr;
    }
   }
</style>