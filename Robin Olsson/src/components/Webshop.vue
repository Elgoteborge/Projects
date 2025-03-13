<script>
  import { useCartStore } from '../stores/cartStore'
  import { computed } from 'vue'

  export default {

    setup() {
        const cartStore = useCartStore();
        const cartItemCount = computed(() => cartStore.cart.length);

        return { cartStore, cartItemCount };
    },
    props: {
        msg: String
    },
    data() {
        return {
            imageSource: './assets/logotype.png',
            isLoggedIn: false,
            showLogin: false,
            username: '',
            password: '',
            emailSubmitted: '',
            buttonClicked: false
        }
    },
    methods: {
        goToCart() {
            this.$router.push('/cart')
        },
        toggleLogin() {
            if (!this.isLoggedIn) {
                this.showLogin = true
            } else {
                this.isLoggedIn = false
            }
        },
        login () {
            this.isLoggedIn = true
            this.showLogin = false
            this.username = ""
            this.password = ""
        },
        logout() {
            this.isLoggedIn = false
            this.buttonClicked = false
        },
        cancelLogin() {
            this.showLogin = false
        },
        onClick() {
            this.emailSubmitted = this.email
            this.email = ""
            this.buttonClicked = true
        },
        /*setup() {
        const cartStore = useCartStore();
        return { cartStore };
    }*/
    }
  }
</script>

<template>
    <div class="welcome">
        <p class="message" v-if="buttonClicked">Välkommen {{ emailSubmitted }}! </p>
    </div>
    <div class="heading">
        <div>
            <img class="logotype" v-bind:src="imageSource" alt="Tech Heaven logo">
        </div>
        <div>
            <h1 class="slogan"> {{ msg }}</h1>
        </div>
        <div class="icons-container">
    <div class="cart_container" @click="goToCart">
        <img class="cart_image" src="/assets/cart.jpg" alt="Cart icon">
        <span v-if="cartStore.cart.length > 0" class="cart_badge">
            {{ cartStore.cart.length }}
        </span>
    </div>

    <img class="profile_image" v-if="!isLoggedIn" src="/assets/myprofile.png" alt="My profile symbol" @click="toggleLogin">
    <img class="profile_image" v-if="isLoggedIn" src="/assets/logout.png" alt="Log out symbol" @click="logout">
    <img class="social_1" src="/assets/fb.png" alt="Facebook icon">
    <img class="social" src="/assets/inst.png" alt="Instagram icon">
</div>

        <div v-if="showLogin" class="login-popup">
            <form @submit.prevent="login">
                <label for="email">E-postadress:</label>
                <input type="text" id="username" v-model="email">
                <label for="password">Lösenord:</label>
                <input type="password" id="password" v-model="password">
                <button class="login" v-on:click="onClick" type="submit">Logga in</button>
                <button class="cancel" type="button" @click="cancelLogin">Avbryt</button>
            </form>
        </div>
    </div>
</template>

<style>
    @font-face {
        font-family: second_font;
        src: url(/Fonts/Caveat.ttf);
    }
    .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
}

.logotype {
    height: 100px;
    margin-left: .5em;
}

.slogan {
    font-family: second_font;
}

.cart {
    float: left;
    display: flex;
    align-items: center;
}

.icons-container {
    display: flex;
    align-items: center;
}

.cart_container {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 1em;
}

.cart_badge {
    position: absolute;
    top: -10px;
    right: -1px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    padding: 4px 4px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
}

.cart_image {
    height: 25px;
    cursor: pointer;
    margin-right: 1em;
}
.profile_image {
    height: 25px;
    cursor: pointer;
    margin-right: 2em;
}

.social_1 {
    width: 25px;
    cursor: pointer;
    margin-right: .5em;
}

.social {
  width: 25px;
  cursor: pointer;
  margin-right: 3em;
}

.login-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 8px;
}

label {
    color: white;
}

.login-popup form {
    display: flex;
    flex-direction: column;
}

.login-popup input {
    margin-bottom: 10px;
    padding: 8px;
}

.login {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
 }

.cancel {
    padding: 10px;
    background-color: red;
    border: none;
    cursor: pointer;
    margin-top: .4em;
}

.login:hover {
    background-color: #45a049;
}

.cancel:hover {
    background-color: rgb(210, 68, 68);
}

.welcome {
    display: flex;
    justify-content: center;
}

.message {
    background-color: rgb(172, 226, 172);
    padding: 10px;
    border-radius: 15px;
}

</style>
