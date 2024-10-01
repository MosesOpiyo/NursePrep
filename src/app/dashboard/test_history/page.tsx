"use client"

import '../../../styles/globals.css';
import './page.css';
import { useState, useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function AccordionDemo() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["item-1", "item-2", "item-3"])
  const [isAllExpanded, setIsAllExpanded] = useState(true)

  useEffect(() => {
    setIsAllExpanded(expandedItems.length === 3)
  }, [expandedItems])

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedItems([])
    } else {
      setExpandedItems(["item-1", "item-2", "item-3"])
    }
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <Button onClick={toggleAll} variant="outline" className="w-full">
        {isAllExpanded ? "Collapse All" : "Expand All"}
      </Button>
      <Accordion type="multiple" value={expandedItems} onValueChange={setExpandedItems} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
