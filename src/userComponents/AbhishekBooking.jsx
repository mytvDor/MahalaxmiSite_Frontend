// // // // import { useState } from "react";
// // // // import axios from "axios";
// // // // import { Calendar } from "@/components/ui/calendar";
// // // // import { Button } from "@/components/ui/button";
// // // // import {
// // // //   Card,
// // // //   CardContent,
// // // //   CardDescription,
// // // //   CardFooter,
// // // //   CardHeader,
// // // //   CardTitle,
// // // // } from "@/components/ui/card";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Label } from "@/components/ui/label";
// // // // import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// // // // export default function AbhishekBooking() {
// // // //   const [name, setName] = useState("");
// // // //   const [phone, setPhone] = useState("");
// // // //   const [date, setDate] = useState(null);
// // // //   const [time, setTime] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [transactionId, setTransactionId] = useState("");

// // // //   const today = new Date();
// // // //   today.setHours(0, 0, 0, 0);

// // // //   const timeSlots = [
// // // //     { value: "5:00 AM", label: "5:00 AM" },
// // // //     { value: "7:00 AM", label: "7:00 AM" },
// // // //     { value: "10:00 AM", label: "10:00 AM" },
// // // //   ];

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     if (!name || !phone || !date || !time) return;

// // // //     setLoading(true);

// // // //     try {
// // // //       const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD
// // // //       const bookingDateTime = `${formattedDate}T${time
// // // //         .replace(/:/g, "%3A")
// // // //         .replace(/ /g, "%20")}`;

// // // //       console.log(bookingDateTime);

// // // //       const response = await axios.post("https://mahalaxmisite-backend.onrender.com/bookings", {
// // // //         name,
// // // //         phone,
// // // //         bookingDateTime,
// // // //         transactionId,
// // // //       });

// // // //       console.log("Success:", response.data);

// // // //       setName("");
// // // //       setPhone("");
// // // //       setDate(null);
// // // //       setTime("");
// // // //       setTransactionId("");
// // // //     } catch (error) {
// // // //       //   console.error("Error:", error.response?.data || error.message);
// // // //       console.log(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="w-full max-w-md mx-auto">
// // // //       <Card>
// // // //         <CardHeader>
// // // //           <CardTitle>Book Your Appointment</CardTitle>
// // // //           <CardDescription>
// // // //             Please fill in your details to schedule your appointment.
// // // //           </CardDescription>
// // // //         </CardHeader>
// // // //         <form onSubmit={handleSubmit}>
// // // //           <CardContent className="space-y-4">
// // // //             <div className="space-y-2">
// // // //               <Label htmlFor="name">Full Name</Label>
// // // //               <Input
// // // //                 id="name"
// // // //                 value={name}
// // // //                 onChange={(e) => setName(e.target.value)}
// // // //                 placeholder="Enter your full name"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-2">
// // // //               <Label htmlFor="phone">Phone Number</Label>
// // // //               <Input
// // // //                 id="phone"
// // // //                 value={phone}
// // // //                 onChange={(e) => setPhone(e.target.value)}
// // // //                 placeholder="Enter your phone number"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-2">
// // // //               <Label>Select Date</Label>
// // // //               <Calendar
// // // //                 mode="single"
// // // //                 selected={date}
// // // //                 onSelect={setDate}
// // // //                 disabled={(date) => date < today}
// // // //                 className="rounded-md border"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-2">
// // // //               <Label>Select Time</Label>
// // // //               <RadioGroup value={time} onValueChange={setTime}>
// // // //                 {timeSlots.map((slot) => (
// // // //                   <div key={slot.value} className="flex items-center space-x-2">
// // // //                     <RadioGroupItem value={slot.value} id={slot.value} />
// // // //                     <Label htmlFor={slot.value}>{slot.label}</Label>
// // // //                   </div>
// // // //                 ))}
// // // //               </RadioGroup>
// // // //             </div>

