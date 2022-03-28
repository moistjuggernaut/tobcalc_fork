import { lowerCaseRegisteredFunds } from "../../src/registered_funds.ts";

export interface ECBTimePeriod {
    id: string;
    name: string;
    start: string;
    end: string;
}

export enum TransactionType {
    Buy,
    Sell
}

export enum SecurityType {
    ETF,
    Stock,
}

export interface ETF {
    type: SecurityType.ETF;
    accumulating: boolean;
}

export interface Stock {
    type: SecurityType.Stock;
}

export type Security = ETF | Stock;
export enum CountryCode {
    UnitedStates = 'US',
    Afghanistan = 'AF',
    AlandIslands = 'AX',
    Albania = 'AL',
    Algeria = 'DZ',
    AmericanSamoa = 'AS',
    Andorra = 'AD',
    Angola = 'AO',
    Anguilla = 'AI',
    Antarctica = 'AQ',
    AntiguaAndBarbuda = 'AG',
    Argentina = 'AR',
    Armenia = 'AM',
    Aruba = 'AW',
    Australia = 'AU',
    Austria = 'AT',
    Azerbaijan = 'AZ',
    Bahamas = 'BS',
    Bahrain = 'BH',
    Bangladesh = 'BD',
    Barbados = 'BB',
    Belarus = 'BY',
    Belgium = 'BE',
    Belize = 'BZ',
    Benin = 'BJ',
    Bermuda = 'BM',
    Bhutan = 'BT',
    Bolivia = 'BO',
    BonaireSintEustatiusSaba = 'BQ',
    BosniaAndHerzegovina = 'BA',
    Botswana = 'BW',
    BouvetIsland = 'BV',
    Brazil = 'BR',
    BritishIndianOceanTerritory = 'IO',
    BruneiDarussalam = 'BN',
    Bulgaria = 'BG',
    BurkinaFaso = 'BF',
    Burundi = 'BI',
    Cambodia = 'KH',
    Cameroon = 'CM',
    Canada = 'CA',
    CapeVerde = 'CV',
    CaymanIslands = 'KY',
    CentralAfricanRepublic = 'CF',
    Chad = 'TD',
    Chile = 'CL',
    China = 'CN',
    ChristmasIsland = 'CX',
    CocosKeelingIslands = 'CC',
    Colombia = 'CO',
    Comoros = 'KM',
    Congo = 'CG',
    CongoDemocraticRepublic = 'CD',
    CookIslands = 'CK',
    CostaRica = 'CR',
    CoteDIvoire = 'CI',
    Croatia = 'HR',
    Cuba = 'CU',
    Curaçao = 'CW',
    Cyprus = 'CY',
    CzechRepublic = 'CZ',
    Denmark = 'DK',
    Djibouti = 'DJ',
    Dominica = 'DM',
    DominicanRepublic = 'DO',
    Ecuador = 'EC',
    Egypt = 'EG',
    ElSalvador = 'SV',
    EquatorialGuinea = 'GQ',
    Eritrea = 'ER',
    Estonia = 'EE',
    Ethiopia = 'ET',
    FalklandIslands = 'FK',
    FaroeIslands = 'FO',
    Fiji = 'FJ',
    Finland = 'FI',
    France = 'FR',
    FrenchGuiana = 'GF',
    FrenchPolynesia = 'PF',
    FrenchSouthernTerritories = 'TF',
    Gabon = 'GA',
    Gambia = 'GM',
    Georgia = 'GE',
    Germany = 'DE',
    Ghana = 'GH',
    Gibraltar = 'GI',
    Greece = 'GR',
    Greenland = 'GL',
    Grenada = 'GD',
    Guadeloupe = 'GP',
    Guam = 'GU',
    Guatemala = 'GT',
    Guernsey = 'GG',
    Guinea = 'GN',
    GuineaBissau = 'GW',
    Guyana = 'GY',
    Haiti = 'HT',
    HeardIslandMcdonaldIslands = 'HM',
    HolySeeVaticanCityState = 'VA',
    Honduras = 'HN',
    HongKong = 'HK',
    Hungary = 'HU',
    Iceland = 'IS',
    India = 'IN',
    Indonesia = 'ID',
    Iran = 'IR',
    Iraq = 'IQ',
    Ireland = 'IE',
    IsleOfMan = 'IM',
    Israel = 'IL',
    Italy = 'IT',
    Jamaica = 'JM',
    Japan = 'JP',
    Jersey = 'JE',
    Jordan = 'JO',
    Kazakhstan = 'KZ',
    Kenya = 'KE',
    Kiribati = 'KI',
    Korea = 'KR',
    KoreaDemocraticPeoplesRepublic = 'KP',
    Kuwait = 'KW',
    Kyrgyzstan = 'KG',
    LaoPeoplesDemocraticRepublic = 'LA',
    Latvia = 'LV',
    Lebanon = 'LB',
    Lesotho = 'LS',
    Liberia = 'LR',
    LibyanArabJamahiriya = 'LY',
    Liechtenstein = 'LI',
    Lithuania = 'LT',
    Luxembourg = 'LU',
    Macao = 'MO',
    Macedonia = 'MK',
    Madagascar = 'MG',
    Malawi = 'MW',
    Malaysia = 'MY',
    Maldives = 'MV',
    Mali = 'ML',
    Malta = 'MT',
    MarshallIslands = 'MH',
    Martinique = 'MQ',
    Mauritania = 'MR',
    Mauritius = 'MU',
    Mayotte = 'YT',
    Mexico = 'MX',
    Micronesia = 'FM',
    Moldova = 'MD',
    Monaco = 'MC',
    Mongolia = 'MN',
    Montenegro = 'ME',
    Montserrat = 'MS',
    Morocco = 'MA',
    Mozambique = 'MZ',
    Myanmar = 'MM',
    Namibia = 'NA',
    Nauru = 'NR',
    Nepal = 'NP',
    Netherlands = 'NL',
    NewCaledonia = 'NC',
    NewZealand = 'NZ',
    Nicaragua = 'NI',
    Niger = 'NE',
    Nigeria = 'NG',
    Niue = 'NU',
    NorfolkIsland = 'NF',
    NorthernMarianaIslands = 'MP',
    Norway = 'NO',
    Oman = 'OM',
    Pakistan = 'PK',
    Palau = 'PW',
    PalestinianTerritory = 'PS',
    Panama = 'PA',
    PapuaNewGuinea = 'PG',
    Paraguay = 'PY',
    Peru = 'PE',
    Philippines = 'PH',
    Pitcairn = 'PN',
    Poland = 'PL',
    Portugal = 'PT',
    PuertoRico = 'PR',
    Qatar = 'QA',
    Reunion = 'RE',
    Romania = 'RO',
    RussianFederation = 'RU',
    Rwanda = 'RW',
    SaintBarthelemy = 'BL',
    SaintHelena = 'SH',
    SaintKittsAndNevis = 'KN',
    SaintLucia = 'LC',
    SaintMartin = 'MF',
    SaintPierreAndMiquelon = 'PM',
    SaintVincentAndGrenadines = 'VC',
    Samoa = 'WS',
    SanMarino = 'SM',
    SaoTomeAndPrincipe = 'ST',
    SaudiArabia = 'SA',
    Senegal = 'SN',
    Serbia = 'RS',
    Seychelles = 'SC',
    SierraLeone = 'SL',
    Singapore = 'SG',
    SintMaarten = 'SX',
    Slovakia = 'SK',
    Slovenia = 'SI',
    SolomonIslands = 'SB',
    Somalia = 'SO',
    SouthAfrica = 'ZA',
    SouthGeorgiaAndSandwichIsl = 'GS',
    SouthSudan = 'SS',
    Spain = 'ES',
    SriLanka = 'LK',
    Sudan = 'SD',
    Suriname = 'SR',
    SvalbardAndJanMayen = 'SJ',
    Swaziland = 'SZ',
    Sweden = 'SE',
    Switzerland = 'CH',
    SyrianArabRepublic = 'SY',
    Taiwan = 'TW',
    Tajikistan = 'TJ',
    Tanzania = 'TZ',
    Thailand = 'TH',
    TimorLeste = 'TL',
    Togo = 'TG',
    Tokelau = 'TK',
    Tonga = 'TO',
    TrinidadAndTobago = 'TT',
    Tunisia = 'TN',
    Turkey = 'TR',
    Turkmenistan = 'TM',
    TurksAndCaicosIslands = 'TC',
    Tuvalu = 'TV',
    Uganda = 'UG',
    Ukraine = 'UA',
    UnitedArabEmirates = 'AE',
    UnitedKingdom = 'GB',
    UnitedStatesOutlyingIslands = 'UM',
    Uruguay = 'UY',
    Uzbekistan = 'UZ',
    Vanuatu = 'VU',
    Venezuela = 'VE',
    VietNam = 'VN',
    VirginIslandsBritish = 'VG',
    VirginIslandsUS = 'VI',
    WallisAndFutuna = 'WF',
    WesternSahara = 'EH',
    Yemen = 'YE',
    Zambia = 'ZM',
    Zimbabwe = 'ZW',
}

