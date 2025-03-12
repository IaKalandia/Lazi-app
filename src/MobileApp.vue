<template>
    <div class="mobile-layout">
        <!-- Mobile Header -->
        <header class="mobile-header">
            <button @click="toggleMenu" class="menu-button">
                <span class="menu-icon"></span>
            </button>
            <button @click="toggleLanguage" class="language-toggle">
                {{ isGeorgian ? 'FR' : 'ქართ' }}
            </button>
        </header>

        <!-- Mobile Navigation Menu -->
        <nav class="mobile-nav" :class="{ 'menu-open': isMenuOpen }">
            <div class="nav-links">
                <router-link to="/" @click="closeMenu">
                    {{ currentLanguage.home }}
                </router-link>
                <router-link to="/about" @click="closeMenu">
                    {{ currentLanguage.about }}
                </router-link>
                <a @click="navigateAndClose('activities')">{{ currentLanguage.activities }}</a>
                <a @click="navigateAndClose('registration')">{{ currentLanguage.registration }}</a>
                <a @click="navigateAndClose('contact')">{{ currentLanguage.contact }}</a>
            </div>
        </nav>

        <main class="mobile-content">
            <router-view 
                :currentLanguage="currentLanguage"
                @scroll="handleScroll"
            ></router-view>
        </main>
    </div>
</template>

<script>
import App from './App.vue'

export default {
    name: 'MobileApp',
    extends: App,
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
        navigateAndClose(section) {
            this.navigateTo(section);
            this.closeMenu();
        },
        handleScroll() {
            if (this.isMenuOpen) {
                this.closeMenu();
            }
        }
    }
}
</script>

<style>
/* Mobile-specific styles */
.mobile-layout {
    padding-top: 60px;
}

.mobile-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 1000;
}

.mobile-nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 999;
}

.mobile-nav.menu-open {
    transform: translateX(0);
}

.nav-links {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.nav-links a {
    padding: 1rem;
    text-decoration: none;
    color: var(--text-color);
    font-family: var(--georgian-nav-font);
    border-bottom: 1px solid #eee;
}

.menu-button {
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    position: relative;
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

/* Handle safe areas for all mobile devices */
@supports (padding-top: env(safe-area-inset-top)) {
    .mobile-layout {
        padding-top: calc(60px + env(safe-area-inset-top));
        padding-bottom: env(safe-area-inset-bottom);
    }
}
</style> 