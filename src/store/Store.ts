import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./Auth";

//dto show cart
export interface CartItemDTO {
    name: string;
    price: number;
    quantity: number; 
    primaryImageURL: string;
    variantId: number; 
    optionContext?: string;
    cartItemId: number;
}

interface CartDTO {
    cartId: number;
    userId: number;
    cartItems: CartItemDTO[];
}
//dto add cart
export interface AddCartItemDTO {
    name: string;
    price: number;
    quantity: number; 
    primaryImageURL: string;
    variantId: number; 
    optionContext?: string;
}

export interface AddCartDTO {
    userId: number; 
    cartItems: AddCartItemDTO[];
}

export const useCartStore = defineStore("cart",{
   state: () => ({
        userId: null as number | null,
        cartItems: [] as AddCartItemDTO[],
    }),

    getters:{
        totalCount: (state): number =>{
            return(state.cartItems || []).reduce(
                (sum, item) => sum + (Number(item.quantity) || 0), 0
            )
        },

        totalPrice: (state): number => {
            return(state.cartItems || []).reduce(
                (sum, item) => {
                    const itemPrice = parseFloat(String(item.price)) || 0;
                    const itemQuantity = parseInt(String(item.quantity)) || 0;
                    return sum = (itemPrice*itemQuantity);
                } , 0
            )
        },
    },

    actions:{
        async saveCart(){
            const authStore = useAuthStore();
            const payload: AddCartDTO = {
                userId: Number(authStore.userId),
                cartItems: this.cartItems
            };

            try{
                const res = await axios.post('http://localhost:5000/api/CartModels/', payload);
                console.log(res.data.message);
            } catch (error){
                console.error('Cart synchronization failed:', error);
            } finally{

            }
        },

       async addItemToCart(newItem:AddCartItemDTO) {
            const existingItem = this.cartItems.find(
                item =>
                    item.variantId === newItem.variantId &&
                    item.optionContext === newItem.optionContext
            );

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                this.cartItems.push(newItem);
            }
            console.log("Current cart:", this.cartItems);

            await this.saveCart();
        },

        async clearCart() {
            this.cartItems = [];

            try {
                await this.saveCart();
            } catch (error) {
                console.error("Failed to clear cart:", error);
            }
        },

        async loadUserCart(){
            const authStore = useAuthStore();
            const userId = Number(authStore.userId);

            try{
                const res = await axios.get<CartDTO>(`http://localhost:5000/api/CartModels/${userId}`)
                this.cartItems = res.data.cartItems ?? [];
                 console.log("Current cart:", this.cartItems);
            } catch(error){
                console.error("Lỗi tải giỏ từ database", error);

            }
        },

        //QUANTITY COONTROLLER
        async incrementQuantity(newItem:AddCartItemDTO) {
            const existingItem = this.cartItems.find(
                item =>
                    item.variantId === newItem.variantId &&
                    item.optionContext === newItem.optionContext
            );
            if (existingItem){
                existingItem.quantity++;;
                await this.saveCart();
            }
        },

        async decrementQuantity(newItem:AddCartItemDTO) {
            const existingItem = this.cartItems.find(
                item =>
                    item.variantId === newItem.variantId &&
                    item.optionContext === newItem.optionContext
            );
            if (existingItem){
                existingItem.quantity--;
                if(existingItem.quantity <= 0){
                    this.cartItems = this.cartItems.filter(
                        item =>
                        !(
                            item.variantId === newItem.variantId &&
                            item.optionContext === newItem.optionContext
                        )
                    );
                }
                await this.saveCart();
            }
        },

        //by input
        async setQuantityItem(newItem:AddCartItemDTO, setQuantity:  number){
            const existingItem = this.cartItems.find(
                item =>
                    item.variantId === newItem.variantId &&
                    item.optionContext === newItem.optionContext
            );

            if(!existingItem){
                return;
            }

            if (existingItem) {
                existingItem.quantity === setQuantity;
            }

            if (existingItem.quantity <= 0) {
                this.cartItems = this.cartItems.filter(
                    item => !(item.variantId === newItem.variantId && 
                            item.optionContext === newItem.optionContext)
                );
            }
            
            await this.saveCart()           
        }
    },

    persist:{
        key: 'cart',
        storage: localStorage,
        pick: ['userId', 'cartItems']
    }
})