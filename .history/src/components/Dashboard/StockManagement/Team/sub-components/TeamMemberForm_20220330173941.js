import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import Select from "react-select";
import { useEffect } from "react";
import toast from "react-hot-toast";
const TeamMemberForm = ({ defaultValue,disabled }) => {
  const [value, setValue] = useState([]);
  const [roleDisabled, setRoleDisabled] = useState(disabled);
  const handleChange = (value) => setValue(value);
 

  return (
    <form className="w-full flex flex-col" >
      <Select
        className="w-full max-w-[30rem]"
        value={value}
        isDisabled={disabled}
        options={options}
        onChange={(value) => handleChange(value)}
        isMulti
      />

    </form>
  );
};

export default TeamMemberForm;

const options = [
  { value: "ernest", label: "Ernest" },
  { value: "gaisie", label: "Gaisie"},
];
