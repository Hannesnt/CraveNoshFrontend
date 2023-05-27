import { useEffect, useState } from "react";
import qs from "qs";
import getApiUrl from "./baseurl";
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
        const response = await fetch(`${getApiUrl()}/api/recepts?${query}`);
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
