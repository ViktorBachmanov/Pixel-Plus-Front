import { ref, watchEffect, toValue } from "vue";

export async function useFetch(period) {
  const data = ref(null);
  const error = ref(null);

  watchEffect(() => {
    data.value = null;
    error.value = null;

    const response = fetch(
      `http://localhost:4000/main.php?period=${toValue(period)}`
    )
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err));

    // if (response.ok) {
    //   data.value = await response.json();
    // } else {
    //   error.value = response.status;
    // }
  });

  return { data, error };
}
