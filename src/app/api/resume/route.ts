import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "resume",
    "Akash-Rasheed-Resume.pdf",
  );

  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Akash-Rasheed-Resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
