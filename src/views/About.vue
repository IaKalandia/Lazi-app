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
    max-width: 250px;
    margin: 0 auto;
    transition: transform 0.3s ease;
}

/* Circular image styles with gradient border */
.image-container img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid transparent;
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, var(--primary-color), var(--secondary-color)) border-box;
}

/* Caption styles for team member info */
.image-caption {
    margin-top: 1.5rem;
    text-align: center;
    padding: 1rem;
    width: 100%;
    max-width: 220px;
    margin-left: auto;
    margin-right: auto;
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

/* Print-specific styles */
@media print {
    .section-content {
        box-shadow: none;
        padding: 0;
    }
}
</style>