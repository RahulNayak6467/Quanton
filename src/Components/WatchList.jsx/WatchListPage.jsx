import { useEffect, useState } from "react";
import { X } from "lucide-react";
import WatchListStar from "./WatchListStar";
import SearchBar from "../SearchBar";

function WatchListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <div className="border-dashboard-border border bg-dashboard-card flex items-center justify-between w-[90%] rounded-full mx-auto py-3">
        <h1 className="text-text-primary text-2xl font-sans font-bold ml-20">
          My WatchList
        </h1>
        <button
          onClick={openModal}
          className="p-2 px-4 bg-accent text-text-primary rounded-2xl mr-20 cursor-pointer hover:bg-accent-hover transition-all"
        >
          Add Stock
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs">
          <div
            className="absolute inset-0"
            onClick={closeModal}
            aria-hidden="true"
          />

          <div
            className="relative z-50 w-[90%] max-w-xl rounded-2xl bg-dashboard-card border border-dashboard-border p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 text-text-secondary hover:text-text-primary"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Add stock to your watchlist
            </h2>

            <SearchBar
              onSubmit={() => {
                // You can wire this to actual add-to-watchlist logic later
                closeModal();
              }}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default WatchListPage;
