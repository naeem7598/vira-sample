import {storeToRefs} from 'pinia';
import {useAuthStore} from '~/store/auth';

export default defineNuxtRouteMiddleware((to) => {
    if (to) {
        const {authenticated} = storeToRefs(useAuthStore());
        const token = localStorage.getItem('token');
        if (token) {
            authenticated.value = true;
        }

        if (token && to?.name === 'login') {
            return navigateTo('/');
        }

        // if (!token && to?.name !== 'login') {
        //     return navigateTo('/login');
        // }
    }
});