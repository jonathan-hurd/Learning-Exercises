# Write a program called name.rb that asks the user to type in their name and then prints out a greeting 
# message with their name included.

puts "hello, what is your first name?"
first_name = gets.chomp
puts "what is your last name?"
last_name = gets.chomp

10.times {puts "it's nice to meet you " + first_name + " " + last_name}

