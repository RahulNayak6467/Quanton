import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";

function SearchBar({ onSubmit, onClose }) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (onSubmit) onSubmit(value.trim());
    }

    if (e.key === "Escape") {
      if (onClose) onClose();
    }
  };

  const handleClear = () => {
    setValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex justify-center items-center h-15 relative w-full">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Enter your favourite stock by company name or symbol..."
        className={
          isFocused
            ? "outline-none text-lg text-text-disabled mt-4 h-12 mx-auto w-full border-2 border-dashboard-border px-4 bg-dashboard-card pl-10 rounded-full"
            : "outline-none text-lg text-text-disabled mt-4 h-12 mx-auto w-full border-2 border-white px-4 bg-dashboard-card pl-10 rounded-full focus:border-dashboard-page"
        }
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="text-text-disabled absolute right-4 top-1/2 mt-1.5 -translate-y-1/2 cursor-pointer hover:text-text-primary"
        >
          <div className="flex items-center cursor-pointer">
            <X size={20} />
          </div>
        </button>
      )}
    </div>
  );
}

export default SearchBar;
