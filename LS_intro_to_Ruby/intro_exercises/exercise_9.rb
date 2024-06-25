
h = {a:1, b:2, c:3, d:4}

h[:b] # <= exercise 9.1

h[:e] = 5 # <= exercise 9.2

h.select! { |key, value| value >= 3.5 } # <= exercise 9.3 using #select

h.delete_if { |key, value| value < 3.5 } # <= exercise 9.3
