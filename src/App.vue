<template>
    <div id="app" :class="{ 'mobile-view': isMobile, 'desktop-view': !isMobile }">
        <!-- Navigation Bar -->
        <nav class="navigation" :class="{ 'mobile-nav': isMobile }">
            <div class="nav-container">
                <!-- Mobile Menu Button -->
                <button v-if="isMobile" 
                        @click="toggleMenu2" 
                        class="menu-button">
                    <span class="menu-icon"></span>
                </button>

                <!-- Navigation Links -->
                <div class="nav-links" :class="{ 'mobile-links': isMobile, 'show': isMenuOpen }">
                    <router-link to="/" custom v-slot="{ navigate }">
                        <button @click="mobileNavigate(navigate)">{{ currentLanguage.home }}</button>
                    </router-link>
                    <router-link to="/about" custom v-slot="{ navigate }">
                        <button @click="mobileNavigate(navigate)">{{ currentLanguage.about }}</button>
                    </router-link>
                    
                    <button @click="mobileNavigate(() => navigateTo('activities'))">
                        {{ currentLanguage.activities }}
                    </button>
                    <button @click="mobileNavigate(() => navigateTo('registration'))">
                        {{ currentLanguage.registration }}
                    </button>
                    <button @click="mobileNavigate(() => navigateTo('contact'))">
                        {{ currentLanguage.contact }}
                    </button>
                </div>

                <!-- Language Toggle -->
                <button @click="toggleLanguage" class="language-toggle">
                    {{ isGeorgian ? 'FR' : 'ქართ' }}
                </button>
            </div>
        </nav>

        <!-- Main Content -->
        <main :class="{ 'mobile-content': isMobile, 'desktop-content': !isMobile }">
            <router-view :currentLanguage="currentLanguage"></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isGeorgian: true,
            isMobile: false,
            isMenuOpen: false,
            translations: {
                georgian: {
                    // Georgian translations
                    // Navigation items
                    home: 'მთავარი',
                    about: 'ჩვენს შესახებ',
                    activities: 'აქტივობები',
                    registration: 'რეგისტრაცია',
                    contact: 'კონტაქტი',
                    title: 'ქართველთა კულტურის კერა "ლაზი" პარიზში',
                    subtitle: 'ქართული კულტურის შენარჩუნება და გაზიარება',
                    aboutTitle: 'ქართველთა კულტურის კერა "ლაზი"',
                    aboutSubtitle: 'სივრცე კულტურული ღონისძიებებისა და გაერთიანებისთვის',
                    aboutIntro: '2009 წლის ნოემბერში, პარიზის 18-ე უბანში (რაიონში), შეიქმნა და ჩამოყალიბდა ქართველთა კულტურის კერა « ლაზი »  , რომელიც კულტურული ღონისძიებების, ენის კურსებისა და ხელოვნების ნიმუშების საშუალებით ხელს უწყობს მრავალკულტურულ ურთიერთობებს.',
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
                    marinaPName: "მარინა ფაშკურიძე",
                    marinaPPosition: "ფრანგული ენის მასწავლებელი",
                    marinaPYear: "2010 წლიდან",
                    anaJName: "ანა ჯღენტი",
                    anaJPosition1: "ლაზის სკოლის კურსდამთავრებული",
                    anaJPosition2: "კომუნიკაცია",
                    anaJYear: "2022 წლიდან",
                    marineSName: "მარინე სივსივა",
                    marineSPosition: "კლასების ასისტენტი",
                    marineSYear: "2022 წლიდან",
                    salomeKName: "სალომე კალანდია",
                    salomeKPosition: "კლასების ასისტენტი",
                    salomeKYear: "2022 წლიდან",
                    giorgiDName: "გიორგი დალაქიშვილი",
                    giorgiDPosition: "ქორეოგრაფი",
                    giorgiDYear: "2024 წლიდან",
                    fabienMName: "ფაბიენ მოღნე",
                    fabienMPosition1: "კოლაბორატორი",
                    fabienMYear1: "2011 წლიდან",
                    fabienMPosition2: "ფანდურის მასწავლებელი",
                    fabienMYear2: "2024 წლიდან",
                    tamarCName: "თამარი ჭაბუკიძე",
                    tamarCPosition: "თეატრალური ხელოვნების ოსტატობა",
                    tamarCYear: "2024 წლიდან",
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
                    marinaPName: "Marina Pashkuridze",
                    marinaPPosition: "Professeur de français",
                    marinaPYear: "Depuis 2010",
                    anaJName: "Ana Jgenti",
                    anaJPosition1: "Ancienne élève de l'école Lazi 2009-2016",
                    anaJPosition2: "Communication",
                    anaJYear: "Depuis 2022",
                    marineSName: "Marine Sivsiva",
                    marineSPosition: "Assistante de classe",
                    marineSYear: "Depuis 2022",
                    salomeKName: "Salome Kalandia",
                    salomeKPosition: "Assistante de classe",
                    salomeKYear: "Depuis 2022",
                    giorgiDName: "Giorgi Dalakishvili",
                    giorgiDPosition: "Chorégraphe",
                    giorgiDYear: "Depuis 2024",
                    fabienMName: "Fabien Morne",
                    fabienMPosition1: "Collaborateur",
                    fabienMYear1: "Depuis 2011",
                    fabienMPosition2: "Professeur de Panduri",
                    fabienMYear2: "Depuis 2024",
                    tamarCName: "Tamari Chabukidze",
                    tamarCPosition: "Maîtrise en art théâtral",
                    tamarCYear: "Depuis 2024",
                }
            },
            showPlatformInfo: true,
            userPlatform: {
                browser: '',
                os: '',
                device: '',
                isMobile: false
            },
            mobileMenuOpen: false
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
        detectMobile() {
            this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        mobileNavigate(navigate) {
            if (this.isMobile) {
                this.isMenuOpen = false;
            }
            if (typeof navigate === 'function') {
                navigate();
            }
        },
        navigateTo(section) {
            console.log(`Navigating to ${section}`);
        },
        toggleLanguage() {
            this.isGeorgian = !this.isGeorgian;
        },
        toggleMobileMenu() {
            if (this.userPlatform.isMobile) {
                this.mobileMenuOpen = !this.mobileMenuOpen;
            }
        },
        detectPlatform() {
            const userAgent = navigator.userAgent.toLowerCase();
            const platform = {
                browser: '',
                os: '',
                device: '',
                isMobile: false
            };

            // More accurate mobile detection
            platform.isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

            // Detect browser
            if (userAgent.includes('firefox')) {
                platform.browser = 'Firefox';
            } else if (userAgent.includes('edg')) {
                platform.browser = 'Edge';
            } else if (userAgent.includes('chrome')) {
                platform.browser = 'Chrome';
            } else if (userAgent.includes('safari')) {
                platform.browser = 'Safari';
            }

            // Detect OS and device
            if (userAgent.includes('iphone')) {
                platform.os = 'iOS';
                platform.device = 'iPhone';
            } else if (userAgent.includes('ipad')) {
                platform.os = 'iOS';
                platform.device = 'iPad';
            } else if (userAgent.includes('android')) {
                platform.os = 'Android';
                platform.device = 'Android Device';
            } else if (userAgent.includes('mac')) {
                platform.os = 'macOS';
                platform.device = 'Desktop';
            } else if (userAgent.includes('windows')) {
                platform.os = 'Windows';
                platform.device = 'Desktop';
            } else if (userAgent.includes('linux')) {
                platform.os = 'Linux';
                platform.device = 'Desktop';
            }

            this.userPlatform = platform;
            console.log('User Platform:', platform);

            // You can also send this data to your analytics or backend
            this.logPlatformData(platform);
        },

        logPlatformData(platform) {
            // You can implement logging or analytics here
            console.log(`
                Browser: ${platform.browser}
                OS: ${platform.os}
                Device: ${platform.device}
                Mobile: ${platform.isMobile}
                User Agent: ${navigator.userAgent}
                Screen Size: ${window.innerWidth}x${window.innerHeight}
                Language: ${navigator.language}
            `);
        }
    },
    watch: {
        // Add watcher for mobile detection
        'userPlatform.isMobile'(newValue) {
            if (!newValue) {
                this.mobileMenuOpen = false;
            }
        }
    },
    mounted() {
        this.detectMobile();
        window.addEventListener('resize', this.detectMobile);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.detectMobile);
    }
}
</script>

