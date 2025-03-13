<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
    data() {
        return {
            product: null
        }
    },

    created() {
        const productId = this.$route.params.id
        fetch(`https://fakestoreapi.in/api/products/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                this.product = data.product
            })
            .catch(error => console.error("Fel vid hämtning:", error));
    },
    methods: {
        goBack() {
            this.$router.push('/')
        }
    }
}

</script>

<template>
    <div class="content_container" v-if="product">
        <div class="image_container">
            <img class="product_image" :src="product.image" alt="Produktbild">
        </div>
            <div class="info_container">
                <div class="product_price">$ {{ product.price }}</div>
                <input class="product_button" type="button"  value="Lägg i varukorg +">
                <h2 class="title"><strong>{{ product.title }}</strong></h2>
                <div class="description"> {{ product.description }}</div>
                <div class="brand"><Strong>Varumärke: </Strong> {{ product.brand }}</div>
                <div class="model"><strong>Model: </strong> {{ product.model }}</div>
                <div class="catergory"><strong>Kategori: </strong> {{ product.category }}</div>
            </div>
    </div>

    <div>
        <button class="back_button" @click="goBack">Tillbaka</button>
    </div>

</template>

<style scoped>

    .content_container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 2em;
    }

    .image_container {
        display: flex;
        justify-content: center;
    }

    .product_image {
        height: 300px;
    }

    .product_price {
        font-family: myFont;
        font-size: 3em;
        margin-top: 1em;
        margin-left: .5em;
        margin-bottom: .5em;
    }

    .product_button {
        border-radius: 4px;
        background-color: rgb(172, 226, 172);
        padding: 10px;
        cursor: pointer;
        margin: 1em;
        transition: transform 0.2s ease-in-out;
    }

    .product_button:hover {
        transform: scale(1.2);
    }

    .title {
        margin: 1em;
    }

    .description {
        margin: 1em;
    }

    .brand {
        margin: 1em;
    }

    .model {
        margin: 1em;
    }

    .catergory {
        margin: 1em;
    }

    .back_button {
        border-radius: 4px;
        background-color: rgb(245, 129, 87);
        padding: 10px;
        cursor: pointer;
        margin: 1em;
    }

    @font-face {
        font-family: myFamily;
        src: url(/Fonts/play.ttf);
    }
</style>
