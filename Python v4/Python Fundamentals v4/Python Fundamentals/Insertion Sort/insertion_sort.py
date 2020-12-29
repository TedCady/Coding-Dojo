def insertion_sort(arr):
    for i in range(0, len(arr), 1):
        for ii in range(i + 1, len(arr), 1):
            if arr[ii] < arr[i]:
                temp = arr[ii]
                for iii in range(ii, i, -1):
                    arr[iii] = arr[iii - 1]
                arr[i] = temp
    return(arr)
print(insertion_sort([8,6,7,5,3,0,9]))