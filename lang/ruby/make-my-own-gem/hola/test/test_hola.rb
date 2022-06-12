require 'minitest/autorun'
require 'hola'

class HolaTest < Minitest::Test
  def test_english
    assert_equal 'Hello world!', Hola.hi('english')
  end

  def test_any_hello
    assert_equal 'Hello world!', Hola.hi('ruby')
  end

  def test_spanish
    assert_equal 'Hola mundo!', Hola.hi('spanish')
  end
end
