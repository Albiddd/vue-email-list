
const app = new Vue({
    el: '#app',
    data:{
        mailArray: [],     
    },
    methods:{
        fetchMail(){
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.mailArray.push(res.data.response)
                })
            }
        }
    },
    mounted(){
        this.fetchMail()
    }
})

