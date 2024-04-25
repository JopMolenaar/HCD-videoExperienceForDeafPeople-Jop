# HCD

## Intro

Dit vak gaat over het maken van een protoype voor een specifiek persoon. In plaats van inclusive design te maken, geen we in dit vak aan de slag met exclusive design en gaan wij testen met een aangegeven persoon met een beperking. Door een interview en 3 tests probeer ik en zo goed mogenlijk prototype te maken voor de testpersoon. De opdracht voor mij was om iets te maken voor Marie van Driessche. Marie is doof en is docent bij CMD en werkt als ontwerper bij Unc Inc. Marie wil graag dat ze geluid in films net zo kan ervaren als mensen die wel geluid horen en ook graag podcasts wil luisteren en die net zo aantrekkelijk en net zo veel details horen als mensen die wel kunnen horen. 

## 💬 Interview 1 vragen met bevindingen (Week 1)

Wij mochten Marie gaan interviewen

- Bent u doof geboren of doof geworden?
- Waar komt uw passie voor podcasts of films vandaan? 
- Wat voor podcasts en films kijkt u?
- Wat gebruikt u nu wanneer u een podcast of film kijkt / Hoe en waar kijkt u podcasts?
- Wat vindt u daar fijn aan werken?
- Wat vind je van de huidige closed caption en wat mis je?
- Wat is uw favoriete film, waarom en hoe kan deze nog beter worden?
- Wat mist u het meest in de ervaring als u naar een film of podcast kijkt?
- Zouden trillingen kunnen helpen met het begrijpen van de muziek?
Begrijpt u de huidige muziek/effecten die worden omschreven in de ondertiteling zoals [spannende muziek] of [Er wordt geklopt]?
- Zou u de extra informatie uit de video het liefst in tekst zien of zouden animaties of afbeeldingen als overlay bij de video ook helpen?

### 💡 Bevindingen

Marie is doof geboren, ze heeft dus een tolk nodig om met mensen die geen gebaren taal kunnen te communiceren. 

Marie vindt podcasts saai. Ze heeft er niet veel ervaring mee want het is niet toegankelijk. Dit komt omdat ze niet kan horen, en daardoor moet zij er echt de tijd voor nemen om te kijken naar mensen die met elkaar praten terwijl ze op een bank zitten. Zonder geluid een podcast kijken is erg saai want het beeld is gewoon saai. Soms als ze het echt heel interressant vindt kan ze het transscript lezen van de podcast als die er is. Maar dat is vaak een hele grote lap tekst zonder intonatie, onoverzichtelijk, en een goed geschreven artikel is veel fijner om te lezen. 

Films vindt ze leuker omdat beeld daar een grotere rol in speelt. Maar ook bij films is de ondertiteling platte tekst en daar mist ze ook veel informatie. Ze noemde wat voorbeelden zoals hoe mensen praten en waar de geluiden vandaan komen. Ze gaf ook wat voorbeelden van wat ze had gezien wat ze fijn vond en noemde "The dodo" op youtube als voorbeeld. Hier worden bepaaalde geluiden als bepaalde streepjes gevisualiseerd om aan te geven wat voor emotie je hoort, en ook waar je het hoort.  
Zelf beeld ze heel veel in over wat ze niet mee krijgt en heeft dit dus ook veel getraind. 

Teon we vroegen of trillingen konden helpen om het geluid beter te begrijpen zei ze dat dat wel zou kunnen helpen om de ervaring te verbeteren, zeker in de bioscoop. Maar trillingen zijn heel algemeen en er zijn veel soorten geluiden en trillingen dus dat moet wel goed worden gemaakt. Verder wil ze ook wel een keer naar IMAX of 4D in de bios om te ervaren of dat wat is.

Animaties zouden kunnen helpen om bijvoorbeeld te laten merken waar geluid vandaan komt. Dit geeft meer duidelijkheid en informatie over naar wat je kijkt. Ook zou dit kunnen helpen om te laten zien wie praat en hoe die praat. 
Met verschillende font's en kleuren zouden we ook kunnen spelen om verschillende personen en intonatie aan te geven maar het moet niet te druk worden en wel consistent blijven. 

Muziek kan ze niet horen en krijgt ze helaas dus ook niet mee, dit geeft vaak wel de spanning weer in de film. Ook weet ze hoe muziek impact kan hebben op mensen hun emoties doordat ze dat heeft gezien op een begrafenis. Dit gevoel wil zij ook ervaren of in ieder geval dichter bij in de buurt komen. Over de huidige closed captions is ze opzich wel enthausiast, maar ze krijgt gewoon niet alle info en het gevoel mee van de platte tekst, dus dat kan zeker beter. 

