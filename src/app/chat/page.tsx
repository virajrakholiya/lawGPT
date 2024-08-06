"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import Markdown from 'react-markdown'
import Image from 'next/image'
import logo from '../../../public/imge.jpeg'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "./../api/completion",
  });
  
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full min-h-[90vh] justify-between">
        <div className="flex-1 overflow-y-auto p-5 gap-3 flex flex-col ">
          {messages.length > 0 ? (
            messages.map((m) => (
              <div
                key={m.id}
                className="whitespace-pre-wrap border p-2 rounded-md"
              >
                {m.role === "user" ? "User: " : "LawGPT: "}
                <Markdown>{m.content}</Markdown>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-full">
              <Image
                src={logo}
                alt="Placeholder"
                width={400}
                height={400}
                className="rounded-md"
              />
            </div>
          )}
          {isLoading && (
            <div className="flex justify-center items-center">
<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>            </div>
          )}
        </div>
        
        <form
          onSubmit={handleSubmit}
          className="bg-white border-t p-5 flex flex-row gap-3 sticky bottom-0"
        >
          <Input
            className="w-full border border-gray-300 rounded"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
          <Button type="submit" disabled={isLoading}>Send</Button>
        </form>
      </div>
    </>
  );
}