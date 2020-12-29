import random
def randInt(min=0,max=100):
    if min == max:
        return min
    if min > max or max < 0:
        return 'Error'
    randomNum = round((max * random.random() + min * random.random()))
    while(randomNum < min or randomNum > max):
        randomNum = round((max * random.random() + min * random.random()))
    return randomNum
print(randInt()) 	# should print a random integer between 0 to 100
print(randInt(max=50)) # should print a random integer between 0 to 50
print(randInt(min=50)) # should print a random integer between 50 to 100
print(randInt(min=50, max=500))    # should print a random integer between 50 and 500