// // // //             <div className="space-y-2">
// // // //               <Label htmlFor="transactionID">Transaction ID</Label>
// // // //               <Input
// // // //                 id="transactionID"
// // // //                 value={transactionId}
// // // //                 onChange={(e) => setTransactionId(e.target.value)}
// // // //                 placeholder="Enter your Transaction ID"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //           </CardContent>

// // // //           <CardFooter>
// // // //             <Button type="submit" className="w-full" disabled={loading}>
// // // //               {loading ? "Processing..." : "Confirm Booking"}
// // // //             </Button>
// // // //           </CardFooter>
// // // //         </form>
// // // //       </Card>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useState } from "react";
// // // import axios from "axios";
// // // import { Calendar } from "@/components/ui/calendar";
// // // import { Button } from "@/components/ui/button";
// // // import {
// // //   Card,
// // //   CardContent,
// // //   CardDescription,
// // //   CardFooter,
// // //   CardHeader,
// // //   CardTitle,
// // // } from "@/components/ui/card";
// // // import { Input } from "@/components/ui/input";
// // // import { Label } from "@/components/ui/label";
// // // import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// // // // import { toast } from "@/components/ui/use-toast";
// // // import { Alert, AlertDescription } from "@/components/ui/alert";

// // // export default function AbhishekBooking() {
// // //   const [name, setName] = useState("");
// // //   const [phone, setPhone] = useState("");
// // //   const [date, setDate] = useState(null);
// // //   const [time, setTime] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [transactionId, setTransactionId] = useState("");
// // //   const [error, setError] = useState("");
// // //   const [success, setSuccess] = useState(false);

// // //   const today = new Date();
// // //   today.setHours(0, 0, 0, 0);

// // //   const timeSlots = [
// // //     { value: "05:00", label: "5:00 AM" },
// // //     { value: "07:00", label: "7:00 AM" },
// // //     { value: "10:00", label: "10:00 AM" },
// // //   ];

// // //   const validatePhone = (phoneNumber) => {
// // //     // Basic validation for a 10-digit phone number
// // //     return /^\d{10}$/.test(phoneNumber);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError("");
// // //     setSuccess(false);

// // //     // Validation
// // //     if (!name || !phone || !date || !time || !transactionId) {
// // //       setError("All fields are required");
// // //       return;
// // //     }

// // //     if (!validatePhone(phone)) {
// // //       setError("Please enter a valid 10-digit phone number");
// // //       return;
// // //     }

// // //     setLoading(true);

// // //     try {
// // //       // Format the date and time correctly for the API
// // //       // Create a new date object with the selected date and time
// // //       const selectedDate = new Date(date);
// // //       const [hours, minutes] = time.split(":");
// // //       selectedDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

// // //       // Format as ISO string for the backend
// // //       const bookingDateTime = selectedDate.toISOString();

// // //       const response = await axios.post("https://mahalaxmisite-backend.onrender.com/bookings", {
// // //         name,
// // //         phone,
// // //         bookingDateTime,
// // //         transactionId,
// // //       });

// // //       console.log("Booking successful:", response.data);
// // //       setSuccess(true);

// // //       // Clear form after successful submission
// // //       setName("");
// // //       setPhone("");
// // //       setDate(null);
// // //       setTime("");
// // //       setTransactionId("");
// // //     } catch (error) {
// // //       console.error("Error:", error);
// // //       setError(
// // //         error.response?.data?.error ||
// // //           "Failed to book appointment. Please try again."
// // //       );
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="w-full max-w-md mx-auto p-4">
// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle>Book Your Appointment</CardTitle>
// // //           <CardDescription>
// // //             Please fill in your details to schedule your appointment.
// // //           </CardDescription>
// // //         </CardHeader>
// // //         <form onSubmit={handleSubmit}>
// // //           <CardContent className="space-y-4">
// // //             {error && (
// // //               <Alert variant="destructive">
// // //                 <AlertDescription>{error}</AlertDescription>
// // //               </Alert>
// // //             )}

