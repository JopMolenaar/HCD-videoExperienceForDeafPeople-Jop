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

### Bevindingen

Marie is doof geboren, ze heeft dus een tolk nodig om met mensen die geen gebaren taal kunnen te communiceren. 

#### Podcasts

Marie vindt podcasts saai. Ze heeft er niet veel ervaring mee want het is niet toegankelijk. Dit komt omdat ze niet kan horen, en daardoor moet zij er echt de tijd voor nemen om te kijken naar mensen die met elkaar praten terwijl ze op een bank zitten. Zonder geluid een podcast kijken is erg saai want het beeld is gewoon saai. Soms als ze het echt heel interressant vindt kan ze het transscript lezen van de podcast als die er is. Maar dat is vaak een hele grote lap tekst zonder intonatie, onoverzichtelijk, en een goed geschreven artikel is veel fijner om te lezen. 

Films vindt ze leuker omdat beeld daar een grotere rol in speelt. Maar ook bij films is de ondertiteling platte tekst en daar mist ze ook veel informatie. Ze noemde wat voorbeelden zoals hoe mensen praten en waar de geluiden vandaan komen. Ze gaf ook wat voorbeelden van wat ze had gezien wat ze fijn vond en noemde "The dodo" op youtube als voorbeeld. Hier worden bepaaalde geluiden als bepaalde streepjes gevisualiseerd om aan te geven wat voor emotie je hoort, en ook waar je het hoort.  
Zelf beeld ze heel veel in over wat ze niet mee krijgt en heeft dit dus ook veel getraind. 

Teon we vroegen of trillingen konden helpen om het geluid beter te begrijpen zei ze dat dat wel zou kunnen helpen om de ervaring te verbeteren, zeker in de bioscoop. Maar trillingen zijn heel algemeen en er zijn veel soorten geluiden en trillingen dus dat moet wel goed worden gemaakt. Verder wil ze ook wel een keer naar IMAX of 4D in de bios om te ervaren of dat wat is.

Animaties zouden kunnen helpen om bijvoorbeeld te laten merken waar geluid vandaan komt. Dit geeft meer duidelijkheid en informatie over naar wat je kijkt. Ook zou dit kunnen helpen om te laten zien wie praat en hoe die praat. 
Met verschillende font's en kleuren zouden we ook kunnen spelen om verschillende personen en intonatie aan te geven maar het moet niet te druk worden en wel consistent blijven. 

Muziek kan ze niet horen en krijgt ze helaas dus ook niet mee, dit geeft vaak wel de spanning weer in de film. Ook weet ze hoe muziek impact kan hebben op mensen hun emoties doordat ze dat heeft gezien op een begrafenis. Dit gevoel wil zij ook ervaren of in ieder geval dichter bij in de buurt komen. Over de huidige closed captions is ze opzich wel enthausiast, maar ze krijgt gewoon niet alle info en het gevoel mee van de platte tekst, dus dat kan zeker beter. 

Verder heeft ze wat films opgenoemd die ze vaak kijkt, waar ze voorbeelden uit noemde, en waar wij ook wat van konden kijken om te vergelijken.

<!-- Ook moeten we uitvogelen hoe we spannende muziek laten zien in iets visueels. Ze zei bijvoorbeeld: "denk aan shots, bloed, licht, mes etc" vooral klassieke dingen.  -->

#### Begin onderzoek en begin van prototype

Ik ben begonnen om alles op te schrijven van het interview en wat scenes van wat films te kijken. Ze had de `The bake off`, `3 body problem`, `The bear`, `The menu` en `The chestnutmen` genoemd als series die ze al had gezien. Verder heeft ze een hele brede interesse en kijkt ze ook naar de keuringsdienst van waarde en rupals dragrace. 

Uiteindelijk heb ik wat dingen opgeschreven van dingen die mij opvielen tijdens het kijken van de scenes zonder geluid. Ik probeerde echt in de rol van Marie te stappen om zo te kijken wat zij meekrijgt. Ook heb ik daarna met closed captions gekeken, en daarna met geluid en closed captions. 

**Zonder geluid, zonder cc:** hond die blaft zie je pas wanneer die in beeld is. Er liggen opeens meerdere lijken in het huis en er leeft nog iemand. 

**zonder geluid met cc:** korte cc van radio, de hond jankt en hij zucht, nu hoor en zie je pas dat het regent. nu hoor je dat hij uitstapt, en zie je dat er pop muziek speelt. vliegen hoor je in aanlopp van het dode varken. De hond blaft. Hij loopt door de deur naar de andere kamer, dit wist je eerst niet. Je ziet dat er water druppelt, je ziet nu dat hij wordt gebeld, je weet nu dat hij heftig ademt. hoe de deren klinken. wa hij hoord, soort van. Dat hij kreunt als hij wordt geslagen.

**Met geluid:** 


