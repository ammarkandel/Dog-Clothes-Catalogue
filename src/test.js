const findElement = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

export default findElement;
