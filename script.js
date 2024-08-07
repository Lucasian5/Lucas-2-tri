const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você assiste a uma partida de futebol e percebe que o VAR (sistema de árbitro assistente de vídeo) está sendo utilizado para revisar uma decisão polêmica. Qual o seu pensamento inicial?",
        alternativas: [
            {
                texto: "Isso é uma ótima inovação!",
                afirmacao: "Você acredita que o VAR melhora a precisão das decisões e ajuda a justiça no jogo."
            },
            {
                texto: "Isso torna o jogo menos fluido.",
                afirmacao: "Você acha que a pausa para revisão tira a emoção e o ritmo do jogo."
            }
        ]
    },
    {
        enunciado: "Durante um jogo, um time está usando tecnologia avançada para análise tática e preparação física. O que você acha da integração da tecnologia nos treinos e na estratégia de jogo?",
        alternativas: [
            {
                texto: "É uma excelente maneira de melhorar o desempenho dos jogadores.",
                afirmacao: "Você vê a tecnologia como um grande aliado para otimizar o treinamento e a estratégia."
            },
            {
                texto: "Pode criar uma dependência excessiva da tecnologia e desvalorizar o treinamento tradicional.",
                afirmacao: "Você acha importante equilibrar o uso da tecnologia com métodos tradicionais de treino."
            }
        ]
    },
    {
        enunciado: "Um jogador famoso utiliza suas redes sociais para promover uma nova linha de produtos relacionados ao futebol. Como você vê essa situação?",
        alternativas: [
            {
                texto: "É uma forma moderna e eficiente de conectar fãs e gerar receitas.",
                afirmacao: "Você acha que o uso das redes sociais é uma boa estratégia para engajar os torcedores e aumentar a renda dos atletas."
            },
            {
                texto: "Isso pode desviar a atenção do desempenho esportivo e criar uma imagem negativa.",
                afirmacao: "Você se preocupa que a promoção excessiva possa prejudicar a imagem profissional do atleta."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma apresentação sobre o impacto das tecnologias no futebol moderno. Como você a realiza?",
        alternativas: [
            {
                texto: "Utiliza gráficos e dados estatísticos para demonstrar como a tecnologia tem mudado o jogo.",
                afirmacao: "Você opta por uma abordagem analítica, focando em dados e evidências para explicar as mudanças."
            },
            {
                texto: "Cria uma apresentação visualmente rica utilizando softwares de design e geradores de imagens.",
                afirmacao: "Você prefere uma abordagem mais visual para atrair a atenção e explicar o impacto da tecnologia de forma mais envolvente."
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em grupo para uma pesquisa sobre a influência da tecnologia nas transmissões de futebol. Um dos membros do grupo usa uma IA para gerar todo o conteúdo. Como você procede?",
        alternativas: [
            {
                texto: "Aceita o conteúdo gerado pela IA sem questionar, pois acredita que é preciso focar na eficiência.",
                afirmacao: "Você percebe que isso pode comprometer a originalidade e a qualidade do trabalho, sentindo-se dependente da IA para tudo."
            },
            {
                texto: "Revisa o conteúdo gerado pela IA e adiciona suas próprias análises e críticas para garantir a autenticidade do trabalho.",
                afirmacao: "Você entende que a IA deve ser uma ferramenta auxiliar e não substituir a contribuição pessoal e a análise crítica."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpa o conteúdo anterior
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.setAttribute('aria-label', alternativa.texto); // Acessibilidade
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O Futuro do Futebol...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = ""; // Limpa o conteúdo das alternativas
}

if (caixaPrincipal) {
    mostraPergunta(); // Só inicia se o elemento principal estiver presente
}

