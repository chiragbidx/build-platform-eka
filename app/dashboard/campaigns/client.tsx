"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CampaignsClient() {
  // Placeholder for campaigns logic, currently just empty state.
  return (
    <div className="max-w-3xl mx-auto mt-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Campaigns</h1>
      <p className="mb-8 text-muted-foreground text-lg text-center">
        No campaigns yet. Click below to create your first campaign.
      </p>
      <Button asChild size="lg" className="px-8 py-2 rounded-full">
        <Link href="/dashboard/campaigns/new">Create Campaign</Link>
      </Button>
    </div>
  );
}