# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
#   Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
def  biggie_size(arr):
    for i in range(0, len(arr), 1):
        if arr[i] > 0:
            arr[i] = 'big'
    return(arr)
print(biggie_size([-1, 3, 5, -5]))

# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
#   Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
#   Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
def count_positives(arr):
    countPos = 0
    for i in range(0, len(arr), 1):
        if arr[i] > 0:
            countPos += 1
    arr[len(arr)-1] = countPos
    return(arr)
print(count_positives([8, 6, 7, 5, 3, 0, 9, 1, 6, -4, -2, -7, -2]))

# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
#   Example: sum_total([1,2,3,4]) should return 10
#   Example: sum_total([6,3,-2]) should return 7
def sum_total(arr):
    summyBois = 0
    for i in range(0, len(arr), 1):
        summyBois += arr[i]
    return(summyBois)
print(sum_total([8, 6, 7, 5, 3, 0, 9, 1, 6, -4, -2, -7, -2]))

# Average - Create a function that takes a list and returns the average of all the values.x
#   Example: average([1,2,3,4]) should return 2.5
def avg(arr):
    avRage = 0
    for i in range(0, len(arr), 1):
        avRage += arr[i]
    avRage = avRage / len(arr)
    return(avRage)
print(avg([8, 6, 7, 5, 3, 0, 9]))

# Length - Create a function that takes a list and returns the length of the list.
#   Example: length([37,2,1,-9]) should return 4
#   Example: length([]) should return 0
def lenList(arr):
    length = len(arr)
    return(length)
print(lenList([8, 6, 7, 5, 3, 0, 9]))

# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
#   Example: minimum([37,2,1,-9]) should return -9
#   Example: minimum([]) should return False
def minValue(arr):
    if len(arr) == 0:
            return False
    m = arr[0]
    for i in range(0, len(arr), 1):        
        if arr[i] < m:
            m = arr[i]
    return(m)
print(minValue([8, 6, 7, 5, 3, 0, 9, -1]))

# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
#   Example: maximum([37,2,1,-9]) should return 37
#   Example: maximum([]) should return False
def maxValue(arr):
    if len(arr) == 0:
            return False
    m = arr[0]
    for i in range(0, len(arr), 1):        
        if arr[i] > m:
            m = arr[i]
    return(m)
print(maxValue([8, 6, 7, 5, 3, 0, 9, -1]))

# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
#   Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }
def ultimate_analysis(arr):
    if len(arr) == 0:
        return False
    length = len(arr)
    sum = 0
    min = arr[0]
    max = arr[0]
    for i in range(0, length, 1):
        sum += arr[i]
        if arr[i] < min:
            min = arr[i]
        if arr[i] > max:
            max = arr[i]
    avg = sum / length
    return f'sumTotal: {sum}; average: {avg}; minimum: {min}, maximum: {max}; length: {length}'
print(ultimate_analysis([8, 6, 7, 5, 3, 0, 9, -1]))

# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
#   Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]
def reverse_list(arr):
    return arr[::-1]
print(reverse_list([8, 6, 7, 5, 3, 0, 9, -1]))