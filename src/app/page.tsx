// import Image from "next/image";

import TextInput from "@/app/components/TextInput";
/* import AudioInput from "components/AudioInput";
import CameraInput from "components/CameraInput"; */

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Device Controller Interface</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
      <TextInput />
    </div>
  </div>
  );
}
