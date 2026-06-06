# Geez Web IME

A web-based Input Method Editor (IME) for Geez scripts (Tigrinya, Amharic, etc.). This project contains two versions of the IME:

- **Mobile**: Designed for touch interaction and virtual keyboard display.
- **Desktop**: Designed for physical keyboard input using phonetic mapping.

> This project was developed as a **proof of concept** for a web based IME implementation.

## Projects

### 1. [Mobile Keyboard](./mobile_ime/)

A mobile-optimized virtual keyboard that allows users to type by clicking or tapping on-screen buttons.

- **Features**: Visual feedback, touch-friendly layout, symbols support, and toggle-able caps lock.
- **Ideal for**: Kiosks, mobile web apps, or users without a Geez keyboard layout installed.

### 2. [Computer Keyboard](./desktop_ime/)

A desktop-oriented tool that captures standard QWERTY keyboard input and maps it to Geez characters in real-time.

- **Features**: Fast typing using phonetic mapping (e.g., typing 's' + 'e' produces 'ሰ'), text manipulation tools (bold, italic), and a focused writing area.
- **Ideal for**: Desktop users who want to type in Tigrinya or Amharic quickly using their existing hardware.

## Features

- **Letter Mapping**: Uses a logical mapping system to convert Latin characters to Geez script.
- **Multi-language Support**: Configured for Tigrinya (All languages which use the Geez Script) and English.

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/web-ime.git
   ```
2. Open `index.html` in the root directory to access the main portal, or navigate directly to either project folder.