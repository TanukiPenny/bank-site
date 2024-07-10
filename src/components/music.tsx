import '../App.css'
import {useEffect, useState} from "react";
import Axios from 'axios'
import {XMLParser} from "fast-xml-parser";


function Music() {
    const [musicName, setMusicName] = useState("")
    const [musicAlbum, setMusicAlbum] = useState("")
    const [musicArtist, setMusicArtist] = useState("")
    const [musicImage, setMusicImage] = useState("")
    const [musicDate, setMusicDate] = useState("")
    const [musicUrl, setMusicUrl] = useState("")

    useEffect(() => {
        Axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=tanukipenny&api_key=${import.meta.env.VITE_APIKEY}`).then((res) => {
            const parser = new XMLParser();
            const track = parser.parse(res.data).lfm.recenttracks.track[0];

            setMusicAlbum(track.album);
            setMusicArtist(track.artist);
            setMusicName(track.name);
            setMusicImage(track.image[2]);
            setMusicDate(track.date);
            setMusicUrl(track.url);
        });
    }, []);

    return (
        <>
            <div className="musicBox">
                <h3 className="musicTitle">Currently Playing</h3>
                <div className="musicInfo">
                    <img className="musicImg" src={musicImage} alt="awa" />
                    <div className="musicText">
                        <h5 className="musicTextInfo">Name: {musicName}</h5>
                        <h5 className="musicTextInfo">Artist: {musicArtist}</h5>
                        <h5 className="musicTextInfo">Album: {musicAlbum}</h5>
                        <h5 className="musicTextInfo">Time listened: {musicDate}</h5>
                        <h5 className="musicTextInfo">Link: <a href={musicUrl}>here!</a></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Music