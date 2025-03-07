<template>
    <div class="about">
        <!-- Team Members Grid Section -->
        <section class="team-section">
            <div class="section-content">
                <!-- Team title -->
                <h2 class="team-title">{{ currentLanguage.teamTitle }}</h2>
                
                <!-- Grid container for team member cards -->
                <div class="team-container">
                    <!-- Individual team member card structure (repeated for each member) -->
                    <div class="image-container">
                        <img src="../Photos/Dachi.jpeg" alt="Founder Image">
                        <div class="image-caption">
                            <!-- Multilingual text using currentLanguage prop -->
                            <p class="name">{{ currentLanguage.founderName }}</p>
                            <p class="position">{{ currentLanguage.founderPosition }}</p>
                            <p class="position">{{ currentLanguage.founderPosition1 }}</p>
                            <p class="year">{{ currentLanguage.founderYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Eka-Bodokia.jpeg" alt="Co-founder Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.cofounderName }}</p>
                            <p class="position">{{ currentLanguage.cofounderPosition1 }}</p>
                            <p class="position">{{ currentLanguage.cofounderPosition2 }}</p>
                            <p class="position">{{ currentLanguage.cofounderPosition3 }}</p>
                            <p class="year">{{ currentLanguage.cofounderYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Nana-Palavandishvili.jpeg" alt="Co-founder Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.nanaPName }}</p>
                            <p class="position">{{ currentLanguage.nanaPPosition1 }}</p>
                            <p class="position">{{ currentLanguage.nanaPPosition2 }}</p>
                            <p class="position">{{ currentLanguage.nanaPPosition3 }}</p>
                            <p class="year">{{ currentLanguage.nanaPYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Alexandre-Chauchidze.jpeg" alt="Music Teacher Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.alexandreCName }}</p>
                            <p class="position">{{ currentLanguage.alexandreCPosition1 }}</p>
                            <p class="position">{{ currentLanguage.alexandreCPosition2 }}</p>
                            <p class="year">{{ currentLanguage.alexandreCYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Irakli-Oboladze.jpeg" alt="Team Member Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.irakliOName }}</p>
                            <p class="position">{{ currentLanguage.irakliOPosition }}</p>
                            <p class="year">{{ currentLanguage.irakliOYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Sandro-Sherozia.jpeg" alt="Technical Director Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.sandroSName }}</p>
                            <p class="position">{{ currentLanguage.sandroSPosition }}</p>
                            <p class="year">{{ currentLanguage.sandroSYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Tsira-Kiria.jpeg" alt="Dance Assistant Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.tsiraKName }}</p>
                            <p class="position">{{ currentLanguage.tsiraKPosition1 }}</p>
                            <p class="position">{{ currentLanguage.tsiraKPosition2 }}</p>
                            <p class="year">{{ currentLanguage.tsiraKYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Nana-Kapanadze.jpeg" alt="History Teacher Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.nanaKName }}</p>
                            <p class="position">{{ currentLanguage.nanaKPosition1 }}</p>
                            <p class="position">{{ currentLanguage.nanaKPosition2 }}</p>
                            <p class="year">{{ currentLanguage.nanaKYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Beka-Noniashvili.jpeg" alt="Choreographer Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.bekaNName }}</p>
                            <p class="position">{{ currentLanguage.bekaNPosition }}</p>
                            <p class="year">{{ currentLanguage.bekaNYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Marina-Pashkuridze.jpeg" alt="French Teacher Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.marinaPName }}</p>
                            <p class="position">{{ currentLanguage.marinaPPosition }}</p>
                            <p class="year">{{ currentLanguage.marinaPYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Ana-Jgenti.jpeg" alt="Communication Specialist Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.anaJName }}</p>
                            <p class="position">{{ currentLanguage.anaJPosition1 }}</p>
                            <p class="position">{{ currentLanguage.anaJPosition2 }}</p>
                            <p class="year">{{ currentLanguage.anaJYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Marine-Sivsiva.jpeg" alt="Class Assistant Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.marineSName }}</p>
                            <p class="position">{{ currentLanguage.marineSPosition }}</p>
                            <p class="year">{{ currentLanguage.marineSYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Salome-Kalandia.jpeg" alt="Class Assistant Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.salomeKName }}</p>
                            <p class="position">{{ currentLanguage.salomeKPosition }}</p>
                            <p class="year">{{ currentLanguage.salomeKYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Giorgi-Dalakishvili.jpeg" alt="Choreographer Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.giorgiDName }}</p>
                            <p class="position">{{ currentLanguage.giorgiDPosition }}</p>
                            <p class="year">{{ currentLanguage.giorgiDYear }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Fabien-Morne.jpeg" alt="Collaborator Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.fabienMName }}</p>
                            <p class="position">{{ currentLanguage.fabienMPosition1 }}</p>
                            <p class="year">{{ currentLanguage.fabienMYear1 }}</p>
                            <p class="position">{{ currentLanguage.fabienMPosition2 }}</p>
                            <p class="year">{{ currentLanguage.fabienMYear2 }}</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../Photos/Tamar-Chabukidze.jpeg" alt="Theater Arts Master Image">
                        <div class="image-caption">
                            <p class="name">{{ currentLanguage.tamarCName }}</p>
                            <p class="position">{{ currentLanguage.tamarCPosition }}</p>
                            <p class="year">{{ currentLanguage.tamarCYear }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About School Information Section -->
        <section class="school-section">
            <div class="section-content">
                <!-- School title and subtitle -->
                <div class="header-section">
                <h1 class="main-title">{{ currentLanguage.aboutTitle }}</h1>
                <h2 class="subtitle">{{ currentLanguage.aboutSubtitle }}</h2>
                </div>
                
                <!-- School description and features -->
                <div class="language-section">
                <p class="content-text">{{ currentLanguage.aboutIntro }}</p>
                
                <h3 class="section-title">{{ currentLanguage.centerTitle }}</h3>
                <ul class="feature-list">
                    <li>{{ currentLanguage.feature1 }}</li>
                    <li>{{ currentLanguage.feature2 }}</li>
                    <li>{{ currentLanguage.feature3 }}</li>
                </ul>
                
                <p class="content-text">{{ currentLanguage.aboutText1 }}</p>
                <p class="content-text">{{ currentLanguage.aboutText2 }}</p>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
// Component definition
export default {
    name: 'About',
    // Expect language translations from parent component
    props: {
        currentLanguage: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
/* Main container adjustments */
.about {
    padding-top: 80px; /* Increase top padding to account for nav bar */
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
}

/* Team grid fixes */
.team-container {
    display: grid;
    gap: 20px;
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
}

/* Responsive grid adjustments */
@media (min-width: 1200px) {
    .team-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 1199px) and (min-width: 769px) {
    .team-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) and (min-width: 481px) {
    .team-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .team-container {
        grid-template-columns: repeat(2, 1fr); /* Keep 2 columns even on small phones */
        gap: 10px;
    }

    .image-container {
        width: 100%;
        margin: 0;
        padding: 5px;
    }

    .image-container img {
        width: 100px;  /* Smaller images for mobile */
        height: 100px;
        margin: 0 auto;
        display: block;
    }

    .image-caption {
        margin-top: 5px;
        padding: 2px;
    }

    .image-caption .name {
        font-size: 12px;
        margin-bottom: 2px;
    }

    .image-caption .position {
        font-size: 11px;
        line-height: 1.2;
        margin: 1px 0;
    }

    .image-caption .year {
        font-size: 11px;
    }
}

/* Fix for iPhone notch areas */
@supports (padding-top: env(safe-area-inset-top)) {
    .navigation {
        padding-top: env(safe-area-inset-top);
    }
    
    .about {
        padding-top: calc(80px + env(safe-area-inset-top));
    }
}

/* Main container styles */
.about {
    padding: 6rem 2rem 4rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    background-color: var(--background-color);
}

/* Team grid layout styles */
.team-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* 4 cards per row */
    gap: 3rem;                              /* Space between cards */
    margin: 4rem auto;
    max-width: 1200px;
    padding: 2rem;
    background: linear-gradient(to bottom, rgba(240, 253, 244, 0.5), transparent);
    border-radius: 2rem;
}

/* Individual team member card styles */
.image-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
}

/* Image styles */
.image-container img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid transparent;
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, var(--primary-color), var(--secondary-color)) border-box;
}

