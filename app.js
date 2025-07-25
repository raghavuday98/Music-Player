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
    { songName: "On Top", filePath: "Songs/1.mp3", coverPath: "song-play.png" },
    { songName: "Watch Out", filePath: "Songs/2.mp3", coverPath: "song-play.png" },
    { songName: "Game Over", filePath: "Songs/3.mp3", coverPath: "song-play.png" },
    { songName: "Got You", filePath: "Songs/4.mp3", coverPath: "song-play.png" },
    { songName: "The Last Ride", filePath: "Songs/5.mp3", coverPath: "song-play.png" },
    { songName: "Signed to God", filePath: "Songs/6.mp3", coverPath: "song-play.png" },
    { songName: "Lat Lag Gayi", filePath: "Songs/7.mp3", coverPath: "song-play.png" },
    { songName: "Akhiyaan", filePath: "Songs/8.mp3", coverPath: "song-play.png" },
    { songName: "Take It Easy", filePath: "Songs/9.mp3", coverPath: "song-play.png" },
    { songName: "Kaabil Hoon", filePath: "Songs/10.mp3", coverPath: "song-play.png" },
    { songName: "No Need", filePath: "Songs/11.mp3", coverPath: "song-play.png" },
    { songName: "Gerua", filePath: "Songs/12.mp3", coverPath: "song-play.png" },
    { songName: "Apsara", filePath: "Songs/13.mp3", coverPath: "song-play.png" },
    { songName: "Aashiqui", filePath: "Songs/14.mp3", coverPath: "song-play.png" },
    { songName: "O Maahi", filePath: "Songs/15.mp3", coverPath: "song-play.png" },
    { songName: "Ek Dilruba", filePath: "Songs/16.mp3", coverPath: "song-play.png" },
    { songName: "Har Dil Jo Pyaar Karega", filePath: "Songs/17.mp3", coverPath: "song-play.png" },
    { songName: "Tere Bina Na", filePath: "Songs/18.mp3", coverPath: "song-play.png" },
    { songName: "In Love", filePath: "Songs/19.mp3", coverPath: "song-play.png" },
    { songName: "You And Me", filePath: "Songs/20.mp3", coverPath: "song-play.png" },
    { songName: "Aaj Bhi", filePath: "Songs/21.mp3", coverPath: "song-play.png" },
    { songName: "Haan Tu HAi", filePath: "Songs/22.mp3", coverPath: "song-play.png" },
    { songName: "Dil Kya Kare", filePath: "Songs/23.mp3", coverPath: "song-play.png" },
    { songName: "Tu Hi Rab", filePath: "Songs/24.mp3", coverPath: "song-play.png" },
    { songName: "Regret", filePath: "Songs/25.mp3", coverPath: "song-play.png" },
    { songName: "Rumaal", filePath: "Songs/26.mp3", coverPath: "song-play.png" },
    { songName: "Saanson Ko", filePath: "Songs/27.mp3", coverPath: "song-play.png" },
    { songName: "Same Beef", filePath: "Songs/28.mp3", coverPath: "song-play.png" },
    { songName: "She's The One", filePath: "Songs/29.mp3", coverPath: "song-play.png" },
    { songName: "Fell For You", filePath: "Songs/30.mp3", coverPath: "song-play.png" },
    { songName: "Chosen", filePath: "Songs/31.mp3", coverPath: "song-play.png" },
    { songName: "Soch Liya", filePath: "Songs/32.mp3", coverPath: "song-play.png" },
    { songName: "Sufna Banke", filePath: "Songs/33.mp3", coverPath: "song-play.png" },
    { songName: "Tareefan", filePath: "Songs/34.mp3", coverPath: "song-play.png" },
    { songName: "These Days", filePath: "Songs/35.mp3", coverPath: "song-play.png" },
    { songName: "Tum Se", filePath: "Songs/36.mp3", coverPath: "song-play.png" },
    { songName: "Hussan Illahi", filePath: "Songs/37.mp3", coverPath: "song-play.png" },
    { songName: "You", filePath: "Songs/38.mp3", coverPath: "song-play.png" },
    { songName: "Zaalima", filePath: "Songs/39.mp3", coverPath: "song-play.png" },
    { songName: "US", filePath: "Songs/40.mp3", coverPath: "song-play.png" }
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

