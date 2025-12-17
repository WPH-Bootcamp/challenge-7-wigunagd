import NavigationMenu from '../../ui/Navigation/NavigationMenu';
import Logo from '../../ui/Navigation/Logo';

type SocialMediaData = {
  id: string;
  href: string;
  iconsrc: string;
}

const socialMediaItems: SocialMediaData[] = [
  {
    id: 'facebook',
    href: '#facebook',
    iconsrc: 'src/assets/images/social-01-fb.svg',
  },
  {
    id: 'instagram',
    href: '#instagram',
    iconsrc: 'src/assets/images/social-02-ig.svg',
  },
  {
    id: 'linkedin',
    href: '#linkedin',
    iconsrc: 'src/assets/images/social-03-linkedin.svg',
  },
  {
    id: 'tiktok',
    href: '#tiktok',
    iconsrc: 'src/assets/images/social-04-tiktok.svg',
  }
];

const Footer = () => {
  return <footer id="footersection" className="mb-20 text-center md:mx-5">
    <div className="grid bg-gray-50 border border-gray-300 dark:bg-gray-950 dark:border-gray-800 xlg:max-w-[1280px] mx-2 md:mx-12 lg:mx-auto 2xl:mx-auto py-5 rounded-xl">

      <div className="md:flex md:flex-row relative border-b border-gray-200 dark:border-gray-800 mx-5 pb-10">

        <Logo logoClass='mb-5 md:absolute md:right-1' />

        <p className="text-3xl text-left md:max-w-62.5">LET'S DISCUSS YOUR IDEAS</p>

      </div>

      <div className="md:grid md:grid-cols-2 md:pt-15 py-5 md:relative">

        <NavigationMenu ulClass='grid md:flex text-left ml-2' liClass='p-3'></NavigationMenu>

        <ul className="flex ml-2 md:absolute md:right-3 md:bottom-3">

          {socialMediaItems.map((social) => (
            <li className="p-3">
              <a href={social.href}>
                <img src={social.iconsrc} alt={social.id} className="border border-gray-300 rounded-full w-7 h-7 p-0.25 icon-tint" />
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </footer>;
}

export default Footer;