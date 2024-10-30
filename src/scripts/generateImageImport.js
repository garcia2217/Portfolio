import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

// Step 1: Define `__dirname` in ES module syntax
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Step 2: Define paths
const folderPath = path.join(__dirname, "../assets/Cluster"); // Folder with images
const outputPath = path.join(__dirname, "../utils/cluster.js"); // Output file for imports

// Step 3: Read files in the images folder
const files = fs.readdirSync(folderPath);

// Step 4: Create import statements for each image
const imports = files
  .map((file, index) => `import img${index} from '../assets/Cluster/${file}';`)
  .join("\n");

// Step 5: Create an export array with the imported images
const exportArray = `export default [${files
  .map((_, index) => `img${index}`)
  .join(", ")}];`;

// Step 6: Write to the output file
fs.writeFileSync(outputPath, `${imports}\n\n${exportArray}`);
