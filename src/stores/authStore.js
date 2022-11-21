import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import router from '../router';

const baseUrl = process.env.API_URL;
const apiAdn = 'https://adn-api-rest.onrender.com/api/v1/';
export const useAuthStore = defineStore("pseudo", {
    state: () => ({
        user:[],
        token:null
    }),
    actions: {
        loginUser(user){
            fetch(apiAdn + 'login',
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
        },
            //Pour creer un compte
        register(user) {
            const response = fetch(`${apiAdn}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            .then(response => {
                //useToast.success("Vous êtes inscrit");
                router.push({ name: "Connexion"});
            })
            .catch(error => console.log(error))
        },
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