import { TattooItem, Artist, FaqItem, Testimonial, PmuGalleryItem, CourseGalleryItem } from './types';

export const TATTOO_PORTFOLIO: TattooItem[] = [
  {
    id: '1',
    title: 'Wikinger-Wolf & Runen',
    style: 'Wikingisch',
    imageUrl: '/images/wikinger-wolf-krieger-runen-tattoo.png',
    description: 'Ein kraftvolles Blackwork-Tattoo, in dem ein Wolf nahtlos mit dem Gesicht eines nordischen Kriegers verschmilzt. Ergänzt durch geometrische Akzente, einen Vegvísir-Kompass und schützende Runen – ein mythologisches Statement aus Stärke und Schutz, präzise auf den Unterarm modelliert.',
    artist: 'Sergey',
    size: 'Unterarm',
    duration: '11 Stunden (2 Sessions)',
    date: '14. Mai 2026'
  },
  {
    id: '2',
    title: 'Wirbelsäulen-Kalligrafie',
    style: 'Calligraphy',
    imageUrl: '/images/wirbelsaeule-kalligrafie-schriftzug-tattoo.png',
    description: 'Filigrane, handgezeichnete Schriftkunst entlang der Wirbelsäule. Ein tiefgründiges Statement: "Live the life you have but fight for the one you want". Hochpräzise Linienführung, die jeder Bewegung des Rückens elegant folgt.',
    artist: 'Sergey',
    size: 'Rücken (Wirbelsäule)',
    duration: '4.5 Stunden',
    date: '28. April 2026'
  },
  {
    id: '3',
    title: 'Geometrischer Hirsch',
    style: 'Blackwork',
    imageUrl: '/images/geometrisches-hirsch-brust-tattoo.png',
    description: 'Ein majestätischer Hirschkopf auf der Brust, eingebettet in feine Geometrie und Mondphasen. Sattes Blackwork trifft auf filigranes Dotwork – für einen dramatischen Tiefen-Effekt, der sich symmetrisch über den Brustkorb spannt.',
    artist: 'Sergey',
    size: 'Brust (groß)',
    duration: '8 Stunden',
    date: '11. Januar 2026'
  },
  {
    id: '4',
    title: 'Lady & Revolver',
    style: 'Realismus',
    imageUrl: '/images/realistisches-frauenportrait-revolver-unterarm-tattoo.png',
    description: 'Black-&-Grey-Realismus vom Feinsten: ein ausdrucksstarkes Frauenporträt, kombiniert mit einem detailliert ausgearbeiteten Revolver. Weiche Schattierungen und kontrastreiche Tiefen verleihen dem Unterarm-Motiv echte Dreidimensionalität.',
    artist: 'Sergey',
    size: 'Unterarm',
    duration: '7 Stunden',
    date: '02. Juni 2026'
  },
  {
    id: '5',
    title: 'One Life One Chance',
    style: 'Lettering',
    imageUrl: '/images/chicano-lettering-one-life-one-chance-tattoo.png',
    description: 'Ausdrucksstarkes Chicano-Lettering "One Life – One Chance", kombiniert mit einem charaktervollen Money-Motiv. Kräftige Schattierungen und saubere Schriftzüge, exakt nach Custom-Stencil auf die Wade übertragen.',
    artist: 'Sergey',
    size: 'Wade',
    duration: '6 Stunden',
    date: '19. Mai 2026'
  },
  {
    id: '6',
    title: 'Fineline Bienen-Duo',
    style: 'Fineline',
    imageUrl: '/images/fineline-bienen-tattoo.png',
    description: 'Zwei hauchzarte Bienen in feinster Single-Needle-Technik. Trotz der kleinen Größe (siehe Münze als Referenz) sind feinste Details und realistische Schattierungen klar erkennbar – filigrane Hautkunst mit Liebe zum Detail.',
    artist: 'Sergey',
    size: '6 x 5 cm',
    duration: '2.5 Stunden',
    date: '10. März 2026'
  },
  {
    id: '7',
    title: 'Vater & Kind Gedenktattoo',
    style: 'Fineline',
    imageUrl: '/images/vater-und-kind-gedenktattoo-silhouette.png',
    description: 'Ein berührendes Erinnerungstattoo: die Silhouette von Vater und Kind, aus der sich Vögel in den Himmel lösen, gerahmt von den Jahreszahlen 1934–2024. Zarte Linien und sanfte Verläufe machen daraus ein stilles, würdevolles Andenken.',
    artist: 'Sergey',
    size: 'Unterarm',
    duration: '4 Stunden',
    date: '05. April 2026'
  },
  {
    id: '8',
    title: 'Ornamentales Mandala',
    style: 'Ornamental',
    imageUrl: '/images/mandala-ornament-unterbrust-tattoo.png',
    description: 'Ein symmetrisches Unterbrust-Mandala mit Lotus, floralen Ranken und feinstem Dotwork. Herabfallende Perlenketten und Punktierungen umspielen die Körperkontur und betonen die natürliche Anatomie auf elegante Weise.',
    artist: 'Sergey',
    size: 'Unterbrust / Sternum',
    duration: '6.5 Stunden',
    date: '22. Februar 2026'
  }
];

