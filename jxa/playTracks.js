class Playlist {

  constructor(itunes, name) {
    const index = itunes.playlists.name().indexOf(name);
    if (index == -1) {
      this.playlist = itunes.Playlist({name}).make();
    }
    else {
      this.playlist = itunes.playlists[index];
    }
  }

  truncate() {
    while (this.playlist.tracks.length > 0) {
      this.playlist.tracks[0].delete();
    }
  }

  addTracks(tracks) {
    tracks.forEach(track => track.duplicate({to: this.playlist}));
  }

  play() {
    this.playlist.play();
  }

  toString() {
    return JSON.stringify(this.playlist.properties());
  }

}

function run(args) {
  const itunes = Application('iTunes');
  const music = itunes.playlists[1];

  const playlist = new Playlist(itunes, 'pyTunes');
  playlist.truncate();

  const params = JSON.parse(args[0]);
  const tracks = params.tracks.map(id => music.tracks.byId(id));
  playlist.addTracks(tracks);

  playlist.play();
}
