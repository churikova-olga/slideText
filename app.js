const App = {
    data(){
        return{
        text: ['Привет', 'Все еще здесь?', 'Пока'],
        idx: 0
        }
    }, 
    methods: {
    }
}
Vue.createApp(App).mount('#app')