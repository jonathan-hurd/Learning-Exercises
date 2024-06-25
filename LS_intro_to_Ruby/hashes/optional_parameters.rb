
def greeting(name, options = {})
  if options.empty?
    puts "hi, my name is #{name}"
  else
    puts "Hi, my name is #{name} and I'm #{options[:age]}" +
          " years old and I live in #{options[:city]}."
  end
end

greeting("bob")
greeting("bob", {age: 62, city: "New Yawk City"})
greeting("bob", age: 62, city: "new york city")

