const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://bango-portfolio-9fyvtz0ji-strand-made.vercel.app";
