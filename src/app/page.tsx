import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-md shadow-md text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to LawGPT</h1>
        <p className="text-lg mb-6">
          Your AI-powered legal assistant. Ask me anything about legal matters
          and get instant answers.
        </p>
        <Button className="w-full max-w-xs mx-auto">
          <Link  href={"/chat"}>
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  );
}
