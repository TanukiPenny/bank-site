import "../globals.css";
import Image from "next/image";

function Pfp() {
    const images = [
        'https://zip.penny.moe/u/pfp1.png',
        'https://zip.penny.moe/u/pfp2.jpg',
        'https://zip.penny.moe/u/pfp3.jpg',
    ]

    const pfp = images[Math.floor(Math.random() * images.length)]

    return (
        <>
            <Image className="pfp" src={pfp} alt={"A pfp I use"}/>
        </>
    )
}

export default Pfp