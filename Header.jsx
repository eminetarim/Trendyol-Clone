import Search from "src/components/Search";
import "remixicon/fonts/remixicon.css";
import Avatar from "src/components/Icons/Avatar";
import Heart from "src/components/Icons/Heart";
import ShoppingCart from "src/components/Icons/ShoppingCart";

function Header() {
  return (
    <div className="flex justify-between p-4">
      <img
        src="src/assets/ty-web.svg"
        width={146}
        height={100}
        alt="burda icon"
      />
      <Search />
      <div className="flex justify-between items-center w-350">
        <div className="group cursor-pointer relative p-4">
          <Avatar />
          <p className="ml-2 group-hover:text-orange">Giriş Yap</p>
        </div>
        <div className="group cursor-pointer relative p-4">
          <Heart />
          <p className="ml-2 group-hover:text-orange">Favorilerim</p>
        </div>
        <div className="group cursor-pointer relative p-4">
          <ShoppingCart />
          <p className="ml-2 group-hover:text-orange">Sepetim</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
