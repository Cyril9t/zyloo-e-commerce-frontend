import Logo from "../common/Logo";
import SearchBar from "../common/searchBar";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarAction";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-page flex h-16 items-center justify-between gap-6">
                <Logo />

                <div className="hidden flex-1 justify-center lg:flex">
                    <SearchBar />
                </div>

                <NavbarLinks />

                <NavbarActions />
            </div>
        </header>
    );
}