Verder heeft ze wat films opgenoemd die ze vaak kijkt, waar ze voorbeelden uit noemde, en waar wij ook wat van konden kijken om te vergelijken.

#### Begin onderzoek en begin van prototype

Ik ben begonnen om alles op te schrijven van het interview en wat scenes van wat films te kijken. Ze had de `The bake off`, `3 body problem`, `The bear`, `The menu` en `The chestnutmen` genoemd als series die ze al had gezien. Verder heeft ze een hele brede interesse en kijkt ze ook naar de keuringsdienst van waarde en rupals dragrace. 

Uiteindelijk heb ik wat dingen opgeschreven van dingen die mij opvielen tijdens het kijken van de scenes zonder geluid. Ik probeerde echt in de rol van Marie te stappen om zo te kijken wat zij meekrijgt. Ook heb ik daarna met closed captions gekeken, en daarna met geluid en closed captions. 

**Zonder geluid, zonder cc:** 

- Een hond die blaft zie je pas wanneer die in beeld is. En verder krijg je pas alles mee het in beeld is en veel krijg je niet eens mee. 

**Zonder geluid met cc:** 

- Korte cc van radio
- De hond jankt en hij zucht
- Nu hoor en zie je pas dat het regent. 
- Je hoort dat hij uitstapt, en zie je dat er pop muziek speelt. 
- Vliegen hoor je in aanlopp van het dode varken. 
- Hij loopt door de deur naar de andere kamer, dit wist je eerst niet. 
- Je ziet dat er water druppelt in de badkamer
- Je weet nu dat hij heftig ademt.
- Dat hij kreunt als hij wordt geslagen.

**Met geluid:** 

- De vrouw die je aan het begin hoort is blijkbaar via de politie radio en niet via een mobiel. 
- Hij schreeuwt Orum maar dat zie je niet. 
- Spannende muziek zie je niet.
- Dat hij loopt naar de andere kamer zie je niet echt goed
- Of hij verluisterd zie je niet. 
- Het vallende geluid komt uit de kelder
- Hoe hij ademt zie je niet
- Wat er omgestoot word zie je niet
- Dat de vloer kraakt zie je niet

Dit gaf mij een eerste goede houvast over wat ik zal maken. Ik had het idee om een video in te laden op de html pagina en niet via een vtt bestand maar gewoon vrij via een json file alle subtitles te generenen, dit zou mij meer opties geven om een background image te animeren, de subtitles te stylen en mogenlijk plaatjes in het beeld te plaatsen. Ik begon meteen met het maken van een prototype omdat ik dan iets bewegends kan laten zien i.p.v een wireframe met het idee. 

## 📝 Feedback moment (Week 1)

Die vrijdag had ik voortgang gesprek waarbij we de opdracht even bespraken en onze bevindingen van het interview, plus wat we nu voor het eerste prototype gaan maken. Ik had het idee om iets te maken met Javascript maar wist nog niet precies hoe, dus als tweede optie dacht ik een wireframe te maken zodat ik in iedergeval iets had om te laten zien die woensdag. Eric adviseerde mij om iniedergeval iets werkent en bewegends te laten zien, ook al is het maar iets kleins. Dus dat heb ik gedaan en heb geen wireframe gemaakt. Verder was ik was op de goede weg en alles ging goed. 

## 🔎 (Testronde 1, Week 2)

Bij mijn eerste test van mijn prototype had ik het eerste stuk van de onderititling in de json kunnen zetten gezet, en dit automatisch kunenn animeren onder het video element in de html. Ook had ik iets geprobeerd om een opbouwende spanning te visualiseren. Ik had namelijk wanneer het spannend werd, de achtergrondkleur de hele tijd van grijs naar zwart laten animeren. Ook had ik iets gedaan met streepjes in beeld om geluid te visualiseren. Ik was tijdens de test heel benieuwd of de bewegende achtergrond kleur het iets spannender zou maken, en of ik het goed had gedaan met het plaatje. 

Tijdens de test was ze erg enthausiast en ik heb wat duidelijke tips gekregen namelijk:

### 💡 Bevindingen 

