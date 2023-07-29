document.addEventListener('DOMContentLoaded', () => {
    const matrixContainer = document.getElementById('matrixContainer');
  
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    function generateRandomCharacter() {
      const randomIndex = Math.floor(Math.random() * characters.length);
      return characters[randomIndex];
    }
  
    function generateRandomRow() {
      const row = document.createElement('div');
      row.className = 'matrix-row';
  
      for (let i = 0; i < 40; i++) {
        const char = generateRandomCharacter();
        row.appendChild(document.createTextNode(char));
      }
  
      matrixContainer.appendChild(row);
    }
  
    // Generate multiple rows
    for (let i = 0; i < 100; i++) {
      generateRandomRow();
    }
  });
  