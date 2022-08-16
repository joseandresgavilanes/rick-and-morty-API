import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [urlApis, setUrlApi] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUrlApi(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return urlApis;
};

export default useFetch;
