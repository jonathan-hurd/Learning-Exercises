example = ['laboratory', 'experiment', 'Pans Labyrinth', 'elaborate', 'polar bear']

example.each do |word|
  if word =~ /lab/
    puts word
  else
    puts "nope"
  end
end
