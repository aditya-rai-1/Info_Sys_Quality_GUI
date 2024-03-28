import cors from "cors";
import express from "express";
import reader from "xlsx";

const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;

let file = reader.readFile("./server/b.xlsx");
const Sheet1 = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


let i = 0;
app.post("/data", async (req, res) => {
  let t1 =
    Sheet1[i]["Temperature-1"] *
    Sheet1[i]["Humidity-1"] *
    Sheet1[i]["co2ppm-1"];
  let t2 =
    Sheet1[i]["Temperature-2"] *
    Sheet1[i]["Humidity-2"] *
    Sheet1[i]["co2ppm-2"];
  let t3 =
    Sheet1[i]["Temperature-3"] *
    Sheet1[i]["Humidity-3"] *
    Sheet1[i]["co2ppm-3"];
  const quality = (((t1 + t2 + t3) / 3) % 100) + 1;

  console.log(quality);
  res.send({ data: quality });
  i++;
});
