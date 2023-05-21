import { useEffect, useState } from "react";
import qs from "qs";
function FetchFilteredRecipes(filter) {
  const [relatedData, setRelatedData] = useState(null);
  const [relatedError, setError] = useState(null);
  const [relatedLoading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchEntry() {
      setLoading(true);
      try {
        const query = qs.stringify({
          populate: ["thumbnail", "tags"],
          sort: "createdAt:desc",
          filters: {
            tags: {
              id: {
                $eq: filter,
              },
            },
          },
        });
        const response = await fetch(
          `http://localhost:1337/api/recepts?${query}`
        );
        const json = await response.json();
        setRelatedData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchEntry();
  }, [filter]);

  return { relatedLoading, relatedError, relatedData };
}

export default FetchFilteredRecipes;
