import React, { useReducer, useCallback, useContext } from "react";
import { defaultStepperState, reducer } from "../store";
import {
  DECREMENT_CURRENT_STEP,
  INCREMENT_CURRENT_STEP,
  SET_STEPS,
} from "../store/constants";

export const SplitwiseContext = React.createContext();

export const SplitwiseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStepperState);

  return (
    <SplitwiseContext.Provider value={[state, dispatch]}>
      {children}
    </SplitwiseContext.Provider>
  );
};

export const useStepper = () => {
  const [state, dispatch] = useContext(SplitwiseContext);

  const { currentStep, steps } = state;

  if (!SplitwiseContext) {
    throw new Error("useStepper should be used inside StepperProvider");
  }

  const incrementCurrentStep = useCallback(() => {
    dispatch({
      type: INCREMENT_CURRENT_STEP,
    });
  }, [dispatch]);

  const decrementCurrentStep = useCallback(() => {
    dispatch({
      type: DECREMENT_CURRENT_STEP,
    });
  }, [dispatch]);

  const setSteps = useCallback(
    (steps) => dispatch({ type: SET_STEPS, payload: { steps } }),
    [dispatch]
  );

  return {
    incrementCurrentStep,
    decrementCurrentStep,
    setSteps,
    currentStep,
    steps,
  };
};
