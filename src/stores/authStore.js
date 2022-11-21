import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import router from '../router';

const baseUrl = process.env.API_URL

export const useAuthStore = defineStore("pseudo", {
    state: () => ({
       user:[],
       token:null
}),
    actions: {
        loginUser(user){
            fetch('https://jsonplaceholder.typicode.com/users',
            {
                method: 'POST',
                body: JSON.stringify({
                    username: user.username,
                    password: user.password
                }),
                headers:{
                    "Content-type": "application/json;charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json =>{
                this.token = json.id
                localStorage.setItem('token', json.id)
                this.user = json
                localStorage.setItem('user', JSON.stringify(json))
            })
            .catch(error => console.log(error))
        }
    }    







        /* async login(pseudo, password){
            const response = await fetch(`${baseUrl}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ pseudo, password})
            });
        if (response.status == 200) {
            const data = await response.json();
            this.pseudo = data.pseudo;
            this.token = data.token;
            localStorage.setItem("token", data.token);
            localStorage.setItem("pseudo", JSON.stringify(data.pseudo));
            const toast = useToast();
            toast.success("Vous êtes connectés");
            router.push({name: "Accueil"});
        }else {
            const data = await response.json();
            throw new Error(data.message);
        }
    }, */

    //Pour creer un compte
        /* async register(pseudo, email, password, pays, ville, isAdmin) {
            const response = await fetch(`${baseUrl}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({pseudo, email, password, pays, ville, isAdmin}),
            });
            if (response.status === 201) {
                toast.success("Vous êtes inscrit");
                router.push({ name: "Connexion"});
            }else {
                const data = await response.json();
                throw new Error(data.message);
            }
        }, */

    //Pour se deconnecter
        /* async logout(){
            this.user = null;
            this.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            const toast = useToast();
            toast.success("Vous êtes déconnectés");
            router.push({ name: "Accueil" });
        }
    }, */
    /* getters: {
        isAuthenticated() {
            if (this.token) { //verification de la duree du token
                const payload = JSON.parse(atob(this.token.split(".")[1]));
            if(payload.exp > Data.now() / 1000) {
                return true;
            }else {
                this.user = null;
                this.token = null;
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                return false;
            }
        }else{
            return false;
        }
    }
} */
});