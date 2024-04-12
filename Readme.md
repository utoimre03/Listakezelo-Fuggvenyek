# Listakezelő függvények gyakorlás

## Specifikáció

Jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl. név szerint, ha rákattintunk a táblázat fejlécére, akkor rendezze a táblázat sorait.
Tudjunk szűrni név alapján. 
Tudjunk hozzáadni a táblázathoz.
Tudjuk törölni a táblázat egy sorát.

## Metódusok

1. **htmlOsszeallit(lista) -> txt** | Összeállítja a táblázat html szerkezetét egy szöveges változóba.
2. **megjelenit(txt)** -> Megjeleníti egy adott html elemben a paraméterében kapott szöveget.
3. **rendez(lista, irany) -> rendezettLista** | A paraméterében kapott listát név szerint rendezi; a függvény akkor fut le, ha a táblázat név fejlécére kattintunk.
4. **adatHozzaadas(lista) -> kibovitettLista** | Összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot, majd azt beleteszi a listába; a függvény akkor fut le, ha a "Hozzáad" gombra kattintunk.
5. **torol(lista, id) -> tLista** | Kitörli a listából az adott id-jű elemet. Akkor fog lefutni, ha a sor melletti "Töröl" gombra kattintunk.
6. **szures(lista, keresoSzoveg) -> szurtLista** | A keresőmezőbe beírt szöveget keresi a lista objektuimainak "név" mezőjében. Mindez akkor fut le, ha beírunk valamit a keresőmezőbe.