import CustomLink from "@components/components/CustomLink";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-6xl">Chela.js</h1>
        <h2 className="text-xl">
          🍻 Donde los desarrolladores se reúnen para hablar de tecnología,
          compartir ideas y crear juntos.
        </h2>
        <p className="text-lg">
          🚀 Grandes cosas están por venir... ¡Seguimos trabajando en ello!
        </p>
        <h4 className="text-lg">
          👉 Únete a la conversación en nuestro
          <CustomLink
            type="external"
            href="https://chat.whatsapp.com/FYEQogueJpS0i5fHA1sOA0"
            target="_blank"
            rel="noopener noreferrer"
          >
            grupo de WhatsApp.
          </CustomLink>{" "}
        </h4>
        <p className="flex">
          📅
          <CustomLink
            href={process.env.NEXT_PUBLIC_NEXT_EVENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-lg">
              No te pierdas nuestro próximo evento el{" "}
              {process.env.NEXT_PUBLIC_NEXT_EVENT_DATE}. ¡Inscríbete ahora!
            </p>
          </CustomLink>
        </p>
      </main>
    </div>
  );
}
