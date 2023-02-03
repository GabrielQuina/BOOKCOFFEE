var tentativas = 1; saldo_caixa = 0;
var v_cafe = 2.00, v_salgados = 6.00, v_bebidas = 3.00, v_bolos = 5.00; cafem1 = 0; cafem2 = 0; cafem3 = 0; cafem4 = 0; cafem5 = 0; cafm6 = 0; salgadosm1 = 0; salgadosm2 = 0; salgadosm3 = 0; salgadosm4 = 0; salgadosm5 = 0; salgadosm6 = 0; bebidasm1 = 0; bebidasm2 = 0; bebidasm3 = 0; bebidasm4 = 0; bebidasm5 = 0; bebidasm6 = 0; bolosm1 = 0; bolosm2 = 0; bolosm3 = 0; bolosm4 = 0; bolosm5 = 0; bolosm6 = 0; quantcafesemacucar = 0; quantcapuccino = 0; quantcafe_comleite = 0; quantcafe_cortado = 0;
var valor_total_cafe_mesa1 =  0; valor_total_bebidas_mesa1 = 0; valor_total_bolos_mesa1 = 0; valor_total_salgados_mesa1 = 0; clientemesa1 = 0; valor_total_mesa1 = 0; // MESA 1
var valor_total_cafe_mesa2 =  0; valor_total_bebidas_mesa2 = 0; valor_total_bolos_mesa2 = 0; valor_total_salgados_mesa2 = 0; clientemesa2 = 0; valor_total_mesa2 = 0; // MESA 2
var valor_total_cafe_mesa3 =  0; valor_total_bebidas_mesa3 = 0; valor_total_bolos_mesa3 = 0; valor_total_salgados_mesa3 = 0; clientemesa3 = 0; valor_total_mesa3 = 0; // MESA 3
var valor_total_cafe_mesa4 =  0; valor_total_bebidas_mesa4 = 0; valor_total_bolos_mesa4 = 0; valor_total_salgados_mesa4 = 0; clientemesa4 = 0; valor_total_mesa4 = 0; // MESA 4
var valor_total_cafe_mesa5 =  0; valor_total_bebidas_mesa5 = 0; valor_total_bolos_mesa5 = 0; valor_total_salgados_mesa5 = 0; clientemesa5 = 0; valor_total_mesa5 = 0; // MESA 5
var valor_total_cafe_mesa6 =  0; valor_total_bebidas_mesa6 = 0; valor_total_bolos_mesa6 = 0; valor_total_salgados_mesa6 = 0; clientemesa6 = 0; valor_total_mesa6 = 0; // MESA 6


// Login

function logar() {
    var usuario, senha;
    usuario = document.getElementById('inputEmail3').value; //ARMAZENA O NOME DE USUARIO
    senha = parseInt(document.getElementById('inputPassword3').value); //ARMAZENA A SENHA INFORMADA PELO USUARIO
    console.log(usuario);
    console.log(senha);
    console.log(tentativas);
    if (tentativas < 3) {
        if (usuario == "admin" && senha == 123) {
            window.location.href = "mesas.html";
            //INSERE O NOME DO CLIENTE NA MESA
            document.getElementById('mesa1cliente').innerText = Cookies.get('clientemesa1');
            document.getElementById('mesa2cliente').innerText = Cookies.get('clientemesa2');
            document.getElementById('mesa3cliente').innerText = Cookies.get('clientemesa3');
            document.getElementById('mesa4cliente').innerText = Cookies.get('clientemesa4');
            document.getElementById('mesa5cliente').innerText = Cookies.get('clientemesa5');
            document.getElementById('mesa6cliente').innerText = Cookies.get('clientemesa6');
            //FIM INSERÇÃO

        } else {
            tentativas = tentativas + 1;
            document.getElementById('mensagemlogin').innerHTML = "Usuário ou senha incorretos!";
        }
    } else {
        // MODAL DE AVISO DE TENTATIVAS
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block"
        document.getElementById("msgModal").innerText = "Limite de Tentativas Atingido"
        span.onclick = function() { //APAGA MODAL QUANDO CLICAR NA MENSAGEM
            modal.style.display = "none";
            window.location = window.location.href; // RECARREGA A PÁGINA
          }
        window.onclick = function(event) { // APAGA MODAL QUANDO CLICAR NA TELA
            if (event.target == modal) {
              modal.style.display = "none";
              window.location = window.location.href; // RECARREGA A PÁGINA
            }
          }
    }
}


// Mostrar senha
function mostrarsenha() {
    
    checkbox = document.getElementById('customControlInline').checked; //VERIFICA A MARCAÇÃO NA CAIXA DE MOSTRAR SENHA

    console.log(checkbox);

    if (checkbox == true) {
        document.getElementById('inputPassword3').type="text"; //MOSTRA A SENHA CASO A CAIXA ESTEJA MARCADA
    } else {
        document.getElementById('inputPassword3').type="password"; // ESCONDE A SENHA SE A CAIXA ESTIVER DESMARCADA
    }
}

// ADICIONAR OS PRODUTOS AS VARIÁVEIS
// MESA 1

