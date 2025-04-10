import ReviewCard from "./review-card";

export default function Reveiews() {
  return (
    <div>
      <h1 className="text-center text-3xl lg:text-4xl font-oswald font-black mb-5 lg:mb-10">
        What Our Customers Say
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        <ReviewCard
          review="The flavors were absolutely delightful, with a perfect balance of spices
        that brought the dishes to life. The butter chicken was tender and
        flavorful, and the naan was soft and fresh. The service was prompt and
        courteous, making the experience truly enjoyable."
          customer="Vijay"
        />

        <ReviewCard
          review="The ambiance of the restaurant was warm and inviting, and the staff went
        above and beyond to ensure we had a great experience. The biryani was
        aromatic and perfectly cooked, and the mango lassi was refreshing and
        delicious. Highly recommended!"
          customer="Ananya"
        />

        <ReviewCard
          review="I was blown away by the authenticity of the dishes. The paneer tikka was
        grilled to perfection, and the dal makhani was rich and creamy. The
        staff was friendly and attentive, making it a memorable dining
        experience. Will definitely be coming back!"
          customer="Rohit"
        />
      </div>
    </div>
  );
}
