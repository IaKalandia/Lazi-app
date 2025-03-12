<template>
    <div class="desktop-layout">
        <!-- Desktop Navigation -->
        <nav class="navigation">
            <div class="nav-container">
                <div class="nav-links">
                    <router-link to="/" custom v-slot="{ navigate }">
                        <button @click="navigate">{{ currentLanguage.home }}</button>
                    </router-link>
                    <router-link to="/about" custom v-slot="{ navigate }">
                        <button @click="navigate">{{ currentLanguage.about }}</button>
                    </router-link>
                    <button @click="navigateTo('activities')">{{ currentLanguage.activities }}</button>
                    <button @click="navigateTo('registration')">{{ currentLanguage.registration }}</button>
                    <button @click="navigateTo('contact')">{{ currentLanguage.contact }}</button>
                    <button @click="toggleLanguage" class="language-toggle">
                        {{ isGeorgian ? 'FR' : 'ქართ' }}
                    </button>
                </div>
            </div>
        </nav>

        <main class="desktop-content">
            <router-view :currentLanguage="currentLanguage"></router-view>
        </main>
    </div>
</template>

<script>
// Import your existing App.vue logic
import App from './App.vue'

export default {
    name: 'DesktopApp',
    extends: App,
    data() {
        return {
            // Desktop-specific state if needed
        }
    }
}
</script>

<style>
/* Your existing desktop styles from App.vue */
</style> 