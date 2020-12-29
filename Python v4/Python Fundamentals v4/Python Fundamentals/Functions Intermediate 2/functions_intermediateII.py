# 1. Update Values in Dictionaries and Lists
    # Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
    # Change the last_name of the first student from 'Jordan' to 'Bryant'
    # In the sports_directory, change 'Messi' to 'Andres'
    # Change the value 20 in z to 30
x = [ [5,2,3], [15,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Bryant'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Andres', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 30} ]

# 2. Iterate Through a List of Dictionaries
    # Create a function iterateDictionary(some_list) that, given a list of dictionaries, 
    # the function loops through each dictionary in the list and prints each key and the associated value. 
    # For example, given the following list:
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(d):
    for i in range(0, len(d), 1):
        for ii, iii in d:
            sF = d[i].get(ii)
            sL = d[i].get(iii)
            print(f'{ii} - {sF}, {iii} - {sL}')
            break
iterateDictionary(students) 
    # should output: (it's okay if each key-value pair ends up on 2 separate lines;
    # bonus to get them to appear exactly as below!)
        # first_name - Michael, last_name - Jordan
        # first_name - John, last_name - Rosales
        # first_name - Mark, last_name - Guillen
        # first_name - KB, last_name - Tonel

# 3. Get Values From a List of Dictionaries
    # Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, 
    # the function prints the value stored in that key for each dictionary. 
    # For example, iterateDictionary2('first_name', students) should output:
        # Michael
        # John
        # Mark
        # KB
def iterateDictionary2(k, d):
    for i in range(0, len(d), 1):
        print(d[i].get(k))
iterateDictionary2('first_name', students)

# 4. Iterate Through a Dictionary with List Values
    # Create a function printInfo(some_dict) that given a dictionary whose values are all lists, 
    # prints the name of each key along with the size of its list, 
    # and then prints the associated values within each key's list. For example:
        # Jordan
        # Rosales
        # Guillen
        # Tonel
def printInfo(d):
    for i,ii in d:
        k1 = i
        k2 = ii
        break
    for i in range(0,len(d), 1):
        vCt = i + 1
    print(f'Key: {k1}; List Length: {vCt}')
    for i in range(0,len(d), 1):
        v = d[i].get(k1)
        print(v)
    for i in range(0,len(d), 1):
        vCt = i + 1
    print(f'Key: {k2}; List Length: {vCt}')
    for i in range(0,len(d), 1):
        v = d[i].get(k2)
        print(v)
printInfo(students)
