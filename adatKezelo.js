export function rendez(lista, irany) {
    /* rendez(lista) -> rendezettLista | A paraméterében kapott listát név szerint rendezi */
    lista.sort(function(e1, e2){
        /* név szerint */
    let eredmeny = 1;
    if (e1.nev < e2.nev) {
        eredmeny = -1;
    }
    /* a sort minden lehetséges listaelem párt összehasonlít (név)
       ha a visszatérési értéke pozitív, akkor nem cserél, viszont ha negatív, akkor cserél  */
    return eredmeny * irany;
    });
/* szorgalmi: írj egy olyan függvényt, ami zz ékezetes karaktereket átmenetileg kicseréli (Á --> A), és így rendezd! (replaceAll) */
/* szorgalmi: további mezők szerinti rendezések megvalósítása */
    return lista
}

export function szures(lista, keresoSzoveg) {
/* A keresőmezőbe beírt szöveget keresi a lista objektuimainak "név" mezőjében. Mindez akkor fut le, ha beírunk valamit a keresőmezőbe. */
const szurtLISTA = lista.filter(function(ember){
    return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
})

return szurtLISTA
}

export function torol(lista, id) {
    /* torol(lista, id) -> tLista | Kitörli a listából az adott id-jű elemet. */
    
}