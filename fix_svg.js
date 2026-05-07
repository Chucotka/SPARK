const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The original base lightbulb svg in the screenshot looks like it has an inner glowing V shape
// Let's replace the lightbulb SVG entirely to match the user's screenshot
const newSvg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <!-- Custom Stylized Lightbulb matching screenshot -->
                            <path d="M50 15 C30 15 15 30 15 50 C15 62 23 72 32 78 L35 88 L65 88 L68 78 C77 72 85 62 85 50 C85 30 70 15 50 15 Z" fill="var(--primary-accent)"/>
                            <path d="M35 88 L65 88 L62 95 L38 95 Z" fill="#666"/>
                            <path d="M42 95 L58 95 L55 100 L45 100 Z" fill="#444"/>

                            <!-- Inner glowing V-shape filaments -->
                            <path d="M35 45 L50 65 L65 45" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.8"/>
                        </svg>`;

html = html.replace(/<svg viewBox="0 0 100 100" xmlns="http:\/\/www.w3.org\/2000\/svg">[\s\S]*?<\/svg>/m, newSvg);
fs.writeFileSync('index.html', html);
