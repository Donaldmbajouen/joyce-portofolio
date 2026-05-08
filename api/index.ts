import { VercelRequest, VercelResponse } from "@vercel/node";

let app: any;

async function initialize() {
  if (!app) {
    const module = await import("../dist/server/index.js");
    app = module.default;
  }
  return app;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const handler = await initialize();

    // Convert Node.js request/response to Web Standard Request
    const url = new URL(`https://${req.headers.host}${req.url}`);
    const webReq = new Request(url, {
      method: req.method,
      headers: req.headers as any,
      body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
    });

    const response = await handler(webReq);

    // Convert Web Standard Response to Node.js response
    res.status(response.status);

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    res.send(await response.text());
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

