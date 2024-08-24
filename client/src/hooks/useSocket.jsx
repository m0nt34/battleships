import { useEffect } from "react";
import {
  socket,
  connectSocket,
  disconnectSocket,
  listenToEvent,
  emitEvent,
} from "../services/socket";

const useSocket = (eventName, callback) => {
  useEffect(() => {
    connectSocket();
    if (eventName && callback) {
      listenToEvent(eventName, callback);
    }

    return () => {
      if (eventName) {
        removeListener(eventName);
      }
      disconnectSocket();
    };
  }, [eventName, callback]);

  return { socket, emitEvent };
};

export default useSocket;
