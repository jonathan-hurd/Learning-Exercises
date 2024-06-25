count = 1

loop do
    if count > 5 
        break
    elsif count.even? 
        puts "#{count} is even!"
    else
        puts "#{count} is odd!"
    end
count += 1
end