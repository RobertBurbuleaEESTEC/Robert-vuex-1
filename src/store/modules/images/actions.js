import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default {
    requestImagesData: (context) => {
        if (context.state.imagesData.length === 0) {
            console.log("request sent!");
            Vue.http.get('https://jsonplaceholder.typicode.com/photos').then(response => {
                // we send only the first 10 objects to the mutation for the sake of simplicity
                context.commit("setImagesData", response.data.slice(0, 10));
            },
            error => {
                console.log(error);
            })
        }
    }
}
