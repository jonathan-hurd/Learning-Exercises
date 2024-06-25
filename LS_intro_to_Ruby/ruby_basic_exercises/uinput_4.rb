# while true
#   puts "Would you like me to print something?"
#   ans = gets.chomp.downcase
#   if ans == "y"
#     puts "Something"
#   elsif ans == "n"
#     break
#   else
#     puts "Please respond with (y/n)"
#   end
# end
  
ans = nil
loop do
  puts "Would you like me to print something? (y/n)"
  ans = gets.chomp.downcase
  break if %w(y n).include?(ans)
  puts "Please enter a valid input (y/n)"
end
puts "something" if ans == "y"


