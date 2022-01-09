import { onMounted, onUnmounted, ref } from "vue";

function dealClock(date) {
    return date.toLocaleDateString().replace(/\//g, "-");
}
function dealTime(date) {
    return date.toTimeString().split(" ").shift();
}

export function clock() {
    let now = new Date();
    let date = ref(''), time = ref('');
    let task;
    const start = () => {
        task = setInterval(() => {
            now = new Date();
            date.value = dealClock(now);
            time.value = dealTime(now)
        }, 1000)
    }
    onMounted(() => start());
    onUnmounted(() => {
        task && clearInterval(task);
    })
    return {
        date,
        time
    }
}