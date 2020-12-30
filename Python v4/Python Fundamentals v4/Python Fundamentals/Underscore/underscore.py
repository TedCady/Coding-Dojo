class Underscore:
    def map(self, iT, c):
        for i in range(0, len(iT),1):
            iT[i] *= c(1)
        print(iT)    
    def find(self, iT, c):
        for i in iT:
            if c(i):
                print(i)
                break
    def filter(self, iT, c):
        for i in iT:
            if c(i) != True:
                iT.remove(i)
        print(iT)
    def reject(self, iT, c):
        for i in iT:
            if c(i):
                iT.remove(i)
        print(iT)
# you just created a library with 4 methods!
# let's create an instance of our class
_ = Underscore() # yes we are setting our instance to a variable that is an underscore
_.map([1,2,3], lambda x: x*2) # should return [2,4,6]
_.find([1,2,3,4,5,6], lambda x: x>4) # should return the first value that is greater than 4
_.filter([1,2,3,4,5,6], lambda x: x%2==0) # should return [2,4,6]
_.reject([1,2,3,4,5,6], lambda x: x%2==0) # should return [1,3,5]