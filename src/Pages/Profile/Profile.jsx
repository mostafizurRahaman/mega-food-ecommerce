import { useContext, useState } from "react";
import InputText from "../../Components/Inputs/InputText";
import InputSelection from "../../Components/InputSelection/inputSelection";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loading from "../../Components/Loading";
const Profile = () => {
   const { user, loading } = useContext(AuthContext);
   const [formData, setFormData] = useState({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      gender: user?.gender,
      phone: user?.phone,
   });
   const [errors, setErrors] = useState({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      phone: "",
   });
   if (loading && !user?.email) {
      return <Loading></Loading>;
   }

   return (
      <div className="py-5 flex flex-col gap-3 items-start">
         <InputText
            type="text"
            name="firstName"
            label="First Name"
            placeholder="Your firstName"
            initialValue={formData.firstName}
            error={errors.firstName}
            styles=" py-3 text-3xl font-bold uppercase"
         ></InputText>
         <InputText
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Your last Name"
            initialValue={formData.lastName}
            error={errors.lastName}
            styles="border-0  py-3 text-3xl font-bold uppercase"
         ></InputText>
         <InputText
            text="email"
            name="email"
            label="Your email"
            placeholder="Email"
            initialValue={formData.email}
            error={errors.email}
            styles="border-0  py-3 text-3xl font-bold "
         ></InputText>
         <InputText
            text="text"
            name="phone"
            label="phone Number"
            placeholder="your phone number"
            initialValue={formData.phone}
            error={errors.phone}
            styles="border-0  py-3 text-3xl font-bold uppercase"
         ></InputText>
         <InputSelection
            label="gender"
            data={formData}
            setFormData={setFormData}
            field="gender"
            options={["male", "female"]}
            selectOp="select gender"
            containerStyles="border-2 py-3 text-3xl font-bold uppercase"
         ></InputSelection>
         <SubmitButton
            className="inline-block"
            disabled={
               !formData?.firstName ||
               !formData?.email ||
               !formData?.lastName ||
               !formData?.phone ||
               !formData?.gender
            }
         >
            Submit
         </SubmitButton>
      </div>
   );
};

export default Profile;
