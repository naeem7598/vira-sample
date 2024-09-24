import {defineStore} from 'pinia';

interface UserPayloadInterface {
    username: string;
    password: string;
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        authenticated: false,
        loading: false,
    }),

    actions: {
        async authenticateUser(loginForm: UserPayloadInterface) {
            this.loading = true;
            const response = await fetch('https://vtiapi.tadbirkish.com/api/v1/Account/login', {
                method: 'POST',
                headers: {
                    'api-version': '1',
                    'x-api-key': '676bdb1ce2d84276b8874a41f143c739',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginForm)
            });
            const token = response.headers.get('Authorization');

            if (token) {
                localStorage.setItem('token', token);
               await this.getUserProfile(token);
                this.authenticated = true;
            }

        },
        async getUserProfile(token: string) {
            const response = await fetch('https://vtiapi.tadbirkish.com/api/v1/user/my-profile', {
                method: 'GET',
                headers: {
                    'api-version': '1',
                    'x-api-key': '676bdb1ce2d84276b8874a41f143c739',
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            });
            this.loading = false;
            const text = await response.text();
            localStorage.setItem('user',text);
        },
        logUserOut() {
            this.authenticated = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }
})