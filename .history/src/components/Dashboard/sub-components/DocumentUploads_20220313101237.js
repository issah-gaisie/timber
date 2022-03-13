import React from "react";
import { RiCameraSwitchLine } from "react-icons/ri";
import { BiTrashAlt } from "react-icons/bi";
// The Profile Image component
export const ProfileImageSection = (props) => {
  const { onChange, ...rest } = props;
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");
  const fileRef = useRef();
  const triggerFileModal = () => {
    fileRef.current.click();
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  }, [selectedFile]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      onChange(e.target.files[0]);
    }
  };
  const handleDelete = () => {
    setSelectedFile(null);
  };
  return (
    <div className="w-full flex justify-center sm:justify-start items-center mb-6 ">
      <input
        type="file"
        accept="image/*"
        className=""
        {...rest}
        onChange={handleChange}
        ref={fileRef}
        hidden
      />
      <div
        className="bg-white h-24 w-24 rounded rounded-full border-2 border-gray-200 shadow-sm flex justify-center items-center pointer bg-cover bg-no-repeat bg-center self-center"
        style={{ backgroundImage: `url(${preview})` }}
        onClick={triggerFileModal}
      >
        <RiCameraSwitchLine className="text-gray-600 text-2xl" />
      </div>

      {!rest.disabled && (
        <button
          onClick={handleDelete}
          type="button"
          className="ml-2 rounded rounded-md shadow-sm py-1.5 px-1 text-white bg-red-600 hover:bg-red-800"
        >
          <BiTrashAlt />
        </button>
      )}
    </div>
  );
};

// signature component
export const SignatureSection = (props) => {
  const { onChange, ...rest } = props;
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");
  const fileRef = useRef();
  const triggerFileModal = () => {
    fileRef.current.click();
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  }, [selectedFile]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      onChange(e.target.files[0]);
    }
  };
  const handleDelete = () => {
    setSelectedFile(null);
  };
  return (
    <div className="w-full flex justify-start items-center mb-6 ">
      <input
        type="file"
        accept="image/*"
        className=""
        onChange={handleChange}
        ref={fileRef}
        hidden
      />
      <div
        className="bg-white h-24 w-24 rounded rounded-lg border-2 border-gray-200 shadow-sm flex justify-center items-center pointer bg-cover bg-no-repeat bg-center self-center"
        style={{ backgroundImage: `url(${preview})` }}
        onClick={triggerFileModal}
      >
        <RiCameraSwitchLine className="text-gray-600 text-2xl" />
      </div>

      <button
        onClick={handleDelete}
        type="button"
        className="ml-2 rounded rounded-md shadow-sm py-1.5 px-1 text-white bg-red-600 hover:bg-red-800"
      >
        <BiTrashAlt />
      </button>
    </div>
  );
};