- De vrouw die je aan het begin hoort is blijkbaar via de politie radio en niet via een mobiel. 
- Hij schreeuwt Orum maar dat zie je niet. 
- Spannende muziek zie je niet.
- Dat hij loopt naar de andere kamer zie je niet echt
- Of hij verluisterd zie je niet. 
- De crashing sound komt uit de basement
- Hoe hij ademt zie je niet
- Wat er omgestoot word zie je niet
- Dat de vloer kraakt zie je niet

Dit gaf mij een eerste goede houvast over wat ik zal maken. Ik had het idee om een video in te laden op de html pagina en niet via een vtt bestand maar gewoon vrij via een json file alle subtitles te generenen, dit zou mij meer opties geven om een background image te animeren, de subtitles te stylen en mogenlijk plaatjes in het beeld te plaatsen. Ik begon meteen met het maken van een prototype omdat ik dan iets bewegends kan laten zien i.p.v een wireframe met het idee. 

## 📝 Feedback moment (Week 1)

## 🔎 (Testronde 1, Week 2)

Bij mijn eerste test van mijn prototype had ik het eerste stuk van de onderititling in de json kunnen zetten gezet, en dit automatisch kunenn animeren onder het video element in de html. Ook had ik iets geprobeerd om een opbouwende spanning te visualiseren. Ik had namelijk wanneer het spannend werd, de achtergrondkleur de hele tijd van grijs naar zwart laten animeren. Ook had ik iets gedaan met streepjes in beeld om geluid te visualiseren. Ik was tijdens de test heel benieuwd of de bewegende achtergrond kleur het iets spannender zou maken, en of ik het goed had gedaan met het plaatje. 

Tijdens de test was ze erg enthausiast en ik heb wat duidelijke tips gekregen namelijk:

### Tips: 

- De ondertiteling staat te ver van de persoon in beeld.
- De achtergrond visualiseerd nog niet genoeg de opbouwende spanning en muziek, want Marie snapte niet was het moest voorstellen. Ik moet hier nog meer de aard van het geluid en het gevoel proberen te visualiseren. 
- De hierarchie van de ondertiteling klopt niet. De tekst van de mevrouw aan de telefoon lijkt belangerijker dan de politie agent z'n tekst, ik moet de hierarchie overeen laten komen met wat er op het beeld afspeelt.
- Marie vroeg waarom ik geen animaties/plaatjes heb gemaakt voor geluiden die niet in beeld gebeuren. ik zei dat ik daar nog niet over na had gedacht. Zij zei toen van wat ik ook doe, blijf consistent in wat je kiest. 
- De een malige closed caption voor geluid afbeelding werkt goed. Want de volgede keer weet ze wat het plaatje moet voorstellen. 

Ook heb ik goed opgelet bij andere tests en gekeken wat ze daarvan vond zodat ik de dingen die ik nog moet doen meteen beter kan doen dan zonder die feedback al gehad te hebben.
<!-- 
### Tips (Voor Niels): 

Wat voor bel, probeer dat te omschrijven. 
Kleur moet duidelijker verschillen.
Ze wist niet dat een klap de hele sweer veranderde
Ze weet soms niet wie wat zegt.
Langzaam pratende mensen ziet ze niet langzaam praten in de ondertiteling.
Als iemand iets zegt op de achtergrond moet dat bij de ondertiteling staan.

### Tips (Voor Eva): 

Sommige stukken zijn erg lang, mist intonatie, 
Lees punt moet anders waardoor de animaties op verschillende punten komen.

### Tips (voor Joppe):

De verschillende diktes en lettertypes werken prima, je kan er wel voor zetten wat het lettertype aantoont en later hoeft het er dan niet meer voor en pas weer na een lange tijd dat laten zien. 
Ervoor zetten wie praat maar dat hoeft niet als het duidelijk is wie praat. Later in de film kan je eventueel de naam ervoor zetten.  -->

## 📝 Feedback moment met Tamara (Week 2)

#### Todo's voor aankomende week

Uiteindelijk had ik duidelijke doelen voor de komende test namelijk:

- Op de opbouw itereren en varieren. (Verschillende versies maken en testen welke het best werkt)
- Volgend gesprek vragen wat spanning voor haar is en wat zij visueel spannend eng.
- Feedback toevoegen
- Spelen met intonatie van de ondertiteling  

## 📝 Feedback moment (Week 2)

## 🔎 (Testronde 2, Week 3) 

Bij deze test had ik zo goed als alle feedback verwerkt van vorige week. Ook had ik een andere oplossing van het visualiseren van de 

### Bevindingen

Wat ik wilde testen was of mijn ideeen die ik nog heb, de goede weg op gaan, of zij nog feedback punten heeft die ze vorige week niet heeft gezegd, wat ze van mijn nieuwe opbouw en visualisatie van het geluid vindten of de hyrarchie van de tekst beter is. 

Ik had helaas niet meerdere versies gemaakt van de opbouwende spanning omdat mijn eerste versie/idee na de feedback al heel veel tijd kostte. Maar ze was erg enthausiast over de achtergrond afbeelding bij het grimmige muziekje dat afspeelde als de kastanjemannen in beeld komen in de kelder. 

