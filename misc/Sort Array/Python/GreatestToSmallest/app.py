def SortArray(sArr):
    i = 0
    while i < len(sArr):
        ii = i + 1
        while ii < len(sArr):
            if sArr[i] < sArr[ii]:
                temp = sArr[i]
                sArr[i] = sArr[ii]
                sArr[ii] = temp
            ii = ii + 1
        i = i + 1
    return sArr
arr = [8,6,7,5,3,0,9]    
print(SortArray(arr))