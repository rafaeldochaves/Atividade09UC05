let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 8000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

$(document).ready(function () {
    // Verifica se o usuário está logado e exibe a imagem e nome
    function updateLoginSection() {
        const user = localStorage.getItem("user");
        if (user) {
            const userName = user;
            const userPhoto = "Img/usuario1.png"; // Imagem fictícia do usuário
            $("#loginSection").html(`
                <div class="user-profile">
                    <img src="${userPhoto}" class="user-photo" alt="Foto do usuário">
                    <div class="user-name">
                        <span class="greeting">Bem-vindo</span>
                        <span class="username">${userName}</span>
                        <span id="logoutButton">Logoff</span> <!-- Botão de logoff -->
                    </div>
                </div>
            `);

            // Mostrar o botão de logoff quando o mouse passar sobre o nome ou foto
            $("#logoutButton").click(function () {
                // Remover o usuário do localStorage
                localStorage.removeItem("user");
                window.location.href = "index.html"; // Redirecionar para a página inicial
            });
        } else {
            $("#loginSection").html(`
                    <a href="login.html" id="loginButton" class="button"><img src="Img/loginButton.png"></a>
            `);
        }
    }

    // Atualiza o loginSection em ambas as páginas
    updateLoginSection();

    // Funcionalidade de login
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        const username = $("#username").val();
        const password = $("#password").val();

        // Simulação de validação (substitua com validação real)
        if (username === "admin" && password === "1234") {
            localStorage.setItem("user", username);
            window.location.href = "index.html", "celulares.html";
        } else {
            $("#loginMessage").text("Usuário ou senha incorretos.");
        }
    });

    // Funcionalidade do carrinho flutuante
    $(".cart").hover(
        function () {
            $(this).find(".cart-popup").show();
        },
        function () {
            $(this).find(".cart-popup").hide();
        }
    );

    // Clique no carrinho leva à página de carrinho
    $(".cart").click(function () {
        window.location.href = "cart.html";
    });
});


// Função para realizar a busca dos produtos
function searchProducts() {
    var input, filter, cards, cardTitle, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName('card');

    for (i = 0; i < cards.length; i++) {
        cardTitle = cards[i].getElementsByClassName('card-title')[0];
        txtValue = cardTitle.textContent || cardTitle.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}