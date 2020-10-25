import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store';
import DeleteButton from './components/ui/DeleteButton';

const app = createApp(App);

app.component('DeleteButton', DeleteButton);

app.use(store);

app.mount('#app');
