import moment from 'moment';
import axios from "axios";

function ageFromDateOfBirthday(dateOfBirth) {
    return moment().diff(dateOfBirth, 'years');
}

function randomGif() {
    const images = [
        'https://zip.penny.moe/u/bna-michiru.gif',
        'https://zip.penny.moe/u/michiru-thoughtful.gif',
        'https://zip.penny.moe/u/michiru-kagemori-bna.gif',
        'https://zip.penny.moe/u/bna-brand-new-animal.gif',
        'https://zip.penny.moe/u/michiru-amogus.gif',
        'https://zip.penny.moe/u/stress-michiru.gif',
        'https://zip.penny.moe/u/bna-michiru%20(1).gif',
        'https://zip.penny.moe/u/bna-brand-new-animal%20(1).gif',
    ]
    return images[Math.floor(Math.random() * images.length)];
}

function randomPfp() {
    const images = [
        'https://zip.penny.moe/u/pfp1.png',
        'https://zip.penny.moe/u/pfp2.jpg',
        'https://zip.penny.moe/u/pfp3.jpg',
    ]

    return images[Math.floor(Math.random() * images.length)];
}

const createIndexTemplate = async () => {
    let musicAlbum;
    let musicArtist;
    let musicName;
    let musicImage;
    let musicDate;
    let musicUrl;

    await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=tanukipenny&api_key=${process.env.APIKEY}&limit=1&format=json`).then((res) => {
        const track = res.data.recenttracks.track[0];
        musicAlbum = track.album['#text'];
        musicArtist = track.artist['#text'];
        musicName = track.name;
        musicImage = track.image[2]['#text'];
        musicDate = track.date['#text'];
        musicUrl = track.url;
    });

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Penny's Landing Site</title>
            <meta content="Just a simple landing page for my domain" property="og:description" />
            <link rel="stylesheet" href="/styles.css">
            <meta content="https://penny.moe/" property="og:url"/>
            <meta content="https://zip.penny.moe/u/bna-michiru.gif" property="og:image"/>
            <link rel="icon" href="http://zip.penny.moe/u/favicon.png"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"/>
        </head>
        <body>
            <div class="container">
                <div class="nameBox">
                    <h2 class="name">Penny Bibb</h2>
                </div>
                <div class="basicInfo">
                    <img class="pfp" src="${randomPfp()}" alt="Random pfp I use around"/>
                    <div class="infoText">Hai! I am ${ageFromDateOfBirthday(new Date(2001, 10, 18))} years old and currently attending university for computer science. I made this
                        page as a simple landing for my domain. If you would like to see some of what I have done you can
                        check out my GitHub page <a href="https://github.com/TanukiPenny">here!</a>
                    </div>
                </div>
                <div class="musicBox">
                    <h3 class="musicTitle">Currently Playing</h3>
                    <div class="musicInfo">
                        <img class="musicImg" src="${musicImage}" alt="Current album art" />
                        <div class="musicText">
                            <h5 class="musicTextInfo">Name: ${musicName}</h5>
                            <h5 class="musicTextInfo">Artist: ${musicArtist}</h5>
                            <h5 class="musicTextInfo">Album: ${musicAlbum}</h5>
                            <h5 class="musicTextInfo">Time listened: ${musicDate}</h5>
                            <h5 class="musicTextInfo"><a href="${musicUrl}"> Link here!</a></h5>
                        </div>
                    </div>
                </div>
                <div class="randomGifBox">
                    <h3 class="randomGifTitle">Random Michiru  Gif</h3>
                    <img class="randomGif" src="${randomGif()}" alt="A random michiru gif"/>
                </div>
            </div>
            <a class="secretLink" href="https://zip.penny.moe/go/michiru">Click Me!</a>
        </body>
    </html>
`
}

export default createIndexTemplate;