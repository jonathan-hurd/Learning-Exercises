# Write a method that takes a string as an argument. The method should return a new, all-caps version of the string, only if the string is longer than 10 characters. Example: change "hello world" to "HELLO WORLD". (Hint: Ruby's String class has a few methods that would be helpful. Check the Ruby Docs!)

def all_caps(x)
  x = x.to_s
  puts x
  if x.length > 10
    puts x.upcase
  else
    puts "too short!"
  end
end

all_caps("well well")

all_caps("Hello world!")

all_caps(12504)

all_caps(21209850505)
