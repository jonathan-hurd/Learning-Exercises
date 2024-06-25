hash_1 = {camry: 1999, ranger: 2005}
hash_2 = {legacy: 2010, accord: 1993}

p "result of #merge on the two hashes:#{hash_1.merge(hash_2)}"
p "hash_1:#{hash_1}"
p "hash_2:#{hash_2}" 

p "result of #merge! on the two hashes:#{hash_1.merge!(hash_2)}"
p "hash_1:#{hash_1}"
p "hash_2:#{hash_2}" 
