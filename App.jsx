import Container from "src/layouts/Container";
import Header from "src/layouts/Header";
import Carousel from "src/layouts/Carousel";
import CircularCard from "src/components/CircularCard";
import ColoredCard from "./components/ColoredCard";

const circularCards = [
  {
    id: "circular1",
    text: "Sana Özel",
    src: "src/assets/senin-icin-sectik.png",
  },
  {
    id: "circular2",
    text: "Sen de Al!",
    src: "src/assets/en-cok-satanlar.png",
  },
  { id: "circular3", text: "Apple", src: "src/assets/apple.jpg" },
  { id: "circular4", text: "Kredi Kartı", src: "src/assets/kredi-karti.png" },
  { id: "circular5", text: "Kurumsal", src: "src/assets/kurumsal.png" },
  { id: "circular6", text: "Şanslı Çekiliş", src: "src/assets/Widget1.png" },
  { id: "circular7", text: "Krediler", src: "src/assets/Krediler-circle.png" },
  {
    id: "circular8",
    text: "Siparişin Umut Olsun",
    src: "src/assets/Widget2.png",
  },
  {
    id: "circular9",
    text: "TrendyolMilla",
    src: "src/assets/Trendyol-milla.jpg",
  },
  { id: "circular10", text: "Pull & Bear", src: "src/assets/Topstory.jpg" },
  { id: "circular11", text: "Xiaomi", src: "src/assets/Xiaomi.jpg" },
  { id: "circular12", text: "Samsung", src: "src/assets/Samsung.jpg" },
  { id: "circular13", text: "Philips", src: "src/assets/Philips.jpg" },
  { id: "circular14", text: "Puma", src: "src/assets/Puma.jpg" },
  {
    id: "circular15",
    text: "Stradivarius",
    src: "src/assets/Stradivarius.png",
  },
  { id: "circular16", text: "DeFacto", src: "src/assets/Defacto.jpg" },
  { id: "circular17", text: "Karaca", src: "src/assets/Karaca.jpg" },
  { id: "circular18", text: "Adidas", src: "src/assets/Adidas.png" },
  { id: "circular19", text: "TEFAL", src: "src/assets/Tefal.jpg" },
  {
    id: "circular20",
    text: "The Purest Solutions",
    src: "src/assets/Thepurestsolutions.jpg",
  },
  { id: "circular21", text: "ASUS", src: "src/assets/Asus.png" },
  { id: "circular22", text: "Arzum", src: "src/assets/Arzum.png" },
  { id: "circular23", text: "Koton", src: "src/assets/Koton.png" },
  { id: "circular24", text: "Bershka", src: "src/assets/Bershka.png" },
  { id: "circular25", text: "DYSON", src: "src/assets/Dyson.jpg" },
  { id: "circular26", text: "Bosch", src: "src/assets/Bosch.png" },
  { id: "circular27", text: "Sleepy", src: "src/assets/Sleepy.jpg" },
];

const coloredCards = [
  {
    id: "colored1",
    text: "Sepete En Çok Eklenenler",
    bgColor: "bg-green-soft",
    textColor: "text-green",
  },
  {
    id: "colored2",
    text: "En Çok Öne Çıkanlar",
    bgColor: "bg-pudra",
    textColor: "text-blue",
  },
  {
    id: "colored3",
    text: "Flaş Ürünler",
    bgColor: "bg-pink-soft",
    textColor: "text-blue",
  },
];

// const cards = [
//   {
//     id: "card1",
//     brand: "Bargello",
//     text: "384 Floral Edp 50 Ml Kadın Parfüm",
//     src: "src/assets/bargello-parfum.jpg",
//   },
// ];

function App() {
  return (
    <div className="bg-gray-light">
      <Container>
        <Header />
        <Carousel cards={circularCards}>
          {circularCards.map((card) => (
            <CircularCard key={card.id} text={card.text} src={card.src} />
          ))}
        </Carousel>
        <div className="grid grid-cols-3 gap-x-2">
          {coloredCards.map((coloredCard) => (
            <ColoredCard
              key={coloredCard.id}
              text={coloredCard.text}
              bgColor={coloredCard.bgColor}
              textColor={coloredCard.textColor}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
