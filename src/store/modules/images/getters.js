export default {
    getImagesData: (state) => {
        console.log(state.imagesData);
        return state.imagesData;
    },
    getLoadingImagesData: (state) => {
        return state.loadingImagesData;
    }
}