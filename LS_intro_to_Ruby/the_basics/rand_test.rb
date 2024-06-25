# I want to write a program that will use Random.new to generate a number between 1 and 9999
# that will continue to generate numbers until it generates one less that 1000.

# But of course I can give rand a range: rand(x..y)
# So rand(1000..9999) gives me a random 4 digit number

# Generating the number
my_number = rand(9999)

until my_number < 1000 
  puts my_number
  my_number = rand(9999)
end
puts my_number

