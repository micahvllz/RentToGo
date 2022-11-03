const mongoose = require("mongoose");
const Listing = require("./models/listing");

mongoose
  .connect("mongodb://localhost:27017/rentToGo")
  .then(() => {
    console.log("Mongo Connection Open!");
  })
  .catch((err) => {
    console.log("Mongo Connection Error!");
    console.log(err);
  });

const seedListings = [
  {
    name: "Skylight Hidden Resort",
    uploader: "diana",
    image:
      "https://a0.muscache.com/im/pictures/c60a849a-9392-47a8-8eb3-7114e596d45c.jpg?im_w=1200",
    price: 14143,
    description:
      "A wooden getaway with a laidback charm, this hidden gem offers a relaxing escape for everyone. Less than 2hrs drive from the city, this instagram-worthy vacation house offers an easy choice for those who wants to enjoy cold breeze and bask in nature. A stylish property that gives the comfort and convenience of privacy and delightfulness at every corner.",
    address: "Lipa, Calabarzon, Philippines",
    latitude: 13.9411,
    longitude: 121.1622,
    date_posted: "2021-05-01",
  },
  {
    name: "The Haven @ Vinia Residences",
    uploader: "jayson",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-690703568574266701/original/0591e658-0bb8-4892-a97a-958792ebc22d.jpeg?im_w=1200",
    price: 2086,
    description:
      "The Haven is a modern 1-bedroom apartment that has everything you need for your staycation. The unit comes with AC, Wi-Fi, Netflix, HBO Go, Youtube Premium and Amazon Prime Video. You can enjoy board games in the living room, and can do light cooking. Our Airbnb is within walking distance to several popular restaurants, shops, and train routes. An ideal base to explore Quezon City.",
    address: "Quezon City, Metro Manila, Philippines",
    latitude: 14.6333,
    longitude: 121.0333,
    date_posted: "2021-10-15",
  },
  {
    name: "New Azure Urban Resort 2B Maldives 19th Floor",
    uploader: "mj",
    image:
      "https://a0.muscache.com/im/pictures/2f60588b-770a-44e2-963b-dc46acca307d.jpg?im_w=1440",
    price: 4000,
    description:
      "This unit is suitable for families, young couples looking for some privacy luxury with a great view of the city from the 19th floor in Maldives tower. the Azure Urban Residences located beside SM City Mall Bicutan, 5 kilometers away from Resorts World Manila & Manila International Airport. Each tower is set in a breathtaking tropical modern aesthetic. The beach club is designed by Miss Paris Hilton who came here in Azure on March 2014 for the launching.",
    address: "Parañaque, NCR, Philippines",
    latitude: 14.4667,
    longitude: 121.0167,
    date_posted: "2021-09-27",
  },
  {
    name: "Newly-furnished studio with dual wifi beside DLSU",
    uploader: "ros",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-54003167/original/edc971b4-50dd-4c07-bbbe-113d38cacfc0.jpeg?im_w=1200",
    price: 1597,
    description:
      "Whether it is loosening-up after a long day's work, tuning-out after a tiresome review, or simply spending a movie marathon with a  loved-one, this exclusive place radiates a rejuvinating vibe that will fit your every mood. With its earth-tone interior, this minimalist-inspired compact studio apartment is equipped with everything a business or leisure traveler needs. For the comfort of the guests, this space can accommodate a maximum of 2 guests.",
    address: "Manila, Metro Manila, Philippines",
    latitude: 14.6,
    longitude: 120.9833,
    date_posted: "2022-01-07",
  },
  {
    name: "Malate Bayview Mansion 30P",
    uploader: "rooney",
    image:
      "https://a0.muscache.com/im/pictures/12532854-26dc-4a16-b21d-590aad91d9fa.jpg?im_w=1200",
    price: 2060,
    description:
      "This fully furnished studio type apartment in Bayview Mansion Manila is located in Malate, the Heart of Nightlife in the Philippines. The space is equipped with kitchen appliances. This is a perfect place to stay with its proximity to museums, clubs and parks. This property is only 5-minute-walk away from Robinsons Manila and is very close to Convenience Stores. There are also a lot of restaurants around the area with Korean, Japanese, Chinese to American menu. ",
    address: "Manila, Metro Manila, Philippines",
    latitude: 14.6,
    longitude: 120.9833,
    date_posted: "2022-04-28",
  },
  {
    name: "Luxury 2-Bedrooms Condo at Fame Residences",
    uploader: "jessie",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-676264682370704827/original/85b18ecf-c065-42aa-9686-eba554e3b93d.jpeg?im_w=1440",
    price: 2999,
    description:
      "Have fun with the whole family at this stylish place at Fame Residences. Fully furnish 2 bedrooms luxury condo with balcony, close to SM Megamall, Greenfield District, Crossing, Shangri-La Mall, Pasig Capitol Commons, & Uptown BGC. This unit is fully furnished, with 55 in Smart TV, WiFi connection, maximum internet speed is up to 100 mbps. Split type air-con for each room, double size beds & working tables. Sofa bed is available in the living area.",
    address: "Mandaluyong, Metro Manila, Philippines",
    latitude: 14.5833,
    longitude: 121.0333,
    date_posted: "2022-09-20",
  },
  {
    name: "Cozy Penthouse Ready for WFH setup w/ Netflix",
    uploader: "marcus",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-50312352/original/12abcbf8-baff-4784-8309-634d97feead4.jpeg?im_w=1440",
    price: 1058,
    description:
      "Furnished Penthouse Studio in Stanford Near Nuvali, Tagaytay and Technopark. Close to Santa Rosa and Biñan Technopark, Tagaytay, Nuvali. There is a double sized bed and an additional mattress under the bed. The unit is equipped with refrigerator, microwave, rice cooker Bathroom with heater. The unit also has a 55 inches smart TV with Netflix. All kitchen utensils are provided as well as linens. A powerful 1.5HP inverter aircon and blackout blinds will make sure that you stay cool and have a good sleep",
    address: "Silang, Calabarzon, Philippines",
    latitude: 14.2306,
    longitude: 120.975,
    date_posted: "2021-08-10",
  },
  {
    name: "Fully furnished with Kitchen, Free WiFi+NETFLIX",
    uploader: "czar",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-15132541/original/a95a2748-5bf3-4732-9f78-0e9e21a822e2.jpeg?im_w=1200",
    price: 2578,
    description:
      "Smack in the hub of the bustling Bel-Air neighborhood, offers a unique urban lifestyle in an inviting village settings. Easy access to everything you want, from hot shopping bargains to cool dining options, work to play, it's all just outside your door. You'll love my place because its in close proximity to the Makati Commercial Business District. Set right in N. Garcia St., touted as the country's fast-becoming popular arts and culture destination, near commercial/institutional establishments!",
    address: "Makati, Metro Manila, Philippines",
    latitude: 14.55,
    longitude: 121.0333,
    date_posted: "2022-11-02",
  },
  {
    name: "Suite Pool View by Grace Residences",
    uploader: "francis",
    image:
      "https://a0.muscache.com/im/pictures/5a56d849-c506-4fd4-91e9-0d73101ddcba.jpg?im_w=1440",
    price: 1581,
    description:
      "Suite Pool View by Grace Residences is a scenic property located in Taguig near BGC, offers a local Philippine design artistry with a modern twist. Room has a balcony facing the Pool area. It is equipped with complete amenities of a hotel suite such as bedroom, sala, kitchen, laundry, ironing equipments, International cable TV channels and Hi-speed Wi-fi Internet and more. It also offers therapeutic massage per request. Our Maximum number of guests is 6, 4 adults and 2 kids under 10 year old.",
    address: "Taguig, Metro Manila, Philippines",
    latitude: 14.5167,
    longitude: 121.05,
    date_posted: "2021-01-15",
  },
  {
    name: "Budget, Clean & Quality Studio APT Unit",
    uploader: "dan",
    image:
      "https://a0.muscache.com/im/pictures/d20608dd-8815-4cad-b2f5-1ec54471d94b.jpg?im_w=1200",
    price: 1000,
    description:
      "The studio- no-frills, minimalist-inspired space with neutral, understated decors. It will give you a feeling of home away from home wherein you can relax, cook, watch movies, read & spend quality time with your loved ones. It is located at Centropolis Residences, West Service Rd. Villongco St. Sucat Muntinlupa City. Simple. Clean. Safe. Affordable. Professional. Quality house keep service from host who is fully vaccinated against covid-19.",
    address: "Muntinlupa, Metro Manila, Philippines",
    latitude: 14.3833,
    longitude: 121.05,
    date_posted: "2022-07-30",
  },
];

Listing.insertMany(seedListings)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
