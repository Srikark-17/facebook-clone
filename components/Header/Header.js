import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  SunIcon,
  MoonIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/client";
import useDarkMode from "../darkModeToggle/useDarkMode";

function Header() {
  const [session] = useSession();
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md dark:bg-gray-850">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          width="40"
          height="40"
          layout="fixed"
          className="cursor-pointer"
        />
        <div className="hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 dark:bg-gray-650 p-2">
          <SearchIcon className="h-6 text-gray-600 dark:text-gray-300 cursor-pointer" />
          <input
            className="hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 dark:placeholder-gray-300 flex-shrink dark:text-gray-200"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {colorTheme === "light" ? (
          <SunIcon
            onClick={() => setTheme("light")}
            className="h-9 text-gray-400 dark:text-gray-200 mr-2 cursor-pointer"
          />
        ) : (
          <MoonIcon
            onClick={() => setTheme("dark")}
            className="h-9 text-gray-400  mr-2 cursor-pointer"
          />
        )}
        <Image
          onClick={() => signOut()}
          className="rounded-full cursor-pointer"
          src={session?.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="hidden lg:inline-flex text-sm whitespace-nowrap dark:text-gray-200 font-semibold pr-3 cursor-default">
          {session?.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
}

export default Header;
