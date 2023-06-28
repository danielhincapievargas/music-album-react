import './App.css'
import SongCard from './components/SongCard'
const songs = [
  {
    id: 1,
    name: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    year: 1982,
    liked: false,
    genre: "Pop",
    cover_url: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
  },
  {
    id: 2,
    name: "Sweet Child o' Mine",
    artist: "Guns N' Roses",
    album: "Appetite for Destruction",
    year: 1987,
    liked: false,
    genre: "Rock",
    cover_url: "https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg"
  },
  {
    id: 3,
    name: "Like a Prayer",
    artist: "Madonna",
    album: "Like a Prayer",
    year: 1989,
    liked: false,
    genre: "Pop",
    cover_url: "https://upload.wikimedia.org/wikipedia/en/0/08/Madonna_-_Like_a_Prayer_album.png"
  },
  {
    id: 4,
    name: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind",
    year: 1991,
    liked: false,
    genre: "Grunge",
    cover_url: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg"
  },
  {
    id: 5,
    name: "Wonderwall",
    artist: "Oasis",
    album: "(What's the Story) Morning Glory?",
    year: 1995,
    liked: false,
    genre: "Britpop",
    cover_url: "https://upload.wikimedia.org/wikipedia/en/b/b1/Oasis_-_%28What%27s_The_Story%29_Morning_Glory_album_cover.jpg"
  },
  {
    id: 6,
    name: "Smooth",
    artist: "Santana ft. Rob Thomas",
    album: "Supernatural",
    year: 1999,
    liked: false,
    genre: "Rock",
    cover_url: "https://upload.wikimedia.org/wikipedia/en/7/7f/Santana_-_Supernatural_-_CD_album_cover.jpg"
  },
  {
    id: 7,
    name: "Crazy in Love",
    artist: "Beyoncé ft. Jay-Z",
    album: "Dangerously in Love",
    year: 2003,
    liked: false,
    genre: "R&B",
    cover_url: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
  },
  {
    id: 8,
    name: "Hey There Delilah",
    artist: "Plain White T's",
    album: "All That We Needed",
    year: 2005,
    liked: false,
    genre: "Pop Rock",
    cover_url: "https://upload.wikimedia.org/wikipedia/en/0/08/All_That_We_Needed_%28album_cover%29.JPG"
  },
  {
    id: 9,
    name: "Umbrella",
    artist: "Rihanna ft. Jay-Z",
    album: "Good Girl Gone Bad",
    year: 2007,
    liked: false,
    genre: "R&B",
    cover_url: "https://upload.wikimedia.org/wikipedia/en/f/f7/Good_Girl_Gone_Bad.png"
  },
  {
    id: 10,
    name: "Rolling in the Deep",
    artist: "Adele",
    album: "21",
    year: 2010,
    liked: false,
    genre: "Soul",
    cover_url: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png"
  }
];
function App() {
  return (
    <>
        {songs.map((song) => {
          const {id, name, artist, album, year, liked, genre, cover_url} = song;
          return (
            <SongCard
            id ={id}
            name ={name}
            artist ={artist}
            album ={album}
            year ={year}
            liked ={liked}
            genre ={genre}
            cover_url ={cover_url} />
          )}
        )}
    </>
  )
}

export default App
