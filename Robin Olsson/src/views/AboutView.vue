<script>
    export default {
        data() {
            return {
                firstname: "",
                lastname: "",
                email: "",
                subject: "",
                responseMessage: ""
            }
        },
        methods: {
            handleSubmit() {
                this.responseMessage = "Tack för att du kontaktade oss! Vi kommer återkomma till dig inom kort."
                this.firstname = ""
                this.lastname = ""
                this.email = ""
                this.subject = ""
            }
        }
    }
</script>

<template>
<div class="text_container">
    <div class="info_text">
        <h2>Tech Heaven – Din destination för den senaste tekniken</h2>
        <p>Tech Heaven grundades i Göteborg av ett team teknikentusiaster som hade en vision om att skapa en e-handelsplattform för den senaste elektroniken med fokus på kvalitet, innovation och användarvänlighet. Företaget har snabbt växt och etablerat sig som en ledande aktör på både den privata och kommersiella marknaden, med ett noggrant utvalt sortiment av TV-apparater, ljudsystem, gamingutrustning och mobiltelefoner.</p>
        <p>Med sina rötter i Göteborg, en stad känd för sitt entreprenörskap och tekniska ekosystem, har Tech Heaven haft en stark grund att bygga vidare på. Företaget strävar efter att ge sina kunder en smidig och säker shoppingupplevelse med ett användarvänligt gränssnitt och snabba leveranser. Kundservice är en hörnsten i verksamheten, och Tech Heaven gör alltid sitt bästa för att ge personlig hjälp och support vid varje köp.</p>
        <p>Tech Heaven fortsätter att växa och planerar att bredda sitt sortiment och erbjuda fler tjänster, som installation och teknisk support. Oavsett om du söker den senaste TV:n, gamingutrustningen eller en ny mobil, är Tech Heaven platsen för alla dina elektroniska behov.</p>
    </div>
</div>

<hr style="margin-left: 3em; margin-right: 3em;">

<div class="map-container">
    <iframe class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.098952590558!2d11.9627865760276!3d57.697788640533744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff36e83a871ed%3A0x8ad57c8f6dfc34f0!2sVasagatan%2011%2C%20411%2024%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1739458394540!5m2!1ssv!2sse" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    <div class="info">
        <h3>Hitta till oss</h3>
        <p> Hösten 2024 flyttade vi in i våra nya fräsha lokaler i <br> centrala Göteborg!
            Då vi älskar att möta människor, <br> kom in, ta en fika och diskutera teknikens värld med oss!
            <br>
            <br>
            <b>Våra öppettider:</b> <br>
            <br>
            <b>Mån-Fre:</b> 08:30-17:00 <br>
            <b>Lör-Sön:</b> Stängt
        </p>
    </div>
</div>

<hr style="margin-left: 3em; margin-right: 3em;">

<h4>Kontakta vårat team</h4>
<p class="info_line">Skicka ett mejl nedan eller ring oss på telefon: 031-99XXXX </p>
<div class="form_container">
<div class="container">
  <form @submit.prevent="handleSubmit" class="contact">
    <input type="text" id="fname" v-model="firstname" placeholder="Namn..">

    <input type="text" id="lname" v-model="lastname" placeholder="Efternamn..">

    <input type="text" id="email" v-model="email" placeholder="E-postadress..">

    <textarea id="subject" v-model="subject" placeholder="Beskriv ditt ärende.." style="height:200px"></textarea>

    <input type="submit" value="Skicka">
  </form>
</div>
    <img class="call" src="/assets/call.png" alt="Co-worker answering phone">
</div>
<p v-if="responseMessage" class="response"> {{ responseMessage }} </p>
</template>

<style scoped>
@font-face {
    font-family: myFont;
    src: url(/Fonts/play.ttf);
}
* {
    box-sizing: border-box;
}
.text_container {
    display: flex;
}
.info_text {
    display: block;
    margin-bottom: 2em;
    margin-left: 3em;
    margin-right: 3em;
    font-family: myFont;
}
.map-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 3em;
    margin-left: 3em;
    margin-top: 3em;
    align-items: center;
}

input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
  background-color: rgb(172, 226, 172);
  color: black;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
    background-color: rgb(151, 190, 151);;
}

h4 {
    margin-left: 3em;
    margin-top: 4em;
}
.info_line {
    margin-bottom: 2em;
    margin-left: 3em;
}

.container {
    display: flex;
    margin-left: 3em;
    margin-bottom: 3em;
}

.contact {
    width: 350px;
    border-radius: 5px;
}

.response {
    margin-left: 3em;
    margin-bottom: 3em;
}

.form_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.call {
    width: 500px;
}
</style>
