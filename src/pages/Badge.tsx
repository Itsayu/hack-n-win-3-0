"use client";

import { useState, useRef } from "react";
import { Camera, Download, Upload } from "lucide-react";

/**
 * Badge component (no DB)
 * - Saves created badges to localStorage under key "hnw_badges"
 * - Allows downloading badge data as JSON
 * - Keeps visual badge preview and screenshot suggestion (no print)
 */

type BadgeRecord = {
  id: string;
  participant_name: string;
  participant_email: string;
  photo_url?: string | null;
  badge_number: string;
  created_at: string;
};

export default function Badge() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [previewPhoto, setPreviewPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [badgeGenerated, setBadgeGenerated] = useState(false);
  const [badgeNumber, setBadgeNumber] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPhoto(reader.result as string);
        setPhotoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateBadgeNumber = () => {
    return `HNW-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase()}`;
  };

  const saveBadgeToLocalStorage = (record: BadgeRecord) => {
    try {
      const raw = localStorage.getItem("hnw_badges");
      const arr: BadgeRecord[] = raw ? JSON.parse(raw) : [];
      arr.push(record);
      localStorage.setItem("hnw_badges", JSON.stringify(arr));
    } catch (err) {
      console.error("Failed to save badge locally:", err);
    }
  };

  const handleGenerateBadge = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);
    const newBadgeNumber = generateBadgeNumber();
    const record: BadgeRecord = {
      id: Date.now().toString(),
      participant_name: name,
      participant_email: email,
      photo_url: photoUrl || null,
      badge_number: newBadgeNumber,
      created_at: new Date().toISOString(),
    };

    try {
      // Save locally (no DB)
      saveBadgeToLocalStorage(record);

      setBadgeNumber(newBadgeNumber);
      setBadgeGenerated(true);
    } catch (error) {
      console.error("Error generating badge:", error);
      alert("Failed to generate badge. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Download the badge data as a JSON file
  const downloadBadgeJSON = () => {
    const data = {
      participant_name: name,
      participant_email: email,
      photo_url: photoUrl || null,
      badge_number: badgeNumber,
      created_at: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `badge-${badgeNumber || "unknown"}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  // Download action — only JSON + screenshot suggestion (no print)
  const handleDownload = () => {
    downloadBadgeJSON();
    alert(
      "Badge data downloaded as JSON. To save the visual badge, take a screenshot of the badge area."
    );
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhotoUrl("");
    setPreviewPhoto("");
    setBadgeGenerated(false);
    setBadgeNumber("");
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="bg-gradient-to-br from-black via-red-900 to-black py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Camera className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Generate Your Badge</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Create your personalized Hack-N-Win 3.0 badge
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {!badgeGenerated ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                    Badge Information
                  </h2>
                  <form onSubmit={handleGenerateBadge} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-black dark:text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:border-red-600 focus:outline-none"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-black dark:text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:border-red-600 focus:outline-none"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-black dark:text-white mb-2">
                        Profile Photo (Optional)
                      </label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600 transition-colors flex items-center justify-center gap-2 text-black dark:text-white"
                      >
                        <Upload className="w-5 h-5" />
                        <span>Upload Photo</span>
                      </button>
                      {previewPhoto && (
                        <div className="mt-4 text-center">
                          <img
                            src={previewPhoto}
                            alt="Preview"
                            className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-red-600"
                          />
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                    >
                      {loading ? "Generating..." : "Generate Badge"}
                    </button>
                  </form>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border-2 border-red-600">
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Badge Preview</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Fill in your information to see a preview of your badge
                  </p>
                  <div className="bg-white dark:bg-black rounded-xl p-6 border-2 border-gray-300 dark:border-gray-700">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        {previewPhoto ? (
                          <img
                            src={previewPhoto}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <span className="text-5xl">👤</span>
                        )}
                      </div>
                      <div className="mb-4">
                        <p className="text-2xl font-bold text-black dark:text-white">
                          {name || "Your Name"}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {email || "your.email@example.com"}
                        </p>
                      </div>
                      <div className="border-t-2 border-red-600 pt-4">
                        <p className="text-lg font-bold text-black dark:text-white mb-1">
                          Hack-N-Win 3.0
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Organized by D4 Community
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="inline-block mb-8">
                  <div
                    ref={badgeRef}
                    className="bg-gradient-to-br from-black via-red-900 to-black rounded-2xl p-8 border-4 border-red-600 shadow-2xl"
                    style={{ width: "400px" }}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white dark:border-gray-800 shadow-lg">
                          {previewPhoto ? (
                            <img
                              src={previewPhoto}
                              alt="Profile"
                              className="w-full h-full object-cover rounded-full"
                            />
                          ) : (
                            <span className="text-6xl">👤</span>
                          )}
                        </div>
                        <h3 className="text-3xl font-bold text-black dark:text-white mb-2">
                          {name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{email}</p>
                        <div className="border-t-2 border-red-600 pt-4 mb-4">
                          <p className="text-xl font-bold text-black dark:text-white mb-1">
                            Hack-N-Win 3.0
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Organized by D4 Community
                          </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Badge Number</p>
                          <p className="text-sm font-mono font-bold text-black dark:text-white">
                            {badgeNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleDownload}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download Badge Data
                  </button>

                  <button
                    onClick={handleReset}
                    className="bg-black dark:bg-white text-white dark:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
                  >
                    Create Another Badge
                  </button>
                </div>

                <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 max-w-2xl mx-auto">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Note:</strong> Your badge data is stored locally in your browser (localStorage)
                    so it won't be shared with any server. Use <strong>Download Badge Data</strong> to
                    export the record. To save the visual badge image, take a screenshot of the badge area.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
