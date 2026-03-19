"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div className="max-w-2xl mx-auto mt-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">{greeting}</h1>
      <p className="mb-8 text-lg text-muted-foreground text-center">
        Start managing your email campaigns with ease.
      </p>

      <div className="w-full mt-10 flex flex-col items-center">
        <div className="mb-8">
          <p className="text-center text-muted-foreground">
            You haven’t created any campaigns yet. Get started by creating your first campaign.
          </p>
        </div>
        <Button asChild size="lg" className="px-8 py-2 rounded-full">
          <Link href="/dashboard/campaigns/new">Create Campaign</Link>
        </Button>
      </div>
    </div>
  );
}