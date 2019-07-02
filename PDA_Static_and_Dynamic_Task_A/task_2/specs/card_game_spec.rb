require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("Spades", 1)
    @card2 = Card.new("Diamonds", 7)
    @cards = [@card1, @card2]
    @card_game = CardGame.new(@cards)
  end

  def test_card_has_value
    assert_equal(1, @card1.value)
  end

  def test_if_ace__true
    result = @card_game.check_for_ace(@card1)
    assert_equal(true, result)
  end

  def test_if_ace__false
    result = @card_game.check_for_ace(@card2)
    assert_equal(false, result)
  end

  def test_highest_card
    result = @card_game.highest_card(@card1, @card2)
    assert_equal(@card2, result)
  end

  def test_cards_total
    result = @card_game.cards_total(@cards)
    assert_equal("You have a total of 8", result)
  end
end
