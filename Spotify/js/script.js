console.log("Hello, Spotify!");
let currentSong = new Audio();
let currFolder;
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || !isFinite(seconds)) {
        return '0:00';
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    // Pad seconds with leading zero if needed
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

async function getSongs(folder) {
    currFolder = folder;   
    console.log(`Fetching songs from folder: ${currFolder}`);
    let a = await fetch(`http://127.0.0.1:5501/Spotify/${currFolder}/`);
    console.log(a);
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName('a');
    let song = []
    for (const element of as) {
        if (element.href.endsWith(".mp3")) {
            song.push(element.href);
        }
    }
    console.log('songList', song);
    return song;
}

function playSong(songPath, pause = false) {
    currentSong.src = songPath;
    if (pause) {
        currentSong.pause();
    } else {
        currentSong.play();
    }
    document.querySelector(".songinfo").innerHTML = songPath.split('/').pop();
    document.querySelector(".songtime").innerHTML = '0:00 / 0:00';
}
async function displaySongs(songs) {
    console.log(songs);
    const songName = songs.map((song) => {
        return song.split('/').pop();
    });


    
    console.log(songName);
    let songList = document.getElementById("songs");
    songList.innerHTML = "";
    songs.forEach((song, i) => {
        songList.innerHTML += `
            <li class="list">
                <div class="info">
                <img class="invert" width="34" src="img/music.svg" alt="">
                    <div> ${songName[i]}</div>
                </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="img/play.svg" alt="">
                            </div> </li>
        `;
    });
    Array.from(document.getElementById("songs").getElementsByClassName("list")).forEach((element, index) => {
        element.addEventListener('click', () => {
            console.log("Playing ", songs[index]);
            playSong(songs[index]);
            play.src = "img/pause.svg";
        });
    });

// ...existing code...

    currentSong.addEventListener('timeupdate', () => {
        console.log(currentSong.currentTime, currentSong.duration);
        let currentTime = currentSong.currentTime;
        let duration = currentSong.duration;
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentTime)} / ${secondsToMinutesSeconds(duration)}`;
        document.querySelector(".circle").style.left = (currentTime / duration) * 100 + "%";
    });

    document.querySelector(".seekbar").addEventListener('click', (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (percent / 100) * currentSong.duration;
    })


}
async function displayAlbum(){
    let b = await fetch(`http://127.0.0.1:5501/Spotify/songs/`);
    let response = await b.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let anchors = div.getElementsByTagName('a');
    console.log(anchors);
    let array = Array.from(anchors)
    for( let i=0; i<array.length; i++){
        const e = array[i];
        if(e.href.includes('/songs/')){
            let folder= e.href.split('/').pop();
            console.log(folder);
            b = await fetch(`http://127.0.0.1:5501/Spotify/songs/${folder}/info.json`);
            let response = await b.json();
            console.log(response);
            cardContainer = document.querySelector(".cardContainer");
            cardContainer.innerHTML += `
                <div data-folder=${folder} class="card">
                        <div class="play">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <img src="songs/${folder}/cover.jpg" alt="">
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
                    </div>
            `
        }
        // console.log('folders', e.href.includes('/songs'));
    };

        Array.from(document.getElementsByClassName('card')).forEach(e => {
        console.log(e);
        e.addEventListener('click', async () => {
        songs = await getSongs(`songs/${e.dataset.folder}`);
        console.log(`songs/${e.dataset.folder}`);
        displaySongs(songs);
    });
    })
}

async function main() {
    let songs = await getSongs('songs/karanAujla');
    playSong(songs[0], true);
    console.log(songs);
    displaySongs(songs);
    displayAlbum();

    // Set up play button event listener ONCE so it always controls currentSong
    let play = document.getElementById("play");
    play.addEventListener('click', () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "img/pause.svg";
        } else {
            currentSong.pause();
            play.src = "img/play.svg";
        }
    });
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.left').style.left = '0';
    });

    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.left').style.left = '-100%';
    });
    document.querySelector("#next").addEventListener('click', () => {
        console.log("Playing ", currentSong.src);
        let index = songs.indexOf(currentSong.src);
        if (index === songs.length - 1) {
            index = -1;
        }
        console.log("Playing ", index, songs.length);
        playSong(songs[(index + 1)]);
    })

    document.querySelector("#previous").addEventListener('click', () => {
        console.log("Playing ", currentSong.src);
        let index = songs.indexOf(currentSong.src);
        if (index === 0) {
            index = songs.length;
        }
        console.log("Playing ", index, songs.length);
        playSong(songs[(index - 1)]);
    })

    document.querySelector('.range').getElementsByTagName('input')[0].addEventListener('input', (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;
    });

    document.querySelector('.volume>img').addEventListener('click', (e) => {
        console.log(e.target.src)
        if(e.target.src.includes('volume.svg')){
            e.target.src = 'img/mute.svg';
            currentSong.volume = 0;
            document.querySelector('.range').getElementsByTagName('input')[0].value = 0;
        }
        else{
            e.target.src = 'img/volume.svg';
currentSong.volume = 1;
document.querySelector('.range').getElementsByTagName('input')[0].value = 100;
        }
    });
    
    

}
main();