Wel had ze nog wat feedback voor mij en dat was:
- Er moet een cc als omschrijving van de muziek. 
> Ze had nog een beetje twijfels van wat voor muziek of geluid het percies moest voorstellen. Een cc erbij om het geluid te omschrijven zou helpen daarbij. 
- Ze had ook vragen bij wat er precies valt in de kelder als Marius aan de telefoon is, en hoe dat klinkt.
- Ik noemde wat ideeen op zoals het animeren van de closed caption: [Heavy breathing] op het ritme van hoe hij hijgt. Dit zou zeker kunnen werken bij het zien van intonatie. 
- De iconen bij de tekst hoeven niet altijd bij de tekst, dit leidt af en het is loze info want ze weet deze info al. 

Op mn vraag van wat visueel eng is voor haar had ze geen antwoord op. Ze zat er diep over na te denken maar kon echt niks bedenken. Uiteindelijk dacht ik dat het niet zo zeer om het enge van de film gaat, maar meer de sweer. Dat het overbrengen van de sweer het belangrijkste is, en dat merkte ik ook wel tijdens deze proef. Want ze zei vaak het woord sfeer, en dat ze de sfeer goed meekreeg of mee wilde krijgen.

Ook had ze nog een tip voor ons allemaal, kijk is de scene met zwart beeld, en luister alleen naar ht geluid, omschrijf wat je hoort en schrijf dit op. Dit zou het omschrijven van geluiden makkelijker voor ons maken en het beter te begrijpen maken voor Marie.

### Notes van anderen hun tests

- Kleuren als geluid doet haar niets
- pulp function as typography is een goed voorbeeld van intonatie, dat de tekst hevig wordt geanimeerd is leuk en werkt goed.
- ondertiteling moet niet achter lopen
- woord voor woord, en de positie en animitie op de woorden individueel wordt iets te veel
- Ook zei ze dat ze ook wel kan zien waar het geluid vandaan komt. 
- wat ze ziet kan eruit blijven, 
- kleine details maken het nog spannender
- extra letters in woorden werken goed en vult goed de intonatie in.
- Tekst helemaal uitleggen of alleen wat je hoort op de plek?, kan mss anders zijn bij omgevings geluiden en muziek.
- Als het geluid maakt, moet het zichtbaar zijn.

## 📝 Feedback moment (Week 3)

## Week 4

Met de bevindingen van test 2 ben ik deze week verder gegaan, ik heb gedaan wat Marie had voorgesteld en dat was de scene te gaan beluisteren zonder beeld, dit allemaal op te schrijven en te omschrijven, en dit als closed captions neer te zetten. Hierdoor ziet ze welke geluiden je zou moeten horen waardoor zij zelf een beeld kan schetsen van de sfeer. 

- [x] alle geluiden in closed captions
- [x] muziek omschrijven on closed captions
- [x] iconen weghalen als het niet hoeft
- [x] het hevig ademen animeren
- En het laatste stuk af gemaakt
- verluister font toegevoegd

Ik heb het laatste stuk helaas niet kunnen laten bounchen want de op achtergrond muziek gaat de winderige piep heel erg op en neer.

### 🔎 (Testronde 3, Week 4)

**Vragen voor de test:**

Is het te veel tekst van de omschrijving, moet het uitgebreider, of moet het meer in steekwoorden?
 => opknippen in stukjes zodat het leesbaarder wordt

Wanneer is het te veel tekst, wanneer te weinig? => opknippen in stukjes zodat het leesbaarder wordt

Is het duidelijk dat de achtergrond muziek, achtergrond muziek is en geen songtekst.
=> denkt dat het een songtekst is.

De vorige keer had ik gevraagd wat jij visueel eng vind en daar had je geen antwoord op. Hieruit nam ik de conclusie dat wij een enge scene niet perse eng voor jou hoeven te maken maar ons best moeten doen om de sfeer zo goed mogelijk over te brengen. Heb ik hier de juiste conclusie uit getrokken? 
=> klopt, spanning ligt aan de context natuurlijk en ze heeft wel een keer wakker gelegen van een enge film

Heb je verder nog tips?
=> nee, goed bezig

Ze was verbaasd en enthausiast over hoe veel geluiden je hoort en dat er ook veel geluiden door elkaar lopen.

**aantekeningen van andere tests:**

Ze wil het ritme graag meekrijgen

het trillen van de telefoon past niet echt bij het kloppen in de film
geluid is trilling maar trillingen zijn ook altijd weer anders. 
Wel passen de trillingen bij de laatste scene van de chestnut men

mooie klap animatie van niels, 
sound bar moet iets precieser, en accurater en dan zou het wel kunnen werken, en een goeie toevoeging zijn. 


## Exclusive design principles:

### Study situation
### Ignore conventions
### Prioritise identity
### Add nonsense