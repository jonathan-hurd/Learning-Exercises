loop do
  puts "How many output lines do you want? Enter 3 or greater"
  ans = gets.to_i
  if ans >= 3
    ans.times { puts "Launch school is the best!" }
    break
  else
    puts "Please enter a number 3 or greater"
  end
end
