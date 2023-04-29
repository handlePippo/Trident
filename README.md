# Trident

### Descrizione del progetto
Questo progetto è un'applicazione web sviluppata con React che permette all'utente di accedere ad alcune funzionalità protette tramite un sistema di autenticazione basato sul localStorage. In particolare, l'applicazione offre un convertitore di valuta da Euro a Dollaro, un visualizzatore delle previsioni meteorologiche, una lista di task personali, e una homepage che elenca tutte le funzionalità disponibili. L'utente può registrarsi per creare un account, e una volta autenticato può accedere alle funzionalità protette.

### Funzionalità disponibili
L'applicazione, nello specifico, offre le seguenti funzionalità:

# Convertitore EUR\USD
Per accedere al convertitore di valuta, cliccare sul pulsante "Convertitore" presente nella homepage.
In questa pagina è possibile inserire un importo in Euro (EUR) e convertirlo in Dollari (USD) utilizzando il tasso di cambio aggiornato.
È possibile incrementare l'importo in Euro di 10 o 100 cliccando sui rispettivi pulsanti "+10" e "+100". Inoltre, è presente un pulsante "Reset" per ripulire i campi inseriti.

# Visualizzazione del meteo
Per accedere alla visualizzazione del meteo, cliccare sul pulsante "Meteo" presente nella homepage.
In questa pagina è possibile visualizzare, per esempio, le informazioni meteo relative alla città di Zurigo, Svizzera, tramite l'API di OpenWeatherMap.

# Gestione delle attività
Per accedere alla gestione delle attività, cliccare sul pulsante "TaskList" presente nella homepage.
In questa pagina è possibile visualizzare la lista delle attività e aggiungerne di nuove. È possibile anche eliminare le attività già presenti nella lista.

# Registrazione Utente
Questa applicazione permette di registrare un nuovo utente fornendo alcuni dati personali come nome, cognome, email, data di nascita e password.

# Login Utente
Questa applicazione permette di effettuare il login di un Utente inserendo email e password.

# Logout Utente
Per effettuare il logout dall'applicazione, cliccare sul pulsante "Logout" presente nella homepage.

### Istruzioni per l'uso
Per utilizzare l'applicazione, segui questi passi:

1. Clona il repository del progetto in locale.

<!-- git clone https://github.com/filippoPalliani/Trident-Suisse-Test.git -->

2. Installa le dipendenze del progetto con il comando npm install.
3. Avvia l'applicazione con il comando npm start.
4. Apri il browser e naviga all'indirizzo http://localhost:3000.
5. Se non hai ancora un account, fai clic sulla pagina di registrazione per crearne uno.
6. Una volta registrato, accedi con le tue credenziali nella pagina di login.
7. Se l'autenticazione è andata a buon fine, sarai reindirizzato alla homepage dell'applicazione, dove potrai accedere alle funzionalità protette.


### Struttura del progetto
Il progetto è composto dai seguenti file e cartelle principali:

1. src/: la cartella principale del progetto che contiene tutti i file sorgenti.
2. src/App.js: il file principale dell'applicazione che gestisce la navigazione tra le varie pagine e fornisce un contesto di autenticazione globale.
3. src/Components/: la cartella contenente i componenti con cui l'utente può interagire nell'applicazione.
4. src/Components/Reducer: la cartella contente il Reducer per la gestione globale di alcuni stati.
5. src/Library/: la cartella contenente i componenti riutilizzabili utilizzati nelle varie pagine dell'applicazione.
6. src/Utils/: la cartella contenente i componenti riutilizzabili utilizzati per varie utilità nelle varie pagine dell'applicazione.
7. src/Routes/: la cartella contenente i componenti delle varie pagine dell'applicazione.


### Dipendenze
Il progetto utilizza le seguenti dipendenze principali:

1. react-router-dom: per la gestione della navigazione tra le varie pagine dell'applicazione.
2. react: la libreria di base per la costruzione dell'interfaccia utente.
3. axios: per le chiamate alle API per il convertitore di valuta e il visualizzatore delle previsioni meteorologiche.


<!-- PAGINA DI REGISTRAZIONE -->
# Documentazione per l'utilizzo dell'applicazione di registrazione


### Introduzione
Questa applicazione permette di registrare un nuovo utente fornendo alcuni dati personali come nome, cognome, email, data di nascita e password.

### Utilizzo
L'applicazione si compone di un form per la registrazione di un nuovo utente. Il form richiede i seguenti dati:

1. Nome
2. Cognome
3. Email
4. Data di nascita
5. Password

Per registrare un nuovo utente è necessario compilare tutti i campi richiesti. In caso di errore durante la compilazione di un campo, verrà visualizzato un messaggio di errore.

Una volta compilati tutti i campi, è possibile cliccare sul pulsante "Registrati" per completare la registrazione. In caso di successo, verrà visualizzato un messaggio di conferma e l'utente verrà reindirizzato alla pagina di login.


