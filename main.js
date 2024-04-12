import { emberekLISTA } from "./adat.js";
import { rendez, szures, torol } from "./adatKezelo.js";
import { htmlOsszeallit, megjelenit } from "./listaMegjelenit.js";

/* FELADATSPECIFIKÁCIÓ:
Jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl. név szerint, ha rákattintunk a táblázat fejlécére, akkor rendezze a táblázat sorait.
Tudjunk szűrni név alapján, tudjunk hozzáadni a táblázathoz, tudjuk törölni a táblázat egy sorát.
*/

/* FÜGGVÉNYEK ÉS ELJÁRÁSOK:
1. htmlOsszeallit(lista) -> txt | Összeállítja a táblázat html szerkezetét egy szöveges változóba.
2. megjelenit(txt) -> Megjeleníti egy adott html elemben a paraméterében kapott szöveget.
3. rendez(lista) -> rendezettLista | A paraméterében kapott listát név szerint rendezi; a függvény akkor fut le, ha a táblázat név fejlécére kattintunk.
4. adatHozzaadas(lista) -> kibovitettLista | Összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot, majd azt beleteszi a listába; a függvény akkor fut le, ha a "Hozzáad" gombra kattintunk.
5. torol(lista, id) -> tLista | Kitörli a listából az adott id-jű elemet. Akkor fog lefutni, ha a sor melletti "Töröl" gombra kattintunk.
6. szures(lista, keresoSzoveg) -> szurtLista | A keresőmezőbe beírt szöveget keresi a lista objektuimainak "név" mezőjében. Mindez akkor fut le, ha beírunk valamit a keresőmezőbe.
*/

let irany = 1 // 1 növekvő rendezés, -1 csökkenő rendezés
init(emberekLISTA);
szuresEsemeny()

function init(lista) {
    megjelenit(htmlOsszeallit(lista));
    rendezEsemeny();
    torolEsemeny();
}
/* a függvény akkor fut le, ha a táblázat név fejlécére kattintunk. */
function rendezEsemeny() {
    const nevELEM = $(".adatok table th").eq(0);
    nevELEM.on("click", function() {
        const rLISTA = rendez(emberekLISTA, irany);
        console.log(rLISTA);
        init(rLISTA)
        irany *= (-1)
    });
}

function szuresEsemeny() {
    /* akkor kell lefutnia, ha megváltozik a keresőmező tartalma */
    const keresoELEM = $("#szuro")
    keresoELEM.on("keyup", function(){
        let keresoSzoveg = keresoELEM.val()
        const szLISTA = szures(emberekLISTA, keresoSzoveg)
        console.log(szLISTA);
        init(szLISTA)
    });
}

function torolEsemeny() {}
/* Akkor fog lefutni, ha a sor melletti "Töröl" gombra kattintunk. */
const torolGOMB = $(".torol");
torolGOMB.on("click", function (event) {
    /* event.target az az elem, amelyik kiváltotta az eseményt */
    let id = event.target.id;
    console.log(id);
    const LISTA = torol(emberekLISTA, id);
    init(LISTA);
});