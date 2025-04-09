import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ReviewCard({ review, customer }) {
  return (
    <div className="w-full h-78 bg-[#FFF8EF] shadow-sm p-4 rounded-md space-y-4 flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-300">
      <p className="text-gray-600">{review}</p>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <p className="text-lg font-semibold">{customer}</p>
      </div>
    </div>
  );
}
