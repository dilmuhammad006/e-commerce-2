import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    createModal: false,
    updateModal: false,
    selectedId: 1,
  },
  reducers: {
    handleCreateModal: (state) => {
      state.createModal = !state.createModal;
      state.updateModal = false;
    },
    handleUdateModal: (state) => {
      state.updateModal = !state.updateModal;
      state.createModal = false;
    },
    handleChangeSelectedId: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
  },
});

export const { handleCreateModal, handleUdateModal, handleChangeSelectedId } =
  modalSlice.actions;
export default modalSlice.reducer;
