const minutes = 2;
const INTERVAL = minutes * 60 * 1000;

const URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public`;

const PUNJAB = {
  districts: [
    {
      district_id: 485,
      district_name: "Amritsar",
    },
    {
      district_id: 483,
      district_name: "Barnala",
    },
    {
      district_id: 493,
      district_name: "Bathinda",
    },
    {
      district_id: 499,
      district_name: "Faridkot",
    },
    {
      district_id: 484,
      district_name: "Fatehgarh Sahib",
    },
    {
      district_id: 487,
      district_name: "Fazilka",
    },
    {
      district_id: 480,
      district_name: "Ferozpur",
    },
    {
      district_id: 489,
      district_name: "Gurdaspur",
    },
    {
      district_id: 481,
      district_name: "Hoshiarpur",
    },
    {
      district_id: 492,
      district_name: "Jalandhar",
    },
    {
      district_id: 479,
      district_name: "Kapurthala",
    },
    {
      district_id: 488,
      district_name: "Ludhiana",
    },
    {
      district_id: 482,
      district_name: "Mansa",
    },
    {
      district_id: 491,
      district_name: "Moga",
    },
    {
      district_id: 486,
      district_name: "Pathankot",
    },
    {
      district_id: 494,
      district_name: "Patiala",
    },
    {
      district_id: 497,
      district_name: "Rup Nagar",
    },
    {
      district_id: 498,
      district_name: "Sangrur",
    },
    {
      district_id: 496,
      district_name: "SAS Nagar",
    },
    {
      district_id: 500,
      district_name: "SBS Nagar",
    },
    {
      district_id: 490,
      district_name: "Sri Muktsar Sahib",
    },
    {
      district_id: 495,
      district_name: "Tarn Taran",
    },
  ],
  ttl: 24,
};

const DELHI = {
  districts: [
    { district_id: 141, district_name: "Central Delhi" },
    { district_id: 145, district_name: "East Delhi" },
    { district_id: 140, district_name: "New Delhi" },
    { district_id: 146, district_name: "North Delhi" },
    { district_id: 147, district_name: "North East Delhi" },
    { district_id: 143, district_name: "North West Delhi" },
    { district_id: 148, district_name: "Shahdara" },
    { district_id: 149, district_name: "South Delhi" },
    { district_id: 144, district_name: "South East Delhi" },
    { district_id: 150, district_name: "South West Delhi" },
    { district_id: 142, district_name: "West Delhi" },
  ],
  ttl: 24,
};

const HARYANA = {
  districts: [
    { district_id: 193, district_name: "Ambala" },
    { district_id: 200, district_name: "Bhiwani" },
    { district_id: 201, district_name: "Charkhi Dadri" },
    { district_id: 199, district_name: "Faridabad" },
    { district_id: 196, district_name: "Fatehabad" },
    { district_id: 188, district_name: "Gurgaon" },
    { district_id: 191, district_name: "Hisar" },
    { district_id: 189, district_name: "Jhajjar" },
    { district_id: 204, district_name: "Jind" },
    { district_id: 190, district_name: "Kaithal" },
    { district_id: 203, district_name: "Karnal" },
    { district_id: 186, district_name: "Kurukshetra" },
    { district_id: 206, district_name: "Mahendragarh" },
    { district_id: 205, district_name: "Nuh" },
    { district_id: 207, district_name: "Palwal" },
    { district_id: 187, district_name: "Panchkula" },
    { district_id: 195, district_name: "Panipat" },
    { district_id: 202, district_name: "Rewari" },
    { district_id: 192, district_name: "Rohtak" },
    { district_id: 194, district_name: "Sirsa" },
    { district_id: 198, district_name: "Sonipat" },
    { district_id: 197, district_name: "Yamunanagar" },
  ],
  ttl: 24,
};

const CHANDIGARH = {
  districts: [{ district_id: 108, district_name: "Chandigarh" }],
  ttl: 24,
};

const UP = {
  districts: [
    { district_id: 622, district_name: "Agra" },
    { district_id: 623, district_name: "Aligarh" },
    { district_id: 625, district_name: "Ambedkar Nagar" },
    { district_id: 626, district_name: "Amethi" },
    { district_id: 627, district_name: "Amroha" },
    { district_id: 628, district_name: "Auraiya" },
    { district_id: 646, district_name: "Ayodhya" },
    { district_id: 629, district_name: "Azamgarh" },
    { district_id: 630, district_name: "Badaun" },
    { district_id: 631, district_name: "Baghpat" },
    { district_id: 632, district_name: "Bahraich" },
    { district_id: 633, district_name: "Balarampur" },
    { district_id: 634, district_name: "Ballia" },
    { district_id: 635, district_name: "Banda" },
    { district_id: 636, district_name: "Barabanki" },
    { district_id: 637, district_name: "Bareilly" },
    { district_id: 638, district_name: "Basti" },
    { district_id: 687, district_name: "Bhadohi" },
    { district_id: 639, district_name: "Bijnour" },
    { district_id: 640, district_name: "Bulandshahr" },
    { district_id: 641, district_name: "Chandauli" },
    { district_id: 642, district_name: "Chitrakoot" },
    { district_id: 643, district_name: "Deoria" },
    { district_id: 644, district_name: "Etah" },
    { district_id: 645, district_name: "Etawah" },
    { district_id: 647, district_name: "Farrukhabad" },
    { district_id: 648, district_name: "Fatehpur" },
    { district_id: 649, district_name: "Firozabad" },
    { district_id: 650, district_name: "Gautam Buddha Nagar" },
    { district_id: 651, district_name: "Ghaziabad" },
    { district_id: 652, district_name: "Ghazipur" },
    { district_id: 653, district_name: "Gonda" },
    { district_id: 654, district_name: "Gorakhpur" },
    { district_id: 655, district_name: "Hamirpur" },
    { district_id: 656, district_name: "Hapur" },
    { district_id: 657, district_name: "Hardoi" },
    { district_id: 658, district_name: "Hathras" },
    { district_id: 659, district_name: "Jalaun" },
    { district_id: 660, district_name: "Jaunpur" },
    { district_id: 661, district_name: "Jhansi" },
    { district_id: 662, district_name: "Kannauj" },
    { district_id: 663, district_name: "Kanpur Dehat" },
    { district_id: 664, district_name: "Kanpur Nagar" },
    { district_id: 665, district_name: "Kasganj" },
    { district_id: 666, district_name: "Kaushambi" },
    { district_id: 667, district_name: "Kushinagar" },
    { district_id: 668, district_name: "Lakhimpur Kheri" },
    { district_id: 669, district_name: "Lalitpur" },
    { district_id: 670, district_name: "Lucknow" },
    { district_id: 671, district_name: "Maharajganj" },
    { district_id: 672, district_name: "Mahoba" },
    { district_id: 673, district_name: "Mainpuri" },
    { district_id: 674, district_name: "Mathura" },
    { district_id: 675, district_name: "Mau" },
    { district_id: 676, district_name: "Meerut" },
    { district_id: 677, district_name: "Mirzapur" },
    { district_id: 678, district_name: "Moradabad" },
    { district_id: 679, district_name: "Muzaffarnagar" },
    { district_id: 680, district_name: "Pilibhit" },
    { district_id: 682, district_name: "Pratapgarh" },
    { district_id: 624, district_name: "Prayagraj" },
    { district_id: 681, district_name: "Raebareli" },
    { district_id: 683, district_name: "Rampur" },
    { district_id: 684, district_name: "Saharanpur" },
    { district_id: 685, district_name: "Sambhal" },
    { district_id: 686, district_name: "Sant Kabir Nagar" },
    { district_id: 688, district_name: "Shahjahanpur" },
    { district_id: 689, district_name: "Shamli" },
    { district_id: 690, district_name: "Shravasti" },
    { district_id: 691, district_name: "Siddharthnagar" },
    { district_id: 692, district_name: "Sitapur" },
    { district_id: 693, district_name: "Sonbhadra" },
    { district_id: 694, district_name: "Sultanpur" },
    { district_id: 695, district_name: "Unnao" },
    { district_id: 696, district_name: "Varanasi" },
  ],
  ttl: 24,
};

const RAJASTHAN = {
  districts: [
    { district_id: 507, district_name: "Ajmer" },
    { district_id: 512, district_name: "Alwar" },
    { district_id: 519, district_name: "Banswara" },
    { district_id: 516, district_name: "Baran" },
    { district_id: 528, district_name: "Barmer" },
    { district_id: 508, district_name: "Bharatpur" },
    { district_id: 523, district_name: "Bhilwara" },
    { district_id: 501, district_name: "Bikaner" },
    { district_id: 514, district_name: "Bundi" },
    { district_id: 521, district_name: "Chittorgarh" },
    { district_id: 530, district_name: "Churu" },
    { district_id: 511, district_name: "Dausa" },
    { district_id: 524, district_name: "Dholpur" },
    { district_id: 520, district_name: "Dungarpur" },
    { district_id: 517, district_name: "Hanumangarh" },
    { district_id: 505, district_name: "Jaipur I" },
    { district_id: 506, district_name: "Jaipur II" },
    { district_id: 527, district_name: "Jaisalmer" },
    { district_id: 533, district_name: "Jalore" },
    { district_id: 515, district_name: "Jhalawar" },
    { district_id: 510, district_name: "Jhunjhunu" },
    { district_id: 502, district_name: "Jodhpur" },
    { district_id: 525, district_name: "Karauli" },
    { district_id: 503, district_name: "Kota" },
    { district_id: 532, district_name: "Nagaur" },
    { district_id: 529, district_name: "Pali" },
    { district_id: 522, district_name: "Pratapgarh" },
    { district_id: 518, district_name: "Rajsamand" },
    { district_id: 534, district_name: "Sawai Madhopur" },
    { district_id: 513, district_name: "Sikar" },
    { district_id: 531, district_name: "Sirohi" },
    { district_id: 509, district_name: "Sri Ganganagar" },
    { district_id: 526, district_name: "Tonk" },
    { district_id: 504, district_name: "Udaipur" },
  ],
  ttl: 24,
};

module.exports = Object.freeze({
  CHANDIGARH,
  DELHI,
  HARYANA,
  INTERVAL,
  PUNJAB,
  RAJASTHAN,
  UP,
  URL,
});