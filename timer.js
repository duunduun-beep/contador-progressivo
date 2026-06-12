// 1. Definimos a data de início da espera (12 de Junho de 2026)
// O formato "T00:00:00" garante que comece exatamente na meia-noite do dia dos namorados
const dataInicio = new Date('2026-06-12T00:00:00').getTime();

// 2. Variável para armazenar o nosso "motor" do tempo (o intervalo)
let motorDoTempo;

// 3. A senha secreta que vai estar no presente
const senhaSecreta = "AMOR123"; // Você pode mudar para a senha que quiser depois

// 4. A função principal que calcula o tempo percorrido
function atualizarContador() {
    // Pega a data e hora exata de "agora"
    const agora = new Date().getTime();

    // Uma verificação de segurança: se ainda não for dia 12, o contador não gira
    if (agora < dataInicio) {
        console.log("Aguardando chegar o dia 12 de Junho...");
        return; 
    }

    // Calcula a diferença entre agora e o dia 12 de junho (em milissegundos)
    const tempoPercorrido = agora - dataInicio;

    // A matemática para converter milissegundos em dias, horas, minutos e segundos
    const dias = Math.floor(tempoPercorrido / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoPercorrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoPercorrido % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoPercorrido % (1000 * 60)) / 1000);

    // Envia esses números calculados para o HTML (para aparecerem na tela)
    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;
}

// 5. Dá o "Start" no contador: pede pro JavaScript rodar a função acima a cada 1000 milissegundos (1 segundo)
motorDoTempo = setInterval(atualizarContador, 1000);

// 6. A função que vai rodar quando ela apertar o botão de "Recebi o presente"
function pararContador() {
    // Pega o que ela digitou na caixinha de texto
    const senhaDigitada = document.getElementById('campoSenha').value;

    // Verifica se bate com a senha secreta
    if (senhaDigitada === senhaSecreta) {
        // Se acertou: desliga o motor do tempo! O cronômetro congela.
        clearInterval(motorDoTempo);
        
        // Aqui a gente pode fazer a mágica acontecer (tocar música, mudar a tela, exibir mensagem)
        alert("Senha correta! O tempo de espera finalmente acabou. ❤️");
        
    } else {
        // Se errou: ela tentou dar uma de espertinha antes da hora
        alert("Senha incorreta! Parece que o presente ainda não está nas suas mãos... 👀");
    }
}
