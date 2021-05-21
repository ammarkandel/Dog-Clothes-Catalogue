/* eslint-disable */

export const handleMeals = (dataAction) => {
  return {
    [dataAction.pending]: (state, action) => {
      state.status = 'loading'
    },
    [dataAction.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [dataAction.fulfilled]: (state, { payload }) => {
      state.meals = payload
      state.status = 'success'
    },
  }
}

export const handleMealDetail = (dataAction) => {
  return {
    [dataAction.pending]: (state, action) => {
      state.status = 'loading'
    },
    [dataAction.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [dataAction.fulfilled]: (state, { payload }) => {
      state.mealDetail = payload
      state.status = 'success'
    },
  }
}
