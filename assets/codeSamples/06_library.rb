require 'solve/dictionary'
module Solve
  class Library
    attr_accessor :dictionaries

    def initialize
      Dir.glob('dict/*-words.*') do |dict_file|
        level = dict_file.match(/\.(\d+)/)[1].to_i
        if level <= LIMIT
          @dictionaries ||= []
          @dictionaries << Dictionary.new(dict_file)
        end
      end
    end

    def selected_dictionaries(opts = DEFAULT_OPTS)
      languages = ['english'] + [*opts[:language]]

      @dictionaries.select do |d|
        languages.include?(d.language)
      end
    end
  end
end

