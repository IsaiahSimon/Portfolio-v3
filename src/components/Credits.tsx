import React from "react";
import Link from "next/link";
import { credits } from "~/config";
import Spacer from "./Spacer";

interface CreditsProps {
  id: number;
  label: string;
  websiteURL?: string;
  repoURL?: string;
  blogURL?: string;
}

const Credits = () => {
  return (
    <ul>
      {credits.map((credit: CreditsProps) => (
        <li key={credit.id}>
          <p className="text-slateLight">{credit.label}:</p>
          <div className="flex flex-col">
            {credit.websiteURL && (
              <Link
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
                href={credit.websiteURL}
              >
                - website
              </Link>
            )}
            {credit.repoURL && (
              <Link
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
                href={credit.repoURL}
              >
                - repo
              </Link>
            )}
            {credit.blogURL && (
              <Link
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
                href={credit.blogURL}
              >
                - blog post
              </Link>
            )}
          </div>
          <Spacer height="15px" />
        </li>
      ))}
    </ul>
  );
};

export default Credits;
