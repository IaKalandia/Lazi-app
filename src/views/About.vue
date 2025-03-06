<template>
    <div class="about">
        <div class="about-content">
            <div class="team-container">
                <div class="image-container">
                    <img src="../Dachi.jpeg" alt="Employee Image">
                    <div class="image-caption">
                        <p class="name">{{ currentLanguage.founderName }}</p>
                        <p class="position">{{ currentLanguage.founderPosition }}</p>
                        <p class="year">{{ currentLanguage.founderYear }}</p>
                    </div>
                </div>
                <!-- Space for additional team member photos -->
            </div>
            <div class="language-section">
                <h1 class="main-title">{{ currentLanguage.aboutTitle }}</h1>
                <h2 class="subtitle">{{ currentLanguage.aboutSubtitle }}</h2>
                
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
    padding: 8rem 2rem 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background-color: var(--background-color);
}

.about-content {
    background-color: white;
    padding: 3rem;
    border-radius: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.about-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}

.language-section {
    margin-bottom: 5rem;
    padding-bottom: 3rem;
    border-bottom: 2px solid #e5e7eb;
    position: relative;
}

.language-section:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
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
    list-style-type: none;
    padding: 1rem 0;
    margin: 2rem 0;
    background-color: rgba(21, 128, 61, 0.05);
    border-radius: 1rem;
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

/* Add smooth transitions */
.about-content, .feature-list li {
    transition: all 0.3s ease;
}

.about-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
    .about {
        padding: 6rem 1rem 2rem 1rem;
    }

    .about-content {
        padding: 2rem;
    }

    .main-title {
        font-size: 2.2rem;
    }

    .subtitle {
        font-size: 1.3rem;
    }

    .section-title {
        font-size: 1.6rem;
    }

    .content-text {
        font-size: 1.1rem;
    }

    .feature-list li {
        padding: 0.8rem 1rem 0.8rem 2.5rem;
        font-size: 1rem;
    }

    .feature-list li::before {
        left: 1rem;
    }

    .team-container {
        justify-content: center;
    }
    
    .image-container {
        margin-bottom: 1.5rem;
    }
    
    .image-container img {
        width: 150px;
        height: 150px;
    }
}

/* Add print styles */
@media print {
    .about-content {
        box-shadow: none;
        padding: 0;
    }

    .feature-list {
        background-color: transparent;
    }
}

.team-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 3rem;
    justify-content: flex-start;
    padding-left: 2rem;
}

.image-container {
    text-align: left;
    flex: 0 0 auto;
    margin-bottom: 2rem;
    margin-right: auto;
}

.image-container img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 3px solid var(--primary-color);
}

.image-caption {
    margin-top: 1rem;
}

.image-caption .name {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 0.3rem;
}

.image-caption .position {
    font-size: 1.2rem;
    color: var(--secondary-color);
    margin-bottom: 0.3rem;
}

.image-caption .year {
    font-size: 1rem;
    color: var(--text-color);
    opacity: 0.8;
}
</style>