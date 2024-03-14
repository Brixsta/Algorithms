def binary_search(array, target):
  start = 0
  end = len(array) - 1

  while(start <= end):
    print('searching')
    mid = (start + end) // 2
    if(array[mid] == target):
      print(f'Found {target} on index {mid}')
      return
    elif(array[mid] < target):
      start = mid + 1
    elif(array[mid] > target):
      end = mid - 1
  
  print(f'Sorry could not find {target}')
    



binary_search([1,2,3,4,5, 6, 7, 8], 8)