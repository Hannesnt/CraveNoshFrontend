import { useEffect, useState } from "react";

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
          sort: ["comments.createdAt:desc"],
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
  }, [id]);
  return { loading, error, data };
}

export default FetchSingleRecipe;