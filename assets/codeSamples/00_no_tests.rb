dictionary = {}

Dir.glob('dict/*-words.*') do |dict_file|
  lang = dict_file.match(/(\w+)-words/)[1].to_s
  size = dict_file.match(/\.(\d+)/)[1].to_i
  if size < 90
    dictionary[lang] ||= {}
    dictionary[lang][size] = File.readlines(dict_file).map{|word| word.chomp}
    dictionary
  end
end

get '/solve' do
  pattern = params['pattern'].gsub(/ /,'_').chars.to_a
  letters = params['letters'].chars.to_a

  permutations = letters.permutation.map do |lets|
    n = 0
    pattern.map do |ch|
      if ch == "_"
        n += 1
        lets[n].to_s
      else
        ch.to_s
      end
    end.join
  end.uniq
end