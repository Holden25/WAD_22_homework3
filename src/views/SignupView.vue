<template>
 

    <Header/>

    <div>
    <form @submit.prevent="handleSubmit">
            <lable>Email: </lable>
            <input type="email" v-model="email" required>
            <div v-if="passwordError" class="error">{{passwordError}} </div>
            <div v-if="passwordError2" class="error">{{passwordError2}} </div>
            <div v-if="passwordError3" class="error">{{passwordError3}} </div>
            <div v-if="passwordError4" class="error">{{passwordError4}} </div>
            <div v-if="passwordError5" class="error">{{passwordError5}} </div>
            <div v-if="passwordError6" class="error">{{passwordError6}} </div>
            <div v-if="passwordError7" class="error">{{passwordError7}} </div>
            <br>
            <lable>Password:</lable>
            <input type="password" v-model="password" required>

            <div class ="button">
                <button class="submit" type ="submit">Signup</button>
            </div>
            
    </form>

    <p> Password: {{ password }} </p>

</div>

</template>

<script>
 import Header from "@/components/Header.vue";

export default {
    name : "SignupView",

    components: {Header},

    data() {
        return {
            email: '',
            password: '',
            passwordError: ''
        }
    },
methods: {
    handleSubmit() {
            //Password have to be at least 8 characters
            this.passwordError = this.password.length > 7 ?
            '' : 'Password should be more than 8 characters long!';

            //Password should be less than 15 characters
            this.passwordError2 = this.password.length < 15 ?
            '' : 'Password should be less than 15 characters!';

            //Includes at least two lowercase alphabet characters
            this.passwordError3 = this.password.matches("[a-z]+.*[a-z]+") ?
            '' : 'Password should include at least two lowercase alphabet characters!';

            //Includes at least one uppercase alphabet character
            this.passwordError4 = /[A-Z]/.test(this.password) ?
            '' : 'Password should include at least one uppercase alphabet character!';

            //Includes at least one numeric value
            this.passwordError5 = /\d/.test(this.password) ?
            '' : 'Password should include at least one numeric value!';

            //It should start with an uppercase alphabet
            this.passwordError6 = this.password[0].toUpperCase() === this.password[0] ?
            '' : 'Password should start with an uppercase alphabet!';

            //It should include the character "_"
            this.passwordError7 = this.password.includes('_') ?
            '' : 'Password should include the character "_"!';


            if(!this.passwordError) {
                console.log(this.email);
                console.log(this.password);
            }
        }
    }
}



</script>