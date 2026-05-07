const products = [
    {
        id: 1,
        name: "SonicPro Wireless",
        category: "Audio & Sound",
        price: 24999,
        rating: 4.9,
        reviews: 124,
        badge: "New",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDuxZcUp8rg0bkgOtGoVAzD_E818XhOfo9qEK3GrLaKH2NHDZD2BnziKitay4d4UZGu780rvj7nyYq8oZtGl-56gj58GI30kNPioEAvuvK7cl2K602mZPnUu7_mCvfFDSxruZyo0vRypSCXRANdTwv9bs5t-lLPzah4oxf7pTpzNqjvschuwYECX7nLzOqaHiepQqGc1jtjuC5GA9Uoutx8DDUASvHlCeEo4I30tXORndvIW4ts3pIJVnV3RMxbFoMRlakOBNrp2uUk",
        description:
            "Premium wireless headphones with immersive audio experience.",
    },

    {
        id: 2,
        name: "Nexora Phone 15",
        category: "Mobiles",
        price: 89900,
        rating: 4.8,
        reviews: 89,
        badge: "New",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCSbE-fhA6gcDgbFKXKFFBbk6aPvM6RG0ZVdkcJX4-RioZhFlE9ErcTisW6yIjZKwQREaCV5o7BFRzsHhpbCafQm8j13KpM41J3eRc0-4Oo9tfwQP3CCWrukDLA5XGsEvKXYDNox8Rxh1-wqNxX-ifTw8ARl36wIxtiDglGqp-QCwYhsBJzXFG1N2TIXnL1wA1fGXO36dYWFhh2HIn-qi5TxRx89BbK12qKc_sE_2WBPUu6C69YrqAkfkx-ltyxra7zURECIiHjDgHB",
        description:
            "Flagship mobile with titanium body and advanced camera.",
    },

    {
        id: 3,
        name: "AirBook Pro",
        category: "Computing",
        price: 124900,
        rating: 5,
        reviews: 42,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDPEXpkyaSvcsaKpISEL5Xl05uuOiupuhSstmMvyVAj1Xf81C6K4MQyeUCmSBWdZlNvWSMDY8dZroY1CgtvUgojNXnGbBxaoCoBmwvfUmdmQyKcX9x6HcXR05S9fpLnD9AgQGohJ9k6KCVr_hvC1MMri0CaYqeukD5BtvGAOkbhaI7XcXnI3SXGqoY3x8ccIyiIfuG5GJnNg-XZp1z0SppRNbcNpxbzFRqsIuOHjVF-tkHtHaQuiAbFEn4ztKqhL_SMw3_lSpX-pTRl",
        description:
            "Ultra performance laptop for creators and developers.",
    },

    {
        id: 4,
        name: "Nexora Pad Air",
        category: "Mobiles",
        price: 54990,
        rating: 4.7,
        reviews: 215,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAekkkWyMYNLNM5Q-asZmIHnavOQ99fdewFWSt4CpUDhT4RVjiCXQRx3V1W6BZ53VKGBMj4UX0Q1ySBw3rGvOXqoBoOAstSzIEiGOGjfpbzbfIYdLmsWcN7lxXS-rST1YpvH9ZhGInfaVIyfjgF6oyk0sW8sFGQVBRSdkC9sSPAkOXNUKpbRmYiZae1obRic64esZPVzGj0cb0tS80t8ISutO1mW-daCvedsWvNUfKW0yvP1Q_QBsXH_LUxd-HNvN0JPIgQeC3mKzjF",
        description:
            "Powerful tablet with stunning liquid retina display.",
    },

    {
        id: 5,
        name: "Nexora Watch X",
        category: "Wearables",
        price: 29999,
        rating: 4.6,
        reviews: 150,
        image:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800",
        description:
            "Smart wearable with fitness and health tracking.",
    },

    {
        id: 6,
        name: "Studio Max Camera",
        category: "Photography",
        price: 154999,
        rating: 4.9,
        reviews: 56,
        image:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
        description:
            "Professional cinema-grade photography experience.",
    },

    {
        id: 7,
        name: "Gaming Beast X",
        category: "Computing",
        price: 179999,
        rating: 5,
        reviews: 80,
        image:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800",
        description:
            "Extreme gaming laptop with RTX graphics.",
    },

    {
        id: 8,
        name: "PureSound Mini",
        category: "Audio & Sound",
        price: 15999,
        rating: 4.4,
        reviews: 75,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
        description:
            "Compact sound experience with rich bass.",
    },

    {
        id: 9,
        name: "Creator Monitor 4K",
        category: "Computing",
        price: 45999,
        rating: 4.8,
        reviews: 61,
        image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800",
        description:
            "4K professional monitor with color accuracy.",
    },

    {
        id: 10,
        name: "Vision Drone Pro",
        category: "Photography",
        price: 89999,
        rating: 4.7,
        reviews: 91,
        image:
            "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800",
        description:
            "Cinematic aerial photography drone.",
    },

    {
        id: 11,
        name: "Nexora Buds Air",
        category: "Audio & Sound",
        price: 11999,
        rating: 4.5,
        reviews: 211,
        image:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800",
        description:
            "Lightweight wireless earbuds with ANC.",
    },

    {
        id: 12,
        name: "Ultra Tablet Pro",
        category: "Mobiles",
        price: 67999,
        rating: 4.8,
        reviews: 99,
        image:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800",
        description:
            "Tablet built for creativity and multitasking.",
    },
];

export default products;