import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsLinkedin,
  BsYoutube,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs';
const FooterComponent = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full gap-5 sm:flex justify-between md:grid-cols-1 ">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Abdulrahman's
              </span>
              Blog
            </Link>
          </div>
          {/* Dev that contains three section in the footer */}
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup>
                <Footer.Link
                  href="https://elmoharb-elaqwa.github.io/Abdulrahman-Muhammad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MySite
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abdulrahman'sBlog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup>
                <Footer.Link
                  href="https://github.com/Elmoharb-Elaqwa?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Abdulrahman's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4  sm:justify-center ">
            <Footer.Icon
              href="https://www.facebook.com/a.abdo99"
              icon={BsFacebook}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/abdulrahman-muhammad-743393243/"
              icon={BsLinkedin}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.youtube.com/channel/UCmLTDQobE1Z78gFZRpYltMA"
              icon={BsYoutube}
              target="_blank"
            />
            <Footer.Icon
              href="https://github.com/Elmoharb-Elaqwa?tab=repositories"
              icon={BsGithub}
              target="_blank"
            />
            <Footer.Icon
              href="https://twitter.com/bdalrhm43596970"
              icon={BsTwitter}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
