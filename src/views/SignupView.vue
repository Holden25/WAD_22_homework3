<template>
 

    <Header/>

    <div>This is a signup page
    <form @submit.prevent="handleSubmit">
            <lable>Email: </lable>
            <input type="email" v-model="email" required>
            <div v-if="passwordError" class="error">{{passwordError}} </div>
            <div v-if="passwordError2" class="error">{{passwordError2}} </div>
            <div v-if="passwordError6" class="error">{{passwordError6}} </div>
            <br>
            <lable>Password:</lable>
            <input type="password" v-model="password" required>

            <div class ="button">
                <button class="submit" type ="submit">Signup</button>
            </div>
            
    </form>

    <p> Email: {{ email }} </p>
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
            

            //Includes at least one uppercase alphabet character
            //Includes at least one numeric value

            //It should start with an uppercase alphabet
            this.passwordError6 = this.password[0].toUpperCase() === this.password[0] ?
            '' : 'Password should start with an uppercase alphabet!';

            //It should include the character "_"
            

            if(!this.passwordError) {
                console.log(this.email);
                console.log(this.password);
            }
        }
    }
}



</script>