let timer
let timeLeft = 25 * 60
let isRunning = false
let isWorkTime = true
let count = 0

const timerDisplay = document.getElementById('timer')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')
const resetButton = document.getElementById('reset')
const skipButton = document.getElementById('skip')
const pomodoroCountDisplay = document.getElementById('completion-count')

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

function startTimer () {
    if (!isRunning) {
        isRunning = true
        timer = setInterval(() => {
            timeLeft--
            updateTimerDisplay()

            if (timeLeft == 0) {
                clearInterval(timer)
                isRunning = false

                if (isWorkTime) {
                    count++
                    pomodoroCountDisplay.textContent = count

                    if (count % 4 === 0) {
                        alert('Pausa longa, tire 15 minutos.')
                        timeLeft = 15 * 60
                    } else {
                        alert('Pausa curta, tire 5 minutos.')
                        timeLeft = 5 * 60
                    }
                } else {
                    alert('De volta ao trabalho!')
                    timeLeft = 25 * 60
                }

                isWorkTime = !isWorkTime
                updateTimerDisplay()
            }
        }, 1000)
    }
}

function pauseTimer() {
    
}

function resetTimer() {
    
}

function skipTimer() {
    
}

startButton.addEventListener('click', startTimer)
pauseButton.addEventListener('click', pauseTimer)
resetButton.addEventListener('click', resetTimer)
skipButton.addEventListener('click', skipTimer)

updateTimerDisplay()