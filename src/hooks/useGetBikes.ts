import { useCallback, useEffect, useState } from "react";
// import useStorage from "./useStorage";
import dummy from "./dummy.json" assert { type: "json" };

export type Bike = {
  id: number;
  name: string;
  rate: number;
};

// const KEY = "BIKES";

const useGetBikes = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Bike[]>();

  const getBikes = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      try {
        // const res = await fetch("EXTERNAL API");
        // const resData = await res.json();
        setData(dummy);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getBikes();
  }, [getBikes]);

  return {
    data,
    isLoading,
    refetch: getBikes,
  };
};

export default useGetBikes;
