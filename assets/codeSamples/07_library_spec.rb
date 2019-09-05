require 'solve/library'

describe Solve::Library do
  let :library do
    Solve::Library.new
  end


  describe "selected_dictionaries" do    
    describe "level selection" do
      let :dictionaries do
        library.selected_dictionaries(:level => 50)
      end
      it "should not include any dictionaries above that level" do
        dictionaries.map{|d| d.level}.each do |level|
          (level > 50).should_not be_true
        end
      end
    end
  end
end