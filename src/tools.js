
const uid = (() => {
  let i = 0;
  return () => {
    return i++;
  };
})();

export { uid };