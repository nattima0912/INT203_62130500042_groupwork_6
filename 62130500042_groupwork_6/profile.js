const constraints = {
    firstname: {
            presence: true
    },
    lastname: {
            presence: true
    },
    genders: {
        presence: true
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    },
    birth: {
        presence: true
    },
    age: {
        presence: true
    }   
}
const app = Vue.createApp({
    data() {
        return {
           image1: './images/profile.jpg',
           firstname: null,
           lastname: null,
           genders: null,
           gender_list: [{id: 1, name: 'male'},
                    {id: 2, name: 'female'}],
           email: null,
           phone: null,
           birth: null,
           age: null,
           errors: null
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    genders: this.genders,
                                    email: this.email,
                                    phone: this.phone,
                                    age: this.age,
                                    birth: this.birth},
                                    constraints)
            if(!this.errors){
                alert("Your profile is updated successfully.")
            }
        }
    }

})

app.component('display-error',{
    props:{
        errors: {
            type: Object,
            required: true,
        },
        field: {
            type: String,
            required: true,
        }
    },
    template: 
    /*html*/
    `
    <div v-if="errors && errorList">
        <p v-for="error in errorList" class="text-red-500">{{error}}</p>
    </div>
    `,
    computed: {
        errorList(){
            return this.errors[this.field]
        }
    }
})

app.mount('#app')