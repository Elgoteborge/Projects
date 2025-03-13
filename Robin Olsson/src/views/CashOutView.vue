<script>
    export default {
        methods: {
            goBack() {
                this.$router.push('/cart')
            }
        }
    }

</script>

<template>
    <div><img @click="goBack" src="/assets/arrow.png" alt="Go back icon" class="arrow_back"></div>
    <div>Hej, detta är utcheckningen</div>

</template>

<style scoped>

    .arrow_back {
        height: 30px;
        margin-left: 4em;
        cursor: pointer;
    }

</style>
