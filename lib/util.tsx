import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function NavLinks() {
  return (
    <Navbar fluid>
      <NavbarBrand href="/">
        {/* <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Favicon" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">Influential Person</span>
      </NavbarBrand>
      <div className="flex md:order-last">
        <DarkThemeToggle />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/filmography">Filmography</NavbarLink>
        <NavbarLink href="/influence">Influence</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
