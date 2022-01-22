# def binarySearch(arr, searchValue):
#     left = 0
#     right = len(arr) - 1
#     while left <= right:
#         mid = (left + right) // 2
#         if arr[mid] == searchValue:
#             return mid
#         elif arr[mid] > searchValue:
#             right = mid - 1
#         else:
#             left = mid + 1
#     return -1

# print(binarySearch([1, 2, 3, 4, 5, 6, 7, 10], 2))  # 7


def binarySearchWithRecursion(arr, left, right, searchValue):
    if left <= right:
        mid = (left + right) // 2
        if arr[mid] == searchValue:
            return mid

        if arr[mid] > searchValue:
            return binarySearchWithRecursion(arr, left, mid - 1, searchValue)

        elif arr[mid] < searchValue:
            return binarySearchWithRecursion(arr, mid + 1, right, searchValue)

    return -1


arr = [1, 1, 2, 3, 5, 6, 8, 10, 12]
print(binarySearchWithRecursion(arr, 0, len(arr) - 1, 5))
