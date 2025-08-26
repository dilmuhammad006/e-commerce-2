import { useEffect, useState } from 'react';

export const useDebounce = (props: string, time: number) => {
  const [value, setValue] = useState(props);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setValue(props);
    }, time);

    return () => clearTimeout(timeOut);
  }, [props, time]);

  return value;
};
