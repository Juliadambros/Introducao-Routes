import { Link } from "react-router-dom";
import biscoito from '../../assets/biscoito.png';

function Produto(){
    return(
        <div className="produto-page">
            <h1><center>Bem-vindo à página Produto</center></h1>
            <p></p>
            <Link to= '/'><center>Home</center></Link>
            <p></p>
            <Link to='/contato'><center>Contato</center></Link>
            <p></p>
            <center><img src={biscoito}/></center>
        </div>
    );
}

export default Produto;
