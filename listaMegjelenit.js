export function htmlOsszeallit(lista) {
    /* táblázatot állítok össze */
    let txt = "<table class= 'table table-striped'>"
    txt += "<thead><tr><th>Név</th><th>Kor</th><th>Nem</th></tr></thead>"
    txt+="<tbody>"
    lista.forEach(elem => {
        /* a tábla egy sora */
        txt+=`<tr><td>${elem.nev}</td><td>${elem.kor}</td><td>${elem.nem}</td></tr>`
    });
    txt += "<tbody></table>"
    return txt
}

export function megjelenit(txt) {
    const divELEM = $(".adatok")
    divELEM.html(txt)
}