### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame
#class hasn't been initialized
#checkforAce is not a good naming convention, 'check_for_ace' would be better
  def checkforAce(card)
    if card.value = 1
      #should use == instead of =
      return true
    else
      return false
    end
  end

#typo, should be def not dif, and missing comma between arguments 'card1' and 'card2'
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card
    #should return 'card1' not 'card'
  else
    return card2
  end
end
end
#too many instances of 'end'

def self.cards_total(cards)
  total
  #total not defined
  for card in cards
    total += card.value
    return "You have a total of" + total
    #the return statement should be outside the for loop
  end
end
```
