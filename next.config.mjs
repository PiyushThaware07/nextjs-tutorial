/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    images: {
        domains: ['dummyjson.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,  // Disable ESLint during the build
    },

    output: "export",  // export static html pages with build in nextJs.


    redirects: async () => {   // handle page maintenance
        return [
            {
                source: "/todos",
                destination: "/auth/signup",
                permanent: false
            }
        ]
    }
};

export default nextConfig;
