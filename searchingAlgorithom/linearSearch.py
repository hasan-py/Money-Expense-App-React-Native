def linearSearch(arr, searchValue):
    for i in range(len(arr)):
        if(arr[i] == searchValue):
            return i

    return -1


print(linearSearch([4, 23, 4, 5, 5], 10))
