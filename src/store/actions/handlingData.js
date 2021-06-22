export const handleMeals = (dataAction) => {
  const result = {
    [dataAction.pending]: (state) => {
      state.status = 'loading';
    },
    [dataAction.rejected]: (state) => {
      state.status = 'failed';
    },
    [dataAction.fulfilled]: (state, { payload }) => {
      state.meals = payload;
      state.status = 'success';
    },
  };
  return result;
};

export const handleMealDetail = (dataAction) => {
  const result = {
    [dataAction.pending]: (state) => {
      state.status = 'loading';
    },
    [dataAction.rejected]: (state) => {
      state.status = 'failed';
    },
    [dataAction.fulfilled]: (state, { payload }) => {
      state.mealDetail = payload;
      state.status = 'success';
    },
  };
  return result;
};
