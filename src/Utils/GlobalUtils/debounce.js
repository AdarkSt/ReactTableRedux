export const debounce = (func, ms) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=> {func.apply(this, ...args)}, ms)
    }
}