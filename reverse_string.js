"use strict";

function rev_str(str) {
  var rev_str = "";
  for (let character of str) {
    rev_str = character + rev_str;
  }

  return rev_str;
}

//console.log(rev_str("Hello"));

function rev_str_arr(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(rev_str_arr("Hello my friend"));
