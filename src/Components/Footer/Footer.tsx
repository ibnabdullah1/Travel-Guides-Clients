import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="text-slate-200 bg-secondary pt-16">
      <footer className="max-w-7xl mx-auto md:px-10 px-5">
        <div className="md:flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <Link href="/">
              <div className="flex items-center font-semibold relative text-2xl text-[#ffffff] ">
                <Image
                  width={1200}
                  height={100}
                  src={
                    "https://goodtravel.guide/wp-content/uploads/2020/01/LOGO-Good-Travel-Guide.png"
                  }
                  className="w-[160px] md:w-[130px]"
                  alt="logo"
                />
              </div>
            </Link>
            <div className="mt-3">
              <p className="text-sm">
                Discover new places, plan your trips, and get travel tips from
                experienced travelers. Join our community and start your next
                adventure today!
              </p>
              <div className="gap-3 my-6 flex items-center">
                <div className="icon-box bg-dark-light hover:bg-primary">
                  <FiFacebook />
                </div>

                <div className="icon-box bg-dark-light hover:bg-primary">
                  <FaTwitter />
                </div>

                <div className="icon-box bg-dark-light hover:bg-primary">
                  <FaInstagram />
                </div>

                <div className="icon-box bg-dark-light hover:bg-primary">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Explore</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#">Travel Tips</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Destination Guides</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Travel Stories</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Photo Gallery</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Top Destinations</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Travel Planning</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Accommodation Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Tour Packages</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Premium Access</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">About Us</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Our Story</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Meet the Team</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Press</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Careers</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-muted">
              Stay updated with the latest travel tips and destination guides!
              Enter your email to subscribe.
            </p>
            <div className="justify-center my-3 flex items-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] border  outline-none bg-transparent rounded-lg "
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-sm mt-3 text-center border-t text-muted py-4">
        <p>
          Copyright © 2024{" "}
          <span className="text-primary cursor-pointer">
            Travel Tips & Destination Guides
          </span>
          .<br className="md:hidden" /> All Rights Reserved || Designed By{" "}
          <a
            className="text-primary cursor-pointer"
            target="_blank"
            href="https://www.linkedin.com/in/arafatibnabdullah/"
            rel="noreferrer"
          >
            Arafat Hosen
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