export const eeaCountries: CountryCode[];

export enum CurrencyCode {
    USD = 'USD',
    CAD = 'CAD',
    EUR = 'EUR',
    AED = 'AED',
    AFN = 'AFN',
    ALL = 'ALL',
    AMD = 'AMD',
    ARS = 'ARS',
    AUD = 'AUD',
    AZN = 'AZN',
    BAM = 'BAM',
    BDT = 'BDT',
    BGN = 'BGN',
    BHD = 'BHD',
    BIF = 'BIF',
    BND = 'BND',
    BOB = 'BOB',
    BRL = 'BRL',
    BWP = 'BWP',
    BYN = 'BYN',
    BZD = 'BZD',
    CDF = 'CDF',
    CHF = 'CHF',
    CLP = 'CLP',
    CNY = 'CNY',
    COP = 'COP',
    CRC = 'CRC',
    CVE = 'CVE',
    CZK = 'CZK',
    DJF = 'DJF',
    DKK = 'DKK',
    DOP = 'DOP',
    DZD = 'DZD',
    EEK = 'EEK',
    EGP = 'EGP',
    ERN = 'ERN',
    ETB = 'ETB',
    GBP = 'GBP',
    GEL = 'GEL',
    GHS = 'GHS',
    GNF = 'GNF',
    GTQ = 'GTQ',
    HKD = 'HKD',
    HNL = 'HNL',
    HRK = 'HRK',
    HUF = 'HUF',
    IDR = 'IDR',
    ILS = 'ILS',
    INR = 'INR',
    IQD = 'IQD',
    IRR = 'IRR',
    ISK = 'ISK',
    JMD = 'JMD',
    JOD = 'JOD',
    JPY = 'JPY',
    KES = 'KES',
    KHR = 'KHR',
    KMF = 'KMF',
    KRW = 'KRW',
    KWD = 'KWD',
    KZT = 'KZT',
    LBP = 'LBP',
    LKR = 'LKR',
    LTL = 'LTL',
    LVL = 'LVL',
    LYD = 'LYD',
    MAD = 'MAD',
    MDL = 'MDL',
    MGA = 'MGA',
    MKD = 'MKD',
    MMK = 'MMK',
    MOP = 'MOP',
    MUR = 'MUR',
    MXN = 'MXN',
    MYR = 'MYR',
    MZN = 'MZN',
    NAD = 'NAD',
    NGN = 'NGN',
    NIO = 'NIO',
    NOK = 'NOK',
    NPR = 'NPR',
    NZD = 'NZD',
    OMR = 'OMR',
    PAB = 'PAB',
    PEN = 'PEN',
    PHP = 'PHP',
    PKR = 'PKR',
    PLN = 'PLN',
    PYG = 'PYG',
    QAR = 'QAR',
    RON = 'RON',
    RSD = 'RSD',
    RUB = 'RUB',
    RWF = 'RWF',
    SAR = 'SAR',
    SDG = 'SDG',
    SEK = 'SEK',
    SGD = 'SGD',
    SOS = 'SOS',
    SYP = 'SYP',
    THB = 'THB',
    TND = 'TND',
    TOP = 'TOP',
    TRY = 'TRY',
    TTD = 'TTD',
    TWD = 'TWD',
    TZS = 'TZS',
    UAH = 'UAH',
    UGX = 'UGX',
    UYU = 'UYU',
    UZS = 'UZS',
    VEF = 'VEF',
    VND = 'VND',
    XAF = 'XAF',
    XOF = 'XOF',
    YER = 'YER',
    ZAR = 'ZAR',
    ZMK = 'ZMK',
    ZWL = 'ZWL',
}

