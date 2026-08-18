const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Insurance API listening on http://localhost:${PORT}`);
});
