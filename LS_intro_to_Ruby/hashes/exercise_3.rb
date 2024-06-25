family = {  uncles: ["bob", "joe", "steve"],
            sisters: ["jane", "jill", "beth"],
            brothers: ["frank","rob","david"],
            aunts: ["mary","sally","susan"]
          }

family.each_key{ |key| puts key }

family.each_value{ |val| puts val }

family.each do |k,v|
  puts "relation: #{k}"
  puts v 
end

