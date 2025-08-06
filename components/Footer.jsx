import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative bg-transparent" id="contact">
      {/* Background Grid */}
      <div className="absolute inset-x-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white mb-4">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 mt-2 sm:mt-6 text-base sm:text-lg">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro" className="mt-6 sm:mt-8">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-16 px-6 max-w-6xl mx-auto gap-6">
        <p className="text-sm sm:text-base text-white-200 text-center sm:text-left">
          © 2024 MANSHI. All rights reserved.
        </p>

        <div className="flex gap-5">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 flex justify-center items-center rounded-lg border border-black-300 backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-75 cursor-pointer"
            >
              <img src={info.img} alt="icon" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;


