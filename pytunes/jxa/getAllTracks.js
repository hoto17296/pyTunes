function run() {
  const itunes = Application('iTunes');
  const music = itunes.playlists[1];
  const tracks = music.tracks.properties();
  return JSON.stringify(tracks);
}
