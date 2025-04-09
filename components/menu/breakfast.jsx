import ProductCard from "../product-card";

export default function Breakfast() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <ProductCard
        img="/images/idle.png"
        title="Idle"
        description="A soft and fluffy steamed rice cake, typically served with chutney and sambar."
      />
      <ProductCard
        img="/images/dosa.png"
        title="Dosa"
        description="A thin and crispy fermented rice and lentil crepe, often served with chutney and sambar."
      />
      <ProductCard
        img="/images/poori.png"
        title="Poori"
        description="A puffed and golden deep-fried bread made from unleavened wheat flour, often paired with curry."
      />
      <ProductCard
        img="/images/chapati.png"
        title="Chapati"
        description="A soft and round whole wheat flatbread, commonly served with curries, vegetables, or lentils."
      />
      <ProductCard
        img="/images/idle.png"
        title="Idle"
        description="A soft and fluffy steamed rice cake, typically served with chutney and sambar."
      />
      <ProductCard
        img="/images/dosa.png"
        title="Dosa"
        description="A thin and crispy fermented rice and lentil crepe, often served with chutney and sambar."
      />
      <ProductCard
        img="/images/poori.png"
        title="Poori"
        description="A puffed and golden deep-fried bread made from unleavened wheat flour, often paired with curry."
      />
      <ProductCard
        img="/images/chapati.png"
        title="Chapati"
        description="A soft and round whole wheat flatbread, commonly served with curries, vegetables, or lentils."
      />
    </div>
  );
}