- De ondertiteling staat te ver van de persoon in beeld.
- De achtergrond visualiseerd nog niet genoeg de opbouwende spanning en muziek, want Marie snapte niet was het moest voorstellen. Ik moet hier nog meer de aard van het geluid en het gevoel proberen te visualiseren. 
- De hierarchie van de ondertiteling klopt niet. De tekst van de mevrouw aan de telefoon lijkt belangerijker dan de politie agent z'n tekst, ik moet de hierarchie overeen laten komen met wat er op het beeld afspeelt.
- Marie vroeg waarom ik geen animaties/plaatjes heb gemaakt voor geluiden die niet in beeld gebeuren. ik zei dat ik daar nog niet over na had gedacht. Zij zei toen van wat ik ook doe, blijf consistent in wat je kiest. 
- De een malige closed caption voor geluid afbeelding werkt goed. Want de volgede keer weet ze wat het plaatje moet voorstellen. 

Ook heb ik goed opgelet bij andere tests en gekeken wat ze daarvan vond zodat ik de dingen die ik nog moet doen meteen beter kan doen dan zonder die feedback al gehad te hebben.

> **Aantekeningen van andere tests:**
>
> - Wat voor een geluid moest iemand omschrijven
> - Iemand moest goed aangeven wat voor geluid de hele sfeer veranderde. 
> - Langzaam pratende mensen ziet ze niet langzaam praten in de ondertiteling
> - Als iemand iets zegt op de achtergrond moet dat bij de ondertiteling staan
> - Sommige stukken zijn erg lang, mist intonatie
> - Lees punt moet anders waardoor de animaties op verschillende punten komen
> - De verschillende diktes en lettertypes werken prima, je kan er wel voor zetten wat het lettertype aantoont en later hoeft het er dan niet meer voor en pas weer na een lange tijd dat laten zien waarvoor dat lettertype voor dient. 
> - Ervoor zetten wie praat maar dat hoeft niet als het duidelijk is wie praat.
> - Later in de film kan je eventueel de naam ervoor zetten aangezien je niet perse meteen weet wie die persoon is.

## 📝 Feedback moment met Tamara (Week 2)

Op donderdag had ik een gesprek met Tamara. Zij zei vooral dat ik moest vragen aan Marie wat spanning voor haar betekent en waardoor dat gecreëerd wordt. Niet heel persoonlijk maar meer visueel, wat maakt iets spannend voor haar. Ook zei ze dat ik meerdere versies moest gaan maken van de opbouwende spanning en dit aan haar later zien zodat ik kan kijken wat zij het best vindt werken. 

Uiteindelijk ben ik niet toegekomen aan de meerdere versies van de achtergrond spannings opbouw, maar heb wel twee keer de vraag over wat iets visueels spannend maakt voor haar.

### Todo's voor week 3

Uiteindelijk had ik duidelijke doelen voor de komende test namelijk:

- Op de opbouw itereren en varieren. (Verschillende versies maken en testen welke het best werkt)
- Volgend gesprek vragen wat spanning voor haar is en wat zij visueel spannend eng.
- Feedback toevoegen
- Spelen met intonatie van de ondertiteling  

## 📝 Feedback moment (Week 2)

Op vrijdag had ik een gesprek met Vasilis. Daar kwam uit dat ik goed op weg was en vooral zo door moest gaan, wel zei hij dat irritante geluiden echt visueel pijn mogen doen. Dit deed mij denken aan andere ideen en gaf mij extra inspiratie voor mijn project. Zo heb ik dit proberen te doen door een witte flits te laten zien op de climax van de spanningsboog na een lange tijd donker beeld te hebben laten zien.

## 🔎 (Testronde 2, Week 3) 

Bij deze test had ik zo goed als alle feedback verwerkt van vorige week. Ook had ik een andere oplossing van het visualiseren van de achtergrond. Ik had namelijk een achtergrond afbeelding achter en wegtrekkende gradient geplaatst waardoor het leek alsof de scheuren van de afbeelding steeds groter werden. Ik vond deze versie al heel veel beter dan de vorige omdat ik dit beeld van wat er gebeurde op de achtergrond echt meer de audio vond uitbeelden en vond het wel een spannende visualisatie.

Wat ik wilde testen was of mijn ideeen die ik nog heb, de goede weg op gaan, of zij nog feedback punten heeft die ze vorige week niet heeft gezegd, wat ze van mijn nieuwe opbouw en visualisatie van het geluid vindt en of de hierarchie van de tekst beter is. 

Ik had helaas niet meerdere versies kunnen maken van de opbouwende spanning omdat mijn eerste versie/idee na de feedback al heel veel tijd kostte. 

### 💡 Bevindingen

Ze was erg enthausiast over de achtergrond afbeelding bij het grimmige muziekje dat afspeelde als de kastanjemannen in beeld komen in de kelder. 

