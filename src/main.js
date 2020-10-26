import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store';
import DeleteButton from './components/ui/DeleteButton';
import DefaultButton from './components/ui/DefaultButton';

const app = createApp(App);

app.component('DeleteButton', DeleteButton);
app.component('DefaultButton', DefaultButton);

app.use(store);

app.mount('#app');
