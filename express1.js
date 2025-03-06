const express = require("express");
const app = express();
const fs = require("fs").promises; // will returns the promise

app.use(express.json()); //global middleware

app.get("/data", async (req, res) => {
  try {
    let data = await fs.readFile("./users.json", "utf8"); // returns a promise
    console.log(data);
    res.set({ "content-type": "application/json" });
    res.send(JSON.parse(data));
  } catch (err) {
    res.json(err);
  }
});

app.post("/data", async (req, res) => {
  try {
    let existingData = JSON.parse(await fs.readFile("./users.json", "utf8"));
    let inputData = req.body;
    console.log(inputData);
    existingData.push(inputData);
    await fs.writeFile("./users.json", JSON.stringify(existingData));
    res.json({ statusmessage: "data inserted", insertedData: inputData });
  } catch (err) {
    res.send(err);
  }
});

app.put("/data/:name", async (req, res) => {
  // console.log(req.params);
  let { name, email } = req.body;
  console.log(name, email);
  let existingData = JSON.parse(await fs.readFile("./users.json", "utf8"));
  console.log(existingData);
  let requestedName = req.params.name;
  let requiredData = existingData.filter((x, y) => {
    return x.name == requestedName;
  });

  console.log(requiredData)

  let remainindData = existingData.filter((x, y) => {
    return x.name !== requestedName;
  });

  console.log(remainindData);

  if (requiredData.length <= 0) {
    res.json("user not found");
  } else {
    requiredData[0].name = name;
    requiredData[0].email = email;
    console.log(requiredData);
    remainindData.push(requiredData[0])
    console.log(remainindData)
    await fs.writeFile("./users.json",JSON.stringify(remainindData))
    res.send({"message":"data inserted",updatedData:remainindData})
  }
});

// app.patch()

// app.delete()

app.listen(3250, () => {
  console.log("server running");
});

