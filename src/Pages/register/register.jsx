import { useState } from "react";
import InputText from "../../Components/Inputs/InputText";
import ImageUpload from "../../Components/ImageUpload";
import { baseURL } from "../../Configs/libs";
import toast from "react-hot-toast";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";

const SignUp = () => {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
      image: "",
      phone: "",
      role: "user",
   });
   const [errors, setErrors] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
      phone: "",
      image: "",
      role: "",
   });
   const [loading, setLoading] = useState(false);
   const handleInputText = (e) => {
      const name = e.target.name;
      const value = e.target.value.trim().toLowerCase();
      if (!value) {
         setFormData({ ...formData, [name]: "" });
         setErrors({ ...errors, [name]: `${name} shouldn't be empty` });
      } else {
         setFormData({ ...formData, [name]: value });
         setErrors({ ...errors, [name]: "" });
      }
   };
   const handleEmail = (e) => {
      const name = e?.target?.name;
      const value = e.target.value.trim();
      if (!value.length) {
         setErrors({ ...errors, [name]: "email shouldn't be empty" });
         setFormData({ ...formData, [name]: "" });
      } else if (
         !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      ) {
         setErrors({ ...errors, [name]: "Please provide a email" });
         setFormData({ ...formData, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setFormData({ ...formData, [name]: value });
      }
   };

   const handlePassword = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (value.length <= 0) {
         setErrors({ ...errors, [name]: "password shouldn'b be empty  " });
         setFormData({ ...formData, [name]: "" });
      } else if (!/[A-Z]/.test(value)) {
         setErrors({ ...errors, [name]: "must have a  capital letter " });
         setFormData({ ...formData, [name]: "" });
      } else if (!/[a-z]/.test(value)) {
         setErrors({ ...errors, [name]: "must  have a small letter " });
         setFormData({ ...formData, [name]: "" });
      } else if (!/[0-9]/.test(value)) {
         setErrors({ ...errors, [name]: "must  have a digit" });
         setFormData({ ...formData, [name]: "" });
      } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(value)) {
         setErrors({ ...errors, [name]: "must  have a special character" });
         setFormData({ ...formData, [name]: "" });
      } else if (value.length <= 8) {
         setErrors({
            ...errors,
            [name]: "password must be 8 character or more",
         });
         setFormData({ ...formData, [name]: "" });
      } else {
         if (formData.confirm) {
            if (formData.password === formData.confirm) {
               setErrors({ ...errors, [name]: "Password not matched" });
               setFormData({ ...formData, [name]: "" });
            } else {
               setErrors({ ...errors, [name]: "" });
               setFormData({ ...formData, [name]: value });
            }
         } else {
            setErrors({ ...errors, [name]: "" });
            setFormData({ ...formData, [name]: value });
         }
      }
   };

   const handlePhone = (e) => {
      const phone = e.target.value;
      if (phone === "") {
         setErrors({ ...errors, phone: "phone number should't be empty" });
         setFormData({ ...formData, phone: "" });
      } else if (!/^[\d-\s]+$/.test(phone)) {
         setErrors({ ...errors, phone: "number should be valid" });
         setFormData({ ...formData, phone: "" });
      } else {
         setErrors({ ...errors, phone: "" });
         setFormData({ ...formData, phone: phone });
      }
   };
   const handleConfirm = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (value.length <= 0) {
         setErrors({ ...errors, [name]: "password shouldn'b be empty  " });
         setFormData({ ...formData, [name]: "" });
      } else if (!/[A-Z]/.test(value)) {
         setErrors({ ...errors, [name]: "must have a  capital letter " });
         setFormData({ ...formData, [name]: "" });
      } else if (!/[a-z]/.test(value)) {
         setErrors({ ...errors, [name]: "must  have a small letter " });
         setFormData({ ...formData, [name]: "" });
      } else if (!/[0-9]/.test(value)) {
         setErrors({ ...errors, [name]: "must  have a digit" });
         setFormData({ ...formData, [name]: "" });
      } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(value)) {
         setErrors({ ...errors, [name]: "must  have a special character" });
         setFormData({ ...formData, [name]: "" });
      } else if (value.length <= 8) {
         setErrors({
            ...errors,
            [name]: "password must be 8 character or more",
         });
         setFormData({ ...formData, [name]: "" });
      } else {
         if (formData.password) {
            if (formData.password === formData.confirm) {
               setErrors({ ...errors, [name]: "Password not matched" });
               setFormData({ ...formData, [name]: "" });
            } else {
               setErrors({ ...errors, [name]: "" });
               setFormData({ ...formData, [name]: value });
            }
         } else {
            setErrors({ ...errors, [name]: "" });
            setFormData({ ...formData, [name]: value });
         }
      }
   };

   const handleImageUpload = async (e) => {
      const name = e.target.name;
      const image = e.target.files[0];
      const newFromData = new FormData();
      newFromData.append("image", image);
      if (!image) {
         setErrors({ ...errors, [name]: "Please select an image" });
         setFormData({ ...formData, [name]: "" });
         return;
      }
      try {
         const res = await fetch(`${baseURL}/image`, {
            method: "POST",
            body: newFromData,
         });

         const data = await res.json();

         if (data.status === "success") {
            setFormData({ ...formData, [name]: data.data.imageUrl });
            toast.success("Category Logo Uploaded");
            setErrors({ ...errors, [name]: "" });
         } else {
            setFormData({ ...formData, [name]: "" });
            setErrors({ ...errors, [name]: data.message });
         }
      } catch (err) {
         setErrors({ ...errors, [name]: err.message });
      }
   };

   const onSubmit = async (e) => {
      e.preventDefault();
      const { confirm, ...user } = formData;
      setLoading(true);
      try {
         const res = await fetch(`${baseURL}/user/sign-up`, {
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(user),
         });

         const data = await res.json();
         if (data?.status === "success") {
            toast.success(data.message);
            setLoading(false);
         } else {
            toast.error(data.message);
            setLoading(false);
         }
      } catch (err) {
         toast.error(err?.message);
         console.log(err);
      }
   };

   console.log(formData);
   return (
      <div className="flex items-center w-full gap-5 md:min-h-screen">
         <div className=" w-full px-10 text-white ">
            <form
               onSubmit={onSubmit}
               className="w-[75%] mx-auto bg-primary py-5  px-5 rounded "
            >
               <h2 className="text-3xl font-semibold capitalize ">Sign Up</h2>
               <div className="grid grid-cols-2 gap-3">
                  <InputText
                     type="text"
                     name="firstName"
                     label="First Name"
                     placeholder="enter  your first name"
                     onChange={handleInputText}
                     error={errors.firstName}
                     styles={``}
                  ></InputText>
                  <InputText
                     type="text"
                     name="lastName"
                     label="last Name"
                     placeholder="enter  your last name"
                     onChange={handleInputText}
                     error={errors.lastName}
                     styles={``}
                  ></InputText>
                  <InputText
                     type="email"
                     name="email"
                     label="your email"
                     placeholder="enter your email"
                     onChange={handleEmail}
                     error={errors.email}
                     styles={``}
                  ></InputText>
                  <InputText
                     type="text"
                     name="phone"
                     label="your phone"
                     placeholder="enter your phone"
                     onChange={handlePhone}
                     error={errors.phone}
                     styles={``}
                  ></InputText>
                  <InputText
                     type="password"
                     name="password"
                     label="your password"
                     placeholder="enter your password"
                     onChange={handlePassword}
                     error={errors.password}
                     styles={``}
                  ></InputText>
                  <InputText
                     type="password"
                     name="confirm"
                     label="your confirm"
                     placeholder="enter your confirm"
                     onChange={handleConfirm}
                     error={errors.confirm}
                     styles={``}
                  ></InputText>

                  <div className="w-full col-span-2">
                     <ImageUpload
                        id="image"
                        onChange={handleImageUpload}
                        error={errors.image}
                        image={formData.image}
                        isMultiple={false}
                        imageStyles={`bg-secondary object-contain`}
                     ></ImageUpload>
                  </div>

                  <div className="flex item-center flex-col gap-2 justify-center text-xs">
                     <label htmlFor="role">Select Account Type</label>
                     <div className="flex gap-2">
                        <div className="flex items-center justify-start gap-1  text-white">
                           <input
                              type="radio"
                              id="user"
                              name="role"
                              value="user"
                              className="text-base capitalize"
                              checked={formData.role === "user"}
                              onClick={(e) =>
                                 setFormData({
                                    ...formData,
                                    role: e.target.value,
                                 })
                              }
                           />
                           <label className="text-sm capitalize" htmlFor="user">
                              user
                           </label>
                        </div>
                        <div className="flex items-center justify-start gap-1 text-white">
                           <input
                              type="radio"
                              id="dealer"
                              name="role"
                              className="text-base capitalize"
                              value="dealer"
                              checked={formData.role === "dealer"}
                              onClick={(e) =>
                                 setFormData({
                                    ...formData,
                                    role: e.target.value,
                                 })
                              }
                           />
                           <label
                              className="text-sm capitalize"
                              htmlFor="dealer"
                           >
                              dealer
                           </label>
                        </div>
                     </div>
                  </div>
                  <div className="md:col-span-2">
                     <SubmitButton
                        className="bg-white text-black "
                        disabled={
                           !formData.firstName ||
                           !formData?.lastName ||
                           !formData?.email ||
                           !formData?.phone ||
                           !formData?.confirm ||
                           !formData?.password ||
                           !formData?.role ||
                           !formData?.image
                        }
                     >
                        Sign Up
                     </SubmitButton>
                     <div>
                        <p>
                           Already have an account, please{" "}
                           <Link
                              to="/sign-in"
                              className="text-sm text-blue-500"
                           >
                              sign in
                           </Link>
                        </p>
                     </div>
                  </div>
               </div>
               {loading && <Loading></Loading>}
            </form>
         </div>
         {/* <div className=" md:w-1/2 flex items-center justify-center">
            <img src={banner} alt="" className="object-contain w-[80%]" />
         </div> */}
      </div>
   );
};

export default SignUp;
