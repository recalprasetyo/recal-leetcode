/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
    const value = init;
    let val = init;
    const increment = () => ++val;
    const decrement = () => --val;
    const reset = () => (val = value);
    return {increment,reset,decrement};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
