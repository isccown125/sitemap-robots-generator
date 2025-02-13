// hooks/useUrlState.ts
import { useState, useEffect, useCallback } from "react";

interface UseUrlStateOptions<T> {
  paramName: string;
  defaultValue: T;
  validator?: (value: string) => boolean;
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

export const useUrlState = <T>({
  paramName,
  defaultValue,
  validator = () => true,
  serializer = String,
  deserializer = (value: string) => value as unknown as T,
}: UseUrlStateOptions<T>) => {
  // Funkcja do pobierania początkowej wartości z URL
  const getInitialValue = useCallback((): T => {
    const params = new URLSearchParams(window.location.search);
    const valueFromUrl = params.get(paramName);

    if (valueFromUrl && validator(valueFromUrl)) {
      return deserializer(valueFromUrl);
    }
    return defaultValue;
  }, [paramName, defaultValue, validator, deserializer]);

  const [value, setValue] = useState<T>(getInitialValue());

  // Aktualizacja URL przy zmianie wartości
  const updateValue = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      const actualNewValue =
        newValue instanceof Function ? newValue(value) : newValue;
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set(paramName, serializer(actualNewValue));
      window.history.pushState({}, "", newUrl);
      setValue(actualNewValue);
    },
    [paramName, serializer, value]
  );

  // Nasłuchiwanie na zmiany w historii przeglądarki
  useEffect(() => {
    const handlePopState = () => {
      setValue(getInitialValue());
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [getInitialValue]);

  return [value, updateValue] as const;
};
