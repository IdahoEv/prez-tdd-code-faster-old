

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

  # now check those against the dictionary!
end
