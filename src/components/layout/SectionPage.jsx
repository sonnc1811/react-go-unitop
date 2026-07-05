function SectionPage({ title, children }) {
  return (
    <section className="bg-slate-50 px-6 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-balance text-center">
        {title}
      </h1>
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}
export default SectionPage;
