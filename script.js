const frames = [];
let currentFrame = 0;
const frameRate = 40;
let animationInterval;

// Load frames
const frameFiles = [
    'frames/frame1.txt',
    'frames/frame2.txt',
    'frames/frame3.txt',
    'frames/frame4.txt',
    'frames/frame5.txt',
    'frames/frame6.txt',
    'frames/frame7.txt',
    'frames/frame8.txt',
    'frames/frame9.txt',
    'frames/frame10.txt',
    'frames/frame11.txt',
    'frames/frame12.txt',
    'frames/frame13.txt',
    'frames/frame14.txt',
    'frames/frame15.txt',
    'frames/frame16.txt',
    'frames/frame17.txt',
    'frames/frame18.txt',
    'frames/frame19.txt'
];

function loadFrame(filePath, index) {
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            frames[index] = data;
        })
        .catch(error => console.error('Error loading frame:', error));
}

function startAnimation() {
    animationInterval = setInterval(() => {
        document.getElementById('ascii-art').textContent = frames[currentFrame];
        currentFrame = (currentFrame + 1) % frames.length;
    }, frameRate);
}

Promise.all(frameFiles.map((file, index) => loadFrame(file, index)))
    .then(() => startAnimation())
    .catch(error => console.error('Error loading frames:', error));
