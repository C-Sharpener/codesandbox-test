/**
 * const, letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// val3 = "const変数を上書き":

// // const変数は再宣言不可能
// const val3 = "const変数を再宣言";

// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// // console.log(val4);

// // constで定義したオブジェクトはプロパティの上書きが可能
// val4.name = "jak";
// console.log(val4);

// // constで定義したオブジェクトはプロパティの追加が可能
// val4.address = "Hiroshima";
// console.log(val4);

// // ということで、今はほとんどconstしか使わない感じ、らしい

// const val5 = ["dog", "cat"];
// console.log(val5);

// // constで定義した配列は要素の上書きが可能
// val5[0] = "bird";
// console.log(val5);

// // constで定義した配列は要素の追加が可能
// val5.push("monkey");
// console.log(val5);

// reactの中で動的に値が変わるものは"state"というのを使う
// また、処理の中で変数が変わっていくものはletを使う

// 俺様談: でも俺としてはconstで上書き可能なのは気持ち悪いな

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// // 「私の名前はじゃけぇです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// 上と同じだが、constに入れて使う
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// アロー関数　引数が一つの場合は括弧を省略できる…が！
// pretierが勝手に括弧をつけてくれやがる
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// アロー関数　値を返すだけの場合はreturnを省略できる
// 慣れてないと読みづらいが、書き方は知っておくべき
// const func2 = (str) => str;
// console.log(func2("func2です"));

// // 複数の引数の例
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name) => console.log(`こんにちは${name}さん！`);
// sayHello("じゃけぇ");
// sayHello(); // こんにちはundefinedさん！

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("じゃけぇ");
// sayHello(); // こんにちはundefinedさん！

/**
 * スプレッド構文
 */
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// 一つにまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// // ん？これって別に
// // const arr6 = arr4;
// // でもいいんだよな？
// // →その通りだが、参照渡しなんで値を変更すると共連れになる↓
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4); // [100, 20]になっちまってる

// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4); // [10, 20]のまま

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がTrueの時 : 条件がFalseの時
// const val1 = 1 > 0 ? "Trueです" : "Falseです";
// console.log(val1);

// const num = 1300;
// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
// };
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう
 * ||は「または」じゃない
 * &&は「かつ」じゃない
 */
// const flag1 = true;
// // const flag2 = false;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は、左側がfalseなら右側を返す
// // const num = null;
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は、左側がtrueなら右側を返す
// const num2 = 100;
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
