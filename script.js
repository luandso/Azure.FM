// Função para buscar informações no Vagalume API
function buscarInformacoesVagalume() {
    // Substitua 'SUA_CHAVE_DE_API_DO_VAGALUME' pela sua chave de API
    const apiKey = 'SUA_CHAVE_DE_API_DO_VAGALUME';
    // Implemente a lógica de chamada à API e exibição de informações aqui
}

// Função para buscar informações no Spotify API
function buscarInformacoesSpotify() {
    // Substitua 'SUA_CHAVE_DE_API_DO_SPOTIFY' pela sua chave de API
    const apiKey = 'SUA_CHAVE_DE_API_DO_SPOTIFY';
    // Implemente a lógica de chamada à API e exibição de informações aqui
}

// Função para buscar informações no Last.fm API
function buscarInformacoesLastfm() {
    // Substitua 'SUA_CHAVE_DE_API_DO_LASTFM' pela sua chave de API
    const apiKey = 'SUA_CHAVE_DE_API_DO_LASTFM';
    // Implemente a lógica de chamada à API e exibição de informações aqui
}

// Chamando as funções para buscar informações quando a página carrega
window.addEventListener('load', () => {
    buscarInformacoesVagalume();
    buscarInformacoesSpotify();
    buscarInformacoesLastfm();
});
