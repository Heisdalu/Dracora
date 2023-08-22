import "react-quill/dist/quill.snow.css";
import React from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });

const dummyText = `Next.js is a dynamic and innovative framework that has revolutionized the way developers approach building web applications. With its seamless blend of server-side rendering, static site generation, and client-side rendering, Next.js offers a comprehensive solution that empowers developers to create blazingly fast and highly optimized websites.

At the heart of Next.js lies its unparalleled performance optimization. By intelligently pre-rendering pages, it dramatically reduces loading times, ensuring users are greeted with content instantaneously. This not only enhances user experience but also improves search engine visibility, making Next.js a go-to choice for both developers and SEO enthusiasts.

But Next.js is not just about speed; it's about flexibility too. Whether you're building a small blog or a complex e-commerce platform, Next.js adapts to your needs. Its intuitive file-based routing system makes navigation a breeze, while its dynamic routing capabilities allow for personalized user experiences based on URL parameters.

With built-in support for CSS modules, Sass, and even CSS-in-JS libraries like styled-components, Next.js seamlessly integrates with modern styling practices. Moreover, its API routes enable the creation of serverless endpoints directly within your application, simplifying backend processes and enabling smooth data fetching.

Next.js doesn't just follow trends; it sets them. The framework's continuous innovation, demonstrated by features like incremental static regeneration and automatic image optimization, ensures that developers always have the tools they need to stay ahead in the fast-paced world of web development.

In a nutshell, Next.js isn't just a framework; it's a game-changer. Its ability to combine performance, flexibility, and innovation in one package makes it an indispensable asset in the toolkit of any developer striving to create exceptional web experiences. With Next.js, the future of web development is now.`;


const Editor = () => {
 
  return (
    <div>
      <ReactQuill theme="snow" value={dummyText} className="ql-editor" />
    </div>
  );
};
export default Editor;
