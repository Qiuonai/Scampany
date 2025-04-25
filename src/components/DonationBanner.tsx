// src/components/DonationBanner.tsx
import { useEffect, useState } from "react";

const DonationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const bannerDismissed = localStorage.getItem("scampanyBannerClosed");
    if (!bannerDismissed) {
      // Add a slight delay for a smoother entrance (optional)
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("scampanyBannerClosed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 w-full bg-yellow-300 text-black px-4 py-3 text-sm font-medium flex flex-col md:flex-row justify-between items-center z-50 shadow-lg">
      <span className="text-center md:text-left mb-2 md:mb-0">
        🚀 Help us upgrade <strong>Scampany</strong> with a custom domain & new features — consider supporting us!
      </span>

      <div className="flex items-center gap-3">
        <button
          onClick={() => window.location.href = "donate"}
          className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition"
        >
          Donate
        </button>
        <button
          onClick={handleClose}
          className="text-black text-xl font-bold hover:text-red-600 transition"
          aria-label="Close Banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default DonationBanner;


