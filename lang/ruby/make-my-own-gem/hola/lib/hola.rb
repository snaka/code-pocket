# frozen_string_literal: true

# The main Hola driver
class Hola
  # Say hi to the world!
  #
  # Example:
  #   >> Hola.hi('spanish')
  #   => Hola mundo!
  #
  # Arguments:
  #   language: (String) The language to use in the greeting.
  #
  def self.hi(language = "english")
    translator = Translator.new(language)
    translator.hi
  end
end

require 'hola/translator'
