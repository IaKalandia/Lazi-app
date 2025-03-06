<template>
    <div class="about">
        <div class="about-content">
            <!-- Team members section first -->
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

            <!-- Title and subtitle moved after photos -->
            <div class="header-section">
                <h1 class="main-title">{{ currentLanguage.aboutTitle }}</h1>
                <h2 class="subtitle">{{ currentLanguage.aboutSubtitle }}</h2>
            </div>

            <!-- Main content section -->
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

/* Team members container styling */
.team-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 photos per row */
    gap: 2rem;                            /* Space between photos */
    margin-top: 3rem;        /* Add space at top */
    margin-bottom: 0;        /* Remove bottom margin */
    max-width: 1000px;                    /* Control max width */
    padding: 0 1rem;
}

/* Individual team member container */
.image-container {
    width: 100%;                          /* Take full width of grid cell */
    max-width: 200px;                     /* Maximum size of container */
    margin: 0 auto;                       /* Center in grid cell */
}

.image-container img {
    width: 150px;                         /* Slightly smaller photos */
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto;                       /* Center the image */
    display: block;                       /* Help with centering */
    border: 3px solid var(--primary-color);
}

.image-caption {
    margin-top: 1rem;
    text-align: center;     /* Center align all text */
    padding: 0 0.5rem;      /* Add some padding on sides */
}

.image-caption .name {
    font-size: 1.3rem;      /* Slightly smaller font size */
    font-weight: 700;       /* Bold weight */
    color: var(--primary-color);
    margin-bottom: 0.5rem;  /* Space after name */
    line-height: 1.2;       /* Tighter line height */
    letter-spacing: -0.01em; /* Slightly tighter letter spacing */
}

.image-caption .position {
    font-size: 1rem;        /* Smaller size for positions */
    color: var(--text-color);
    margin-bottom: 0.25rem; /* Less space between positions */
    line-height: 1.4;       /* Better line height for readability */
    font-weight: 500;       /* Medium weight */
    opacity: 0.85;          /* Slightly muted color */
}

.image-caption .year {
    font-size: 0.9rem;      /* Smallest size for year */
    color: var(--secondary-color);
    margin-top: 0.5rem;     /* Space before year */
    font-weight: 500;       /* Medium weight */
    opacity: 0.9;           /* Slightly muted */
    font-style: italic;     /* Italicize the year */
}

/* Add hover effect for better interactivity */
.image-container:hover .image-caption .name {
    color: var(--secondary-color);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .image-caption .name {
        font-size: 1.2rem;
    }
    
    .image-caption .position {
        font-size: 0.95rem;
    }
    
    .image-caption .year {
        font-size: 0.85rem;
    }

}

/* Add this new section */
.header-section {
    text-align: center;
    margin-top: 4rem;        /* Add space after photos */
    margin-bottom: 3rem;
    padding-top: 3rem;       /* Add padding above title */
    padding-bottom: 2rem;
    border-top: 2px solid #e5e7eb;    /* Add top border */
    border-bottom: 2px solid #e5e7eb;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .team-container {
        grid-template-columns: repeat(3, 1fr); /* 3 photos per row on medium screens */
    }
}

@media (max-width: 768px) {
    .team-container {
        grid-template-columns: repeat(2, 1fr); /* 2 photos per row on small screens */
        gap: 1.5rem;
    }
}

@media (max-width: 480px) {
    .team-container {
        grid-template-columns: 1fr;           /* 1 photo per row on very small screens */
    }
}
</style>