<style>
/* Georgian Fonts */
@import url('//cdn.web-fonts.ge/fonts/bpg-dejavu-serif/css/bpg-dejavu-serif.min.css');
@import url('//cdn.web-fonts.ge/fonts/alk-sanet/css/alk-sanet.min.css');
@import url('//cdn.web-fonts.ge/fonts/bpg-nino-mtavruli/css/bpg-nino-mtavruli.min.css');
@import url('//cdn.web-fonts.ge/fonts/alk-life/css/alk-life.min.css');
@import url('//cdn.web-fonts.ge/fonts/alk-tall-nusxuri/css/alk-tall-nusxuri.min.css');
@import url('//cdn.web-fonts.ge/fonts/bpg-mikheil-stefane/css/bpg-mikheil-stefane.min.css');
@import url('//cdn.web-fonts.ge/fonts/bpg-excelsior-caps/css/bpg-excelsior-caps.min.css');

/* Existing imports */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');

:root {
    --primary-color: #15803d;
    --secondary-color: #166534;
    --text-color: #1f2937;
    --background-color: #f0fdf4;
    --georgian-title-font: 'BPG DejaVu Serif', serif;
    --georgian-decorative-font: 'ALK Sanet', serif;
    --georgian-nav-font: 'BPG Nino Mtavruli', serif;
    --georgian-main-title-font: 'BPG Mikheil Stefane', serif;
    --letter-spacing-title: 0.02em;    /* Adjust this value for general letter spacing */
    --word-spacing-title: 0.1em;       /* Space between words */
}

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
    padding: 0.5rem;
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
    font-family: var(--georgian-nav-font);
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

