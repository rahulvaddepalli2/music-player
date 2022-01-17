const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const songSelection = document.querySelector('#selectSong')
const randBtn = document.querySelector('.button')

// Song Titles
const songs = ['Lowkey - 1', 'Going Bananas - 2', 'Soy Differente - 3', 'In Recap - 4', 'Thoughts I Express - 5', 'As Usual - 6', 'Pictures - 7', 'Sunken Place - 8', 'Running - 9', 'Energy - 10', 'Feeling You - 11', 'Yo Drum - 12', 'Mixed Emotions - 13', 'Cookie Crumbles - 14', 'Tuning Into - 15', 'Seasons - 16', 'Sins - 17', 'Uke - 18', 'Angry - 19', 'Traction - 20', 'Order Of The Phoenix - 21', 'Jaguar - 22', 'Proud Of Me - 23', 'Kaisen - 24', 'Lullaby - 25', 'No Hate - 26', 'Stimmy - 27', 'Deja Vu - 28', 'Spaceship - 29', 'Cadillac - 30', 'On Your Own - 31', 'Are You Mine - 32', 'So Good - 33', 'Dont Let Me Go - 34', 'Rock W Me - 35', 'Stallion - 36', 'Seeking - 37', 'Nvr Fit The Mold - 38', 'Love You Forever - 39', 'Bumblebee - 40', 'Drip Memoir - 41', 'Ima Vibe - 42', 'Coastline - 43', 'Water - 44', 'Catalyst - 45', 'Strings - 46', 'Maria - 47', 'Mans World - 48', 'Beautiful Day - 49', 'Aint Worried - 50']

// Keep track of songs
let songIndex = 0

// Initially load song into DOM
loadSong(songs[songIndex])

// Update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause()
}

function prevSong() {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
} 

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

function selectFunction() {
    songIndex = (document.getElementById('selectSong').value) - 1;

    loadSong(songs[songIndex])

    playSong()
}

function randSong() {
    min = Math.ceil(0)
    max = (Math.floor(songs.length)) - 1

    songIndex = Math.floor(Math.random() * (max - min + 1) + min);
    
    loadSong(songs[songIndex])

    playSong()
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

//Change song events

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)

// List selection values (1-50) for Song selection

var selectSong = document.getElementById('selectSong');
for (let i = 1; i <= 50; i++)
    selectSong.innerHTML += "<option>" + i + "</option>";

// Random song selection

randBtn.addEventListener('click', randSong)