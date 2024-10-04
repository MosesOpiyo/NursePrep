'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Camera } from "lucide-react"
import Cropper, { Area, Point } from 'react-easy-crop'

interface EditableCoverImageProps {
  onImageChange: (image: string) => void
  initialImage: string
}

export default function EditableCoverImage({ onImageChange, initialImage }: EditableCoverImageProps) {
  const [image, setImage] = useState<string>(initialImage)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative h-[300px] bg-blue-200 rounded-xl">
      <Image
        src={image}
        alt="Cover"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="w-full h-full"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-4 right-4"
        onClick={() => fileInputRef.current?.click()}
      >
        <Camera className="h-4 w-4" />
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        title='upload file'
      />
      <div className="absolute bottom-4 right-4 text-white text-sm bg-black bg-opacity-50 p-2 rounded">
        For best results, upload an image that is 1950px by 450px or larger.
      </div>
    
    </div>
  )
}