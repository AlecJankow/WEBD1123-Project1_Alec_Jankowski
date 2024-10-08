let addToHead = document.querySelector("head");
let cssLink = document.createElement("link");
addToHead.appendChild(cssLink);
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("href", "css/style.css");

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
// console.log(wrapper);

let bodY = document.querySelector("body");
bodY.appendChild(wrapper);

for (let i = 0; i < 4; i++) {
  let divs = document.createElement("div");
  wrapper.appendChild(divs);
  divs.classList.add("wrapperDivs");
}

const color1 = "linear-gradient(135deg, #0B132B 0%, #3A506B 100%)";

const color2 = "linear-gradient(330deg, #5BC0BE 0%, #3A506B 100%)";

const color3 = "linear-gradient(35deg, #0B132B 0%, #5BC0BE 100%)";

const color4 = "linear-gradient(235deg, #5BC0BE 0%, #3A506B 100%)";

const colorsArray = [color1, color2, color3, color4];
//console.log(colorsArray);
let wrapper_Divs = document.getElementsByClassName("wrapperDivs");
// console.log(wrapper_Divs);

let divOne = wrapper_Divs.item(0);
let divTwo = wrapper_Divs.item(1);
let divThree = wrapper_Divs.item(2);
let divFour = wrapper_Divs.item(3);

let allDivs = [divOne, divTwo, divThree, divFour];

// console.log(allDivs);

for (let i = 0; i < 4; i++) {
  let myDiv = allDivs[i];
  myDiv.style.backgroundImage = colorsArray[i];
  let update = document.createElement("section");
  myDiv.appendChild(update);
  update.setAttribute("id", "ID" + i);
}

function Artist(artistname, album, label, year, albumImg, bio) {
  this.artistname = artistname;
  this.album = album;
  this.label = label;
  this.year = year;
  this.albumImg = albumImg;
  this.bio = bio;
}

let artist1 = new Artist(
  "Autechre",
  "Quaristice",
  "Warp Records",
  "2008",
  "quaristice_.jpeg",
  "Autechre are an English electronic music duo consisting of Rob Brown and Sean Booth, both from Rochdale, Greater Manchester. Formed in 1987, they are one of the best known acts signed to UK electronic label Warp Records, through which all of Autechre's full-length albums have been released beginning with their 1993 debut Incunabula. \nThey gained initial recognition when they were featured on Warp's 1992 compilation Artificial Intelligence. Influenced by styles such as electro and acid house, the music of Autechre has evolved throughout their career from early, melodic techno recordings to later works often considered abstract and experimental, featuring complex algorithm-generated production and few stylistic conventions. Their work has been associated with the 1990s electronic genre known as intelligent dance music (IDM), though Booth has dismissed the label as \"silly.\""
);

let artist2 = new Artist(
  "Aphex Twin",
  "Richard D. James Album and Come to Daddy",
  "Warp Records",
  "1996",
  "richardDJames.jpeg",
  "Richard David James (born 18 August 1971), best known by the stage name Aphex Twin, is an English musician.[1] He is best known for his idiosyncratic work in electronic styles such as techno and ambient music in the 1990s, and has also been associated with the electronic subgenre known as intelligent dance music.[2][3] In 2001, Guardian journalist Paul Lester called James 'the most inventive and influential figure in contemporary electronic music'. Raised in Cornwall, James began performing as a rave DJ at local clubs and free parties in the late 1980s.[5] In 1991 his debut EP Analogue Bubblebath was released on Mighty Force, a local independent label, winning him acclaim and a cult following.[6][7] James co-founded the independent label Rephlex Records the same year. He attracted wider praise for his 1992 debut album Selected Ambient Works 85–92 and signed to the record label Warp the following year. His music became increasingly well-known through the 1990s with the charting albums Selected Ambient Works Volume II (1994) and ...I Care Because You Do (1995), and singles 'On' (1993), 'Come to Daddy' (1997), and 'Windowlicker' (1999). The latter two singles, accompanied by music videos directed by Chris Cunningham, brought James attention in the US market. James has also recorded under aliases including AFX, Caustic Window, and Polygon Window.[4] After releasing the Aphex Twin album Drukqs in 2001, James spent the following years releasing music mostly under other aliases, including the 2005 Analord EP series as AFX, a pair of 2007 releases as the Tuss, and archival material such as an unreleased 1994 LP in 2014 as Caustic Window. He returned as Aphex Twin in 2014 with the album Syro, which won the Grammy Award for Best Dance/Electronic Album. He has since released further charting EPs, including Cheetah (2016) and Collapse (2018)."
);

