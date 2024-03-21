def InsertionSortInterleaved(numbers, numbersSize, startIndex, gap):
   i = 0
   j = 0
   temp = 0

   for (i = startIndex + gap; i < numbersSize; i = i + gap):
      j = i
      while (j - gap >= startIndex && numbers[j] < numbers[j - gap]):
         temp = numbers[j]
         numbers[j] = numbers[j - gap]
         numbers[j - gap] = temp
         j = j - gap