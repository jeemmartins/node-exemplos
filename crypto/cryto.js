const crypto = require("crypto");

crypto.randomBytes(15, (err, buffer) => {
  if (err) {
    console.error(err);

    return;
  }

  console.log(buffer.toString("hex"));
});
