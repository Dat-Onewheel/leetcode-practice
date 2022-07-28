/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Before we push an element into the deque, we first pop everything smaller than it out of the deque.
var maxSlidingWindow = function(nums, k) {
  let res = [];
  let q = [];
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    while (q && nums[q[q.length - 1]] < nums[r]) {
      q.pop();
    }
    q.push(r);
    if (l > q[0]) q.shift();
    if (r + 1 >= k) {
      res.push(nums[q[0]]);
      l++;
    }
    r++;
  }
  return res;
};
