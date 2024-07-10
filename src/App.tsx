import './App.css'
import BasicInfo from "./components/basicInfo.tsx";
import RandomGif from "./components/randomGif.tsx";
import Name from "./components/name.tsx";
import Music from "./components/music.tsx";

function App() {


  return (
    <>
        <div className="container">
            <Name></Name>
            <BasicInfo></BasicInfo>
            <Music></Music>
            <RandomGif></RandomGif>
        </div>
        <a className="secretLink" href="https://zip.penny.moe/go/michiru">Click Me!</a>
    </>
  )
}

export default App
