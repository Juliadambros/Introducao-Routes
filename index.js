import { Link } from "react-router-dom";

function Sobre(){
    return(
        <div className="sobre-page">
            <h1><center>Bem-vindo à página SOBRE</center></h1>
            <p></p>
            <Link to= '/'><center>Home</center></Link>
            <p></p>
            <Link to='/contato'><center>Contato</center></Link>
            <p></p>
            <Link to='/produto'><center>Produto</center></Link>
        </div>
    );
}

export default Sobre;