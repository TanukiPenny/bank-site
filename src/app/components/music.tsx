import "../globals.css";
import {MusicProps} from "@/app/props/musicProps";


function Music(props: MusicProps) {
        return (
        <>
            <div className="musicBox">
                <h3 className="musicTitle">Currently Playing</h3>
                <div className="musicInfo">
                    <img className="musicImg" src={props.image} alt="awa" />
                    <div className="musicText">
                        <h5 className="musicTextInfo">Name: {props.name}</h5>
                        <h5 className="musicTextInfo">Artist: {props.artist}</h5>
                        <h5 className="musicTextInfo">Album: {props.album}</h5>
                        <h5 className="musicTextInfo">Time listened: {props.date}</h5>
                        <h5 className="musicTextInfo"><a href={props.url}> Link here!</a></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Music