.hero-section h1,
.main-title {
    font-family: 'BPG Mikheil Stefane', serif;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    text-align: center;
    letter-spacing: var(--letter-spacing-title);
    word-spacing: var(--word-spacing-title);
    background: linear-gradient(135deg, 
        var(--primary-color) 0%,
        var(--secondary-color) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-section .subtitle {
    font-family: var(--georgian-decorative-font);
    font-size: 1.5rem;
    color: #64748b;
    margin-bottom: 2rem;
    letter-spacing: 0.01em;
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

/* Main content text */
.content-text {
    font-family: var(--georgian-nav-font);
    font-size: 1.1rem;
    line-height: 1.6;
}

/* Responsive design adjustments */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.3rem;
        padding: 0.3rem;
    }

    .hero-section h1,
    .main-title {
        font-size: 2.5rem;
        padding: 0 1rem;
    }

    .hero-section .subtitle {
        font-size: 1.25rem;
    }

    .navigation button {
        width: auto;
        padding: 0.5rem;
        font-size: 0.9rem;
        margin: 0;
    }

    .language-toggle {
        padding: 0.5rem;
        margin: 0;
    }

    .content-text {
        font-size: 5rem;
    }
}

@media (max-width: 480px) {
    .hero-section h1,
    .main-title {
        font-size: 2rem;
    }
}

/* Navigation bar styles for mobile */
@media (max-width: 768px) {
    .nav-container {
        padding: 0.5rem;
    }

    .nav-links {
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
    }

    .navigation button {
        width: 100%;
        padding: 0.75rem;
        font-size: 1.1rem;
    }

    .language-toggle {
        margin-top: 0.5rem;
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

/* Add a subtle animation when the page loads */
@keyframes titleFadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-section h1 {
    animation: titleFadeIn 1s ease-out forwards;
}

/* Add specific styling for these words */
.special-word {
    letter-spacing: 0.05em;
    display: inline-block;
}

/* Platform info styles */
.platform-info {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 12px;
    z-index: 1000;
}

.platform-info p {
    margin: 5px 0;
}

/* Mobile-specific styles */
.mobile-view {
    padding-top: 60px;
}

.mobile-nav {
    height: 60px;
}

.mobile-nav .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

.mobile-links {
    display: none;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.mobile-links.show {
    display: flex;
}

.mobile-links button {
    width: 100%;
    margin: 0.5rem 0;
    padding: 1rem;
    text-align: left;
}

.menu-button {
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
}

.menu-icon {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--text-color);
    position: relative;
    margin: auto;
}

.menu-icon::before,
.menu-icon::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: var(--text-color);
    left: 0;
}

.menu-icon::before {
    top: -6px;
}

.menu-icon::after {
    bottom: -6px;
}

.mobile-content {
    padding: 1rem;
}

/* Desktop-specific styles */
.desktop-view .nav-links {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

/* Safe area handling for mobile devices */
@supports (padding-top: env(safe-area-inset-top)) {
    .mobile-view {
        padding-top: calc(60px + env(safe-area-inset-top));
        padding-bottom: env(safe-area-inset-bottom);
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .nav-container {
        padding: 0.5rem;
    }

    .mobile-links button {
        font-size: 1.1rem;
    }
}
</style>
