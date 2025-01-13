// 日時取得
const today = new Date();

let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

// 今日の日付は...
console.log(year + '年' + month + '月' + day + '日');
