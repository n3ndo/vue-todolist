const { createApp } = Vue;
createApp({
    data(){
        return{
            todoList: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
                {
                    text: 'Lavare i piatti',
                    done: false
                }
            ]
        }
    },
    methods: {
        
    }
}).mount('#app');