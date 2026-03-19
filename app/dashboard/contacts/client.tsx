"use client";

import { Button } from "@/components/ui/button";

export default function ContactsClient() {
  return (
    <div className="max-w-3xl mx-auto mt-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Contacts</h1>
      <p className="mb-8 text-muted-foreground text-lg text-center">
        No contacts yet. Import or add your first contact list.
      </p>
      <Button size="lg" className="px-8 py-2 rounded-full">
        Add Contacts
      </Button>
    </div>
  );
}