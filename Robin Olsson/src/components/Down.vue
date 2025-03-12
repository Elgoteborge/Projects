<script>
  export default {
    data() {
        return {
            buttonClicked: false,
            email: "",
            emailSubmitted: ""
        }
    },
    methods: {
        onClick() {
            this.emailSubmitted = this.email
            this.email = ""
            this.buttonClicked = true
        }
    }
  }
</script>

<template>
    <div>
        <div class="info_pay">
            <p>Trygga Betalningar</p>
        </div>
        <div class="pay_container">
            <img class="payment_logo" alt="Mastercard logo" src="/assets/mastercard.jpg" />
            <img class="payment_logo" alt="Visa logo" src="/assets/visa.png" />
            <img class="payment_logo" alt="Swish logo" src="/assets/swish.jpg" />
            <img class="payment_logo" alt="Klarna logo" src="/assets/klarna.jpg" />
        </div>
    </div>
    <div class="container_info">
        <div>
            <section>
                <h3>Tech Heaven AB</h3>
                <p>Organisationsnummer: <br>
                    55XXXX-XXXX <br>
                    Vasagatan 11B <br>
                    411 24 Göteborg
                </p>
            </section>
        </div>
        <div>
            <section>
                <h3>Kontakta oss</h3>
                <p>E-post: info@techheaven.se <br>
                    Telefon: 031-99XXXX
                </p>
            </section>
        </div>
        <div>
            <section>
                <h3>Information</h3>
                <p>Integritetspolicy & Cookie <br>
                    Policy <br>
                    Shipping
                </p>
            </section>
        </div>
        <div>
            <section>
                <h3>Nyhetsbrev</h3>
                <input type="text" v-model="email" placeholder="E-postadress"> <br>
                <br>
                <input class="input_button" v-on:click="onClick" type="button" value="Registrera E-post">
                <p v-if="buttonClicked">{{ emailSubmitted }} <br> har blivit registrerad!</p>
            </section>
        </div>
    </div>
    <div class="footer_container">
        <footer>© Tech Heaven AB - Website powered by Robin Olsson</footer>
    </div>
</template>

<style scoped>

    .info_pay {
    display: flex;
    justify-content: center;
    font-family: myFont;
    }

    .pay_container {
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    }

    .payment_logo {
    margin-left: .2em;
    margin-right: .2em;
    }

    .payment_logo {
    height: 40px;
    width: 40px;
    }

    .container_info {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;
    background-color: rgb(172, 226, 172);
    height: 200px;
    padding-top: 2em;
    font-family: myFont;
    }

    .input_button {
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
    padding: 4px;
    }

    .footer_container {
    display: flex;
    justify-content: center;
    background-color: rgb(172, 226, 172);
    padding: 5px;
    }

    @font-face {
    font-family: myFont;
    src: url(/Fonts/play.ttf);
    }
</style>
