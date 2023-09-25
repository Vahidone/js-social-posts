# js-social-posts

## consegna
Descrizione**
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
**Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image= <id> )*
**Milestone 2** - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
**Milestone 3** - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.


### pseudocodice

1. Riportare i dati forniti in javascript
2. cancellare le card create precedentemente in html
3. creare una nuova card in js: Utilizzare template string per costruire l'HTML della card del post, includendo il nome e l'immagine dell'autore, la data, il contenuto, l'immagine/media e il contatore dei "Mi Piace".
4. Restituire l'elemento "div" appena creato al container.
5. creare il gestore di Eventi per i Pulsanti "Mi Piace": 

### Bonus 1: Formattare le date in formato italiano (gg/mm/aaaa)
### pseudocodice
1. utilizzare il metodo toLocaleDateString per formattare la data fornita in una stringa leggibile in italiano.


### Bonus 2: Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).


### Bonus 3: Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

### pseudocodice
1. Decrementare il contatore dei "Mi Piace" di 1.
2. Rimuovere la classe CSS che indica che il pulsante è stato già premuto.
3. Impostare la variabile "isLiked" a "false" per indicare che l'utente non ha più messo "Mi Piace" al post.





