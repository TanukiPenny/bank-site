import "../globals.css";
import Image from "next/image";

function RandomGif() {
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

    const gif = images[Math.floor(Math.random() * images.length)]

    return (
        <>
            <div className="randomGifBox">
                <h3 className="randomGifTitle">Random Michiru  Gif</h3>
                <Image className="randomGif" src={gif} alt={"A random michiru gif"}/>
            </div>
        </>
    )
}

export default RandomGif