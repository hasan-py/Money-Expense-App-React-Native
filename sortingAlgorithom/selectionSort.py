# Selection Sort Algo Implement
def selectionSort(arr):
    i = 0
    while i < len(arr):
        lowest = i
        j = i + 1
        while j < len(arr):
            if arr[j] < arr[lowest]:
                lowest = j
            j += 1

        if i != lowest:
            temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp

        i += 1

    return arr


print(selectionSort([7, 5, 43, 4, 2, 1]))
