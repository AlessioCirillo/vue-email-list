
const app = new Vue({
    
    el: '#app',
    data:{
        emails:[]
    },

    create(){
        return this.getEmail();
    },

    methods:{
        getEmail(){
            for(let i= 0; i= 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    this.emails.push(response.data.response)
               
                    console.log(response.data.response);
                })

                .catch(function (error) {
                
                    // handle error
                    console.log(error);
                });
                
                
            }
        }
    }
});