import "dotenv/config";
import fs from "fs";
import path from "path";
import { buildGraph } from "./graph.js";

async function main() {
  const graph = buildGraph();

  const inputState = {
    filePaths: [
      "../tests/API/apiValidation.spec.ts",
      "../tests/API/OrangeHrmApiClient.ts",
      "../tests/API/ApiEndpoints.ts",
      "../fixtures/fixtures.ts",
      "../pages/DashboardPage.ts"
    ],
    currentFilePath: "",
    currentFileContent: "",
    currentFileType: "",
    fileReviews: [],
    frameworkSummary: "",
    finalReport: ""
  };

  const result = await graph.invoke(inputState);

  const reportsDir = "reports";

  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
  }

  const reportPath = path.join(reportsDir, "framework-review-report.md");

  fs.writeFileSync(reportPath, result.finalReport, "utf-8");

  console.log("Framework review completed successfully.");
  console.log(`Report generated at: ${reportPath}`);
}

main().catch((error) => {
  console.error("Agent execution failed:");
  console.error(error);
  process.exit(1);
});