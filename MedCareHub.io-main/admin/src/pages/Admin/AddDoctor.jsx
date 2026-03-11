import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { backendUrl, aToken } = useContext(AdminContext);

  const specialityOptions = [
    { value: "General physician", label: "General Physician", icon: "👨‍⚕️" },
    { value: "Gynecologist", label: "Gynecologist", icon: "👩‍⚕️" },
    { value: "Dermatologist", label: "Dermatologist", icon: "🔬" },
    { value: "Pediatricians", label: "Pediatrician", icon: "👶" },
    { value: "Neurologist", label: "Neurologist", icon: "🧠" },
    { value: "Gastroenterologist", label: "Gastroenterologist", icon: "🫀" },
  ];

  const getSpecialityIcon = (speciality) => {
    const option = specialityOptions.find(opt => opt.value === speciality);
    return option ? option.icon : "👨‍⚕️";
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!docImg) {
      toast.error("Please upload a doctor image.");
      setIsLoading(false);
      return;
    }

    // Add client-side password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long, include a letter, a number, and a special character."
      );
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      const { data } = await axios.post(
        `${backendUrl}/api/admin/add-doctor`,
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        // Reset form
        setDocImg(null);
        setName("");
        setPassword("");
        setEmail("");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setAbout("");
        setFees("");
        setExperience("1 Year");
        setSpeciality("General physician");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Add New Doctor</h2>
          <p className="text-gray-600">Register a new medical professional to your team</p>
        </div>

        <form onSubmit={onSubmitHandler} className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up">
          {/* Image Upload Section */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">Doctor Profile Picture</label>
            <div className="flex justify-center">
              <label
                htmlFor="doc-img"
                className="cursor-pointer group relative"
              >
                <div className="w-32 h-32 rounded-full border-4 border-dashed border-gray-300 group-hover:border-primary transition-colors duration-200 flex items-center justify-center overflow-hidden">
                  {docImg ? (
                    <img
                      src={URL.createObjectURL(docImg)}
                      alt="Doctor Preview"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="text-center">
                      <img
                        src={assets.upload_area}
                        alt="Upload"
                        className="w-12 h-12 mx-auto mb-2 opacity-60"
                      />
                      <p className="text-sm text-gray-500">Upload Image</p>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">Change Photo</span>
                </div>
              </label>
              <input
                onChange={(e) => setDocImg(e.target.files[0])}
                type="file"
                id="doc-img"
                hidden
                accept="image/*"
              />
            </div>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Basic Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter doctor's full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Enter secure password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters with letters, numbers, and special characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medical Degree *
                </label>
                <input
                  onChange={(e) => setDegree(e.target.value)}
                  value={degree}
                  type="text"
                  placeholder="e.g., MBBS, MD, MS"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Professional Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Speciality *
                </label>
                <div className="relative">
                  <select
                    onChange={(e) => setSpeciality(e.target.value)}
                    value={speciality}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none"
                  >
                    {specialityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.icon} {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {getSpecialityIcon(speciality)}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  {Array.from({ length: 20 }, (_, i) => (
                    <option value={`${i + 1} Year${i > 0 ? 's' : ''}`} key={i}>
                      {i + 1} Year{i > 0 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Consultation Fee (₹) *
                </label>
                <input
                  onChange={(e) => setFees(e.target.value)}
                  value={fees}
                  type="number"
                  placeholder="Enter consultation fee"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address Line 1 *
                </label>
                <input
                  onChange={(e) => setAddress1(e.target.value)}
                  value={address1}
                  type="text"
                  placeholder="Street address, building, etc."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address Line 2 *
                </label>
                <input
                  onChange={(e) => setAddress2(e.target.value)}
                  value={address2}
                  type="text"
                  placeholder="City, state, ZIP code"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              About Doctor *
            </label>
            <textarea
              onChange={(e) => setAbout(e.target.value)}
              value={about}
              placeholder="Write a brief description about the doctor's expertise, achievements, and approach to patient care..."
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Adding Doctor...
                </>
              ) : (
                <>
                  <span>👨‍⚕️</span>
                  Add Doctor
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
