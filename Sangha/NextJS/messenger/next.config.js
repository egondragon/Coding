/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            'localhost',
            'images.unsplash.com', 
            'links.papareact.com', 
            'graph.facebook.com',
            'scontent-cdg4-3.xx.fbcdn.net'
        ],
    },
    experimental: {
        appDir: true
    }
}
