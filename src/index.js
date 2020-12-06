import "./styles.scss";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// mapやfilterを使った配列処理
// const nameList = ['田中','鈴木','高橋','阪田'];
// for (let i = 0; i < nameList.length; i ++) {
//   console.log(`${i + 1}番目は${nameList[i]}です`);
// }
// nameList.map(name => console.log(name));

// const nameList2 = nameList.map((name, index) => {
//   return console.log(`${index + 1}番目は${name}です`)
// })

// filterを使った配列処理
// const numArr = [1,2,3,4,5];
// const numOdd = numArr.filter(num => num % 2 === 1);
// console.log(numOdd);

// 阪田以外には敬称を付けたい
// const newNameList = nameList.map(name => {
//   return name === '阪田' ? name : `${name}さん`;
//   // if (name === '阪田') {
//   //   return name;
//   // } else {
//   //   return `${name}さん`
//   // }
// });

// console.log(newNameList);

// const num = "1500";
// // console.log(num.toLocaleString());
// const formatNum = typeof num === "number" ? num.toLocaleString() : '数値を入力してください'

// console.log(formatNum);

const num = 100;
const message = num || "値があります。";
console.log(message);
