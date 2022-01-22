import {onMounted, onUnmounted, ref} from "vue";

export default function () {
    const todayUser = ref(10000), growthLastDay = ref(10), growthLastMonth = ref(15);
    const endAverageAge = ref(32.9);
    let task;
    onMounted(() => {
        task = setInterval(() => {
            todayUser.value += 10;
            growthLastDay.value += 1;
            growthLastMonth.value += 1;
            endAverageAge.value += 1;
        }, 6000)
    })
    onUnmounted(() => task && clearInterval(task))
    return {
        todayUser,
        growthLastDay,
        growthLastMonth,
        endAverageAge
    }
}