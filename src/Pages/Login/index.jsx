import { useContext, useState } from "react";
import InputText from "../../Components/Inputs/InputText";
import ImageUpload from "../../Components/ImageUpload";
import { baseURL } from "../../Configs/libs";
import toast from "react-hot-toast";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SignIn = () => {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });
   const [errors, setErrors] = useState({
      email: "",
      password: "",
   });
   const { setUser } = useContext(AuthContext);
   const [loading, setLoading] = useState(false);

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

   const onSubmit = async (e) => {
      e.preventDefault();

      setLoading(true);
      try {
         const res = await fetch(`${baseURL}/user/login`, {
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const data = await res.json();
         if (data?.status === "success") {
            setUser(data.data.user);
            toast.success(data.message);
            setLoading(false);
            localStorage.setItem("accessToken", data.data.accessToken);
         } else {
            toast.error(data.message);
            setLoading(false);
         }
      } catch (err) {
         toast.error(err?.message);
         console.log(err);
         setLoading(false);
      }
   };

   console.log(formData);
   return (
      <div className="flex items-center w-full gap-5 md:min-h-screen">
         <div className=" w-full px-10 text-white ">
            <form
               onSubmit={onSubmit}
               className="w-[50%] mx-auto bg-primary py-5  px-5 rounded "
            >
               <h2 className="text-3xl font-semibold capitalize mb-5 ">
                  Sign In
               </h2>
               <div className="grid grid-cols-1 gap-3">
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
                     type="password"
                     name="password"
                     label="your password"
                     placeholder="enter your password"
                     onChange={handlePassword}
                     error={errors.password}
                     styles={``}
                  ></InputText>

                  <div className="">
                     <SubmitButton
                        className="bg-white text-black "
                        disabled={!formData?.email || !formData?.password}
                     >
                        Sign In
                     </SubmitButton>
                     <div>
                        <p>
                           Have no account please{" "}
                           <Link
                              to="/sign-up"
                              className="text-sm text-blue-500"
                           >
                              sign up
                           </Link>
                        </p>
                     </div>
                  </div>
               </div>
            </form>
         </div>
         {/* <div className=" md:w-1/2 flex items-center justify-center">
            <img src={banner} alt="" className="object-contain w-[80%]" />
         </div> */}
      </div>
   );
};

export default SignIn;
