import image from "./image.png"
export default function Root(){
    return (
        <div id="conteudo">
           <div className="login-page">
               <img src={image} alt="logo"></img>
                <p>Para acessar o sistema, faça login</p>
           </div>
        </div>
    )
}