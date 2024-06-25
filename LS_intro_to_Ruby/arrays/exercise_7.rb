# Use the each_with_index method to iterate through an array of your creation that prints each index and value of the array.


arr = [4, 8, 10, 29, 48]

arr.each_with_index{ |val, ind| puts "#{ind} = #{val}" }
  
