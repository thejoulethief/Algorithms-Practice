//"abc";

function get_perm(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      for (let k = 0; k < str.length; k++) {
        arr.push(str[i] + str[j] + str[k]);
      }
    }
  }

  return arr;
}

console.log(get_perm("abc"));
