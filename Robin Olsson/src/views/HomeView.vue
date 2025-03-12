<script>
  export default {
    data() {
        return {
            products: [],
            selectCategory: "all",
            defaultImage: 'https://st.depositphotos.com/1695366/1395/v/950/depositphotos_13951325-stock-illustration-cartoon-angry-man-electronics.jpg'
        }
    },
    created() {
        fetch('https://fakestoreapi.in/api/products')
            .then((response) => response.json())
            .then((result) => {
                this.products = result.products
            })
    },
    computed: {
        filteredProducts() {
            if (this.selectCategory === "all") {
                return this.products
            }
            return this.products.filter(product =>
                product.category.toLowerCase() === this.selectCategory.toLowerCase()
            )
        }
    }
  }
</script>

<template>
<div class="filter">
  <select v-model="selectCategory">
    <option value="all">Visa alla</option>
    <option value="audio">Ljud</option>
    <option value="gaming">Gaming</option>
    <option value="mobile">Mobil</option>
    <option value="tv">tv</option>
  </select>
</div>
<div class="content">
    <div class="product-card" v-for="product in filteredProducts" :key="product.id">
        <img class="product_image" :src="product.image" alt="Produktbild"
            v-on:error="product.image = defaultImage"/>
            <div class="price">
                <div class="product_price">$ {{ product.price }}</div>
                <div class="button_container"><input class="product_button" type="button"  value="Lägg i varukorg +"></div>
                <div class="title">{{ product.title }}</div>
            </div>
    </div>
</div>
</template>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

select {
  padding: 5px;
  margin-right: 4em;
  border: none;
  background-color: white;
  cursor: pointer;
}
.content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    font-family: myFont;
    margin-top: 3em;
    transition: opacity 0.5s ease;
}
.content-enter-active, .content-leave-active {
    transition: opacity 0.5s ease;
}

.content-enter, .content-leave-to {
    opacity: 0;
}
.product-card {
    padding: 10px;
    text-align: center;
    height: 400px;
    width: 280px;
    cursor: pointer;
    transition: 0.4s;
    margin-bottom: 1em;
    margin-left: 2em;
}

.product-card:hover {
    box-shadow: 0 0 2px 2px rgb(97, 96, 96);
    margin-top: -10px;
}

.product_image {
    height: 150px;
    width: auto;
    margin-bottom: 2em;
}

.product_price {
    display: inline;
    background-color: rgb(245, 129, 87);
    box-shadow: 0 0 2px 2px rgb(97, 96, 96);
    padding: 10px;
}
.button_container {
    margin-top: 1.2em;
}
.product_button {
    border-radius: 4px;
    background-color: rgb(172, 226, 172);
    padding: 5px;
    cursor: pointer;
}
.title {
    margin-top: 1em;
}

@font-face {
        font-family: myFamily;
        src: url(/Fonts/play.ttf);
    }
</style>
