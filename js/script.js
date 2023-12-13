const { createApp } = Vue;
createApp({
    data(){
        return{
            textTask: '',
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
        removeTodo(index){
            this.todoList.splice(index, 1);
        },
        addTask(){
            this.todoList.push({
                text: this.textTask,
                done: false
            })

            this.textTask = '';
        }
    }
}).mount('#app');