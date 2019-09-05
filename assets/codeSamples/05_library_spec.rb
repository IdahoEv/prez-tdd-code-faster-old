require 'solve/library'

describe Solve::Library do
  let :library do
    Solve::Library.new
  end

  describe "selected_dictionaries" do
    it "should return an array of Dictionaries" do
      library.selected_dictionaries.should be_a(Array)
      library.selected_dictionaries.each do |item|
        item.should be_a(Solve::Dictionary)
      end
    end

  end
end