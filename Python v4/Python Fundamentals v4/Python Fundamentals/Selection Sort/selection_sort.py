def selection_sort(arr):
    for i in range(0,len(arr), 1):
        for ii in range(i+1, len(arr), 1):
            if arr[ii] < arr[i]:
                arr[i], arr[ii] = arr[ii], arr[i]
    return(arr)
print(selection_sort([8, 6, 7, 5, 3, 0, 9, 2, 1, 4, 10]))