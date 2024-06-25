arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr2 = arr.select { |num| num > 5 }
arr2.each { |num| puts num }

arr.each do |num|
  if num > 5
    puts num
  end
end
