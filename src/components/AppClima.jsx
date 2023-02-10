import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Loading from "./Loading"
import useClima from "../hooks/useClima"
import sol from "../assets/sol.avif"

const AppClima = () => {

    const {resultado, cargando, noResultado} = useClima()
  return (
    <>
        <main className="dos-columnas">
            <Formulario/>

            { cargando ? <Loading /> : 
            resultado?.name ? <Resultado /> :
            noResultado ? <p>{noResultado}</p>
            : 
            <div className="contenedor">
                <p className="clima">El clima se mostrará aquí</p>
                <img 
                    className="sol"
                    src={sol} 
                    alt="Imagen sol" />
            </div>
                
            }

            
        </main>
    </>
  )
}

export default AppClima