// // //             {success && (
// // //               <Alert>
// // //                 <AlertDescription>
// // //                   Your appointment has been booked successfully!
// // //                 </AlertDescription>
// // //               </Alert>
// // //             )}

// // //             <div className="space-y-2">
// // //               <Label htmlFor="name">Full Name</Label>
// // //               <Input
// // //                 id="name"
// // //                 value={name}
// // //                 onChange={(e) => setName(e.target.value)}
// // //                 placeholder="Enter your full name"
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="space-y-2">
// // //               <Label htmlFor="phone">Phone Number</Label>
// // //               <Input
// // //                 id="phone"
// // //                 value={phone}
// // //                 onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
// // //                 placeholder="Enter your 10-digit phone number"
// // //                 maxLength={10}
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="space-y-2">
// // //               <Label>Select Date</Label>
// // //               <Calendar
// // //                 mode="single"
// // //                 selected={date}
// // //                 onSelect={setDate}
// // //                 disabled={(date) => date < today}
// // //                 className="rounded-md border"
// // //               />
// // //             </div>

// // //             <div className="space-y-2">
// // //               <Label>Select Time</Label>
// // //               <RadioGroup value={time} onValueChange={setTime} required>
// // //                 {timeSlots.map((slot) => (
// // //                   <div key={slot.value} className="flex items-center space-x-2">
// // //                     <RadioGroupItem value={slot.value} id={slot.value} />
// // //                     <Label htmlFor={slot.value}>{slot.label}</Label>
// // //                   </div>
// // //                 ))}
// // //               </RadioGroup>
// // //             </div>

// // //             <div className="space-y-2">
// // //               <Label htmlFor="transactionID">Transaction ID</Label>
// // //               <Input
// // //                 id="transactionID"
// // //                 value={transactionId}
// // //                 onChange={(e) => setTransactionId(e.target.value)}
// // //                 placeholder="Enter your Transaction ID"
// // //                 required
// // //               />
// // //             </div>
// // //           </CardContent>

// // //           <CardFooter>
// // //             <Button type="submit" className="w-full" disabled={loading}>
// // //               {loading ? "Processing..." : "Confirm Booking"}
// // //             </Button>
// // //           </CardFooter>
// // //         </form>
// // //       </Card>
// // //     </div>
// // //   );
// // // }

// // import { useState } from "react";
// // import axios from "axios";
// // import { Calendar } from "@/components/ui/calendar";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Alert, AlertDescription } from "@/components/ui/alert";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";

// // export default function AbhishekBooking() {
// //   const [name, setName] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [date, setDate] = useState(null);
// //   const [time, setTime] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [transactionId, setTransactionId] = useState("");
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState(false);

// //   const today = new Date();
// //   today.setHours(0, 0, 0, 0);

// //   const timeSlots = [
// //     { value: "05:00", label: "5:00 AM" },
// //     { value: "07:00", label: "7:00 AM" },
// //     { value: "10:00", label: "10:00 AM" },
// //   ];

// //   const validatePhone = (phoneNumber) => {
// //     // Basic validation for a 10-digit phone number
// //     return /^\d{10}$/.test(phoneNumber);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setSuccess(false);

// //     // Validation
// //     if (!name || !phone || !date || !time || !transactionId) {
// //       setError("All fields are required");
// //       return;
// //     }

// //     if (!validatePhone(phone)) {
// //       setError("Please enter a valid 10-digit phone number");
// //       return;
// //     }

// //     setLoading(true);

// //     try {
// //       // Format the date and time correctly for the API
// //       // Create a new date object with the selected date and time
// //       const selectedDate = new Date(date);
// //       const [hours, minutes] = time.split(":");
// //       selectedDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

