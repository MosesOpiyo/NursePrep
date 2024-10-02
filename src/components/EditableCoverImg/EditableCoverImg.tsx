'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Camera } from "lucide-react"
import Cropper, { Area, Point } from 'react-easy-crop'
import '../../styles/globals.css'

interface EditableCoverImageProps {
  onImageChange: (image: string) => void
  initialImage: string
}

export default function EditableCoverImage({ onImageChange, initialImage }: EditableCoverImageProps) {
  const [image, setImage] = useState<string>(initialImage)
  const [isCropping, setIsCropping] = useState(false)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
        setIsCropping(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    const canvas = document.createElement('canvas')
    const image = new Image()
    image.src = image
    image.onload = () => {
      const scaleX = image.naturalWidth / image.width
      const scaleY = image.naturalHeight / image.height
      canvas.width = croppedAreaPixels.width
      canvas.height = croppedAreaPixels.height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(
          image,
          croppedAreaPixels.x * scaleX,
          croppedAreaPixels.y * scaleY,
          croppedAreaPixels.width * scaleX,
          croppedAreaPixels.height * scaleY,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        )
        const croppedImageData = canvas.toDataURL('image/jpeg')
        onImageChange(croppedImageData)
      }
    }
  }, [onImageChange])

  return (
    <div className="relative h-[300px] bg-blue-200 rounded-xl">
      <Image
        src={image}
        alt="Cover"
        layout="fill"
        objectFit="cover"
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
        title='file'
      />
      <div className="absolute bottom-4 right-4 text-white text-sm bg-black bg-opacity-50 p-2 rounded">
        For best results, upload an image that is 1950px by 450px or larger.
      </div>
      <Dialog open={isCropping} onOpenChange={setIsCropping}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Crop Cover Image</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-64">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1950 / 450}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <Button onClick={() => setIsCropping(false)}>Done</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}