/* Caption styles */
.image-caption {
    margin-top: 1.5rem;
    text-align: center;
    padding: 1rem;
    width: 100%;
    max-width: 220px;
    margin-left: auto;
    margin-right: auto;
}

/* Name styling */
.image-caption .name {
    font-family: 'BPG Mikheil Stefane', serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0.8rem;
    letter-spacing: 0.02em;
}

/* Position styling */
.image-caption .position {
    font-family: 'BPG Glaho', serif;
    font-size: 0.95rem;
    line-height: 1.4;
    color: var(--text-color);
    margin: 0.3rem 0;
    letter-spacing: 0.01em;
}

/* Year styling */
.image-caption .year {
    font-family: 'BPG Nino Mtavruli Bold', serif;
    font-size: 0.9rem;
    color: var(--secondary-color);
    margin-top: 0.8rem;
    letter-spacing: 0.02em;
}

/* Hover effect for the entire card */
.image-container {
    transition: transform 0.3s ease;
}

.image-container:hover {
    transform: translateY(-5px);
}

/* Gradient animation for section headers */
@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Responsive design breakpoints */
@media (max-width: 1200px) {
    .team-container {
        grid-template-columns: repeat(3, 1fr);  /* 3 cards per row */
    }
}

@media (max-width: 900px) {
    .team-container {
        grid-template-columns: repeat(2, 1fr);  /* 2 cards per row */
    }
}

