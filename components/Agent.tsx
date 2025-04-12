import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}
const Agent = ({ userName }: AgentProps) => {
  const callSatus = CallStatus.FINISHED;
  const isSpeaking = true;
  const messages = [
    "What is your Name?",
    "My Name is Jone Doe, Nice to meet you.",
  ];
  const lastMessages = [messages.length - 1];
  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="vapi"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user avatar"
              width={540}
              height={540}
              className="object-cover rounded-full size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessages}
              className={cn(
                "transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessages}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        {callSatus !== "ACTIVE" ? (
          <button className="relative btn-call">
            <span
              className={cn(
                "absolute",
                "animate-ping rounded-full opacity-75",
                callSatus !== "CONNECTING" && "hidden"
              )}
            />
            <span>
              {callSatus === "INACTIVE" || callSatus === "FINISHED"
                ? "call"
                : "..."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect">
            <span>End</span>
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;
