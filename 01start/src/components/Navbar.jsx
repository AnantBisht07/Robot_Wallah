import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1421] shadow-lg">
        <div className="flex items-center justify-between px-6 lg:px-20 h-20">
          {/* Logo */}
          <Link to="/" className="text-orange-500 font-bold text-xl">
            ROBOT <span className="text-white">WALLAH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 text-white items-center">
            <NavLinks />
            <Button className="w-40 h-12 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              <Link to="/apply-mentor">Apply as Mentor</Link>
            </Button>

            <Button className="w-40 h-12 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              <Link to="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-white">
            <Menu className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-screen bg-[#0A1421] text-white flex flex-col items-center justify-center gap-8 shadow-lg transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Links */}
          <NavLinks />

          {/* Apply as Mentor Button */}
          <Button className="w-40 h-12 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            <Link to="/apply-mentor">Apply as Mentor</Link>
          </Button>

          <Button className="w-40 h-12 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </nav>
    </>
  );
};

const NavLinks = () => (
  <>
    <Link to="/workshops" className="text-lg hover:text-orange-400 transition">
      Workshops
    </Link>

    {/* Courses Dropdown */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="flex items-center gap-1 cursor-pointer text-lg hover:text-orange-400 transition">
          Courses <ChevronDown className="w-5 h-5" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="">
            <Link to="/courses/rapidskill">Rapid Skill Development</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <Link to="/courses/coreskill">Core Skill Development</Link>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    {/* Services Dropdown */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="flex items-center gap-1 cursor-pointer text-lg hover:text-orange-400 transition">
          Services <ChevronDown className="w-5 h-5" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="">
            <Link to="/services/ai-robo-lab">AI & Robotics Lab</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <Link to="/services/ai-curriculum">AI & Robotics Curriculum</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <Link to="/services/teacher-training">Teaching training program</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
          <Link  to='/coming-soon'>ERP Management System</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="" >
          <Link to='/coming-soon'>Learning Management System</Link>
       </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    <Link to="/contact" className="text-lg hover:text-orange-400 transition">
      Contact Us
    </Link>

    <Link to="/products" className="text-lg hover:text-orange-400 transition">
      Products
    </Link>
  </>
);

export default Navbar;