// //       // Format as ISO string for the backend
// //       const bookingDateTime = selectedDate.toISOString();

// //       const response = await axios.post("https://mahalaxmisite-backend.onrender.com/bookings", {
// //         name,
// //         phone,
// //         bookingDateTime,
// //         transactionId,
// //       });

// //       console.log("Booking successful:", response.data);
// //       setSuccess(true);

// //       // Clear form after successful submission
// //       setName("");
// //       setPhone("");
// //       setDate(null);
// //       setTime("");
// //       setTransactionId("");
// //     } catch (error) {
// //       console.error("Error:", error);
// //       setError(
// //         error.response?.data?.error ||
// //           "Failed to book appointment. Please try again."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-md mx-auto p-4">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle className="font-extrabold text-4xl">
// //             Book Your Abhisheck
// //           </CardTitle>
// //           <CardDescription className=" text-lg">
// //             Please fill in your details to schedule your appointment.
// //           </CardDescription>
// //         </CardHeader>
// //         <form onSubmit={handleSubmit}>
// //           <CardContent className="space-y-4">
// //             {error && (
// //               <Alert variant="destructive">
// //                 <AlertDescription>{error}</AlertDescription>
// //               </Alert>
// //             )}

// //             {success && (
// //               <Alert>
// //                 <AlertDescription>
// //                   Your appointment has been booked successfully!
// //                 </AlertDescription>
// //               </Alert>
// //             )}

// //             <div className="space-y-2">
// //               <Label htmlFor="name">Full Name</Label>
// //               <Input
// //                 id="name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 placeholder="Enter your full name"
// //                 required
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <Label htmlFor="phone">Phone Number</Label>
// //               <Input
// //                 id="phone"
// //                 value={phone}
// //                 onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
// //                 placeholder="Enter your 10-digit phone number"
// //                 maxLength={10}
// //                 required
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <Label>Select Date</Label>
// //               <Calendar
// //                 mode="single"
// //                 selected={date}
// //                 onSelect={setDate}
// //                 disabled={(date) => date < today}
// //                 className="rounded-md border"
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <Label htmlFor="time">Select Time</Label>
// //               <Select value={time} onValueChange={setTime}>
// //                 <SelectTrigger id="time">
// //                   <SelectValue placeholder="Select a time slot" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   {timeSlots.map((slot) => (
// //                     <SelectItem key={slot.value} value={slot.value}>
// //                       {slot.label}
// //                     </SelectItem>
// //                   ))}
// //                 </SelectContent>
// //               </Select>
// //             </div>
// //             <div>
// //               <Label htmlFor="qr">Scan and pay</Label>

// //               <img
// //                 className="mt-3"
// //                 src="https://th.bing.com/th/id/OIP.NDKNbQ-I9ApLLVp-E6HSPwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// //                 alt="myimage"
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <Label htmlFor="transactionID">Transaction ID</Label>
// //               <Input
// //                 id="transactionID"
// //                 value={transactionId}
// //                 onChange={(e) => setTransactionId(e.target.value)}
// //                 placeholder="Enter your Transaction ID"
// //                 required
// //               />
// //             </div>
// //           </CardContent>

// //           <CardFooter className="mt-5">
// //             <Button type="submit" className="w-full" disabled={loading}>
// //               {loading ? "Processing..." : "Confirm Booking"}
// //             </Button>
// //           </CardFooter>
// //         </form>
// //       </Card>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import axios from "axios";
// import { Calendar } from "@/components/ui/calendar";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Bell,
//   CalendarIcon,
//   Clock,
//   User,
//   Phone,
//   CreditCard,
// } from "lucide-react";
// // import Image from "next/image";

// export default function AbhishekBooking() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [date, setDate] = useState(null);
//   const [time, setTime] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [transactionId, setTransactionId] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const timeSlots = [
//     { value: "05:00", label: "5:00 AM - मंगला आरती" },
//     { value: "07:00", label: "7:00 AM - प्रातः अभिषेक" },
//     { value: "10:00", label: "10:00 AM - श्रृंगार दर्शन" },
//   ];

