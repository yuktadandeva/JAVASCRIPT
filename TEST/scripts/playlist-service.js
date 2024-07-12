import { APICLIENT } from "./api-client.js";

export const playlistOperations = {
    playlist: [],

    async getSongsData(artistName){
        const URL = `https://itunes.apple.com/search?term=${artistName}&limit=10`;
        return await APICLIENT.get(URL);

    },

    addToPlaylist(song){

        this.playlist.push(song);
    },

    deleteFromPlaylist(song){
        this.playlist.pop(song);
    },

    viewAll(){
        const songsInPlaylist = this.songs.filter(song=>song.isInPlaylist);
        return songsInPlaylist;
    }


}