import React from "react";

interface SocialLinks {
  instagram: string;
  github: string;
  linkedin: string;
}

export interface UserCardProps {
  name: string;
  username: string;
  avatarUrl: string;
  socials: SocialLinks;
  workTitle: string;
  workDescription: string[];
  funFactTitle: string;
  funFacts: string[];
  backgroundColor?: string;
  textColor?: string;
  rounded?: boolean;
  style?: React.CSSProperties;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  username,
  avatarUrl,
  socials,
  workTitle,
  workDescription,
  funFactTitle,
  funFacts,
  backgroundColor = "#4285F4",
  textColor = "#FFFFFF",
  rounded = true,
  style,
}) => {
  const colorNoHash = textColor.replace("#", "");
  return (
    <div
      className={`${rounded ? "rounded-lg" : ""} p-6 flex flex-col md:flex-row`}
      style={{ backgroundColor, color: textColor, ...style }}
    >
      <div className="md:w-1/3 flex flex-col items-center md:items-start mb-6 md:mb-0 md:mr-6 text-center md:text-left">
        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm opacity-80">{username}</p>
        <div className="flex space-x-4 mt-3">
          <a
            href={socials.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://cdn.simpleicons.org/instagram/${colorNoHash}`}
              alt="Instagram"
              className="w-5 h-5"
            />
          </a>
          <a
            href={socials.github}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://cdn.simpleicons.org/github/${colorNoHash}`}
              alt="GitHub"
              className="w-5 h-5"
            />
          </a>
          <a
            href={socials.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://cdn.simpleicons.org/linkedin/${colorNoHash}`}
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
      <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
        <h3 className="font-semibold">{workTitle}</h3>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          {workDescription.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/3">
        <h3 className="font-semibold">{funFactTitle}</h3>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          {funFacts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
