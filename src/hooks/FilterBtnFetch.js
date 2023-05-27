import { useState, useEffect } from "react";
import getApiUrl from "./baseurl";
function FilterBtnFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${getApiUrl()}/api/tags`);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { loading, error, data };
}

export default FilterBtnFetch;
