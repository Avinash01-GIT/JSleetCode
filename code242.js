var isAnagram = function(s, t) {
    if( s.length !== t.length) {
      console.log(false);
      return;
    }
    let map = {};

    for(let i = 0; i < s.length; i++){
      let letter = s[i];

      if(!map[letter]){
        map[letter] = 1;
      } else {
        map[letter]++;
      }
    }

    for(let i = 0; i < t.length; i++){
      let letter = t[i];
      if(map[letter] === undefined){
        console.log(false);
        return;
      }
      if(map[letter] < 1){
        console.log(false);
        return;
      }
      map[letter]--;
    }
    console.log(true);
};

isAnagram("anagram", "nagaram");