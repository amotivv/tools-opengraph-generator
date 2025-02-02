# OpenGraph Generator

> A free tool provided by amotivv, inc. to generate stunning OpenGraph images and meta tags for your website.

---

## Overview

The **OpenGraph Generator** is an open-source web tool built with [Astro](https://astro.build) and styled with [Tailwind CSS](https://tailwindcss.com) that enables you to create beautiful social media cards and meta tags quickly. Whether you need an eye-catching image for Facebook, Twitter, LinkedIn or you simply want to improve your SEO meta information, this tool is designed to help you generate and customize your OpenGraph assets in seconds.

## Features

- **Real-Time Preview:** Watch your changes update live as you modify the title, description, alignment, background color, or upload a background image.
- **Customizable Templates:** Use the default layout or modify the design to suit your brand's style.
- **Meta Tag Generator:** Automatically generate HTML meta tags for OpenGraph and Twitter Cards.
- **Easy Image Download:** Generate your image and download it directly from the browser.
- **Clipboard Copying:** Quickly copy the generated meta tags to your clipboard.
- **Modern Tech Stack:** Built using Astro, Tailwind CSS, and TypeScript for a fast and modern development experience.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (or your preferred package manager)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/amotivv/tools-opengraph-generator
cd your-repo
npm install
```

### Running the App in Development

Start the development server with:

```sh
npm run dev
```

Then open your browser and navigate to the local URL (usually [http://localhost:3000](http://localhost:3000)).

### Building for Production

To build your production site:

```sh
npm run build
```

You can preview your production build using:

```sh
npm run preview
```

## Project Structure

The key files and folders include:

- **astro.config.mjs** & **tailwind.config.mjs**: Configuration files for Astro and Tailwind CSS.
- **package.json**: Contains project scripts and dependency definitions.
- **tsconfig.json**: TypeScript configuration for Astro.
- **src/**: Contains your application source code
  - **components/**: Reusable UI components (e.g., Card.astro, Footer.astro)
  - **layouts/**: Layout components wrapping pages (e.g., Layout.astro)
  - **pages/**: The main pages of the site (`index.astro`, `generator.astro`, `docs.astro`)
- **.astro/**: Contains Astro-specific types and settings.
- **.codesandbox/**, **.bolt/**: Configuration for external tools and deployment.

## Usage

### Home Page

The home page (`index.astro`) gives an overview of the tool and quick links to the generator and documentation pages.

### Generator Page

The `generator.astro` page is the heart of the application. Here you can:

1. **Enter a Title and Description:** Provide the text that will appear on your social media card.
2. **Customize Alignment:** Choose from left, center, or right text alignment using the interactive buttons.
3. **Choose a Background Color:** Select a color using the color picker.
4. **Upload a Background Image:** (Optional) Upload an image (max 5MB, recommended size 1200x630px) for a custom look.
5. **Download and Copy:** Use the “Download Image” button to save your generated image and “Copy Meta Tags” to copy the meta tags for use on your website.

### Documentation Page

The `docs.astro` page provides detailed information on:
- What OpenGraph tags are and why they are important
- A quick start guide to using the generator
- Guidelines for image specifications
- Examples of meta tags and frequently asked questions

## How It Works

- **Real-Time Updates:** A combination of HTML forms, JavaScript event listeners, and the [html2canvas](https://html2canvas.hertzen.com) library ensure that any input change is immediately reflected in the preview area.
- **Dynamic Meta Tag Generation:** As you type in your title and description, the application generates the corresponding HTML meta tags that you can use to optimize your social media sharing.
- **Download & Copy Functions:** The app uses client-side logic to convert the preview into an image for download and the Clipboard API to copy meta tags.

## Customization

You are free to customize the design and functionality. The code is modularized into components and layouts which makes it easy to modify the look-and-feel or add new features.

## Contributing

This tool is provided as-is by **amotivv, inc.** Contributions and feedback are welcome. Feel free to open issues or submit pull requests with improvements or fixes.

## Credits

- Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- Meta tag generation inspired by social media best practices
- Image rendering powered by [html2canvas](https://html2canvas.hertzen.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2024 amotivv, inc.

## Contact

For any questions or support, please contact us at [ai@amotivv.com](mailto:ai@amotivv.com) or visit our [website](https://amotivv.com).
