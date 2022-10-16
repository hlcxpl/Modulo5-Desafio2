import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../../src/Context";
import Heart from "./Heart"


export default function Galeria() {
  const { galeria, setGaleria } = useContext(Context);
  return (
    <div className="galeria grid-columns-5 p-3">
      {galeria.map((foto) => {
        return (
          <div key={foto.id} className="galeria foto" onClick={()=>{
        const index = galeria.findIndex((element) => element.id === foto.id)
        galeria[index].liked = !galeria[index].liked
        setGaleria([...galeria])}
      } style = {{ backgroundImage: `url(${foto.src.tiny})` }}>
      <Heart filled={foto.liked} />
      {foto.alt}
    </div>
  )
})}
    </div >
  );
}
