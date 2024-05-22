const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const blocoStart = document.getElementById('bloco-start');
const blocoTryagain = document.getElementById('bloco-tryagain');
const finalScore = document.getElementById('final-score');

let score = 0;
let gameInterval;
let gameTimeout;

let scoreboard = []

// Função para criar um meteoro
function createMeteor() {
    const trash = document.createElement('div');
    trash.classList.add('trash');
    
    // Posiciona o meteoro em uma posição aleatória dentro da área do jogo
    trash.style.top = Math.random() * (gameArea.offsetHeight - 40) + 'px';
    trash.style.left = Math.random() * (gameArea.offsetWidth - 40) + 'px';
    
    // Adiciona o meteoro à área do jogo
    gameArea.appendChild(trash);
    
    // Define o tempo de vida do meteoro
    const trashLife = 4000; // 4 segundos
    
    // Remove o meteoro após o tempo de vida
    setTimeout(() => {
        if (trash.parentElement) {
            trash.remove();
        }
    }, trashLife);
    
    // Adiciona um evento de clique no meteoro
    trash.addEventListener('click', () => {
        score += 10;
        scoreDisplay.textContent = score;
        trash.remove();
    });
}

// Função para resetar o jogo
function resetGame() {
    // Pare o intervalo de criação de meteoros se estiver ativo
    if (gameInterval) {
        clearInterval(gameInterval);
    }
    
    // Pare o timeout do jogo se estiver ativo
    if (gameTimeout) {
        clearTimeout(gameTimeout);
    }
    
    // Limpe todos os meteoros da área do jogo
    gameArea.innerHTML = '';
    // Resete a pontuação
    scoreDisplay.textContent = score;
}

// Função para iniciar o jogo
function startGame() {
    resetGame();
    blocoTryagain.style.display = 'none';
    blocoStart.style.display = 'none'
    gameInterval = setInterval(createMeteor, 500); // Cria um meteoro a cada 0.5 segundos
    
    // Reseta o jogo após 60 segundos
    gameTimeout = setTimeout(() => {
        scoreboard.push(score)
        resetGame();
        score = 0;
        blocoTryagain.style.display = 'block';
        finalScore.innerHTML = `<span>${scoreboard[scoreboard.length - 1]}</span>`
    }, 30000); // 30 segundos
}

