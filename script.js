// Quiz sobre manutenção sustentável de máquinas agrícolas

const perguntas = [
    {
        pergunta: "Por que a manutenção regular de uma máquina agrícola é importante?",
        opcoes: [
            "Para aumentar os problemas mecânicos",
            "Para evitar problemas e melhorar o funcionamento",
            "Para gastar mais combustível",
            "Para diminuir a vida útil da máquina"
        ],
        correta: 1
    },

    {
        pergunta: "O que deve ser feito com o óleo usado de uma máquina?",
        opcoes: [
            "Jogar no solo",
            "Jogar em rios",
            "Descartar em local adequado",
            "Misturar com lixo comum"
        ],
        correta: 2
    },

    {
        pergunta: "Uma máquina bem regulada pode ajudar a:",
        opcoes: [
            "Aumentar desperdícios",
            "Reduzir sua eficiência",
            "Economizar recursos e trabalhar melhor",
            "Aumentar os vazamentos"
        ],
        correta: 2
    },

    {
        pergunta: "Qual destas atitudes contribui para uma agricultura mais sustentável?",
        opcoes: [
            "Ignorar pequenos vazamentos",
            "Fazer manutenção preventiva",
            "Descartar peças na natureza",
            "Usar máquinas sem revisão"
        ],
        correta: 1
    },

    {
        pergunta: "Como a profissão de mecânico pode contribuir para o meio ambiente?",
        opcoes: [
            "Mantendo máquinas em boas condições",
            "Aumentando o desperdício de combustível",
            "Descartando óleo no solo",
            "Evitando qualquer tipo de manutenção"
        ],
        correta: 0
    }
];

let perguntaAtual = 0;
let pontos = 0;
let respondeu = false;


// Inicia ou reinicia o quiz
function iniciarQuiz() {

    perguntaAtual = 0;
    pontos = 0;

    document.getElementById("resultado").textContent = "";

    mostrarPergunta();
}


// Mostra a pergunta atual
function mostrarPergunta() {

    respondeu = false;

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("texto-pergunta").textContent =
        `${perguntaAtual + 1}. ${pergunta.pergunta}`;

    const opcoes = document.getElementById("opcoes");

    opcoes.innerHTML = "";

    pergunta.opcoes.forEach((opcao, indice) => {

        const botao = document.createElement("button");

        botao.textContent = opcao;
        botao.classList.add("opcao");

        botao.onclick = function () {
            verificarResposta(indice, botao);
        };

        opcoes.appendChild(botao);
    });

    document.getElementById("botaoQuiz").textContent = "Responder";
}


// Verifica se a resposta está correta
function verificarResposta(indice, botao) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta = perguntas[perguntaAtual];
    const botoes = document.querySelectorAll(".opcao");

    if (indice === pergunta.correta) {

        pontos++;

        botao.classList.add("correta");

        document.getElementById("resultado").textContent =
            "✅ Resposta correta!";

    } else {

        botao.classList.add("errada");

        botoes[pergunta.correta].classList.add("correta");

        document.getElementById("resultado").textContent =
            "❌ Resposta incorreta.";
    }

    if (perguntaAtual === perguntas.length - 1) {

        document.getElementById("botaoQuiz").textContent =
            "Ver resultado";

        document.getElementById("botaoQuiz").onclick = mostrarResultado;

    } else {

        document.getElementById("botaoQuiz").textContent =
            "Próxima pergunta";

        document.getElementById("botaoQuiz").onclick = proximaPergunta;
    }
}


// Vai para a próxima pergunta
function proximaPergunta() {

    perguntaAtual++;

    mostrarPergunta();

    document.getElementById("botaoQuiz").onclick = function () {
        if (!respondeu) {
            return;
        }

        verificarResposta;
    };
}


// Mostra a pontuação final
function mostrarResultado() {

    document.getElementById("texto-pergunta").textContent =
        "Quiz finalizado! 🌱";

    document.getElementById("opcoes").innerHTML = "";

    let mensagem;

    if (pontos === perguntas.length) {
        mensagem = "Excelente! Você mostrou que entende muito de sustentabilidade no campo. 🌎";
    } else if (pontos >= 3) {
        mensagem = "Muito bom! Você conhece várias práticas sustentáveis. 🚜";
    } else {
        mensagem = "Continue aprendendo! Conhecimento também ajuda a construir um futuro sustentável. 🌱";
    }

    document.getElementById("resultado").textContent =
        `Você acertou ${pontos} de ${perguntas.length} perguntas. ${mensagem}`;

    document.getElementById("botaoQuiz").textContent =
        "Fazer o quiz novamente";

    document.getElementById("botaoQuiz").onclick = iniciarQuiz;
}
