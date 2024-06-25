# Write a program that uses a hash to store a list of movie titles with the year t
# hey came out. Then use the puts command to make your program print out the year
# of each movie to the screen.

movie_database = 
{ a: 1949,
  b: 1999,
  c: 2002,
  d: 1982,
  e: 2009
}

dates = []

movie_database.each do |key, value|
  dates.push value
end

puts dates