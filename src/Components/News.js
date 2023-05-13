import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 5,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize :PropTypes.number,
    category : PropTypes.string,

  }


  articles = [
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Ukraine war: 25 dead as Russian missiles hit cities - BBC",
      "description": "Among those killed were a mother and her three-year-old daughter in the city of Dnipro, officials say.",
      "url": "https://www.bbc.com/news/world-europe-65421341",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AA21/production/_129535534_ukraine-index-epa.jpg",
      "publishedAt": "2023-04-28T16:39:32Z",
      "content": "A wave of Russian air strikes on cities across Ukraine, including Kyiv, has left at least 25 people dead.\r\n23 people - including four children - were killed in an attack that hit a block of flats in … [+3474 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "US House votes to repeal Biden solar tariff waiver - Reuters",
      "description": "The U.S. House of Representatives on Friday voted to repeal President Joe Biden's suspension of tariffs on solar panels from four Southeast Asian nations, a move aimed at supporting a domestic supply chain but that solar project builders say would stall clean…",
      "url": "https://www.reuters.com/business/energy/us-house-vote-repeal-biden-solar-policy-2023-04-28/",
      "urlToImage": "https://www.reuters.com/resizer/_I4qxCFYWc1ael_OEq6CM5gIPEY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MVJ6K7HCAZL7RHERV7L5UX52Z4.jpg",
      "publishedAt": "2023-04-28T16:21:00Z",
      "content": "April 28 (Reuters) - The U.S. House of Representatives on Friday voted to repeal President Joe Biden's suspension of tariffs on solar panels from four Southeast Asian nations, a move aimed at support… [+2386 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Frank Schwab",
      "title": "NFL Draft winners and losers: Colts take a big swing on QB Anthony Richardson - Yahoo Sports",
      "description": "The Colts were thrilled to land their new QB of the future.",
      "url": "https://sports.yahoo.com/nfl-draft-winners-and-losers-colts-qb-anthony-richardson-155504212.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/RcHQgnbcKEwb9agEOavS7g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-04/6bdbbc90-e55f-11ed-a57e-b5926c16eace",
      "publishedAt": "2023-04-28T15:55:04Z",
      "content": "The Indianapolis Colts might finally be cured of their Andrew Luck hangover.\r\nWhen Luck retired, the Colts started on a path of acquiring second-chance veterans at the end of their careers, hoping to… [+9801 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Stephen A.'s reaction to Round 1️⃣ of the 2023 NFL Draft + Breaking down QBs drafted | First Take - ESPN",
      "description": "Stephen A.'s reaction to Round 1️⃣ of the 2023 NFL Draft + Breaking down QBs drafted 🏈  | First TakeThe First Take crew share their thoughts on the first ro...",
      "url": "https://www.youtube.com/watch?v=ds3_cWYq9-s",
      "urlToImage": "https://i.ytimg.com/vi/ds3_cWYq9-s/maxresdefault.jpg",
      "publishedAt": "2023-04-28T15:29:29Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Federalreserve.gov"
      },
      "author": null,
      "title": "Federal Reserve Board announces the results from the review of the supervision and regulation of Silicon Valley Bank, led by Vice Chair for Supervision Barr - Federal Reserve",
      "description": "The Federal Reserve Board on Friday announced the results from the review of the supervision and regulation of Silicon Valley Bank, led by Vice Chair for Super",
      "url": "https://www.federalreserve.gov/newsevents/pressreleases/bcreg20230428a.htm",
      "urlToImage": "https://www.federalreserve.gov/images/social-media/social-default-image-opengraph.jpg",
      "publishedAt": "2023-04-28T15:00:28Z",
      "content": "The Federal Reserve Board on Friday announced the results from the review of the supervision and regulation of Silicon Valley Bank, led by Vice Chair for Supervision Michael S. Barr. The review finds… [+2288 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Microsoft signs 10-year deal with Spain's Nware after UK blocks Activision bid - Reuters",
      "description": "Microsoft Corp <a href=\"https://www.reuters.com/companies/MSFT.O\" target=\"_blank\">(MSFT.O)</a> said on Friday it signed a 10-year deal with Nware to bring Xbox and Activision Blizzard <a href=\"https://www.reuters.com/companies/ATVI.O\" target=\"_blank\">(ATVI.O)…",
      "url": "https://www.reuters.com/technology/microsoft-signs-10-year-deal-with-spains-nware-after-uk-blocks-activision-bid-2023-04-28/",
      "urlToImage": "https://www.reuters.com/resizer/fQbRjYTrftcRMQdGNDN7m4oi4Bw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DLGKBYX2NVKINMP2C6SERVUHBU.jpg",
      "publishedAt": "2023-04-28T14:39:00Z",
      "content": "April 28 (Reuters) - Microsoft Corp (MSFT.O) said on Friday it signed a 10-year deal with Nware to bring Xbox and Activision Blizzard (ATVI.O) games to the Spanish cloud-gaming platform, days after B… [+1594 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Mail"
      },
      "author": "Sean O'grady",
      "title": "Newlywed Sofia Richie Grainge jets off to tropical location while on honeymoon with husband Elliot - Daily Mail",
      "description": "The model, 24, and her partner, 29, married at the luxury Hotel du Cap-Eden-Roc in the French Riviera on Saturday.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-12025569/Newlywed-Sofia-Richie-Grainge-jets-tropical-location-honeymoon-husband-Elliot.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/04/28/15/70351813-0-image-a-96_1682691667855.jpg",
      "publishedAt": "2023-04-28T14:22:50Z",
      "content": "Sofia Richie Grainge looked on cloud nine as she jetted off to a tropical location for her honeymoon with her husband Elliot.\r\nThe model, 24, and her partner, 29, married at the luxury Hotel du Cap-E… [+2943 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "US officials lead urgent rescue talks for First Republic - Reuters",
      "description": "U.S. officials are coordinating urgent talks to rescue First Republic Bank <a href=\"https://www.reuters.com/companies/FRC.N\" target=\"_blank\">(FRC.N)</a> as private-sector efforts led by the bank's advisers have yet to reach a deal, according to three sources …",
      "url": "https://www.reuters.com/business/finance/us-officials-lead-urgent-rescue-talks-first-republic-sources-2023-04-28/",
      "urlToImage": "https://www.reuters.com/resizer/ZId2lHYGUY9au2xJDakHdPOc6GQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PILGFXTKFZP5JH35IXO5ZFVGUA.jpg",
      "publishedAt": "2023-04-28T13:58:00Z",
      "content": "NEW YORK, April 28 (Reuters) - U.S. officials are coordinating urgent talks to rescue First Republic Bank (FRC.N) as private-sector efforts led by the bank's advisers have yet to reach a deal, accord… [+4127 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Brooke Steinberg",
      "title": "James Corden's final 'Late Late Show': Tom Cruise, musicals, Carpool Karaoke and more - New York Post ",
      "description": "James Corden said his goodbyes to “The Late Late Show,” CBS and America on Thursday night with a star-studded final show.",
      "url": "https://nypost.com/2023/04/28/best-moments-of-james-cordens-final-late-late-show/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/NYPICHPDPICT000010294383.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2023-04-28T13:53:00Z",
      "content": "James Corden said his goodbyes to “The Late Late Show,” CBS and America on Thursday night with a star-studded final show.\r\nCorden, 44, announced his departure from The Late Late Show in April 2022, j… [+9516 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Space.com"
      },
      "author": "Mike Wall",
      "title": "Watch SpaceX's powerful Falcon Heavy rocket launch today after weather delays - Space.com",
      "description": "Liftoff is scheduled for 7:29 p.m. EDT (2329 GMT).",
      "url": "https://www.space.com/spacex-falcon-heavy-sixth-mission-launch-viasat-3-americas",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/23Dk4NmxmgsAkvKVruf9m7-1200-80.jpg",
      "publishedAt": "2023-04-28T13:41:26Z",
      "content": "Update for April 27, 7:30 p.m. EDT:  SpaceX is now targeting Friday (April 28), to launch its sixth Falcon Heavy mission carrying satellites for ViaSat, Astranis and Gravity Space. \r\nSpaceX's powerfu… [+4257 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Esa.int"
      },
      "author": null,
      "title": "Work continues to deploy Juice RIME antenna - European Space Agency",
      "description": "Juice’s ice-penetrating RIME antenna has not yet been deployed as planned. During the first week of commissioning, an issue arose with the 16-metre-long Radar for Icy Moons Exploration (RIME) antenna, which is preventing it from being released from its mounti…",
      "url": "https://www.esa.int/Science_Exploration/Space_Science/Juice/Work_continues_to_deploy_Juice_RIME_antenna",
      "urlToImage": "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/04/juice_s_wriggling_rime_antenna/24856760-1-eng-GB/Juice_s_wriggling_RIME_antenna_pillars.gif",
      "publishedAt": "2023-04-28T13:21:22Z",
      "content": "Science &amp; Exploration28/04/20232623 views28 likes\r\nJuices ice-penetrating RIME antenna has not yet been deployed as planned. During the first week of commissioning, an issue arose with the 16-met… [+2238 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investor's Business Daily"
      },
      "author": "Investor's Business Daily",
      "title": "The Fed's Key Inflation Rate Is On Simmer, But Wage Growth Is Hot; S&P 500 Futures Pare Losses | Investor's Business Daily - Investor's Business Daily",
      "description": null,
      "url": "https://www.investors.com/news/economy/the-feds-key-inflation-rate-stays-hot-as-gdp-slows-sp-500-futures-rise/",
      "urlToImage": null,
      "publishedAt": "2023-04-28T13:02:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Monica Hesse",
      "title": "Perspective | What the E. Jean Carroll trial says about the long effects of assault - The Washington Post",
      "description": "E. Jean Carroll’s testimony in a New York courtroom this week examined the long tail effects of one woman’s alleged sexual assault.",
      "url": "https://www.washingtonpost.com/lifestyle/2023/04/28/e-jean-carroll-trial-trump-rape/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HQRBAKNNZG2V4DUMDDSVKUGFNM.JPG&w=1440",
      "publishedAt": "2023-04-28T13:00:00Z",
      "content": "Comment on this story\r\nComment\r\nThis column contains graphic descriptions of sexual assault.\r\nIn the most visceral moment of E. Jean Carrolls testimony in a New York courtroom this week, the advice c… [+7485 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Notebookcheck.net"
      },
      "author": "Vaidyanathan Subramaniam",
      "title": "OnePlus Pad Review: A premium Android tablet experience that goes easy on the wallet - Notebookcheck.net",
      "description": "We evaluate the OnePlus Pad and see whether the latest Android tablet has what it takes to veer potential buyers away from budget Apple iPads.",
      "url": "https://www.notebookcheck.net/OnePlus-Pad-Review-A-premium-Android-tablet-experience-that-goes-easy-on-the-wallet.710470.0.html",
      "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/OnePlus/Pad/oneplus_pad_teaser.jpg",
      "publishedAt": "2023-04-28T12:59:14Z",
      "content": "The OnePlus Pad sports an all-glass front that is ensconced in an aluminum unibody construction. The Pad is available only in the Halo Green color option, which signifies vitality and life according … [+831 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Pope, in Hungary, warns of rising nationalism in Europe, appeals for migrants - Reuters",
      "description": "Pope Francis, starting a trip to Hungary, on Friday pointedly warned of the dangers of rising nationalism in Europe and told the Budapest government that accepting migrants along with the rest of the continent would be a true sign of Christianity.",
      "url": "https://www.reuters.com/world/europe/pope-francis-arrives-hungary-with-ukraine-migration-topping-agenda-2023-04-28/",
      "urlToImage": "https://www.reuters.com/resizer/zQM8X-ofUlX7PFT1LGUUE3ppoj0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WGRRMPRG6VLGTPLKWHL3JF4IYM.jpg",
      "publishedAt": "2023-04-28T12:56:00Z",
      "content": "BUDAPEST, April 28 (Reuters) - Pope Francis, starting a trip to Hungary, on Friday pointedly warned of the dangers of rising nationalism in Europe and told the Budapest government that accepting migr… [+3868 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Chandelis Duster",
      "title": "Anti-abortion bills fail in GOP-controlled Nebraska and South Carolina - CNN",
      "description": "Measures that would have severely restricted abortion failed Thursday in Nebraska and South Carolina, which both have Republican-controlled legislatures, a reflection of the growing unease among Republicans over the political popularity of strict bans.",
      "url": "https://www.cnn.com/2023/04/28/politics/abortion-bills-fail-nebraska-south-carolina/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230428081132-nebraska-abortion-bill-0427.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-04-28T12:35:00Z",
      "content": "Measures that would have severely restricted abortion failed Thursday in Nebraska and South Carolina, which both have Republican-controlled legislatures, a reflection of the growing unease among Repu… [+2870 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": null,
      "title": "Ed Sheeran sings and plays guitar in courtroom in bid to prove he didn't steal classic Marvin Gaye song - CBS News",
      "description": "\"Thinking Out Loud\"  and \"Let's Get It On\" were released decades apart, but some say they sound seamless when paired together.",
      "url": "https://www.cbsnews.com/news/ed-sheeran-plays-guitar-courtroom-copywright-lawsuit-marvin-gaye-song/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/04/28/dab7ae7b-5367-4de5-a0b3-e65d8eeea65a/thumbnail/1200x630/99f59e6ddd0a0bdeede51858520d6930/gettyimages-1252176807.jpg",
      "publishedAt": "2023-04-28T12:01:36Z",
      "content": "Ed Sheeran returns to court for copyright infringement trial \r\nEd Sheeran returns to court for copyright infringement trial00:25\r\nIn a packed New York courtroom, Ed Sheeran picked up his guitar Thurs… [+4327 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Audrey Conklin",
      "title": "Colorado teens arrested in rock-throwing attacks took photos of murdered woman's car as 'memento': police - Fox News",
      "description": "Three Colorado teenagers charged with murder in a series of rock attacks on vehicles that left 20-year-old Alex Bartell dead allegedly took photos of the victim's damaged car.",
      "url": "https://www.foxnews.com/us/colorado-teens-arrested-rock-throwing-attacks-took-photos-murdered-womans-car-memento-police",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/BeFunky-collage-1.jpg",
      "publishedAt": "2023-04-28T12:00:00Z",
      "content": "The three Colorado teenagers charged with murder in a series of rock attacks on vehicles across Jefferson and Boulder counties that left 20-year-old Alexa Bartell dead last week apparently took a pho… [+4537 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "William Booth",
      "title": "Richard Sharp resigns as BBC chair over Boris Johnson loan report - The Washington Post",
      "description": "Richard Sharp was appointed chairman of the BBC by Boris Johnson after he introduced the then-prime minister to a business executive who guaranteed a loan for him.",
      "url": "https://www.washingtonpost.com/world/2023/04/28/richard-sharp-bbc-resign-boris/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BGCD5V47OFAHFE55W2ULYXHFII.jpg&w=1440",
      "publishedAt": "2023-04-28T11:54:05Z",
      "content": "Comment on this story\r\nComment\r\nLONDON The chairman of the BBC, Richard Sharp, announced his resignation on Friday following the release of an independent report that found he breached government rul… [+2759 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Spacewalk with NASA Astronaut Steve Bowen and UAE Astronaut Sultan Alneyadi (April 28) - NASA",
      "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
      "url": "https://www.youtube.com/watch?v=ZTvggR94UnA",
      "urlToImage": null,
      "publishedAt": "2023-04-28T11:45:12Z",
      "content": null
    }
  ]

  constructor() {
    super();
    
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcb0aa2e99a042baab64d82afc50eb87&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
     let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false })
    
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcb0aa2e99a042baab64d82afc50eb87&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false

    })

  }

  handleNextClick = async () => {
    console.log('next');
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcb0aa2e99a042baab64d82afc50eb87&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      


      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false

      })
    }

  }
  render() {
    return (
      <>
        <div className='container my-3'>
            <div className="text-center">
          <h1>News.Global - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
            </div>
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} 
                imageUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date={element.publishedAt} source={element.source.name}/>
              
              </div>
              
              
            })}

          
            

          </div>



          <div className='container d-flex justify-content-between'>
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
            <button disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>

        </div>
        
      </>
    )
  }
}

export default News