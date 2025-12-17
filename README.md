# 🎉 Happy Birthday Pui 💚

A beautiful, interactive birthday website created with love for Pui's 22nd birthday celebration.

## 📖 Overview

This is a personalized birthday website featuring:
- Animated typewriter messages
- Floating hearts and confetti effects
- Photo gallery of precious moments
- Birthday countdown timer
- Interactive surprise button
- **Special balloon animation when countdown reaches zero!**

## 🎈 Features

### 1. **Hero Section**
- Animated greeting with typewriter effect
- Continuous floating hearts animation
- Confetti particles falling in the background
- Smooth scroll indicator

### 2. **Personal Message**
- Heartfelt birthday message in Thai and English
- Beautiful card design with decorative elements

### 3. **Photo Gallery**
- 6 special moments captured together
- Hover effects on images
- Responsive grid layout

### 4. **Birthday Wishes**
- Personalized wishes in Thai
- Special notes and encouragement
- Elegant card presentation

### 5. **Countdown Timer**
- Live countdown to December 18, 2025 (Pui's Birthday)
- Displays days, hours, minutes, and seconds
- **Automatic celebration trigger when timer reaches zero**

### 6. **Birthday Celebration Animation** 🎊
When the countdown reaches `00:00:00:00`, the website automatically:
- Shows a full-screen celebration overlay
- Launches 8 colorful balloons floating upward
- Explodes with 100 confetti pieces
- Bursts with 50 floating hearts
- Displays "Happy Birthday Pui!" message
- Auto-fades after 10 seconds

### 7. **Interactive Surprise Button**
- Hidden surprise message
- Click to reveal special content
- Heart burst animation on reveal

## 🎨 Design Elements

- **Color Scheme**: Soft green, mint cream, pale sage, warm beige
- **Font**: Poppins (Google Fonts)
- **Animations**: Custom CSS animations for smooth, elegant effects
- **Responsive**: Fully responsive design for all devices

## 📁 Project Structure

```
HBD/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # Project documentation
└── assets/
    └── image/
        ├── 1.jpeg      # Photo 1
        ├── 2.jpeg      # Photo 2
        ├── 3.jpeg      # Photo 3
        ├── 4.jpeg      # Photo 4
        ├── 5.jpeg      # Photo 5
        └── 6.jpeg      # Photo 6
```

## 🚀 How to Use

### Option 1: Open Locally
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Enjoy the birthday experience!

### Option 2: Host Online
1. Upload all files to a web hosting service (GitHub Pages, Netlify, Vercel, etc.)
2. Share the link with Pui
3. The countdown will work automatically based on the visitor's timezone

## ⏰ Countdown Configuration

The countdown is set to **December 18, 2025, at midnight**. To change the date:

1. Open `script.js`
2. Find the `initCountdown()` function
3. Modify this line:
```javascript
const birthdayDate = new Date(2025, 11, 18, 0, 0, 0); // Month is 0-indexed (11 = December)
```

**Note**: Month parameter is 0-indexed (0 = January, 11 = December)

## 🎯 Key Animations

### Floating Hearts
- Continuously float from bottom to top
- Random positioning and timing
- Multiple heart emojis (💚, 💕, 💖, 💗, 💝, 💓)

### Confetti Effect
- Falls from top to bottom
- Randomized colors and timing
- Continuous generation

### Balloon Celebration
- Triggers automatically when countdown ends
- 8 balloons float upward with staggered timing
- Massive confetti and heart burst
- Beautiful celebration message overlay

### Scroll Animations
- Fade-in effect for sections
- Triggered when scrolling into view
- Smooth transitions

## 💻 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Advanced animations and transitions
- **Vanilla JavaScript**: No frameworks needed!
- **Google Fonts**: Poppins font family

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (480px - 767px)
- Small mobile devices (<480px)

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --soft-green: #A8D5BA;
    --mint-cream: #F5FFFA;
    --pale-sage: #DFF3E3;
    --warm-beige: #F5EEDC;
    --soft-gold: #D2B48C;
    --soft-pink: #F7DDE2;
}
```

### Updating Photos
Replace images in `assets/image/` folder with your own photos (keep the same filenames or update references in `index.html`)

### Modifying Messages
Edit the text content directly in `index.html` - all messages are in plain HTML for easy customization

## 🌟 Special Features

- **Mouse Sparkle Effect**: Moving the mouse creates occasional sparkle particles
- **Intersection Observer**: Smooth scroll-triggered animations
- **Performance Optimized**: Lightweight and fast loading
- **No Dependencies**: Pure vanilla JavaScript

## 📝 Notes

- The celebration animation triggers only once when the countdown reaches zero
- The website works best with JavaScript enabled
- All animations are GPU-accelerated for smooth performance
- Images are optimized for web delivery

## 💚 Created With Love

This website was created with love and care for Pui's 22nd birthday celebration. Every detail was thoughtfully designed to make her special day even more memorable.

---

**Happy Birthday, Pui! 🎂🎉💚**

*May your 22nd year be filled with happiness, love, and beautiful moments!*
