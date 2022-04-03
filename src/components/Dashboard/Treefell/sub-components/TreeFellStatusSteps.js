import React from "react";
import { Stepper, Step } from "react-form-stepper";
import { GiCheckMark, GiHalfLog } from "react-icons/gi";
import { FaTruckLoading, FaTruckMoving } from "react-icons/fa";

const TreeFellStatusSteps = ({ activeStep }) => {
  return (
    <Stepper
      className="w-full my-3"
      stepClassName="bg-tclPrimary"
      connectorStyleConfig={{
        // activeColor: "#3e7c17",
        // completedColor: "#94a3b8",
        // disabledColor: "#D3F3BE",
        size: 2,
      }}
      styleConfig={{
        inactiveBgColor: "#D3F3BE",
        // inactiveTextColor:'',
        activeBgColor: "#3e7c17",
        activeTextColor: "white",
        completedBgColor: "#94a3b8",
        // completedTextColor:''
      }}
      activeStep={activeStep}
    >
      <Step label="Fresh" type="button">
        <GiHalfLog />
      </Step>
      <Step label="Moved to Sliding Area" type="button">
        <FaTruckLoading />
      </Step>
      <Step label="Transported" type="button">
        <FaTruckMoving />
      </Step>
      <Step label="Delivered" type="button">
        <GiCheckMark />
      </Step>
    </Stepper>
  );
};

export default TreeFellStatusSteps;
