export type Language = 'en' | 'so';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      ritual: 'The Ritual',
      sanctuary: 'The Sanctuary',
      gallery: 'Gallery',
      reserve: 'Reserve',
    },
    footer: {
      tagline: 'Precision Crafted. Timeless Style. The Ritual of Self-Respect.',
      explore: 'Explore',
      contact: 'Contact',
      rights: 'Morla Barbershop. All rights reserved.',
    },
    home: {
      heroTitle1: 'Precision Crafted.',
      heroTitle2: 'Timeless Style.',
      heroSubtitle: 'The Ritual of Self-Respect.',
      reserveBtn: 'Reserve Your Time',
      philosophyTag: 'The Philosophy',
      philosophyText: 'Morla bridges the golden age of barbering with modern minimalism, offering a space to pause, refine, and proceed with quiet confidence.',
      exploreSanctuary: 'Explore The Sanctuary',
      pillars: {
        precision: { title: 'Precision', desc: 'Uncompromising attention to detail in every cut, fade, and line.' },
        heritage: { title: 'Heritage', desc: 'Rooted in classic techniques, elevated for the modern gentleman.' },
        authenticity: { title: 'Authenticity', desc: 'Honest craftsmanship without the unnecessary noise.' },
        hospitality: { title: 'Hospitality', desc: 'A restorative experience from the moment you cross the threshold.' }
      },
      barbersTag: 'The Artisans',
      barbersTitle: 'Master Barbers.',
      barbers: [
        {
          name: 'Elias Thorne',
          role: 'Master Barber & Founder',
          bio: 'With over 15 years of experience across London and New York, Elias brings unparalleled precision to classic scissor work and modern fading.',
          specialties: 'Executive Scissor Cuts, The Signature Fade'
        },
        {
          name: 'Marcus Vance',
          role: 'Senior Barber',
          bio: 'A specialist in beard architecture and straight razor techniques, Marcus elevates grooming to an art form with meticulous attention to detail.',
          specialties: 'Beard Architecture, Hot Towel Shaves'
        },
        {
          name: 'Julian Reyes',
          role: 'Style Director',
          bio: 'Julian blends contemporary trends with timeless foundations, ensuring every client leaves with a look that is both modern and enduring.',
          specialties: 'Modern Textures, Precision Fades'
        }
      ],
      lookbookTag: 'The Lookbook',
      lookbookTitle: 'Our Craft.',
      viewGallery: 'View Full Gallery',
      closingTitle1: 'Your time is a luxury.',
      closingTitle2: 'Spend it where the details matter.',
    },
    ritual: {
      heroTitle1: 'Uncompromising',
      heroTitle2: 'Precision.',
      heroSubtitle: "Specialized mastery in men's fading and beard architecture.",
      bookBtn: 'Book an Appointment',
      process: {
        consultation: { title: '01. Consultation', desc: 'Every ritual begins with a conversation. We analyze your hair growth, head shape, and personal style to craft a tailored approach.' },
        execution: { title: '02. Execution', desc: 'Precision cutting techniques combining traditional shear work and modern fading, executed with uncompromising attention to detail.' },
        refinement: { title: '03. Refinement', desc: 'The finishing touches. Hot lather, straight razor neck shaves, and premium styling products to ensure you leave immaculate.' }
      },
      menuTag: 'The Menu',
      menuSubtitle: 'Tactile touchpoints of the physical service.',
      services: {
        fade: { title: 'The Signature Fade', desc: 'A meticulous taper or skin fade, finished with a straight razor neck shave and hot towel.', longDesc: 'Our Signature Fade is more than just a haircut; it is a precision-engineered experience. We start with a thorough consultation to understand your head shape and desired style. Using a combination of clippers and shears, we create a seamless blend that grows out perfectly. The service concludes with a hot towel treatment and a straight razor neck shave for the ultimate clean finish.' },
        scissor: { title: 'Executive Scissor Cut', desc: 'Classic shear work tailored to your head shape and hair texture. Includes a wash and style.', longDesc: 'Designed for medium to longer lengths, the Executive Scissor Cut relies entirely on traditional shear work. This technique allows for a more natural flow and texture, tailored specifically to your hair type and growth patterns. The service includes a relaxing scalp massage, wash, and professional styling using premium products.' },
        beard: { title: 'Beard Architecture', desc: 'Sculpting, lining, and fading the beard. Finished with premium oils and a hot towel treatment.', longDesc: 'Your beard is a statement. Our Beard Architecture service focuses on sculpting the ideal shape to complement your facial structure. We meticulously line the edges, fade the sideburns into the hairline, and trim the bulk. The experience is elevated with a hot towel, premium beard oils, and a straight razor finish on the cheeks and neck.' },
        full: { title: 'The Full Ritual', desc: 'The Signature Fade paired with Beard Architecture. The ultimate refinement experience.', longDesc: 'The Full Ritual is our most comprehensive service, combining the precision of The Signature Fade with the sculpting of our Beard Architecture. This 75-minute session is designed for total relaxation and complete aesthetic refinement. Expect multiple hot towels, premium grooming products, and unparalleled attention to detail.' },
        shave: { title: 'Hot Towel Shave', desc: 'Traditional straight razor shave with pre-shave oil, hot lather, and a cold towel finish.', longDesc: 'Experience the lost art of the traditional straight razor shave. We begin by preparing the skin with a hot towel and pre-shave oil to soften the hair and open the pores. A rich, warm lather is applied before the meticulous straight razor shave. We finish with a cold towel to close the pores and a soothing aftershave balm.' },
        lineup: { title: 'Line Up & Refine', desc: 'Crisp edges around the hairline and beard. Perfect for between full services.', longDesc: 'Keep your look sharp between full appointments. The Line Up & Refine service focuses purely on the perimeter—creating crisp, clean lines around the hairline, neck, and beard using trimmers and a straight razor. It is a quick, 20-minute refresh to maintain your edge.' }
      },
      patronTitle: "The Patron's Circle",
      patronSubtitle: 'An exclusive, invite-only tier for our most dedicated clients.',
      patronItems: [
        'Priority booking access and automated refinement follow-ups.',
        'Complimentary beverage upgrades (aged spirits & espresso).',
        'Exclusive access to after-hours appointments.',
        'Annual complimentary Full Ritual service.'
      ],
      inquireBtn: 'Inquire About Membership',
      bookThisService: 'Book This Service',
    },
    sanctuary: {
      heroTitle1: 'A Restorative Sanctuary',
      heroTitle2: 'Away From City Noise.',
      heroSubtitle: 'Aged Cognac leather, brushed brass, and obsidian canvas.',
      sensoryTag: 'The Sensory Signature',
      sensoryTitle1: 'Quiet Luxury Over',
      sensoryTitle2: 'Hyper-Masculinity.',
      sensoryDesc: 'We reject the loud, chaotic environment of traditional barbershops. Morla is designed as a retreat—a place to decompress and recalibrate.',
      sensoryItems: {
        sandalwood: { title: 'Sandalwood', desc: 'A grounding, woody base that anchors the space in calm.' },
        bergamot: { title: 'Bergamot', desc: 'A crisp, citrus top note that invigorates the senses upon entry.' },
        pepper: { title: 'Black Pepper', desc: 'A subtle, spicy warmth that lingers in the hot towels.' }
      },
      philosophyTag: 'The Philosophy',
      philosophyTitle1: 'The Knowledgeable Artisan',
      philosophyTitle2: '& The Discerning Patron.',
      philosophyDesc: 'A haircut is not a transaction; it is a collaboration. We provide the expertise, the tools, and the environment. You bring the vision. Together, we craft a look that is undeniably yours.',
      experienceBtn: 'Experience Morla'
    },
    gallery: {
      title: 'The Gallery.',
      subtitle: 'A visual testament to our craft. Precision, style, and the art of the ritual.',
      images: {
        fade: 'Precision Fade',
        shave: 'Hot Towel Shave',
        beard: 'Beard Trim',
        interior: 'Shop Interior',
        scissor: 'Scissor Cut',
        styling: 'Styling',
        tools: 'Tools of the Trade',
        ritual: 'The Ritual',
        details: 'Details'
      }
    },
    calendar: {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    },
    reserve: {
      title: 'Reserve Your Time.',
      subtitle: 'Select a service, date, and time to secure your appointment.',
      step1: '1. Select Service',
      step2: '2. Select Date & Time',
      step3: '3. Your Details',
      edit: 'Edit',
      summary: 'Reservation Summary',
      service: 'Service',
      price: 'Price',
      date: 'Date',
      time: 'Time',
      at: 'at',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      confirmBtn: 'Confirm Reservation',
      openingWhatsApp: 'Opening WhatsApp...',
      location: 'The Location',
      hours: 'Hours of Operation',
      monFri: 'Monday - Friday',
      sat: 'Saturday',
      sun: 'Sunday',
      closed: 'Closed',
      services: {
        signatureFade: 'The Signature Fade',
        executiveScissor: 'Executive Scissor Cut',
        beardArchitecture: 'Beard Architecture',
        fullRitual: 'The Full Ritual',
        hotTowelShave: 'Hot Towel Shave',
      }
    },
    success: {
      title1: 'Reservation',
      title2: 'Confirmed.',
      subtitle: 'Your appointment has been successfully secured.',
      detailsTitle: 'Appointment Details',
      service: 'Service',
      date: 'Date',
      time: 'Time',
      returnBtn: 'Return to Home'
    }
  },
  so: {
    nav: {
      home: 'Guriga',
      ritual: 'Adeegyada',
      sanctuary: 'Goobta',
      gallery: 'Sawirada',
      reserve: 'Booqasho',
    },
    footer: {
      tagline: 'Farsamo Sax ah. Qaab Casri ah. Xushmadda Naftaada.',
      explore: 'Sahami',
      contact: 'Nala Soo Xiriir',
      rights: 'Morla Barbershop. Dhammaan xuquuqaha way xifdisan yihiin.',
    },
    home: {
      heroTitle1: 'Farsamo Sax ah.',
      heroTitle2: 'Qaab Casri ah.',
      heroSubtitle: 'Xushmadda Naftaada.',
      reserveBtn: 'Qabso Waqtigaaga',
      philosophyTag: 'Falsafadda',
      philosophyText: 'Morla waxay isku xirtaa xilligii dahabiga ahaa ee timo-jarista iyo qaabka casriga ah, iyadoo ku siinaysa goob aad ku nasato, isku qurxiso, si kalsooni lehna ugu baxdo.',
      exploreSanctuary: 'Sahami Goobta',
      pillars: {
        precision: { title: 'Saxsanaan', desc: 'Fiiro gaar ah oo loo yeesho faahfaahin kasta oo ku saabsan jarista iyo qurxinta.' },
        heritage: { title: 'Dhaqan', desc: 'Waxay salka ku haysaa farsamooyinkii hore, balse loo casriyeeyay ninka maanta.' },
        authenticity: { title: 'Dhabnimo', desc: 'Farsamo daacad ah oo aan lahayn buuq aan loo baahnayn.' },
        hospitality: { title: 'Soo Dhaweyn', desc: 'Khibrad nasasho leh laga bilaabo markaad soo gasho.' }
      },
      barbersTag: 'Farsamayaqaanada',
      barbersTitle: 'Timo-jarayaasha Sare.',
      barbers: [
        {
          name: 'Elias Thorne',
          role: 'Timo-jaraha Sare & Aasaasaha',
          bio: 'Isagoo leh khibrad ka badan 15 sano oo uu ku soo qaatay London iyo New York, Elias wuxuu keenaa saxsanaan aan la qiyaasi karin shaqada maqaska dhaqameed iyo makiinada casriga ah.',
          specialties: 'Executive Scissor Cuts, The Signature Fade'
        },
        {
          name: 'Marcus Vance',
          role: 'Timo-jare Sare',
          bio: 'Khabiir ku takhasusay qaabeynta garka iyo farsamooyinka sakiinta, Marcus wuxuu qurxinta u beddelaa farshaxan isagoo fiiro gaar ah u leh faahfaahinta.',
          specialties: 'Beard Architecture, Hot Towel Shaves'
        },
        {
          name: 'Julian Reyes',
          role: 'Agaasimaha Qaabka',
          bio: 'Julian wuxuu isku daraa isbeddellada casriga ah iyo aasaaska waqtiga dheer, isagoo hubinaya in macmiil kasta uu baxo isagoo leh muuqaal casri ah oo waara.',
          specialties: 'Modern Textures, Precision Fades'
        }
      ],
      lookbookTag: 'Sawirada',
      lookbookTitle: 'Farsamadeena.',
      viewGallery: 'Daawo Sawirada oo Dhan',
      closingTitle1: 'Waqtigaagu waa qaali.',
      closingTitle2: 'Geli meelaha faahfaahintu muhiimka tahay.',
    },
    ritual: {
      heroTitle1: 'Saxsanaan',
      heroTitle2: 'Aan Loo Tanaasulin.',
      heroSubtitle: "Khibrad gaar ah oo ku saabsan jarista timaha iyo qaabeynta garka.",
      bookBtn: 'Qabso Ballan',
      process: {
        consultation: { title: '01. Wadatashi', desc: 'Adeeg kasta wuxuu ka bilaabmaa wada-hadal. Waxaan falanqeynaa koritaanka timahaaga, qaabka madaxaaga, iyo qaabka aad jeceshahay si aan kuugu sameyno qaab kugu habboon.' },
        execution: { title: '02. Fulin', desc: 'Farsamooyin jaris oo sax ah oo isku dara maqas dhaqameed iyo makiinad casri ah, oo loo fuliyo si taxaddar leh.' },
        refinement: { title: '03. Dhammeystir', desc: 'Taabashada ugu dambeysa. Xumbo kulul, sakiin, iyo alaab tayo sare leh si aad u baxdo adigoo qurxoon.' }
      },
      menuTag: 'Liiska Adeegyada',
      menuSubtitle: 'Khibradaha dhabta ah ee adeegga.',
      services: {
        fade: { title: 'The Signature Fade', desc: 'Jaris aad u saxan, oo lagu soo gabagabeeyo sakiin iyo shukumaan kulul.', longDesc: 'Signature Fade waa in ka badan timo-jaris; waa khibrad si sax ah loo habeeyay. Waxaan ku bilaabeynaa wadatashi si aan u fahamno qaabka madaxaaga iyo qaabka aad rabto. Waxaan isticmaalnaa makiinad iyo maqas, si aan u abuurno isku-dhaf qumman. Adeeggu wuxuu ku soo dhammaadaa shukumaan kulul iyo sakiin qoorta ah si aad u hesho nadiifnimo buuxda.' },
        scissor: { title: 'Executive Scissor Cut', desc: 'Jaris maqas oo caadi ah oo ku habboon qaabka madaxaaga. Waxaa ku jira dhaqid iyo qaabeyn.', longDesc: 'Waxaa loogu talagalay timaha dhaadheer, Executive Scissor Cut waxay si buuxda ugu tiirsan tahay shaqada maqaska dhaqameed. Farsamadan waxay oggolaaneysaa qulqul dabiici ah, oo si gaar ah loogu habeeyay nooca timahaaga. Adeegga waxaa ku jira duugis madaxa ah, dhaqid, iyo qaabeyn xirfadeed oo la isticmaalayo alaab tayo sare leh.' },
        beard: { title: 'Beard Architecture', desc: 'Qaabeynta iyo jarista garka. Waxaa lagu dhammeeyaa saliid tayo leh iyo shukumaan kulul.', longDesc: 'Garkaagu waa farriin. Adeeggeena Beard Architecture wuxuu diiradda saarayaa qaabeynta garka si uu ugu habboonaado wejigaaga. Waxaan si taxaddar leh u jarnaa geesaha. Khibradda waxaa lagu kordhiyaa shukumaan kulul, saliidaha garka ee tayada sare leh, iyo sakiin dhabannada iyo qoorta ah.' },
        full: { title: 'The Full Ritual', desc: 'The Signature Fade iyo Beard Architecture oo la isku daray. Khibradda ugu dambeysa ee qurxinta.', longDesc: 'The Full Ritual waa adeeggeena ugu dhameystiran, isagoo isku daraya saxsanaanta The Signature Fade iyo qaabeynta Beard Architecture. Kalfadhigan 75-ka daqiiqo ah waxaa loogu talagalay nasasho buuxda iyo qurxin dhameystiran. Filo shukumaano kulul oo dhowr ah, alaabada qurxinta ee tayada sare leh, iyo fiiro gaar ah oo aan la qiyaasi karin.' },
        shave: { title: 'Hot Towel Shave', desc: 'Xiirid sakiin dhaqameed ah oo leh saliid, xumbo kulul, iyo shukumaan qabow.', longDesc: 'Khibrad u yeelo fanka lumay ee xiiridda sakiinta dhaqameed. Waxaan ku bilaabeynaa inaan maqaarka ku diyaarino shukumaan kulul iyo saliid si aan timaha u jilcino. Xumbo diiran ayaa la mariyaa ka hor xiiridda sakiinta. Waxaan ku soo gabagabeyneynaa shukumaan qabow si aan u xirno daloolada iyo kareemka xiiridda kadib.' },
        lineup: { title: 'Line Up & Refine', desc: 'Geeso nadiif ah oo ku wareegsan timaha iyo garka. Waxay ku fiican tahay inta u dhaxeysa adeegyada buuxa.', longDesc: 'Joogtee muuqaalkaaga inta u dhaxeysa ballamaha buuxa. Adeegga Line Up & Refine wuxuu diiradda saarayaa kaliya hareeraha—abuurista xariiqyo nadiif ah oo ku wareegsan timaha, qoorta, iyo garka iyadoo la isticmaalayo makiinad iyo sakiin. Waa 20-daqiiqo oo degdeg ah si aad u ilaaliso muuqaalkaaga.' }
      },
      patronTitle: "The Patron's Circle",
      patronSubtitle: 'Heer gaar ah oo loogu talagalay macaamiisheena ugu daacadsan.',
      patronItems: [
        'Mudnaanta ballamaha iyo dabagalka tooska ah.',
        'Kordhinta cabitaanka bilaashka ah (qaxwaha).',
        'Helitaanka gaarka ah ee ballamaha saacadaha shaqada kadib.',
        'Adeegga Full Ritual oo bilaash ah sanadkiiba mar.'
      ],
      inquireBtn: 'Weydii Xubinnimada',
      bookThisService: 'Qabso Adeeggan',
    },
    sanctuary: {
      heroTitle1: 'Goob Nasasho',
      heroTitle2: 'Oo Ka Fog Buuqa Magaalada.',
      heroSubtitle: 'Maqaar Cognac ah, naxaas la caddeeyay, iyo shiraac madow.',
      sensoryTag: 'Calaamadda Dareenka',
      sensoryTitle1: 'Raaxo Deggan',
      sensoryTitle2: 'Oo Aan Buuq Lahayn.',
      sensoryDesc: 'Waan diidnay jawiga buuqa badan ee timo-jarayaasha dhaqameed. Morla waxaa loo qaabeeyay inay noqoto meel lagu nasto oo lagu dejiyo maskaxda.',
      sensoryItems: {
        sandalwood: { title: 'Sandalwood', desc: 'Saldhig alwaax ah oo goobta ku haya deganaan.' },
        bergamot: { title: 'Bergamot', desc: 'Ur liin ah oo kicisa dareenka markaad soo gasho.' },
        pepper: { title: 'Black Pepper', desc: 'Dugsi yar oo basbaas ah oo ku hara shukumaanada kulul.' }
      },
      philosophyTag: 'Falsafadda',
      philosophyTitle1: 'Farsamayaqaanka Aqoonta Leh',
      philosophyTitle2: '& Macmiilka Fahamka Leh.',
      philosophyDesc: 'Timo-jaristu ma aha uun iibsi; waa wada-shaqeyn. Waxaan bixinaa khibradda, qalabka, iyo deegaanka. Adiguna waxaad keentaa aragtida. Si wadajir ah, waxaan u abuurnaa muuqaal adiga kuu gaar ah.',
      experienceBtn: 'Khibrad U Yeelo Morla'
    },
    gallery: {
      title: 'Sawirada.',
      subtitle: 'Caddayn muuqaal ah oo ku saabsan farsamadeena. Saxsanaan, qaab, iyo fanka adeegga.',
      images: {
        fade: 'Precision Fade',
        shave: 'Hot Towel Shave',
        beard: 'Beard Trim',
        interior: 'Shop Interior',
        scissor: 'Scissor Cut',
        styling: 'Styling',
        tools: 'Tools of the Trade',
        ritual: 'The Ritual',
        details: 'Details'
      }
    },
    calendar: {
      months: ['Janaayo', 'Febraayo', 'Maarso', 'Abriil', 'Maajo', 'Juun', 'Luulyo', 'Agoosto', 'Sebteembar', 'Oktoobar', 'Nofeembar', 'Diseembar'],
      days: ['Ax', 'Is', 'Ta', 'Ar', 'Kh', 'Ji', 'Sa']
    },
    reserve: {
      title: 'Qabso Waqtigaaga.',
      subtitle: 'Dooro adeeg, taariikh, iyo waqti si aad u xaqiijiso ballantaada.',
      step1: '1. Dooro Adeegga',
      step2: '2. Dooro Taariikhda & Waqtiga',
      step3: '3. Macluumaadkaaga',
      edit: 'Beddel',
      summary: 'Soo Koobidda Ballanta',
      service: 'Adeegga',
      price: 'Qiimaha',
      date: 'Taariikhda',
      time: 'Waqtiga',
      at: 'markay tahay',
      fullName: 'Magaca oo Buuxa',
      email: 'Iimaylka',
      phone: 'Telefoonka',
      confirmBtn: 'Xaqiiji Ballanta',
      openingWhatsApp: 'Furaya WhatsApp...',
      location: 'Goobta',
      hours: 'Saacadaha Shaqada',
      monFri: 'Isniin - Jimce',
      sat: 'Sabti',
      sun: 'Axad',
      closed: 'Xiran',
      services: {
        signatureFade: 'The Signature Fade',
        executiveScissor: 'Executive Scissor Cut',
        beardArchitecture: 'Beard Architecture',
        fullRitual: 'The Full Ritual',
        hotTowelShave: 'Hot Towel Shave',
      }
    },
    success: {
      title1: 'Ballanta',
      title2: 'Waa La Xaqiijiyay.',
      subtitle: 'Ballantaada si guul leh ayaa loo xaqiijiyay.',
      detailsTitle: 'Faahfaahinta Ballanta',
      service: 'Adeegga',
      date: 'Taariikhda',
      time: 'Waqtiga',
      returnBtn: 'Ku Noqo Guriga'
    }
  }
};
