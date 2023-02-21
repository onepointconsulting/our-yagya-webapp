import { useState, useEffect } from "react";

export function useLoadingState() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading the content for this item
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return loading;
}
