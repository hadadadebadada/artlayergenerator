module.exports = {
    metadataTemplate: (tokenId, attributes) => ({
        image: '<%IMAGE_URL%>',
        name: `NFT #${tokenId}`,
        external_url: 'https://www.kie.codes/',
        description: 'Please subscribe!',
        attributes: attributes,
    }),
    layers: [
        {
            name: "Background",
            probability: 1.0,
            options: [
                {
                    name: "Blue",
                    file: "background/blue.png",
                    weight: 1
                },
                {
                    name: "Green",
                    file: "background/green.png",
                    weight: 1
                },
                {
                    name: "Orange",
                    file: "background/orange.png",
                    weight: 1
                },
                {
                    name: "Wheat",
                    file: "background/wheat.png",
                    weight: 1
                }
            ]
        },
        {
            name: "Head",
            probability: 1.0,
            options: [
                {
                    name: "Albino",
                    file: "head/head0.png",
                    weight: 1
                },
              /*   {
                    name: "Light",
                    file: "head/light.png",
                    weight: 1
                },
                {
                    name: "Mid",
                    file: "head/mid.png",
                    weight: 1
                },l
                {
                    name: "Skeleton",
                    file: "head/skeleton.png",
                    weight: 0.1
                },
                {
                    name: "Zombie",
                    file: "head/zombie.png",
                    weight: 0.1
                } */
            ]
        },
/*         {
            name: "Shirt",
            probability: 1.0,
            options: [
                {
                    name: "Flames",
                    file: "shirt/flames.png",
                    weight: 0.2
                },
                {
                    name: "Pinata",
                    file: "shirt/pinata.png",
                    weight: 0.4
                },
                {
                    name: "Purple Blue Pink",
                    file: "shirt/purple-blue-pink.png",
                    weight: 1
                },
                {
                    name: "Stripes Blue White",
                    file: "shirt/stripes-blue-white.png",
                    weight: 1
                },
            ]
        }, */

        {
            name: "Nose",
            probability: 1.0,
            options: [
                {
                    name: "Flames",
                    file: "nose/nose0.png",
                    weight: 0.2
                },
                {
                    name: "Pinata",
                    file: "nose/nose1.png",
                    weight: 0.4
                },
                {
                    name: "Purple Blue Pink",
                    file: "nose/nose2.png",
                    weight: 1
                },
                {
                    name: "Stripes White",
                    file: "nose/nose3.png",
                    weight: 1
                },
                {
                    name: "Stripes Blue White",
                    file: "nose/nose4.png",
                    weight: 1
                },
                {
                    name: "Blue White",
                    file: "nose/nose5.png",
                    weight: 1
                },
            ]
        },
        {
            name: "Top",
            probability: 0.5,
            options: [
                {
                    name: "Cap",
                    file: "top/hair0.png",
                    weight: 1
                },
/*                 {
                    name: "Cowboy",
                    file: "top/cowboy.png",
                    weight: 0.5
                },
                {
                    name: "Einstein",
                    file: "top/einstein.png",
                    weight: 0.1
                },
                {
                    name: "Fez",
                    file: "top/fez.png",
                    weight: 0.2
                },
                {
                    name: "Like A Sir",
                    file: "top/like-a-sir.png",
                    weight: 0.3
                }, */
            ]
        },
        {
            name: "Facial Hair",
            probability: 0.5,
            options: [
                {
                    name: "Goatee",
                    file: "facial-hair/beard0.png",
                    weight: 1
                },
                {
                    name: "Long Beard",
                    file: "facial-hair/beard1.png",
                    weight: 1
                },
                {
                    name: "Mutton Chops",
                    file: "facial-hair/beard2.png",
                    weight: 1
                },
                {
                    name: "Mutton",
                    file: "facial-hair/beard3.png",
                    weight: 1
                },
                {
                    name: "Chops",
                    file: "facial-hair/beard4.png",
                    weight: 1
                },
            ]
        },
/*         {
            name: "Eyes",
            probability: 0.25,
            options: [
                {
                    name: "3D",
                    file: "eyes/3d.png",
                    weight: 1
                },
                {
                    name: "Long Beard",
                    file: "eyes/laser.png",
                    weight: 0.25
                },
                {
                    name: "Square Shades",
                    file: "eyes/square-shades.png",
                    weight: 1
                },
            ]
        } */

        {
            name: "Eyebrows",
            probability: 0.25,
            options: [
                {
                    name: "3D",
                    file: "eyebrows/eyebrows0.png",
                    weight: 1
                },
                {
                    name: "Long Beard",
                    file: "eyebrows/eyebrows1.png",
                    weight: 0.25
                },
                {
                    name: "Square Shades",
                    file: "eyebrows/eyebrows2.png",
                    weight: 1
                },
                {
                    name: "Square",
                    file: "eyebrows/eyebrows3.png",
                    weight: 1
                },
            ]
        }
    ]
}