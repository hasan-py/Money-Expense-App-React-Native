import math


def binarySearch(arr, searchValue):
    left = 0
    right = len(arr) - 1

    while left < right:
        mid = math.floor(left + right / 2)

        if arr[mid] == searchValue:
            return mid

        if arr[mid] > searchValue:
            right = mid - 1

        elif arr[mid] < searchValue:
            left = mid + 1

    return -1


print(binarySearch([1, 2, 3, 5, 6, 8, 10, 12], 12))
