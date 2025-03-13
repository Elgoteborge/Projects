import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || []
    }),
    actions: {
        addToCart(product) {
            const existingItem = this.cart.find(item => item.id === product.id)
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                this.cart.push({ ...product, quantity: 1 })
            }
            this.$patch({ cart: JSON.parse(JSON.stringify(this.cart)) })
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        removeFromCart(productId) {
            this.$patch({ cart: this.cart.filter(item => item.id !== productId) })
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        clearCart() {
            this.$patch({ cart: [] })
            localStorage.removeItem('cart')
        }
    },
    getters: {
        cartTotalPrice: (state) => {
            return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
        }
    }
})
