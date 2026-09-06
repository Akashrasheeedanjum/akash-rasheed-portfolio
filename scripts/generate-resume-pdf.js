const fs = require("fs");
const path = require("path");
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");

async function main() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const black = rgb(0.08, 0.09, 0.11);
  const muted = rgb(0.35, 0.38, 0.42);
  const accent = rgb(0.31, 0.55, 1);

  let y = 742;
  const left = 50;
  const width = 512;

  const draw = (text, options = {}) => {
    const size = options.size ?? 10;
    const useBold = options.bold ?? false;
    const color = options.color ?? black;
    const gap = options.gap ?? size + 4;
    page.drawText(text, {
      x: left,
      y,
      size,
      font: useBold ? bold : font,
      color,
      maxWidth: width,
    });
    y -= gap;
  };

  const section = (title) => {
    y -= 8;
    draw(title, { size: 11, bold: true, color: accent, gap: 8 });
    page.drawLine({
      start: { x: left, y: y + 2 },
      end: { x: left + width, y: y + 2 },
      thickness: 0.8,
      color: rgb(0.85, 0.87, 0.9),
    });
    y -= 12;
  };

  draw("Akash Rasheed", { size: 22, bold: true, gap: 18 });
  draw("Full-Stack Software Engineer", { size: 12, color: accent, gap: 14 });
  draw("Next.js  |  NestJS  |  Django  |  TypeScript  |  Python", {
    size: 10,
    color: muted,
    gap: 16,
  });
  draw("Email: akashanjum721@gmail.com", { size: 10, gap: 13 });
  draw("Location: Faisalabad, Pakistan", { size: 10, gap: 13 });
  draw("GitHub: github.com/Akashrasheeedanjum", { size: 10, gap: 13 });
  draw("LinkedIn: linkedin.com/in/akash-rasheed-37bb16241", {
    size: 10,
    gap: 16,
  });

  section("PROFILE");
  draw(
    "Full-Stack Software Engineer focused on building reliable, scalable web applications,",
    { size: 10, gap: 13 },
  );
  draw(
    "backend systems, REST APIs, and production-ready digital products using Next.js,",
    { size: 10, gap: 13 },
  );
  draw("NestJS, and Django.", { size: 10, gap: 14 });

  section("EXPERIENCE");
  draw("Python (Django) Developer - Ai Soft", { size: 11, bold: true, gap: 13 });
  draw("Jan 2024 - Mar 2025", { size: 9, color: muted, gap: 13 });
  const bullets = [
    "Developed and maintained web applications using Django",
    "Implemented CRUD functionality and client-focused solutions",
    "Built desktop applications using Python",
    "Worked with SQL databases",
    "Built ML-related applications using TensorFlow and Keras",
    "Contributed to secure, maintainable, high-performance software",
  ];
  for (const item of bullets) {
    draw(`- ${item}`, { size: 10, gap: 13 });
  }

  section("EDUCATION");
  draw("Bachelor of Computer Science", { size: 11, bold: true, gap: 13 });
  draw("University of Engineering and Technology (UET), Lahore", {
    size: 10,
    gap: 13,
  });
  draw("CGPA: 3.4", { size: 10, color: muted, gap: 14 });

  section("SELECTED PROJECTS");
  const projects = [
    "MatchVault - Live TypeScript web app (Vercel)",
    "POS System - Frontend + backend with live demo",
    "Immigration Marketplace - Next.js, NestJS, MongoDB, Stripe",
    "Milk Store Management - Django, DRF, SQL",
    "Food Safety Quality Backend - TypeScript API",
    "Bulk Email Sender - Python desktop automation",
  ];
  for (const item of projects) {
    draw(`- ${item}`, { size: 10, gap: 13 });
  }

  section("SKILLS");
  draw("Frontend: Next.js, React, TypeScript, JavaScript, HTML, CSS", {
    size: 10,
    gap: 13,
  });
  draw("Backend: NestJS, Django, DRF, Python, REST APIs", {
    size: 10,
    gap: 13,
  });
  draw("Databases: MongoDB, PostgreSQL, MySQL", { size: 10, gap: 13 });
  draw("Cloud: AWS, Azure, Docker, Vercel, S3", { size: 10, gap: 13 });
  draw("Tools: Git, GitHub, Stripe, Swagger, NATS, Brevo, Jest", {
    size: 10,
    gap: 13,
  });

  const bytes = await pdfDoc.save();
  const outDir = path.join("public", "resume");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "Akash-Rasheed-Resume.pdf");
  fs.writeFileSync(outPath, bytes);
  console.log("Wrote valid PDF:", outPath, bytes.length, "bytes");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
