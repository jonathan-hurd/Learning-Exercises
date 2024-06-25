# Use the modulo operator, division, or a combination of both to take a 
# 4 digit number and find the digit in the: 1) thousands place 2) hundreds place 3) 
# tens place 4) ones place 


# The random four digit number
a = rand(1000..9999)
puts a

# The thousands place
puts a / 1000

# The hundreds place
puts a % 1000 / 100

# The tens place
puts a % 1000 % 100 / 10

# The ones place
puts a % 1000 % 100 % 10



