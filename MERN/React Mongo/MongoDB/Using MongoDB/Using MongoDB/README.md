
:white_check_mark: Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

## Output Format
#### Assignment Instruction
> Terminal Command
>> Result

## Output
#### :white_check_mark: Create a database called 'my_first_db'
>\> use my_first_db
>> switched to db my_first_db

#### :white_check_mark: Create students collection
>\> db.createCollection('students')
>>{ "ok" : 1 }
#### :white_check_mark: Create 5 students with the appropriate info
>\>
>>
#### :white_check_mark: Get all students
>\>
>>
#### :white_check_mark: Retrieve all students who are from:<br/> California (San Jose Dojo) or Washington (Seattle Dojo)
>\>
>>
#### :white_check_mark: Get all students whose lucky number is greater than 3
>\>
>>
#### :white_check_mark: Get all students whose lucky number is less than or equal to 10
>\>
>>
#### :white_check_mark: Get all students whose lucky number is between 1 and 9 (inclusive)
>\>
>>
#### :white_check_mark: Add a field to each student collection called 'interests' that is an ARRAY. <br/>It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation
>\>
>>
#### :white_check_mark: Add some unique interests for each particular student <br/>into each of their interest arrays
>\>
>>
#### :white_check_mark: Add the interest 'taxes' into someone's interest array
>\>
>>
#### :white_check_mark: Remove the 'taxes' interest you just added
>\>
>>
#### :white_check_mark: Remove all students who are from California
>\>
>>
#### :white_check_mark: Remove a student by name
>\>
>>
#### :white_check_mark: Remove a student whose lucky number is greater than 5 (JUST ONE)
>\>
>>
#### :white_check_mark: Add a field to each student collection called 'number_of_belts' and set it to 0
>\>
>>
#### :white_check_mark: Increment this field by 1 for all students in Washington (Seattle Dojo)
>\>
>>
#### :white_check_mark: Rename the 'number_of_belts' field to 'belts_earned'
>\>
>>
#### :white_check_mark: Remove the 'lucky_number' field
>\>
>>
#### :white_check_mark: Add a 'updated_on' field, and set the value as the current date
>\>
>>