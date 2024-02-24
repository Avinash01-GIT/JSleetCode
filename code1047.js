var removeDuplicates = function(s) {
  var st = [];
for (let char of s) {
  if (st.length === 0 || char !== st[st.length - 1]) {
    st.push(char);
  } else {
    st.pop();
  }
}
console.log( st.join("") );
};

removeDuplicates("aabbca");




