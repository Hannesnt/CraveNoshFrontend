import { useState, useEffect } from "react";
import getApiUrl from "./baseurl";
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
        const response = await fetch(`${getApiUrl()}/api/recepts?${query}`);
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