export const ARTISTS: Artist[] = [
  {
    id: 'sergej',
    name: 'Sergey',
    role: 'Gründer & Master Artist',
    bio: 'Ich bin Sergey – Tätowierer aus Kamenz & Dresden mit über 20 Jahren Erfahrung. In meinem One-Artist-Studio AmorsNadel zeichne und steche ich jedes Motiv selbst: feine Finelines, kontrastreiches Blackwork, realistische Porträts, Kalligrafie und wikingische Runen. So bekommst du ein individuelles Custom-Tattoo aus einer Hand – präzise, hygienisch und genau auf dich abgestimmt.',
    imageUrl: '/images/tattoo-kuenstler-sergej-amorsnadel.png',
    specialties: ['Finelines', 'Blackwork', 'Kalligrafie (Calligraphy)', 'Realismus & Custom Portrait', 'Wikingische Runen & Mythen'],
    languages: ['Deutsch', 'Englisch', 'Ukrainisch'],
    instagram: '@amors_nadel_'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: '1',
    question: 'Wie vereinbare ich einen Termin bei AmorsNadel?',
    answer: 'Nutze am besten unser interaktives Buchungsformular auf dieser Website. Hier kannst du deinen Wunschstil, die Größe und Platzierung angeben sowie deinen bevorzugten Artist auswählen. Wir melden uns innerhalb von 48 Stunden mit einem konkreten Beratungstermin oder Entwurfsvorschlag bei dir.'
  },
  {
    id: '2',
    question: 'Was muss ich vor meinem Tattoo-Termin beachten?',
    answer: 'Trinke 24 Stunden vorher keinen Alkohol, konsumiere keine Drogen und nimm keine blutverdünnenden Medikamente (wie Aspirin) ein. Frühstücke ausgiebig, trinke ausreichend Wasser und komm gerne in bequemer Kleidung, die leicht Zugang zur zu tätowierenden Körperstelle gewährt.'
  },
  {
    id: '3',
    question: 'Wie funktioniert die Nachpflege (Aftercare)?',
    answer: 'Nach dem Stechen reinigen wir dein Tattoo steril und bringen einen atmungsaktiven Schutzfilm (Second Skin) an, den du 3 bis 5 Tage tragen kannst. Danach wäschst du das Tattoo vorsichtig mit lauwarmem Wasser und pH-neutraler Seife und cremst es 3-mal täglich dünn mit einer speziellen Tattoo-Salbe ein.'
  },
  {
    id: '4',
    question: 'Tätowiert ihr jede Stelle und jeden Entwurf?',
    answer: 'Wir legen allergrößten Wert auf Haltbarkeit und Ästhetik. Manche Körperstellen (wie die Innenseiten der Lippen oder Fußsohlen) tätowieren wir aus Qualitätsgründen nicht. Jeder Entwurf wird von uns individuell gezeichnet — wir kopieren niemals die Arbeiten anderer Künstler.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Peggy Franetzki',
    text: 'Ist super 👌 kann man nur empfehlen. Habe bei Ihm auch schon bissl was machen lassen. Ist wirklich super und mit mega viel Erfahrungen, Vorschlägen usw. 🥰',
    rating: 5,
    date: 'Vor 3 Wochen',
    style: 'Verifizierte Bewertung'
  },
  {
    id: 't2',
    name: 'Viktor Lipin',
    text: 'Ich war schon mehrmals bei ihm, war immer zufrieden und würde ihn weiterempfehlen.',
    rating: 5,
    date: 'Vor 2 Monaten',
    style: 'Verifizierte Bewertung'
  },
  {
    id: 't3',
    name: 'Ivonne Müller',
    text: 'Alles, was ich von ihm gesehen habe, war super. Ich bin wirklich sehr zufrieden mit ihm – und nicht nur ich.',
    rating: 5,
    date: 'Vor 5 Monaten',
    style: 'Verifizierte Bewertung'
  },
  {
    id: 't4',
    name: 'Cindy Gebert',
    text: 'Ich kann nur sagen: Er macht sehr gute Arbeit. Habe bis jetzt alles bei ihm machen lassen und kann mich nicht beschweren.',
    rating: 5,
    date: 'Vor 8 Monaten',
    style: 'Verifizierte Bewertung'
  }
];

