import { useEffect, useState } from "react";
import qs from "qs";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchEntry() {
      setLoading(true);
      try {
        const query = qs.stringify({
          populate: ["thumbnail", "carousel", "NewRecipeImage"],
          sort: "createdAt:desc",
          pagination: {
            page: 1,
            pageSize: 8,
          },
        });
        const response = await fetch(
          `http://localhost:1337/api/recepts?${query}`
        );
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchEntry();
  }, []);

  return { loading, error, data };
};

export default useFetch;
