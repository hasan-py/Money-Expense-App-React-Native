

# Bubble Sort Algo Implement
def bubbleSort(arr):
    count = 0
    i = len(arr)
    noswap = False

    while i > 0:
        j = 0
        while j < i - 1:
            count += 1
            noswap = True
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noswap = False
            j += 1

        if noswap:
            break

        i -= 1

    print(count)
    return arr


print(bubbleSort([1, 2, 7, 5, 43, 4]))
