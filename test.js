let signals = [1,2,3,4,5,6,7,8,9,10]

const signalsData = signals.filter((item) => {
  if (item>= 3 && item <= 7) {
    return item;
  }
});
while (signalsData && signalsData.length) {
  // 每次截取前50条处理
  const pageData = signalsData.splice(0, 3);
  console.log('signalsData', signalsData,signalsData.length === 0);
  console.log('pageData', pageData);
}