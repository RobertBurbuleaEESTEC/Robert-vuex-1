export default {
    setImagesData: (state, data) => {
        console.log(state.imagesData);
        state.imagesData = data;
        state.loadingImagesData = false;
    },
    delete: (state) => {
        state.ImagesData.pop();
    }
}