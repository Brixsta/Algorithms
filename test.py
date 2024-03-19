def partition(numbers, i, k):
    midpoint = i + (k - i) // 2
    pivot = numbers[midpoint]

    done = False
    l = i
    h = k
    while not done:
        while numbers[l] < pivot:
            l = l + 1
        while pivot < numbers[h]:
            h = h - 1
            
        if l >= h:
            done = True
        else:
            temp = numbers[l]
            numbers[l] = numbers[h]
            numbers[h] = temp
            l = l + 1
            h = h - 1
    return h

print(partition([5,4,7,41,9,6,8], 0, 5))