<!-- PAGINA DI LOGIN -->
# Documentazione per l'utilizzo dell'applicazione di login


### Introduzione
Questa applicazione permette di effettuare il login di un Utente inserendo email e password.

### Utilizzo

Inserisci l'email e la password che hai utilizzato per la registrazione e clicca sul pulsante "Accedi" per accedere all'applicazione.
Se i dati inseriti sono corretti, verrai reindirizzato alla pagina principale dell'applicazione. Altrimenti, apparirà un messaggio di errore.


<!-- HOMEPAGE -->
# Documentazione per l'interazione con l'Homepage


### Introduzione
 L'applicazione richiede l'autenticazione dell'utente tramite email e password per accedere alla homepage.

### Struttura e Utilizzo
# Autenticazione
Per poter accedere alla homepage, è necessario autenticarsi. All'avvio dell'applicazione, verrà mostrata la pagina di login. Inserire la propria email e password e premere il pulsante "Accedi". In caso di credenziali errate, verrà mostrato un messaggio di errore. In alternativa, è possibile premere il pulsante "Registrati" per accedere alla pagina di registrazione.

# Convertitore
Dalla homepage, è possibile accedere alla pagina del convertitore di valute cliccando sul pulsante "Convertitore". Nella pagina del convertitore, è possibile convertire l'EURO a Dollaro statunitense. E' quindi possibile inserire l'importo da convertire e premere il pulsante "Converti". Il risultato della conversione verrà mostrato immediatamente sotto il pulsante.

# Meteo
Dalla homepage, è possibile accedere alla pagina per la visualizzazione del meteo cliccando sul pulsante "Meteo". Nella pagina del meteo, verrà mostrata la previsione per la località di default. È possibile modificare la località utilizzando l'apposito campo di ricerca e premendo il pulsante "Cerca". Verranno mostrate le informazioni meteorologiche relative alla località selezionata.

# Tasklist
Dalla homepage, è possibile accedere alla pagina della tasklist cliccando sul pulsante "TaskList". Nella pagina della tasklist, è possibile inserire nuovi task nell'apposita area di input e premere il pulsante "Aggiungi" per aggiungerli alla lista. I task inseriti possono essere eliminati premendo sul pulsante [X] corrispondente.

# Logout
Per effettuare il logout dall'applicazione, è sufficiente premere il pulsante "Logout" nella homepage.


<!-- CONVERTITORE -->
# Documentazione per l'utilizzo del Convertitore di valuta EUR-USD

### Introduzuzione
L'applicazione utilizza l'API di API Ninjas per ottenere il tasso di cambio EUR/USD. Il tasso di cambio viene aggiornato ogni volta che si avvia l'applicazione.


### Utilizzo
- Inserire l'importo in Euro da convertire nell'apposito campo "Inserisci una cifra". Se il valore inserito non è valido, verrà visualizzato un messaggio di errore.

- Premere il pulsante "+10" o "+100" per aggiungere rispettivamente 10 o 100 euro all'importo inserito.

- Premere il pulsante "Reset" per azzerare il campo di input e il messaggio di errore.


<!-- METEO APP -->
# Documentazione per l'utilizzo del controllore del meteo

### Introduzione
Questa applicazione consente di verificare le condizioni meteorologiche di una città specifica. L'applicazione utilizza l'API di OpenWeatherMap per ottenere i dati meteo.

### Utilizzo
- Nella pagina principale dell'applicazione, inserire il nome della città desiderata e fare clic sul pulsante "Check Meteo".

- Le condizioni meteorologiche per la città inserita verranno visualizzate nella pagina.


<!-- TASKLIST -->
# Documentazione per l'utilizzo della Task List

### Introduzione
Questa applicazione permette di aggiungere, rimuovere e visualizzare una lista di task con le relative date di scadenza.

### Funzionalità
La Task List consente di:

- Aggiungere nuovi task alla lista
- Visualizzare la lista dei task con le relative date di scadenza
- Rimuovere un task dalla lista
- Salvare i task inseriti in locale (localStorage)


### Utilizzo
# Visualizzazione dei tasks
I tasks inseriti vengono mostrati in una lista, ordinati per data di scadenza crescente. Ogni elemento della lista è composto dalla descrizione del compito e dalla data di scadenza, con la possibilità di eliminare il compito cliccando sul bottone [X] a fianco.

# Aggiunta di un nuovo task
Per aggiungere un nuovo task, inserire la descrizione del compito e selezionare una data di scadenza. Se si tenta di inserire un compito senza descrizione o senza data di scadenza, verrà mostrato un messaggio di errore. Inoltre, se si inserisce un compito con descrizione e data di scadenza già presenti nella lista, verrà mostrato un messaggio di errore specifico.
