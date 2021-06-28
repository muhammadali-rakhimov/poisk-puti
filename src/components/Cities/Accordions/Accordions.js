import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import accordion from "./Accordion.module.css";

const Accordions = () => {
  return (
    <Accordion style={{ overflow: "hidden", margin: "30px", backgroundColor: "#f4f4f4", border: "1px solid #e1e1e1", borderRadius: "10px", padding: "5px" }}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Qarshi Shaxri</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kok-gumbaz_mosque_Qarshi03.jpg/250px-Kok-gumbaz_mosque_Qarshi03.jpg" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Qarshi shaxri</b> (Naxshap, Navtaka, Nasaf, Behbudiy — 1926—1937-yillarda) — Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi shahar (1926-yildan), viloyat markazi (1943-yildan). Qashqadaryo vohasining markazida, Qashqadaryo boʻyida, xalqaro temir yoʻl va avtomobil yoʻllari kesishgan joyda. Maydoni 7,5 ming gektar. Aholisi 275 ming kishi (2021). Qarshi Oʻzbekistonning qadimiy shaharlaridan biri. U turli davrlarda Bolo, Nashebolo, Naxshap, Nasaf, nomlari bilan yuritilib, XIV asrdan Qarshi deb atala boshlagan.
            <br />&nbsp;&nbsp;Qarshi nomining kelib chiqishi toʻgrisida turli fikr va taxminlar mavjud. V. V. Bartold shaharning nomi moʻgʻul xoni Kepakxon qurdirgan Qarshi (qadimiy turkiychada saroy maʼnosini anglatgan) bilan bogʻliq deb taʼkidlaydi. Qutadgʻu bilig (Saodatga eltuvchi bilim) dostonida Qarshi atamasi saroy va qarama-qarshi turish maʼnosida qoʻllangan. Boburnomada ham bu nom moʻgʻul tilidan olinganligi taʼkidlangan. Keltirilgan taxminlarda atamaning qarshi — saroy, qasr maʼnolari koʻproq qoʻllanadi.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Qarshi Tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://www.gazeta.uz/media/img/2013/02/cEmef413605200045933_b.jpg" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Qarshi tumani</b> — Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi tuman, 1931 yil 1 oktyabr da tashkil etilgan. Shimoliy dan Koson, shimoli-sharqdan Chiroqchi, sharqdan Qamashi, Gʻuzor, janubiy dan Nishon, gʻarbdan Kasbi tumanlari bilan chegaradosh.. Maydoni 0,9 ming km2. Aholisi 177 ming kishi (2005). Tumanda 1 shahar (Beshkent), 15 ta qishloq fuqarolari yigʻini (Bogʻobod, Dasht, Yertepa, Kat, Kojar, Nuqrobod, Paxtakor, Poshton, Talliqoʻrgʻon, Xonobod, Charogʻil, Choʻliboʻston, Qovchin, Qoratepa, Hilol) bor. Markazi — Beshkent shahriTabiati. Tuman hududi Qashqadaryoning eng quyi oqimidagi tekislikda joylashgan (eng baland joyi 387 m).
            <br />&nbsp;&nbsp;Qarshi tumanida dehqon, fermer xoʻjaliklari faoliyat koʻrsatadi. 16,5 ming ga yerga paxta, 15,2 ming ga yerga don, shuningdek, kartoshka, sabzavot va poliz, ozuqa ekinlari ham ekiladi. Tutzor, tokzor, mevazorlar bor. Koʻpyillik daraxtzorlar, koʻchatzorLar, ihota daraxtzorlar, yaylovlar mavjud. Tumandagi jamoa va shaxsiy xoʻjaliklarida 50,5 ming qoramol, 82 ming qoʻy va echki, 53,5 ming parranda, 435 yilqi boqiladi.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Shahrisabz shahri</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ensemble_Dorout_Tilovat_%28Shahrisabz%29_%286018370667%29.jpg/250px-Ensemble_Dorout_Tilovat_%28Shahrisabz%29_%286018370667%29.jpg" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Shahrisabz</b> — Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi shahar. Shahrisabz tumani maʼmuriy markazi (1926 yildan). Kitob—Shahrisabz vohasida. Katta Oʻzbekiston trakti yoqasida joylashgan. Shahrisabz jan.dan Tanxozdaryo, shim.dan Oqsuv daryosi oqib oʻtadi. Urtacha bal. 658 m. Aholisi 90 ming kishi (2004). Sh. Oʻzbekistondagi qadimiy shaharlardan biri. Arxeologik maʼlumotlarga koʻra, shaharga mil. av. 1 ming yillikning oʻrtalarida asos solingan.Shahrisabz mil. boshlarida va ilk oʻrta asrlarda turli nomlar bilan atalgan (qarang Kesh). 13-asrdan Shahrisabz nomi ham urf boʻlgan.
            <br />&nbsp;&nbsp;Amir Temur va Temuriylar davrida Shahrisabz ulkan saltanatning yirik shahriga, barlos beklarinint yozgi qarorgohiga aylantirilgan. Oqsaroy va Dorussaodat majmuasi qurilgan. Shahar atrofi qalʼa devori bilanoʻrabolingan. Ispaniya elchisi Klavixo oʻz qundaligida shahrida koʻplab mahobatli binolar va masjidlar borligini va qurilayotganligini taʼkidlaydi. Keyinroq ham koʻplab meʼmoriy obidalar (Dor uttilovat majmuasi, Koʻk gumbaz masjidi va boshqalar) qurildi. Hofizi Abru shaharda koʻhna devor (bandi qadim) boʻlganligi, biroq u 15-asr boshlarida buzilib ketganligini ham yozadi. Oʻsha paytda Shahrisabz shahrining 4 darvozasi: Ark (shim.), Kunchiqar (sharqiy), Kushxona (gʻarbiy), Termiz (jan.) darvozalari boʻlgan.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Yakkabog' tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Yakkabog%27_tumani.png/1200px-Yakkabog%27_tumani.png" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Yakkabogʻ tumani</b> — Qashqadaryo viloyatidagi tuman. 1926-yil 29-sentyabrda tashkil etilgan. Yakkabogʻ tumani turli yillarda Shahrisabz, Chiroqchi, Qamish tumanlariga qoʻshilgan. Keyin yana ajratilgan. Shimoldan Chiroqchi, Shahrisabz, sharq, gʻarb va janubdan Qamashi tumanlari bilan chegaradosh. Maydoni 1,3 ming km2. Aholisi 204,9 ming kishi (2011). Tumanda 1 shahar (Yakkabogʻ), 2 shaharcha (Eski Yakkabogʻ, Mevazor), 9 qishloq fuqarolari yigʻini (Samoq, Sandal, Xiyobon, Chaydari, Esat, Oʻrta, Qayragʻoch, Qishlik, Qoʻshchinor) bor. Tuman markazi – Yakkabogʻ shahri.
            <br />&nbsp;&nbsp;Yakkabogʻ tumani Qashqadaryo viloyatining sharqiy qismida joylashgan. Hududining sharqiy chekka qismlarida Hisor tizmasining, balandligi 2500 m gacha boʻlgan, janubi-gʻarbiy tarmoqlari (Chaqchar, Beshnov, Xontaxta) bor. Bu togʻlar gʻarbga tomon pasayib, Qashqadaryo tekisliklari bilan qoʻshilib ketadi. Togʻ etaklari adirlardan iborat. Togʻlardan koʻp daryo va soylar oqib tushadi. Asosiy daryosi – Yakkabogʻdaryo (Qizildaryo) va uning irmoqlari (Choʻyanlisoy, Tirnasoy). Iqlimi kontinental. Yanvarning oʻrtacha harorati –1 °C, eng past harorat –25 °C. Iyulning oʻrtacha harorati 28,5 °C, eng yuqori harorat 44 °C. Yillik oʻrtacha harorat 15 °C. Tumanning oʻziga xos relyefi (gʻarbga tomon pasayib borishi) hududga bahorikor dehqonchilik uchun yetarli nam tushishiga sharoit yaratgan. 
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Qamashi tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://aniq.uz/photos/news/5JFWZsKtofHFgRy.jpeg" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Qamashi tumani</b> — Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi tuman, 1937 yil 29 sentyabrda tashkil etilgan. 1962 yil 24 dekabrda Qarshi tumaniga qoʻshilgan. 1964 yil 31 dekabrda yana qaytadan tashkil etilgan. Shimoliy dan Chiroqchi, Yakkabog, Shahrisabz tumanlari, gʻarbdan Koson tumani, janubiy dan Gʻuzor, Dehqonobod tumanlari, sharqdan Surxondaryo viloyatining Boysun tumani bilan chegaradosh. Maydoni 2,66 ming km2. Aholisi 191,4 ming kishi (2005). Tumanda 11 qishloq fuqarolari yigʻini (Yortepa, Jonbuzsoy, Koʻkbuloq, Laylaksoy, Oqravot, Toʻqboy, Chim, Qamay, Qiziltepa, Korabogʻ, Qoratepa), 41 ta mahalla fuqarolar yigʻini bor. Markazi — Qamashi shahri.
            <br />&nbsp;&nbsp;Tuman hududi gʻarbdan sharqqa 150 km, shimolidan janubiy ga 40–45 km ga choʻzilgan. Hududining gʻarbiy qismi relyefi, asosan, tekislikdan iborat. Umumiy maydonining ‘/4qismini Qarshi dashti egallagan. Tuman relyefi sharqqa tomon koʻtarila boradi, tekisliklar, qiradirlar, soʻngra past va balandroq togʻlar almashinib keladi. Hisor tizmasining janubi-gʻarbiy tarmoqdaridan boʻlgan Chaqchar togʻi viloyatdagi eng baland togʻ boʻlib (Katta Xuroson, asli Katta Xarsang choʻqqisi, 3749 m), Qashqadaryo havzasini Surxondaryo havzasidan ajratib turadi. Tumanda qazilma boyliklardan — turli xil qurilish materiallari mavjud. Qashqadaryo (tumanning eng gʻarbiy tekislik qismida 30 km masofada oqib oʻtadi) va uning irmogʻi Langar asosiy suv manbalaridir.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Nishon tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Nishon_tumani.png" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Nishon tumani</b> - Qashqadaryo viloyatidagi tuman. 1975 yil 6 martda tashkil etilgan. Janubida Turkmaniston, shimolida viloyatning Qarshi, sharqda Gʻuzor, gʻarbda Kasbi tumanlari bilan chega-radosh. Maydoni 2,1 ming km². Aholisi 112,5 ming kishi (2003). Nishon tumanida 2 shahar (Tallimarjon va Yangi Nishon), 1 shaharcha (Nuriston), 8 qishloq fuqarolar yigʻini (Balxiyak, Nishon, Navroʻz, Oydin, Oqoltin, Paxtazor, Qirkdu-loch, Shirinobod) bor. Tuman markazi — Yangi Nishon shahri
            <br />&nbsp;&nbsp;Tuman hududi Qashqadaryo vohasining janubida, Qarshi choʻlida joylashgan. Hududining asosiy qismi choʻl, qir hamda adirlardan iborat. Bu yerda Nishon, Gulbodom, Gʻovur, Kaptarli, Oydin kabi choʻl va yaylovlar mavjud. Iqlimi keskin kontinental. Yillik oʻrtacha temperatura 14,8°. Yanvarning oʻrtacha temperaturasi 0,2°, eng past temperatura —15°, iyulniki 28,8°, eng yuqori temperatura 45°. Vegetatsiya davri 230 kun. Oktabr oyining oxirlari va noyabr oyining boshlaridan havo soviydi va namgarchilik boshlanadi. Yillik yogʻin 180–220 mm. Tuman hududidan Qarshi magistral kanali oʻtgan. Tallimarjon suv ombori bor. Tuprogʻi asosan, boʻz tuproq.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Muborak tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://www.gazeta.uz/media/img/2017/09/0WcDVI15060174967698_b.jpg" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Muborak tumani</b> - Oʻzbekiston Respublikasining Qashqadaryo viloyatitsat tuman. 1978 yil 13 sentabrda tashkil etilgan. Gʻarbda Buxoro viloyati, shimolida Navoiy va Samarqand viloyatlari, sharqda viloyatning Koson tumani, janubida Kasbi va Mirishkor tumanlari bilan chegaradosh. Maydoni 3,07 ming km². Aholisi 62 ming kishiga yaqin (2003). Tumanda 4 qishloq fuqarolar yigʻini (Muborak, Sariq, Qarluk, Qoraqum), 1 shahar (Muborak) bor. Tuman markazi — Muborak shahri
            <br />&nbsp;&nbsp;Qarshi nomining kelib chiqishi toʻgrisida turli fikr va taxminlar mavjud. V. V. Bartold shaharning nomi moʻgʻul xoni Kepakxon qurdirgan Qarshi (qadimiy turkiychada saroy maʼnosini anglatgan) bilan bogʻliq deb taʼkidlaydi. Qutadgʻu bilig (Saodatga eltuvchi bilim) dostonida Qarshi atamasi saroy va qarama-qarshi turish maʼnosida qoʻllangan. Boburnomada ham bu nom moʻgʻul tilidan olinganligi taʼkidlangan. Keltirilgan taxminlarda atamaning qarshi — saroy, qasr maʼnolari koʻproq qoʻllanadi.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Mirishkor tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkobZskr6bX_ZkDSVIgo-nQTJPStbHOPsIwQ&usqp=CAU" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Mirishkor tumani</b> — Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi tuman. 2003-yil 6-yanvarida Usmon Yusupov va Bahoriston tumanlarining birlashtirilishi natijasida tashkil etilgan. Mirishkor tumani Qashqadaryo viloyatining janubi-gʻarbida joylashgan. Tuman shimoldan Muborak, sharqdan Kasbi, Qarshi, Nishon tumanlari, gʻarbdan Buxoro viloyatining Olot va Qorakoʻl tumanlari, janubdan Turkmanistonning Lebap viloyati bilan chegaradosh. Mirishkor tumanida 12 fuqarolar yigʻini (Avazchoʻl, Vori, Guliston. Gulshanbogʻ, Jeynov, Mirishkor, Navbahor, Obod, Pomuq, Chamanzor, Chandir, Yangiobod) bor. Maydoni 3,1 ming km2. Mirishkor tumani hududi jihatidan Qashqadaryo viloyatida birinchi oʻrinda turadi. Aholisi 119,150 kishi (2020-yil 1-yanvar). Eng yirik aholi punti -Jeynov shaharchasi (26,4 ming kishi) Tuman markazi - Yangi Mirishkor qishlogʻi. Aholisi, asosan, oʻzbeklar, shuningdek, arab, turkman, tojik, rus va boshqa millat vakillari ham yashaydi. Aholi zichligi 1 kmʼ ga oʻrtacha 28,1 kishi (2005).
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Koson tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://storage.kun.uz/source/4/AYPyPHqBAFwcqn2P4AzS2d_TPsmhVvmE.jpg" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Koson tumani</b> - Oʻzbekiston Respublikasining Qashqadaryo viloyatida joylashgan tuman. 1926 yil 29 sentabr da tashqil etilgan. Samarqand viloyati, Muborak, Qarshi, Kasbi tumanlari bilan chegaradosh. Maydoni 1,88 ming km². Aholisi 197,1 ming kishi (2003). Koson tumanida 1 shahar (Koson) va 9 qishloq fuqarolari yigʻini (Boʻlmas, Guvalak, Gulbogʻ, Doʻstlik, Koson, Obidida, Olachabob, Poʻloti, Tinchlik) bor (2003). Markazi — Koson shahri
            <br />&nbsp;&nbsp;Koson tumani hududi asosan, pasttekislik, adir va qir-choʻllardan iborat boʻlib, Qashqadaryoning quyi qismida, Qarshi choʻli zonasida, 450–500 m balandlikda joylashgan. Iqlimi kontinental iqlim. Iyulning oʻrtacha temperaturasi 35-40°, yanvarniki 0 dan 1° gacha. Vegetatsiya davri 210—240 kun. Oʻrtacha yillik yogʻin 190–200 mm, asosan, bahor va qish oylarida toʻshadi. Orografik toʻsiklar yoʻkligi sababli sovuq havo oqimlari, asosan, qish oylarida Shimoli-sharq tomondan kirib keladi. Qashqadaryo Koson tumani bilan Kasbi tumani chegarasidan, Qarshi magistral kanali tuman hududidan oqib oʻtadi. Tuprogʻi och tusli boʻz va boʻz tuproq, shuningdek, taqir, shoʻrxok, qumoq tuproqlar ham mavjud. Bu tuproklar aralash uchraydi. Oʻsimliklardan shoʻra, shuvoq, qora shoʻra, yulgʻun, saksovul, isiriq, oq chitir, qizilmiya, oqbosh oʻsadi. Yovvoyi hayvonlardan tulki, quyon, tipratikan, toshbaqa, kaltakesak, echkemar, qum boʻgʻma iloni, chipor ilon bor. Qushlardan burgut, chumchuq, musicha, soʻfitoʻrgʻay, kaptar, mayna uchraydi. Hasharotlardan chayon, biy, qoraqurt bor.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Kitob tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://storage.kun.uz/source/5/oTLKOcOuxxJIT8s0988yWJa5bzeDhqKS.jpg" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Kitob tumani</b> - Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi tuman. Viloyatning shimoli-sharqida. 1926 yil sentabrda tashkil etilgan. 1962 yil 24 dekabrda Shahrisabz tumani bilan birlashtirilgan. 1968 yil 25 dekabrda qayta toʻzildi. Viloyatning Chiroqchi, Shahrisabz tumanlari, Samarqand viloyati va Tojikiston bilan chegaradosh. Maydoni 1,75 ming km². Aholisi 178,9 ming kishi (2000). Kitob tumanida 1 shahar (Kitob) va 12 ta qishloq fuqarolari yigʻini (Bektemir, Beshterak, Bogʻbon, Makrid, Palandara, Paxtaobod, Sivaz, Toʻpchoq, Qaynarbuloq, Katorbogʻ, Quynoqboy, Jilisuv) bor (2000). Markazi — Kitob shahri Tuman hududidan Katta Oʻzbekiston trakti oʻtgan. Taxtaqoracha dovoni (balandligi 1788 m) esa respublika janubini shimoliy viloyatlar bilan bogʻlaydi.
            <br />&nbsp;&nbsp;Hududining katta qismini shimoliy va sharqiy chegaralar boʻylab choʻzilgan baland Hisor va Zarafshon togʻlari (4000 m) egallagan. Baland togʻlar tuman hududini sovuq havo oqimidan toʻsib turgani uchun tuman iqlimi viloyatda eng moʻʼtadil. Oʻrtacha temperatura yanvar da 0,8°, iyulniki 28°. Yiliga oʻrtacha 545 mm yogʻin toʻshadi. Yogʻinning 85% ba-hor va qish fasllariga toʻgʻri keladi. Tuman hududidan Kashqadaryoning irmoqlari — Kichikjar, Oqsuv, Jinnidaryo, Oqsaryo oqib oʻtadi. Tuprogʻi Shahrisabz-Kitob botigʻida tipik boʻz, daryo boʻyida allyuvial boʻz, togʻlarda qoʻngʻir tuproq. Efemer oʻsimliklar hamma joyda uchraydi. Suv boʻylarida qamish, yulgʻun oʻsadi. Togʻ yon bagʻirlarida archa, bodom, doʻlana, olma, tol, yongʻoq, pista, zarang daraxtlari va xilma-xil butalar oʻrmon hosil qilgan. Togʻ yon bagʻirlari chorva mollari uchun yozgi yaylov. Tulki, boʻri, chiyaboʻri, boʻrsiq, ayiq, qobon, togʻ echkisi, arhar; sudraluvchilar; kaklik, chil, bulbul va boshqa yashaydi.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Kasbi tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://www.gazeta.uz/media/img/2018/03/Q1c9cS15211287123247_b.jpg?r=1564040849" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Kasbi tumani</b> – Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi tuman. 1970 yil 16 oktabrda tashkil etilgan. Kasbi tumani viloyatning gʻarbida joylashgan. Qarshi, Koson, Nishon, Muborak, Bahoriston, Usmon Yusupov tumanlari bilan chegaradosh. Maydon 0,65 ming km2. Aholisi 127,6 ming kishi (2000). Kasbi tumanida 12 qishloq fuqarolari yigʻini (Talishbe,Denov, Komilon, Mugʻlon, Toshqoʻrgʻon, Chovqay, Choʻlquvar, Yuksalish, Yangihayot, Qamashi, Katagʻon,Mesit,Maymanoq) bor. Markazi – Mugʻlon qishlogʻi.
            <br />&nbsp;&nbsp;Kasbi tumani Qarshi choʻlida joylashgan. Hududida Maymanoq togʻ tizmasi bor. Iqlimi keskin kontinental. Yozi issiq, quruq va uzok,. Bahor va kuzda yogʻin kam. Qishda qor oz yogʻadi, qattiq sovuq boʻlmaydi. Yanvarning oʻrtacha temperaturasi 0° dan Ggacha, iyulniki 28,2°–31,6°. Yil davomida yogʻingarchilik kunlari 58–60 kundan oshmaydi. T-raning yuqoriligi tufayli bugʻlanish miqdori yiliga yogʻingarchilikka nisbatan oʻn barobar koʻp. Yiliga oʻrtacha 270 mm, ayrim yillari 310–320 mm, qurgʻoqchilik yillari 100 mm yogʻin tushadi. Kasbi tumanining Koson tumani bilan chegarasidan Qashqadaryo oqib oʻtadi. Tuprogʻi, asosan, boʻz tuproq. Baʼzi joylarda shoʻrlangan. Yaylovlarda shuvoq, isiriq, yantoq, jingak, karrak, tuyaqorin, qamish,.yulgʻun va b. oʻsadi. Yovvoyi hayvonlardan quyon, tulki, boʻri, chiyaboʻri, yumronqoziq, turli xil ilonlar, toshbaqa, kaltakesaklar, kushlardan yovvoyi oʻrdak bor.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>G'uzor tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://www.gazeta.uz/media/img/2019/11/vqWchC15734653809108_b.jpg" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Gʻuzor tumani</b> - Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi tuman. 1926-yil 29-sentabrda tashkil etilgan. Shimolidan Qamashi, Chiroqchi, sharqdan Dehqonobod, gʻarbdan Qarshi va Nishon tumanlari, janubida 25 km masofada Turkmaniston bilan chegaradosh. Maydoni 2,62 ming km2. Aholisi 147 ming kishi (2005). Tumanda I shahar (Gʻuzor), 12 qishloq fuqarolari yigʻini (Boʻston, Batosh, Gulshan, Xalqo-bod, Shakarbuloq, Qorapul, Pachka-mar, Zarbdor, Sherali, Mehnato-bod, Qoʻshtepa, Gu-liston) bor. Markazi — Gʻuzor shahri.
            <br />&nbsp;&nbsp;Gʻuzor tumani Qashqadaryo viloyatining janubi-sharqida, Qashqadaryoning oʻrta oqimida. Gʻuzordaryo havzasi, Gʻuzor adirlari va togʻ oldi qiya tekisliklarida joylashgan. Hisor togʻlarining eng chekka janubi-gʻarbidagi tarmoqlari boʻlgan Langar — qorael togʻlarining oʻrtacha balandligi 800– 850 m. Pachkamar suv ombori sohillaridagi bu past togʻlar Shimoli-sharqdan janubi-gʻarbga yoʻnalgan, yon bagʻirlari yassi boʻlib, mutlaq balandligi 430–750 m boʻlgan Gʻuzor adirlariga tutashib ketgan. Adirlar zamini toʻrtlamchi davr lyossimon jinslari bilan qoplangan, osti shagʻal va konglomerat qatlamlaridan tashkil topgan.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Dehqonobod tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://storage.kun.uz/source/6/J2pYfN0CUBXALIQHFlmGFsgqkRFBJvm5.jpg" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Dehqonobod tumani</b> – Oʻzbekiston Respublikasining Qashqadaryo viloyatida joylashgan boʻlib, 1926 yil 29 sentabr da tashkil etilgan (1962 yil 24 dekabrda Gʻuzor tumani bilan birlashtirilgan. 1971 yil 31 avgustda qayta tuzildi). Dehqonobod tumani viloyatning janubi-sharqida joylashgan. Shim.-gʻarbda Gʻuzor tumani, shimoli-sharqda Qamashi tumani, janubi-sharqda Surxondaryo viloyati, gʻarbda Turkmaniston bilan chegaradosh. Maydoni 4,0 ming km2. Aholisi 100,3 ming kishi (2000). Dehqonobod tumanida 1 ta shaharcha (Qarashina), 14 qishloq fuqarolari yigʻini (Beshqoʻton, Bibiqorasoch, Bozortepa, Boshchorboq, Duob, Qarashina, Obiravon, Oqirtma, Oqrabot, Oqtosh, Oqqishloq, Qizilcha, Qirqquloch, Qoʻrgʻontosh) bor. Markazi – Qarashina shaharchasi.
            <br />&nbsp;&nbsp; Relyefi oʻrtacha balandlikdagi togʻlar (Hisor tizmasining gʻarbiy tarmoqlari – Bobosurxon, Qorasirt), past togʻlar (Oqtosh, Sayfi, Kesik, Usmontov, Tepaqoʻrgʻon) va togʻ oldi qiya tekisliklaridan iborat. Tumanda neft, gaz, osh tuzi (Boybichakon, Govxona), kaliy tuzi (Odamtosh, Tepaqoʻton) va qurilish materi-allari (ohaktosh, shagʻal, gips) mavjud. Iqlimi kontinental iqlim. Yanvarning oʻrtacha temperaturasi – 0,6°, iyulniki 28,4°. Yiliga oʻrtacha 277 mm yogʻin tushadi. Tuman hududidan Gʻuzor daryosining irmoqlari: Katta Oʻradaryo va Kichik Oʻradaryo oqib oʻtadi. Tumanning janubi-gʻarbiy qismida yozda qurib qoladigan Qizilcha va Gajaksoy kabi soylar bor. Pachkamar, Dehqonobod suv omborlari qurilgan. Dehqonobod tumanining togʻli qismida yupqa togʻ-qoʻngʻir tuproq, togʻ oldi va tekislik qismida och boʻz tuproq (baʼzan shoʻrxok va qumoq tuproqlar) uchraydi. Tuman hududida archa, zarang, uchqat oʻsadi. Past togʻ etaklarida pistazorlar bor. Shuvoq, shoʻra, yantoq, efemerlar oʻsadi. Yovvoyi hayvonlardan tuman togʻli qismida qoplon, ayiq, qobon, togʻ echkisi, boʻri, tulki, jayra, sugʻur va b. uchraydi. Kemiruvchilardan kala-mush, sichqon, qushlardan kaklik va b. yashaydi.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Chiroqchi tumani</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className={accordion.accordion}>
            <img className={accordion.image} alt="tuman" src="https://i.ytimg.com/vi/xLJOjvCt5qY/maxresdefault.jpg" />
            <p className={accordion.description}>
            &nbsp;&nbsp;<b>Chiroqchi</b> (kirillcha Чироқчи) — Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi tuman. Hududi 2.8 ming km2. Aholisi 304.5 ming kishi. Shimolda Samarqand viloyatining Nurobod va Pastdargʻom tumanlari, gʻarbda Koson tumani, sharqda Shahrisabz va Yakkabogʻ tumanlari, janubda esa Qamashi, Gʻuzor, va Qarshi tumanlari bilan chegaradosh. Tuman hududida Chimqoʻrgʻon va Qalqama suv omborlari mavjud. Markazi — Chiroqchi shahri. Tumanda 33 ta mahalla va 20 ta qishloq fuqarolar yigʻinlari (Dam, Dodiq, Jar, Koʻkdala, Langar, Mirzatoʻp, Oxunboboyev, Paxtaobod, Torjilgʻa, Oʻymovut, Uyshun, Humo, Chim, Chorvador, Shoʻrquduq, Eski Anhor, Yangi Hayot, Qalqama, Qahramon, Qumdaryo) faoliyat yuritmoqda. Tuman tarkibida shahar tipidagi qishloq ham bor (Koʻkdala).
            <br />&nbsp;&nbsp;Tuman hududi viloyatning shimoliy qismida joylashgan. Relyefi tekis choʻl va qiradirlardan iborat boʻlib, janubiy gʻarbdan shimoliy sharqqa (Qoratepa togʻi) balandlashib boradi. Balandligi tekis choʻl qismida 400– 600 m, adirda 700–900 m va Zarafshon tizmasining davomi boʻlmish Qoratepa togʻida 1200–1500 m. Dursun qishlogʻi yonida tabiiy gaz koni topilgan. Iqlimi keskin kontinental. Yillik oʻrtacha temperatura 14,7°. Yanvarnning oʻrtacha temperaturasi 2,7°, eng past temperatura —20°. Iyulning oʻrtacha temperaturasi 28°, eng yuqori temperatura 45°. Vegetatsiya davri 220—230 kun. Yiliga 368 mm, sharqida 400–500 mm yogʻin tushadi. Tumandagi ekinlar Qashqadaryo, Qumdaryo, Oyoqchidaryo va boshqa kanallardan sugʻoriladi. Tumanning janubida Chimqoʻrgʻon suv ombori bor. Shimoliy togʻli zonada oʻtloqi, tekislik qismida tipik boʻz tuproqlar, och boʻz tuproq, dara vodiylarida oʻtloki botqoq tuproqlar tarqalgan. Yovvoyi oʻsimliklardan rang, qargʻaoyoq, qamish, chitir, karrak, bugʻdoyiq, yantoq, kashkar beda, qoramugʻ, qoʻziquloq, oqquray, tuyaqorin va boshqalar oʻsadi. Yovvoyi hayvonlardan tulki, yumronqoziq, quyon, kalamush, qoʻshoyoq, sichqon, echkemar; qushlardan qirgʻovul, soʻfitoʻrgʻay, chumchuq, chugʻurchiq, zargʻaddoq va boshqalar bor.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordions;
