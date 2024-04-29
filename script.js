document.querySelectorAll('.comprar').forEach(item => {
    item.addEventListener('click', function() {
        // Redireciona para outra página
        window.location.href = "PagCompra&Info.html";
    });
});

// -------------------------------------------------------------

document.querySelectorAll('.efetuar').forEach(item => {
    item.addEventListener('click', function() {
        // Exibe um pop-up simples
        window.alert("Adicionado ao seu carrinho com sucesso");
    });
});

function clicar() {
    var numero = document.getElementById('Cupom').value;
    var cupom = "FIAP2024";
    
    if (numero === cupom) {
        window.alert("Você recebeu 10% de desconto na compra dos vinhos");
    } else {
        window.alert("Não foi possível usar esse cupom");
    }
}
