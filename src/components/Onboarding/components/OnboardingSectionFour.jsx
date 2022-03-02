import React from "react";
import { Heading, Text } from "../../../shared";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const OnboardingSectionFour = ({ formData }) => {
  return (
    <div className="onboarding-section-body">
      <svg
        className="icon color-primary mb-30 m-auto d-block"
        viewBox="0 0 24 24"
        width="60"
        height="60"
        fill="currentColor"
        focusable="focusable"
      >
        <path
          d="m9.98041627 8.77214488-2.58123459 2.58057102c-.26612112.4315227-.23251501.8139508.10081832 1.1472841s.70831564.3593528 1.12494692.0780585l1.79342138-1.7929987 5.5358094 5.5358094c.3638815.1194205.712489.0124641 1.0458223-.3208692s.4827811-.724573.4483433-1.173719l-6.0536447-6.05402312c-.390554-.39044083-1.0236659-.39049142-1.41428233-.000113zm2.01958373 13.21566982c-5.304 0-9.98453778-4.6838147-9.98453778-9.9878147s4.68053778-10.00323408 9.98453778-10.00323408 10.0077474 4.69923408 10.0077474 10.00323408-4.7037474 9.9878147-10.0077474 9.9878147zm-.012-21.9878147c-6.624 0-11.988 5.376-11.988 12s5.364 12 11.988 12c6.636 0 12.012-5.376 12.012-12s-5.376-12-12.012-12z"
          transform="matrix(1 0 0 -1 0 24)"
        />
      </svg>
      <div className="text-center">
        <Heading level="1">{`Congratulations, ${formData["First Name"]}!`}</Heading>
        <Text type="body">
          You have completed onboarding, you can start using the Eden!
        </Text>
      </div>
      <Link to="dashboard">
        <button className="mt-30 cursor-pointer">Launch Eden</button>
      </Link>
    </div>
  );
};

export default OnboardingSectionFour;
