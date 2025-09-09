import Image from 'next/image'
import Link from "next/link"
export default function NewsFeed() {

  const news = [
    {
      source: "Investor's Business Daily",
      title: "Next Test Looms After Big Powell Rally; 6 New Buys - Investor's Business Daily",
      author: null,
      url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-rallies-highs-dovish-powell-nvidia-earnings/",
      image_url: "https://www.investors.com/wp-content/uploads/2024/07/Stock-BullsDigitalRun-adobe.jpg"
    },
    {
      source: "Associated Press",
      title: "Truck driver accused by the Trump administration of being in the US illegally is denied bond - AP News",
      author: null,
      url: "https://apnews.com/article/harjinder-singh-florida-truck-crash-immigration-bond-9c09c13e419ac6176fad22136ad6bf68",
      image_url: "https://dims.apnews.com/dims4/default/dcac1a4/2147483647/strip/true/crop/700x394+0+28/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F90%2F29%2F4e3c1cc7446089a9101a7bdff4c8%2Fdefaultshareimage-copy.png"
    },
    {
      source: "NPR",
      title: "Evacuations ordered as wildfire blazes California's famed Napa County - NPR",
      author: "Alana Wise",
      url: "https://www.npr.org/2025/08/23/nx-s1-5513908/wildfire-california-napa-county-evacuations-oregon",
      image_url: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3168x1782+0+263/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ff2%2F0f%2F586b21bb44e8a9635b261de5d4f5%2Fgettyimages-2231413811.jpg"
    },
    {
      source: "The Texas Tribune",
      title: "Fresh off Texas Senate’s approval, new congressional map is target of lawsuit - The Texas Tribune",
      author: "By Colleen DeGuzman",
      url: "https://www.texastribune.org/2025/08/23/texas-congressional-map-lawsuit/",
      image_url: "https://thumbnails.texastribune.org/iTuIIZwWsKkT8OyoIkilp-h-xUQ=/1200x630/filters:quality(95):focal(0x563:2400x1601)/static.texastribune.org/media/files/faa250033ea336d8c086868d4e28a4a9/0818%20House%20Redistricting%20KG%2021.jpeg"
    },
    {
      source: "Fortune",
      title: "The Fed is starting to worry about the housing market now - Fortune",
      author: "Jason Ma",
      url: "https://fortune.com/2025/08/23/housing-market-fed-warning-home-prices-homebuilding-jobs-powell/",
      image_url: "https://fortune.com/img-assets/wp-content/uploads/2025/08/GettyImages-2231577115-e1755971854906.jpg?resize=1200,600"
    },
    {
      source: "Rolling Stone",
      title: "Pritzker Calls Trump’s Threat to Target Chicago Next ‘An Authoritarian Grab of Major Cities’ - Rolling Stone",
      author: "Althea Legaspi",
      url: "http://www.rollingstone.com/politics/politics-news/pritzker-blasts-trump-threat-chicago-target-national-guard-1235414422/",
      image_url: "https://www.rollingstone.com/wp-content/uploads/2025/08/PritzkeronTrump-1.jpg?w=1600&h=900&crop=1"
    },
    {
      source: "MacRumors",
      title: "iOS 26 Adds 25W Qi2 Wireless Charging Support to iPhone 16 Models - MacRumors",
      author: "Joe Rossignol",
      url: "https://www.macrumors.com/2025/08/23/ios-26-adds-qi2-25w-support-to-iphone-16-series/",
      image_url: "https://images.macrumors.com/t/IVRNifaxeLgu3YlIs8cHuiQfoS4=/1600x/article-new/2025/08/Belkin-25W-Charging-Stand-1.jpg"
    },
    {
      source: "Wired",
      title: "Scientists Have Identified the Origin of an Extraordinarily Powerful Outer Space Radio Wave - WIRED",
      author: "Jorge Garay",
      url: "https://www.wired.com/story/scientists-identified-origin-extraordinarily-powerful-outer-space-radio-wave-frb-chime/",
      image_url: "https://media.wired.com/photos/68aa4183bf31773aefb5d8c5/191:100/w_1280,c_limit/2169230846"
    },
    {
      source: "Associated Press",
      title: "The Menendez brothers were denied parole. They have to wait at least 18 months for their next chance - AP News",
      author: null,
      url: "https://apnews.com/article/menendez-brothers-parole-denied-hearings-takeaways-2020fb4a0abfea1eb0dbfc4f0fa76f53",
      image_url: "https://dims.apnews.com/dims4/default/8f6f4cf/2147483647/strip/true/crop/4032x2268+0+378/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fca%2Fc9%2F121c19b9bc2f854e82b55b47ae30%2F2e2f52d109064de380f8e6c0999054d1"
    },
    {
      source: "Politico",
      title: "The redistricting war between Texas and California is about to jolt the midterms - Politico",
      author: "Liz Crampton, Dustin Gardiner, Nick Reisman",
      url: "https://www.politico.com/news/2025/08/23/trump-redistricting-california-texas-gerrymander-00521573",
      image_url: "https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https%3A%2F%2Fstatic.politico.com%2Fba%2Ff2%2F16bcbebd4a308c4681c3a1d52130%2Felection-2026-redistricting-52145.jpg"
    },
    {
      source: "The Verge",
      title: "Bose’s compact TV Speaker is more than $100 off right now - The Verge",
      author: "Brandon Russell",
      url: "https://www.theverge.com/tech/764496/bose-tv-speaker-soundbar-8bitdo-ultimate-2-bluetooth-controller-deal-sale",
      image_url: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/08/Bose-TV-Speaker.jpg?quality=90&strip=all&crop=0,10.336347770903,100,79.327304458195"
    },
    {
      source: "ABC News",
      title: "Mandatory evacuation remains as fire from Louisiana plant explosion continues to burn - ABC News",
      author: "ABC News",
      url: "https://abcnews.go.com/US/explosion-louisiana-business-evacuation/story?id\\\\u003d124900678",
      image_url: null
    },
    {
      source: "Associated Press",
      title: "European postal services suspend shipment of packages to US over import tariffs - AP News",
      author: null,
      url: "https://apnews.com/article/us-tariffs-goods-services-suspension-85c7b36b9e92c0e640dfe2ac418cd907",
      image_url: "https://dims.apnews.com/dims4/default/183865e/2147483647/strip/true/crop/5781x3252+0+301/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F5e%2Fca%2F9dfd7e9ba512dfba1b39b6983544%2Fa9c7ac64d7ef4c89a45f59227fcaa561"
    },
    {
      source: "Entertainment Weekly",
      title: "Mingus Reedus, son of 'Walking Dead' star Norman Reedus, arrested on assault charge - Entertainment Weekly",
      author: "https://www.facebook.com/entertainmentweekly",
      url: "https://ew.com/norman-reedus-son-mingus-reedus-arrested-on-assault-charge-11796464",
      image_url: "https://ew.com/thmb/pPOZr4-eD1VpoC-pQF1RblHZYmI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mingus-Reedus-082325-c317e59650a442a79c71e9c4141e9932.jpg"
    },
    {
      source: "HuffPost",
      title: "MSNBC Host Skewers Right-Wing 'Snowflakes' Distressed By Cracker Barrel Logo - HuffPost",
      author: "Hilary Hanson",
      url: "https://www.huffpost.com/entry/msnbc-cracker-barrel-snowflakes_n_68a9f55ce4b0434e01af72b9",
      image_url: "https://img.huffingtonpost.com/asset/68aa2251170000d91263ef42.jpeg?cache=WhQQ7SYyYZ&ops=500_281%2Cscalefit_1200_630"
    },
    {
      source: "NBC News",
      title: "Columbia University student among 5 victims identified in deadly New York tour bus crash - NBC News",
      author: "Matt Lavietes",
      url: "https://www.nbcnews.com/news/us-news/new-york-tour-bus-crash-victims-identified-rcna226776",
      image_url: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-08/250823-new-york-bus-crash-mn-1515-c8aada.jpg"
    },
  ]

  return (
    <>
      <div className="flex justify-center mb-20">
        <div className="w-6xl border rounded-2xl p-2">
          <div className='m-4 font-semibold text-3xl'>
            Business News of the day
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {news.map((article, index) => (
              <div key={index} className="flex flex-col border aspect-square rounded-4xl bg-gray-500">
                <Link href={article.url} target="_blank" rel="noopener noreferrer">
                  <div>
                    {article.image_url ? (
                      <Image
                        src={article.image_url}
                        width={500}
                        height={500}
                        alt={article.title}
                        className="p-1 rounded-4xl h-45 border border-black object-cover"
                      />
                    ) : (
                      <div className="p-1 rounded-4xl h-45 border border-black flex items-center justify-center bg-gray-300 text-gray-600">
                        No image
                      </div>
                    )}
                  </div>

                  <div className="ml-2 font-semibold italic">{article.source}</div>

                  <div className="pl-2 visible">
                    {article.title.length > 50 ? article.title.slice(0, 50) + "..." : article.title}
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}