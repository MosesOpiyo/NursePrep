'use client'

import { useState, useRef, useCallback } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Camera, Upload } from "lucide-react";
import Cropper from 'react-easy-crop';
import '../../styles/globals.css'

export default function EditableProfilePic() {
  const [image, setImage] = useState<string | null>(null)
  const [croppedImage, setCroppedImage] = useState<string | null>(null)
  const [isCropping, setIsCropping] = useState(false)
  const [isCapturing, setIsCapturing] = useState(false)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

  const handleCameraCapture = async () => {
    setIsCapturing(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
    }
  }

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d')
      if (context) {
        context.drawImage(videoRef.current, 0, 0, 300, 150)
        const capturedImage = canvasRef.current.toDataURL('image/jpeg')
        setImage(capturedImage)
        setIsCapturing(false)
        setIsCropping(true)
        // Stop all video streams
        const stream = videoRef.current.srcObject as MediaStream
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    if (image) {
      const canvas = document.createElement('canvas')
      const img = new Image()
      img.src = image
      img.onload = () => {
        const scaleX = img.naturalWidth / img.width
        const scaleY = img.naturalHeight / img.height
        canvas.width = croppedAreaPixels.width
        canvas.height = croppedAreaPixels.height
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(
            img,
            croppedAreaPixels.x * scaleX,
            croppedAreaPixels.y * scaleY,
            croppedAreaPixels.width * scaleX,
            croppedAreaPixels.height * scaleY,
            0,
            0,
            croppedAreaPixels.width,
            croppedAreaPixels.height
          )
          setCroppedImage(canvas.toDataURL('image/jpeg'))
        }
      }
    }
  }, [image])

  return (
    <div className="flex flex-col items-center justify-center w-fit space-y-4">
      <Avatar className="w-32 h-32">
        <AvatarImage src={croppedImage || image || undefined} alt="Profile picture" />
        <AvatarFallback>User</AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Edit Picture</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => fileInputRef.current?.click()}>
            <Upload className="mr-2 h-4 w-4" />
            <span>Upload Image</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleCameraCapture}>
            <Camera className="mr-2 h-4 w-4" />
            <span>Take Photo</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <input
        title='file'
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <Dialog open={isCropping} onOpenChange={setIsCropping}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Crop Image</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-64">
            {image && (
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            )}
          </div>
          <Button onClick={() => setIsCropping(false)}>Done</Button>
        </DialogContent>
      </Dialog>
      <Dialog open={isCapturing} onOpenChange={setIsCapturing}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Take Photo</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-64">
            <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
          </div>
          <Button onClick={handleCapture}>Capture</Button>
          <Button variant="outline" onClick={() => setIsCapturing(false)}>Cancel</Button>
        </DialogContent>
      </Dialog>
      <canvas ref={canvasRef} className="hidden" width={300} height={150} />
    </div>
  )
}