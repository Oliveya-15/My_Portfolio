import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // To set default values
  } = useForm();

  // Set default values for the form fields
  React.useEffect(() => {
    setValue("name", "Oliveya Choudhury");
    setValue("email", "choudhuryoliveya15@gmail.com");
  }, [setValue]);

  const onSubmit = async (data) => {
    // Construct the user info from the form data
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      // Send the form data to Getform
      await axios.post("https://getform.io/f/bnllyllb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Thank you for your time, please reach out below !</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)} // Submit form on successful validation
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                {...register("name", { required: true })} // React Hook Form registration for name input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>} {/* Error message if validation fails */}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })} // React Hook Form registration for email input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>} {/* Error message if validation fails */}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })} // React Hook Form registration for message input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>} {/* Error message if validation fails */}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
