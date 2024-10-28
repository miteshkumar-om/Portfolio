
    let currentVisible = null;

function showContent(contentId) {
    const content = document.getElementById(contentId);
        
        if (currentVisible === contentId) {
            // If the same content is clicked again, hide it
            content.style.display = 'none';
            currentVisible = null;
        } else {
            // Hide all contents
            const contents = document.querySelectorAll('.content-container');
            contents.forEach(content => content.style.display = 'none');
            
            // Show the selected content
            content.style.display = 'block';
            currentVisible = contentId;
        }
    }

    let moveCount = 0;
    const maxMoves = 5;
    
    function moveButton(button) {
        const container = document.getElementById('mini-game');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;
    
        if (moveCount < maxMoves) {
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
            moveCount += 1;
        } else {
            button.innerText = 'Submit Form';
            button.style.left = '0';
            button.style.top = '0';
            button.onclick = null; // Stop moving
            document.getElementById('submit-button').disabled = false;
            document.getElementById('game-button').style.display = 'none'; // Hide game button after completion
       
        }
    }
    function completeMiniGame() {
        const gameButton = document.getElementById('game-button');
        if (gameButton.innerText !== 'Submit Form') {
            alert('Catch the button to submit!');
            return false;
        }
        return true; // Allow form submission
    }