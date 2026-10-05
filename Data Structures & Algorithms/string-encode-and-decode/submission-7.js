class Solution {
  encode(strs) {
    if (strs.length === 0) return '';
    let sizes = [],
      res = '';
    for (let s of strs) {
      sizes.push(s.length);
    }
    for (let sz of sizes) {
      res += sz + ',';
    }
    res += '#';
    for (let s of strs) {
      res += s;
    }
    return res;
  }

  decode(str) {
	  if (str.length === 0) return [];
    let sizes = [];
    let i = 0;
    while (str[i] !== '#') {
      let cur = '';
      while (str[i] !== ',') {
        cur += str[i];
        i++;
      };
      sizes.push(+cur)
      i++;
    }

    i++;


    for (let index = 0, len = sizes.length; index < len; index++) {
      const size = sizes[index];
      sizes[index] = str.slice(i, i + size);
      i += size;
    }

    return sizes;
  }
}