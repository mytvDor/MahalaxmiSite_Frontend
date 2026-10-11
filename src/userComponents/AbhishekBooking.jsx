import { useEffect, useRef, useState } from "react";
import axios from "axios";

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
  Clock,
  User,
  Phone,
  CreditCard,
  CalendarDays,
  Image as ImageIcon,
  X,
  Info,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

const API_URL = "https://mahalaxmisite-backend.onrender.com";

const TIME_SLOTS = [
  { value: "05:00", label: "5:00 AM" },
  { value: "07:00", label: "7:00 AM" },
  { value: "09:30", label: "9:30 AM" },
];

const getLocalDateString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const isValidDate = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(year, month - 1, day);

  return (
    parsed.getFullYear() === year &&
    parsed.getMonth() === month - 1 &&
    parsed.getDate() === day
  );
};

const getSlotDateTime = (selectedDate, selectedTime) => {
  const [year, month, day] = selectedDate.split("-").map(Number);
  const [hours, minutes] = selectedTime.split(":").map(Number);

  return new Date(year, month - 1, day, hours, minutes, 0, 0);
};

const clampZoom = (value) => Math.min(4, Math.max(1, value));

export default function AbhishekBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const [showTransactionPreview, setShowTransactionPreview] = useState(false);
  const [zoom, setZoom] = useState(1);

  const pinchStartDistance = useRef(null);
  const pinchStartZoom = useRef(1);

  const todayString = getLocalDateString();

  const openTransactionPreview = () => {
    setZoom(1);
    setShowTransactionPreview(true);
  };

  const closeTransactionPreview = () => {
    setShowTransactionPreview(false);
    setZoom(1);
    pinchStartDistance.current = null;
  };

  const changeZoom = (amount) => {
    setZoom((previous) => clampZoom(previous + amount));
  };

  const resetZoom = () => setZoom(1);

  // Escape closes the viewer; background scrolling stays disabled.
  useEffect(() => {
    if (!showTransactionPreview) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeTransactionPreview();
      }

      if (event.key === "+" || event.key === "=") {
        setZoom((previous) => clampZoom(previous + 0.25));
      }

      if (event.key === "-") {
        setZoom((previous) => clampZoom(previous - 0.25));
      }

      if (event.key === "0") {
        setZoom(1);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showTransactionPreview]);

  const handleImageWheel = (event) => {
    event.preventDefault();
    changeZoom(event.deltaY < 0 ? 0.2 : -0.2);
  };

  const getTouchDistance = (touches) => {
    if (touches.length < 2) return 0;

    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;

    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (event) => {
    if (event.touches.length === 2) {
      pinchStartDistance.current = getTouchDistance(event.touches);
      pinchStartZoom.current = zoom;
    }
  };

  const handleTouchMove = (event) => {
    if (event.touches.length !== 2 || !pinchStartDistance.current) return;

    event.preventDefault();

    const currentDistance = getTouchDistance(event.touches);
    const ratio = currentDistance / pinchStartDistance.current;

    setZoom(clampZoom(pinchStartZoom.current * ratio));
  };

  const handleTouchEnd = () => {
    pinchStartDistance.current = null;
  };

  const isPastTimeSlot = (slotValue) => {
    if (!date || date !== getLocalDateString()) return false;

    return getSlotDateTime(date, slotValue).getTime() <= Date.now();
  };

  const updateField = (field, value, setter) => {
    setter(value);
    setError("");
    setSuccess(false);

    setValidationErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const handleDateChange = (value) => {
    setDate(value);
    setTime("");
    setError("");
    setSuccess(false);

    setValidationErrors((previous) => ({
      ...previous,
      date: "",
      time: "",
    }));
  };

  const validateForm = () => {
    const errors = {};
    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanTransactionId = transactionId.trim();

    if (!cleanName) {
      errors.name = "Full name is required.";
    } else if (cleanName.length < 3 || cleanName.length > 80) {
      errors.name = "Name must be between 3 and 80 characters.";
    } else if (
      !/^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(cleanName)
    ) {
      errors.name = "Enter a valid name using letters and spaces.";
    }

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errors.phone =
        "Enter a valid 10-digit Indian mobile number starting with 6–9.";
    }

    if (!date) {
      errors.date = "Please select a booking date.";
    } else if (!isValidDate(date)) {
      errors.date = "Please select a valid date.";
    } else if (date < getLocalDateString()) {
      errors.date = "Past dates are not allowed.";
    }

    const selectedSlot = TIME_SLOTS.find((slot) => slot.value === time);

    if (!time) {
      errors.time = "Please select an Abhishek time.";
    } else if (!selectedSlot) {
      errors.time = "Please select a valid time slot.";
    } else if (
      date &&
      isValidDate(date) &&
      date === getLocalDateString() &&
      isPastTimeSlot(time)
    ) {
      errors.time = "This time has passed. Please select another slot.";
    }

    if (!cleanTransactionId) {
      errors.transactionId = "Transaction ID is required.";
    } else if (!/^[A-Za-z0-9-]{8,35}$/.test(cleanTransactionId)) {
      errors.transactionId =
        "Enter 8–35 letters, numbers, or hyphens as shown in your payment app.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const selectedDateTime = getSlotDateTime(date, time);

      if (selectedDateTime.getTime() <= Date.now()) {
        setValidationErrors((previous) => ({
          ...previous,
          time: "This time has passed. Please select another slot.",
        }));
        return;
      }

      const response = await axios.post(`${API_URL}/bookings`, {
        name: name.trim(),
        phone: phone.trim(),
        bookingDateTime: selectedDateTime.toISOString(),
        transactionId: transactionId.trim(),
      });

      console.log("Booking submitted:", response.data);

      setSuccess(true);
      setName("");
      setPhone("");
      setDate("");
      setTime("");
      setTransactionId("");
      setValidationErrors({});
    } catch (err) {
      console.error("Booking error:", err);

      setError(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Failed to book your appointment. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const fieldError = (field) =>
    validationErrors[field] ? (
      <p className="text-sm text-red-600" role="alert">
        {validationErrors[field]}
      </p>
    ) : null;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-600/10 rounded-full animate-pulse pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow-600/10 rounded-full animate-pulse pointer-events-none" />

          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full shadow-lg text-white text-3xl font-bold">
              ॐ
            </div>
          </div>

          <Card className="relative border-yellow-200 bg-white shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400" />

            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-10 -mr-10" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -mb-10 -ml-10" />

              <Bell className="h-8 w-8 mb-2 relative" />

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight relative">
                Shree Devasthan
              </h1>

              <CardTitle className="text-xl sm:text-2xl mt-2 font-bold relative">
                Abhishek Booking
              </CardTitle>

              <CardDescription className="text-white/90 mt-1 relative">
                Offer your devotion at the feet of the Lord
              </CardDescription>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <CardContent className="space-y-5 pt-6">
                {error && (
                  <Alert
                    variant="destructive"
                    className="border-red-300 bg-red-50 text-red-800"
                  >
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-yellow-800 font-medium flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    Full Name
                  </Label>

                  <Input
                    id="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) =>
                      updateField("name", e.target.value, setName)
                    }
                    placeholder="Enter your full name"
                    maxLength={80}
                    aria-invalid={Boolean(validationErrors.name)}
                    className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />

                  {fieldError("name")}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-yellow-800 font-medium flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </Label>

                  <Input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    value={phone}
                    onChange={(e) =>
                      updateField(
                        "phone",
                        e.target.value.replace(/\D/g, "").slice(0, 10),
                        setPhone,
                      )
                    }
                    placeholder="Enter your 10-digit phone number"
                    maxLength={10}
                    aria-invalid={Boolean(validationErrors.phone)}
                    className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />

                  {fieldError("phone")}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="date"
                    className="text-yellow-800 font-medium flex items-center gap-2"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Select Date
                  </Label>

                  <div className="border border-yellow-200 rounded-lg p-3 bg-amber-50/50">
                    <input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => handleDateChange(e.target.value)}
                      min={todayString}
                      aria-invalid={Boolean(validationErrors.date)}
                      className="w-full min-w-0 px-3 py-2 border border-yellow-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  {fieldError("date")}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="time"
                    className="text-yellow-800 font-medium flex items-center gap-2"
                  >
                    <Clock className="h-4 w-4" />
                    Select Time
                  </Label>

                  <Select
                    value={time}
                    onValueChange={(value) =>
                      updateField("time", value, setTime)
                    }
                    disabled={!date}
                  >
                    <SelectTrigger
                      id="time"
                      aria-invalid={Boolean(validationErrors.time)}
                      className="border-yellow-200 focus:ring-yellow-500"
                    >
                      <SelectValue
                        placeholder={
                          date ? "Select Abhishek time" : "Select a date first"
                        }
                      />
                    </SelectTrigger>

                    <SelectContent>
                      {TIME_SLOTS.map((slot) => {
                        const disabled = isPastTimeSlot(slot.value);

                        return (
                          <SelectItem
                            key={slot.value}
                            value={slot.value}
                            disabled={disabled}
                          >
                            {slot.label}
                            {disabled ? " (Past time)" : ""}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>

                  {fieldError("time")}

                  {date === todayString &&
                    TIME_SLOTS.every((slot) => isPastTimeSlot(slot.value)) && (
                      <p className="text-sm text-amber-700">
                        All time slots for today have passed. Please select
                        another date.
                      </p>
                    )}
                </div>

                {/* Payment QR */}
                <div className="space-y-2">
                  <Label className="text-yellow-800 font-medium flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Scan and Pay
                  </Label>

                  <div className="bg-white p-3 sm:p-4 border border-yellow-200 rounded-xl flex flex-col items-center">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg font-semibold px-4 py-2 rounded-full mb-4 text-center">
                      Abhishek Fee: ₹1001
                    </div>

                    <div className="w-48 h-48 p-2 bg-white rounded-lg shadow-sm border border-yellow-100">
                      <img
                        src="/qr.png"
                        alt="QR code for Abhishek payment"
                        width={180}
                        height={180}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <p className="mt-4 text-sm text-center text-gray-600">
                      After paying, enter the transaction id shown in your
                      payment app.
                    </p>

                    <div className="mt-3 w-full text-center bg-amber-50 border border-yellow-200 text-yellow-900 text-sm font-medium px-3 py-3 rounded-lg">
                      <p className="mb-1">Payment assistance</p>
                      <p>+91 9130340304</p>
                      <p>+91 8956594343</p>
                    </div>
                  </div>
                </div>

                {/* Transaction ID */}
                <div className="space-y-3">
                  <button
                    type="button"
                    cursor="pointer"
                    onClick={openTransactionPreview}
                    className="group flex w-full items-center gap-3 rounded-xl border border-yellow-200 bg-amber-50 p-3 text-left transition hover:border-yellow-400 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    aria-haspopup="dialog"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-800">
                      <ImageIcon className="h-5 w-5" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-yellow-900">
                        Where can I find my Transaction ID?
                      </span>
                      <span className="mt-1 block text-xs text-gray-600">
                        Click here to view the payment screenshot
                      </span>
                    </span>

                    <ZoomIn className="h-5 w-5 shrink-0 text-yellow-700" />
                  </button>

                  <p className="text-sm text-gray-600">
                    Find the UTR, UPI reference number, or transaction ID in
                    your payment app's successful payment details.
                  </p>

                  <Label
                    htmlFor="transactionID"
                    className="text-yellow-800 font-medium flex items-center gap-2"
                  >
                    <CreditCard className="h-4 w-4" />
                    Transaction ID / UTR Number
                  </Label>
                  <Input
                    id="transactionID"
                    value={transactionId}
                    onChange={(e) =>
                      updateField(
                        "transactionId",
                        e.target.value.replace(/\s/g, "").slice(0, 35),
                        setTransactionId,
                      )
                    }
                    placeholder="Enter your transaction id"
                    maxLength={35}
                    autoComplete="off"
                    aria-invalid={Boolean(validationErrors.transactionId)}
                    className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />

                  {fieldError("transactionId")}

                  <div className="flex items-start gap-2 rounded-lg bg-gray-50 p-3 text-xs leading-relaxed text-gray-600">
                    <Info className="h-4 w-4 shrink-0 mt-0.5 text-yellow-700" />
                    <p>
                      Enter 8–35 letters, numbers, or hyphens as shown in your
                      payment app. Do not enter the amount, date, or recipient's
                      phone number.
                    </p>
                  </div>
                </div>
              </CardContent>

              <div className="px-6 pb-4">
                {success && (
                  <Alert className="border-green-300 bg-green-50 text-green-800">
                    <AlertDescription className="flex items-center gap-2">
                      <span className="bg-green-100 p-1 rounded-full">✓</span>
                      Your Abhishek booking has been submitted successfully!
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              <CardFooter className="px-6 pb-6">
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

      {/* Full-screen, responsive image viewer */}
      {showTransactionPreview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-2 backdrop-blur-md sm:p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeTransactionPreview();
            }
          }}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Transaction ID screenshot preview"
            className="relative flex h-[96dvh] w-full max-w-5xl flex-col items-center justify-center overflow-hidden rounded-xl bg-black/20 sm:h-[94dvh]"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeTransactionPreview}
              aria-label="Close image preview"
              className="absolute right-2 top-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-lg backdrop-blur-md transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white sm:right-3 sm:top-3"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Zoom controls */}
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-black/75 p-1.5 text-white shadow-xl backdrop-blur-md sm:bottom-4">
              <button
                type="button"
                onClick={() => changeZoom(-0.25)}
                disabled={zoom <= 1}
                aria-label="Zoom out"
                className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ZoomOut className="h-5 w-5" />
              </button>

              <span className="min-w-[52px] text-center text-sm font-medium tabular-nums">
                {Math.round(zoom * 100)}%
              </span>

              <button
                type="button"
                onClick={() => changeZoom(0.25)}
                disabled={zoom >= 4}
                aria-label="Zoom in"
                className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ZoomIn className="h-5 w-5" />
              </button>

              <span className="mx-1 h-6 w-px bg-white/25" />

              <button
                type="button"
                onClick={resetZoom}
                disabled={zoom === 1}
                aria-label="Reset image zoom"
                className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/20 disabled:opacity-40"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>

            {/* Image fits the available screen at 100% */}
            <div
              className="flex h-full w-full items-center justify-center overflow-hidden"
              onWheel={handleImageWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              style={{ touchAction: "none" }}
            >
              <img
                src="/transaction.png"
                alt="Payment screenshot showing where to find the transaction ID or UTR reference"
                draggable={false}
                className="block select-none object-contain"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  transform: `scale(${zoom})`,
                  transformOrigin: "center center",
                  transition: pinchStartDistance.current
                    ? "none"
                    : "transform 150ms ease-out",
                }}
              />
            </div>

            {/* Minimal zoom hint */}
            <p className="pointer-events-none absolute bottom-[66px] left-0 right-0 text-center text-xs text-white/80 sm:bottom-[72px]">
              Pinch to zoom on mobile · Use + / − or mouse wheel
            </p>
          </div>
        </div>
      )}
    </>
  );
}
