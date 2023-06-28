import './SongCard.css'
import { useState } from 'react'


const song1 = {
    "id": "1",
    "name": "Billie Jean",
    "artist": "Michael Jackson",
    "album": "Thriller",
    "year": "1982",
    "liked": "false",
    "genre": "Pop",
    "cover_url": "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
}
const SongCard = () => {
    const { id, name, artist, album, year, liked, genre, cover_url } = song1;

    const [like, setlike] = useState(liked);

    const handleLike = () => {
        setlike(!like);
    };

    return (
    <>
        <div className={`card card${id}`}>
            <img className='card__img' src={cover_url} />
            <div className='card__text'>
                <h1 className='card__song'>{name}</h1>
                <p className='card__artist'><i>{artist}</i></p>
                <p className='card__album'>{album}</p>
                <p className='card__year'>{`(${year})`}</p>
                <div className='card__bottom'>
                    <div className='card__genre'>{genre}</div>
                    <div className={like ? "card__heart--liked" : "card__heart"}>
                        <i onClick={handleLike} className="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default SongCard