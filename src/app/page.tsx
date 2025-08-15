import HomePage from "@components/components/HomePage";

export default function Home() {
  return (
    <HomePage
      joinHref={
        process.env.NEXT_PUBLIC_WHATSAPP_LINK ||
        "https://chat.whatsapp.com/FYEQogueJpS0i5fHA1sOA0"
      }
      nextEventHref={
        process.env.NEXT_PUBLIC_NEXT_EVENT_LINK || "https://lu.ma/chelas.js"
      }
    />
  );
}
