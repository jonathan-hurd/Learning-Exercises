# Write a method that counts down to zero using recursion

def count_down(x)
  puts x
  if x >= 1
    count_down(x - 1)
  end
end

count_down(9)
count_down(-4)