@media (max-width: 600px) {
    .team-container {
        grid-template-columns: 1fr;             /* 1 card per row */
    }
}

/* Update the main container padding for mobile */
@media (max-width: 768px) {
    .about {
        padding: 4rem 1rem 2rem 1rem;
    }

    /* Adjust team container for mobile */
    .team-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        padding: 1rem;
        margin: 2rem auto;
    }

    /* Make images slightly smaller on mobile */
    .image-container img {
        width: 150px;
        height: 150px;
    }

    /* Adjust text sizes for mobile */
    .image-caption {
        margin-top: 1rem;
        padding: 0.5rem;
    }

    .image-caption .name {
        font-size: 1.1rem;
    }

    .image-caption .position {
        font-size: 0.85rem;
    }

    .image-caption .year {
        font-size: 0.8rem;
    }

    /* Adjust section titles for mobile */
    .main-title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1.25rem;
    }

    /* Adjust content text for mobile */
    .content-text {
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .feature-list li {
        font-size: 0.9rem;
        margin-bottom: 0.8rem;
        padding-left: 1rem;
    }
}

/* Extra small devices */
@media (max-width: 480px) {
    .team-container {
        grid-template-columns: 1fr;  /* Single column for very small screens */
    }

    .image-container {
        max-width: 200px;
    }

    .image-container img {
        width: 140px;
        height: 140px;
    }

    .image-caption .name {
        font-size: 1rem;
    }

    .image-caption .position {
        font-size: 0.8rem;
    }

    .image-caption .year {
        font-size: 0.75rem;
    }
}

/* Add smooth scrolling for better mobile experience */
html {
    scroll-behavior: smooth;
}

/* Prevent horizontal scrolling on mobile */
body {
    overflow-x: hidden;
}

/* Print-specific styles */
@media print {
    .section-content {
        box-shadow: none;
        padding: 0;
    }
}

/* Title styles */
.main-title {
    font-family: var(--georgian-title-font);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
    letter-spacing: 0.02em;
}

.subtitle {
    font-family: var(--georgian-decorative-font);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--secondary-color);
    letter-spacing: 0.01em;
}

.team-title {
    font-family: var(--georgian-title-font);
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--primary-color);
}

.section-title {
    font-family: var(--georgian-title-font);
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: var(--primary-color);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .main-title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1.25rem;
    }

    .team-title {
        font-size: 1.75rem;
    }

    .section-title {
        font-size: 1.5rem;
    }
}

/* Alternative Georgian fonts */
@import url('//cdn.web-fonts.ge/fonts/bpg-arial/css/bpg-arial.min.css');
@import url('//cdn.web-fonts.ge/fonts/alk-life/css/alk-life.min.css');
@import url('//cdn.web-fonts.ge/fonts/bpg-nino-mtavruli/css/bpg-nino-mtavruli.min.css');

/* Import additional Georgian fonts for different text elements */
@import url('//cdn.web-fonts.ge/fonts/bpg-mikheil-stefane/css/bpg-mikheil-stefane.min.css');
@import url('//cdn.web-fonts.ge/fonts/bpg-glaho/css/bpg-glaho.min.css');
@import url('//cdn.web-fonts.ge/fonts/bpg-nino-mtavruli-bold/css/bpg-nino-mtavruli-bold.min.css');

:root {
    /* ... other variables ... */
    --georgian-title-font: 'BPG Nino Mtavruli', serif;  /* Try different fonts here */
}
</style>