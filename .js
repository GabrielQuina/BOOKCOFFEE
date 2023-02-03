function alugarlivro6(){
    let livro = "";
    livro = document.getElementById('livros6').value;
    console.log(livro);

    if (livro != "1") {
        if (livro == "it") {
            livro = 'It_-_A_Coisa';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "duque") {
            livro = 'O_Duque_e_Eu';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "slenderman") {
            livro = 'Slender_Man';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "verity") {
            livro = 'Verity';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "exorcista") {
            livro = 'O_Exorcista';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "birdbox") {
            livro = 'Bird_Box';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "osprimos") {
            livro = 'Os_Primos';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "heartstopper") {
            livro = 'Heartstopper';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "selecao") {
            livro = 'A_seleção';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "duna") {
            livro = 'Duna';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "robo") {
            livro = 'Eu,_Robo';
            Cookies.set('livromesa6', livro);
        }
        if (livro == "jogosvorazes") {
            livro = 'Jogos_Vorazes';
            Cookies.set('livromesa6', livro);
        }
    } 
    else {
        
        document.getElementById('alerta').style.display = "block";
        
    }

}
function limparcapa6() {
    let livro = "";
    livro = document.getElementById('livros6').value;
    console.log(livro);
    if (livro == "it") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/it.png" alt="It - A Coisa">';
        document.getElementById('genero').innerHTML = 'Terror';
        document.getElementById('spangenero').style.display = 'block';

    } else if (livro == "slenderman") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/slenderman.png" alt="Slender Man">';
        document.getElementById('genero').innerHTML = 'Terror';
        document.getElementById('spangenero').style.display = 'block';

    } else if (livro == "duque") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/oduqueeeu.png" alt="O Duque e Eu">';
        document.getElementById('genero').innerHTML = 'Romance';
        document.getElementById('spangenero').style.display = 'block';

    } else if (livro == "verity") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/verity.png" alt="Verity">';
        document.getElementById('genero').innerHTML = 'Suspense';
        document.getElementById('spangenero').style.display = 'block';
        
    } else if (livro == "exorcista") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/exorcista.png" alt="O Exorcista">';
        document.getElementById('genero').innerHTML = 'Terror';
        document.getElementById('spangenero').style.display = 'block';
        
    } else if (livro == "birdbox") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/birdbox.png" alt="Bird Box">';
        document.getElementById('genero').innerHTML = 'Suspense';
        document.getElementById('spangenero').style.display = 'block';
        
    } else if (livro == "osprimos") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/primos.png" alt="Os Primos ">';
        document.getElementById('genero').innerHTML = 'Suspense';
        document.getElementById('spangenero').style.display = 'block';
        
    } else if (livro == "heartstopper") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/heartstopper.png" alt="Heartstopper ">';
        document.getElementById('genero').innerHTML = 'Romance';
        document.getElementById('spangenero').style.display = 'block';
        
    } else if (livro == "selecao") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/selecao.png" alt="A Selecao ">';
        document.getElementById('genero').innerHTML = 'Romance';
        document.getElementById('spangenero').style.display = 'block';
        
    } else if (livro == "duna") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/duna.png" alt="Duna ">';
        document.getElementById('genero').innerHTML = 'Ficção';
        document.getElementById('spangenero').style.display = 'block';
        
    } else if (livro == "robo") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/eurobo.png" alt="Eu Robo ">';
        document.getElementById('genero').innerHTML = 'Ficção';
        document.getElementById('spangenero').style.display = 'block';
        
    } else if (livro == "jogosvorazes") {
        document.getElementById('imgcapa').innerHTML = '<img src="img/jogosvorazes.png" alt="Jogos Vorazes ">';
        document.getElementById('genero').innerHTML = 'Ficção';
        document.getElementById('spangenero').style.display = 'block';
        
    } else {
        document.getElementById('imgcapa').innerHTML = '';
        document.getElementById('genero').innerHTML = '';
        document.getElementById('spangenero').style.display = 'none';
    }
}