export function isNameRegistered(name: string): boolean;

export type ExchangeRatesMap = Map<CurrencyCode, Map<string, number>>;
export const exchangeRatesMap: ExchangeRatesMap;

export function setECBHostname(hostname: string): void;
export function setInvestingComHostname(hostname: string): void;
export async function cacheExchangeRates(start: Date, end: Date, currencyCode: CurrencyCode): Promise<void>;
export function getSecurity(isin: string): Promise<Security>;

export function fillPdf(
    pdfFile: Uint8Array,
    params: {
        start: Date,
        end: Date,
        nationalRegistrationNumber: string,
        fullName: string,
        addressLine1: string,
        addressLine2: string,
        addressLine3: string,
        tableATax012Quantity: number,
        tableATax035Quantity: number,
        tableATax132Quantity: number,
        tableATax012TaxBase: number,
        tableATax035TaxBase: number,
        tableATax132TaxBase: number,
        tableATax012TaxValue: number,
        tableATax035TaxValue: number,
        tableATax132TaxValue: number,
        tableATotalTaxValue: number,
        totalTaxValue: number,
        signaturePng: Uint8Array,
        signatureName: string,
        signatureCapacity: string,
        location: string,
        date: string,
    }
): Promise<Uint8Array>;

export function formatMoney(value: number, currencyCode = "€"): string;

export interface BrokerTransaction {
    date: Date;
    isin: string;
    currency: CurrencyCode;
    value: number;
}

export interface BrokerAdapter {
    (data: Blob): Promise<BrokerTransaction[]>;
}

export function getTaxableTransactions(brokerTransactions: BrokerTransaction[]): Promise<TaxableTransaction[]>;

export interface TaxableTransaction {
    value: number; // EUR
    security: Security;
    countryCode: CountryCode;
}

type TaxFormData = Map<number, FormRow>;

export class InformativeError extends Error {}

export interface FormRow {
    quantity: number;
    taxBase: number;
    taxValue: number;
}

export function getTaxFormData(taxableTransactions: TaxableTransaction[]): TaxFormData;

export function getTaxRate(taxableTransaction: TaxableTransaction): number;

export const IBKRAdapter: BrokerAdapter;
export const Trading212Adapter: BrokerAdapter;
