<template>
    <div id = "vuex">
        <b-loading :active.sync="getLoadingImagesData"></b-loading>
        <ul>
            <li v-for="(user, index) in getImagesData" :key="index">
                {{user.title}}
            </li>
        </ul>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex' 
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters('imagesModule', ['getImagesData', 'getLoadingImagesData'])
    },
    methods: {
        ...mapActions('imagesModule', ['requestImagesData'])
    },
    mounted() {
        console.log("lifecycle hook fires up!");
        this.requestImagesData();
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: disc;
}
</style>