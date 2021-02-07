import '../App.css';

function Music(){
  return(
    <div className="music-page">
      <p>P.Lucky on iTunes/Apple Music</p>
      <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/im-stuck-single/1552233617"></iframe>
      <p>P.Lucky on Spotify</p>
      <iframe src="https://open.spotify.com/embed/artist/2LBJr3uzzw5jg2ngbh2PpC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <p>P.Lucky Kobby A. on Spotify</p>
      <iframe src="https://open.spotify.com/embed/artist/36zFDKB2TW3pwkeemBqplq" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <p>P.Lucky on Bandcamp</p>
      <iframe src="https://bandcamp.com/EmbeddedPlayer/track=4009958565/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://plucky1.bandcamp.com/track/im-stuck-2">I&#39;m Stuck by P. Lucky</a></iframe>
    </div>
  )
}

export default Music;
