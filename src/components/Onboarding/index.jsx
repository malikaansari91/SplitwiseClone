import { useState } from "react";
import logo from "../../assets/logo.svg";
import { useStepper } from "../../context";
import { Heading, Stepper } from "../../shared";
import OnboardingSectionFour from "./components/OnboardingSectionFour";
import OnboardingSectionOne from "./components/OnboardingSectionOne";
import OnboardingSectionThree from "./components/OnboardingSectionThree";
import OnboardingSectionTwo from "./components/OnboardingSectionTwo";

function Onboarding() {
  const [formData, setFormData] = useState({});
  const { incrementCurrentStep } = useStepper();
  const updateFormData = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
  };
  console.log(formData);
  return (
    <div className="onboarding-container mt-60">
      <div className="container sm-pr-10 sm-pl-10">
        <div className="d-flex flex-justify-center flex-items-center onboarding-header mb-60">
          <svg
            className="icon color-primary mr-10  d-block"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            fill="currentColor"
            focusable="focusable"
          >
            <g fill="currentColor">
              <path d="m14.1903028 24h-4.38060565c-.73010094 0-1.46020189-.5413534-1.64272713-1.443609l-.36505047-2.3458647c-.36505048-.1804511-.54757572-.3609022-.91262619-.5413534l-2.19030284.9022557c-.91262619.3609022-1.64272714 0-2.19030285-.7218045l-2.19030285-3.7894737c-.36505047-.7218045-.36505047-1.6240602.36505048-2.1654136l1.82525237-1.443609c0-.1804511 0-.3609022 0-.5413534 0-.1804511 0-.3609022 0-.5413533l-1.82525237-1.44360907c-.73010095-.54135338-.91262619-1.62406015-.36505048-2.16541353l2.19030285-3.78947369c.54757571-.72180451 1.4602019-.90225564 2.19030285-.72180451l2.19030284.90225564c.36505047-.18045113.54757571-.36090226.91262619-.54135338l.36505047-2.16541354c.18252524-.90225564.91262619-1.44360902 1.64272713-1.44360902h4.38060565c.730101 0 1.4602019.54135338 1.6427272 1.44360902l.3650505 2.34586466c.3650504.18045113.5475757.36090226.9126261.54135339l2.1903029-1.08270677c.9126262-.36090225 1.6427271 0 2.1903028.72180451l2.1903029 3.78947369c.3650505.72180451.1825252 1.62406015-.3650505 2.16541353l-1.8252524 1.44360907v.5413533.5413534l1.8252524 1.443609c.730101.5413534.9126262 1.6240602.3650505 2.1654136l-2.1903029 3.7894737c-.3650504.7218045-1.2776766 1.0827067-2.0077776.7218045l-2.1903028-.9022557c-.3650505.1804512-.5475757.3609023-.9126262.5413534l-.3650505 2.1654135c-.3650505.9022557-.9126262 1.6240602-1.8252524 1.6240602zm-3.8330299-2.5263158h3.2854542l.3650505-3.0676692.5475757-.1804511c.5475757-.1804511 1.0951514-.5413534 1.6427272-.9022556l.5475757-.3609023 2.9204038 1.0827068 1.6427271-2.8872181-2.3728281-1.8045112.1825252-.7218046c0-.3609022 0-.5413533 0-.9022556 0-.3609022 0-.5413534 0-.9022556v-.7218045l.5475758-.54135343 1.8252523-1.44360902-1.6427271-2.70676692-2.9204038 1.08270677-.5475757-.36090225c-.5475757-.36090226-1.0951514-.72180452-1.6427271-.90225564l-.5475758-.18045113-.3650504-3.06766917h-3.2854543l-.3650505 3.06766917-.54757568.18045113c-.54757571.18045112-1.09515143.54135338-1.64272714.90225564l-.73010095.72180451-2.92040379-1.2631579-1.64272713 2.88721805 2.37282808 1.80451129-.18252524.7218045v.9022556.9022557.7218045l-.54757571.3609022-1.82525237 1.4436091 1.64272713 2.887218 2.9204038-1.0827068.54757571.3609023c.54757571.3609023 1.09515142.7218045 1.64272713.9022556l.54757571.1804512zm1.6427271-5.2330827c-2.37282808 0-4.38060569-1.9849624-4.38060569-4.3308271 0-2.34586463 2.00777761-4.33082703 4.38060569-4.33082703 2.3728281 0 4.3806057 1.9849624 4.3806057 4.33082703 0 2.3458647-2.0077776 4.3308271-4.3806057 4.3308271zm0-6.31578947c-1.0951514 0-2.00777761.90225567-2.00777761 1.98496237 0 1.0827068.91262621 1.9849624 2.00777761 1.9849624s2.0077776-.9022556 2.0077776-1.9849624c0-1.0827067-.9126262-1.98496237-2.0077776-1.98496237z" />
            </g>
          </svg>
          <Heading level="2">Eden</Heading>
        </div>
        <div className="container">
          <Stepper className="flex-items-center">
            <Stepper.Steps>
              <Stepper.Step id="first">
                <OnboardingSectionOne
                  setFormData={updateFormData}
                  goToNext={incrementCurrentStep}
                />
              </Stepper.Step>
              <Stepper.Step id="second">
                <OnboardingSectionTwo
                  setFormData={updateFormData}
                  goToNext={incrementCurrentStep}
                />
              </Stepper.Step>
              <Stepper.Step id="third">
                <OnboardingSectionThree
                  setFormData={updateFormData}
                  goToNext={incrementCurrentStep}
                />
              </Stepper.Step>
              <Stepper.Step id="forth">
                <OnboardingSectionFour formData={formData} />
              </Stepper.Step>
            </Stepper.Steps>
          </Stepper>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
