export default function Education() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">What is Traditional Chinese Medicine (TCM)?</h1>
      <p>Traditional Chinese Medicine is a holistic system that includes acupuncture, herbal medicine, Qi Gong, and dietary therapy.</p>
      <h2 className="text-xl font-semibold mt-6">Core TCM Concepts</h2>
      <ul className="list-disc pl-4">
        <li><strong>Qi:</strong> Vital life force that flows through the body</li>
        <li><strong>Yin-Yang:</strong> Balancing forces for health</li>
        <li><strong>Five Elements:</strong> Wood, Fire, Earth, Metal, Water</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">References</h2>
      <ul className="list-disc pl-4">
        <li><a href="https://www.who.int/publications/i/item/9789241506090" target="_blank">WHO TCM Strategy</a></li>
        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7141912/" target="_blank">History of TCM – PubMed</a></li>
      </ul>
    </div>
  );
}