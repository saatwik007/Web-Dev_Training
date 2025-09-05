console.log("Hello, Spotify!");
// const audioPlayer = document.getElementById('audioPlayer');
// audioPlayer.src = 'songs/song1.mp3'; // Change to your song path
// audioPlayer.play();

async function getSongs(){
    let a = await fetch('http://127.0.0.1:5500/Spotify/songs/');
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName('a');
    let song=[]
    for(let i=0;i<as.length;i++){
        const element = as[i];
        if(element.href.endsWith(".mp3")){
            song.push(element.href);
        }
    }
    console.log(song);
    return song;
}


async function main(){
    let songs = await getSongs();
    console.log(songs);
    
}
main();
// let addSong = document.getElementById("songs");
// addSong.innerHTML = `
//     <li><p>First Song</p></li>
//     <li><p>Second Song</p></li>
//     <li><p>Third Song</p></li>
// `;
// songs.forEach(song => {
//   const songItem = document.getElementById('songs');
//   songItem.innerHTML += `
//     <li>
//       <p>${song}</p>
//     </li>
//   `;
// });