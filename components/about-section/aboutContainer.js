function AboutContainer({ children }) {
  return (
    <section className="bg-indigo-1 w-full mt-7 py-5 h-72 text-gray-1">
      <div className="container px-2 md:mx-auto">{children}</div>
    </section>
  );
}

export default AboutContainer;
