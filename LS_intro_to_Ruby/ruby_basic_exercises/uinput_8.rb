loop do
  puts "How many output lines do you want? Enter 3 or greater. Q to quit"
  ans = gets.chomp
  if ans.upcase == 'Q'
    break
  elsif ans.to_i >= 3
    ans.to_i.times { puts "Launch school is the best!" }
  else
    puts "Please enter a number 3 or greater"
  end
end
