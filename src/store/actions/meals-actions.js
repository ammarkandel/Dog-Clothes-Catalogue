export const requestMealsData = (category) => async () => {
  const fetchData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data;
  };
  try {
    const data = await fetchData();
    localStorage.setItem(category, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchMealDetail = (id) => async () => {
  const fetchData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data;
  };
  try {
    const data = await fetchData();
    localStorage.setItem(id, JSON.stringify([data]));
  } catch (error) {
    console.log(error);
  }
};
