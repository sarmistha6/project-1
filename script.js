let cards = document.querySelectorAll('.card');
let cardContainer = document.querySelector('.card-container');

// Function to rotate the cards
function rotateCards() {
  // Move the first card to the back
  let firstCard = cards[0];
  cardContainer.appendChild(firstCard);
  
  // Apply animation to show the next card forward
  cards = document.querySelectorAll('.card');
  
  // Add a loop to keep rotating
  setTimeout(rotateCards, 2000); // rotate every 2 seconds
}

// Start rotating the cards
rotateCards();
