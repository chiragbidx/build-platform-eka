"use client";

import { Button } from "@/components/ui/button";

export default function NewCampaignClient() {
  return (
    <div className="max-w-2xl mx-auto mt-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">New Campaign</h1>
      <p className="mb-8 text-muted-foreground text-center">
        Start by entering your campaign details.
      </p>
      <Button size="lg" className="px-8 py-2 rounded-full">
        Save Campaign
      </Button>
    </div>
  );
}