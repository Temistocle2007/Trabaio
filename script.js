functionchoose(choice) {
    const storyDiv = document.getElementById('story');
    const choicesDiv = document.getElementById('choices');

    if (choice === 'predio') {
        storyDiv.innerHTML = `
            <p>Você decide investigar o prédio. Ao entrar, percebe que está vazio, mas ouve um som vindo do porão. 
            O que você faz?</p>`;
        choicesDiv.innerHTML = `
            <button class="choice-btn" onclick="choose('porao')">Descer até o porão</button>
            <button class="choice-btn" onclick="choose('saida')">Sair rapidamente do prédio</button>
        `;
    } elseif (choice === 'suspeito') {
        storyDiv.innerHTML = `
            <p>Você decide seguir o suspeito. Ele entra em um beco escuro e percebe que você o está seguindo. 
            Ele está armado. Você o confronta ou se esconde?</p>`;
        choicesDiv.innerHTML = `
            <button class="choice-btn" onclick="choose('confronto')">Confrontar o suspeito</button>
            <button class="choice-btn" onclick="choose('esconder')">Se esconder e observar</button>
        `;
    } elseif (choice === 'porao') {
        storyDiv.innerHTML = `
            <p>Você desce até o porão e encontra uma sala de controle cheia de computadores. Parece que alguém estava 
            monitorando a cidade. Você descobre uma pista crucial para sua missão!</p>`;
        choicesDiv.innerHTML = `<button class="choice-btn" onclick="restart()">Recomeçar</button>`;
    } elseif (choice === 'saida') {
        storyDiv.innerHTML = `
            <p>Você decide sair do prédio rapidamente. Lá fora, encontra sua equipe, mas a missão falha porque perdeu 
            uma pista importante. Tente novamente!</p>`;
        choicesDiv.innerHTML = `<button class="choice-btn" onclick="restart()">Recomeçar</button>`;
    } elseif (choice === 'confronto') {
        storyDiv.innerHTML = `
            <p>Você confronta o suspeito e, após uma breve luta, consegue dominá-lo. Ele revela informações valiosas 
            sobre os planos inimigos. Missão cumprida!</p>`;
        choicesDiv.innerHTML = `<button class="choice-btn" onclick="restart()">Recomeçar</button>`;
    } elseif (choice === 'esconder') {
        storyDiv.innerHTML = `
            <p>Você se esconde e observa o suspeito. Ele encontra outros agentes inimigos e você descobre seus planos. 
            Sua equipe é informada e a missão é um sucesso!</p>`;
        choicesDiv.innerHTML = `<button class="choice-btn" onclick="restart()">Recomeçar</button>`;
    }
}

functionrestart() {
    document.getElementById('story').innerHTML = `
        <p>Você é um agente da VALORANT em uma missão crucial. Ao entrar em uma cidade dominada por inimigos, 
        você tem duas opções: investigar um prédio suspeito ou seguir um suspeito que avistou nas ruas.</p>`;
    document.getElementById('choices').innerHTML = `
        <button class="choice-btn" onclick="choose('predio')">Investigar o prédio</button>
        <button class="choice-btn" onclick="choose('suspeito')">Seguir o suspeito</button>
    `;
}
