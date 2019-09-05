require 'solve/dictionary'
module Solve
  class Library

    attr_accessor :dictionaries

    def selected_dictionaries(opts = DEFAULT_OPTS)
      languages = ['english'] + [*opts[:language]]
      level = opts[:level] || DEFAULT_LEVEL

      @dictionaries.select do |d|
        languages.include?(d.language) && (d.level <= level)
      end
    end

  end
end

