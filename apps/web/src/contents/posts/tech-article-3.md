---
title: "LeetCode 1480. Running Sum of 1d Array - Efficient Solution"
publishedAt: "2024-07-03"
category: LeetCode
tags:
  - Go
  - Array
  - Prefix Sum
summary: "Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]...nums[i])`. Return the running sum of `nums`."
banner: /images/banner/posts/1480-running-sum-of-1d-array.webp
alt: "LeetCode 1480. Running Sum of 1d Array - Efficient Solution"
mathjax: true
---

Link 👉🏻 [1480. Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array)

![LeetCode 1480. Running Sum of 1d Array - Efficient Solution](/images/banner/posts/1480-running-sum-of-1d-array.webp)

### Description

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]...nums[i])`.

Return the running sum of `nums`.

### Examples

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

**Example 2:**

```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

**Example 3:**

```
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

### Constraints

- `1 <= nums.length <= 1000`
- `-10^6 <= nums[i] <= 10^6`

## Solution

This problem asks us to calculate the running sum of an array. The running sum at index `i` is the sum of all elements from index `0` to index `i`.

### Approach

We can solve this problem in-place with a single pass through the array:

1. Start with the first element (which is already the running sum for index 0)
2. For each subsequent element at index `i`, add the previous running sum (at index `i-1`) to the current element

### Implementation in Go

```go
func runningSum(nums []int) []int {
    for i := 1; i < len(nums); i++ {
        nums[i] += nums[i-1]
    }
    return nums
}
```

### Time and Space Complexity

- **Time Complexity**: O(n) where n is the length of the input array. We only need to iterate through the array once.
- **Space Complexity**: O(1) if we don't count the output array. We're modifying the input array in-place without using any extra space.

### Alternative Implementation

If we want to preserve the original array, we can create a new array for the result:

```go
func runningSum(nums []int) []int {
    result := make([]int, len(nums))
    result[0] = nums[0]
    
    for i := 1; i < len(nums); i++ {
        result[i] = result[i-1] + nums[i]
    }
    
    return result
}
```

This approach has a space complexity of O(n) because we're creating a new array of the same length as the input array.

## Conclusion

The running sum problem is a classic example of a prefix sum algorithm. It's a simple yet powerful technique that can be used to solve many array-related problems efficiently. The key insight is that we can build on previous calculations to avoid redundant work.

This problem is a great introduction to the concept of prefix sums, which can be applied to more complex problems like range sum queries and sliding window algorithms. 