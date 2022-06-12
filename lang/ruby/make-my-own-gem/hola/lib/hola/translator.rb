class Hola::Translator
  def initialize(language)
    @language = language
  end

  def hi
    case @language
    when "spanish"
      "Hola mundo!"
    else
      "Hello world!"
    end
  end
end
