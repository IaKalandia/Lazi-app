<template>
    <div class="about">
        <!-- Team Members Section -->
        <section class="team-section">
            <div class="section-content">
                <h2 class="team-title">{{ currentLanguage.teamTitle }}</h2>
                <div class="team-container">
                    <div class="image-container">
                        <img src="../Photos/Dachi.jpeg" alt="Founder Image">
                        <div class="image-caption">
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

        <!-- About School Section -->
        <section class="school-section">
            <div class="section-content">
                <div class="header-section">
                    <h1 class="main-title">{{ currentLanguage.aboutTitle }}</h1>
                    <h2 class="subtitle">{{ currentLanguage.aboutSubtitle }}</h2>
                </div>

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
export default {
    name: 'About',
    props: {
        currentLanguage: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.about {
    padding: 6rem 2rem 4rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    background-color: var(--background-color);
}

/* Team Section Styles */
.team-section {
    margin-bottom: 4rem;
}

.section-content {
    background-color: white;
    padding: 4rem;
    border-radius: 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
    margin-bottom: 3rem;
}

.section-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--primary-color));
    background-size: 200% 100%;
    animation: gradientMove 15s ease infinite;
}

/* School Section Styles */
.school-section {
    margin-top: 4rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .about {
        padding: 4rem 1rem 2rem 1rem;
    }

    .section-content {
        padding: 2rem;
    }
}

.team-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin: 4rem auto;
    max-width: 1200px;
    padding: 2rem;
    background: linear-gradient(to bottom, rgba(240, 253, 244, 0.5), transparent);
    border-radius: 2rem;
}

.image-container {
    width: 100%;
    max-width: 250px;         /* Increased max-width */
    margin: 0 auto;
    transition: transform 0.3s ease;
}

.image-container:hover {
    transform: translateY(-10px);
}

.image-container img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    border: 4px solid transparent;
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, var(--primary-color), var(--secondary-color)) border-box;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-container:hover img {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.image-caption {
    margin-top: 1.5rem;
    text-align: center;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 1rem;
    backdrop-filter: blur(5px);
    transition: transform 0.3s ease;
    width: 100%;              /* Ensure full width */
    max-width: 220px;         /* Increased max-width */
    margin-left: auto;
    margin-right: auto;
}

.image-caption .name {
    font-size: 1.3rem;        /* Slightly smaller font size */
    font-weight: 700;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.7rem;
    word-wrap: break-word;    /* Enable word wrapping */
    overflow-wrap: break-word; /* Modern word wrapping */
    hyphens: auto;            /* Enable hyphenation */
    padding: 0 0.25rem;       /* Add small padding */
    line-height: 1.4;         /* Adjust line height */
}

.image-caption .position {
    font-size: 1rem;
    color: var(--text-color);
    margin-bottom: 0.3rem;
    line-height: 1.4;
    font-weight: 500;
}

.image-caption .year {
    font-size: 0.9rem;
    color: var(--secondary-color);
    margin-top: 0.7rem;
    font-weight: 500;
    font-style: italic;
    opacity: 0.9;
}

@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.header-section {
    text-align: center;
    margin: 5rem auto;
    padding: 3rem;
    background: linear-gradient(to right bottom, rgba(240, 253, 244, 0.8), rgba(255, 255, 255, 0.9));
    border-radius: 2rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.language-section {
    margin: 4rem auto;
    padding: 3rem;
    background: white;
    border-radius: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.main-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    text-align: center;
    letter-spacing: -0.5px;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle {
    font-size: 1.6rem;
    color: var(--secondary-color);
    margin-bottom: 3rem;
    text-align: center;
    font-style: italic;
    font-weight: 500;
    opacity: 0.9;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
    margin: 3rem 0 1.5rem 0;
    padding-left: 1rem;
    border-left: 4px solid var(--primary-color);
}

.content-text {
    font-size: 1.2rem;
    line-height: 1.9;
    color: var(--text-color);
    margin-bottom: 2rem;
    opacity: 0.9;
}

.feature-list {
    background: linear-gradient(to right bottom, rgba(21, 128, 61, 0.05), rgba(21, 128, 61, 0.02));
    border-radius: 1.5rem;
    padding: 1.5rem;
}

.feature-list li {
    position: relative;
    padding: 1rem 2rem 1rem 3rem;
    margin-bottom: 0.5rem;
    line-height: 1.7;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;
}

.feature-list li:hover {
    background-color: rgba(21, 128, 61, 0.1);
}

.feature-list li::before {
    content: "•";
    color: var(--primary-color);
    font-weight: bold;
    position: absolute;
    left: 1.5rem;
    font-size: 1.5rem;
}

.about-content, .feature-list li {
    transition: all 0.3s ease;
}

.about-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

@media (max-width: 1200px) {
    .team-container {
        grid-template-columns: repeat(3, 1fr);
        gap: 2.5rem;
    }
}

@media (max-width: 900px) {
    .team-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    
    .section-content {
        padding: 3rem 2rem;
    }
}

@media (max-width: 600px) {
    .team-container {
        grid-template-columns: 1fr;
    }
    
    .section-content {
        padding: 2rem 1rem;
    }
    
    .image-container img {
        width: 160px;
        height: 160px;
    }
}

@media print {
    .section-content {
        box-shadow: none;
        padding: 0;
    }

    .feature-list {
        background-color: transparent;
    }
}
</style>