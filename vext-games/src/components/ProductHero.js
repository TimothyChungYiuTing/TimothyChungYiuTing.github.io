import BrandName from "../images/BrandName.png";
import ProductBG from "../images/ProductHeroBackground.png";
import NavigationBar from "./NavigationBar";

export default function ProductHero() {
  return (
    <div className="custom-gradient-bg h-screen/2 flex flex-col animate-gradient">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <header className="absolute inset-x-0 top-0 z-50">
        <NavigationBar />
      </header>

      <div className="relative isolate px-6 py-20 lg:px-8 h-[60vh] flex items-center justify-center">
        <div className="mx-auto max-w-2xl">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <img
                className="h-60 w-auto animate-shadowPulse"
                src={BrandName}
                alt="Vext Games"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative isolate px-6 pt-14 lg:px-8 min-h flex items-center justify-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <img
                className="custom-image-bg animate-shadowPulse"
                src={ProductBG}
                alt="Vext Games"
              />
            </div>
          </div>
      </div> */}
    

    </div>
  );
}
