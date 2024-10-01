"use client";

import "../../../styles/globals.css";
import "./page.css";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import React from "react";
import { Search } from "lucide-react";

export default function AccordionDemo() {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "item-1",
    "item-2",
    "item-3",
    "item-4",
  ]);
  const [isAllExpanded, setIsAllExpanded] = useState(true);

  useEffect(() => {
    setIsAllExpanded(expandedItems.length === 4);
  }, [expandedItems]);

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedItems([]);
    } else {
      setExpandedItems(["item-1", "item-2", "item-3", "item-4"]);
    }
  };

  const [progress, setProgress] = React.useState(13);
  const [progress2, setProgress2] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress2(0), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mx-auto space-y-4 testhistory-container p-8 flex flex-col gap-8">
      <div className="history-header flex items-center justify-between">
        <div className="history-title">
          <h2 className="font-normal text-4xl">My Courses</h2>
        </div>

        {/* COLLAPSE/EXPAND TOGGLE BUTTON & SEARCHBAR */}
        <div className="history-btns flex gap-4">
          {/* TOGGLE BUTTON */}
          <Button onClick={toggleAll} variant="outline" className="w-fit">
            {isAllExpanded ? "Collapse All" : "Expand All"}
          </Button>

          {/* SEARCH BAR */}
          <div className="courses-search">
            <Input className="w-full bg-white" type="search" placeholder="Search..." />
          </div>
        </div>
      </div>

      {/* ACCORDION */}
      <Accordion
        type="multiple"
        value={expandedItems}
        onValueChange={setExpandedItems}
        className="w-full"
      >
        {/* ITEM 1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Link href=""> Western Oklahoma State Student Orientation</Link>
          </AccordionTrigger>

          <AccordionContent>
            <div className="course-progress flex flex-col gap-1">
              <p>{progress}% complete &nbsp; 0/4 steps </p>
              <Progress value={progress} className="w-[60%]" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* ITEM 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <Link href="">HCCC Student Orientation</Link>
          </AccordionTrigger>

          <AccordionContent>
            <div className="course-progress flex flex-col gap-1">
              <p>{progress}% complete &nbsp; 0/4 steps</p>
              <Progress value={progress} className="w-[60%]" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* ITEM 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <Link href="">
              Florida State – Jacksonville Student Orientation
            </Link>
          </AccordionTrigger>

          <AccordionContent>
            <div className="course-progress flex flex-col gap-1">
              <p>{progress}% complete &nbsp; 0/4 steps</p>
              <Progress value={progress} className="w-[60%]" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* ITEM 4 */}
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <Link href="">Redlands Student Orientation</Link>
          </AccordionTrigger>

          <AccordionContent>
            <div className="course-progress flex flex-col gap-1">
              <p>{progress2}% complete &nbsp; 0/4 steps</p>
              <Progress value={progress2} className="w-[60%]" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
