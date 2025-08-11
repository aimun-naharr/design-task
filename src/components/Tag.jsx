import { CircleCheckBig } from "lucide-react";

const Tag = ({ tag }) => {
  return (
    <div className="bg-white px-4 py-2 rounded-full flex gap-2 items-center">
      <span className="text-orange">
        <CircleCheckBig size={16} />
      </span>
      <span>{tag}</span>
    </div>
  );
};
export default Tag;
