let str = " this is A tEst ";
let newArr = str.trim().split(" ");
let newStr = "";
for (let i = 0; i < newArr.length; i++) {
  newArr[i] =
    newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1).toLowerCase();
}

console.log(newArr.join(" "));

let str2 = "heLlo riKkei academy";
let newArr2 = str2.trim().split(" ");
let newStr2 = "";
for (let i = 0; i < newArr2.length; i++) {
  newArr2[i] =
    newArr2[i].charAt(0).toUpperCase() + newArr2[i].slice(1).toLowerCase();
}

console.log(newArr2.join(" "));
