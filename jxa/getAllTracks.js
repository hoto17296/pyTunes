function fetchPlaylistTracks(playlist) {
  const arr = [];
  for (let i = 0; i < playlist.tracks.length; i++) {
    const track = playlist.tracks[i];
    arr.push(track.properties());
  }
  return arr;
}

function run() {
  const itunes = Application('iTunes');
  const music = itunes.playlists[1];
  const tracks = fetchPlaylistTracks(music);
  return JSON.stringify(tracks);
}
