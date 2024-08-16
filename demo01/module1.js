const module1Method = (headStrList = []) => {
  let str = "";
  headStrList.forEach((headStr, index) => {
    if (index > 5) {
      str += `<h6>${headStr}</h6>`;
      return;
    }
    str += `<h${index + 1}>${headStr}</h${index + 1}>`;
  });
  str += `<p style="color:#009688;">create by module1Method</p>`;

  document.write(str);
};
export default module1Method;
