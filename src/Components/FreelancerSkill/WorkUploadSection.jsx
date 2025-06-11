import { useState } from "react";
import toast from "react-hot-toast";
import supabase from "../../supabaseClient";
import { FaFilePdf } from "react-icons/fa";

const WorkUploadSection = ({ user, setUser, userId, hasValidPlan }) => {
  const getFileType = (url) => {
    const ext = url.split('.').pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
    if (["mp4", "webm", "ogg"].includes(ext)) return "video";
    if (ext === "pdf") return "pdf";
    return "link";
  };

  const handleWorkFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ⛔️ Stop upload if a file already exists
    if (!hasValidPlan && user.work?.length >= 1) {
  toast.error("Upgrade to a plan to upload more than one work file.");
  return;
}

    const fileExt = file.name.split(".").pop();
    const fileName = `${userId}-work-${Date.now()}.${fileExt}`;
    const filePath = `work/${fileName}`;

    toast.loading("Uploading work file...");

    try {
      const { error } = await supabase.storage.from("images").upload(filePath, file);
      if (error) throw error;

      const publicUrl = supabase.storage.from("images").getPublicUrl(filePath).data.publicUrl;

      setUser((prev) => ({
        ...prev,
        work: [...prev.work, publicUrl],
      }));

      toast.dismiss();
      toast.success("Work file uploaded!");
    } catch (err) {
      toast.dismiss();
      toast.error("Failed to upload file: " + err.message);
    }
  };

  return (
    <div className="relative animate-fade-in delay-100">
      <label className="block text-[#004930] font-medium mb-2">
        Upload Work File (Only 1 allowed for free)
      </label>

      {/* Uploaded File Display */}
      <div className="flex flex-wrap gap-4">
        {user.work.map((fileUrl, index) => {
          const type = getFileType(fileUrl);
          return (
            <a
              key={index}
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              {type === "image" && (
                <img
                  src={fileUrl}
                  alt={`work-${index}`}
                  className="w-full h-32 object-cover rounded"
                />
              )}
              {type === "video" && (
                <video controls className="w-full h-32 rounded">
                  <source src={fileUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {type === "pdf" && (
                <div className="w-full h-32 flex items-center justify-center bg-red-100 text-red-700 text-4xl border rounded">
                  <FaFilePdf />
                </div>
              )}
              {type === "link" && (
                <span className="text-blue-600 underline break-words block">
                  {fileUrl}
                </span>
              )}
            </a>
          );
        })}
      </div>

      {/* Upload File Input – always visible */}
      <input
        type="file"
        accept="image/*,video/*,application/pdf"
        className="mt-3 p-2 w-full sm:w-1/2 lg:w-1/3 border cursor-pointer border-[#004930] rounded-lg bg-gray-50 text-gray-700"
        onChange={handleWorkFileUpload}
      />
    </div>
  );
};

export default WorkUploadSection;