let artist3 = new Artist(
  "Future Sounds of London",
  "Dead Cities",
  "Astralwerks/Virgin Records",
  "1996",
  "deadCities.jpeg",
  "The Future Sound of London (often abbreviated to FSOL) is a British electronic music group composed of Garry Cobain and Brian Dougans. The duo are often credited with pushing the boundaries of electronic music experimentation and of pioneering a new era of dance music. Although often associated with ambient music, Cobain and Dougans usually resist being typecast into any one particular genre. Their work covers many areas of electronic music, such as ambient techno, house music, trip hop, ambient dub, and acid techno. In addition to music composition, their interests have covered a number of areas including film and video, 2D and 3D computer graphics, animation in making almost all their own videos for their singles, radio broadcasting and creating their own electronic devices for sound making.They have released works under numerous aliases.\nThe artists were fairly enigmatic in the past but have become more candid with their fanbase in recent years with social websites like Myspace, YouTube, their forum and many interviews in which Cobain almost always speaks for the group."
);

let artist4 = new Artist(
  "Kraftwerk",
  "Computer World",
  "Kling Klang/Warner Brothers",
  "1981",
  "computerWorld.jpeg",
  "Kraftwerk (German: [kʁaftvɛɐ̯k], lit. power station) is a German band formed in Düsseldorf in 1970 by Ralf Hütter and Florian Schneider. Widely considered as innovators and pioneers of electronic music, they were among the first successful acts to popularize the genre. The group began as part of West Germany's experimental krautrock scene in the early 1970s before fully embracing electronic instrumentation, including synthesizers, drum machines, and vocoders.\nOn commercially successful albums such as Autobahn (1974), Trans-Europe Express (1977), and The Man-Machine (1978), Kraftwerk developed a self-described \"robot pop\" style that combined electronic music with pop melodies, sparse arrangements, and repetitive rhythms, while adopting a stylized image including matching suits. Following the release of Electric Café (1986), member Wolfgang Flür left the group in 1987; the band's other longtime percussionist, Karl Bartos, did the same in 1990. Founding member Schneider departed in 2008.\nThe band's work has influenced a diverse range of artists and many genres of modern music, including synthpop, hip hop, post-punk, techno, ambient, and club music. In 2014, the Recording Academy honoured Kraftwerk with a Grammy Lifetime Achievement Award. Their latest album 3-D The Catalogue was released in 2017. As of 2019, the remaining members of the band continue to tour."
);

let allArtists = [artist1, artist2, artist3, artist4];
// console.log(allArtists);
//console.log(allArtists[0].artistname);
function getArtist() {
  let sections = document.querySelectorAll(".wrapperDivs > section");
  //console.log(sections);
  for (let i = 0; i < sections.length; i++) {
    let artistList = "<table>";
    artistList +=
      "<tr><td>Artist Name:</td><td>" + allArtists[i].artistname + "</td><tr>";
    artistList +=
      "<tr><td>Artist Album:</td><td>" + allArtists[i].album + "</td><tr>";
    artistList +=
      "<tr><td>Artist Label:</td><td>" + allArtists[i].label + "</td><tr>";
    artistList +=
      "<tr><td>Release Year:</td><td>" + allArtists[i].year + "</td><tr>";
    artistList += "</table>";

    artistList += "<p><img src = 'assets 2/images/" + allArtists[i].albumImg + "' alt = '" + allArtists[i].album + "'/></p>";

    artistList += "<span>Artist Bio:</span><hr>";
    artistList += "<p>" + allArtists[i].bio + "</p>";

    sections[i].innerHTML = artistList;
  }
}

  getArtist();
