import Civitai from "../src/Civitai";
import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

describe("Get Job Status by Token Functionality", () => {
  let civitai: Civitai;
  let jobId: string = "3e84e2a1-8c75-4f1e-ad10-ae9f06134e3a";
  let token: string =
    "W3siVGVtcGxhdGVUeXBlIjoiQ2l2aXRhaS5PcmNoZXN0cmF0aW9uLkFwaS5Db250cm9sbGVycy52MS5Db25zdW1lci5Kb2JzLlRlbXBsYXRlcy5Db21meUpvYlRlbXBsYXRlIiwiSm9icyI6eyIzZTg0ZTJhMS04Yzc1LTRmMWUtYWQxMC1hZTlmMDYxMzRlM2EiOm51bGx9fV0=";

  beforeAll(() => {
    civitai = new Civitai({
      auth: process.env.CIVITAI_TOKEN || "",
    });
  });

  test("successfully fetches job status", async () => {
    const response = await civitai.job.get(token);
    console.log("Response:", JSON.stringify(response, null, 2));
    expect(response).toBeDefined();
  });
});
