<template>
    <div class="home">
        <!-- Hero section -->
        <div class="hero-section">
            <h1>{{ currentLanguage.title }}</h1>
            <p class="subtitle">{{ currentLanguage.subtitle }}</p>
        </div>

        <!-- Image section -->
        <div class="image-container">
            <img src="../Photos/lazi.jpeg" alt="Lazi Cultural Center">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        currentLanguage: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.home {
    padding-top: 60px;
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
    .hero-section h1 {
        font-size: 2rem;
    }
}
</style>