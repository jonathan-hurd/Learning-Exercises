# Write a while loop that takes input from the user, performs an action, and only stops when the user types "STOP". # Each loop can get info from the user.


while true
  puts "What would you like to shout? Type 'STOP' to exit"
  input = gets.chomp
  break if input == "STOP"
  puts input.upcase
end


input = ""
while input != "STOP" do
  puts "What would you like to shout?"
  shout = gets.chomp
  puts shout.upcase
  puts "Want to shout more?"
  input = gets.chomp
end
