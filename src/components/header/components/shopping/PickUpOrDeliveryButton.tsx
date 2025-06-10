type PickUpOrDeliveryButtonProps = {
  checked: boolean;
  onChange: () => void;
};
function PickUpOrDeliveryButton({
  checked,
  onChange,
}: PickUpOrDeliveryButtonProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
        type="checkbox"
      />
      <div
        className="peer rounded-full outline-none duration-100 after:duration-300 w-17 h-8 bg-[#E56053]/80 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#E56053]  
        after:content-['R'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-5 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  
        after:text-[#E56053] after:font-bold peer-checked:after:translate-x-10 peer-checked:after:content-['D'] peer-checked:after:border-white"
      ></div>{" "}
    </label>
  );
}
export default PickUpOrDeliveryButton;
