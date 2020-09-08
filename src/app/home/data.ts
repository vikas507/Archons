export const sampleSales = [
    {
        UniqueID: 1,
        Customer: 'Petronas',
        ProjectName: 'RAPID',
        ProductsPurchased: 'SPF,J5,S3D,SDV',
        InitialStartDate: new Date(2018, 8, 20),
        LastRenewDate: new Date(2018, 8, 20),
        AMCRenewDate: new Date(2019, 8, 20),
        Location: 'South',
        AMCCharge: 150,
        CusPointOfContact: {
            Name: 'PertronasPOC1',
            Email: 'PertronasPOC1@petronas.com'
        },
        PO: 1,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: true,
        status: 'Active'
    },
    {
        UniqueID: 2,
        Customer: 'ADNOC',
        ProjectName: 'ADNOC Phase2',
        ProductsPurchased: 'SPF,S3D,SPI,SPEL,SPPID',
        InitialStartDate: new Date(2018, 10, 20),
        LastRenewDate: new Date(2018, 10, 20),
        AMCRenewDate: new Date(2019, 10, 20),
        Location: 'North',
        AMCCharge: 250,
        CusPointOfContact: {
            Name: 'ASNOCPOC1',
            Email: 'ASNOCPOC1@adnoc.com'
        },
        PO: 2,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'InActive'
    },
    {
        UniqueID: 3,
        Customer: 'BHP',
        ProjectName: 'BHP-WAIO SPF',
        ProductsPurchased: 'SPF,Ecosys',
        InitialStartDate: new Date(2019, 8, 20),
        LastRenewDate: new Date(2019, 8, 20),
        AMCRenewDate: new Date(2020, 8, 20),
        Location: 'East',
        AMCCharge: 145,
        CusPointOfContact: {
            Name: 'BHPPOC1',
            Email: 'BHPPOC1@bhp.com'
        },
        PO: 3,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'Active'
    },
    {
        UniqueID: 4,
        Customer: 'British Petroleum',
        ProjectName: 'BP 2019 offshore',
        ProductsPurchased: 'SDx,S3D,SDV,SPI,SPEL',
        InitialStartDate: new Date(2019, 5, 12),
        LastRenewDate: new Date(2019, 5, 12),
        AMCRenewDate: new Date(2020, 5, 12),
        Location: 'west',
        AMCCharge: 300,
        CusPointOfContact: {
            Name: 'bppoc1',
            Email: 'bppoc1@bp.com'
        },
        PO: 4,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: true,
        status: 'Active'
    },
    {
        UniqueID: 5,
        Customer: 'Shell',
        ProjectName: 'Netherland O&G Project',
        ProductsPurchased: 'SDx,J5,S3D,Ecosys',
        InitialStartDate: new Date(2017, 8, 20),
        LastRenewDate: new Date(2017, 8, 20),
        AMCRenewDate: new Date(2018, 8, 20),
        Location: 'west',
        AMCCharge: 260,
        CusPointOfContact: {
            Name: 'ShellPOC1',
            Email: 'ShellPOC1@shell.com'
        },
        PO: 5,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'InActive'
    },
    {
        UniqueID: 6,
        Customer: 'ExxonMobil',
        ProjectName: 'Alabama State Project',
        ProductsPurchased: 'SPF,J5,S3D,SPFusion,SPI,SPEL',
        InitialStartDate: new Date(2020, 8, 20),
        LastRenewDate: new Date(2020, 8, 20),
        AMCRenewDate: new Date(2021, 8, 20),
        Location: 'west',
        AMCCharge: 250,
        CusPointOfContact: {
            Name: 'ExxonMobilPOC1',
            Email: 'ExxonMobilPOC1@ExxonMobil.com'
        },
        PO: 6,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'InActive'
    },
    {
        UniqueID: 7,
        Customer: 'TOTAL',
        ProjectName: 'total-phase2',
        ProductsPurchased: 'SPF,SPFUsion,S3D,SPMat,J5',
        InitialStartDate: new Date(2019, 7, 25),
        LastRenewDate: new Date(2019, 7, 25),
        AMCRenewDate: new Date(2020, 7, 25),
        Location: 'South',
        AMCCharge: 270,
        CusPointOfContact: {
            Name: 'TOTALPOC1',
            Email: 'TOTALPOC1@total.com'
        },
        PO: 7,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'Active'
    },
    {
        UniqueID: 8,
        Customer: 'HDEC',
        ProjectName: 'Hyundai Version Upgrade',
        ProductsPurchased: 'SPF,SDX,J5,S3D',
        InitialStartDate: new Date(2019, 5, 26),
        LastRenewDate: new Date(2019, 5, 26),
        AMCRenewDate: new Date(2020, 5, 26),
        Location: 'east',
        AMCCharge: 130,
        CusPointOfContact: {
            Name: 'HDECPOC1',
            Email: 'HDECPOC1@hdec.com'
        },
        PO: 8,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'Active'
    },
    {
        UniqueID: 9,
        Customer: 'Aekyung',
        ProjectName: 'Digitization',
        ProductsPurchased: 'SPF,SPFusion',
        InitialStartDate: new Date(2018, 4, 1),
        LastRenewDate: new Date(2019, 5, 20),
        AMCRenewDate: new Date(2019, 4, 1),
        Location: 'east',
        AMCCharge: 150,
        CusPointOfContact: {
            Name: 'AekyungPOC1',
            Email: 'AekyungPOC1@aekyung.com'
        },
        PO: 9,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'Active'
    },
    {
        UniqueID: 10,
        Customer: 'SKEC',
        ProjectName: 'SKEC digitization',
        ProductsPurchased: 'SPF,SDx,SPPID,SPEL,SPI',
        InitialStartDate: new Date(2018, 4, 20),
        LastRenewDate: new Date(2018, 4, 20),
        AMCRenewDate: new Date(2019, 4, 20),
        Location: 'east',
        AMCCharge: 200,
        CusPointOfContact: {
            Name: 'SKECPOC1',
            Email: 'SKECPOC1@SKEC.com'
        },
        PO: 10,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: true,
        status: 'InActive'
    },
    {
        UniqueID: 11,
        Customer: 'Fenomiva',
        ProjectName: 'Tag Extraction Using Fusion',
        ProductsPurchased: 'SPFusion,IM2019,',
        InitialStartDate: new Date(2018, 8, 20),
        LastRenewDate: new Date(2018, 8, 20),
        AMCRenewDate: new Date(2019, 8, 20),
        Location: 'west',
        AMCCharge: 350,
        CusPointOfContact: {
            Name: 'FenomivaPOC1',
            Email: 'FenomivaPOC1@Fenomiva.com'
        },
        PO: 11,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'InActive'
    },
    {
        UniqueID: 12,
        Customer: 'sellafield',
        ProjectName: 'J5 Integration',
        ProductsPurchased: 'J5',
        InitialStartDate: new Date(2020, 8, 20),
        LastRenewDate: new Date(2020, 8, 20),
        AMCRenewDate: new Date(2021, 8, 20),
        Location: 'South',
        AMCCharge: 100,
        CusPointOfContact: {
            Name: 'sellafieldPOC1',
            Email: 'sellafieldPOC1@sellafield.com'
        },
        PO: 12,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'InActive'
    },
    {
        UniqueID: 13,
        Customer: 'PTTEP',
        ProjectName: 'pipeline project',
        ProductsPurchased: 'SPF,J5,S3D,Ecosys',
        InitialStartDate: new Date(2019, 8, 20),
        LastRenewDate: new Date(2019, 8, 20),
        AMCRenewDate: new Date(2020, 8, 20),
        Location: 'South',
        AMCCharge: 230,
        CusPointOfContact: {
            Name: 'PTTEPPOC1',
            Email: 'PTTEPPOC1@PTTEP.com'
        },
        PO: 13,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'Active'
    },
    {
        UniqueID: 14,
        Customer: 'Vale',
        ProjectName: 'RAPID',
        ProductsPurchased: 'SPF,J5,S3D,SDV',
        InitialStartDate: new Date(2018, 8, 20),
        LastRenewDate: new Date(2018, 8, 20),
        AMCRenewDate: new Date(2019, 8, 20),
        Location: 'west',
        AMCCharge: 190,
        CusPointOfContact: {
            Name: 'ValePOC1',
            Email: 'ValePOC1@Vale.com'
        },
        PO: 14,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: true,
        status: 'Active'
    },
    {
        UniqueID: 15,
        Customer: 'CNPC',
        ProjectName: 'CNPC Project Phase1',
        ProductsPurchased: 'SPF,J5,S3D,SPPID,SPI,SPEl',
        InitialStartDate: new Date(2019, 7, 20),
        LastRenewDate: new Date(2019, 7, 20),
        AMCRenewDate: new Date(2020, 7, 20),
        Location: 'north',
        AMCCharge: 950,
        CusPointOfContact: {
            Name: 'CNPCPOC1',
            Email: 'CNPCPOC1@CNPC.com'
        },
        PO: 15,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'InActive'
    },
    {
        UniqueID: 16,
        Customer: 'Chevron',
        ProjectName: 'Chevron SDx J5 Integration',
        ProductsPurchased: 'SDx,J5',
        InitialStartDate: new Date(2020, 4, 20),
        LastRenewDate: new Date(2020, 4, 20),
        AMCRenewDate: new Date(2021, 4, 20),
        Location: 'north',
        AMCCharge: 96,
        CusPointOfContact: {
            Name: 'ChevronPOC1',
            Email: 'ChevronPOC1@Chevron.com'
        },
        PO: 16,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'Active'
    },
    {
        UniqueID: 17,
        Customer: 'Lukoil',
        ProjectName: 'Lukoil Phase1',
        ProductsPurchased: 'SPF,S3D,SPEL,SPMat',
        InitialStartDate: new Date(2019, 1, 19),
        LastRenewDate: new Date(2019, 1, 19),
        AMCRenewDate: new Date(2020, 1, 19),
        Location: 'north',
        AMCCharge: 256,
        CusPointOfContact: {
            Name: 'LukoilPOC1',
            Email: 'LukoilPOC1@Lukoil.com'
        },
        PO: 17,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'InActive'
    },
    {
        UniqueID: 18,
        Customer: 'Sinopec',
        ProjectName: 'Sinopec National Unification Project',
        ProductsPurchased: 'SDx,S3D,SPMat,SPEL',
        InitialStartDate: new Date(2020, 5, 29),
        LastRenewDate: new Date(2020, 5, 29),
        AMCRenewDate: new Date(2021, 5, 29),
        Location: 'north',
        AMCCharge: 123,
        CusPointOfContact: {
            Name: 'SinopecPOC1',
            Email: 'SinopecPOC1@Sinopec.com'
        },
        PO: 18,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'InActive'
    },
    {
        UniqueID: 19,
        Customer: 'Sinopec',
        ProjectName: 'Sinopec Phase 2',
        ProductsPurchased: 'SDx,S3D,SPMat,SPEL',
        InitialStartDate: new Date(2020, 12, 20),
        LastRenewDate: new Date(2020, 12, 20),
        AMCRenewDate: new Date(2021, 12, 20),
        Location: 'South',
        AMCCharge: 212,
        CusPointOfContact: {
            Name: 'SinopecPOC1',
            Email: 'SinopecPOC1@Sinopec.com'
        },
        PO: 19,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'InActive'
    },
    {
        UniqueID: 20,
        Customer: 'Petronas',
        ProjectName: 'RAPID Phase2',
        ProductsPurchased: 'SPF,J5,S3D,SDV,SPFusion',
        InitialStartDate: new Date(2019, 7, 16),
        LastRenewDate: new Date(2019, 7, 16),
        AMCRenewDate: new Date(2020, 7, 16),
        Location: 'South',
        AMCCharge: 95,
        CusPointOfContact: {
            Name: 'PertronasPOC2',
            Email: 'PertronasPOC2@petronas.com'
        },
        PO: 20,
        ContactAddress: 'Some Random Address',
        EmailSendForRenew: false,
        status: 'Active'
    }
];