//   const validatePhone = (phoneNumber) => {
//     // Basic validation for a 10-digit phone number
//     return /^\d{10}$/.test(phoneNumber);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess(false);

//     // Validation
//     if (!name || !phone || !date || !time || !transactionId) {
//       setError("All fields are required");
//       return;
//     }

//     if (!validatePhone(phone)) {
//       setError("Please enter a valid 10-digit phone number");
//       return;
//     }

//     setLoading(true);

//     try {
//       // Format the date and time correctly for the API
//       // Create a new date object with the selected date and time
//       const selectedDate = new Date(date);
//       const [hours, minutes] = time.split(":");
//       selectedDate.setHours(
//         Number.parseInt(hours),
//         Number.parseInt(minutes),
//         0,
//         0
//       );

//       // Format as ISO string for the backend
//       const bookingDateTime = selectedDate.toISOString();

//       const response = await axios.post("https://mahalaxmisite-backend.onrender.com/bookings", {
//         name,
//         phone,
//         bookingDateTime,
//         transactionId,
//       });

//       console.log("Booking successful:", response.data);
//       setSuccess(true);

//       // Clear form after successful submission
//       setName("");
//       setPhone("");
//       setDate(null);
//       setTime("");
//       setTransactionId("");
//     } catch (error) {
//       console.error("Error:", error);
//       setError(
//         error.response?.data?.error ||
//           "Failed to book appointment. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-md relative">
//         {/* Decorative elements */}
//         {/* <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-600/10 rounded-full animate-pulse"></div>
//         <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow-600/10 rounded-full animate-pulse delay-700"></div>
//         <div className="absolute top-1/4 -right-4 w-8 h-8 bg-yellow-600/10 rounded-full animate-pulse delay-500"></div>
//         <div className="absolute bottom-1/4 -left-4 w-12 h-12 bg-yellow-600/10 rounded-full animate-pulse delay-300"></div> */}

//         {/* Om symbol at the top */}
//         <div className="flex justify-center mb-4">
//           <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full shadow-lg text-white text-3xl font-bold">
//             ॐ
//           </div>
//         </div>

//         <Card className="border-yellow-200 bg-white shadow-xl overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400"></div>

//           <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-10 -mr-10"></div>
//             <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -mb-10 -ml-10"></div>

//             <Bell className="h-8 w-8 mb-2" />
//             <h1 className="text-3xl font-bold tracking-tight">श्री देवस्थान</h1>
//             <CardTitle className="text-2xl mt-2 font-bold">
//               अभिषेक बुकिंग
//             </CardTitle>
//             <CardDescription className="text-white/90 mt-1">
//               भगवान के चरणों में अपना श्रद्धा अर्पित करें
//             </CardDescription>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <CardContent className="space-y-5 pt-6">
//               {error && (
//                 <Alert
//                   variant="destructive"
//                   className="border-red-300 bg-red-50 text-red-800"
//                 >
//                   <AlertDescription>{error}</AlertDescription>
//                 </Alert>
//               )}

//               {success && (
//                 <Alert className="border-green-300 bg-green-50 text-green-800">
//                   <AlertDescription className="flex items-center">
//                     <span className="bg-green-100 p-1 rounded-full mr-2">
//                       ✓
//                     </span>
//                     आपका अभिषेक सफलतापूर्वक बुक किया गया है!
//                   </AlertDescription>
//                 </Alert>
//               )}

