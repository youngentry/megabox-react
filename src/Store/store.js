import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./module/megapick";

const store = configureStore({
    reducer: {
        movie: movieSlice.reducer,
    },
});

export default store;
