<template>
    <div id="app">
        <!-- Modern navigation bar -->
        <nav class="navigation">
            <div class="nav-container">
                <div class="nav-links">
                    <button @click="navigateTo('about')">{{ currentLanguage.about }}</button>
                    <button @click="navigateTo('activities')">{{ currentLanguage.activities }}</button>
                    <button @click="navigateTo('registration')">{{ currentLanguage.registration }}</button>
                    <button @click="navigateTo('contact')">{{ currentLanguage.contact }}</button>
                    <button @click="toggleLanguage" class="language-toggle">
                        {{ isGeorgian ? 'FR' : 'ქართ' }}
                    </button>
                </div>
            </div>
        </nav>

        <!-- Hero section -->
        <div class="hero-section">
            <h1>{{ currentLanguage.title }}</h1>
            <p class="subtitle">{{ currentLanguage.subtitle }}</p>
        </div>

        <div class="image-container">
            <img src="./lazi.jpeg" alt="School Image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isGeorgian: true,
            translations: {
                georgian: {
                    about: 'ჩვენს შესახებ',
                    activities: 'აქტივობები',
                    registration: 'რეგისტრაცია',
                    contact: 'კონტაქტი',
                    title: 'ქართული კულტურის ცენტრი "ლაზი" პარიზში',
                    subtitle: 'ქართული კულტურის შენარჩუნება და გაზიარება'
                },
                french: {
                    about: 'À Propos',
                    activities: 'Activités',
                    registration: 'Inscription',
                    contact: 'Contact',
                    title: 'Centre Culturel Géorgien à Paris',
                    subtitle: 'Préserver et Partager la Culture Géorgienne'
                }
            }
        }
    },
    computed: {
        currentLanguage() {
            return this.isGeorgian ? this.translations.georgian : this.translations.french
        }
    },
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
:root {
    --primary-color: #15803d;
    --secondary-color: #166534;
    --text-color: #1f2937;
    --background-color: #f0fdf4;
}

/* Add this import at the top of your style section */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');

#app {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    color: var(--text-color);
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
}

.navigation {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

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

.nav-links {
    display: flex;
    gap: 1rem;
}

.navigation button {
    background: transparent;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: var(--text-color);
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

.language-toggle {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 0.5rem;
}

.language-toggle:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}
</style>