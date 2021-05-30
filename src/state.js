  
import { reactive, computed, toRefs } from "vue";
import { getCovid19 } from '@/api/api';

const state = reactive({
    data: [],
    //day: computed(() => {console.log('alo computed');return state.data[state.progress]}),
    day: computed(() =>  state.data[state.progress]),//computed là sẽ tính toán lại khi thành phần bên trong nó thay đổi
    nrDays: computed(() => state.data.length ),
    progress: 0,
    simulateRecovered: true,
    prevDay: computed(() => state.progress === 0 ? [] : state.data[state.progress - 1].data),
})
const load = async () => state.data = await getCovid19();

load();

const useState = () => toRefs(state)///nên đọc hay nè https://viblo.asia/p/mot-vai-thay-doi-ve-version-moi-cua-vuejs-vue-30-composition-api-L4x5x8ew5BM

export { useState };