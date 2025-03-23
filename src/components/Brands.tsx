// Remove React import if using React 17+ with "jsx": "react-jsx" in tsconfig.json
// import React from 'react';
import foxLogo from "../assets/Fox Corporation_idXlymuYA3_1.png";
import carvanaLogo from "../assets/Carvana_idc7QPeBXn_1.png";
import intuitLogo from "../assets/Intuit_idgAnncvmj_1.png";
import kivaLogo from "../assets/Kiva_Kiva_logo_1.png";
import spotifyLogo from "../assets/soptify.png"; // Note: Check if "soptify" is a typo (should it be "spotify"?)
import lonelyPlanetLogo from "../assets/Lonely Planet_idmFS_6MYQ_1.png";

const Brands = () => {
  const brands = [
    { name: "Fox", logo: foxLogo }, // Use the imported variable directly
    { name: "Lonely Planet", logo: lonelyPlanetLogo }, // Use local asset instead of CDN
    { name: "Intuit", logo: intuitLogo }, // Use local asset instead of CDN
    { name: "Carvana", logo: carvanaLogo }, // Use local asset instead of CDN
    { name: "Kiva", logo: kivaLogo }, // Use local asset instead of CDN
    {
      name: "Target",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/200px-Target_Corporation_logo_%28vector%29.svg.png",
    },
    { name: "Spotify", logo: spotifyLogo },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
