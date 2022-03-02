import React, { useState } from "react";
import { Heading, Card, Text } from "../../../shared";

const CardData = [
  {
    id: 1,
    icon: <div className="icon"></div>,
    name: "For myself",
    description: "Write better. Think more clearly. Stay organized.",
  },
  {
    id: 2,
    icon: <div className="icon"></div>,
    name: "With my team",
    description: "Wikis, docs, tasks & projects,all in one place.",
  },
];

const OnboardingSectionThree = ({ goToNext }) => {
  const [cardId, seCard] = useState(1);

  const CardSection = ({ name, description, icon }) => {
    return (
      <>
        {icon}
        <Heading level="5">{name}</Heading>
        <Text type="caption">{description}</Text>
      </>
    );
  };

  return (
    <div className="onboarding-section-body">
      <div className="text-center">
        <Heading level="1">How are you planning to use Eden?</Heading>
        <Text type="body">
          We'll streamline your setup experince acccordingly.
        </Text>
      </div>

      <div className="form">
        <div className="card-container">
          {CardData.map((item, index) => {
            return (
              <Card
                onClick={() => seCard(item.id)}
                selected={item.id === cardId}
                key={index}
                className={`${index < CardData.length - 1 ? "mr-20" : ""}`}
              >
                {CardSection(item)}
              </Card>
            );
          })}
        </div>

        <button onClick={goToNext} className="mt-30 cursor-pointer">
          Create Workplace
        </button>
      </div>
    </div>
  );
};

export default OnboardingSectionThree;
