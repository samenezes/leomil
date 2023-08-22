
import './App.css'

function App() {

  window.addEventListener('load',function(){


    const valores=fetch('https://opentdb.com/api.php?amount=30&category=15').then(res=>{
    
    res.json().then(dados=>{
    
        mostraDados(dados);
    });
    }).catch(erro=>{
    
        console.log(erro+" erro na requisição")
    
    });
    
    });
    
    0
    function mostraDados(dados){
        const paises=document.querySelector('#jogos');
    
        dados.forEach(acesso =>{
            jogos.innerHTML += `<tr> <td> <img src=${acesso.flag} width=90px height=50px> </td>
                                <td> ${acesso.name} </td> 
                                <td> ${acesso.modo} </td> 
                                <td> ${acesso.alpha3Code} </td>
                                
            `                                         
        })        
    }


  return (
    <>
        <table id='jogos'>

<tr>
    <td> </td>    
    <td> Nome: </td>
    <td> Categoria: </td>
    <td> Dificuldade: </td>



</tr>
</table>

    </>
  )
  mostraDados();

}



export default App
