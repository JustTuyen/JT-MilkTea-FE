import {defineStore} from "pinia";
import axios from "axios";

export interface User {
  id: number | string;
  email: string;
  role: 'Admin' | 'Customer' | string; 
}

export interface Profile {
  id: number | string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string | Date;     // JSON dates arrive as strings across network lines
  birthday: string | Date;      
  lastUpdatedAt: string | Date; 
  role: 'Admin' | 'Customer' | string;
}

//LOGIN
export interface LoginData {
  email?: string;
  password?: string;
}

interface LoginResponse {
  token: string;
  user: User;
  message: string;
}

// REGISTERE
export interface RegisterData {
  email?: string;
  password?: string;
  userName?: string;
  phoneNumber?: string;
}

interface RegisterResponse {
  message: string;
}

interface AuthState {
  user: User | Profile | null; 
  token: string | null;
  userId: string | number | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null,
    token: null,
    userId: null,
  }),

    getters:{
        isAuthenticated: (state) => !!state.token,
        isAdmin: (state) => state.user?.role === 'Admin',
        isCustomer: (state) => state.user?.role === 'Customer',
        getUserId: (state) => state.userId,
    },
    
    actions:{
        initializeAuth(): void {
            this.userId = localStorage.getItem('userId') || null;
            this.token = localStorage.getItem('token') || null;
            const savedUser = localStorage.getItem('user');
            this.user = savedUser ? (JSON.parse(savedUser) as User) : null;
        },

        logout(): void{
            this.user = null;
            this.token = null;
            this.userId = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
        },

        async login(data: LoginData): Promise<boolean> {
            try{
                const res = await axios.post<LoginResponse>('http://localhost:5000/api/Auth/login', data, {
                    headers:{'Content-Type': 'application/json'}
                });
                
                this.token = res.data.token;
                this.user = res.data.user;
                this.userId = res.data.user.id;
                //console.log('Login successful:', res.data);
                //console.log('Token:', this.token);
               if(this.token && this.userId){
                    localStorage.setItem('token', this.token);
                    localStorage.setItem('user', JSON.stringify(this.user));
                    localStorage.setItem('userId', String(this.userId));
                    return true;
               } else {
                console.error('Login response was missing token or userId data properties');
                return false;
               }
            } catch(error){
                console.error('Login failed:', error);
                return false;
            }
        },

        async register(data: RegisterData): Promise<boolean> 
        {
            try{
                const res = await axios.post<RegisterResponse>('http://localhost:5000/api/Auth/register', data, {
                    headers:{'Content-Type': 'application/json'}
                });
                console.log('Registration successful:', res.data);
                console.log('Registration success message:', res.data.message);
                return true;
            } catch(error){
                console.error('Registration failed:', error);
                return false;
            }
        },

        async getUserProfile(): Promise<boolean>{
            if(!this.token){
                console.error('No token found. User might not be logged in.');
                return false;
            }

            try{
                const res = await axios.get<Profile>('http://localhost:5000/api/Auth/profile',{
                    headers:{
                        'Authorization': `Bearer ${this.token}`,
                        'Content-Type': 'application/json'
                    }
                });

                this.user = res.data;
                this.token = localStorage.getItem('token'); // Ensure token is still set
                //console.log('User profile fetched successfully:', res.data);
                if(res.data && 'id' in res.data){
                    this.userId = (res.data as any).id;
                }
                return true;

            } catch (error) {
                console.error('Failed to fetch user profile:', error);
                return false;
            }
        }
    },

    
    persist: {
    
    key: 'auth',
    storage: localStorage,
    pick: ['user', 'token', 'userId'],
  } 
})