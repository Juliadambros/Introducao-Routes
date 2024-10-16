import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home-page">
            <h1><center>Bem-vindo à página HOME</center></h1>
            <p></p>
            <Link to= '/sobre'><center>Sobre</center></Link>
            <p></p>
            <Link to='/contato'><center>Contato</center></Link>
            <p></p>
            <Link to='/produto'><center>Produto</center></Link>
        </div>
    );
}

export default Home;