function comandamesa1() {

    //CAFÉ
    let quantcafesemacucar = parseInt(document.getElementById('cafe_semacucar1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcapuccino = parseInt(document.getElementById('cappucino1').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_comleite = parseInt(document.getElementById('cafe_comleite1').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_cortado = parseInt(document.getElementById('cafe_cortado1').value);    //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM CAFÉ

    //BEBIDAS
    let quantagua = parseInt(document.getElementById('agua1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoca = parseInt(document.getElementById('coca1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantguarana = parseInt(document.getElementById('guarana1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BEBIDAS

    //BOLOS
    let quant4leites = parseInt(document.getElementById('quatro_leites1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantleiteninho = parseInt(document.getElementById('leite_ninho1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantchocolate = parseInt(document.getElementById('chocolate1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantlaranja = parseInt(document.getElementById('laranja1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BOLOS

    //SALGADOS
    let quantkibes = parseInt(document.getElementById('kibe1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpastel = parseInt(document.getElementById('pastel1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoxinha = parseInt(document.getElementById('coxinha1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpaodequeijo = parseInt(document.getElementById('paodequeijo1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantenroladinho = parseInt(document.getElementById('enroladinho1').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM SALGADOS

    //CALCULOS
    salgadosm1 = quantkibes + quantpastel + quantcoxinha + quantpaodequeijo + quantenroladinho;
    bolosm1 = quant4leites + quantleiteninho + quantchocolate + quantlaranja;
    bebidasm1 = quantguarana + quantcoca + quantagua;
    cafem1 = quantcafe_cortado + quantcafe_comleite + quantcapuccino + quantcafesemacucar;

    valor_total_cafe_mesa1 = cafem1 * v_cafe;
    valor_total_bebidas_mesa1 = bebidasm1 * v_bebidas;
    valor_total_bolos_mesa1 = bolosm1 * v_bolos;
    valor_total_salgados_mesa1 = salgadosm1 * v_salgados;
    valortotal_mesa1 = valor_total_cafe_mesa1 + valor_total_bebidas_mesa1 + valor_total_bolos_mesa1 + valor_total_salgados_mesa1;

    console.log(valortotal_mesa1);
    console.log(valor_total_cafe_mesa1);
    console.log(valor_total_bebidas_mesa1);
    console.log(valor_total_bolos_mesa1);
    console.log(valor_total_salgados_mesa1);

    //INSERÇÃO DE VALOR AO FINAL DA PÁGINA
    if (typeof Cookies.get('valor_total_mesa1') != "undefined"){
        valortotalmesa1cookies = parseFloat(Cookies.get('valor_total_mesa1'));
        Cookies.set('valor_total_mesa1', parseFloat(valortotalmesa1cookies) +  parseFloat(valortotal_mesa1));
        document.getElementById('valorcmd1').innerHTML = Cookies.get('valor_total_mesa1');
        document.getElementById('valortotalmodal1').innerHTML = Cookies.get('valor_total_mesa1');
        valortotal_mesa1 = 0;
        if(typeof Cookies.get('saldo_caixa') != 'undefined'){
            saldocaixatotal = parseFloat(Cookies.get('saldo_caixa'));
            saldocaixatotal = saldocaixatotal - valortotalmesa1cookies;
        }else{
            saldocaixatotal = 0
        }
        Cookies.set('saldo_caixa', parseFloat(saldocaixatotal) + parseFloat(Cookies.get('valor_total_mesa1')));
        // LIMPA TODOS OS INPUTs
        document.getElementById('cafe_semacucar1').value = 0;
        document.getElementById('cappucino1').value = 0;
        document.getElementById('cafe_comleite1').value = 0;
        document.getElementById('cafe_cortado1').value = 0;
        document.getElementById('agua1').value = 0;
        document.getElementById('coca1').value = 0;
        document.getElementById('guarana1').value = 0;
        document.getElementById('quatro_leites1').value = 0;
        document.getElementById('leite_ninho1').value = 0;
        document.getElementById('chocolate1').value = 0;
        document.getElementById('laranja1').value = 0;
        document.getElementById('kibe1').value = 0;
        document.getElementById('pastel1').value = 0;
        document.getElementById('coxinha1').value = 0;
        document.getElementById('paodequeijo1').value = 0;
        document.getElementById('enroladinho1').value = 0;

        //FIM DA LIMPEZA
    } else {
        Cookies.set('valor_total_mesa1',0)
        comandamesa1()
    }
    valortotal_mesa1 = 0;
    

}

// MESA 2

function comandamesa2() {

    //CAFÉ
    let quantcafesemacucar = parseInt(document.getElementById('cafe_semacucar2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcapuccino = parseInt(document.getElementById('cappucino2').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_comleite = parseInt(document.getElementById('cafe_comleite2').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_cortado = parseInt(document.getElementById('cafe_cortado2').value);    //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM CAFÉ

    //BEBIDAS
    let quantagua = parseInt(document.getElementById('agua2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoca = parseInt(document.getElementById('coca2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantguarana = parseInt(document.getElementById('guarana2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BEBIDAS

    //BOLOS
    let quant4leites = parseInt(document.getElementById('quatro_leites2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantleiteninho = parseInt(document.getElementById('leite_ninho2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantchocolate = parseInt(document.getElementById('chocolate2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantlaranja = parseInt(document.getElementById('laranja2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BOLOS

    //SALGADOS
    let quantkibes = parseInt(document.getElementById('kibe2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpastel = parseInt(document.getElementById('pastel2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoxinha = parseInt(document.getElementById('coxinha2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpaodequeijo = parseInt(document.getElementById('paodequeijo2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantenroladinho = parseInt(document.getElementById('enroladinho2').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM SALGADOS

    //CALCULOS
    salgadosm2 = quantkibes + quantpastel + quantcoxinha + quantpaodequeijo + quantenroladinho;
    bolosm2 = quant4leites + quantleiteninho + quantchocolate + quantlaranja;
    bebidasm2 = quantguarana + quantcoca + quantagua;
    cafem2 = quantcafe_cortado + quantcafe_comleite + quantcapuccino + quantcafesemacucar;

    valor_total_cafe_mesa2 = cafem2 * v_cafe;
    valor_total_bebidas_mesa2 = bebidasm2 * v_bebidas;
    valor_total_bolos_mesa2 = bolosm2 * v_bolos;
    valor_total_salgados_mesa2 = salgadosm2 * v_salgados;
    valortotal_mesa2 = valor_total_cafe_mesa2 + valor_total_bebidas_mesa2 + valor_total_bolos_mesa2 + valor_total_salgados_mesa2;

    valortotal_mesa2 = valor_total_cafe_mesa2 + valor_total_bebidas_mesa2 + valor_total_bolos_mesa2 + valor_total_salgados_mesa2;
    console.log(valortotal_mesa2);
    console.log(valortotal_mesa2);
    console.log(valor_total_cafe_mesa2);
    console.log(valor_total_bebidas_mesa2);
    console.log(valor_total_bolos_mesa2);
    console.log(valor_total_salgados_mesa2);

    //INSERÇÃO DE VALOR AO FINAL DA PÁGINA
    if (typeof Cookies.get('valor_total_mesa2') != "undefined"){
        valortotalmesa2cookies = parseFloat(Cookies.get('valor_total_mesa2'));
        Cookies.set('valor_total_mesa2', parseFloat(valortotalmesa2cookies) +  parseFloat(valortotal_mesa2));
        document.getElementById('valorcmd2').innerHTML = Cookies.get('valor_total_mesa2');
        document.getElementById('valortotalmodal2').innerHTML = Cookies.get('valor_total_mesa2');

    
        if(typeof Cookies.get('saldo_caixa') != 'undefined'){
            saldocaixatotal = parseFloat(Cookies.get('saldo_caixa'));
            saldocaixatotal = saldocaixatotal - valortotalmesa2cookies;
        }else{
            saldocaixatotal = 0
        }
        Cookies.set('saldo_caixa', parseFloat(saldocaixatotal) + parseFloat(Cookies.get('valor_total_mesa2')));
        // LIMPA TODOS OS INPUTs
        document.getElementById('cafe_semacucar2').value = 0;
        document.getElementById('cappucino2').value = 0;
        document.getElementById('cafe_comleite2').value = 0;
        document.getElementById('cafe_cortado2').value = 0;
        document.getElementById('agua2').value = 0;
        document.getElementById('coca2').value = 0;
        document.getElementById('guarana2').value = 0;
        document.getElementById('quatro_leites2').value = 0;
        document.getElementById('leite_ninho2').value = 0;
        document.getElementById('chocolate2').value = 0;
        document.getElementById('laranja2').value = 0;
        document.getElementById('kibe2').value = 0;
        document.getElementById('pastel2').value = 0;
        document.getElementById('coxinha2').value = 0;
        document.getElementById('paodequeijo2').value = 0;
        document.getElementById('enroladinho2').value = 0;
    
        //FIM DA LIMPEZA
    } else {
        Cookies.set('valor_total_mesa2',0)
        comandamesa2()
    }
    
   
}

// MESA 3

function comandamesa3() {

    //CAFÉ
    let quantcafesemacucar = parseInt(document.getElementById('cafe_semacucar3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcapuccino = parseInt(document.getElementById('cappucino3').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_comleite = parseInt(document.getElementById('cafe_comleite3').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_cortado = parseInt(document.getElementById('cafe_cortado3').value);    //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM CAFÉ

    //BEBIDAS
    let quantagua = parseInt(document.getElementById('agua3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoca = parseInt(document.getElementById('coca3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantguarana = parseInt(document.getElementById('guarana3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BEBIDAS

    //BOLOS
    let quant4leites = parseInt(document.getElementById('quatro_leites3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantleiteninho = parseInt(document.getElementById('leite_ninho3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantchocolate = parseInt(document.getElementById('chocolate3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantlaranja = parseInt(document.getElementById('laranja3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BOLOS

    //SALGADOS
    let quantkibes = parseInt(document.getElementById('kibe3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpastel = parseInt(document.getElementById('pastel3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoxinha = parseInt(document.getElementById('coxinha3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpaodequeijo = parseInt(document.getElementById('paodequeijo3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantenroladinho = parseInt(document.getElementById('enroladinho3').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM SALGADOS

    //CALCULOS
    salgadosm3 = quantkibes + quantpastel + quantcoxinha + quantpaodequeijo + quantenroladinho;
    bolosm3 = quant4leites + quantleiteninho + quantchocolate + quantlaranja;
    bebidasm3 = quantguarana + quantcoca + quantagua;
    cafem3 = quantcafe_cortado + quantcafe_comleite + quantcapuccino + quantcafesemacucar;

    valor_total_cafe_mesa3 = cafem3 * v_cafe;
    valor_total_bebidas_mesa3 = bebidasm3 * v_bebidas;
    valor_total_bolos_mesa3 = bolosm3 * v_bolos;
    valor_total_salgados_mesa3 = salgadosm3 * v_salgados;

    valortotal_mesa3 = valor_total_cafe_mesa3 + valor_total_bebidas_mesa3 + valor_total_bolos_mesa3 + valor_total_salgados_mesa3;
    console.log(valortotal_mesa3);
    console.log(valor_total_cafe_mesa3);
    console.log(valor_total_bebidas_mesa3);
    console.log(valor_total_bolos_mesa3);
    console.log(valor_total_salgados_mesa3);

    //INSERÇÃO DE VALOR AO FINAL DA PÁGINA
    if (typeof Cookies.get('valor_total_mesa3') != "undefined"){
        valortotalmesa3cookies = parseFloat(Cookies.get('valor_total_mesa3'));
        Cookies.set('valor_total_mesa3', parseFloat(valortotalmesa3cookies) +  parseFloat(valortotal_mesa3));
        document.getElementById('valorcmd3').innerHTML = Cookies.get('valor_total_mesa3');
        document.getElementById('valortotalmodal3').innerHTML = Cookies.get('valor_total_mesa3');

    
        if(typeof Cookies.get('saldo_caixa') != 'undefined'){
            saldocaixatotal = parseFloat(Cookies.get('saldo_caixa'));
            saldocaixatotal = saldocaixatotal - valortotalmesa3cookies;
        }else{
            saldocaixatotal = 0
        }
        Cookies.set('saldo_caixa', parseFloat(saldocaixatotal) + parseFloat(Cookies.get('valor_total_mesa3')));
        // LIMPA TODOS OS INPUTs
        document.getElementById('cafe_semacucar3').value = 0;
        document.getElementById('cappucino3').value = 0;
        document.getElementById('cafe_comleite3').value = 0;
        document.getElementById('cafe_cortado3').value = 0;
        document.getElementById('agua3').value = 0;
        document.getElementById('coca3').value = 0;
        document.getElementById('guarana3').value = 0;
        document.getElementById('quatro_leites3').value = 0;
        document.getElementById('leite_ninho3').value = 0;
        document.getElementById('chocolate3').value = 0;
        document.getElementById('laranja3').value = 0;
        document.getElementById('kibe3').value = 0;
        document.getElementById('pastel3').value = 0;
        document.getElementById('coxinha3').value = 0;
        document.getElementById('paodequeijo3').value = 0;
        document.getElementById('enroladinho3').value = 0;
    
        //FIM DA LIMPEZA
    } else {
        Cookies.set('valor_total_mesa3',0)
        comandamesa3()
    }
}

// MESA 4

function comandamesa4() {

    //CAFÉ
    let quantcafesemacucar = parseInt(document.getElementById('cafe_semacucar4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcapuccino = parseInt(document.getElementById('cappucino4').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_comleite = parseInt(document.getElementById('cafe_comleite4').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_cortado = parseInt(document.getElementById('cafe_cortado4').value);    //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM CAFÉ

    //BEBIDAS
    let quantagua = parseInt(document.getElementById('agua4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoca = parseInt(document.getElementById('coca4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantguarana = parseInt(document.getElementById('guarana4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BEBIDAS

    //BOLOS
    let quant4leites = parseInt(document.getElementById('quatro_leites4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantleiteninho = parseInt(document.getElementById('leite_ninho4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantchocolate = parseInt(document.getElementById('chocolate4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantlaranja = parseInt(document.getElementById('laranja4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BOLOS

    //SALGADOS
    let quantkibes = parseInt(document.getElementById('kibe4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpastel = parseInt(document.getElementById('pastel4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoxinha = parseInt(document.getElementById('coxinha4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpaodequeijo = parseInt(document.getElementById('paodequeijo4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantenroladinho = parseInt(document.getElementById('enroladinho4').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM SALGADOS

    //CALCULOS
    salgadosm4 = quantkibes + quantpastel + quantcoxinha + quantpaodequeijo + quantenroladinho;
    bolosm4 = quant4leites + quantleiteninho + quantchocolate + quantlaranja;
    bebidasm4 = quantguarana + quantcoca + quantagua;
    cafem4 = quantcafe_cortado + quantcafe_comleite + quantcapuccino + quantcafesemacucar;

    valor_total_cafe_mesa4 = cafem4 * v_cafe;
    valor_total_bebidas_mesa4 = bebidasm4 * v_bebidas;
    valor_total_bolos_mesa4 = bolosm4 * v_bolos;
    valor_total_salgados_mesa4 = salgadosm4 * v_salgados;

    valortotal_mesa4 = valor_total_cafe_mesa4 + valor_total_bebidas_mesa4 + valor_total_bolos_mesa4 + valor_total_salgados_mesa4;
    console.log(valortotal_mesa4);
    console.log(valor_total_cafe_mesa4);
    console.log(valor_total_bebidas_mesa4);
    console.log(valor_total_bolos_mesa4);
    console.log(valor_total_salgados_mesa4);

    //INSERÇÃO DE VALOR AO FINAL DA PÁGINA
    if (typeof Cookies.get('valor_total_mesa4') != "undefined"){
        valortotalmesa4cookies = parseFloat(Cookies.get('valor_total_mesa4'));
        Cookies.set('valor_total_mesa4', parseFloat(valortotalmesa4cookies) +  parseFloat(valortotal_mesa4));
        document.getElementById('valorcmd4').innerHTML = Cookies.get('valor_total_mesa4');
        document.getElementById('valortotalmodal4').innerHTML = Cookies.get('valor_total_mesa4');

    
        if(typeof Cookies.get('saldo_caixa') != 'undefined'){
            saldocaixatotal = parseFloat(Cookies.get('saldo_caixa'));
            saldocaixatotal = saldocaixatotal - valortotalmesa4cookies;
        }else{
            saldocaixatotal = 0
        }
        Cookies.set('saldo_caixa', parseFloat(saldocaixatotal) + parseFloat(Cookies.get('valor_total_mesa4')));
        // LIMPA TODOS OS INPUTs
        document.getElementById('cafe_semacucar4').value = 0;
        document.getElementById('cappucino4').value = 0;
        document.getElementById('cafe_comleite4').value = 0;
        document.getElementById('cafe_cortado4').value = 0;
        document.getElementById('agua4').value = 0;
        document.getElementById('coca4').value = 0;
        document.getElementById('guarana4').value = 0;
        document.getElementById('quatro_leites4').value = 0;
        document.getElementById('leite_ninho4').value = 0;
        document.getElementById('chocolate4').value = 0;
        document.getElementById('laranja4').value = 0;
        document.getElementById('kibe4').value = 0;
        document.getElementById('pastel4').value = 0;
        document.getElementById('coxinha4').value = 0;
        document.getElementById('paodequeijo4').value = 0;
        document.getElementById('enroladinho4').value = 0;
    
        //FIM DA LIMPEZA
    } else {
        Cookies.set('valor_total_mesa4',0)
        comandamesa4()
    }
}

// MESA 5

function comandamesa5() {

    //CAFÉ
    let quantcafesemacucar = parseInt(document.getElementById('cafe_semacucar5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcapuccino = parseInt(document.getElementById('cappucino5').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_comleite = parseInt(document.getElementById('cafe_comleite5').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_cortado = parseInt(document.getElementById('cafe_cortado5').value);    //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM CAFÉ

    //BEBIDAS
    let quantagua = parseInt(document.getElementById('agua5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoca = parseInt(document.getElementById('coca5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantguarana = parseInt(document.getElementById('guarana5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BEBIDAS

    //BOLOS
    let quant5leites = parseInt(document.getElementById('quatro_leites5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantleiteninho = parseInt(document.getElementById('leite_ninho5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantchocolate = parseInt(document.getElementById('chocolate5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantlaranja = parseInt(document.getElementById('laranja5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BOLOS

    //SALGADOS
    let quantkibes = parseInt(document.getElementById('kibe5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpastel = parseInt(document.getElementById('pastel5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoxinha = parseInt(document.getElementById('coxinha5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpaodequeijo = parseInt(document.getElementById('paodequeijo5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantenroladinho = parseInt(document.getElementById('enroladinho5').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM SALGADOS

    //CALCULOS
    salgadosm5 = quantkibes + quantpastel + quantcoxinha + quantpaodequeijo + quantenroladinho;
    bolosm5 = quant5leites + quantleiteninho + quantchocolate + quantlaranja;
    bebidasm5 = quantguarana + quantcoca + quantagua;
    cafem5 = quantcafe_cortado + quantcafe_comleite + quantcapuccino + quantcafesemacucar;

    valor_total_cafe_mesa5 = cafem5 * v_cafe;
    valor_total_bebidas_mesa5 = bebidasm5 * v_bebidas;
    valor_total_bolos_mesa5 = bolosm5 * v_bolos;
    valor_total_salgados_mesa5 = salgadosm5 * v_salgados;
    
    valortotal_mesa5 = valor_total_cafe_mesa5 + valor_total_bebidas_mesa5 + valor_total_bolos_mesa5 + valor_total_salgados_mesa5;
    console.log(valortotal_mesa5);
    console.log(valor_total_cafe_mesa5);
    console.log(valor_total_bebidas_mesa5);
    console.log(valor_total_bolos_mesa5);
    console.log(valor_total_salgados_mesa5);

    //INSERÇÃO DE VALOR AO FINAL DA PÁGINA
    if (typeof Cookies.get('valor_total_mesa5') != "undefined"){
        valortotalmesa5cookies = parseFloat(Cookies.get('valor_total_mesa5'));
        Cookies.set('valor_total_mesa5', parseFloat(valortotalmesa5cookies) +  parseFloat(valortotal_mesa5));
        document.getElementById('valorcmd5').innerHTML = Cookies.get('valor_total_mesa5');
        document.getElementById('valortotalmodal5').innerHTML = Cookies.get('valor_total_mesa5');

    
        if(typeof Cookies.get('saldo_caixa') != 'undefined'){
            saldocaixatotal = parseFloat(Cookies.get('saldo_caixa'));
            saldocaixatotal = saldocaixatotal - valortotalmesa5cookies;
        }else{
            saldocaixatotal = 0
        }
        Cookies.set('saldo_caixa', parseFloat(saldocaixatotal) + parseFloat(Cookies.get('valor_total_mesa5')));
        // LIMPA TODOS OS INPUTs
        document.getElementById('cafe_semacucar5').value = 0;
        document.getElementById('cappucino5').value = 0;
        document.getElementById('cafe_comleite5').value = 0;
        document.getElementById('cafe_cortado5').value = 0;
        document.getElementById('agua5').value = 0;
        document.getElementById('coca5').value = 0;
        document.getElementById('guarana5').value = 0;
        document.getElementById('quatro_leites5').value = 0;
        document.getElementById('leite_ninho5').value = 0;
        document.getElementById('chocolate5').value = 0;
        document.getElementById('laranja5').value = 0;
        document.getElementById('kibe5').value = 0;
        document.getElementById('pastel5').value = 0;
        document.getElementById('coxinha5').value = 0;
        document.getElementById('paodequeijo5').value = 0;
        document.getElementById('enroladinho5').value = 0;
    
        //FIM DA LIMPEZA
    } else {
        Cookies.set('valor_total_mesa5',0)
        comandamesa5()
    }
}

// MESA 6

function comandamesa6() {

    //CAFÉ
    let quantcafesemacucar = parseInt(document.getElementById('cafe_semacucar6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcapuccino = parseInt(document.getElementById('cappucino6').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_comleite = parseInt(document.getElementById('cafe_comleite6').value);  //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcafe_cortado = parseInt(document.getElementById('cafe_cortado6').value);    //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM CAFÉ

    //BEBIDAS
    let quantagua = parseInt(document.getElementById('agua6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoca = parseInt(document.getElementById('coca6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantguarana = parseInt(document.getElementById('guarana6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BEBIDAS

    //BOLOS
    let quant6leites = parseInt(document.getElementById('quatro_leites6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantleiteninho = parseInt(document.getElementById('leite_ninho6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantchocolate = parseInt(document.getElementById('chocolate6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantlaranja = parseInt(document.getElementById('laranja6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM BOLOS

    //SALGADOS
    let quantkibes = parseInt(document.getElementById('kibe6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpastel = parseInt(document.getElementById('pastel6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantcoxinha = parseInt(document.getElementById('coxinha6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantpaodequeijo = parseInt(document.getElementById('paodequeijo6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    let quantenroladinho = parseInt(document.getElementById('enroladinho6').value); //EXTRAI A QUANTIDADE DESEJADA NO INPUT
    //FIM SALGADOS

    //CALCULOS
    salgadosm6 = quantkibes + quantpastel + quantcoxinha + quantpaodequeijo + quantenroladinho;
    bolosm6 = quant6leites + quantleiteninho + quantchocolate + quantlaranja;
    bebidasm6 = quantguarana + quantcoca + quantagua;
    cafem6 = quantcafe_cortado + quantcafe_comleite + quantcapuccino + quantcafesemacucar;

    valor_total_cafe_mesa6 = cafem6 * v_cafe; // 2.0
    valor_total_bebidas_mesa6 = bebidasm6 * v_bebidas; //6.0
    valor_total_bolos_mesa6 = bolosm6 * v_bolos;
    valor_total_salgados_mesa6 = salgadosm6 * v_salgados;

    valortotal_mesa6 = valor_total_cafe_mesa6 + valor_total_bebidas_mesa6 + valor_total_bolos_mesa6 + valor_total_salgados_mesa6;
    console.log(valortotal_mesa6);
    console.log(valor_total_cafe_mesa6);
    console.log(valor_total_bebidas_mesa6);
    console.log(valor_total_bolos_mesa6);
    console.log(valor_total_salgados_mesa6);

    //INSERÇÃO DE VALOR AO FINAL DA PÁGINA
    if (typeof Cookies.get('valor_total_mesa6') != "undefined"){
        valortotalmesa6cookies = parseFloat(Cookies.get('valor_total_mesa6'));
        Cookies.set('valor_total_mesa6', parseFloat(valortotalmesa6cookies) +  parseFloat(valortotal_mesa6));
        document.getElementById('valorcmd6').innerHTML = Cookies.get('valor_total_mesa6');
        document.getElementById('valortotalmodal6').innerHTML = Cookies.get('valor_total_mesa6');

    
        if(typeof Cookies.get('saldo_caixa') != 'undefined'){
            saldocaixatotal = parseFloat(Cookies.get('saldo_caixa'));
            saldocaixatotal = saldocaixatotal - valortotalmesa6cookies;
        }else{
            saldocaixatotal = 0
        }
        Cookies.set('saldo_caixa', parseFloat(saldocaixatotal) + parseFloat(Cookies.get('valor_total_mesa6')));
        // LIMPA TODOS OS INPUTs
        document.getElementById('cafe_semacucar6').value = 0;
        document.getElementById('cappucino6').value = 0;
        document.getElementById('cafe_comleite6').value = 0;
        document.getElementById('cafe_cortado6').value = 0;
        document.getElementById('agua6').value = 0;
        document.getElementById('coca6').value = 0;
        document.getElementById('guarana6').value = 0;
        document.getElementById('quatro_leites6').value = 0;
        document.getElementById('leite_ninho6').value = 0;
        document.getElementById('chocolate6').value = 0;
        document.getElementById('laranja6').value = 0;
        document.getElementById('kibe6').value = 0;
        document.getElementById('pastel6').value = 0;
        document.getElementById('coxinha6').value = 0;
        document.getElementById('paodequeijo6').value = 0;
        document.getElementById('enroladinho6').value = 0;
    
        //FIM DA LIMPEZA
    } else {
        Cookies.set('valor_total_mesa6',0)
        comandamesa6()
    }
}

// SALDO CAIXA
function saldo_caixafunc() {

    if (typeof Cookies.get('saldo_caixa') != 'undefined'){
        saldocaixacookies = parseFloat(Cookies.get('saldo_caixa'));
        
        var modal = document.getElementById("MeuModal");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block"
        document.getElementById("msgModal2").innerHTML = "O Saldo Atual do Caixa é de:";
        document.getElementById("msgModal3").innerHTML = parseFloat(Cookies.get('saldo_caixa'));
        span.onclick = function() { //FECHA MODAL APÓS CLICAR NA MENSAGEM
            modal.style.display = "none";
            }
        window.onclick = function(event) { // FECHA MODAL APÓS CLICAR NA TELA
            if (event.target == modal) {
                modal.style.display = "none";
            }
            }
    } else {
        Cookies.set('saldo_caixa',0);
        saldo_caixafunc();
    }
    

}
//FECHAR COMANDA
function fecharcomanda1(){ //MESA 1
    valor_total_cafe_mesa1 =  0; 
    valor_total_bebidas_mesa1 = 0; 
    valor_total_bolos_mesa1 = 0; 
    valor_total_salgados_mesa1 = 0; 
    Cookies.set('valor_total_mesa1', 0);
    Cookies.set('clientemesa1', "");
    Cookies.set('idm1', 0);
    Cookies.set('livromesa1', "")
    document.getElementById('liberacaomesas1').style.display = "block";
    document.getElementById('valortotalmodal1').innerHTML = " ";
    
    carregarmesa1();
}
function fecharcomanda2(){ //MESA 2
    valor_total_cafe_mesa2 =  0; 
    valor_total_bebidas_mesa2 = 0; 
    valor_total_bolos_mesa2 = 0; 
    valor_total_salgados_mesa2 = 0; 
    Cookies.set('valor_total_mesa2', 0);
    Cookies.set('clientemesa2', "");
    Cookies.set('idm2', 0);
    Cookies.set('livromesa2', "")
    document.getElementById('liberacaomesas2').style.display = "block";
    document.getElementById('valortotalmodal2').innerHTML = " ";
    carregarmesa2();
}
function fecharcomanda3(){ //MESA 3
    valor_total_cafe_mesa3 =  0; 
    valor_total_bebidas_mesa3 = 0; 
    valor_total_bolos_mesa3 = 0; 
    valor_total_salgados_mesa3 = 0; 
    Cookies.set('valor_total_mesa3', 0);
    Cookies.set('clientemesa3', "");
    Cookies.set('idm3', 0);
    Cookies.set('livromesa3', "")
    document.getElementById('liberacaomesas3').style.display = "block";
    document.getElementById('valortotalmodal3').innerHTML = " ";
    carregarmesa3();
}
function fecharcomanda4(){ //MESA 4
    valor_total_cafe_mesa1 =  0; 
    valor_total_bebidas_mesa1 = 0; 
    valor_total_bolos_mesa1 = 0; 
    valor_total_salgados_mesa1 = 0; 
    valor_total_mesa1 = 0;
    Cookies.set('valor_total_mesa4', 0);
    Cookies.set('clientemesa4', "");
    Cookies.set('idm4', 0);
    Cookies.set('livromesa4', "")
    document.getElementById('liberacaomesas4').style.display = "block";
    document.getElementById('valortotalmodal4').innerHTML = " ";
    carregarmesa4();
}
function fecharcomanda5(){ //MESA 5
    valor_total_cafe_mesa1 =  0; 
    valor_total_bebidas_mesa1 = 0; 
    valor_total_bolos_mesa1 = 0; 
    valor_total_salgados_mesa1 = 0; 
    valor_total_mesa1 = 0;
    Cookies.set('valor_total_mesa5', 0);
    Cookies.set('clientemesa5', "");
    Cookies.set('idm5', 0);
    Cookies.set('livromesa5', "")
    document.getElementById('liberacaomesas5').style.display = "block";
    document.getElementById('valortotalmodal5').innerHTML = " ";
    carregarmesa5();
}
function fecharcomanda6(){ //MESA 6
    valor_total_cafe_mesa1 =  0; 
    valor_total_bebidas_mesa1 = 0; 
    valor_total_bolos_mesa1 = 0; 
    valor_total_salgados_mesa1 = 0; 
    valor_total_mesa1 = 0;
    Cookies.set('valor_total_mesa6', 0);
    Cookies.set('clientemesa6', "");
    Cookies.set('idm6', 0);
    Cookies.set('livromesa6', "")
    document.getElementById('liberacaomesas6').style.display = "block";
    document.getElementById('valortotalmodal6').innerHTML = " ";
    carregarmesa6();
}

//GUARDAR NOME DO CLIENTE MESAS
function mesa1cliente() {
    document.getElementById('mesa1cliente').innerText = Cookies.get('clientemesa1');
    Cookies.set('clientemesa1', document.getElementById('mesa1cliente').value)
    console.log(clientemesa5)
    document.getElementById('liberacaomesas1').style.display = "none";
    document.getElementById('clientemesa1').style.display = "Block";
    document.getElementById('clientemesa1span').innerText = Cookies.get('clientemesa1');
    document.getElementById('clientemesa1span').style.color = "white";
    Cookies.set('idm1', '1');
}
function mesa2cliente() {
    document.getElementById('mesa2cliente').innerText = Cookies.get('clientemesa2');
    Cookies.set('clientemesa2', document.getElementById('mesa2cliente').value)
    console.log(clientemesa5)
    document.getElementById('liberacaomesas2').style.display = "none";
    document.getElementById('clientemesa2').style.display = "Block";
    document.getElementById('clientemesa2span').innerText = Cookies.get('clientemesa2');
    document.getElementById('clientemesa2span').style.color = "white";
    Cookies.set('idm2', '1');
}
function mesa3cliente() {
    document.getElementById('mesa3cliente').innerText = Cookies.get('clientemesa3');
    Cookies.set('clientemesa3', document.getElementById('mesa3cliente').value)
    console.log(clientemesa5)
    document.getElementById('liberacaomesas3').style.display = "none";
    document.getElementById('clientemesa3').style.display = "Block";
    document.getElementById('clientemesa3span').innerText = Cookies.get('clientemesa3');
    document.getElementById('clientemesa3span').style.color = "white";
    Cookies.set('idm3', '1');

}
function mesa4cliente() {
    document.getElementById('mesa4cliente').innerText = Cookies.get('clientemesa4');
    Cookies.set('clientemesa4', document.getElementById('mesa4cliente').value)
    console.log(clientemesa5)
    document.getElementById('liberacaomesas4').style.display = "none";
    document.getElementById('clientemesa4').style.display = "Block";
    document.getElementById('clientemesa4span').innerText = Cookies.get('clientemesa4');
    document.getElementById('clientemesa4span').style.color = "white";
    Cookies.set('idm4', '1');

}
function mesa5cliente() {
    document.getElementById('mesa5cliente').innerText = Cookies.get('clientemesa5');
    Cookies.set('clientemesa5', document.getElementById('mesa5cliente').value)
    console.log(clientemesa5)
    document.getElementById('liberacaomesas5').style.display = "none";
    document.getElementById('clientemesa5').style.display = "Block";
    document.getElementById('clientemesa5span').innerText = Cookies.get('clientemesa5');
    document.getElementById('clientemesa5span').style.color = "white";

    Cookies.set('idm5', '1');

}
function mesa6cliente() {
    document.getElementById('mesa6cliente').innerText = Cookies.get('clientemesa6');
    Cookies.set('clientemesa6', document.getElementById('mesa6cliente').value)
    console.log(clientemesa5)
    document.getElementById('liberacaomesas6').style.display = "none";
    document.getElementById('clientemesa6').style.display = "Block";
    document.getElementById('clientemesa6span').innerText = Cookies.get('clientemesa6');
    document.getElementById('clientemesa6span').style.color = "white";
    Cookies.set('idm6', '1');

}

function carregarmesas() {
    idm1 = Cookies.get('idm1');
    idm2 = Cookies.get('idm2');
    idm3 = Cookies.get('idm3');
    idm4 = Cookies.get('idm4');
    idm5 = Cookies.get('idm5');
    idm6 = Cookies.get('idm6');

    console.log(idm1);
    console.log(idm2);
    console.log(idm3);
    console.log(idm4);
    console.log(idm5);
    console.log(idm6);

    if (idm1 == '1') {
        document.getElementById('mesa1cliente').innerText = Cookies.get('clientemesa1');
        document.getElementById('clientemesa1span').style.color = "white";
        document.getElementById('liberacaomesas1').style.display = "none";
        document.getElementById('clientemesa1').style.display = "Block";
        document.getElementById('clientemesa1span').innerText = Cookies.get('clientemesa1');
    } else {
        document.getElementById('liberacaomesas1').style.display = "";
        document.getElementById('clientemesa1').style.display = "none";
    }
    if (idm2 == '1') {
        document.getElementById('mesa2cliente').innerText = Cookies.get('clientemesa2');
        document.getElementById('clientemesa2span').style.color = "white";
        document.getElementById('liberacaomesas2').style.display = "none";
        document.getElementById('clientemesa2').style.display = "Block";
        document.getElementById('clientemesa2span').innerText = Cookies.get('clientemesa2');
    } else {
        document.getElementById('liberacaomesas2').style.display = "";
        document.getElementById('clientemesa2').style.display = "none";
    }

    if (idm3 == '1') {
        document.getElementById('mesa3cliente').innerText = Cookies.get('clientemesa3');
        document.getElementById('clientemesa3span').style.color = "white";
        document.getElementById('liberacaomesas3').style.display = "none";
        document.getElementById('clientemesa3').style.display = "Block";
        document.getElementById('clientemesa3span').innerText = Cookies.get('clientemesa3');
    } else {
        document.getElementById('liberacaomesas3').style.display = "";
        document.getElementById('clientemesa3').style.display = "none";
    }

    if (idm4 == '1') {
        document.getElementById('mesa4cliente').innerText = Cookies.get('clientemesa4');
        document.getElementById('clientemesa4span').style.color = "white";
        document.getElementById('liberacaomesas4').style.display = "none";
        document.getElementById('clientemesa4').style.display = "Block";
        document.getElementById('clientemesa4span').innerText = Cookies.get('clientemesa4');
    } else {
        document.getElementById('liberacaomesas4').style.display = "";
        document.getElementById('clientemesa4').style.display = "none";
    }

    if (idm5 == '1') {
        document.getElementById('mesa5cliente').innerText = Cookies.get('clientemesa5');
        document.getElementById('clientemesa5span').style.color = "white";
        document.getElementById('liberacaomesas5').style.display = "none";
        document.getElementById('clientemesa5').style.display = "Block";
        document.getElementById('clientemesa5span').innerText = Cookies.get('clientemesa5');
    } else {
        document.getElementById('liberacaomesas5').style.display = "";
        document.getElementById('clientemesa5').style.display = "none";
    }

    if (idm6 == '1') {
        document.getElementById('mesa6cliente').innerText = Cookies.get('clientemesa6');
        document.getElementById('clientemesa6span').style.color = "white";
        document.getElementById('liberacaomesas6').style.display = "none";
        document.getElementById('clientemesa6').style.display = "Block";
        document.getElementById('clientemesa6span').innerText = Cookies.get('clientemesa6');
    } else {
        document.getElementById('liberacaomesas6').style.display = "";
        document.getElementById('clientemesa6').style.display = "none";
    }
}
function sair() {
    window.location = window.location.href; // RECARREGA A PÁGINA    
    
}
function fecharmodallivro() {
    document.getElementById('alerta').style.display = "none"; 

}
//LIVROS
function alugarlivro1(){
    let livro = "";
    livro = document.getElementById('livros1').value;
    console.log(livro);

    if (livro != "1") {
        if (livro == "it") {
            livro = 'It_-_A_Coisa';
            Cookies.set('livromesa1', livro);

        }
        if (livro == "duque") {
            livro = 'O_Duque_e_Eu';
            Cookies.set('livromesa1', livro);
        }
        if (livro == "slenderman") {
            livro = 'Slender_Man';
            Cookies.set('livromesa1', livro);
        }
        if (livro == "verity") {
            livro = 'Verity';
            Cookies.set('livromesa1', livro);
        }
        if (livro == "exorcista") {
            livro = 'O_Exorcista';
            Cookies.set('livromesa1', livro);
        }
        if (livro == "birdbox") {
            livro = 'Bird_Box';
            Cookies.set('livromesa1', livro);
        }
        if (livro == "osprimos") {
            livro = 'Os_Primos';
            Cookies.set('livromesa1', livro);
        }
        if (livro == "heartstopper") {
            livro = 'Heartstopper';
            Cookies.set('livromesa1', livro);
        }
        if (livro == "selecao") {
            livro = 'A_seleção';
            Cookies.set('livromesa1', livro);
        }
        if (livro == "duna") {
            livro = 'Duna';
            Cookies.set('livromesa1', livro);
        }
        if (livro == "robo") {
            livro = 'Eu,_Robo';
            Cookies.set('livromesa1', livro);
        }
        if (livro == "jogosvorazes") {
            livro = 'Jogos_Vorazes';
            Cookies.set('livromesa1', livro);
        }
    } 
    else {
        
        document.getElementById('alerta').style.display = "block";
        
    }
    carregarmesa1();

}
function limparcapa() {
    let livro = "";
    livro = document.getElementById('livros1').value;
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
function alugarlivro2(){
    let livro = "";
    livro = document.getElementById('livros2').value;
    console.log(livro);

    if (livro != "1") {
        if (livro == "it") {
            livro = 'It_-_A_Coisa';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "duque") {
            livro = 'O_Duque_e_Eu';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "slenderman") {
            livro = 'Slender_Man';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "verity") {
            livro = 'Verity';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "exorcista") {
            livro = 'O_Exorcista';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "birdbox") {
            livro = 'Bird_Box';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "osprimos") {
            livro = 'Os_Primos';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "heartstopper") {
            livro = 'Heartstopper';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "selecao") {
            livro = 'A_seleção';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "duna") {
            livro = 'Duna';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "robo") {
            livro = 'Eu,_Robo';
            Cookies.set('livromesa2', livro);
        }
        if (livro == "jogosvorazes") {
            livro = 'Jogos_Vorazes';
            Cookies.set('livromesa2', livro);
        }
    } 
    else {
        
        document.getElementById('alerta').style.display = "block";
        
    }
    carregarmesa2();

}
function limparcapa2() {
    let livro = "";
    livro = document.getElementById('livros2').value;
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
function alugarlivro3(){
    let livro = "";
    livro = document.getElementById('livros3').value;
    console.log(livro);

    if (livro != "1") {
        if (livro == "it") {
            livro = 'It_-_A_Coisa';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "duque") {
            livro = 'O_Duque_e_Eu';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "slenderman") {
            livro = 'Slender_Man';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "verity") {
            livro = 'Verity';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "exorcista") {
            livro = 'O_Exorcista';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "birdbox") {
            livro = 'Bird_Box';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "osprimos") {
            livro = 'Os_Primos';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "heartstopper") {
            livro = 'Heartstopper';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "selecao") {
            livro = 'A_seleção';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "duna") {
            livro = 'Duna';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "robo") {
            livro = 'Eu,_Robo';
            Cookies.set('livromesa3', livro);
        }
        if (livro == "jogosvorazes") {
            livro = 'Jogos_Vorazes';
            Cookies.set('livromesa3', livro);
        }
    } 
    else {
        
        document.getElementById('alerta').style.display = "block";
        
    }
    carregarmesa3();

}
function limparcapa3() {
    let livro = "";
    livro = document.getElementById('livros3').value;
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
function alugarlivro4(){
    let livro = "";
    livro = document.getElementById('livros4').value;
    console.log(livro);

    if (livro != "1") {
        if (livro == "it") {
            livro = 'It_-_A_Coisa';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "duque") {
            livro = 'O_Duque_e_Eu';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "slenderman") {
            livro = 'Slender_Man';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "verity") {
            livro = 'Verity';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "exorcista") {
            livro = 'O_Exorcista';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "birdbox") {
            livro = 'Bird_Box';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "osprimos") {
            livro = 'Os_Primos';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "heartstopper") {
            livro = 'Heartstopper';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "selecao") {
            livro = 'A_seleção';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "duna") {
            livro = 'Duna';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "robo") {
            livro = 'Eu,_Robo';
            Cookies.set('livromesa4', livro);
        }
        if (livro == "jogosvorazes") {
            livro = 'Jogos_Vorazes';
            Cookies.set('livromesa4', livro);
        }
    } 
    else {
        
        document.getElementById('alerta').style.display = "block";
        
    }
    carregarmesa4();

}
function limparcapa4() {
    let livro = "";
    livro = document.getElementById('livros4').value;
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
function alugarlivro5(){
    let livro = "";
    livro = document.getElementById('livros5').value;
    console.log(livro);

    if (livro != "1") {
        if (livro == "it") {
            livro = 'It_-_A_Coisa';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "duque") {
            livro = 'O_Duque_e_Eu';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "slenderman") {
            livro = 'Slender_Man';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "verity") {
            livro = 'Verity';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "exorcista") {
            livro = 'O_Exorcista';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "birdbox") {
            livro = 'Bird_Box';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "osprimos") {
            livro = 'Os_Primos';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "heartstopper") {
            livro = 'Heartstopper';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "selecao") {
            livro = 'A_seleção';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "duna") {
            livro = 'Duna';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "robo") {
            livro = 'Eu,_Robo';
            Cookies.set('livromesa5', livro);
        }
        if (livro == "jogosvorazes") {
            livro = 'Jogos_Vorazes';
            Cookies.set('livromesa5', livro);
        }
    } 
    else {
        
        document.getElementById('alerta').style.display = "block";
        
    }
    carregarmesa5();

}
function limparcapa5() {
    let livro = "";
    livro = document.getElementById('livros5').value;
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
    carregarmesa6();

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
//CARREGAMENTO VALORES E LIVROS
function carregarmesa1() {
    if(typeof Cookies.get('valor_total_mesa1') != 'undefined'){
        document.getElementById('valorcmd1').innerHTML = Cookies.get('valor_total_mesa1');
        document.getElementById('valortotalmodal1').innerHTML = Cookies.get('valor_total_mesa1');
    }else{
        document.getElementById('valorcmd1').innerHTML = 0;
        document.getElementById('valortotalmodal1').innerHTML = 0;
    }
    if(typeof Cookies.get('livromesa1') != 'undefined'){
        document.getElementById('livrocmd1').innerHTML = Cookies.get('livromesa1');
        document.getElementById('livromodal1').innerHTML = Cookies.get('livromesa1');
    }else{
        document.getElementById('livrocmd1').innerHTML = "";
        document.getElementById('livromodal1').innerHTML = "";
    }
    
}
function carregarmesa2() {
    if(typeof Cookies.get('valor_total_mesa2') != 'undefined'){
        document.getElementById('valorcmd2').innerHTML = Cookies.get('valor_total_mesa2');
        document.getElementById('valortotalmodal2').innerHTML = Cookies.get('valor_total_mesa2');
    }else{
        document.getElementById('valorcmd2').innerHTML = 0;
        document.getElementById('valortotalmodal2').innerHTML = 0;
    }
    if(typeof Cookies.get('livromesa2') != 'undefined'){
        document.getElementById('livrocmd2').innerHTML = Cookies.get('livromesa2');
        document.getElementById('livromodal2').innerHTML = Cookies.get('livromesa2');
    }else{
        document.getElementById('livrocmd2').innerHTML = "";
        document.getElementById('livromodal2').innerHTML = "";
    }
}
function carregarmesa3() {
    if(typeof Cookies.get('valor_total_mesa3') != 'undefined'){
        document.getElementById('valorcmd3').innerHTML = Cookies.get('valor_total_mesa3');
        document.getElementById('valortotalmodal3').innerHTML = Cookies.get('valor_total_mesa3');
    }else{
        document.getElementById('valorcmd3').innerHTML = 0;
        document.getElementById('valortotalmodal3').innerHTML = 0;
    }
    if(typeof Cookies.get('livromesa3') != 'undefined'){
        document.getElementById('livrocmd3').innerHTML = Cookies.get('livromesa3');
        document.getElementById('livromodal3').innerHTML = Cookies.get('livromesa3');
    }else{
        document.getElementById('livrocmd3').innerHTML = "";
        document.getElementById('livromodal3').innerHTML = "";
    }
}
function carregarmesa4() {
    if(typeof Cookies.get('valor_total_mesa4') != 'undefined'){
        document.getElementById('valorcmd4').innerHTML = Cookies.get('valor_total_mesa4');
        document.getElementById('valortotalmodal4').innerHTML = Cookies.get('valor_total_mesa4');
    }else{
        document.getElementById('valorcmd4').innerHTML = 0;
        document.getElementById('valortotalmodal4').innerHTML = 0;
    }
    if(typeof Cookies.get('livromesa4') != 'undefined'){
        document.getElementById('livrocmd4').innerHTML = Cookies.get('livromesa4');
        document.getElementById('livromodal4').innerHTML = Cookies.get('livromesa4');
    }else{
        document.getElementById('livrocmd4').innerHTML = "";
        document.getElementById('livromodal4').innerHTML = "";
    }
}
function carregarmesa5() {
    if(typeof Cookies.get('valor_total_mesa5') != 'undefined'){
        document.getElementById('valorcmd5').innerHTML = Cookies.get('valor_total_mesa5');
        document.getElementById('valortotalmodal5').innerHTML = Cookies.get('valor_total_mesa5');
    }else{
        document.getElementById('valorcmd5').innerHTML = 0;
        document.getElementById('valortotalmodal5').innerHTML = 0;
    }
    if(typeof Cookies.get('livromesa5') != 'undefined'){
        document.getElementById('livrocmd5').innerHTML = Cookies.get('livromesa5');
        document.getElementById('livromodal5').innerHTML = Cookies.get('livromesa6');
    }else{
        document.getElementById('livrocmd5').innerHTML = "";
        document.getElementById('livromodal5').innerHTML = "";
    }
}
function carregarmesa6() {
    if(typeof Cookies.get('valor_total_mesa6') != 'undefined'){
        document.getElementById('valorcmd6').innerHTML = Cookies.get('valor_total_mesa6');
        document.getElementById('valortotalmodal6').innerHTML = Cookies.get('valor_total_mesa6');
    }else{
        document.getElementById('valorcmd6').innerHTML = 0;
        document.getElementById('valortotalmodal6').innerHTML = 0;
    }
    if(typeof Cookies.get('livromesa6') != 'undefined'){
        document.getElementById('livrocmd6').innerHTML = Cookies.get('livromesa6');
        document.getElementById('livromodal6').innerHTML = Cookies.get('livromesa6');
    }else{
        document.getElementById('livrocmd6').innerHTML = "";
        document.getElementById('livromodal6').innerHTML = "";
    }
}


//LOGS VALORES FIXO UNITÁRIO
console.log(v_bebidas);
console.log(v_cafe);
console.log(v_salgados);
console.log(v_bolos);