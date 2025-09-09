"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";


export default function UnsubscribePage({ params }: {
  params: Promise<{ email: string }>
}) {
  const [status, setStatus] = useState<"pending" | "success" | "failed">("pending");


  const { email } = use(params);


  useEffect(() => {
    const unsubscribe = async () => {
      try {
        const res = await fetch("/api/unsubscribe", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        if (res.ok) {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (err) {
        console.error("Failed to unsubscribe", err);
        setStatus("failed");
      }
    };

    unsubscribe();
  }, [email]);


  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-4">
      <div>
        {status === "pending" && "Unsubscribing..."}
        {status === "success" && "You are Unsubscribed"}
        {status === "failed" && "Unsubscribe Failed, you already unsubscribed"}
      </div>

      <Link
        replace
        href="/"
        className="underline underline-offset-4 hover:text-white text-gray-400"
      >
        Back to Home page
      </Link>
    </div>
  );
}
