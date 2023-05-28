import { useEffect, useState } from "react";
import getApiUrl from "./baseurl";
import qs from "qs";
function FetchSingleRecipe(id) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEntry() {
      setLoading(true);
      try {
        const query = qs.stringify({
          populate: [
            "thumbnail",
            "recipe_keys",
            "recipe_keys.image",
            "carousel",
            "tags",
          ],
          filters: {
            id: {
              $eq: id,
            },
          },
        });
        const response = await fetch(`${getApiUrl()}/api/recepts?${query}`);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchEntry();
  }, [id]);
  return { loading, error, data };
}

export default FetchSingleRecipe;
