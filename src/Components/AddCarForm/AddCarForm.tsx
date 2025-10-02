import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import type { Car } from "../../types/types";



const carTypes: Car["type"][] = ["Sedan", "SUV", "Hatchback", "Truck", "Van", "MiniBus", "Electric"];
const fuelTypes: Car["fuelType"][] = ["Petrol", "Diesel", "Electric", "Hybrid"];
const transmissions: Car["transmission"][] = ["Automatic", "Manual"];

const AddCarForm: React.FC = () => {
    const { register, handleSubmit, control, reset } = useForm<Car>({
        defaultValues: {
            name: "",
            brand: "",
            type: "Sedan",
            modelYear: new Date().getFullYear(),
            registrationNumber: "",
            seatingCapacity: 4,
            fuelType: "Petrol",
            transmission: "Manual",
            imageUrl: "",
        },
    });

    const onSubmit: SubmitHandler<Car> = (data) => {
        console.log("New Car:", data);
        alert("Car added! Check console for details.");
        reset();
    };

    return (
        <div className="max-w-xl mx-auto my-10 p-6 bg-[#1E2939] rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-200 text-center">Add New Car</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                <input
                    type="text"
                    placeholder="Car Name"
                    {...register("name", { required: true })}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Brand"
                    {...register("brand", { required: true })}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                        <select {...field} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200">
                            {carTypes.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                    )}
                />
                <input
                    type="number"
                    placeholder="Model Year"
                    {...register("modelYear", { required: true, min: 1900, max: new Date().getFullYear() })}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Registration Number"
                    {...register("registrationNumber", { required: true })}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    placeholder="Seating Capacity"
                    {...register("seatingCapacity", { required: true, min: 1 })}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
                <Controller
                    name="fuelType"
                    control={control}
                    render={({ field }) => (
                        <select {...field} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200">
                            {fuelTypes.map((f) => (
                                <option key={f} value={f}>
                                    {f}
                                </option>
                            ))}
                        </select>
                    )}
                />
                <Controller
                    name="transmission"
                    control={control}
                    render={({ field }) => (
                        <select {...field} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200">
                            {transmissions.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                    )}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    {...register("imageUrl")}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Add Car
                </button>
            </form>
        </div>
    );
};

export default AddCarForm;






// <form class="max-w-md mx-auto">
//
//   <div class="relative z-0 w-full mb-5 group">
//       <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//       <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//   </div>
//   <div class="relative z-0 w-full mb-5 group">
//       <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//       <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
//   </div>
//   <div class="grid md:grid-cols-2 md:gap-6">
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
//     </div>
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
//     </div>
//   </div>
//   <div class="grid md:grid-cols-2 md:gap-6">
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
//     </div>
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
//     </div>
//   </div>
//   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
// </form>