export const PMU_GALLERY: PmuGalleryItem[] = [
  // 3x Augenbrauen
  {
    id: 'pmu-1',
    title: 'Powder Brows Schattierung',
    category: 'Augenbrauen',
    imageUrl: '/images/pmu/permanent-makeup-augenbrauen-powder-brows-1.webp',
    alt: 'Sanft schattierte Powder Brows für harmonische Konturen in Dresden',
    subtitle: 'Sanfte Puderschattierung für vollen und natürlichen Ausdruck'
  },
  {
    id: 'pmu-2',
    title: 'Präzise Brauen-Definition',
    category: 'Augenbrauen',
    imageUrl: '/images/pmu/permanent-makeup-augenbrauen-haerchenzeichnung-2.webp',
    alt: 'Natürliche Augenbrauen Pigmentierung und Formkorrektur bei AmorsNadel',
    subtitle: 'Perfekte Symmetrie & harmonische Brauen-Kontur'
  },
  {
    id: 'pmu-6',
    title: 'Vorher/Nachher Transformation',
    category: 'Augenbrauen',
    imageUrl: '/images/pmu/permanent-makeup-vorher-nachher-dresden-1.webp',
    alt: 'Permanent Make-up Vorher Nachher Ergebnis für Augenbrauen und Lippen',
    subtitle: 'Harmonisches Gesamtbild & typgerechte Formkorrektur'
  },
  // 3x Augenlider
  {
    id: 'pmu-3',
    title: 'Eyeliner mit Schattierung',
    category: 'Augenlider',
    imageUrl: '/images/pmu/permanent-makeup-eyeliner-schattiert-dresden-1.webp',
    alt: 'Eyeliner Permanent Make-up mit weicher Schattierung am Lidrand',
    subtitle: 'Sanft schattierter Lidstrich & definierter Wimpernkranz'
  },
  {
    id: 'pmu-4',
    title: 'Feiner Winged Eyeliner',
    category: 'Augenlider',
    imageUrl: '/images/pmu/permanent-makeup-eyeliner-winged-dresden-2.webp',
    alt: 'Feiner Lidstrich Permanent Make-up für strahlende Augen',
    subtitle: 'Präzise geschwungener Lidstrich für strahlenden Blick'
  },
  {
    id: 'pmu-5',
    title: 'Wimpernkranzverdichtung',
    category: 'Augenlider',
    imageUrl: '/images/pmu/permanent-makeup-eyeliner-wimpernkranz-dresden-3.webp',
    alt: 'Dezente Wimpernkranzverdichtung Permanent Make Up für optisch dichtere Wimpern',
    subtitle: 'Dezente Schattierung am Wimpernansatz für ausdrucksstarke Augen'
  },
  // 3x Lippen
  {
    id: 'pmu-7',
    title: 'Aquarell Lips Vorher/Nachher',
    category: 'Lippen',
    imageUrl: '/images/pmu/permanent-makeup-lippen-vorher-nachher-dresden-1.webp',
    alt: 'Aquarell Lippen Permanent Make-up Vorher Nachher Vergleich Dresden',
    subtitle: 'Natürliche Auffrischung der Lippenfarbe und sanfte Kontur'
  },
  {
    id: 'pmu-8',
    title: 'Aquarell Lips Schattierung',
    category: 'Lippen',
    imageUrl: '/images/pmu/permanent-makeup-lippen-aquarell-lips-dresden-2.webp',
    alt: 'Natürliche Lippenpigmentierung Aquarell Lips mit sanftem Glanz',
    subtitle: 'Gleichmäßige Farbverläufe & seidiger Glanz'
  },
  {
    id: 'pmu-9',
    title: 'Lippen-Kontur & Vollschattierung',
    category: 'Lippen',
    imageUrl: '/images/pmu/permanent-makeup-lippen-kontur-vollschattierung-dresden-3.webp',
    alt: 'Lippenkontur und Vollschattierung Permanent Make-up Vorher Nachher',
    subtitle: 'Makellose Symmetrie & dauerhaft frisches Volumen'
  }
];

export const TATTOO_COURSE_GALLERY: CourseGalleryItem[] = [
  {
    id: 'kurs-4',
    title: '1-zu-1 Coaching im Studio-Atelier',
    category: 'Atelier',
    imageUrl: '/images/kurse/tattoo-studio-ausbildung-amorsnadel-dresden-4.webp',
    alt: 'Tattoo Studio Ausbildung AmorsNadel Academy Dresden',
    subtitle: 'Authentische Studioatmosphäre & professionelles Equipment'
  },
  {
    id: 'kurs-2',
    title: 'Aufbau & Vorbereitung des Arbeitsplatzes',
    category: 'Hygiene',
    imageUrl: '/images/kurse/tattoo-kurs-schulung-arbeitsplatz-dresden-2.webp',
    alt: 'Professionelle Arbeitsplatzvorbereitung und Hygiene im Tattoo Kurs Dresden',
    subtitle: 'Steriles Arbeiten nach Studio-Standard'
  },
  {
    id: 'kurs-1',
    title: 'Praktisches Üben an der Tattoo-Station',
    category: 'Praxis',
    imageUrl: '/images/kurse/tattoo-ausbildung-praxis-uebung-dresden-1.webp',
    alt: 'Tattoo Ausbildung Praxis und Linienführung in Dresden',
    subtitle: 'Fokus auf präzises Handling & ergonomische Haltung'
  },
  {
    id: 'kurs-3',
    title: 'Intensive Betreuung auf Kunsthaut',
    category: 'Schulung',
    imageUrl: '/images/kurse/tattoo-academy-kunsthaut-ausbildung-dresden-3.webp',
    alt: 'Tattoo Academy AmorsNadel Üben auf Kunsthaut in Dresden',
    subtitle: 'Schritt-für-Schritt-Anleitung durch erfahrene Dozenten'
  }
];
