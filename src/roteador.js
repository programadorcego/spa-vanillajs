import rotas from "./rotas";

const rootDiv = document.querySelector("#root");
const r = rotas.map(rota => {
    const padraoParametros = /:([a-zA-Z_]+)/g
    const temParametros = rota.path.match(padraoParametros);
    const padraoRota = new RegExp(`^${rota.path.replace(/\//g, "\\/").replace(padraoParametros, "(.*?)")}$`);

    return {...rota, temParametros, padraoRota};
});

const obtemRota = uri => {
    return r.find(rota => {
        return uri.match(rota.padraoRota) !== null;
    });
};

const carregarRota = pathname => {
rootDiv.innerHTML = "";

const rota = obtemRota(pathname);

if(rota)
{
    let parametros = [];

    if(rota.temParametros)
    {
        parametros = pathname.match(rota.padraoRota).slice(1, rota.temParametros.length + 1);
    }

    return rootDiv.appendChild(rota.callback(...parametros));
}
};

const navegacao = pathname => {
    window.history.pushState({}, "", window.location.origin + pathname);
    carregarRota(pathname);
};

window.navegacao = navegacao;

window.addEventListener("popstate", () => {
    carregarRota(window.location.pathname);
});

export default navegacao;