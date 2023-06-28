import './SongCard.css'
import { useState } from 'react'


const SongCard = (song) => {
    const { id, name, artist, album, year, liked, genre, cover_url } = song;

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