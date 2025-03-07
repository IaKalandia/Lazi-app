<template>
    <div id="app">
        <!-- Navigation Bar -->
        <nav class="navigation">
            <div class="nav-container">
                <div class="nav-links">
                    <!-- Router links for navigation -->
                    <router-link to="/" custom v-slot="{ navigate }">
                        <button @click="navigate">{{ currentLanguage.home }}</button>
                    </router-link>
                    <router-link to="/about" custom v-slot="{ navigate }">
                        <button @click="navigate">{{ currentLanguage.about }}</button>
                    </router-link>
                    
                    <!-- Navigation buttons for future routes -->
                    <button @click="navigateTo('activities')">{{ currentLanguage.activities }}</button>
                    <button @click="navigateTo('registration')">{{ currentLanguage.registration }}</button>
                    <button @click="navigateTo('contact')">{{ currentLanguage.contact }}</button>
                    
                    <!-- Language toggle button -->
                    <button @click="toggleLanguage" class="language-toggle">
                        {{ isGeorgian ? 'FR' : 'ქართ' }}
                    </button>
                </div>
            </div>
        </nav>

        <!-- Router View - Displays current route component -->
        <router-view :currentLanguage="currentLanguage"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            // Language toggle state
            isGeorgian: true,
            
            // Multilingual content dictionary
            translations: {
                georgian: {
                    // Georgian translations
                    // Navigation items
                    home: 'მთავარი',
                    about: 'ჩვენს შესახებ',
                    activities: 'აქტივობები',
                    registration: 'რეგისტრაცია',
                    contact: 'კონტაქტი',
                    title: 'ქართული კულტურის კერა "ლაზი" პარიზში',
                    subtitle: 'ქართული კულტურის შენარჩუნება და გაზიარება',
                    aboutTitle: 'ქართველთა კულტურის კერა "ლაზი"',
                    aboutSubtitle: 'სივრცე კულტურული ღონისძიებებისა და გაერთიანებისთვის',
                    aboutIntro: '2009 წლის ნოემბერში, პარიზის 18-ე უბანში (რაიონში), შეიქმნა და ჩამოყალიბდა ქართველთა კულტურის კერა « ლაზი »  , რომელიც კულტურული ღონისძიებების, ენის კურსებისა და ხელოვნების ნიმუშების საშუალებით ხელს უწყობს მრავალკულტურულ ურთიერთობებს.',
                    centerTitle: 'ქართველთა კულტურის კერა "ლაზი"',
                    feature1: '• რეგულარულად აწყობს მრავალფეროვან კულტურულ ღონისძიებებს:  კონცერტებს, სპექტაკლებს, გამოფენებს, კონფერენციებსა  და ლიტერატურულ-დისკუსიურ საღამოებს.',
                    feature2: '• სთავაზობს ქართული ენის, ლიტერატურის, ისტორია-გეოგრაფიის, თეატრის, ფანდურის,  ფოლკლორული  სიმღერებისა და ცეკვის კურსებს.',
                    feature3: '•ქმნის ფრანგულ-ქართული ურთიერთობის შესაძლებლობებს და კავშირებს, « ასოციაციების სახლის »  მიერ შექმნილი სპეციალური სივრცეების მეშვეობით.',
                    aboutText1: '2009 წლიდან დღემდე, 30 მოხალისისგან შემდგარი გუნდი, ცენტრის ინიციატივით და დიდი ენთუზიაზმით, აწყობს სხვადასხვა კულტურულ აქტივობებს. მათ შორის 16 მასწავლებელი, რომლებიც ინტენსიურად არიან ჩართულები სკოლის შემეცნებით საკითხებში.',
                    aboutText2: 'ასოციაციის მიზანია არა მხოლოდ საგანმანათლებლო და კულტურული აქტივობების ხელშეწყობა და განვითარება, არამედ შეხვედრების, საერთო ინტერესების გაზიარებისა და შესაძლებლობების შექმნაც.',
                    founderName: "დაჩი ჩაგანავა",
                    founderPosition: "დამფუძნებელი",
                    founderPosition1: "პრეზიდენტი",
                    founderYear: "2009 წლიდან",
                    cofounderName: "ეკა ბოდოკია",
                    cofounderPosition1: "დამფუძნებელი",
                    cofounderPosition2: "ვიცე პრეზიდენტი",
                    cofounderPosition3: "ხელმძღვანელი",
                    cofounderYear: "2009 წლიდან",
                    nanaPName: "ნანა ფალავანდიშვილი",
                    nanaPPosition1: "ქართული ენისა და ლიტერატურის მასწავლებელი",
                    nanaPPosition2: "გენერალური მმართველი",
                    nanaPPosition3: "თანადამფუძნებელი",
                    nanaPYear: "2009 წლიდან",
                    alexandreCName: "ალექსანდრე ჭაუჭიძე",
                    alexandreCPosition1: "კომპოზიტორი",
                    alexandreCPosition2: "მუსიკის მასწავლებელი",
                    alexandreCYear: "2011 წლიდან",
                    irakliOName: "ირაკლი ობოლაძე",
                    irakliOPosition: "ქორეოგრაფი",
                    irakliOYear: "2010 წლიდან",
                    sandroSName: "სანდრო შეროზია",
                    sandroSPosition: "მონტაჟი, ტექნიკური რეჟისორი",
                    sandroSYear: "2009 წლიდან",
                    tsiraKName: "ცირა ქირია",
                    tsiraKPosition1: "ცეკვის ასისტენტი",
                    tsiraKPosition2: "გარდერობის ხელმძღვანელი",
                    tsiraKYear: "2015 წლიდან",
                    nanaKName: "ნანა კაპანაძე-მაისურაძე",
                    nanaKPosition1: "ისტორია-გეოგრაფიის მასწავლებელი",
                    nanaKPosition2: "პროექტების ასისტენტი",
                    nanaKYear: "2011 წლიდან",
                    bekaNName: "ბექა ნონიაშვილი",
                    bekaNPosition: "ქორეოგრაფი",
                    bekaNYear: "2018 წლიდან",
                },
                french: {
                    // French translations
                    // Navigation items
                    home: 'Accueil',
                    about: 'À Propos',
                    activities: 'Activités',
                    registration: 'Inscription',
                    contact: 'Contact',
                    title: 'Centre Culturel Géorgien à Paris',
                    subtitle: 'Préserver et Partager la Culture Géorgienne',
                    aboutTitle: 'Le Centre Culturel Géorgien Lazi',
                    aboutSubtitle: 'Un espace d\'échange et d\'intégration par le biais de la culture',
                    aboutIntro: 'Depuis novembre 2009, nous nous réunissons au cœur du 18ème arrondissement et favorisons par le biais de manifestations culturelles, cours de langue ou expression artistique les liens inter communautaires.',
                    centerTitle: 'Le Centre Culturel Géorgien LAZI',
                    feature1: 'Organise régulièrement de nombreuses manifestations culturelles : expositions, concerts, spectacles, conférences, soirées de débats',
                    feature2: 'Propose des cours de langue, littérature, civilisation géorgienne, théâtre, cours de fandouri, chants polyphoniques et danses',
                    feature3: 'Offre la possibilité d\'échanges franco-géorgien à travers les structures d\'accueil mises à sa disposition par la maison des associations',
                    aboutText1: 'Notre démarche suscite l\'enthousiasme : de 2009 à nos jours, nous avons réuni une équipe de 30 bénévoles pour animer le centre, dont 16 professeurs totalisant plus de 90 heures de cours chaque mois.',
                    aboutText2: 'Nous souhaitons non seulement grâce à la coopération soutenir des activités éducatives et culturelles, mais également créer des occasions de nous rencontrer et partager ensemble nos intérêts communs.',
                    founderName: "Dachi Chaganava",
                    founderPosition: "Fondateur",
                    founderPosition1: "Président",
                    founderYear: "Depuis 2009",
                    cofounderName: "Eka Bodokia",
                    cofounderPosition1: "Fondatrice",
                    cofounderPosition2: "Vice-présidente",
                    cofounderPosition3: "Directrice",
                    cofounderYear: "Depuis 2009",
                    nanaPName: "Nana Palavandishvili",
                    nanaPPosition1: "Professeur de langue et littérature géorgienne",
                    nanaPPosition2: "Directrice générale",
                    nanaPPosition3: "Co-fondatrice",
                    nanaPYear: "Depuis 2009",
                    alexandreCName: "Alexandre Chauchidze",
                    alexandreCPosition1: "Compositeur",
                    alexandreCPosition2: "Professeur de musique",
                    alexandreCYear: "Depuis 2011",
                    irakliOName: "Irakli Oboladze",
                    irakliOPosition: "Chorégraphe",
                    irakliOYear: "Depuis 2010",
                    sandroSName: "Sandro Sherozia",
                    sandroSPosition: "Montage, Directeur technique",
                    sandroSYear: "Depuis 2009",
                    tsiraKName: "Tsira Kiria",
                    tsiraKPosition1: "Assistante de danse",
                    tsiraKPosition2: "Responsable des costumes",
                    tsiraKYear: "Depuis 2015",
                    nanaKName: "Nana Kapanadze-Maisuradze",
                    nanaKPosition1: "Professeur d'histoire-géographie",
                    nanaKPosition2: "Assistante de projets",
                    nanaKYear: "Depuis 2011",
                    bekaNName: "Beka Noniashvili",
                    bekaNPosition: "Chorégraphe",
                    bekaNYear: "Depuis 2018",
                }
            }
        }
    },
    
    // Computed property for current language selection
    computed: {
        currentLanguage() {
            return this.isGeorgian ? this.translations.georgian : this.translations.french
        }
    },
    
    // Methods for navigation and language switching
    methods: {
        navigateTo(section) {
            console.log(`Navigating to ${section}`);
        },
        toggleLanguage() {
            this.isGeorgian = !this.isGeorgian;
        }
    }
}
</script>

<style>
/* Global CSS Variables */
:root {
    --primary-color: #15803d;
    --secondary-color: #166534;
    --text-color: #1f2937;
    --background-color: #f0fdf4;
}

/* Custom font import */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');

/* Global app styles */
#app {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    color: var(--text-color);
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
}

/* Navigation bar styles */
.navigation {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

/* Navigation container layout */
.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Playfair Display', serif;
    color: var(--primary-color);
    letter-spacing: 1px;
}

/* Navigation buttons styling */
.nav-links {
    display: flex;
    gap: 1rem;
}

.navigation button {
    background: transparent;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 0.5rem;
}

.navigation button:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-2px);
}

.hero-section {
    padding: 8rem 2rem 4rem 2rem;
    text-align: center;
}

.hero-section h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle {
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 2rem;
}

.image-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.image-container img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: transform 0.3s ease;
}

.image-container img:hover {
    transform: scale(1.02);
}

/* Responsive design adjustments */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero-section h1 {
        font-size: 2rem;
    }
}

/* Language toggle button specific styles */
.language-toggle {
    background-color: transparent;
    color: black;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 0.5rem;
}

.language-toggle:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}
</style>