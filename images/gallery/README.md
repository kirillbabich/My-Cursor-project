# Rotating Gallery Images

This directory contains the images for your auto-rotating photo gallery section on the homepage.

## Gallery Features

- **Auto-rotation**: Images rotate every 2 seconds
- **Responsive display**: 4 images on desktop, 2 on tablet, 1 on mobile
- **Interactive controls**: Pause/play button and clickable indicators
- **Hover effects**: Gallery pauses when you hover over it
- **Lightbox**: Click any image to view it in full size

## Required Images

You can add as many images as you want! The gallery currently supports up to 12 images, but you can easily add more. Place your images with these names:

### **photo1.jpg** - Death Valley
- **Description**: Death Valley adventure
- **Current caption**: "Death Valley"
- **Recommended size**: 600x400px

### **photo2.jpg** - Shanghai Wharton trip  
- **Description**: Business trip to Shanghai with Wharton
- **Current caption**: "Shanghai Wharton trip"
- **Recommended size**: 600x400px

### **photo3.jpg** - China Xiaomi HQ
- **Description**: Visit to Xiaomi headquarters in China
- **Current caption**: "China Xiaomi HQ"
- **Recommended size**: 600x400px

### **photo4.jpg** - Great Wall
- **Description**: Visit to the Great Wall of China
- **Current caption**: "Great Wall"
- **Recommended size**: 600x400px

### **photo5.jpg** - Italy trip
- **Description**: Travel experience in Italy
- **Current caption**: "Italy trip"
- **Recommended size**: 600x400px

### **photo6.jpg** - Skiing at Palisades
- **Description**: Skiing adventure at Palisades
- **Current caption**: "Skiing at Palisades"
- **Recommended size**: 600x400px

### **photo7.jpg** - Family trip to Mexico
- **Description**: Family vacation in Mexico
- **Current caption**: "Family trip to Mexico"
- **Recommended size**: 600x400px

### **photo8.jpg** - Great moments with Stu West
- **Description**: Special moments with Stu West
- **Current caption**: "Great moments with Stu West"
- **Recommended size**: 600x400px

### **photo9.jpg** - Grammarly team
- **Description**: Team photo from Grammarly
- **Current caption**: "Grammarly team"
- **Recommended size**: 600x400px

### **photo10.jpg** - Team celebration
- **Description**: Team achievement or celebration moment
- **Current caption**: "Team celebration"
- **Recommended size**: 600x400px

### **photo11.jpg** - Outdoor adventure
- **Description**: Outdoor activity or adventure
- **Current caption**: "Outdoor adventure"
- **Recommended size**: 600x400px

### **photo12.jpg** - Learning session
- **Description**: Training, workshop, or learning activity
- **Current caption**: "Learning session"
- **Recommended size**: 600x400px

## Image Requirements

- **Format**: JPG or PNG
- **Quality**: High resolution for best appearance
- **Optimization**: Consider compressing for web performance
- **Aspect Ratio**: 3:2 ratio works best (e.g., 600x400px)

## Tips

- Choose images that represent different aspects of your professional and personal life
- Ensure good lighting and quality
- Consider the story each image tells about you
- Mix professional and personal moments for a well-rounded gallery

## How to Add More Images

To add more images beyond photo12.jpg:

1. **Add image files**: Place additional images as photo13.jpg, photo14.jpg, etc.
2. **Update JavaScript**: Edit `/js/main.js` and add new entries to the `this.images` array in the `RotatingGallery` class
3. **Format**: Follow the same pattern: `{ src: 'images/gallery/photoX.jpg', alt: 'Description', caption: 'Caption text' }`

## Gallery Layout

The rotating gallery displays:
- **Desktop (>768px)**: 4 images in a row
- **Tablet (481-768px)**: 2 images in a row  
- **Mobile (≤480px)**: 1 image at a time

## Interactive Features

- **Auto-rotation**: Every 2 seconds (configurable in JavaScript)
- **Pause on hover**: Gallery stops rotating when you hover over it
- **Play/Pause button**: Manual control to stop/start rotation
- **Indicators**: Click dots below to jump to specific image sets
- **Lightbox**: Click any image to view full-size with caption
- **Smooth transitions**: Professional slide animations
