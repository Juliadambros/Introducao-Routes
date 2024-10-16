import { Link } from "react-router-dom";

function Contato(){
    return(
        <div className="contato-page">
            <h1><center>Bem-vindo à página CONTATO</center></h1>
            <p></p>
            <Link to= '/sobre'><center>Sobre</center></Link>
            <p></p>
            <Link to='/'><center>Home</center></Link>
            <p></p>
            <Link to='/produto'><center>Produto</center></Link>
        </div>
    );
}

export default Contato;
