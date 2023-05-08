const preventShake = (func, time) => {
    let timeOutId = null;
    return () => {
        if (timeOutId !== null) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(func, time);
    }
}
export { preventShake }