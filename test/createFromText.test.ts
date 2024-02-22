import Civitai from "../dist/Civitai";
import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

describe("Create FromText Job", () => {
  let civitai: Civitai;

  beforeAll(() => {
    civitai = new Civitai({
      auth: process.env.CIVITAI_TOKEN || "",
    });
  });

  test("successfully creates a FromText job", async () => {
    const input = {
      baseModel: "SD_1_5",
      model: "urn:air:sd1:checkpoint:civitai:107842@275408",
      params: {
        prompt:
          "masterpiece, best quality, 1girl, IncrsAhri, multiple tails, fox tail, korean clothes, skirt, braid, arms behind back, seductive smile",
        negativePrompt:
          "(worst quality:1.4), (low quality:1.4), simple background, bad anatomy",
        scheduler: "EulerA",
        steps: 25,
        cfgScale: 7,
        width: 512,
        height: 768,
        seed: -1,
        clipSkip: 2,
      },
      additionalNetworks: {
        "urn:air:sd1:lora:civitai:162141@182559": {
          type: "Lora",
          strength: 1.0,
        },
      },
    };
    // Long polling as we did not pass in `wait` parameter
    const output = await civitai.image.fromText(input);
    console.log("Response:", JSON.stringify(output, null, 2));
    expect(output).toBeDefined();
  }, 600000);
});
