'use server';

import Axios from "axios";
import {XMLParser} from "fast-xml-parser";
import {MusicProps} from "@/app/props/musicProps";

export default async (): Promise<MusicProps> =>
    await Axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=tanukipenny&api_key=${process.env.APIKEY}`).then((res) => {
        const parser = new XMLParser();
        const track = parser.parse(res.data).lfm.recenttracks.track[0];
        return {
            name: track.name,
            album: track.album,
            artist: track.artist,
            url: track.url,
            image: track.image[2],
            date: track.date,
        }
    })