//               <div className="space-y-2">
//                 <Label
//                   htmlFor="name"
//                   className="text-yellow-800 font-medium flex items-center gap-2"
//                 >
//                   <User className="h-4 w-4" /> पूरा नाम
//                 </Label>
//                 <Input
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="अपना पूरा नाम दर्ज करें"
//                   required
//                   className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label
//                   htmlFor="phone"
//                   className="text-yellow-800 font-medium flex items-center gap-2"
//                 >
//                   <Phone className="h-4 w-4" /> फोन नंबर
//                 </Label>
//                 <Input
//                   id="phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
//                   placeholder="अपना 10 अंकों का फोन नंबर दर्ज करें"
//                   maxLength={10}
//                   required
//                   className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label className="text-yellow-800 font-medium flex items-center gap-2">
//                   <CalendarIcon className="h-4 w-4" /> तिथि चुनें
//                 </Label>
//                 <div className="border border-yellow-200 rounded-lg p-3 bg-amber-50/50">
//                   <Calendar
//                     mode="single"
//                     selected={date}
//                     onSelect={setDate}
//                     disabled={(date) => date < today}
//                     className="rounded-md"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label
//                   htmlFor="time"
//                   className="text-yellow-800 font-medium flex items-center gap-2"
//                 >
//                   <Clock className="h-4 w-4" /> समय चुनें
//                 </Label>
//                 <Select value={time} onValueChange={setTime}>
//                   <SelectTrigger
//                     id="time"
//                     className="border-yellow-200 focus:ring-yellow-500"
//                   >
//                     <SelectValue placeholder="अभिषेक का समय चुनें" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {timeSlots.map((slot) => (
//                       <SelectItem key={slot.value} value={slot.value}>
//                         {slot.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label
//                   htmlFor="qr"
//                   className="text-yellow-800 font-medium flex items-center gap-2"
//                 >
//                   <CreditCard className="h-4 w-4" /> स्कैन करें और भुगतान करें
//                 </Label>
//                 <div className="mt-2 bg-white p-3 border border-yellow-200 rounded-lg flex flex-col items-center">
//                   <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
//                     अभिषेक शुल्क: ₹501
//                   </div>
//                   <div className="relative w-48 h-48 p-2 bg-white rounded-lg shadow-sm border border-yellow-100">
//                     <img
//                       src="/placeholder.svg?height=180&width=180"
//                       alt="QR Code for Payment"
//                       width={180}
//                       height={180}
//                       className="object-contain"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-pulse"></div>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label
//                   htmlFor="transactionID"
//                   className="text-yellow-800 font-medium flex items-center gap-2"
//                 >
//                   <CreditCard className="h-4 w-4" /> लेन-देन आईडी
//                 </Label>
//                 <Input
//                   id="transactionID"
//                   value={transactionId}
//                   onChange={(e) => setTransactionId(e.target.value)}
//                   placeholder="अपना लेन-देन आईडी दर्ज करें"
//                   required
//                   className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
//                 />
//               </div>
//             </CardContent>

//             <CardFooter className="flex flex-col gap-4 pb-6">
//               <Button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-medium py-2.5 shadow-md transition-all duration-300 border-0"
//                 disabled={loading}
//               >
//                 {loading ? "प्रक्रिया जारी है..." : "अभिषेक की पुष्टि करें"}
//               </Button>
//               <p className="text-xs text-center text-yellow-700 px-4">
//                 आपका अभिषेक बुक करने के बाद, आपको एक पुष्टिकरण संदेश प्राप्त
//                 होगा। कृपया समय पर पहुंचें।
//               </p>
//             </CardFooter>
//           </form>
//         </Card>

//         {/* Decorative mandala patterns */}
//         <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('/placeholder.svg?height=500&width=500')] opacity-5"></div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import axios from "axios";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bell,
  CalendarIcon,
  Clock,
  User,
  Phone,
  CreditCard,
} from "lucide-react";

