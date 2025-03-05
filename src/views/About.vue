<template>
    <div class="about">
        <h1>{{ currentLanguage.about }}</h1>
        <!-- Add your about page content here -->
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
}
</style>