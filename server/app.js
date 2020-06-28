// 建立server並交給socket.io去處理

// 引入使用者相關方法（把所有與users相關的private方法抽成一個集合）
const usersDB = require("../utils/users")();
// 引入message資料定義的類
const Message = require("../models/message")();


// 使用 http 啟動 Server ，再把 Server 物件送給 socket.io
// 處理過後會得到一個物件 io ，用它的 on 監聽開啟連線後的設定

// 宣告 app 變數 = express function(建立一個 Express 伺服器)
const app = require('express')();
//將 express 放進 http 中
const server = require('http').Server(app)
//將啟動的 Server 送給 socket.io 處理，建立一個連線到http伺服器的新socket.io例項
const io = require("socket.io")(server);

// 用io的on方法監聽連線
// client端連接時，會捕捉事件內容的socket物件，將其傳到後面的function
io.on("connection", (socket) => {
  // 監聽client端 將user傳入 用 usersDB.addUser方法新增使用者
  socket.on("createUser", (user) => {
    usersDB.addUser({
      ...user,
      id: socket.id,
    });

    return { id: socket.id };
  });

  //監聽client端joinRoom的事件
  socket.on("joinRoom", ({ name, room }) => {
    socket.join(room); // 加入一個room中
   // 將事件usersDB.getUsersByRoom(room) 回傳給 所有 已加入這個room的client端
    io.to(room).emit("updateUsers", usersDB.getUsersByRoom(room));
    socket.emit("newMessage", new Message("admin", `Hello, ${name}`));

    //廣播  ${name} 已經連線聊天室～ 給除了發送者外所有連結著同一個room的其他client端
    socket.broadcast
      .to(room)
      .emit(
        "newMessage",
        new Message("admin", ` ${name} 已經連線聊天室～`),
      );
  });

  //監聽client端createMessage事件
  socket.on("createMessage", ({ id, msg }) => {
    const user = usersDB.getUser(id);
    if (user) {
      io.to(user.room).emit("newMessage", new Message(user.name, msg, id));
    }
  });

  //監聽client端setTypingStatus事件
  socket.on("setTypingStatus", ({ room, typingStatus, id }) => {
    usersDB.setTypingStatus(id, typingStatus);
    io.to(room).emit("updateUsers", usersDB.getUsersByRoom(room));
  });

  //離開聊天室
  const exitEvents = ["leftChat", "disconnect"];
  exitEvents.forEach((event) => {
    socket.on(event, () => {
      const id = socket.id;
      const user = usersDB.getUser(id);
      if (!user) return;
      const { room, name } = user;
      usersDB.removeUser(id);
      socket.leave(room);
      io.to(room).emit("updateUsers", usersDB.getUsersByRoom(room));
      io.to(room).emit(
        "newMessage",
        new Message("admin", `User ${name} left chat`),
      );
    });
  });

});

// 匯出 express 和 這個設定好socket.io的server
  module.exports = {
    app,
    server,
  };


