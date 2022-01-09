export function debounce(delay, callback) {
    let task;
    return function (...args) {
        if (task) {
            clearTimeout(task);
            task = null;
        }
        task = setTimeout(() => {
            callback.apply(this, ...args)
        }, delay)
    }
}