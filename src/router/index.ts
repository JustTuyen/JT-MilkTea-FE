import { createWebHistory, createRouter } from 'vue-router';
import home from '../view/user/HomePage.vue';
import menu from '../view/user/Menu.vue';
import login from '../view/login.vue';
import register from '../view/register.vue';
import ItemPage from '../view/user/ItemPage.vue';
import AboutPage from '../view/user/AboutPage.vue';
import ErrorPage from '../view/user/ErrorPage.vue';
import ProductPage from '../view/admin/products/ProductPage.vue';
import CheckoutPage from '../view/user/CheckoutPage.vue';
import FavoritePage from '../view/user/FavoritePage.vue';
import CartPage from '../view/user/CartPage.vue';
import OrderPage from '../view/user/OrderPage.vue';
import ProfilePage from '../view/user/ProfilePage.vue';
import CategoriesPage from '../view/user/CategoriesPage.vue';
import ContactPage from '../view/user/ContactPage.vue';

const routes = [
  { path: '/', component: home },
  { path: '/menu', component: menu },
  { path: '/categories/:id/:slug?', component: CategoriesPage, name: 'categories', props: true },
  { path: '/product/:id/:slug', name: 'itemPage', component: ItemPage, props: true },
  { path: '/about', component: AboutPage },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/error', component: ErrorPage },
  { path: '/cart', component: CartPage },
  { path: '/favorite', component: FavoritePage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/order', component: OrderPage },
  { path: '/profile', component: ProfilePage },
  { path: '/contact', component: ContactPage },

  //
  { path: '/admin/product', component: ProductPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
