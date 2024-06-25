loop do
  puts 'Should I stop looping?'
  answer = gets.chomp
  answer.downcase!
  if answer == "yes"
    break
  end
end
