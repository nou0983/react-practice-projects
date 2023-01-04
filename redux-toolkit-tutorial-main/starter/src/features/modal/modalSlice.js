import { createSlice } from "@reduxjs/toolkit";

const INITIAL_MODAL_STATE = {
  showModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: INITIAL_MODAL_STATE,
  reducers: {
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
