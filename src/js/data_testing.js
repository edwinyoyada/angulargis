//var adiraData = [
//                    {
//                        "_id":ObjectId("56fde19acc5d96d7e29250a7"),
//                        name:"Asuransi Adira Dinamika Pusat",
//                        address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        phone:[{phone:"+6221 2966 7373"}],
//                        coord: { latitude:-6.2437119, longitude:106.8535933 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "yes",
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance_hq.png"
//                    },
//                    {
//                        name:"Asuransi Adira Dinamika Branch Office Jakarta Syariah",
//                        address:"Jl. Otto Iskandar Dinata No.115, Jakarta, Indonesia",
//                        phone:[{phone:"+6221 8591 2627"}],
//                        coord: { latitude:-6.2342482, longitude:106.8679086 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:2,
//                            name:"Jakarta Barat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Dinamika Branch Office Otista",
//                        address:"Jl. Otto Iskandar Dinata No.115, Jakarta, Indonesia",
//                        phone:[{phone:"+6221 8199777"}],
//                        coord: { latitude:-6.2342482, longitude:106.8679086 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:2,
//                            name:"Jakarta Barat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Dinamika Branch Office Sukabumi",
//                        address:" JL Jend A Yani, no 30,Kec. Sukabumi,43111 Indonesia",
//                        phone:[{phone:"+622778903777"}],
//                        coord: { latitude:-5.4219943, longitude:105.2563427 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:2,
//                            name:"Jakarta Barat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Dinamika Branch Office Banjarmasin",
//                        address:" Jl. Ahmad Yani Km 3.5 No. 134 Banjarmasin Indonesia",
//                        phone:[{phone:"+625117451234"}],
//                        coord: { latitude:-3.3217272, longitude:114.5983243 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:2,
//                            name:"Jakarta Barat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Dinamika Branch Office Manado",
//                        address:" Jl. Wolter Monginsidi, Komp. Bahu Mall Blok S 08 Malalayang Manado Indonesia",
//                        phone:[{phone:"+625117451234"}],
//                        coord: { latitude:1.462956, longitude:124.824242 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:2,
//                            name:"Jakarta Barat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Dinamika Branch Office Lampung",
//                        address:" Gedung Bank Danamon Ind Lt 2, Jl Patimura No 2-4, Telukbetung Lampung Indonesia",
//                        phone:[{phone:"+62721472824"}],
//                        coord: { latitude:-5.444300, longitude:105.266678},
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:2,
//                            name:"Jakarta Barat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Dinamika Branch Office Padang",
//                        address:" Komp. Bank Danamon Ind. Jl. Bunda Kauduang No 23 Padang Indonesia",
//                        phone:[{phone:"+62751840885"}],
//                        coord: { latitude:-0.953265, longitude:100.359484 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:2,
//                            name:"Jakarta Barat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Pontianak",
//                        address:" Jl. Budi Karya No.12 Pontianak Indonesia",
//                        phone:[{phone:"+62561767555"}],
//                        coord: { latitude:-0.041801, longitude:109.346562 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:2,
//                            name:"Jakarta Barat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Jambi",
//                        address:" Jl. Hayam Wuruk No.49-50 Jelutung Jambi Indonesia",
//                        phone:[{phone:"+627417078182"}],
//                        coord: { latitude:-1.612130, longitude:103.615319 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:2,
//                            name:"Jakarta Barat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Bogor",
//                        address:" Gd. Bank Danamon Lt.4 Jl. Ir. H. Juanda No.45 Bogor Indonesia",
//                        phone:[{phone:"+62251363920"}],
//                        coord: { latitude:-6.600490, longitude:106.794620 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Yogyakarta",
//                        address:" Pertokoan Permai Pogung Lor Blok 7 Jalan Ring Road Utara, Pogung Lor Yogyakarta Indonesia",
//                        phone:[{phone:"+62274554541"}],
//                        coord: { latitude:-7.753811, longitude:110.381691 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Solo",
//                        address:" Jl. Raya Solo Permai Blok JA No.7 Solo Indonesia",
//                        phone:[{phone:"+62271620006"}],
//                        coord: { latitude:-7.601879, longitude:110.813305 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Denpasar",
//                        address:" Jl. Gatot Subroto No.83/245 B Denpasar Bali Indonesia",
//                        phone:[{phone:"+62361230077"}],
//                        coord: { latitude:-8.635459, longitude:115.223823 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Palembang",
//                        address:" Jl. Veteran Blok F No.4 Palembang Indonesia",
//                        phone:[{phone:"+62711376177"}],
//                        coord: { latitude:-2.975385, longitude:104.760423 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Malang",
//                        address:" Jl. Letjen Sutoyo 123A Malang Indonesia",
//                        phone:[{phone:"+62341413456"}],
//                        coord: { latitude:-7.955393, longitude:112.638142 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Tangerang",
//                        address:" Jl.Raya Serpong KM.7 No.72 Tangerang Indonesia",
//                        phone:[{phone:"+622153125744"}],
//                        coord: { latitude:-6.324179, longitude:106.666730 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Jakarta II",
//                        address:" Jl.Sultan Iskandar Muda 8 D Jakarta Indonesia",
//                        phone:[{phone:"+62217392355"}],
//                        coord: { latitude:-6.244153, longitude:106.782800 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Balikpapan",
//                        address:" Ruko Bukit Damai Indah Blok I No.12 Balikpapan Indonesia",
//                        phone:[{phone:"+62542873400"}],
//                        coord: { latitude:-1.246678, longitude:116.871646 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Makassar",
//                        address:" Jl.Sultan Alauddin, Komp.Alauddin Plaza BA 21-22 Makassar 90221 Indonesia",
//                        phone:[{phone:"+624118224000"}],
//                        coord: { latitude:-5.179094, longitude:119.440234 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Semarang",
//                        address:" Jl.Pemuda No.175 Semarang Indonesia",
//                        phone:[{phone:"+62243545151"}],
//                        coord: { latitude:-6.981576, longitude:110.411324 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Pekanbaru",
//                        address:" Jl. Jendral Sudirman No.121 Pekanbaru Indonesia",
//                        phone:[{phone:"+62761859456"}],
//                        coord: { latitude:0.532906, longitude:101.447972 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Medan",
//                        address:" Jl.H.Adam Malik No.20 D Medan Indonesia",
//                        phone:[{phone:"+62614153456"}],
//                        coord: { latitude:3.595830, longitude:98.669148 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Medan",
//                        address:" Jalan Jemursari No. 78 Surabaya Indonesia",
//                        phone:[{phone:"+62318414666"}],
//                        coord: { latitude:-7.323672, longitude:112.741481 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Bandung",
//                        address:" Jl.BKR No.14A Bandung Indonesia",
//                        phone:[{phone:"+62227322975"}],
//                        coord: { latitude:-6.937330, longitude:107.621619 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    },
//                    {
//                        name:"Asuransi Adira Branch Office Jakarta",
//                        address:" Perk Artha Gading C-02 Jl. Boulevard Artha Gading Jakarta Indonesia",
//                        phone:[{phone:"+62214532007 ext 101"}],
//                        coord: { latitude:-6.145825, longitude:106.894628 },
//                        asset_size: 10,
//                        sales_size: 20,
//                        third_party_funds: 20,
//                        is_hq: "no",
//                        hq_id:ObjectId("56fde19acc5d96d7e29250a7"),
//                        website:"http://www.asuransiadira.com",
//                        financial_statement:"http://www.asuransiadira.com/ikhtisar",
//                        hq_address:"Graha Adira, Jl MT. Haryono Kav. 42, Jakarta, Indonesia",
//                        general_organization_id:ObjectId("5700a830ef2e2fd4201a7091"),
//                        organization_type_id:ObjectId("56fcd7d2cc5d96d7e29250a4"),
//                        province:{
//                            _id:1,
//                            name:"DKI Jakarta"
//                        },
//                        city:{
//                            _id:1,
//                            name:"Jakarta Pusat"
//                        },
//                        type_id:ObjectId("56fcc7e372797c2e270d2088"),
//                        sub_type_id:ObjectId("56fcc7e372797c2e270d2089"),
//                        conventional_type_id:ObjectId("56fcdb45cc5d96d7e29250a5"),
//                        logo_image:"src/image/logo/logo_adira.png",
//                        marker_image:"src/image/icon/insurance.png"
//                    }
//                ]
//
//var allianzeData;
//allianzeData = [
//        {
//            _id : ObjectId("5702a83a711f2e5e418af3cb"),
//            name:'Alianz Independent Sales Office',
//            address:'Allianz Tower, Jl. HR Rasuna Said, Kawasan Kuningan Persada, Super Blok 2, Jakarta',
//            phone:[{phone:'021 29079651'},{phone:'021 29079650'}],
//            coord:{latitude:-6.209769,longitude:106.831354},
//            is_hq:'yes',
//            website:'http://www.allianz.co.id',
//            general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),
//            organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),
//            province:{
//                _id:1,
//                name:'DKI Jakarta'
//            },
//            city:{
//                _id:1,
//                name:'Jakarta Pusat'
//            },
//            type_id:ObjectId('56fcc7e372797c2e270d2088'),
//            sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),
//            conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),
//            logo_image:'src/image/logo/logo_allianz.png',
//            marker_image:'src/image/icon/insurance_hq.png'
//        },
//
//    {name:'Alianz Life Customer Service Point',address:'Kompleks Ruko A. Yani Mega, Mall Blok G No. 18, Jl. A. Yani 1, Pontianak 78121',phone:[{phone:'0561 767087 (CS)'},{phone:'0561 761167 (Agency)'}],coord:{latitude:-0.038176,longitude:109.336462},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//    marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Hotel Bintang Sintuk, Komp. Kawasan Lap. Golf, PT PKT, Bontang Utara, Bontang',phone:[{phone:'0548 20317'},{phone:'0548 20317'}],coord:{latitude:0.1588004,longitude:117.475516},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Poros KM 1. (depan Stadion Aji Imbut). Kec. Tenggarong Seberang. Tenggarong, Samarinda. 75515',phone:[{phone:'0541 662481'},{phone:'0541 662481'}],coord:{latitude:-0.3568874,longitude:117.109492},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Yos Sudarso II, Thomas Square Blok C No. 3, Kutai Timur, Sangatta 75611',phone:[{phone:'0813 5005 9840'},{phone:''}],coord:{latitude:0.3611437,longitude:117.537472},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Marketing Office',address:'Komplek Taman Malibu, Blok D No. 2, Jl. Soekarno Hatta, Pekanbaru, Riau',phone:[{phone:''},{phone:''}],coord:{latitude:0.45919,longitude:101.418056},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Customer Service Point',address:'Jl. A. Yani No. 2A, (samping Istana Foto), Samarinda, Kalimantan Timur',phone:[{phone:'0541 733956'},{phone:'0541 743129'}],coord:{latitude:-0.4724919,longitude:117.166388},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. AM Sangaji No. 38C. Kel. Temindung, Samarinda',phone:[{phone:'0543 747747'},{phone:''}],coord:{latitude:-0.487255,longitude:117.153027},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Kartini No. 44. Tanah Grogot Paser. Samarinda 76211. ',phone:[{phone:'0543 23998'},{phone:'0543 23998'}],coord:{latitude:-0.494187,longitude:117.156902},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Ruko Pondok Alam Indah, No. 10, Jl. AW Syahrani RT 24, Samarinda',phone:[{phone:'0541 765800'},{phone:'0541 743129'}],coord:{latitude:-0.4991831,longitude:117.144653},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Oasis Hotel Ruang 1, Jl. H. Agus Salim No. 29, Gorontalo',phone:[{phone:'0435 823157'},{phone:'0435 831235'}],coord:{latitude:0.559757,longitude:123.048481},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. DI Panjaitan No. 66, MB Hulu MB Ketapang, Kotawaringin Timur 74323, Sidoarjo, Ruko Gading Fajar 2 Blok B6/9, RT 40 RW 10, Sidoarjo 61271',phone:[{phone:'031 8941975'},{phone:'031 8941975'}],coord:{latitude:0.917062,longitude:104.484671},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//{name:'Alianz Life Customer Service Point',address:'Ruko Palem Regency Blok A1, No. 3-4, Batam Center, Batam 29432',phone:[{phone:'0778 5138331 (CS)'},{phone:'0778 472566 (Agency)'}],coord:{latitude:1.1060165,longitude:104.026582},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//{name:'Alianz Independent Sales Office',address:'Komp. Mahkota Raya, Blok B No. 8, Batam Center, Batam 29432',phone:[{phone:'0778 7483388'},{phone:'0778 7483287'}],coord:{latitude:1.128874,longitude:104.035954},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Customer Service Point',address:'Gedung Grand Sudirman Lt. 12, Jl. Jenderal Sudirman No. 07, Balikpapan 76113',phone:[{phone:'0542 7219798 (CS)'},{phone:'0542 8066029 (Agency)'}],coord:{latitude:-1.277302,longitude:116.840480},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//{name:'Alianz Life Marketing Office',address:'Jl. Pierre Tendean Boulevard, Komp. Ruko Mega Bright, Blok 1E No. 10, Manado, Sulawesi Utara',phone:[{phone:'0431 8881158, 1300'},{phone:'0431 8881197'}],coord:{latitude:1.4911295,longitude:124.838631},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Customer Service Point',address:'Jl. Veteran No. 15, Kupang',phone:[{phone:'0380 828892 (CS)'},{phone:'0380 828891 (Agency)'}],coord:{latitude:-10.157226,longitude:123.612108},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Teuku Umar RT 09, Kel. Karang Ambun, Tanjung Redeb, Berau 77311',phone:[{phone:'0554 2701312'},{phone:''}],coord:{latitude:2.1444013,longitude:117.497296},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Komp. Ruko Bangka Trade, Center, Jl. Letkol Rusli Romli Blok A, No. 13, Pangkalpinang Bangka 33117',phone:[{phone:'0717 432499'},{phone:''}],coord:{latitude:-2.529267,longitude:106.695433},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Kompleks THM Blok E No. 2, Kel. Karangbalik,, Kec. Tarakan Barat, Tarakan 77134',phone:[{phone:'0551 51898'},{phone:'0551 51898'}],coord:{latitude:3.3006345,longitude:117.633513},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. A. Yani KM 2 No. 5 RT 17, Kel. Sungai Baru, Banjarmasin',phone:[{phone:'0511 3251999'},{phone:'0511 3250799'}],coord:{latitude:-3.323075,longitude:114.599190},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Pangeran Samudra No. 16, Banjarmasin 70111',phone:[{phone:'0511 3358278'},{phone:'0511 4363244'}],coord:{latitude:-3.324413,longitude:114.591766},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Center',address:'Sinarmas Land Plaza, Lt. 8, Jl. Diponegoro No. 18, Medan 20152, ',phone:[{phone:'061 4510062, 15'},{phone:'061 4510063'}],coord:{latitude:3.583343,longitude:98.6725},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Orion No. 59, Petisah Tengah, Medan Petisah, Medan',phone:[{phone:'061 4575125'},{phone:'061 4538485'}],coord:{latitude:3.589841,longitude:98.663218},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Bilal No. 12A, Kel. Pulo Brayan Barat I, Kec. Medan Timur, Medan 20239',phone:[{phone:'061 6642987'},{phone:'061 6643115'}],coord:{latitude:3.622714,longitude:98.683976},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Ambon, Jl. Anthony Rhebook No. 17, Ambon',phone:[{phone:'0911 354010'},{phone:'0911 354020'}],coord:{latitude:-3.655851,longitude:128.167684},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Diponegoro No.160 D-E, Tanjung Karang Pusat, Bandar Lampung',phone:[{phone:'0721 258283'},{phone:'0721 259033'}],coord:{latitude:-5.433577,longitude:105.262221},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//{name:'Alianz Independent Sales Office',address:'Jl. Merdeka No. 49, Seruni Business Area, Lt. 2, Bandung',phone:[{phone:'022 71140738'},{phone:''}],coord:{latitude:-5.442561,longitude:105.265907},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//
//
//{name:'Alianz Life Customer Service Point',address:'Jl. Sungai Saddang Lama No., 23 B (Depan RS Elim), Makassar',phone:[{phone:'0411 3639386 (CS)'},{phone:'0411 3612462 (Agency)'}],coord:{latitude:-5.4727621,longitude:119.491231},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//{name:'Alianz Independent Sales Office',address:'Apt. Tower Podomoro City, Agung Podomoro Land, Tower Low Zone OT/II/T1, Jl. Letjen S. Parman Kav. 28, Jakarta',phone:[{phone:'021 29339473'},{phone:''}],coord:{latitude:-6.1906379,longitude:106.7909133},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//    {name:'Alianz Independent Sales Office',address:'Menara Kuningan Lt. 11 C-D, Jl. HR. Sasuna Said Kav. 5, Jakarta 12940',phone:[{phone:'021 30040101'},{phone:'021 30040102'}],coord:{latitude:-6.218345,longitude:106.830576},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//    marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Graha Mustika Ratu Lt. 5, Jl. Gatot Subroto Kav 74 -75, Jakarta',phone:[{phone:'021 8306530'},{phone:'021 8306540'}],coord:{latitude:-6.242034,longitude:106.841995},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Ruko Arcadia Blok D No. 10, Jl. Galuh Mas Raya, Karawang',phone:[{phone:''},{phone:''}],coord:{latitude:-6.3234143,longitude:107.292209},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Mr. Dr. Kusumaatmaja No. 5, Purwakarta',phone:[{phone:'0264 201257'},{phone:'0264 201257'}],coord:{latitude:-6.5358113,longitude:107.483567},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Raya Pajajaran No. 96F, RT 02/03 Kel. Bantarjati, Kec. Bogor Utara 16153',phone:[{phone:'0251 8344842, 43'},{phone:'0251 8356572'}],coord:{latitude:-6.580606,longitude:106.806743},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Customer Service Point',address:'Gedung Ditta Lt. 2, Jl. Raya Pajajaran No. 29, Bogor 16143',phone:[{phone:'0251 8345365, 66'},{phone:'0251 8345364'}],coord:{latitude:-6.606986,longitude:106.809309},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Gedung TSB Lt. II Blok B1, Jl. Tuparev No. 83, Cirebon',phone:[{phone:'0231 222059'},{phone:'0231 222059'}],coord:{latitude:-6.710702,longitude:108.541261},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Marketing Office',address:'Ruko Pemuda Estate Blok B, No. 3, Jl. Pemuda, Cirebon',phone:[{phone:'0231 210661, 211064'},{phone:'0231 204791'}],coord:{latitude:-6.730568,longitude:108.540961},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Kutamaya Center Ruko D, Kec. Sumedang Selatan 45312',phone:[{phone:'0261 202218'},{phone:'0261 202218'}],coord:{latitude:-6.852414,longitude:107.920869},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Surapati Core Blok M 29, Jl. PHH Mustofa No. 39 (Suci), Bandung 40192, ',phone:[{phone:'022 72597272'},{phone:''}],coord:{latitude:-6.898273,longitude:107.637157},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Lombok No. 10, Bandung 40113',phone:[{phone:'022 4211204'},{phone:'022 4211204'}],coord:{latitude:-6.907720,longitude:107.619189},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Ruko Paskal Hypersquare, Blok A 38, Jl. Pasir Kaliki, Bandung 40192',phone:[{phone:'022 86060621'},{phone:'022 86061008'}],coord:{latitude:-6.914834,longitude:107.597774},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Center',address:'Wisma CIMB Niaga Lt. 7, Jl. Gatot Subroto No. 2, Simpang Lima, Bandung 40262',phone:[{phone:'022 7331888'},{phone:'022 7331889'}],coord:{latitude:-6.925905,longitude:107.633357},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Customer Service Point',address:'Mal Ciputra Ruko 12A, Semarang 50134',phone:[{phone:'024 8450294 (CS)'},{phone:'024 8415639 (Agency)'}],coord:{latitude:-6.990517,longitude:110.423391},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Center',address:'Gedung Graha Pacific Lt. 1, Jl. Basuki Rahmad 87 - 91, Surabaya',phone:[{phone:'031 5357997'},{phone:'031 5474848'}],coord:{latitude:-7.271461,longitude:112.741847},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//{name:'Alianz Life Marketing Office',address:'Ruko Tasik Indah Plaza N 37, Jl. Raya HZ Mustofa No. 345, Tasikmalaya',phone:[{phone:'0265 344837'},{phone:'0265 344837'}],coord:{latitude:-7.331796,longitude:108.219312},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Pemuda No. 13, Salatiga',phone:[{phone:'0298 329460'},{phone:'0298 326180'}],coord:{latitude:-7.3373895,longitude:10.5015935},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Marketing Office',address:'Kompleks Ruko Purwokerto, Utara, City Walk No. B-11, Jl. HR Bunyamin, Purwokerto Utara, Banyumas',phone:[{phone:'0281 628876'},{phone:'0281 635734'}],coord:{latitude:-7.431388,longitude:109.247828},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Slamet Riyadi No. 341, Solo 57141',phone:[{phone:'0271 725336'},{phone:'0271 724577'}],coord:{latitude:-7.561642,longitude:110.75559},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Marketing Office',address:'Jl. Honggowongso No. 99B, RT 05 RW 02, Kel. Sriwedari, Kec. Laweyan, Surakarta, Solo',phone:[{phone:'0271 718069'},{phone:'0271 742593'}],coord:{latitude:-7.5746277,longitude:110.816010},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Customer Service Point',address:'Jl. Honggowongso No. 99 B, Solo 57141',phone:[{phone:'0271 724949'},{phone:''}],coord:{latitude:-7.577321,longitude:110.815391},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Ruko Baru, Jl. Brigjen Katamso No. 2, Kec. Mayangan, Probolinggo 67217',phone:[{phone:'0335 425637'},{phone:'0335 425638'}],coord:{latitude:-7.746713,longitude:113.219390},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Kenari No. 53, Miliran, Mujamuju, Yogyakarta',phone:[{phone:'0274 520645'},{phone:'0274 520645'}],coord:{latitude:-7.797987,longitude:110.387137},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Customer Service Point',address:'Jl. S. Priyo Sudarmo No. 60, Malang 65122',phone:[{phone:'0341 470236 (CS)'},{phone:'0341 476108 (Agency)'}],coord:{latitude:-7.957708,longitude:112.643585},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Marketing Office',address:'Jl. Letjend Sutoyo No. 37A, Malang',phone:[{phone:'0341 474730'},{phone:'0341 4851662'}],coord:{latitude:-7.963055,longitude:112.636009},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Jaksa Agung Suprapto, No. 64, Kav. 3 RT 1 RW 4, Kel. Rampal, Kec. Klojen, Malang 65111',phone:[{phone:'0341 351997'},{phone:'0341 351998'}],coord:{latitude:-7.965295,longitude:112.634698},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Customer Service Point',address:'Jl. KH. Ahmad Sidiq No. 83-85, Jember',phone:[{phone:'0331 481940'},{phone:'0331 5460036'}],coord:{latitude:-8.180038,longitude:113.692595},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//{name:'Alianz Independent Sales Office',address:'Ruko Griya Permata Indah, Jl. Kepiting No. 10 RT 02, RW 02, Kel. Sobo Banyuwangi 68416',phone:[{phone:'0333 416811'},{phone:'0333 410292'}],coord:{latitude:-8.232617,longitude:114.364404},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Majapahit (PERUM), Graha Permata Sejahtera, Blok D, Tabanan, Bali',phone:[{phone:'0361 814381'},{phone:'0362 24667'}],coord:{latitude:-8.5524503,longitude:114.942842},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Customer Service Point',address:'Jl. Selaparang No. 67 BC, Cakranegara, Mataram 83235',phone:[{phone:'0370 624137 (CS)'},{phone:'0370 627095 (Agency)'}],coord:{latitude:-8.587577,longitude:116.137221},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Pertokoan IDT, Genteng Biru Blok A No.13, Jl. Diponegoro No. 15, Denpasar, Bali',phone:[{phone:'0361 239301'},{phone:'0361 255933'}],coord:{latitude:-8.6566796,longitude:115.211743},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//{name:'Alianz Independent Sales Office',address:'Jl. Tantular Barat No. 11X, Renon, Denpasar, Bali 80234',phone:[{phone:'0361 234981'},{phone:'0361 234671'}],coord:{latitude:-8.671044,longitude:115.228175},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Life Center',address:'JEFF Building, Jl Raya Puputan No. 488, Denpasar 80226',phone:[{phone:'0361 239 788'},{phone:'0361 226223,32'}],coord:{latitude:-8.673831,longitude:115.248769},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Imam Bonjol Square AA23, Jl. Imam Bonjol 555, Pertokoan, Denpasar, Bali 80117',phone:[{phone:'0361 8617710, 8747311,'},{phone:'486825'}],coord:{latitude:-8.678163,longitude:115.198944},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Pertokoan Kuta Galleria, Blok PM 1 No. 23A, Jl. Patih Jelatik, Kuta, Bali 80361',phone:[{phone:'0361 769368'},{phone:'0361 769368'}],coord:{latitude:-8.709704,longitude:115.176800},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//{name:'Alianz Independent Sales Office',address:'Jl. Raya Tuban No. 101 X, Kuta, Denpasar, Bali 80361',phone:[{phone:'0361 756577'},{phone:'0361 756555'}],coord:{latitude:-8.741306,longitude:115.178989},is_hq:'no',website:'http://www.allianz.co.id',hq_id : ObjectId('5702a83a711f2e5e418af3cb'),general_organization_id:ObjectId('5700a830ef2e2fd4201a7094'),organization_type_id:ObjectId('56fcd7d2cc5d96d7e29250a4'),province:{_id:1,name:'DKI Jakarta'},city:{_id:1,name:'Jakarta Pusat'},type_id:ObjectId('56fcc7e372797c2e270d2088'),sub_type_id:ObjectId('56fcc7e372797c2e270d2089'),conventional_type_id:ObjectId('56fcdb45cc5d96d7e29250a5'),logo_image:'src/image/logo/logo_allianz.png',
//marker_image:'src/image/icon/insurance.png'}
//
//
//
//
//];