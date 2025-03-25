let songIndex = 0;
let audioElement = new Audio("songs/5.mp3"); // Initialize audio without a file
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let audioDuration = document.getElementById('audio-duration');
let currentTime = document.getElementById('current-time');
let songItems = document.querySelectorAll('.songs');
let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');

let songs = [
    { songName: "On Top", filePath: "1.mp3", coverPath: "song-play.png" },
    { songName: "Watch Out", filePath: "2.mp3", coverPath: "song-play.png" },
    { songName: "Game Over", filePath: "3.mp3", coverPath: "song-play.png" },
    { songName: "Got You", filePath: "4.mp3", coverPath: "song-play.png" },
    { songName: "The Last Ride", filePath: "5.mp3", coverPath: "song-play.png" },
    { songName: "Signed to God", filePath: "6.mp3", coverPath: "song-play.png" },
    { songName: "Lat Lag Gayi", filePath: "7.mp3", coverPath: "song-play.png" },
    { songName: "Akhiyaan", filePath: "8.mp3", coverPath: "song-play.png" },
    { songName: "Take It Easy", filePath: "9.mp3", coverPath: "song-play.png" },
    { songName: "Kaabil Hoon", filePath: "10.mp3", coverPath: "song-play.png" },
    { songName: "No Need", filePath: "11.mp3", coverPath: "song-play.png" },
    { songName: "Gerua", filePath: "12.mp3", coverPath: "song-play.png" },
    { songName: "Apsara", filePath: "13.mp3", coverPath: "song-play.png" },
    { songName: "Aashiqui", filePath: "14.mp3", coverPath: "song-play.png" },
    { songName: "O Maahi", filePath: "15.mp3", coverPath: "song-play.png" },
    { songName: "Ek Dilruba", filePath: "16.mp3", coverPath: "song-play.png" },
    { songName: "Har Dil Jo Pyaar Karega", filePath: "17.mp3", coverPath: "song-play.png" },
    { songName: "Tere Bina Na", filePath: "18.mp3", coverPath: "song-play.png" },
    { songName: "In Love", filePath: "19.mp3", coverPath: "song-play.png" },
    { songName: "You And Me", filePath: "20.mp3", coverPath: "song-play.png" },
    { songName: "Aaj Bhi", filePath: "21.mp3", coverPath: "song-play.png" },
    { songName: "Haan Tu HAi", filePath: "22.mp3", coverPath: "song-play.png" },
    { songName: "Dil Kya Kare", filePath: "23.mp3", coverPath: "song-play.png" },
    { songName: "Tu Hi Rab", filePath: "24.mp3", coverPath: "song-play.png" },
    { songName: "Regret", filePath: "25.mp3", coverPath: "song-play.png" },
    { songName: "Rumaal", filePath: "26.mp3", coverPath: "song-play.png" },
    { songName: "Saanson Ko", filePath: "27.mp3", coverPath: "song-play.png" },
    { songName: "Same Beef", filePath: "28.mp3", coverPath: "song-play.png" },
    { songName: "She's The One", filePath: "29.mp3", coverPath: "song-play.png" },
    { songName: "Fell For You", filePath: "30.mp3", coverPath: "song-play.png" },
    { songName: "Chosen", filePath: "31.mp3", coverPath: "song-play.png" },
    { songName: "Soch Liya", filePath: "32.mp3", coverPath: "song-play.png" },
    { songName: "Sufna Banke", filePath: "33.mp3", coverPath: "song-play.png" },
    { songName: "Tareefan", filePath: "34.mp3", coverPath: "song-play.png" },
    { songName: "These Days", filePath: "35.mp3", coverPath: "song-play.png" },
    { songName: "Tum Se", filePath: "36.mp3", coverPath: "song-play.png" },
    { songName: "Hussan Illahi", filePath: "37.mp3", coverPath: "song-play.png" },
    { songName: "You", filePath: "38.mp3", coverPath: "song-play.png" },
    { songName: "Zaalima", filePath: "39.mp3", coverPath: "song-play.png" },
    { songName: "US", filePath: "40.mp3", coverPath: "song-play.png" }
];


// Function to format time (MM:SS)
function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Function to load & play a song
function loadSong(index) {
    songIndex = index;
    audioElement.src = songs[songIndex].filePath;
    document.querySelector(".song-title").textContent = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}

// Play/Pause button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

// Next Button
nextBtn.addEventListener('click', () => {
    if (songIndex < songs.length - 1) {
        songIndex++;
    } else {
        songIndex = 0; // Loop back to first song
    }
    loadSong(songIndex);
});

// Previous Button
prevBtn.addEventListener('click', () => {
    if (songIndex > 0) {
        songIndex--;
    } else {
        songIndex = songs.length - 1; // Loop to last song
    }
    loadSong(songIndex);
});

// Update progress bar & time
audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
    currentTime.textContent = formatTime(audioElement.currentTime);
});

// Set total duration when audio loads
audioElement.addEventListener('loadedmetadata', () => {
    audioDuration.textContent = formatTime(audioElement.duration);
});

// Seekbar functionality
myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});

// Play song when clicking on any song item
songItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        loadSong(index);
    });
});

// Select the container where songs will be displayed
let songContainer = document.getElementById("song-container");

// Function to dynamically add songs to the HTML
function generateSongList() {
    songContainer.innerHTML = ""; // Clear previous songs

    songs.forEach((song, index) => {
        let songElement = document.createElement("div");
        songElement.classList.add("song");
        songElement.dataset.index = index; // Store index for playback

        // Extract song name, artist, and image
        let songName = song.songName;
        let artist = document.getElementById("song-artist"); // Change if you have actual artists
        let songImage = song.coverPath; // Extract cover image

        // Set the inner HTML structure
        songElement.innerHTML = `
            <img src="${songImage}" alt="Song Cover">
            <div class="song-info">
                <h6>${songName}</h6>
                <p>${artist}</p>
            </div>
        `;

        // Add click event to play the selected song
        songElement.addEventListener("click", () => {
            loadSong(index);
        });

        // Append the song element to the container
        songContainer.appendChild(songElement);
    });
}

// Call the function to populate songs when the page loads
generateSongList();

