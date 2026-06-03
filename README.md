# Ethiopic Web IME Suite

A collection of web-based Input Method Editors (IME) for Ethiopic scripts (Tigrinya, Amharic, etc.). This repository contains two versions of the IME: one designed for mobile/on-screen interaction and another for physical keyboard input on desktop.

## Projects

### 1. [On-Screen Keyboard](./keyboard/)
A mobile-optimized virtual keyboard that allows users to type by clicking or tapping on-screen buttons.
- **Features**: Visual feedback, touch-friendly layout, symbols support, and toggle-able caps lock.
- **Ideal for**: Kiosks, mobile web apps, or users without an Ethiopic keyboard layout installed.

### 2. [Physical Keyboard](./pc_keyboard/)
A desktop-oriented tool that captures standard QWERTY keyboard input and maps it to Ethiopic characters in real-time.
- **Features**: Fast typing using phonetic mapping (e.g., typing 's' + 'e' produces 'ሰ'), text manipulation tools (bold, italic), and a focused writing area.
- **Ideal for**: Desktop users who want to type in Tigrinya or Amharic quickly using their existing hardware.

## Features
- **Phonetic Mapping**: Uses a logical mapping system to convert Latin characters to Ethiopic script.
- **Multi-language Support**: Configured for Tigrinya and English.
- **Responsive Design**: Built with Bootstrap for a clean UI.

## How to Use
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/web-ime.git
   ```
2. Open `index.html` in the root directory to access the main portal, or navigate directly to either project folder.

## License
MIT