export default function AbhishekBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timeSlots = [
    { value: "05:00", label: "5:00 AM - Mangala Aarti" },
    { value: "07:00", label: "7:00 AM - Morning Abhishek" },
    { value: "10:00", label: "10:00 AM - Shringar Darshan" },
  ];

  const validatePhone = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name || !phone || !date || !time || !transactionId) {
      setError("All fields are required");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    try {
      const selectedDate = new Date(date);
      const [hours, minutes] = time.split(":");
      selectedDate.setHours(
        Number.parseInt(hours),
        Number.parseInt(minutes),
        0,
        0
      );

      const bookingDateTime = selectedDate.toISOString();

      const response = await axios.post(
        "https://mahalaxmisite-backend.onrender.com/bookings",
        {
          name,
          phone,
          bookingDateTime,
          transactionId,
        }
      );

      console.log("Booking successful:", response.data);
      setSuccess(true);

      setName("");
      setPhone("");
      setDate(null);
      setTime("");
      setTransactionId("");
    } catch (error) {
      console.error("Error:", error);
      setError(
        error.response?.data?.error ||
          "Failed to book appointment. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md relative">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-600/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow-600/10 rounded-full animate-pulse delay-700"></div>
        {/* <div className="absolute top-1/4 -right-4 w-8 h-8 bg-yellow-600/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 -left-4 w-12 h-12 bg-yellow-600/10 rounded-full animate-pulse delay-300"></div> */}

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full shadow-lg text-white text-3xl font-bold">
            ॐ
          </div>
        </div>

        <Card className="border-yellow-200 bg-white shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400"></div>

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-10 -mr-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -mb-10 -ml-10"></div>

            <Bell className="h-8 w-8 mb-2" />
            <h1 className="text-3xl font-bold tracking-tight">
              Shree Devasthan
            </h1>
            <CardTitle className="text-2xl mt-2 font-bold">
              Abhishek Booking
            </CardTitle>
            <CardDescription className="text-white/90 mt-1">
              Offer your devotion at the feet of the Lord
            </CardDescription>
          </div>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-5 pt-6">
              {error && (
                <Alert
                  variant="destructive"
                  className="border-red-300 bg-red-50 text-red-800"
                >
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-green-300 bg-green-50 text-green-800">
                  <AlertDescription className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      ✓
                    </span>
                    Your Abhishek has been successfully booked!
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-yellow-800 font-medium flex items-center gap-2"
                >
                  <User className="h-4 w-4" /> Full Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-yellow-800 font-medium flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" /> Phone Number
                </Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="Enter your 10-digit phone number"
                  maxLength={10}
                  required
                  className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-yellow-800 font-medium flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" /> Select Date
                </Label>
                <div className="border border-yellow-200 rounded-lg p-3 bg-amber-50/50">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < today}
                    className="rounded-md"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="time"
                  className="text-yellow-800 font-medium flex items-center gap-2"
                >
                  <Clock className="h-4 w-4" /> Select Time
                </Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger
                    id="time"
                    className="border-yellow-200 focus:ring-yellow-500"
                  >
                    <SelectValue placeholder="Select Abhishek time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot.value} value={slot.value}>
                        {slot.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="qr"
                  className="text-yellow-800 font-medium flex items-center gap-2"
                >
                  <CreditCard className="h-4 w-4" /> Scan and Pay
                </Label>
                <div className="mt-2 bg-white p-3 border border-yellow-200 rounded-lg flex flex-col items-center">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                    Abhishek Fee: ₹501
                  </div>
                  <div className="relative w-48 h-48 p-2 bg-white rounded-lg shadow-sm border border-yellow-100">
                    <img
                      src="/placeholder.svg?height=180&width=180"
                      alt="QR Code for Payment"
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="transactionID"
                  className="text-yellow-800 font-medium flex items-center gap-2"
                >
                  <CreditCard className="h-4 w-4" /> Transaction ID
                </Label>
                <Input
                  id="transactionID"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="Enter your transaction ID"
                  required
                  className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
            </CardContent>

            <CardFooter className="p-6">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
              >
                {loading ? "Booking..." : "Book Abhishek"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
