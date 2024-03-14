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

  //always return the value in boolean. Either true or false.
  return isOnline;
};

export default useOnlineOfflineStatus;
