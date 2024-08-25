import express from "express";
import http from "http";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});
const activeUsers = [];
const rooms = {};

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  socket.on("start-searching", (shipPosition) => {
    if (!activeUsers.some((user) => user.id === socket.id)) {
      activeUsers.push({ id: socket.id, shipPosition });
    }
    if (activeUsers.length >= 2) {
      const user1 = activeUsers.shift();
      const user2 = activeUsers.shift();

      const room = `${user1.id}-${user2.id}`;
      socket.join(room);
      rooms[room] = { user1, user2 };

      io.to(user1.id).emit("room-assigned", {
        room,
        opponentShips: user2.shipPosition,
      });
      io.to(user2.id).emit("room-assigned", {
        room,
        opponentShips: user1.shipPosition,
      });
    }
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);

    let roomToRemove;
    for (const [room, { user1, user2 }] of Object.entries(rooms)) {
      if (user1.id === socket.id || user2.id === socket.id) {
        roomToRemove = room;
        break;
      }
    }

    if (roomToRemove) {
      const { user1, user2 } = rooms[roomToRemove];
      const opponentId = user1.id === socket.id ? user2.id : user1.id;

      io.to(opponentId).emit("opponent-disconnected", {
        message: "Your opponent has disconnected.",
      });

      delete rooms[roomToRemove];
    }

    const indexOfDisUser = activeUsers.findIndex(
      (user) => user.id === socket.id
    );
    if (indexOfDisUser !== -1) {
      activeUsers.splice(indexOfDisUser, 1);
    }
  });
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
