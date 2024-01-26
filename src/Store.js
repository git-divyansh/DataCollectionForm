import {configureStore} from "@reduxjs/toolkit";
import EtitySelectionSlice from "./Slice/EtitySelectionSlice";

export const store = configureStore({
    reducer : {
        entity : EtitySelectionSlice,
    }
})