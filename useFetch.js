import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      ...state,
      isLoading: true,
    });

    setState({
      isLoading: false,
      hasError: null,
      data,
    });
  };

  useEffect(() => {
    getFetch(url);
  }, [url]);

  return {
    ...state,
  };
};
