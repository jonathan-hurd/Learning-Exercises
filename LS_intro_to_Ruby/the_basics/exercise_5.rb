# Write a program that outputs the factorial of the numbers 5, 6, 7, and 8.

puts "I will factorial, give me number"
to_factorialize = gets.chomp.to_i

if to_factorialize.is_a? Integer
  num_down_counter = to_factorialize
  the_count = to_factorialize
  the_range = (1...to_factorialize)

  the_range.each do 
    num_down_counter -= 1
    the_count = num_down_counter * the_count
  end
  puts "#{to_factorialize}! = #{the_count}"
else
  # FIXME: line 4 forces input to integer so this never runs
  puts "Please give me an integer."
end