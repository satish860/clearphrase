import CallToActionWithAnnotation from "./components/CallToActionWithAnnotation";
import SimpleThreeColumns from "./components/Features";
import WithSpeechBubbles from "./components/Testimonials";
import SmallWithSocial from "./components/Footer";

export default function Landing() {
  return (
    <>
     <header
        className="flex flex-row justify-between z-50 h-14"
        data-theme="light"
      >
        <div className="flex items-center">
          <h1 className="text-xl font-bold p-4">
            <span className="text-2xl">C</span>
            <span className="text-sm">learphrase</span>
            <sup className="text-xs font-medium text-secondary-600 transform scale-75">
              Beta
            </sup>
          </h1>
        </div>
      </header>
      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <WithSpeechBubbles />
      <SmallWithSocial/>
    </>
  );
}
