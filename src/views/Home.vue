<template>
    <div class="home">
        <!-- Hero section with multilingual title and subtitle -->
        <div class="hero-section">
            <h1>{{ currentLanguage.title }}</h1>
            <p class="subtitle">{{ currentLanguage.subtitle }}</p>
        </div>

        <!-- Main image section with hover effect -->
        <div class="image-container">
            <img src="../Photos/lazi.jpeg" alt="Lazi Cultural Center">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    // Receive language translations from parent component
    props: {
        currentLanguage: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
/* Main container spacing for fixed header */
.home {
    padding-top: 60px;
}

/* Hero section styling */
.hero-section {
    padding: 8rem 2rem 4rem 2rem;
    text-align: center;
}

/* Gradient title styling */
.hero-section h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    /* Gradient text effect */
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Subtitle styling */
.subtitle {
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 2rem;
}

/* Main image container */
.image-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Image styling with hover effects */
.image-container img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    /* Subtle shadow effect */
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
    /* Smooth hover transition */
    transition: transform 0.3s ease;
}

/* Image hover effect */
.image-container img:hover {
    transform: scale(1.02);
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
    .hero-section h1 {
        font-size: 2rem;
    }
}
</style>