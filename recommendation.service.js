export default async function recommend(preferences, mode = 'single') {
  const res = await fetch('http://localhost:3001/products');
  const products = await res.json();

  const scored = products.map(p => ({
    ...p,
    score: preferences.reduce((sum, pref) => p.features.includes(pref) ? sum + 1 : sum, 0)
  }));

  const maxScore = Math.max(...scored.map(p => p.score));
  const filtered = scored.filter(p => p.score === maxScore);

  return mode === 'multiple' ? filtered : [filtered[filtered.length - 1]];
}
