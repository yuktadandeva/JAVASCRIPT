import {APICLIENT} from "./api-client.js";
import { playlistOperations } from "./playlist-service.js";

window.addEventListener('DOMContentLoaded', displaySongs);

function displaySongs(){

    getArtistSongs("lanadelrey");
    
}

async function getArtistSongs(artist){
    try{
    const songs = await playlistOperations.getSongsData(artist);
    console.log(songs);
    printSongs(songs);
}catch(err){
        throw err;
    }
}


function printSongs(songs){

    const topArtist = document.createElement('h2');
    topArtist.innerText = "TOP 5 SONGS";

    const mainDiv = document.querySelector('.songs');
    mainDiv.appendChild(topArtist);
    for(let song of songs){
        printSongCard(song);
    }
}

function printSongCard(song){
const mainDiv = document.querySelector('.songs');

const songBody = document.createElement('div');
songBody.className = "song-item"

const songImg = document.createElement('img');
songImg.src = song.artworkUrl100;

const songName = document.createElement('h4');
songName.innerText = song.trackName;

const artistName = document.createElement('h5');
artistName.innerText = song.artistName;

const preview = document.createElement('audio');
preview.src = song.previewUrl;
preview.setAttribute('controls','');

const btn = document.createElement('button');
btn.innerText = "add to playlist";
btn.setAttribute('songId',song.trackId);
btn.addEventListener('click', addToPlaylist);


songBody.appendChild(songImg);
songBody.appendChild(songName);
songBody.appendChild(artistName);
songBody.appendChild(preview);
songBody.appendChild(btn);

mainDiv.appendChild(songBody);

}

function addToPlaylist(){
 const id = this.getAttribute('songID');
 console.log("added", id);
 playlistOperations.addToPlaylist(id);

 printPlaylist();
 
}

function printPlaylist(){
    const songsInPlaylist = playlistOperations.viewAll();
    document.querySelector(".playlist-item").innerHTML = '';

    songsInPlaylist.forEach(song=>printCard(song));
}

function printCard(song){
    const playlist = document.querySelector(".playlist-item");

    const cartItem = document.createElement("div");
    cartItem.className = "playlist-item-song";

    const img = document.createElement('img');
    img.src = song.artworkUrl30;

    const songName = document.createElement('h5');
    songName.innerText = song.trackName;

    const artistName = document.createElement('h6');
    artistName.innerText = song.artistName;

    const preview = document.createElement('audio');
    preview.src = song.previewUrl;

    const remove = document.createElement('button');
    remove.innerText="remove";
    remove.setAttribute('id',song.trackId);
    remove.addEventListener('click', removeFromCart);

    cartItem.appendChild(img);
    cartItem.appendChild(songName);
    cartItem.appendChild(artistName);
    cartItem.appendChild(preview);
    cartItem.appendChild(remove);

    playlist.appendChild(cartItem);
    
}

function removeFromCart(){
    const id = this.getAttribute(id);
    console.log("remove");
}