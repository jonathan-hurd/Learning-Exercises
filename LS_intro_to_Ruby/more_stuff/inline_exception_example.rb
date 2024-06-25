zero = 0
puts "before each call"
zero.each { |element| puts element } rescue puts "Can't do that!"
puts "after each call"

