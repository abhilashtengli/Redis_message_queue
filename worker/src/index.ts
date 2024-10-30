import { createClient } from "redis";

const client = createClient();

async function run() {
  await client.connect();
  while (1) {
    const response = await client.brPop("submit", 0);

    console.log(response);
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Processed the submission");
  }
}

run();
