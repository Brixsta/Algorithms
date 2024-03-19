def pivotFunc (numbers, i, k):
  pivot = numbers[0]
  swapIdx = 0

  for i in range(k + 1):
    if(numbers[i] < pivot):
      swapIdx+=1
      temp = numbers[i]
      numbers[i] = numbers[swapIdx]
      numbers[swapIdx] = temp
  
  temp = numbers[0]
  numbers[0] = numbers[swapIdx]
  numbers[swapIdx] = temp

  return numbers

  


print(pivotFunc([5,4,1,6,12], 0, 4))