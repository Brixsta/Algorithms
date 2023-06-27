var characterReplacement = function (s, k) {
  let l = 0;
  let r = 0;
  let max = -Infinity;
  let obj = {};

  for (r = 0; r < s.length; r++) {
    obj[s[r]] = obj[s[r]] + 1 || 1;
    max = Math.max(obj[s[r]], max);
    if (r - l + 1 - max > k) {
      obj[s[l]]--;
      l++;
    }
  }
  return r - l;
};
