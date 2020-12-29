# #1 Prints 5
# def a():
#     return 5
# print(a())

# #2 Prints 5 + 5
# def a():
#     return 5
# print(a()+a())

# #3 Prints 5.  'return' ends the functions prior to the next line
# def a():
#     return 5
#     return 10
# print(a())

# #4 Same as #3
# def a():
#     return 5
#     print(10)
# print(a())

# #5 Prints 5 from within the function.  x has no value since there is no return
# def a():
#     print(5)
# x = a()
# print(x)

# # 6 no return causes error
# def a(b,c):
#     print(b+c)
# print(a(1,2) + a(2,3))

# #7 Strings are concatenated rather than added 
# def a(b,c):
#     return str(b)+str(c)
# print(a(2,5))

# #8 spaces on line 45 rather than tabs cause error
# def a():
#     b = 100
#     print(b)
#     if b < 10:
#         return 5
#     else:
#         return 10
#     return 7
# print(a())

# #9 compares integers and returns designated result
# def a(b,c):
#     if b<c:
#         return 7
#     else:
#         return 14
#     return 3
# print(a(2,3))
# print(a(5,3))
# print(a(2,3) + a(5,3))

# #10 returns b + c, will never return 10 unless b + c = 10
# def a(b,c):
#     return b+c
#     return 10
# print(a(3,5))

# #11 prints variations of b
# b = 500
# print(b)
# def a():
#     b = 300
#     print(b)
# print(b)
# a()
# print(b)

# #12 same as #11, just with a fancy return thrown in
# b = 500
# print(b)
# def a():
#     b = 300
#     print(b)
#     return b
# print(b)
# a()
# print(b)

# #13 ...same thing, with more steps
# b = 500
# print(b)
# def a():
#     b = 300
#     print(b)
#     return b
# print(b)
# b=a()
# print(b)

# #14 Calls a(), which prints 1, then calls b(), which prints 3, then returns to a(), which prints 2
# def a():
#     print(1)
#     b()
#     print(2)
# def b():
#     print(3)
# a()

# #15 same thing, more steps
# def a():
#     print(1)
#     x = b()
#     print(x)
#     return 10
# def b():
#     print(3)
#     return 5
# y = a()
# print(y)
