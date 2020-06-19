
function consultaCep() {
    const cep = document.querySelector('input#pegaCep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`  
    console.log(url)  
    $.ajax({
        url: url,
        type: "GET", 
        success: function(response){            
            console.log(response)
            $('p#logradouro').html(response.logradouro)
            //document.querySelector('p#logradouro').innerHTML = response.logradouro
            document.querySelector('p#bairro').innerHTML = response.bairro
            document.querySelector('p#localidade').innerHTML = response.localidade
            document.querySelector('p#uf').innerHTML = response.uf
        }
    })
}