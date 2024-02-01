let timer;
let isRunning = false;
let lapCount = 1;

function startPause() {
    if (isRunning) {
        clearInterval(timer);
        document.querySelector('button').textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.querySelector('button').textContent = 'Pause';
    }
    isRunning = !isRunning;
}

function updateTime() {
    const timeDisplay = document.getElementById('timeDisplay');
    const time = timeDisplay.textContent.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    timeDisplay.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function lap() {
    const lapList = document.getElementById('lapList');
    const lapTime = document.getElementById('timeDisplay').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount++}: ${lapTime}`;
    lapList.appendChild(lapItem);
}

function reset() {
    clearInterval(timer);
    document.getElementById('timeDisplay').textContent = '00:00:00';
    document.querySelector('button').textContent = 'Start';
    isRunning = false;
    lapCount = 1;
    document.getElementById('lapList').innerHTML = '';
}
