import { useEffect, useState } from "react";

const DonationBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("scampanyBannerClosed");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("scampanyBannerClosed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-yellow-300 text-black px-4 py-3 text-sm font-medium flex justify-between items-center z-50 shadow-md">
      <span>
        🚀 Help us upgrade <strong>Scampany</strong> with a custom domain & new features — consider supporting us!
      </span>
      <div className="flex items-center gap-4">
        <button
          onClick={() => window.location.href = '/donate'}
          className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition"
        >
          Donate
        </button>
        <button
          onClick={handleClose}
          className="text-black text-lg px-2 hover:text-red-600"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default DonationBanner;

