import { ref, watchEffect, toValue } from "vue";

const backHost = import.meta.env.VITE_BACK_HOST;

export async function useFetch(period) {
  const data = ref(null);
  const error = ref(null);

  watchEffect(() => {
    data.value = null;
    error.value = null;

    const response = fetch(`${backHost}/main.php?period=${toValue(period)}`)
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err));
  });

  return { data, error };
}