Wel had ze nog wat feedback voor mij en dat was:
- Ze had nog een beetje twijfels van wat voor muziek of geluid het precies moest voorstellen. Een closed caption erbij om het geluid te omschrijven zou helpen daarbij. 
- Ze had ook vragen bij wat er precies valt in de kelder als Marius aan de telefoon is, en hoe dat klinkt.
- Ik noemde wat ideeen op zoals het animeren van de closed caption: [Heavy breathing] op het ritme van hoe hij hijgt. Dit zou zeker kunnen werken bij het zien van intonatie. 
- De iconen bij de tekst hoeven niet altijd bij de tekst, dit leidt af en het is loze info want ze weet deze info al. 

Op mn vraag van wat visueel eng is voor haar had ze geen antwoord op. Ze zat er diep over na te denken maar kon echt niks bedenken. Uiteindelijk dacht ik dat het niet zo zeer om het enge van de film gaat, maar meer de sfeer. Dat het overbrengen van de sweer het belangrijkste is, en dat merkte ik ook wel tijdens deze proef. Want ze zei vaak het woord sfeer, en dat ze de sfeer goed meekreeg of mee wilde krijgen.

Ook had ze nog een tip voor ons allemaal, kijk is de scene met zwart beeld, en luister alleen naar ht geluid, omschrijf wat je hoort en schrijf dit op. Dit zou het omschrijven van geluiden makkelijker voor ons maken en het beter te begrijpen maken voor Marie.

> **Aantekeningen van andere tests:**
>
> - Alleen kleuren als geluid doen haar niets
> - "Pulp function as typography" is een goed voorbeeld van intonatie, dat de tekst hevig wordt geanimeerd is leuk en werkt goed.
> - Ondertiteling moet niet achter lopen
> - Woord voor woord animeren wordt iets te druk
> - Ook zei ze dat ze ook wel kan zien waar het geluid vandaan komt. 
> - Kleine details zoals closed captions voor alle geluiden die je hoort maken het nog spannender.
> - Extra letters in woorden werken goed en vullen de intonatie goed in.
> - Als het geluid maakt, moet het zichtbaar zijn.

Met de bevindingen van test 2 ben ik deze week verder gegaan. Ik heb gedaan wat Marie had voorgesteld en dat was de scene te gaan beluisteren zonder beeld, dit allemaal op te schrijven en te omschrijven, en dit als closed captions neer te zetten. Hierdoor ziet ze welke geluiden je zou moeten horen waardoor zij zelf een beeld kan schetsen van de sfeer. 

Uiteindelijk heb ik deze features toegevoegd:

- [x] Alle geluiden in closed captions
- [x] Muziek omschrijven on closed captions
- [x] Iconen weghalen als het niet hoeft
- [x] het hevig ademen animeren
- [x] En het laatste stuk af gemaakt
- [x] Verluister font toegevoegd

Ik had nog een idee om het laatste stuk te laten bounchen samen met de achtergrond afbeelding. Dit wilde ik doen omdat de wind dat bounche geluid maakt maar dit heb ik helaas niet kunnen maken.

## 📝 Feedback moment (Week 3)

Die vrijdag had ik weer een voortgangs gesprek en daarbij had ik geen vragen, en geen feedback. Alles ging goed en ik was op de goede weg. 

## 🔎 (Testronde 3, Week 4)

Voor de test 3 had ik een aantal vragen opgesteld en dingen opgeschreven die ik wilde testen Namelijk.

- Is het te veel tekst van de omschrijving, moet het uitgebreider, of moet het meer in steekwoorden?
-  Wanneer is het te veel tekst, wanneer te weinig?
- Is het duidelijk dat de achtergrond muziek, achtergrond muziek is en geen songtekst.
- De vorige keer had ik gevraagd wat jij visueel eng vind en daar had je geen antwoord op. Hieruit nam ik de conclusie dat wij een enge scene niet perse eng voor jou hoeven te maken maar ons best moeten doen om de sfeer zo goed mogelijk over te brengen. Heb ik hier de juiste conclusie uit getrokken?
- Heb je verder nog tips?

### 💡 Bevindingen

De omschrijving van de muziek en geluiden waren inderdaad iets aan de lange kant. Ik zou dit kunnen opknippen in stukken om dit leesbaarder te maken. 
Ze wist niet zeker of de tekst tussen deze ♫ iconen een songtekst was of de achtergond moest omschrijven. 

Op de vraag of mijn conclusie klopte die ik had getrokken van haar antwoord over wat visueel eng was die vorige week, zei ze dat dat klopte. Maar ze zei wel dat de spanning aan de context ligt. En dat ze wel een keer een enge film heeft bekeken toen ze 6 of 7 jaar oud was waar ze nachten van wakker heeft gelegen. Dit kwam omdat wat er op het beeld afspeelde eng was en je niet zag wat mensen in de film nou zo eng vonden. De ontwetendheid was de factor die het zo spannend maakte. 
Verder had ze geen tips, en was weer erg enthausiast en zelfs een beetje verbaasd van hoeveel geluiden wij horen in zo'n scene.

