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
                    name: "Orange",
                    file: "background/orange_bg.png",
                    weight: 1
                },
                {
                    name: "Green",
                    file: "background/wooden_bg.png",
                    weight: 1
                },
                {
                    name: "Green",
                    file: "background/heart_bg.png",
                    weight: 1
                },
            ]
        },

        {
            name: "Body",
            probability: 1.0,
            options: [
//                 {
//                     name:"BodyTest",
//                     file:"body/body.png",
//                     weight:1
//                 },
//                 {
//                     name:"BodyTest",
//                     file:"body/bag.png",
//                     weight:1
//                 },
// /*                 {
//                     name:"BodyTest",
//                     file:"body/ganster.png",
//                     weight:1
//                 }, */
//                 {
//                     name:"BodyTest",
//                     file:"body/hoodie1.png",
//                     weight:1
//                 },
//                 {
//                     name:"BodyTest",
//                     file:"body/hoodie2.png",
//                     weight:1
//                 },
//                 {
//                     name:"BodyTest",
//                     file:"body/hoodie3.png",
//                     weight:1
//                 },
//                 {
//                     name:"BodyTest",
//                     file:"body/hoodie4.png",
//                     weight:1
//                 },
//    /*              {
//                     name:"BodyTest",
//                     file:"body/hoodie5.png",
//                     weight:1
//                 }, */
//                 {
//                     name:"BodyTest",
//                     file:"body/meditatiton.png",
//                     weight:1
//                 },
//                 {
//                     name:"BodyTest",
//                     file:"body/money.png",
//                     weight:1
//                 },
//                 {
//                     name:"BodyTest",
//                     file:"body/money2.png",
//                     weight:1
//                 },
//    /*              {
//                     name:"BodyTest",
//                     file:"body/money3.png",
//                     weight:1
//                 }, */
//                 {
//                     name:"BodyTest",
//                     file:"body/money4.png",
//                     weight:1
//                 },
//                 {
//                     name:"BodyTest",
//                     file:"body/money5.png",
//                     weight:1
//                 },
//                 {
//                     name:"BodyTest",
//                     file:"body/money6.png",
//                     weight:1
//                 },
//     /*             {
//                     name:"BodyTest",
//                     file:"body/money7.png",
//                     weight:1
//                 }, */
//                 {
//                     name:"BodyTest",
//                     file:"body/money8.png",
//                     weight:1
//                 },
//                 {
//                     name:"BodyTest",
//                     file:"body/money9.png",
//                     weight:1
//                 },
// /*                 {
//                     name:"BodyTest",
//                     file:"body/skeleton.png",
//                     weight:1
//                 }, */
//                 {
//                     name:"BodyTest",
//                     file:"body/typ1.png",
//                     weight:1
//                 },

/* <--------------------------------------------------------------> IN TESTING <------------------------------------------------------------------>*/


                {
                    name:"BodyTest",
                    file:"body/new/armor.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/armor2.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/armor3.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/artist.png",
                    weight:1
                },
/*                 {
                    name:"BodyTest",
                    file:"body/new/assassin.png",
                    weight:1
                }, */
                {
                    name:"BodyTest",
                    file:"body/new/astronaut.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/beekeeper.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/bodybuilder.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/bodybuilder2.png",
                    weight:1
                },
/*                 {
                    name:"BodyTest",
                    file:"body/new/convict.png",
                    weight:1
                }, */
                {
                    name:"BodyTest",
                    file:"body/new/doctor1.png",
                    weight:1
                },
/*                 {
                    name:"BodyTest",
                    file:"body/new/doctor2.png",
                    weight:1
                }, */
                {
                    name:"BodyTest",
                    file:"body/new/doctor3.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/firefighter.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/football.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/football2.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/pimp.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/rapper.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/soldier.png",
                    weight:1
                },
/*                 {
                    name:"BodyTest",
                    file:"body/new/soldier2.png",
                    weight:1
                }, */
                {
                    name:"BodyTest",
                    file:"body/new/suit.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/suit2.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/suit3.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/suit4.png",
                    weight:1
                },
                {
                    name:"BodyTest",
                    file:"body/new/suit5.png",
                    weight:1
                },

                
            ]
        },
        {
            name: "Head",
            probability: 1.0,
            options: [
                {
                    name: "Albino",
                    file: "head/standard_mask.png",
                    weight: 1
                },
/*                 {
                    name: "Light",
                    file: "head/head_bee.png",
                    weight: 1
                },
                {
                    name: "Mid",
                    file: "head/head_heart.png",
                    weight: 1
                },
                {
                    name: "Skeleton",
                    file: "head/head_trippy.png",
                    weight: 1
                },
                {
                    name: "Zombie",
                    file: "head/head_vintage.png",
                    weight: 1
                },
                {
                    name: "Wall",
                    file: "head/head_wall.png",
                    weight: 1
                }, 
                {
                    name: "Weed",
                    file: "head/head_weed.png",
                    weight: 0.2
                },*/

            ]
        },
        {
            name: "Cheeks",
            probability: 1,
            options: [
                {
                    name: "Standard",
                    file: "cheeks/cheekz.png",
                    weight: 1
                },
/*                 {
                    name:"BodyTest",
                    file:"body/lion_body.png",
                    weight:1
                }, */
  /*               {
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
                }, */
            ]
        },

        {
            name: "Nose",
            probability: 0.01,
            options: [
                {
                    name: "Flames",
                    file: "nose/nose0.png",
                    weight: 0.2
                },
/*                 {
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
                }, */
            ]
        },
        {
            name: "Top",
            probability: 1,
            options: [
                {
                    name: "Cap",
                    file: "top/hair0.png",
                    weight: 1
                },
                {
                    name: "Cowboy",
                    file: "top/basque_pink.png",
                    weight: 0.5
                },
                {
                    name: "Einstein",
                    file: "top/brown_hat.png",
                    weight: 0.1
                },
                {
                    name: "Fez",
                    file: "top/green_cap.png",
                    weight: 0.2
                },
                {
                    name: "Like A Sir",
                    file: "top/grey_hat.png",
                    weight: 0.3
                },
                {
                    name: "Cap",
                    file: "top/hair_curly.png",
                    weight: 1
                },
                {
                    name: "Cowboy",
                    file: "top/hair_pink_zopf.png",
                    weight: 0.5
                },
                {
                    name: "Einstein",
                    file: "top/hat_green.png",
                    weight: 0.1
                },
                {
                    name: "Fez",
                    file: "top/hat_green2.png",
                    weight: 0.2
                },
                {
                    name: "Like A Sir",
                    file: "top/hiar_blue_long.png",
                    weight: 0.3
                },
                {
                    name: "Einstein",
                    file: "top/schleife.png",
                    weight: 0.1
                },
                {
                    name: "Fez",
                    file: "top/winter_head.png",
                    weight: 0.2
                },
/*                 {
                    name: "Like A Sir",
                    file: "top/zylinder_blank.png",
                    weight: 0.3
                }, */

                /* -----------------------------------------------------TEST------------------------------------------------------------------------ */
              /*   {
                    name: "Cap",
                    file: "top/new/cook.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/google.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/headset.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/headset1.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/headset2.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/headset3.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/headset4.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/helmet.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/helmet2.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/helmet3.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/helmet4.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/helmet5.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/mafia.png",
                    weight: 1
                },
                {
                    name: "Cap",
                    file: "top/new/mafia2.png",
                    weight: 1
                }, */

            ]
        },
        {
            name: "Facial Hair",
            probability: 1,
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
/*                 {
                    name: "Mutton",
                    file: "facial-hair/beard3.png",
                    weight: 1
                }, */
                {
                    name: "Chops",
                    file: "facial-hair/beard4.png",
                    weight: 1
                },

            ]
        },
        {
            name: "Eyes",
            probability: 1,
            options: [
                {
                    name: "3D",
                    file: "eyes/vendetta_eyes.png",
                    weight: 1
                },
/*                 {
                    name: "3D",
                    file: "eyes/new/neweyes.png",
                    weight: 1
                }, */


              /*   {
                    name: "Long Beard",
                    file: "eyes/vendetta_eyes1.png",
                    weight: 0.25
                },
                {
                    name: "Square Shades",
                    file: "eyes/vendetta_eyes2.png",
                    weight: 1
                },
                {
                    name: "3D",
                    file: "eyes/vendetta_eyes3.png",
                    weight: 1
                },
                {
                    name: "Long Beard",
                    file: "eyes/vendetta_eyes4.png",
                    weight: 0.25
                },
                {
                    name: "Square Shades",
                    file: "eyes/vendetta_eyes5.png",
                    weight: 1
                },
                {
                    name: "3D",
                    file: "eyes/vendetta_eyes6.png",
                    weight: 1
                },
                {
                    name: "Long Beard",
                    file: "eyes/vendetta_eyes7.png",
                    weight: 0.25
                },
                {
                    name: "Square Shades",
                    file: "eyes/vendetta_eyes8.png",
                    weight: 1
                },
                {
                    name: "3D",
                    file: "eyes/vendetta_eyes9.png",
                    weight: 1
                },
                {
                    name: "Long Beard",
                    file: "eyes/vendetta_eyes10.png",
                    weight: 0.25
                },
                {
                    name: "Square Shades",
                    file: "eyes/vendetta_eyes11.png",
                    weight: 1
                },
                {
                    name: "3D",
                    file: "eyes/vendetta_eyes12.png",
                    weight: 1
                },
                {
                    name: "Long Beard",
                    file: "eyes/vendetta_eyes13.png",
                    weight: 0.25
                },
                {
                    name: "Square Shades",
                    file: "eyes/vendetta_eyes14.png",
                    weight: 1
                }, 
                {
                    name: "3D",
                    file: "eyes/vendetta_eyes15.png",
                    weight: 1
                },
                {
                    name: "Long Beard",
                    file: "eyes/vendetta_eyes16.png",
                    weight: 0.25
                },
                {
                    name: "Square Shades",
                    file: "eyes/vendetta_eyes17.png",
                    weight: 1
                },  */


/*                 {
                    name: "Square Shades",
                    file: "eyes/vr1.png",
                    weight: 1
                }, 
                {
                    name: "Square Shades",
                    file: "eyes/vr2.png",
                    weight: 1
                }, 
                {
                    name: "Square Shades",
                    file: "eyes/vr3.png",
                    weight: 1
                },  */
            ]
        },

        {
            name:"InnerEyes",
            probability:1,
            options:[
                {
                               
                    name: "3D",
                    file: "eyes/new/neweyes.png",
                    weight: 1
                
                 },

                {
                                
                    name: "3D",
                    file: "eyes/new/innerEyesMoon.png",
                    weight: 1
                
                },

                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (3).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (4).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (5).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (6).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (7).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (8).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (9).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (10).png",
                    weight: 1
                
                },
/*                 {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (11).png",
                    weight: 1
                
                }, */
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (12).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (13).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (14).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (15).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (16).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (17).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (18).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (19).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (20).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (21).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (22).png",
                    weight: 1
                
                },
                {
                                
                    name: "3D",
                    file: "eyes/new/Copy of FirstVendetta (23).png",
                    weight: 1
                
                },

        ]
        },


/*         {
            name: "EyesOutside",
            probability: 1.0,
            options: [
                {
                    name: "Flames",
                    file: "eyes_outside/eyes_outside.png",
                    weight: 1
                },
                {
                    name: "Black",
                    file: "eyes_outside/eyesoutside_black.png",
                    weight: 1
                },
            ]
        }, */


        {
            name: "Eyebrows",
            probability: 1,
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
            
        },
  
    ]
}