export default function ProductCard({ img, title, description }) {
  return (
    <div className="w-full h-78 bg-white shadow-sm p-4 rounded-md space-y-2 flex flex-col items-center justify-between cursor-pointer hover:shadow-xl transition-all duration-300">
      <img src={img} className="h-40 mx-auto rounded-lg" />
      <p className="text-xl font-semibold pt-4">{title}</p>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
}