> **Aantekeningen van andere tests:**
>
> Ze wil het ritme van de muziek graag meekrijgen. 
> 
> Het trillen van de telefoon past niet echt bij het kloppen op de deur in de film, geluid bestaat uit trillingen maar trillingen zijn ook altijd weer anders, daarom als je met trillingen werkt moet het wel passen bij het geluid wat je zou horen. Wel vindt ze de trillingen goed passen bij de laatste scene van de chestnutmen.
>
> Iemand had een sound bar/ frequentie meter gemaakt maar die moet iets precieser gemaakt worden en accurater. Als dat zo is dan zou het wel kunnen werken, en een goeie toevoeging zijn. 

### 🔜 Wat ik zou doen voor de volgende test

De closed captions van de muziek en andere achtergrond geluiden opdelen in stukjes, zo wordt het leesbaarder. Ook zou ik kijken wat voor iconen ik zou kunnen gebruiken voor achtergrond geluid i.p.v ♫. Het moet duidelijk zijn of het wordt gezongen of dat het de muziek omschrijft. Ook zou ik het laatste stuk nog willen laten bounchen met de achtergrond afbeelding zodat het meer lijkt op wat voor een geluid er afspeelt. En verder zou ik de javascript code opschonen, zodat je het makkelijker voor andere scenes kan invullen en maken. 

## 👤 Exclusive design principles:

Bij het maken van een exclusief prototype voor een aangewezen persoon, gebruik je niet inclusive design principles maar exclusive design principles. Dit zijn: study situation, ignore conventions, prioritise identity en add nonsense.

### 🧐 Study situation

Study situation is vooral terug gekomen tijdens het interview en het verdere onderzoek na het interview. Wij mochten namelijk aan Marie een aantal vragen stellen en daarna ben ik met deze kennis verder in haar rol gestapt door het kijken van series zonder geluid en zonder closed captions, zonder geluid en met closed captions, en met geluid en met closed captions om te kijken wat Marie nou meekrijgt en wat er nou echt allemaal gebeurt.
Ook vindt ik study situation horen bij het testen van de prototypes, want daar studeer je eigenlijk haar situatie steeds opnieuw alleen dan met jouw gemaakte prototype. Ook heb ik tijdens de tests af en toe nog meer vragen gesteld over haar situatie zoals de vraag over wat iets visueels spannend maakt voor haar. Vragen blijven stellen in het process is belangrijk want je gaat nooit iemand helemaal meteen kennen in het eerste uurtje interview.
 
### 🫣 Ignore conventions

Nadat ik haar situatie had bestudeerd heb ik een beetje gebrainstormd en dingen gemaakt die haar zouden helpen zonder aan andere mensen gedacht te hebben. Ik heb bijvoorbeeld dingen snel laten knipperen en normaal zou je dat niet mogen of moeten doen om zo mensen met epilepsie te beschermen. Maar aangezien Marie dat niet heeft en het prototype alleen voor haar is, kon dat nu wel. 

### 🫵 Prioritise identity

Prioritise identity heb ik meerdere malen laten zien in mijn proces. Tijdens het proces heb ik namelijk 3 keer mijn prototype kunnen testen met Marie. Hieruit heb ik steeds nieuwe inzichten gekregen die ik later weer heb toegevoegd aan mijn prototype om zo het prototype steeds beter voor haar te maken en meer naar haar wensen toe te brengen. ZO gaf ze bijvoorbeeld aan dat iets wat ik had geprobeerd totaal werkte en ik daar dus iets nieuws voor moest verzinnen, ik had daar natuurlijk meteen wat vragen na gesteld zodat dat mij weer in een goede richting zou lijden. 

### 🃏 Add nonsense

Add nonsense heb ik in zekere maten doorgevoerd in mijn prototype. Ik ben verder gegaan dan wat er al was. Closed captions en geanimeerde tekst waren er namelijk al, maar ik heb ook gebrainstormd en geexperimenteerd met afbeeldingen in beeld, de tekst op verschillende plaatsen in beeld achtergrond plaatjes en achtergrond kleuren. Ik ben niet over de top gegaan met add nonsense omdat ze tijdens haar interview ook al had gezegd dat het niet te druk moet worden en consistent moet blijven, en natuurlijk gaat het om de film met als hulpmiddel de closed captions etc, en niet alleen om de ondertiteling. 