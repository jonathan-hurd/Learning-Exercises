name = "Roger"
# name.downcase == ("RoGeR").downcase ? puts("true") : puts("false")
# name.downcase == ("DAVE").downcase ? puts("true") : puts("false")

puts name.casecmp("RoGeR") == 0
puts name.casecmp("DAVE") == 0

