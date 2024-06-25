
# number = (0..99).to_a
# 
# counter = 0
# 
# while counter < 5 
#   puts number.sample
#   counter += 1
# end
    
number = []

while number.length < 5
  number.push(rand(100))
end

puts number
