import "./globals.css";
import RandomGif from "@/app/components/randomGif";
import Name from "@/app/components/name";
import BasicInfo from "@/app/components/basicInfo";
import Music from "@/app/components/music";
import Axios from "axios";
import {XMLParser} from "fast-xml-parser";

let musicAlbum: string;
let musicArtist: string;
let musicName: string;
let musicImage: string;
let musicDate: string;
let musicUrl: string;

await Axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=tanukipenny&api_key=${process.env.APIKEY}`).then((res) => {
    const parser = new XMLParser();
    const track = parser.parse(res.data).lfm.recenttracks.track[0];

    console.log(track);

    musicAlbum = track.album;
    musicArtist = track.artist;
    musicName = track.name;
    musicImage = track.image[2];
    musicDate = track.date;
    musicUrl = track.url;
});

export default function Home() {
  return (
      <>
        <div className="container">
          <Name></Name>
          <BasicInfo></BasicInfo>
          <Music album={musicAlbum} artist={musicArtist} date={musicDate} name={musicName} image={musicImage} url={musicUrl}></Music>
          <RandomGif></RandomGif>
        </div>
        <a className="secretLink" href="https://zip.penny.moe/go/michiru">Click Me!</a>
      </>
  );
}
