function getFateInfo(fateNumber) {

    return getFate()[fateNumber]

}

function getFate() {

    return {
        1: {
            description: 'Má sklon k vůdcovství. Má odvahu a inspiraci. Je aktivní a tvůrčí. Přednost dává individuálnímu úspěchu. Schopnost prosadit se vlastní iniciativou a vůli uspět. Je třeba více času věnovat druhým. Je dobré ji chválit. Ráda dominuje. Řídící schopnosti. Někdy dosáhne slávy nebo společenského postavení.',
            warning: 'Pozor na nadřazenost a tvrdohlavost. Osobní váhavost a obtíže v hledání vlastní cesty. Malá pomoc a podpora z vnějšku. Osamělost.'
        },
        2: {
            description: 'Tato osoba je snášenlivá. Laskavá a vyniká velmi dobrou intuicí. Kterou může využívat při své činnosti. Je dobré naslouchat druhým, mít trpělivost a učit se umění diplomacie. Nedostatek odvahy k realizaci plánů. Iniciativu přenechává druhému. Od partnera potřebuje oddanost. Důležité jsou vztahy, přátelství a citový a partnerský život. Dovede dobře usmiřovat osoby, které jsou ve sporu. Úspěch ve spolupráci s druhými.',
            warning: 'Lpění na majetku. Pozor na malichernosti. Může se projevit určitá pasivita a sklon poddat se okolnostem. Pozor na podřízenost a přecitlivělost. Špatně se vyrovnává se stresem. Potřebuje kolem sebe klid a pohodu, jinak se stane roztržitou a nervózní. Často se vyhýbá jakékoliv formě vedení a odpovědnosti.'
        },
        3: {
            description: 'Tato osoba je mentálně čilá a má činorodou mysl. Je tvořivá, originální a má dobrou obrazotvornost. Nesnáší nudu. Ráda spolupracuje s druhými lidmi. Vyniká osobním kouzlem a vtipem. Je kritická k druhým, a proto je třeba se učit určité diplomacii. Pro aktivní činnost potřebuje pracovat bez zábran a s volností. Velmi ráda pracuje ve dvojici. Často se stává, že lépe pracuje pod vlivem stresu, který aktivuje její mentální energii. Obvykle má rychlý úspěch. Je třeba více ctižádostivosti a otevřít se. Je vynalézavá a nápaditá při řešení problémů. Snadné navazování kontaktů, někdy ale povrchní. Rychle se rozhoduje avšak ne vždy správně.',
            warning: 'Pozor na neklid, roztěkanost, přílišnou výbušnost, vznětlivost, strach z jednotvárnosti a nevyrovnaného finančního života. Pozor na neopatrnost.'
        },
        4: {
            description: 'Dosáhne pracovních úspěchů díky své vytrvalosti a systematické práci. Důležitá je důslednost a pořádek. Úspěch v pozdějším věku a po poměrně usilovné práci. Důležitá je trpělivost. Tato osoba je praktická a konzervativní. Nemá chuť ke změnám, i když nemá ráda monotónní život. Je obvykle fyzicky zdatná a proto dává přednost činnostem, kde uplatní fyzickou sílu a obratnost. Je pracovitá. Potřebuje jistotu věrnosti partnera.',
            warning: 'Pozor na nedbalost a zúžený pohled na život. Opatrnost při rozhodování. Pozor na to, aby to, co prožívá, neobracela dovnitř, což působí na nervový systém, proto je důležité uvolňování energie. Může se objevit nedostatek sebejistoty.'
        },
        5: {
            description: 'Tato osoba potřebuje pohyb, změny a ráda cestuje. Vyhledává svobodu a dobrodružství. Je přístupná novým věcem a myšlenkám. Má vůdcovské sklony. Má dobré šance. Je ambiciózní, avšak velmi citlivá a vyhýbá se rutině a nudě. Imponují jí lidé, kteří ji dokážou získat v nějaké oblasti.',
            warning: 'Nepodléhat okamžitým nápadům, nestálosti, sklonu k nervozitě a neklidu. Je dobré udržet rovnováhu v citové, profesionální a finanční oblasti. Nemá ráda pravidla a omezení a nelze ji k ničemu donutit. Pozor na nehody.'
        },
        6: {
            description: 'Velmi často tato osoba bude před volbou a je třeba se dobře rozhodovat tváři v tvář vznikajícím příležitostem. Partnerství, rodina, domov jsou základem pro úspěch. Ráda pomáhá druhým. Potřebuje partnera, který splní její představy. Touží po harmonizaci vztahu. Obvykle jsou láska a manželství úspěšné. Je však třeba najít ochotu k ústupkům. Často má smysl pro obchod a příklon k estetice nebo umění. Pravidelněji se věnovat zdraví. Klade důraz na materiální stránku života. Je velmi důležité si ujasnit, co je dobré a co je špatné a pochopit, že smyslem překážek je posílit a prověřit vůli. Důležité je uznání, láska apod., která rozvíjí její sebedůvěru.',
            warning: 'Pozor na váhavost, roztěkanost a netoleranci. Přílišná snaha po dokonalosti a nedůtklivost.'
        },
        7: {
            description: 'Tato osoba dává přednost duševní práci. Je snaha se realizovat ve skutečném kvalitním životě a vyvíjet se prací na sobě samém. Potřebuje pro svůj život přátelství. Manželství může být nesnadné, neboť chce být nezávislá. Dochází k nečekaným změnám v životě. Nic nedělat silou. K úspěchu je třeba dobře vnímat druhé a život a rozvíjet sebedůvěru. Přátelství a vztahy hrají hlavní úlohu. Realizace materiálních cílů je obtížná, i když peníze přicházejí nečekaným způsobem. Může se objevit sklon ke studiu, duchovnímu životu nebo velké cesty. Dobře působí venkov, hory nebo moře. U této osoby se může projevit léčitelské nadání ve všech směrech jako je fyzický, emocionální i duchovní směr.',
            warning: 'Pozor na pesimismus a přílišnou strohost. Někdy je pyšná a nepřístupná. Nedostatek realismu. Pozor na samotu. Důležitá je nezaujatost.'
        },
        8: {
            description: 'Tato osoba je ctižádostivá. Touží po moci a penězích. Riskantní cesty jí přinesou úspěch. Problémem je někdy nedostatek odvahy, odolnosti a duševní rovnováhy. Má dobré řídící a organizační schopnosti. Je houževnatá, vytrvalá, ale konzervativní. Pro tuto osobu je důležité pochopit rovnováhu v životní existenci. Je třeba pochopit příčiny a následky. Je třeba udržet v rovnováze dávání a braní, materiální majetek nepřinese klid, ani uspokojení, pokud nebude ke prospěchu ostatním. Má silný charakter a vůli překonávat překážky.',
            warning: 'Pozor na zneužívání moci, které může mít vážné důsledky, útočnost, tvrdost, nesnášenlivost a netrpělivost. Je dobré naučit se čekat na úspěch, jinak vzniká riziko značných neúspěchů. Nikdy neztrácet ze zřetele smysl pro slušnost a úctu k druhým, jinak hrozí finanční nebo právní problémy. Má o sobě vysoké mínění a je vybíravá. Je náladová. Nehody nebo problémy se zdravím mohou být brzdou v rozvoji.'
        },
        9: {
            description: 'Tato osoba hledá ideál. Bude podnikat cesty, aby získala zkušenosti a setkání s významnými lidmi. Má vysokou úroveň mentální energie a všechna úskalí a problémy zvládne. Dobré je, když zvýší oddanost věci, citlivost a odvahu. Idealistický přístup k sobě i okolí. Je zodpovědná. Někdy si neuvědomuje hloubku své moudrosti. Není pro ni nutné zvýšené materiální zajištění. Láska, pravda a přátelství, to je velmi důležité. Potřeba dávat mnohé ze sebe ve prospěch druhých. Občas nečekaný úspěch a realizace velkých plánů a to v době zralosti. Široká komunikace s veřejností nebo zahraničím. Snadno se učí.',
            warning: 'Pozor na sklon k iluzím, vypjaté citovosti, náladovým a přehnaným reakcím. Sklon k citovému napětí a psychickým výstřelkům.'
        },
        11: {
            description: 'Tato osoba je ambiciózní a inteligentní. Může dosáhnout velkého úspěchu, ale i krachu. Je nadaná a má sklon k vizím. Dovede využívat inspirace shora. Je potřebná trpělivost a vyrovnanost a dále více vůle. Je citlivá a tvořivá. Je potřebné se naučit správně hodnotit své emoce a otřesy.',
            warning: 'Pozor na netrpělivost, nepochopení druhého, tvrdost a nesmiřitelnost. Pozor na nedorozumění, na stresové situace a proměnlivý materiální život. Pozor, aby své nevšední schopnosti nevyužívala jen k hromadění majetku.'
        },
        22: {
            description: 'Tato osoba má snahu po kolektivní činnosti. Je vysoké inteligence. Osobní život je na druhém místě. Má touhu budovat pro druhé. Vidí daleko a v širokých souvislostech. Má inspiraci a sílu. Je dobré naslouchat svému vnitřnímu hlasu.',
            warning: 'Snažit se o lidský přístup. Pozor na duševní přetíženost až poblouznění. Vyhýbat se nesoustředěnosti.'
        },
    }

}

export {
    getFateInfo
}