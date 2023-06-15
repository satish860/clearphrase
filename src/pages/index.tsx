import CallToActionWithAnnotation from "./components/CallToActionWithAnnotation";
import SimpleThreeColumns from "./components/Features";
import WithSpeechBubbles from "./components/Testimonials";
import SmallWithSocial from "./components/Footer";
import Header from "./components/Header";

export default function Landing() {
  return (
    <>
      <Header />
      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <WithSpeechBubbles />
      <SmallWithSocial />
    </>
  );
}
