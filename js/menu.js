function mostrar(){
    
    let x = document.getElementById('menu')
    if(x.className === 'menu'){
        x.className += ' menujs'
        document.getElementById('line').innerHTML = "&Cross;"
         
    }else{
        x.className = 'menu'
        document.getElementById('line').innerHTML = "&#9776;"
    }



}