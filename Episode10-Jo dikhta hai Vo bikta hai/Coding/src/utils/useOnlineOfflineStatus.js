import { useEffect, useState } from "react";

const useOnlineOfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    window.addEventListener("online", () => {
      setIsOnline(true);
    });
  }, []);

  //always return the value in boolean.
  return isOnline;
};

export default useOnlineOfflineStatus;
