import { useState, useEffect } from "react";
import qs from "qs";
function SearchFetch(searchText) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = qs.stringify({
          _q: searchText,
          populate: ["thumbnail", "tags"],
          sort: "createdAt:desc",
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
    };
    fetchData();
  }, [searchText]);

  return { loading, error, data };
}

export default SearchFetch;
