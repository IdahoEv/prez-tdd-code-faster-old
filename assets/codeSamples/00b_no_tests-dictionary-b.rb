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
