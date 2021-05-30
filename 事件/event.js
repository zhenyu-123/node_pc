let fs = require("fs");
fs.readFile(
  "./hello.txt",
  { flag: "r", encoding: "utf-8" },
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      // 读取成功后触发事件
      console.log(data)
      evetList.emit("fileSuccess", data);
    }
  }
);

let evetList = {
  event: {
    // fileSuccess: [{}, {}, {}],
  },
  on: function (eventName, eventFn) {
    if (this.event[eventName]) {
      this.event[eventName].push(eventFn);
    } else {
      this.event[eventName] = [];
      this.event[eventName].push(eventFn);
    }
  },
  emit: function (eventName, data) {
    if (this.event[eventName]) {
      this.event[eventName].forEach((element) => {
        element(data);
      });
    }
  },
};

// 监听事件
evetList.on("fileSuccess", function (msg) {
  console.log("第一步");
});
evetList.on("fileSuccess", function (msg) {
  console.log("第二步");
});
evetList.on("fileSuccess", function (msg) {
  console.log("第三步");
});
