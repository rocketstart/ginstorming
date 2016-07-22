import Vue from 'Vue';
import VueResource from 'vue-resource';
import CreateDocumentComponent from './components/CreateDocumentComponent.vue';
Vue.use(VueResource);

new Vue ({
    el: 'body',

    ready() {
        console.log('App is ready!');
    },

    components: {
        CreateDocumentComponent
    }
});