import { create } from "zustand";
import { socket, connectSocket, disconnectSocket } from "../services/socket";

const useSocketStore = create((set) => ({
  socket: null,
  connect: () => {
    connectSocket();
    set({ socket }); 
  },
  disconnect: () => {
    disconnectSocket();
    set({ socket: null }); 
  },
  emitEvent: (eventName, data) => {
    if (socket) {
      socket.emit(eventName, data);
    }
  },
  listenToEvent: (eventName, callback) => {
    if (socket) {
      socket.on(eventName, callback);
    }
  },
  removeListener: (eventName) => {
    if (socket) {
      socket.off(eventName);
    }
  },
}));

export default useSocketStore;
