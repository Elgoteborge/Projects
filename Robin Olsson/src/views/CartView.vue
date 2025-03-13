<script>
import { useCartStore } from '../stores/cartStore'
import { computed } from 'vue'

export default {
    setup() {
        const cartStore = useCartStore()
        return { cartStore }
    },
    data() {
        return {
            defaultImage: 'https://st.depositphotos.com/1695366/1395/v/950/depositphotos_13951325-stock-illustration-cartoon-angry-man-electronics.jpg'
        }
    }
}

</script>

<template>

    <div class="head_cart">
        <h1>Kundvagn</h1>
    </div>

    <div class="cart_container">
        <div v-if="cartStore.cart.length === 0">
            <p>Kundvagnen är tom</p>
        </div>
        <div v-else>
            <div class="cart_list">
                <div v-for="item in cartStore.cart" :key="item.id" class="cart_item">
                    <img :src="item.image" alt="Produktbild" class="cart_image" v-on:error="item.image = defaultImage">
                    <div class="cart_details">
                        <h4> {{ item.title }} </h4>
                        <p>$ {{ item.price }} x {{ item.quantity }} </p>
                        <p><strong>Totalt: $ {{ item.price * item.quantity }} </strong></p>
                    </div>
                    <button @click="cartStore.removeFromCart(item.id)">❌ Ta bort</button>
                </div>
            </div>
            <div class="cart_summary">
                <p><strong>Totalt: $ {{ cartStore.cartTotalPrice }}</strong></p>
                <input class="cash_out_button" type="button"  value="Till kassa">
                <button @click="cartStore.clearCart()" class="clear_cart">❌ Töm Kundvagn</button>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .head_cart {
        display: flex;
        align-items: center;
        width: 100vw;
        margin-left: 4em;
    }

    .cart_container {
        display: flex;
        width: 100%;
        margin-left: 4em;
    }

    .cart_list {
        display: flex;
        align-items: center;
        padding: 10px;
        width: 100%;
        gap: 20px;
        flex-wrap: wrap;
        max-width: 1000px;
    }

    .cart_item {
        padding: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 280px;
        height: 420px;
        align-items: center;
        box-shadow: 0 0 2px 2px rgb(97, 96, 96);
    }

    .cart_image {
        height: auto;
        width: 150px;
    }

    .cart_summary {
        display: flex;
        flex-direction: column;
    }

    .cash_out_button {
        border-radius: 4px;
        width: 150px;
        background-color: rgb(172, 226, 172);
        padding: 7px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
    }

    .cash_out_button:hover {
        transform: scale(1.1);
    }

    .cash_out_button:active {
        background-color: rgb(58, 146, 58);
    }

    button {
        cursor: pointer;
        margin-top: auto;
        width: 140px;
        margin-top: auto;
    }

    .clear_cart {
        margin-top: 1em;
    }

</style>
